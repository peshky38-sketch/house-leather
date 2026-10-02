from flask import Flask, jsonify, request

from db import Database
from orm import Inventory

app = Flask(__name__)
inventory = Inventory(Database())


@app.cli.command("init-db")
def init_db() -> None:
    inventory.create_table()
    print("Inventory table is ready.")


@app.get("/")
def home():
    return jsonify(message="Hello world")


@app.get("/inventory")
def list_inventory():
    return jsonify(inventory.get_all_items())


@app.post("/inventory")
def add_inventory():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify(error="Request body must be a JSON object."), 400

    name = data.get("name")
    if not isinstance(name, str) or not name.strip() or len(name.strip()) > 250:
        return (
            jsonify(error="name must be a non-empty string of at most 250 characters."),
            400,
        )

    values: dict[str, int] = {}
    for field in ("qty", "buying_price", "selling_price"):
        value = data.get(field)
        if isinstance(value, bool) or not isinstance(value, int) or value < 0:
            return jsonify(error=f"{field} must be a non-negative integer."), 400
        values[field] = value

    item = inventory.add_item(
        name.strip(),
        values["qty"],
        values["buying_price"],
        values["selling_price"],
    )
    return jsonify(message="Item added successfully.", item=item), 201
