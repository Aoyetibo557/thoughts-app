import React, {useEffect, useState} from 'react';
import FeedMiniCard from './FeedMiniCard';
import "./UserFeed.css";
import tempImage from "../../images/searchcardimage.svg";
import FeedLargeCard from './FeedLargeCard';
import { getFeed } from '../../util/util';
import ErrorImage from "../../images/errorImage.svg";
import SkeletonFeedCard from '../Skeleton/SkeletonFeedCard';
import TrendingTable from '../Trending/TrendingTable';
import EventsImage from "../../images/eventsImage.svg";
import CommunityImage from "../../images/communityImage.svg";
import ResponsiveSidebar from '../Sidebar/ResponsiveSidebar';

function UserFeed({userFirstname}) {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        
        setTimeout(async () => {
            await getFeed().then((res) => (
                setFeed(res)
            ))
        }, 1000)

       
    },[])

  return (
    <>
        <div className='userfeed__container'>
            <div className='userfeed__top'>

                <div className='userfeed__top__avatar-div'>
                    <ResponsiveSidebar authUserName={userFirstname} />                    
                </div>
                <div>
                    <h4>Welcome {userFirstname}</h4>
                    <p> 0 members | 0 online</p>
                </div>
            </div>
            <div className='userfeed__top__cards'>
                <FeedMiniCard
                    text="Browse"
                    link="/app/feed"
                    svg={tempImage}
                />
                <FeedMiniCard
                    text="Browse Communities"
                    link="/app/feed"
                    svg={CommunityImage}
                />

                <FeedMiniCard
                    text="Discover Events"
                    link="/app/events"
                    svg={EventsImage}
                />
            </div>

           <div className='empty__skeleton'>
                {feed.length === 0 && (
                    Array.from({length: 3}, (n) => (
                        <SkeletonFeedCard key={n} />
                    ))
                )}
           </div>
           
           {feed.length > 0 && (
                <div className='userfeed__body'>
                    <div>
                        {feed.sort((b, a) => new Date(a.date.seconds) - new Date(b.date.seconds)).map((data, idx) => (
                            <FeedLargeCard
                                key={idx}
                                id={data.postId}
                                author={data.author}
                                likes={data.likes}
                                comments={data.comments}
                                content={data.content}
                                location={data.location}
                                date={data.date}
                            />
                        ))}
                    </div>

                    <div className='userfeed__trending'>
                        {feed.length > 0 && <TrendingTable /> }
                    </div>
                </div>
           )}
            {/* <div>
                
                   <div className='feed__error__div'>
                        <img className='feed__error__img' src={ErrorImage} alt="error" />
                        <p className='feed__error__text'>An Error Occured</p>
                   </div>
                
            </div> */}

            
        </div>
    </>
  )
}

export default UserFeed