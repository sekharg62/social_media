import React from 'react'
import './Post.css'
import like from '../../img/like.png'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import notlike from '../../img/notlike.png'
export default function Post({ data }) {
    return (
        <div className='post'>
            <img src={data.image} alt="" />

            <div className="post-react">
                <img src={data.liked ? like :notlike} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />
            </div>
            <span>{data.likes}Likes</span>
            <div className="details">
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
        </div>
    )
}
