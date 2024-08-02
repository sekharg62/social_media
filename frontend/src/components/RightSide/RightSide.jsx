import React, { useState } from 'react'
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'

import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModel from '../ShareModel/ShareModel';
export default function RightSide() {
  const [modelOpened, setModelOpened] = useState(false);
  return (
    <div className="right-side">
        <div className="nav-icons">
            <img src={home} alt="" />
            <UilSetting/>
            <img src={noti} alt="" />
            <img src={comment} alt="" />
        </div>
<TrendCard/>
<button className='r-btn' onClick={() => setModelOpened(true)}>

    Share
</button><ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
    </div>
  )
}
