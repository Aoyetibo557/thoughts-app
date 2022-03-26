import React from 'react'
import "./styles.css";
import UserFeed from '../components/Feed/UserFeed';

/**
 * 
 * @returns This is where we'll doublecheck user authentication and pass in user details into the sidebar
 */

function Dashboard({name}) {  
  return (
    <>
        <div className='container'>
          <UserFeed userFirstname={name} />
        </div>   
    </>
  )
}

export default Dashboard