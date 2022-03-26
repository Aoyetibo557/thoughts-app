import React from 'react'
import "./SkeletonElement.css";



/**
 * This takes a type of the cad element to make a skeleton figure
 * @param {} param0 
 * @returns 
 */
function SkeletonElement({ type }) {
    const classes = `skeleton ${type}`
  return (
    <div className={classes}>

    </div>
  )
}

export default SkeletonElement