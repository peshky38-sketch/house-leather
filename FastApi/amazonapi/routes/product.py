from decimal import Decimal
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Query, status
from pydantic import BaseModel, Field

from auth import get_current_member
from db import prisma

router = APIRouter()


class ProductInput(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    description: str | None = None
    selling_price: Decimal = Field(gt=0, max_digits=12, decimal_places=2)
    buying_price: Decimal = Field(ge=0, max_digits=12, decimal_places=2)
    qty: int = Field(ge=0)


@router.get("/")
async def list_products(
    q: str | None = Query(default=None, min_length=1, max_length=100),
) -> list[Any]:
    where = None
    if q:
        where = {
            "OR": [
                {"name": {"contains": q, "mode": "insensitive"}},
                {"description": {"contains": q, "mode": "insensitive"}},
            ]
        }
    return await prisma.product.find_many(where=where, include={"images": True})


@router.get("/{product_id}")
async def get_product(product_id: int) -> Any:
    product = await prisma.product.find_unique(
        where={"id": product_id}, include={"images": True}
    )
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found.")
    return product


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(
    payload: ProductInput,
    _: Any = Depends(get_current_member),
) -> Any:
    return await prisma.product.create(
        data={
            "name": payload.name.strip(),
            "description": payload.description,
            "selling_price": payload.selling_price,
            "buying_price": payload.buying_price,
            "qty": payload.qty,
        }
    )
