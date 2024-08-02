import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModel/ProfileModel'; // Ensure the correct import

function InfoCard() {
    const [modelOpened, setModelOpened] = useState(false);

    return (
        <div className="info-card">
            <div className="info-head">
                <h4>Your Info</h4>
                <UilPen
                    width="2rem"
                    height="1.2rem"
                    onClick={() => setModelOpened(true)}
                />
                <ProfileModal modelOpened={modelOpened} setModelOpened={setModelOpened} />
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Kolkata</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Kolkata</span>
            </div>
            <button className="button btn-lo">
                LogOut
            </button>
        </div>
    );
}

export default InfoCard;
