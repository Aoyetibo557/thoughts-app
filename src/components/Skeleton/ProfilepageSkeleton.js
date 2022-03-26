import React from 'react';
import "./SkeletonCard.css";
import "./ProfilepageSkeleton.css";
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

function ProfilepageSkeleton({ theme }) {
    const themeClass = theme || 'light'

  return (
    <div className={` profilepage-skeleton-wrapper skeleton-wrapper  ${themeClass}`}>
        <div className='profilepagesekeleton__card'>
            <div className='profilepagesekeleton__card__div'>
                <SkeletonElement type="image" />
               <div>
                    <SkeletonElement type="text" />
                    <SkeletonElement type="longtext" />
               </div>
            </div>

            <div className='profilepagesekeleton__div'>
                <div>
                    <SkeletonElement type="text" />
                    <SkeletonElement type="longtext" />
                </div>

                <SkeletonElement type="inputbox" />
            </div>

            <div className='profilepagesekeleton__div'>
                <div>
                    <SkeletonElement type="text" />
                    <SkeletonElement type="longtext" />
                </div>

                <SkeletonElement type="inputbox" />
            </div>

             <div className='profilepagesekeleton__div'>
                <div>
                    <SkeletonElement type="text" />
                    <SkeletonElement type="longtext" />
                </div>

                <SkeletonElement type="inputbox" />
            </div>

            <Shimmer />
        </div>
    </div>
  )
}

export default ProfilepageSkeleton