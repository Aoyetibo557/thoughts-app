import React from 'react';
import { BsDot, BsClockHistory } from 'react-icons/bs';
import "./EventCard.css";


function EventCard({thumbnail, company, title, type, date, url}) {
  return (
    <div className='eventcard'>
        <div>
            {!thumbnail ? (
                <img src={`https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image`} alt={thumbnail} />
            ):(
                <img src={thumbnail} alt={thumbnail} />
            )}
            
        </div>

       <div className='eventcard__info'>
            <div>
                <h4 className='eventcard__title'>{title}</h4>
            </div>

            <div className='eventcard__info-div'>
                <p>{company}</p>
                <BsDot />
                <p className='eventcard__type'>{type}</p>
            </div>

            <div className='eventcard__date-div'>
                <BsClockHistory className='eventcard__date-icon' />
                <p className='eventcard__date'>
                    {date.toDate().toDateString()}
                </p>
            </div>
       </div>

        <div className='eventcard__links'>
            <a className='eventcard__link' href={url} target="_blank" rel="noreferrer" >RSVP</a>
            <a className='eventcard__link' href={url} target="_blank" rel="noreferrer" >Learn More</a>
        </div>

    </div>
  )
}

export default EventCard