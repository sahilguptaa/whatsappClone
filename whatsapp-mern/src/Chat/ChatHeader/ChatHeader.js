import React from "react";
import { Avatar } from "@material-ui/core";
import { ChatControls } from "./ChatControls/ChatControls";
import "./ChatHeader.css";

export const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <Avatar />
      <div className="chatHeaderInfo">
        <h3>Contact Name</h3>
        <p>Last seen at ...</p>
      </div>
      <ChatControls />
    </div>
  );
};
