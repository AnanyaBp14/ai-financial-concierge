import React, { useState } from "react";
import axios from "axios";

export default function Chat({ userId }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const res = await axios.post("http://localhost:8001/chat/", {
      user_id: userId,
      message,
    });

    setChat([...chat, { user: message, bot: res.data.response }]);
    setMessage("");
  };

  return (
    <div className="bg-white w-full max-w-2xl h-[80vh] rounded-2xl shadow-xl flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b text-center font-semibold">
        💬 Your AI Concierge
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.map((c, i) => (
          <div key={i}>
            {/* User */}
            <div className="text-right">
              <div className="inline-block bg-green-200 p-3 rounded-xl">
                {c.user}
              </div>
            </div>

            {/* Bot */}
            <div className="text-left mt-2">
              <div className="inline-block bg-gray-100 p-3 rounded-xl whitespace-pre-line">
                {c.bot}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-2">
        <input
          className="flex-1 p-3 border rounded-xl"
          placeholder="Ask about investing, savings..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-4 rounded-xl hover:bg-green-600"
        >
          ➤
        </button>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
  <div className="bg-green-50 p-3 rounded-xl shadow">
    📈 ET Markets  
    <p className="text-sm text-gray-500">Based on your interest in stocks</p>
  </div>

  <div className="bg-green-50 p-3 rounded-xl shadow">
    💰 Mutual Fund Planner  
    <p className="text-sm text-gray-500">Helps grow savings safely</p>
  </div>
</div>
    </div>
    
  );
}