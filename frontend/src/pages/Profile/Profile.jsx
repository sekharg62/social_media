import React from 'react'
import './Profile.css'

import PostSide from '../../components/PostSide/PostSide'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'

export default function Profile() {
  return (
    <div className='profile'>
      <ProfileLeft/>
      <div className="profile-center">
        <ProfileCard/>
        <PostSide/>

      </div>
      <RightSide/>
    </div>
  )
}
