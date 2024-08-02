import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
export default function ProfileSide() {
  return (
    <div className="profile-side">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}
