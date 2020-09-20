import React from "react";
import "./ChatBody.css";
import { ChatMessage } from "./ChatMessage";
export const ChatBody = () => {
  return (
    <div className="chatBody">
      <ChatMessage />
      <ChatMessage messageType="SENT" />
      <ChatMessage />
    </div>
  );
};
