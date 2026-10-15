import os

import httpx


class CloudflareError(RuntimeError):
    pass


def _cloudflare_config() -> tuple[str, str, str]:
    account_id = os.getenv("CLOUDFLARE_ACCOUNT_ID")
    api_token = os.getenv("CLOUDFLARE_API_TOKEN")
    if not account_id or not api_token:
        raise CloudflareError("Cloudflare Images is not configured.")

    endpoint = (
        "https://api.cloudflare.com/client/v4/accounts/" f"{account_id}/images/v1"
    )
    return endpoint, api_token, account_id


async def upload_to_cloud(
    content: bytes, filename: str, content_type: str
) -> dict[str, str]:
    endpoint, api_token, _ = _cloudflare_config()
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            response = await client.post(
                endpoint,
                headers={"Authorization": f"Bearer {api_token}"},
                files={"file": (filename, content, content_type)},
            )
            response.raise_for_status()
        result = response.json()["result"]
        return {"id": result["id"], "url": result["variants"][0]}
    except (httpx.HTTPError, KeyError, IndexError, ValueError) as error:
        raise CloudflareError("Cloudflare Images upload failed.") from error


async def delete_from_cloud(image_id: str) -> None:
    endpoint, api_token, _ = _cloudflare_config()
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            response = await client.delete(
                f"{endpoint}/{image_id}",
                headers={"Authorization": f"Bearer {api_token}"},
            )
            response.raise_for_status()
    except httpx.HTTPError as error:
        raise CloudflareError("Cloudflare Images deletion failed.") from error
