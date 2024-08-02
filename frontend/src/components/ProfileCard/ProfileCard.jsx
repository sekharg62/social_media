import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
const ProfileCard = () => {


    const ProfilePage = true;


    return (
        <div className="profile-card">
            <div className="profile-images">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="profile-name">
                <span>Sekhar</span>
                <span>Description</span>
            </div>
            <div className="follow-status">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,822</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>608</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>


                        </div>

                    </>}
                </div>
                <hr />
            </div>
            {ProfilePage ? " ":<span>
                My profile
            </span>}
            

        </div>
    )
}

export default ProfileCard
