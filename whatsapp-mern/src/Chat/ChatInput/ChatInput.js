import React from "react";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./ChatInput.css";

export const ChatInput = () => {
  return (
    <div className="chatFooter">
      <InsertEmotionIcon />
      <form>
        <input placeholder="Type a message" type="text" />
        <button type="submit">Send a message</button>
      </form>
      <MicIcon />
    </div>
  );
};
