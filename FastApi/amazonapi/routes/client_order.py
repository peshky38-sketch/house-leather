from decimal import Decimal
from typing import Any

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_member
from db import prisma

router = APIRouter()
ORDER_INCLUDE = {
    "client_order_status": True,
    "client_order_products": {"include": {"product": {"include": {"images": True}}}},
}


async def get_or_create_active_order(transaction: Any, member_id: str) -> Any:
    pending_status = await transaction.client_order_status.find_unique(
        where={"name": "Pending"}
    )
    if pending_status is None:
        raise HTTPException(
            status_code=500, detail="Order statuses are not configured."
        )

    order = await transaction.client_order.find_first(
        where={"member_id": member_id, "client_order_status_id": pending_status.id}
    )
    if order is None:
        order = await transaction.client_order.create(
            data={
                "member_id": member_id,
                "client_order_status_id": pending_status.id,
                "total_selling_price": Decimal("0.00"),
                "total_buying_price": Decimal("0.00"),
                "total_profit": Decimal("0.00"),
                "total_paid": Decimal("0.00"),
            }
        )
    return order


@router.get("/")
async def list_client_orders(member: Any = Depends(get_current_member)) -> list[Any]:
    return await prisma.client_order.find_many(
        where={"member_id": member.id},
        include=ORDER_INCLUDE,
        order={"created_at": "desc"},
    )


@router.get("/active")
async def get_active_client_order(member: Any = Depends(get_current_member)) -> Any:
    async with prisma.tx() as transaction:
        order = await get_or_create_active_order(transaction, member.id)
    return await prisma.client_order.find_unique(
        where={"id": order.id}, include=ORDER_INCLUDE
    )


@router.get("/{client_order_id}")
async def get_client_order(
    client_order_id: int,
    member: Any = Depends(get_current_member),
) -> Any:
    order = await prisma.client_order.find_first(
        where={"id": client_order_id, "member_id": member.id},
        include=ORDER_INCLUDE,
    )
    if order is None:
        raise HTTPException(status_code=404, detail="Client order not found.")
    return order


@router.post("/{client_order_id}/place")
async def place_client_order(
    client_order_id: int,
    member: Any = Depends(get_current_member),
) -> Any:
    async with prisma.tx() as transaction:
        pending_status = await transaction.client_order_status.find_unique(
            where={"name": "Pending"}
        )
        placed_status = await transaction.client_order_status.find_unique(
            where={"name": "Placed"}
        )
        order = await transaction.client_order.find_first(
            where={
                "id": client_order_id,
                "member_id": member.id,
                "client_order_status_id": pending_status.id if pending_status else -1,
            }
        )
        if order is None:
            raise HTTPException(
                status_code=404, detail="Active client order not found."
            )
        if placed_status is None:
            raise HTTPException(
                status_code=500, detail="Placed status is not configured."
            )

        items = await transaction.client_order_product.find_many(
            where={"client_order_id": order.id}
        )
        if not items:
            raise HTTPException(status_code=400, detail="Cannot place an empty order.")

        for item in items:
            stock_update = await transaction.product.update_many(
                where={"id": item.product_id, "qty": {"gte": item.qty}},
                data={"qty": {"decrement": item.qty}},
            )
            if stock_update.count != 1:
                raise HTTPException(
                    status_code=409,
                    detail=f"Insufficient stock for product {item.product_id}.",
                )

        await transaction.client_order.update(
            where={"id": order.id},
            data={"client_order_status_id": placed_status.id},
        )

    return await prisma.client_order.find_unique(
        where={"id": client_order_id}, include=ORDER_INCLUDE
    )
