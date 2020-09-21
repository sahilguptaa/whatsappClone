import React from "react";
import "./ChatBody.css";
import { ChatMessage } from "./ChatMessage";
export const ChatBody = ({ messages }) => {
  return (
    <div className="chatBody">
      {messages.map((msg) => (
        <ChatMessage
          name={msg.name}
          received={msg.received}
          message={msg.message}
        />
      ))}
    </div>
  );
};
