import React, { useState, useEffect } from 'react';
// import { createCard } from '../../util/util';
import "./CardForm.css";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/firebase';


function CardForm() {
    const [firstCategory, setFirstCategory] = useState("");
    const [secondCategory, setSecondCategory] = useState("");
    const [mood, setMood] = useState("");
    const [entry, setEntry] = useState("");
    const [error, setError] = useState("")


    let navigate = useNavigate();
    
    const handleCreate = (ev) => {
        ev.preventDefault();
       
        try {
            var data = new FormData(ev.target);
            const cardObj  = {
                firstTag: data.get('firstTag'),
                secondTag: data.get('secondTag'),
                thirdTag: data.get('thirdTag'),
                numLikes: 0,
                numViews: 0,
                avatar: "https://avatars.dicebear.com/api/micah/john.svg",
                author: "anonymous",
                publishDate: new Date(),
                content: data.get('card-entry'),
                userId: auth?.currentUser?.uid
            }
            console.log(cardObj)
            // createCard(cardObj);

            navigate('/app/board');
            
        }catch(error) {
            setError(error.message)
            console.log(error)
        }
    }


    
  return (
    <div className='cardform'> 
        <form onSubmit={handleCreate} name='cardForm' method='POST' className='cardform__form'>
            
            <div className='cardform__topdiv'>
                <label>I'm Feeling</label>
                <select value={mood} name="thirdTag" onChange={(e) => setMood(e.target.value)} className='cardform__select'>
                    <option value="">Select</option>
                    <option value="sad">Sad</option>
                    <option value="happy">Happy</option>
                    <option value="terrified">Terrified</option>
                    <option value="hungry">Hungry</option>
                    <option value="angry">Angry</option>
                    <option value="consfused">Confused</option>
                    <option value="tired">Tired</option>

                </select>
            </div>
            
            <div>
                <select name='firstTag' value={firstCategory} onChange={(e) => setFirstCategory(e.target.value)} className='cardform__select'>
                    <option value="">Select</option>
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                    <option value="school">School</option>
                    <option value="work">Work</option>
                    <option value="realationship">Relationships</option>
                </select>

                <select name="secondTag" value={secondCategory} onChange={(e) => setSecondCategory(e.target.value)} className='cardform__select'>
                    <option value="">Select</option>
                    <option value="meme">Meme</option>
                    <option value="comedy">Comedy</option>
                    <option value="movies">Movies</option>
                    <option value="shows">TV Shows</option>
                    <option value="news">News</option>
                </select>
            </div>

            <div>
                <textarea className='cardform__textarea' rows="5" cols="3" name="card-entry" value={entry} onInput={(e) => setEntry(e.target.value)} placeholder='Type Something...'></textarea>
            </div>

            <div>
                <button className='button primary__button' type='submit' value="Create Card">Create Card</button>
            </div>
        </form>
    </div>
  )
}

export default CardForm