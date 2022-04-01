import React from 'react';
import "./SidebarLinks.css";
import SidebarLink from '../Sidebarlink/SidebarLink'
import { FaArchive, FaLightbulb } from "react-icons/fa";
import { GrHomeRounded} from "react-icons/gr";
import { RiDraftLine } from "react-icons/ri";
import Profile from '../Profile/Profile';
import { IoGameController } from "react-icons/io5";
import {BsLaptopFill, BsCalendarWeek} from "react-icons/bs";
import ProfilePicture from "../../images/myPicture.jfif";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.js"

function SidebarLinks({authedUsersName}) {
  return (
    <div div className='sidebar__container'>
      <div className="styles">
        <Link to="/app/feed" className='linkDiv'>
          <GrHomeRounded className='linkIcon' /> <SidebarLink link="/app/feed" name="Feed" />
        </Link>

        <Link to="/app/events" className='linkDiv'>
          <BsCalendarWeek className='linkIcon' /> <SidebarLink link="/app/events" name="Events" />
        </Link>
        
        <Link to="/app/feed" className='linkDiv'>
          <RiDraftLine className='linkIcon' /> <SidebarLink link="/" name="Drafts" />
        </Link>
        
        <Link to="/app/feed" className='linkDiv'>
          <FaArchive className='linkIcon' /> <SidebarLink link="/" name="Archives" />
        </Link>

        <div className='linkDiv'>
          <Profile avatar={ProfilePicture} name={authedUsersName.length === 0 ? auth.currentUser?.uid : authedUsersName } />
        </div>
      </div>

      <div className="styles">
          <h4 className='styles__h4'>COMMUNITIES</h4>
        
        <div >
          <Link to="/app/community/ga" className='linkDiv'>
            <BsLaptopFill className='linkIcon' /> <SidebarLink link="/app/community/ga" name="General Advice" />
          </Link>

          <Link to="/app/community/gz" className='linkDiv'>
            <IoGameController className='linkIcon' /> <SidebarLink link="/app/community/gz" name="Game Zone" />
          </Link>
          
          <Link to="/app/community/ls" className='linkDiv'>
            <RiDraftLine className='linkIcon' /> <SidebarLink link="/app/community/ls" name="Lifestyle" />
          </Link>

          <Link to="/app/community/ideas" className='linkDiv'>
            <FaLightbulb className='linkIcon' /> <SidebarLink link="/app/community/ideas" name="Ideas" />
          </Link>
        </div>
      </div>

      <div className="styles">
        <h4 className='styles__h4'>Direct Messages</h4>
      </div>

    </div>
  )
}

export default SidebarLinks