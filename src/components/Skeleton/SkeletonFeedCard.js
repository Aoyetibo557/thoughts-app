import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';
import "./SkeletonFeedCard.css";


function SkeletonFeedCard({ theme }) {
    const themeClass = theme || 'light'

  return (
    <div className={`skeleton-wrapper-feed ${themeClass}`}>
        <div className='skeleton__feed__card'>
            <div className='skeletonfeedcard__profiile'>
                <SkeletonElement type="avatar" />
                <div>
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
            </div>

            <div>
                <SkeletonElement type="textbox" />
            </div>

            <div className='skeletonfeed__buttons'>
                <SkeletonElement type="tags" />
                <SkeletonElement type="tags" />
            </div>
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonFeedCard