from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

from db import Database
from orm import Inventory

inventory = Inventory(Database())


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncIterator[None]:
    inventory.create_table()
    yield


class InventoryItemCreate(BaseModel):
    name: str = Field(min_length=1, max_length=250)
    qty: int = Field(ge=0)
    buying_price: int = Field(ge=0)
    selling_price: int = Field(ge=0)


app = FastAPI(title="Inventory API", lifespan=lifespan)


@app.get("/")
def home() -> dict[str, str]:
    return {"message": "Hello world"}


@app.get("/inventory")
def list_inventory() -> list[dict[str, object]]:
    return inventory.get_all_items()


@app.post("/inventory", status_code=201)
def add_inventory(item: InventoryItemCreate) -> dict[str, object]:
    name = item.name.strip()
    if not name:
        raise HTTPException(status_code=422, detail="name must not be blank.")

    new_item = inventory.add_item(
        name=name,
        qty=item.qty,
        buying_price=item.buying_price,
        selling_price=item.selling_price,
    )
    return {"message": "Item added successfully.", "item": new_item}
