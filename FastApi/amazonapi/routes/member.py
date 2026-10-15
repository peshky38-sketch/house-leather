from typing import Any

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr, Field

from auth import create_access_token, hash_password, verify_password
from db import prisma

router = APIRouter()


class SignUpInput(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class LoginInput(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=128)


def member_response(member: Any) -> dict[str, str]:
    return {"id": member.id, "name": member.name, "email": member.email}


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: SignUpInput) -> dict[str, Any]:
    email = str(payload.email).lower()
    existing = await prisma.member.find_unique(where={"email": email})
    if existing:
        raise HTTPException(status_code=409, detail="Email is already registered.")

    async with prisma.tx() as transaction:
        member = await transaction.member.create(
            data={"name": payload.name.strip(), "email": email}
        )
        await transaction.member_password.create(
            data={
                "member_id": member.id,
                "password": hash_password(payload.password),
            }
        )

    return {
        "message": "Account created successfully.",
        "member": member_response(member),
    }


@router.post("/login")
async def login(payload: LoginInput) -> dict[str, Any]:
    email = str(payload.email).lower()
    member = await prisma.member.find_unique(
        where={"email": email}, include={"member_password": True}
    )
    if (
        member is None
        or member.member_password is None
        or not verify_password(payload.password, member.member_password.password)
    ):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    return {
        "access_token": create_access_token(member.id),
        "token_type": "bearer",
        "member": member_response(member),
    }
