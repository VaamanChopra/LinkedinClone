import React, {useEffect, useState} from "react";
import "./Feed.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import PhotoCameraSharpIcon from '@mui/icons-material/PhotoCameraSharp';
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState ('');
  const [posts, setPosts] = useState ([]);
  useEffect( () => {
    db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => (
        {
          id: doc.id, 
          data: doc.data(),
        }
      ))
    )
  );
  },[])

  const sendPost = e => {
    e.preventDefault ();
    db.collection("posts").add({name:"Vaaman Chopra", description:"cool", message:input, photoUrl:'', timeStamp:firebase.firestore.FieldValue.serverTimestamp()})
    setInput("")
  }
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <EditSharpIcon />
          <form>
            <input type="text" value={input} onChange={e=> setInput(e.target.value)} />
            <button onClick ={sendPost} type="submit">Send</button>
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
      {posts.map(({id, data:{name,description, photoUrl, message}}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}/>
      
      ))}
    </div>
  );
}

export default Feed;
