import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicNoneIcon from "@mui/icons-material/MicNone";
import "../css/chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h2>Room Name</h2>
          <p>last Sceen</p>
        </div>
        <div className="header__right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* chat body */}
      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">himanshu mehra</span>
          This is test message
          <span className="chat__time">12:20pm</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">himanshu mehra</span>
          This is test message
          <span className="chat__time">12:20pm</span>
        </p>

        <p className="chat__message ">
          <span className="chat__name">himanshu mehra</span>
          This is test message
          <span className="chat__time">12:20pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Type you message" />
          <input type="submit" />
        </form>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
