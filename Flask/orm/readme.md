# Flask PostgreSQL inventory API

This project uses Flask routes, the custom data-access class in `orm.py`, and
PostgreSQL via `psycopg2`.

## Setup

From this directory:

```bash
pipenv install flask psycopg2-binary python-dotenv
cp .env.example .env
```

Edit `.env` with your PostgreSQL host, port, database name, user, and password.
Do not commit or share `.env`. Create the `inventory` database in PostgreSQL
before running the commands below, for example in `psql`:

```sql
CREATE DATABASE inventory;
```

Initialize the table once, then start the Flask development server:

```bash
pipenv run flask --app app init-db
pipenv run flask --app app run --debug
```

You can also activate the environment first with `pipenv shell`, then run
`flask --app app init-db` and `flask --app app run --debug`.

Routes:

- `GET /` returns a greeting.
- `GET /inventory` lists inventory items.
- `POST /inventory` adds an item. Send JSON with `name`, `qty`, `buying_price`,
  and `selling_price`.

`psycopg2-binary` is the installable PostgreSQL driver package; code imports it
as `psycopg2`. `python-dotenv` reads the local `.env` file.
