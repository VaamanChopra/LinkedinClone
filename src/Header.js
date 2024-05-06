import React from "react";
import"./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className='header'>

        <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbaCGBTHSSB2pmmpo_rU9G_3NlTlVdB8c8wJByx51cg&s" alt=""/>

        <div className="header_search">
           <SearchIcon/>
            <input type ="text" />
            
        </div>
        </div>
        <div className="header_right">

   <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title= 'My Network' Icon={SupervisorAccountIcon} />
            <HeaderOption title= 'Jobs' Icon={BusinessCenterIcon} />
            <HeaderOption title= 'Messaging' Icon={ChatIcon} />
            <HeaderOption title= 'Notification' Icon={NotificationsIcon} />
            <HeaderOption avatar='https://media.licdn.com/dms/image/D5603AQF7rP0uYXolxQ/profile-displayphoto-shrink_400_400/0/1713030182460?e=1720051200&v=beta&t=d88r9Ff3kAvLNQVdo9tnB4ft7EVbQzYd6s0T_BXnPgI' title= 'Me'/>
        </div>
    </div>
   
  )
}

export default Header