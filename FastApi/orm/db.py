import os
from contextlib import contextmanager
from pathlib import Path
from typing import Iterator

import psycopg2
from dotenv import load_dotenv
from psycopg2.extras import RealDictCursor

load_dotenv(dotenv_path=Path(__file__).with_name(".env"))


class Database:
    def _connection_config(self) -> dict[str, str | int]:
        required = ("DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASSWORD")
        missing = [key for key in required if not os.getenv(key)]
        if missing:
            raise RuntimeError(
                f"Missing database environment variable(s): {', '.join(missing)}. "
                "Copy .env.example to .env and set the database values."
            )

        try:
            port = int(os.environ["DB_PORT"])
        except ValueError as error:
            raise ValueError("DB_PORT must be an integer.") from error

        return {
            "host": os.environ["DB_HOST"],
            "port": port,
            "dbname": os.environ["DB_NAME"],
            "user": os.environ["DB_USER"],
            "password": os.environ["DB_PASSWORD"],
        }

    @contextmanager
    def get_cursor(self) -> Iterator[RealDictCursor]:
        connection = psycopg2.connect(**self._connection_config())
        cursor = None
        try:
            cursor = connection.cursor(cursor_factory=RealDictCursor)
            yield cursor
            connection.commit()
        except Exception:
            connection.rollback()
            raise
        finally:
            try:
                if cursor is not None:
                    cursor.close()
            finally:
                connection.close()
