import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import "./ChatControls.css";

export const ChatControls = () => {
  return (
    <div classname="chatControls">
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};
