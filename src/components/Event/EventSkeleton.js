import React from 'react';
import "./EventSkeleton.css";
import SkeletonElement from '../Skeleton/SkeletonElement'
import Shimmer from '../Skeleton/Shimmer';

function EventSkeleton({ theme }) {
    const themeClass = theme || 'light'

  return (
    <div className={`eventcard__skeleton__wrapper ${themeClass}`}>
       <div className='eventcard__skeleton'>
            <div >
                <SkeletonElement type="image" />
            </div>

            <div>
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>

            <div>
                <SkeletonElement type="tags" />
            </div>

            <div className='eventcard__skeleton__buttons'>
                <SkeletonElement type="button" />
                <SkeletonElement type="button" />

            </div>
            <Shimmer />
       </div>
    </div>
  )
}

export default EventSkeleton