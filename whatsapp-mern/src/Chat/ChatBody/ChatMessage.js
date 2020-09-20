import React from "react";
import "./ChatBody.css";
import classNames from "classnames";
export const ChatMessage = ({ messageType }) => {
  return (
    <p
      className={classNames([
        { chatMessage: true },
        { chatReceiver: messageType === "SENT" },
      ])}
    >
      <span className="chatName">Contact</span>
      This is a message
      <span className="timeStamp">{new Date().toUTCString()}</span>
    </p>
  );
};
