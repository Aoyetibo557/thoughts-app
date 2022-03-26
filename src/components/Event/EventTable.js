import React from 'react';
import "./EventTable.css";
import EventCard from './EventCard'
import EventSkeleton from './EventSkeleton';

function EventTable({events}) {
  return (
    <div className='eventTable'>
      
      {events.length===0 &&(
        Array.from({length: 3}, (n) => (
          <EventSkeleton theme="dark" />
        ))
      )}

      {events?.map((event, idx) => (
        <EventCard 
          key={idx}
          thumbnail={event.thumbnail}
          company={event.company}
          title={event.title}
          date={event.date}
          type={event.type}
          url={event.url}
        />
      ))}

      {/* 
        {Array.from({length: 9}, () => (
            <EventCard 
                company="Qualcomm"
                title="Qualcomm at NSBE48"
                url={"https://www.untapped.io/app/discover/events/qualcomm/qualcomm-at-nsbe-48/95c4bc16-cf4e-49c8-b42f-f378623c864e"}
                type="Career Fair"
                thumbnail={"https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image"}
                date="March 23, 2022 at 12:00 AM - March 26, 2022 at 12:00 AM PDT"
            />  
        ))} */}

    </div>
  )
}

export default EventTable