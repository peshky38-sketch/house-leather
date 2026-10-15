from contextlib import asynccontextmanager
from typing import AsyncIterator

import uvicorn
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from auth import get_current_member
from db import prisma
from routes import (
    client_order,
    client_order_product,
    member,
    product,
    product_image,
)
from seed import seed_status


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncIterator[None]:
    await prisma.connect()
    try:
        await seed_status()
        yield
    finally:
        await prisma.disconnect()


app = FastAPI(title="Amazon API", version="0.1.0", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(member.router, prefix="/member", tags=["members"])
app.include_router(
    product.router,
    prefix="/product",
    tags=["products"],
    dependencies=[Depends(get_current_member)],
)
app.include_router(
    product_image.router,
    prefix="/product_image",
    tags=["product images"],
    dependencies=[Depends(get_current_member)],
)
app.include_router(
    client_order_product.router,
    prefix="/client_order_product",
    tags=["client order products"],
    dependencies=[Depends(get_current_member)],
)
app.include_router(
    client_order.router,
    prefix="/client_order",
    tags=["client orders"],
    dependencies=[Depends(get_current_member)],
)


@app.get("/")
async def home() -> dict[str, str]:
    return {"message": "Amazon API is running"}


if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="127.0.0.1",
        port=5000,
        reload=True,
        reload_excludes=["uploads/*"],
    )
