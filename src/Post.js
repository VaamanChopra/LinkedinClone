import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';

function Posts({name, description, message, photoUrl}) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar/>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOption Icon={ThumbUpSharpIcon} title= "Like" color="gray" />
        <InputOption Icon={MessageSharpIcon} title= "Comment" color="gray" />
        <InputOption Icon={ReplySharpIcon} title= "Share" color="gray" />
      </div>

    </div>
  )
}

export default Posts