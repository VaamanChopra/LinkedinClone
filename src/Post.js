import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';


const Posts = forwardRef(({name, description, message, photoUrl},ref) => {

  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
      <Avatar
 
          src={photoUrl}
        >{name[0]}</Avatar>
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
})

export default Posts