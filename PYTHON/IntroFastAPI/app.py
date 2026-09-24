from fastapi import FastAPI

app = FastAPI(title="Intro FastAPI")


@app.get("/")
def home():
    return {"message": "Hello world"}
