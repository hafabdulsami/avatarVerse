import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Logo from "../../../public/Pngs/LogoBlack1.png";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ChatIcon from "@mui/icons-material/Chat";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ProfilePicture from "../ProfilePic";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", icon: <HomeRoundedIcon />, path: "" },
  { name: "Search", icon: <TravelExploreIcon />, path: "" },
  { name: "Chats", icon: <ChatIcon />, path: "" },
  { name: "", icon: "" },
  { name: "", icon: "" },

  { name: "Logout", icon: <MeetingRoomIcon />, path: "/" },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavButton = ({ name, icon, path }) => (
  <Link to={path} style={{ textDecoration: "none" }}>
    <button type="button">
      {icon && <Icon icon={icon} />}
      <span>{name}</span>
    </button>
  </Link>
);

export const Sidebar = () => {
  const [activeTab] = useState(0);

  return (
    <aside className="sidebar">
      <div className="ProfilePicture">
        <ProfilePicture />
      </div>
      <div className="tabs">
        <div className="title">
          <h1>AvatarVerse</h1>
          <h2>Arsalan Ali</h2>
          <h3>2021-CS-155</h3>
        </div>

        <div
          style={{
            translate: `-${
              activeTab === 0 ? 0 : (activeTab / tabs.length) * 100
            }%`,
          }}
        >
          <div style={{ fontFamily: "open sans" }}>
            {menuItems.map((item) => (
              <NavButton name={item.name} icon={item.icon} path={item.path} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
