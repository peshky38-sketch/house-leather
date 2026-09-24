# IntroFastAPI

A first FastAPI application.

## Project tree

```text
IntroFastAPI/
├── Pipfile
├── Pipfile.lock
├── app.py
└── readme.md
```

## Install

From this directory:

```bash
pipenv install
```

This installs FastAPI and its standard tools, including Uvicorn.

## Run in development mode

```bash
pipenv run fastapi dev app.py
```

The server starts at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Endpoints

- `GET /` returns `{ "message": "Hello world" }`.
- `/docs` opens FastAPI's interactive Swagger documentation.
- `/redoc` opens the ReDoc documentation.
