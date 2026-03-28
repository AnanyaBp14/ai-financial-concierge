import React, { useState } from "react";
import axios from "axios";
import MessageBubble from "./MessageBubble";

function ChatBox({ userId }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const res = await axios.post("http://127.0.0.1:8001/chat/", {
      user_id: userId,
      message: message,
    });

    setChat([...chat, { user: message, bot: res.data.response }]);
    setMessage("");
  };

  return (
    <div>
      <h3>Chat with AI</h3>

      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        {chat.map((c, i) => (
          <div key={i}>
            <MessageBubble text={c.user} type="user" />
            <MessageBubble text={c.bot} type="bot" />
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;