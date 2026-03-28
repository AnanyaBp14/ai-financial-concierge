import React from "react";

function MessageBubble({ text, type }) {
  return (
    <div
      style={{
        textAlign: type === "user" ? "right" : "left",
        margin: "10px",
      }}
    >
      <span
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: type === "user" ? "#DCF8C6" : "#EEE",
          display: "inline-block",
          maxWidth: "70%",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default MessageBubble;