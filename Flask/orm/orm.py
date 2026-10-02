from db import Database


class Inventory:
    def __init__(self, database: Database) -> None:
        self.database = database

    def create_table(self) -> None:
        query = """
            CREATE TABLE IF NOT EXISTS inventory (
                id SERIAL PRIMARY KEY,
                name VARCHAR(250) NOT NULL,
                qty INTEGER NOT NULL CHECK (qty >= 0),
                buying_price INTEGER NOT NULL CHECK (buying_price >= 0),
                selling_price INTEGER NOT NULL CHECK (selling_price >= 0),
                created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        """
        with self.database.get_cursor() as cursor:
            cursor.execute(query)

    def add_item(
        self, name: str, qty: int, buying_price: int, selling_price: int
    ) -> dict[str, object]:
        query = """
            INSERT INTO inventory (name, qty, buying_price, selling_price)
            VALUES (%s, %s, %s, %s)
            RETURNING id, name, qty, buying_price, selling_price, created_at
        """
        with self.database.get_cursor() as cursor:
            cursor.execute(query, (name, qty, buying_price, selling_price))
            item = cursor.fetchone()
        return dict(item)

    def get_all_items(self) -> list[dict[str, object]]:
        query = """
            SELECT id, name, qty, buying_price, selling_price, created_at
            FROM inventory
            ORDER BY id
        """
        with self.database.get_cursor() as cursor:
            cursor.execute(query)
            return [dict(item) for item in cursor.fetchall()]
