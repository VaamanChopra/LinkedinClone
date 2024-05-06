import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';

function Posts({name, description, message, photoUrl}) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar/>
        <div className='post_info'>
          <h2>Vaaman Chopra </h2>
          <p>description</p>
        </div>
      </div>
      <div className='post_body'>
        <p>Message goes here</p>
      </div>
      <div className='post_buttons'>
        <InputOption Icon={ThumbUpSharpIcon} title= "Like" color="gray" />
      </div>

    </div>
  )
}

export default Posts