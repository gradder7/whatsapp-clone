import { Avatar } from "@mui/material";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";
import { db } from "../firebase.config";

function SidebarChat({ addnewchat, id, name }) {
  const [seed, setSeed] = useState("");
  // console.log("id is", id);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = async () => {
    const room = prompt("Please enter room name");
    if (room) {
      alert(room);
      await addDoc(collection(db, "rooms"), { name: room });
    }
  };
  return !addnewchat ? (
    <Link to={`/room/${id}`} style={{ textDecoration: "none" }}>
      <div className="sidebar__chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__chatInfo">
          <h2>{name}</h2>
          <p>last message....</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebar__chat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
