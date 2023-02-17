import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/sidebar.css";

function SidebarChat({addnewchat}) {
    const [seed,setSeed]=useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[])
  return !addnewchat ? (
    <div className="sidebar__chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar__chatInfo">
        <h2>React Tutorial</h2>
        <p>last message....</p>
      </div>
    </div>
  ) : (
    <div className="sidebar__chat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
