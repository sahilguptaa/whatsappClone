import React from "react";
import "./ChatBody.css";
import classNames from "classnames";
export const ChatMessage = ({ received, name, message }) => {
  return (
    <p
      className={classNames([
        { chatMessage: true },
        { chatReceiver: received },
      ])}
    >
      <span className="chatName">{name}</span>
      {message}
      <span className="timeStamp">{new Date().toUTCString()}</span>
    </p>
  );
};
