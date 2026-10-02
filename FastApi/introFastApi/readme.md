# Intro FastAPI

This introductory app uses FastAPI, SQLAlchemy, and a local SQLite database.

## Setup and run

From this directory:

```bash
pipenv install
pipenv shell
fastapi dev app.py
```

Or start without activating the environment:

```bash
pipenv run fastapi dev app.py
```

The app serves `GET /` and `GET /users`. Interactive API documentation is
available at `/docs`.
