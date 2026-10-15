from db import prisma

ORDER_STATUSES = {
    "Pending": "Shopping cart awaiting submission",
    "Placed": "Order submitted and awaiting fulfillment",
    "Paid": "Payment received",
    "Cancelled": "Order cancelled",
}


async def seed_status() -> None:
    for name, description in ORDER_STATUSES.items():
        await prisma.client_order_status.upsert(
            where={"name": name},
            data={
                "create": {"name": name, "description": description},
                "update": {"description": description},
            },
        )
