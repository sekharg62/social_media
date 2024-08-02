import React from 'react'
import './Posts.css'
import { PostData } from '../../Data/PostData'
import Post from '../Post/Post'
export default function Posts() {
  return (
    <div className="posts">
        {PostData.map((post,id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}
