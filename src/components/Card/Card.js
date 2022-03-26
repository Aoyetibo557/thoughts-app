import React, { useState } from 'react';
import "./Card.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { Avatar } from '@mui/material';
import CardMenu from "../CardMenu/CardMenu";
import moment from "moment";


function Card({id, avatar, publishDate, author, content, firstTag, secondTag, numLikes, numViews, thirdTag}) {
    const [likeState, setLikeState] = useState(false);

    return (
    <>
        <div key={id} className='card__container'>
            <div>
                {publishDate && <p className='card__date'>{moment(publishDate).format('llll')}</p>}
                <CardMenu />
            </div>

            <p>
                {firstTag && <span className='card__tag'>{firstTag}</span>}
                {secondTag && <span className='card__tag'>{secondTag}</span>}
                {thirdTag && <span className='card__tag'>{thirdTag}</span>}

            </p>
            
            <p className='card__content'>
                {content}
            </p>

            <div className='card__author'>
                <Avatar 
                    className='card__avatar' 
                    src={avatar}
                    alt={author} 
                    sx={{ width: 55, height: 55 }}
                />
                <p>{author}</p>
            </div>

            <div className='card__icons'>
                <p> {numLikes} 
                    {!likeState ?(
                        <FaRegHeart onClick={() =>setLikeState(!likeState)} className='card__icon'/>
                    ):(
                        <FaHeart onClick={() =>setLikeState(!likeState)} className={!likeState ? 'card__icon' : 'card__icon like__reaction' }/> 
                    )}
                </p>
                <p>{numViews} <BsEye className='card__icon' /></p>
            </div>
        </div>
    </>
  )
}

export default Card