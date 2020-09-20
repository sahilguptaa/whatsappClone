import React from "react";
import "./Chat.css";
import { ChatBody } from "./ChatBody/ChatBody";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatInput } from "./ChatInput/ChatInput";

export const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};
