# FastAPI

## Projects

- `introFastApi/` is the introductory FastAPI app using SQLAlchemy and SQLite.
- `orm/` is a separate inventory API using FastAPI, a custom data-access class,
  and PostgreSQL.

For the introductory app, run these commands from `introFastApi/`:

```bash
pipenv install
pipenv run fastapi dev app.py
```

It serves `/` and `/users`; API documentation is at `/docs`.

For PostgreSQL inventory setup, follow the separate instructions in
[`orm/readme.md`](./orm/readme.md). Each folder has its own Pipenv environment
and dependencies.
