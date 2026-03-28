import React, { useState } from "react";
import axios from "axios";

function UserForm({ setUserId }) {
  const [income, setIncome] = useState("");
  const [goals, setGoals] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://127.0.0.1:8001/user/create", {
      income: parseInt(income),
      goals: goals.split(","),
      interests: interests.split(","),
    });

    setUserId(res.data.user_id);
  };

  return (
    <div>
      <h3>Enter Your Details</h3>
      <input placeholder="Income" onChange={(e) => setIncome(e.target.value)} />
      <br />
      <input placeholder="Goals (comma separated)" onChange={(e) => setGoals(e.target.value)} />
      <br />
      <input placeholder="Interests (stocks, mutual funds)" onChange={(e) => setInterests(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
}

export default UserForm;