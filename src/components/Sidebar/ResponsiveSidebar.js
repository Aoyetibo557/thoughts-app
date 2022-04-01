import React, {useState} from 'react'
import SidebarLinks from '../Sidebarlinks/SidebarLinks'

function ResponsiveSidebar({authUserName}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setOpen(!open)}>Open</button> */}
        <img onClick={() => setOpen(!open)} className='userfeed__top__avatar' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${authUserName}`} alt={`${authUserName}`} />

        <div className= {!open ? 'sidebar' : "sidebar.active"}>
            <SidebarLinks authedUsersName={authUserName} />
        </div>
    </div>
  )
}

export default ResponsiveSidebar