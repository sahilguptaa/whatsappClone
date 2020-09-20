import React from "react";
import { Chat } from "./Chat/Chat";
import { Sidebar } from "./Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="mainBody">
      <div className="appBody">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
