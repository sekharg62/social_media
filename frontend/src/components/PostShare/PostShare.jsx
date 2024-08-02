import React, { useRef, useState } from 'react'
import './PostShare.css'
import Profile from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
export default function PostShare() {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className='post-share'>
            <img src={Profile} alt="" />
            <div>
                <input type="text" placeholder="What's on your mind?" />
                <div className="post-options">
                    <div className="option" onClick={() => imageRef.current.click()} >
                        < UilScenery />Photo
                    </div>
                    <div className="option">
                        < UilPlayCircle />Video
                    </div>
                    <div className="option">
                        < UilLocationPoint />Location
                    </div>
                    <div className="option">
                        <UilSchedule />Schedule
                    </div>
                    <button className='button share-btn'>Share</button>
                    <div style={{ display: "none" }}>
                        <input type="file" name='my-image' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (

                    <div className="preview-image">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>

                )}
            </div>

        </div>
    )
}
