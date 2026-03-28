import React, { useState } from "react";
import axios from "axios";

export default function Onboarding({ setUserId }) {
  const [income, setIncome] = useState("");
  const [goals, setGoals] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:8001/user/create", {
      income: parseInt(income),
      goals: goals.split(","),
      interests: interests.split(","),
    });

    setUserId(res.data.user_id);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
      <h1 className="text-2xl font-semibold mb-4">
        💰 AI Financial Concierge
      </h1>

      <p className="text-gray-500 mb-6">
        Welcome to your personalized financial guide
      </p>

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        placeholder="Monthly Income"
        onChange={(e) => setIncome(e.target.value)}
      />

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        placeholder="Goals (saving, investing)"
        onChange={(e) => setGoals(e.target.value)}
      />

      <input
        className="w-full p-3 mb-5 border rounded-xl"
        placeholder="Interests (stocks, mutual funds)"
        onChange={(e) => setInterests(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-3 rounded-xl w-full hover:bg-green-600 transition"
      >
        Start My Journey
      </button>
    </div>
  );
}