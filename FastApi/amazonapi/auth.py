import os
from datetime import datetime, timedelta, timezone
from typing import Any

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash

from db import prisma

password_hash = PasswordHash.recommended()
bearer_scheme = HTTPBearer()


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, hashed_password: str) -> bool:
    return password_hash.verify(password, hashed_password)


def create_access_token(member_id: str) -> str:
    secret = os.getenv("JWT_SECRET")
    if not secret:
        raise RuntimeError("JWT_SECRET must be configured before starting the API.")

    expires = datetime.now(timezone.utc) + timedelta(
        minutes=int(os.getenv("JWT_EXPIRE_MINUTES", "30"))
    )
    return jwt.encode(
        {"sub": member_id, "exp": expires},
        secret,
        algorithm=os.getenv("JWT_ALGORITHM", "HS256"),
    )


async def get_current_member(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
) -> Any:
    unauthorized = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired access token.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    secret = os.getenv("JWT_SECRET")
    if not secret:
        raise HTTPException(status_code=500, detail="JWT_SECRET is not configured.")

    try:
        payload = jwt.decode(
            credentials.credentials,
            secret,
            algorithms=[os.getenv("JWT_ALGORITHM", "HS256")],
        )
        member_id = payload.get("sub")
        if not isinstance(member_id, str):
            raise unauthorized
    except InvalidTokenError as error:
        raise unauthorized from error

    member = await prisma.member.find_unique(where={"id": member_id})
    if member is None:
        raise unauthorized
    return member
