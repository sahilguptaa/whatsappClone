import React from "react";
import "./Chat.css";
import { ChatBody } from "./ChatBody/ChatBody";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatInput } from "./ChatInput/ChatInput";

export const Chat = ({ messages }) => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatInput />
    </div>
  );
};
