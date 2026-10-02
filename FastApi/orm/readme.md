# FastAPI PostgreSQL inventory API

This is a separate FastAPI project from `../introFastApi/`. It uses a small
custom data-access class in `orm.py` and PostgreSQL through `psycopg2`.

## Setup

From this directory:

```bash
pipenv install "fastapi[standard]" psycopg2-binary python-dotenv
cp .env.example .env
```

Edit `.env` with your PostgreSQL host, port, database name, user, and password.
Do not commit or share `.env`. Create the `inventory` database in PostgreSQL
before starting the API, for example in `psql`:

```sql
CREATE DATABASE inventory;
```

To enter the project's environment and start the server:

```bash
pipenv shell
fastapi dev app.py
```

Or run without activating the environment:

```bash
pipenv run fastapi dev app.py
```

The API creates the `inventory` table during startup. Routes:

- `GET /inventory` lists inventory items.
- `POST /inventory` adds an item. JSON fields: `name`, `qty`, `buying_price`,
  and `selling_price`.
- `/docs` provides the interactive API documentation.

`psycopg2-binary` is the installable PostgreSQL driver package; code imports it
as `psycopg2`. `python-dotenv` reads the local `.env` file.
