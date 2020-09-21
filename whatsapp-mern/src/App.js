import React from "react";
import { Chat } from "./Chat/Chat";
import { Sidebar } from "./Sidebar/Sidebar";
import "./App.css";
import Pusher from "pusher-js";
import axiosInstance from "./axios";

function App() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  React.useEffect(() => {
    const pusher = new Pusher("29fafef1784e2b8306b8", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="mainBody">
      <div className="appBody">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
