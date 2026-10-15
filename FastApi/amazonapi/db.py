from pathlib import Path

from dotenv import load_dotenv
from prisma import Prisma

load_dotenv(dotenv_path=Path(__file__).with_name(".env"))

prisma = Prisma()
