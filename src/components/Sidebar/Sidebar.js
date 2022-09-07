import React from 'react';
import "./Sidebar.css";
import SidebarLinks from '../Sidebarlinks/SidebarLinks';
import SidebarTop from '../SidebarTop/SidebarTop';


/**
 * 
 * @returns Side bar will takein in users image and name from the databse after sucessfull authentication
 */

function Sidebar({authedUsersName}) {
 
  return (
    <>
      <div className= 'sidebar'>
        <SidebarTop />
        <SidebarLinks authedUsersName={authedUsersName} />
      </div>
        
    </>
  )
}

export default Sidebar