import React from "react";
import "./SidebarSearch.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

export const SidebarSearch = () => {
  return (
    <div className="sidebarSearch">
      <div className="searchContainer">
        <SearchOutlined />
        <input type-="text" placeholder="Search or start new chat" />
      </div>
    </div>
  );
};
