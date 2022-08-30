import React from 'react';
import "./Sidebar.css";
import SidebarLinks from '../Sidebarlinks/SidebarLinks';
import { logOut } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';
import SidebarTop from '../SidebarTop/SidebarTop';
import ResponsiveSidebar from './ResponsiveSidebar';


/**
 * 
 * @returns Side bar will takein in users image and name from the databse after sucessfull authentication
 */

function Sidebar({authedUsersName}) {
  let navigate = useNavigate();
  const handleLogOut =() =>{
      logOut()
      navigate("/")
    
  }
  return (
    <>
      <div className= 'sidebar'>
        <SidebarTop />
        <SidebarLinks authedUsersName={authedUsersName} />
        <button onClick={handleLogOut} className='button secondary__button'>LogOut</button>
      </div>

      {/* <div className='sidebar__hidden'>
        <ResponsiveSidebar authUserName={authedUsersName} />
      </div> */}
        
    </>
  )
}

export default Sidebar