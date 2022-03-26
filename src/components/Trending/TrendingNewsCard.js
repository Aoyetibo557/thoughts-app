import React from 'react';
import "./TrendingNewsCard.css";

function TrendingNewsCard({source, author, title, description, url, urlToimage, publishedAt, content }) {
  return (
    <div className='newsCard'>

        <a className='newsCard__link' href={url} target="_blank" rel='noreferrer'>
            <div>
                <p>
                    <span className='newsCard__author'>{author}</span>
                    <span className='newsCard__date'> {new Date(publishedAt).toDateString() + " " + new Date(publishedAt).toLocaleTimeString()} </span>   
                </p>
                
            </div>
            <div>
                <img className = "newsCard__img" src={urlToimage} alt={"sdfsdf"} />
            </div>

            <div>
                <h4 className='newsCard__title'>{title}</h4>
                <p className='newsCard__description'>
                    {description}
                </p>
            </div>
        </a>
    
    </div>
  )
}

export default TrendingNewsCard