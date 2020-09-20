import React from "react";
import "./Sidebar.css";
import { UserControls } from "./Usercontrol/UserControls";
import { Avatar } from "@material-ui/core";
import { SidebarSearch } from "./SidebarSearch/SidebarSearch";
import { SidebarChat } from "./SidebarChat/SidebarChat";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar src="" />
        <UserControls />
      </div>
      <SidebarSearch />
      <div className="chatContainer">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};
