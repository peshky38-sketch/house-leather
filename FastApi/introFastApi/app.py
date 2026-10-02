from fastapi import FastAPI
from sqlalchemy import select

from db import SessionLocal
from orm import User

app = FastAPI(title="Intro FastAPI")


@app.get("/")
def home():
    return {"message": "Hello world"}


@app.get("/users")
def list_users():
    with SessionLocal() as session:
        return [
            {"id": user.id, "name": user.name, "email": user.email}
            for user in session.scalars(select(User))
        ]
