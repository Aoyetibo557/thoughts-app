import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
   
    fontSize: "15px",
    textDecoration:"none", 
    color: "#000", 
    fontWeight: "400",
    opacity: 0.8,
    
    '&:hover': {
        opacity: 1
    }
}

function SidebarLink({link, name}) {
  return (
    <>
      <Link style={styles} to={link}> {name}</Link>
    </>
  ) 
}

export default SidebarLink