chat_memory = {}

def get_history(user_id):
    return chat_memory.get(user_id, [])

def save_message(user_id, role, message):
    if user_id not in chat_memory:
        chat_memory[user_id] = []

    chat_memory[user_id].append({
        "role": role,
        "message": message
    })