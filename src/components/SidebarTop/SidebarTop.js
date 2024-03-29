import React from 'react';
import "./SidebarTop.css";
import { Link } from 'react-router-dom'
import { IoSettingsOutline, IoAddSharp } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import LogoImage from '../../images/logoNoBg.png';
function SidebarTop() {
  return (
    <div className='sidebartop'>
        <Link title='Thoughts' className='sidebartop__logo' to="/app/feed">
            <img style={{ width: "160px", height: "80px", objectFit: "cover"}} src= {LogoImage} alt="logo" />
        </Link>
        <div className='sidebartop__icons'>
            <Link title='Create New Feed' to="/app/createfeed">
              <IoAddSharp className='icon' />  
            </Link>
            <Link title='settings' to="/app/settings">
              <IoSettingsOutline title='Settings' className='icon' />
            </Link>
            <VscBell title='Notifications' className='icon' />
        </div>
    </div>
  )
}

export default SidebarTop