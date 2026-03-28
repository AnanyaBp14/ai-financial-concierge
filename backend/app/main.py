from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chat, user, recommend

app = FastAPI()

# ✅ ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router, prefix="/chat")
app.include_router(user.router, prefix="/user")
app.include_router(recommend.router, prefix="/recommend")

@app.get("/")
def home():
    return {"status": "Backend running 🚀"}