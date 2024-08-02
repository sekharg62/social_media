import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
export default function ProfileLeft() {
  return (
    <div className='profile-left'>
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}
