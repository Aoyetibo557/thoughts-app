import React from 'react'
import SkeletonElement from './SkeletonElement'
import "./SkeletonCard.css";
import Shimmer from "../Skeleton/Shimmer";


function SkeletonCard({ theme }) {
    const themeClass = theme || 'light'
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className='skeleton__card'>
            <div>
                <SkeletonElement type="text" />
            </div>

            <div className='skeleton__tags'>
                <SkeletonElement type="tags" />
                <SkeletonElement type="tags" />
                <SkeletonElement type="tags" />
            </div>

            <div className='skeleton__content'>
                <SkeletonElement type="textbox" />
            </div>

            <div className='skeleton__profile'>
                <SkeletonElement type="avatar" />
                <SkeletonElement type="text" />
            </div>

        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonCard