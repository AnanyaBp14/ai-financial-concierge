from pydantic import BaseModel
from typing import List

class User(BaseModel):
    income: int
    goals: List[str]
    interests: List[str]