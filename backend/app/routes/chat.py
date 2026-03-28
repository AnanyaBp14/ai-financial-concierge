from fastapi import APIRouter
import json
from app.services.llm_service import generate_response
from app.utils.memory import get_history, save_message

router = APIRouter()
USER_DB = "data/users.json"

@router.post("/")
def chat(data: dict):
    try:
        message = data.get("message")
        user_id = data.get("user_id")

        # Load user
        with open(USER_DB) as f:
            users = json.load(f)

        user = users.get(user_id, {})

        income = user.get("income", 0)
        goals = user.get("goals", [])
        interests = user.get("interests", [])

        # 🧠 MEMORY
        history = get_history(user_id)
        history_text = ""

        for h in history[-5:]:
            history_text += f"{h['role']}: {h['message']}\n"

        # 🔥 PURE AI PROMPT
        prompt = f"""
You are an intelligent AI Financial Concierge.

User Profile:
- Income: {income}
- Goals: {goals}
- Interests: {interests}

Conversation History:
{history_text}

User Question:
{message}

Instructions:
- Answer ANY type of question (no restrictions)
- Understand intent automatically
- If it's a follow-up, continue context
- Give detailed, helpful, natural responses
- Start with: "✨ Based on your profile,"
- Be conversational, not robotic
"""

        response = generate_response(prompt)

        # save memory
        save_message(user_id, "user", message)
        save_message(user_id, "assistant", response)

        return {"response": response.strip()}

    except Exception as e:
        return {"error": str(e)}