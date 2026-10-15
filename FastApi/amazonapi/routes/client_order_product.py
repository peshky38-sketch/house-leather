from decimal import Decimal
from typing import Any

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from auth import get_current_member
from db import prisma
from routes.client_order import get_or_create_active_order

router = APIRouter()


class ClientOrderProductInput(BaseModel):
    product_id: int = Field(gt=0)
    qty: int = Field(gt=0)


class ClientOrderProductUpdate(BaseModel):
    qty: int = Field(gt=0)


async def recalculate_totals(transaction: Any, client_order_id: int) -> Any:
    items = await transaction.client_order_product.find_many(
        where={"client_order_id": client_order_id}
    )
    total_selling = sum((item.total_selling_price for item in items), Decimal("0.00"))
    total_buying = sum((item.total_buying_price for item in items), Decimal("0.00"))
    return await transaction.client_order.update(
        where={"id": client_order_id},
        data={
            "total_selling_price": total_selling,
            "total_buying_price": total_buying,
            "total_profit": total_selling - total_buying,
        },
    )


async def get_owned_pending_item(transaction: Any, item_id: int, member_id: str) -> Any:
    item = await transaction.client_order_product.find_unique(
        where={"id": item_id}, include={"client_order": True, "product": True}
    )
    if item is None or item.client_order.member_id != member_id:
        raise HTTPException(status_code=404, detail="Client order product not found.")

    pending = await transaction.client_order_status.find_unique(
        where={"name": "Pending"}
    )
    if pending is None or item.client_order.client_order_status_id != pending.id:
        raise HTTPException(
            status_code=409, detail="Only active cart items can be changed."
        )
    return item


@router.post("/", status_code=201)
async def add_client_order_product(
    payload: ClientOrderProductInput,
    member: Any = Depends(get_current_member),
) -> Any:
    async with prisma.tx() as transaction:
        order = await get_or_create_active_order(transaction, member.id)
        product = await transaction.product.find_unique(
            where={"id": payload.product_id}
        )
        if product is None:
            raise HTTPException(status_code=404, detail="Product not found.")

        existing = await transaction.client_order_product.find_first(
            where={"client_order_id": order.id, "product_id": product.id}
        )
        quantity = payload.qty + (existing.qty if existing else 0)
        if quantity > product.qty:
            raise HTTPException(status_code=409, detail="Insufficient product stock.")

        line_data = {
            "qty": quantity,
            "unit_selling_price": product.selling_price,
            "unit_buying_price": product.buying_price,
            "total_selling_price": product.selling_price * quantity,
            "total_buying_price": product.buying_price * quantity,
        }
        if existing:
            item = await transaction.client_order_product.update(
                where={"id": existing.id}, data=line_data
            )
        else:
            item = await transaction.client_order_product.create(
                data={
                    **line_data,
                    "client_order_id": order.id,
                    "product_id": product.id,
                }
            )

        await recalculate_totals(transaction, order.id)
    return item


@router.patch("/{item_id}")
async def update_client_order_product(
    item_id: int,
    payload: ClientOrderProductUpdate,
    member: Any = Depends(get_current_member),
) -> Any:
    async with prisma.tx() as transaction:
        item = await get_owned_pending_item(transaction, item_id, member.id)
        if payload.qty > item.product.qty:
            raise HTTPException(status_code=409, detail="Insufficient product stock.")
        updated = await transaction.client_order_product.update(
            where={"id": item_id},
            data={
                "qty": payload.qty,
                "total_selling_price": item.unit_selling_price * payload.qty,
                "total_buying_price": item.unit_buying_price * payload.qty,
            },
        )
        await recalculate_totals(transaction, item.client_order_id)
    return updated


@router.delete("/{item_id}", status_code=204)
async def delete_client_order_product(
    item_id: int,
    member: Any = Depends(get_current_member),
) -> None:
    async with prisma.tx() as transaction:
        item = await get_owned_pending_item(transaction, item_id, member.id)
        await transaction.client_order_product.delete(where={"id": item_id})
        await recalculate_totals(transaction, item.client_order_id)
