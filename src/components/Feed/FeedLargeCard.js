import React, {useState} from 'react';
import { BsDot, BsHeart } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { auth } from '../../firebase/firebase';
import Comments from '../Comment/Comments';
import "./FeedLargeCard.css";

function FeedLargeCard({id, avatar, author, location,  date, likes, comments, content}) {
    const [showComments, setShowComments] = useState(false);
    
    
    return (
    <div key={id} className='feedlargecard'>
        <div className='feedlargecard__top'>
            <img className='feedlargecard__img' src={!avatar ? `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${author}` : avatar} alt={author} />
            <div>
                <h4 className='feedlargecard__author'>{author}</h4>
                <p className='feedlargecard__location'>
                    {location} 
                    <BsDot />
                    { date.toDate().toDateString() + ' , '+ new Date(date.seconds * 1000).toLocaleTimeString()}
                </p>
            </div>
        </div>

        <div className='feedlargecard__content'>
            <p>
                {content}
            </p>
        </div>


        <div className='feedlargecard__bottom'>
            <button className='feedlargecard__button'>
                <BsHeart className='feedlargecard__icon' />
                <p> {likes} Likes</p>
            </button>

            <button onClick={() => setShowComments(!showComments)} className='feedlargecard__button' >
                <FaCommentAlt className='feedlargecard__icon' />
                <p> {comments} Comments</p>
            </button>

            
        </div>

        <div>
            {showComments ? (
                <Comments postId={id} currentUserId={auth.currentUser?.uid}  /> //this takes in the current post id. So on click we'll retrieve all the comments of that post
            ):(
                ""
            )}
        </div>
    </div>
  )
}

export default FeedLargeCard