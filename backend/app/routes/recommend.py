from fastapi import APIRouter
from app.services.recommender import get_recommendations

router = APIRouter()

@router.get("/{user_id}")
def recommend(user_id: str):
    return get_recommendations(user_id)