import React from 'react';
import "./FeedMiniCard.css"
import { Link } from 'react-router-dom'

function FeedMiniCard({svg, text, link}) {
  return (
    <div className='feedcard'>
        <Link className='feedcard__link'  to={!link ? "/app" : link}>
            <img className='feedcard__img' src={svg} alt={text} />
            <p className='feedcard__text'>{text}</p>
        </Link>
    </div>
  )
}

export default FeedMiniCard