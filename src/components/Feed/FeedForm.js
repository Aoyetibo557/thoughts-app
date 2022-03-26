import React, {useState} from 'react'
import { auth } from '../../firebase/firebase';
import "./FeedForm.css";



function FeedForm({handleSubmit}) {
    const [input, setInput] = useState("");
    const [location, setLocation] = useState("");

    const handleNewPost = (ev) => {
        ev.preventDefault();
        handleSubmit(input, location);
        setInput("");
        setLocation("");
    }


  return (
    <form method='POST' onSubmit={handleNewPost} className='feedform'>
        
        <div className='feedform__topdiv'>
            <img className='feedform__img' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${auth.currentUser?.email}`} alt={auth.currentUser.displayName} />
            <p>{auth.currentUser?.email}</p>
        </div>
        <div>
            <input required className='feedform__location' type={"text"} value={location} onInput={(e) => setLocation(e.target.value)} name="feed-loction" placeholder='Location: Ex - New York, NY' />
        </div>
        <div>
            <textarea required value={input} onChange={(e) => setInput(e.target.value)} rows="4" cols="5" className='feedform__textarea' placeholder='Add a description, comment, thoughts or link (optional)'>

            </textarea>
        </div>

        <div>
            <button  type='submit' className={input.length ===0 || location.length ===0 ? 'feedform__button-disabled' : 'feedform__button'}>Post</button>
        </div>
    </form>
  )
}

export default FeedForm