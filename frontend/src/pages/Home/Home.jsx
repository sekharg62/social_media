import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
export default function Home() {
  return (
    <div className="home">
        <ProfileSide/>
       <PostSide/>
       <RightSide/>
    </div>
  )
}
