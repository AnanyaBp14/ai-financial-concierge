def get_recommendations(user_id):
    import json

    with open("data/users.json") as f:
        users = json.load(f)

    user = users.get(user_id, {})
    interests = user.get("interests", [])

    recommendations = []

    if "stocks" in interests:
        recommendations.append({
            "title": "📈 ET Markets",
            "reason": "Based on your interest in stocks"
        })

    if "mutual funds" in interests:
        recommendations.append({
            "title": "💰 Mutual Fund Analyzer",
            "reason": "Helps you grow savings safely"
        })

    return {
        "recommendations": recommendations
    }