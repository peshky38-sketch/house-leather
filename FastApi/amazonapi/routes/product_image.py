from typing import Any

from fastapi import APIRouter, File, Form, HTTPException, UploadFile, status

from cloud import CloudflareError, delete_from_cloud, upload_to_cloud
from db import prisma

router = APIRouter()
MAX_IMAGE_BYTES = 10 * 1024 * 1024
IMAGE_CONTENT_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}


@router.post("/", status_code=status.HTTP_201_CREATED)
async def upload_product_image(
    product_id: int = Form(gt=0),
    image: UploadFile = File(),
) -> Any:
    if image.content_type not in IMAGE_CONTENT_TYPES:
        raise HTTPException(
            status_code=415, detail="Upload a JPEG, PNG, WebP, or GIF image."
        )

    content = await image.read(MAX_IMAGE_BYTES + 1)
    if len(content) > MAX_IMAGE_BYTES:
        raise HTTPException(status_code=413, detail="Image must be 10 MB or smaller.")

    product = await prisma.product.find_unique(where={"id": product_id})
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found.")

    try:
        cloud_image = await upload_to_cloud(
            content,
            image.filename or "product-image",
            image.content_type or "application/octet-stream",
        )
    except CloudflareError as error:
        raise HTTPException(status_code=502, detail=str(error)) from error

    try:
        return await prisma.product_image.create(
            data={
                "product_id": product_id,
                "cloudflare_image_id": cloud_image["id"],
                "image_url": cloud_image["url"],
                "is_default": False,
            }
        )
    except Exception:
        try:
            await delete_from_cloud(cloud_image["id"])
        except CloudflareError:
            pass
        raise


@router.get("/{product_id}")
async def list_product_images(product_id: int) -> list[Any]:
    return await prisma.product_image.find_many(
        where={"product_id": product_id}, order={"created_at": "asc"}
    )
