from fastapi import APIRouter
import json
import os

router = APIRouter()
USER_DB = "data/users.json"

@router.post("/create")
def create_user(data: dict):
    # ensure file exists
    if not os.path.exists(USER_DB):
        with open(USER_DB, "w") as f:
            json.dump({}, f)

    # load safely
    try:
        with open(USER_DB, "r") as f:
            users = json.load(f)
    except:
        users = {}

    user_id = f"user_{len(users)+1}"
    users[user_id] = data

    with open(USER_DB, "w") as f:
        json.dump(users, f, indent=4)

    return {"user_id": user_id, "profile": data}