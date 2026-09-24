# Categories of Databases

There are two broad categories of databases:

1. Relational databases
2. Non-relational databases

Relational databases are very popular for structured business data.

## 1. Relational databases

Relational databases store data in tables. Tables can be connected with relationships, such as a customer having many orders.

### Advantages

1. Relationships between tables are clear.
2. Queries are easy to write and understand.
3. They use SQL (Structured Query Language).

### Disadvantages

1. The schema is defined, so changing the structure can be difficult when the data changes.
2. A primary key is commonly used to identify rows. Database limits depend on the database engine; tables do not all have one universal maximum row count.

### Examples

- SQLite
- PostgreSQL
- MySQL
- CockroachDB, which supports resilient and distributed systems
- Cassandra is often listed with database examples, but technically it is a non-relational wide-column database.

## 2. Non-relational databases

Non-relational databases do not require every record to have the same table structure. They may store documents, key-value pairs, graphs, or wide columns.

### Advantages

1. They can handle huge data stores, such as MongoDB collections.
2. They can store unstructured or flexible data.
3. They are useful for IoT devices and sensor data, including frequent readings such as every 10 seconds.
4. They are useful for offline applications that synchronise later, such as CouchDB with PouchDB.
5. They can store documents. MongoDB uses documents, and GridFS can store large files.

### Disadvantages

1. Related data can be more difficult to store and synchronise.
2. Relationships may need to be managed manually by the application.

### Examples

- MongoDB
- DynamoDB from AWS
- CouchDB server with PouchDB
- PocketBase
- Redis, often used as a cache

## Run the code

No package download is required. The example uses Python's built-in `sqlite3`, `json`, and `pathlib` modules.

From the repository root, run:

```bash
python3 PYTHON/databases/database_categories.py
```

The program will:

- print the comparison;
- create temporary related SQLite tables and query them with SQL;
- write a document example to `PYTHON/databases/customers.json`.
