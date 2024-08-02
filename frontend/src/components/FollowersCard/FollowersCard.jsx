import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
export default function FollowersCard() {
    return (
        <div className="follower-card">
            <h3>Who is following you?</h3>
            {Followers.map((follower, id) => {
                return (
                    <div className="follower">

                        <div>
                            <img src={follower.img} alt="" className='follower-img' />

                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <button className='button follower-btn'>Follow</button>
                    </div>
                )

            })}
        </div>
    )
}
