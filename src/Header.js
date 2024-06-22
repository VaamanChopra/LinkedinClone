import React from "react";
import"./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";


function Header() {
  
  

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className='header'>

        <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbaCGBTHSSB2pmmpo_rU9G_3NlTlVdB8c8wJByx51cg&s" alt=""/>

        <div className="header_search">
           <SearchIcon/>
            <input placeholder="Search" type ="text" />
            
        </div>
        </div>
        <div className="header_right">

   <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title= 'My Network' Icon={SupervisorAccountIcon} />
            <HeaderOption title= 'Jobs' Icon={BusinessCenterIcon} />
            <HeaderOption title= 'Messaging' Icon={ChatIcon} />
            <HeaderOption title= 'Notification' Icon={NotificationsIcon} />
            <HeaderOption avatar title= 'Me' onClick={logoutHandler}/>
        </div>
    </div>
   
  )
}

export default Header