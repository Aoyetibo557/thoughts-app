import React from 'react'

const styles = {
    fontFamily:"'Quicksand', sans-serif",
    fontSize: "15px",
    textDecoration:"none", 
    color: "#000", 
    fontWeight: "400",
    opacity: 0.8,
    
    '&:hover': {
        opacity: 1
    }
}

function SidebarLink({name}) {
  
  return (
    <>
      <p style={styles} > {name}</p>
    </>
  ) 
}

export default SidebarLink