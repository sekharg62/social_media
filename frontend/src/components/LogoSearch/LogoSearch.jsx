import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
function LogoSearch() {
  return (
    <div className="logo-search">
        <img src={Logo} alt="" />
        <div className="search">
            <input type="text" placeholder='#EXPLORE'/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch
