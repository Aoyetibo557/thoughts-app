import React from 'react';
import "./SidebarLinks.css";
import SidebarLink from '../Sidebarlink/SidebarLink'
import { FaLightbulb } from "react-icons/fa";
import { GrHomeRounded} from "react-icons/gr";
import { RiDraftLine } from "react-icons/ri";
import Profile from '../Profile/Profile';
import { IoGameController } from "react-icons/io5";
import {BsLaptopFill, BsCalendarWeek} from "react-icons/bs";
import ProfilePicture from "../../images/myPicture.jfif";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.js"
import Loading from '../Loading/Loading';
import { MdLogout } from 'react-icons/md';
import { logOut } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';


function SidebarLinks({authedUsersName}) {

  let navigate = useNavigate();
    const handleLogOut =() =>{
       logOut()
       navigate("/")
  }

  return (
    <div className='sidebar__container'>
      <div className="styles">
        <Link to="/app/feed" className='linkDiv'>
          <GrHomeRounded className='linkIcon' /> <SidebarLink  name="Feed" />
        </Link>

        <Link to="/app/events" className='linkDiv'>
          <BsCalendarWeek className='linkIcon' /> <SidebarLink  name="Events" />
        </Link>
        
        <Link to="/app/drafts" className='linkDiv'>
          <RiDraftLine className='linkIcon' /> <SidebarLink  name="Drafts" />
        </Link>
        
        {/* <Link to="/app/inbox" className='linkDiv'>
          <VscInbox className='linkIcon' /> <SidebarLink  name="Inbox" />
        </Link> */}

        <div className='linkDiv'>
          {
            auth.currentUser ? 
            <Profile avatar={ProfilePicture} name={authedUsersName.length === 0 ? <Loading size={"small"} /> : authedUsersName } />
            :
            <Loading size={"small"} />
          }
        </div>
      </div>

      <div className="styles">
        <h4 className='styles__h4'>COMMUNITIES</h4>
        
        <div >
          <Link to="/app/community/ga" className='linkDiv'>
            <BsLaptopFill className='linkIcon' /> <SidebarLink name="General Advice" />
          </Link>

          <Link to="/app/community/gz" className='linkDiv'>
            <IoGameController className='linkIcon' /> <SidebarLink name="Game Zone" />
          </Link>
          
          <Link to="/app/community/ls" className='linkDiv'>
            <RiDraftLine className='linkIcon' /> <SidebarLink name="Lifestyle" />
          </Link>

          <Link to="/app/community/ideas" className='linkDiv'>
            <FaLightbulb className='linkIcon' /> <SidebarLink name="Ideas" />
          </Link>

          <button onClick={handleLogOut} type='button' className='linkDiv linkbtn'>
            <MdLogout className='linkIcon' />
            logout
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default SidebarLinks