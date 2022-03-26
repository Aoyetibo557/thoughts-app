import React, {useState, useEffect} from 'react'
import { BsSearch } from 'react-icons/bs';
import { getAllEvents } from '../../util/util';
import "./EventBoard.css";
import EventTable from './EventTable';


function EventBoard() {
  const [eventFilter, setEventFilter] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getAllEvents().then((response)=>{
        setEvents(response);
        console.log(response)
      })
    },2000)
  },[])


  // function to retrieve all the events in the database
  return (
    <div className='eventboard'>
      <div className='eventboard__container'>

        <div className='eventboard__filter'>

          <div>
            <button onClick={() => setEventFilter("company")} className='eventboard__filter__button'>Company</button>
            <button onClick={() => setEventFilter("location")} className='eventboard__filter__button'>Location</button>
            <button onClick={() => setEventFilter("industry")} className='eventboard__filter__button'>Industry</button>
          </div>

          <div>
            <select value={eventFilter} onChange={(e) => setEventFilter(e.target.value)} className='eventboard__filter__select'>
              <option value="upcoming">Upcoming</option>
              <option value="newest">Newest</option>
              <option value="rsvped">RSVPed</option>
              <option value="saved">Saved</option>
            </select>
          </div>
        </div>

        <div className='eventboard__searchbar'>
          <BsSearch title='search icon' />
          <input title='search' required name='event-search-input' className='eventboard__input' type="text" placeholder='Search for Events'  />
          <button title='search button' className='eventboard__button' type='submit'>Search</button>
        </div>


        <div className='eventboard__board'>
          <EventTable events={events} />
        </div>

      </div>
    </div>
  )
}

export default EventBoard