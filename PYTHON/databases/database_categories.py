"""A beginner-friendly comparison of relational and non-relational databases."""

import json
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).parent
DOCUMENT_FILE = BASE_DIR / "customers.json"


CATEGORIES = {
    "Relational databases": {
        "advantages": [
            "Relationships between tables are clear.",
            "Queries are easy to write and understand.",
            "They use SQL (Structured Query Language).",
        ],
        "disadvantages": [
            "Tables use a defined structure and schema.",
            "Changing the schema can be difficult for changing data.",
        ],
        "examples": [
            "SQLite",
            "PostgreSQL",
            "MySQL",
            "CockroachDB (useful for disaster recovery)",
            "Cassandra",
        ],
    },
    "Non-relational databases": {
        "advantages": [
            "They can store huge amounts of data, such as MongoDB collections.",
            "They can store unstructured or flexible data.",
            "They work well for IoT devices and sensor data.",
            "They can support offline applications and later synchronisation, such as CouchDB and PouchDB.",
            "They can store documents, such as MongoDB documents and GridFS files.",
        ],
        "disadvantages": [
            "Related data can be difficult to store and synchronise.",
            "Relationships may need to be managed manually by the application.",
        ],
        "examples": [
            "MongoDB",
            "DynamoDB (AWS)",
            "CouchDB server with PouchDB",
            "PocketBase",
            "Redis (often used as a cache)",
        ],
    },
}


def print_categories():
    """Print the requested database comparison."""
    print("DATABASE CATEGORIES")
    print("=" * 20)
    print(
        "Relational databases are generally more popular for structured business data.\n"
    )

    for category, details in CATEGORIES.items():
        print(category)
        print("-" * len(category))
        print("Advantages:")
        for item in details["advantages"]:
            print(f"  - {item}")
        print("Disadvantages:")
        for item in details["disadvantages"]:
            print(f"  - {item}")
        print("Examples:")
        print(f"  {', '.join(details['examples'])}\n")


def relational_example():
    """Create related tables and query them with SQL."""
    connection = sqlite3.connect(":memory:")
    connection.row_factory = sqlite3.Row

    try:
        connection.execute("PRAGMA foreign_keys = ON")
        connection.executescript("""
            CREATE TABLE customers (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL
            );

            CREATE TABLE orders (
                id INTEGER PRIMARY KEY,
                customer_id INTEGER NOT NULL,
                product TEXT NOT NULL,
                FOREIGN KEY (customer_id) REFERENCES customers (id)
            );
            """)
        connection.execute(
            "INSERT INTO customers (name, email) VALUES (?, ?)",
            ("Rachel Kanyoro", "rachel@example.com"),
        )
        customer_id = connection.execute(
            "SELECT id FROM customers WHERE email = ?", ("rachel@example.com",)
        ).fetchone()["id"]
        connection.execute(
            "INSERT INTO orders (customer_id, product) VALUES (?, ?)",
            (customer_id, "Database course"),
        )
        connection.commit()

        row = connection.execute("""
            SELECT customers.name, customers.email, orders.product
            FROM customers
            JOIN orders ON orders.customer_id = customers.id
            """).fetchone()
        return dict(row)
    finally:
        connection.close()


def non_relational_example():
    """Store and read a flexible document without a fixed table schema."""
    documents = [
        {
            "id": 1,
            "name": "Rachel Kanyoro",
            "email": "rachel@example.com",
            "devices": [{"type": "temperature_sensor", "seconds": 10}],
            "offline": True,
        }
    ]
    DOCUMENT_FILE.write_text(json.dumps(documents, indent=2), encoding="utf-8")
    return json.loads(DOCUMENT_FILE.read_text(encoding="utf-8"))[0]


def main():
    print_categories()

    print("RELATIONAL EXAMPLE: SQL JOIN")
    print("-" * 30)
    print(relational_example())

    print("\nNON-RELATIONAL EXAMPLE: JSON DOCUMENT")
    print("-" * 36)
    print(non_relational_example())
    print(f"Saved document to {DOCUMENT_FILE}")


if __name__ == "__main__":
    main()
