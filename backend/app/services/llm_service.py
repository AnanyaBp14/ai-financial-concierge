from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_response(prompt):
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",   # ✅ THIS WORKS
            contents=prompt
        )
        return response.text
    except Exception as e:
        return f"ERROR: {str(e)}"