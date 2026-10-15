# Amazon API MVP

A small storefront backend built with FastAPI, PostgreSQL, and Prisma Client
Python. It supports member signup/login, product search and creation, product
image uploads to Cloudflare Images, and authenticated orders.

## Project layout

- `app.py` creates the FastAPI app, opens/closes Prisma, and registers routes.
- `db.py` owns the single Prisma client shared by route modules.
- `auth.py` hashes passwords and validates signed bearer tokens.
- `cloud.py` uploads and removes product images through Cloudflare Images.
- `seed.py` creates the initial client-order statuses at startup.
- `routes/` separates member, product, image, client-order, and cart-item endpoints.
- `prisma/schema.prisma` maps PostgreSQL tables to Prisma models.
- `database.sql` creates the tables in Beekeeper Studio; `drawsql.dbml` is the
  matching importable database diagram definition.
- `.env` holds local connection credentials and API secrets; it is ignored by
  Git and must never be committed.

## 1. Prerequisites

Install Python 3.12, Pipenv, PostgreSQL, and Node.js 22. The `.nvmrc` file
selects Node 22 for tools managed by nvm. From this folder, activate that
version and install the Python dependencies:

```bash
nvm install
nvm use
pipenv install
cp .env.example .env
```

Create a PostgreSQL database called `amazonapi` before continuing.
Edit `.env` with your PostgreSQL credentials, a long random `JWT_SECRET`, and
Cloudflare account/API token values. Keep `.env` private. You can run the API
without Cloudflare configured, but the image-upload endpoint will return 503.

## 2. Create the database in Beekeeper Studio

Connect Beekeeper Studio to the `amazonapi` PostgreSQL database, open a SQL
editor, and run the contents of `database.sql`. It creates the tables, foreign
keys, unique constraints, indexes, and initial order statuses. The password
column stores only a one-way Argon2 hash, never a raw password.

To draw the schema in DrawSQL, import `drawsql.dbml` as DBML. It describes the
same tables and relationships. The diagram is a design/communication aid; SQL
is what creates the live database.

## 3. Configure and generate Prisma

The Prisma schema is already present. Its generator uses the Prisma Client
Python provider and enables Decimal support so product prices remain exact
money values rather than binary floating-point numbers.

```bash
pipenv run prisma validate
pipenv run prisma generate
```

If you created the database from `database.sql` and want Prisma to inspect it,
you can run `pipenv run prisma db pull` before `generate`. Introspection reads
the live database and rewrites `schema.prisma`; it does not create tables. The
schema in this project is already the intended mapping, so pulling is optional
and should only be done after the SQL schema is in place.

## 4. Run and try the API

```bash
pipenv run python app.py
```

Open `http://127.0.0.1:5000/docs` for interactive API documentation. On
startup, the app connects to PostgreSQL and ensures `Pending`, `Placed`,
`Paid`, and `Cancelled` order statuses exist. It disconnects Prisma on shutdown.

### Main endpoints

- `POST /member/sign-up` creates a member and password hash.
- `POST /member/login` checks the password and returns a JWT bearer token.
- `GET /product?q=...` searches product names and descriptions; `GET /product/{id}` retrieves one product.
- `POST /product/` creates a product; send `Authorization: Bearer <token>`.
- `POST /product_image/` uploads a multipart image for a product to Cloudflare Images; requires `product_id` as a form field.
- `GET /product_image/{product_id}` lists that product's saved image links.
- `GET /client_order/active` retrieves or creates the logged-in member's pending cart.
- `POST /client_order_product/` adds a product to that cart; `PATCH` changes quantity and `DELETE` removes a line.
- `POST /client_order/{id}/place` submits the cart and atomically decrements stock.
- `GET /client_order/` lists only the logged-in member's client orders.

Create a product JSON body like:

```json
{
  "name": "Leather wallet",
  "description": "Handmade full-grain wallet",
  "selling_price": "45.00",
  "buying_price": "20.00",
  "qty": 12
}
```

Add an item to the active cart with:

```json
{
  "product_id": 1,
  "qty": 2
}
```

## Why these pieces are used

FastAPI validates request data and publishes OpenAPI docs automatically.
Pydantic rejects malformed emails, short passwords, invalid prices, and
non-positive order quantities at the HTTP boundary. Prisma maps Python calls
to PostgreSQL queries and keeps related writes together in transactions.
Foreign keys and unique constraints protect relationships and prevent
duplicate accounts. JWTs let clients authenticate later requests without
resending passwords. Cloudflare Images stores image files externally while
PostgreSQL stores each image's URL and product association.

This is an MVP, not a complete production checkout: it has no payment
processor, admin roles, email verification, password reset, or order
cancellation/refund flow. Before public deployment, add those controls, rate
limiting, HTTPS, and production secret management.
