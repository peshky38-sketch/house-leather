from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from orm import Base

DATABASE_URL = f"sqlite:///{Path(__file__).with_name('db.db')}"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)

Base.metadata.create_all(bind=engine)