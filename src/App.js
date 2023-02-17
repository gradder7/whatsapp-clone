
import React from "react";
import "./App.css";
import Sidebar from "./compoments/Sidebar";
import Chat from "./compoments/Chat";

export default function App() {
  return (
    <div className="App">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat/>
      </div>
    </div>
  );
}
