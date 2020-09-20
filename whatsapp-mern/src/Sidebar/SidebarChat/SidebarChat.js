import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="chatInfo">
        <h2>Contact Name</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  );
};
