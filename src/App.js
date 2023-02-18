import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Sidebar from "./compoments/Sidebar";
import Chat from "./compoments/Chat";

export default function App() {
  return (
    <>
      <Router>
          <div className="App">
            <div className="app__body">
              {/* sidebar */}
              <Sidebar />
              {/* chat */}
        <Routes>
              <Route exact path="/" element={<Chat />} />

              <Route path="/room/:roomId" element={<Chat />} />
        </Routes>
            </div>
          </div>
      </Router>
    </>
  );
}
