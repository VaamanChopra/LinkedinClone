import React from "react";
import "./Feed.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import PhotoCameraSharpIcon from '@mui/icons-material/PhotoCameraSharp';
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <EditSharpIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon={PhotoCameraSharpIcon} title='Photo' color="#70B5F9"/>
            <InputOption Icon={VideocamSharpIcon} title='Video' color="#E7A33E"/>
            <InputOption Icon={CalendarMonthSharpIcon} title='Event' color="#C0CBCD"/>
            <InputOption Icon={ArticleSharpIcon} title='Write Article' color="#7FC15E"/>
        </div>
      </div>
      {/* {posts} */}
      <Post name="Vaaman Chopra" 
      description='This is a test' 
      message="WOW this worked"/>
    </div>
  );
}

export default Feed;
