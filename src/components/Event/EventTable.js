import React from 'react';
import "./EventTable.css";
import EventCard from './EventCard'
import EventSkeleton from './EventSkeleton';

function EventTable({events}) {
  return (
    <div className='eventTable'>
      
      {events.length===0 &&(
        Array.from({length: 4}, (n) => (
          <EventSkeleton key={n} theme="dark" />
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

    </div>
  )
}

export default EventTable