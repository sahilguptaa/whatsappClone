import React, { useState } from "react";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./ChatInput.css";
import axios from "../../axios";

export const ChatInput = () => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "Dummy Name",
      timeStamp: new Date().toUTCString(),
      received: false,
    });
    setInput("");
  };

  return (
    <div className="chatFooter">
      <InsertEmotionIcon />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <button type="submit" onClick={sendMessage}>
          Send a message
        </button>
      </form>
      <MicIcon />
    </div>
  );
};
