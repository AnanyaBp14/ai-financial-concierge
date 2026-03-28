def build_profile(data):
    return {
        "income": data.get("income"),
        "goals": data.get("goals"),
        "interests": data.get("interests")
    }