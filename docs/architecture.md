# 🧠 AI Financial Concierge – Architecture

## 1. Overview

The system is designed as a modular AI-driven concierge that connects user input to personalized financial guidance and ET ecosystem recommendations.

---

## 2. Components

### 🟢 Frontend (React)
- Chat-based UI
- User onboarding (income, goals, interests)
- Sends requests to backend API

---

### 🔵 Backend (FastAPI)
Acts as the central orchestrator:
- Handles API requests
- Routes logic to services
- Maintains user session

---

### 🟡 Services Layer

#### 1. Chat Service
- Processes user queries
- Maintains conversation flow

#### 2. Profile Service
- Stores user data (income, goals, interests)
- Builds user persona

#### 3. Recommendation Engine
- Maps user profile → financial suggestions
- Maps to ET ecosystem products

---

### 🧠 Memory Layer
- Stores recent conversation history
- Enables context-aware responses

---

### 📂 Data Layer
- JSON-based storage
- Users and content stored locally

---

## 3. Flow

1. User enters profile
2. Profile stored in system
3. User asks a question
4. Backend:
   - Retrieves profile
   - Retrieves chat history
   - Generates response
5. Recommendation engine maps:
   - User → ET products
6. Response sent to frontend

---

## 4. Agent Roles

| Agent | Role |
|------|------|
| Concierge Agent | Main interaction with user |
| Profile Agent | Understands user background |
| Recommendation Agent | Suggests ET services |
| Memory Agent | Maintains conversation context |

---

## 5. Error Handling

- API failure → fallback logic
- Invalid input → default safe response
- Missing profile → onboarding trigger

---

## 6. Scalability

Future upgrades:
- Replace JSON with database
- Integrate real ET APIs
- Add real-time recommendation engine

---

## 7. Key Design Principle

"Simple, modular, and extensible architecture for real-world deployment"
