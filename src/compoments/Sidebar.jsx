import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "../css/sidebar.css";
import SidebarChat from "./SidebarChat";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { CleaningServices } from "@mui/icons-material";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      //get refernce of the collection
      const docRef = collection(db, "rooms");
      //create a query
      //where(check and compare value though which data should be filterd)
      const q = query(docRef);
      //execute the query
      const querySnap = await getDocs(q);
      // listings will be array of objects containing id and the data
      const roomsall = [];
      querySnap.forEach((doc) => {
        // data() to get our data
        //we get the onbjects of the listings
        //give id if the doc it is seprate from data()
        // console.log(doc.id);
        return roomsall.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setRooms(roomsall);
      //  console.log(rooms);
    };
    fetchListings();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          {/* icon button material ui class user for hover effect */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or Start a new Chat" />
        </div>
      </div>
      <div className="sidebar__Chats">
        <SidebarChat addnewchat />
        {rooms.map((room) => {
          return (
            <SidebarChat key={room.id} name={room.data.name} id={room.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
