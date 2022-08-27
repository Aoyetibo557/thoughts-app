import React, {useState} from 'react'
import { createDraft } from '../../util/util';
import "./FeedForm.css";
import BasicAlert from "../BasicAlert/BasicAlert.js";
import { set } from 'firebase/database';

function FeedForm({handleSubmit}) {
    const [input, setInput] = useState("");
    const [location, setLocation] = useState("");
    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState("");

    const handleNewPost = (ev) => {
        ev.preventDefault();
        handleSubmit(input, location);
        setInput("");
        setLocation("");
    }

    const handleDraft = (ev) => {
        ev.preventDefault();
        setSuccess(false);
        setErr("");
        createDraft({content:input, location:location}).then((draft) => {
            setSuccess(true)
            console.log(draft);
            setInput("");
            setLocation("");
        }).catch((error) => {
            console.log(error);
            setErr(error.message || "Something went wrong!")
            setSuccess(false)
        })
    }


  return (
    <>
        <div className='feedform__container'>
            {success && <BasicAlert type="success" message= "Draft Saved! " />}
            {err.length > 0 && <BasicAlert type="error" message= {err} />}
            <div>
                <h4 className='feedform__h4'>Create Post</h4>
            </div>
            <form method='POST' onSubmit={handleNewPost} className='feedform'>
                <div>
                    
                    <input required className='feedform__location' type={"text"} value={location} onInput={(e) => setLocation(e.target.value)} name="feed-loction" placeholder='Location: Ex - New York, NY' />
                </div>
                <div>
                    <label htmlFor=''>Content (Max. 200 chars limit)</label>
                    <textarea required maxLength={200} value={input} onChange={(e) => setInput(e.target.value)} rows="4" cols="5" className='feedform__textarea' placeholder= {`What's on your mind?`}></textarea>
                </div>

                <div>
                    <button  type='submit' className={input.length ===0 || location.length ===0 ? 'feedform__button-disabled' : 'feedform__button'}>Post</button>
                    <button onClick={handleDraft} type='submit' className={input.length ===0 || location.length ===0 ? 'feedform__button-disabled' : 'feedform__button'}>Save as Draft</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default FeedForm