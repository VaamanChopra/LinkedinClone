import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector} from "react-redux";

function Sidebar() {
  const {user} = useSelector(selectUser)
  console.log(user)
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.licdn.com/dms/image/D5616AQEux5bmBJE7MQ/profile-displaybackgroundimage-shrink_350_1400/0/1712082682770?e=1720051200&v=beta&t=nLqTcMIp9PNGG2YCyLmOiG1URg_YrQMaLv6ZunknIGU"
          alt="NOphoto"
        />
        <Avatar
          className="sidebar_avatar"
          src={user.photoUrl}
        >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Profile viewers</p>
          <p className="sidebar_statNumber">5698</p>
        </div>
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_statNumber">200k</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("mobiledevelopment")}
        {recentItem("reactnative")}
        {recentItem("reactjs")}
        {recentItem("frontenddeveloper")}
      </div>
    </div>
  );
}

export default Sidebar;
