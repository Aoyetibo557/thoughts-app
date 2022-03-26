import React,{useState, } from 'react';
import "./NewFeedComp.css";
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../util/util'
import FeedForm from './FeedForm'
import { FaSpinner } from "react-icons/fa";



function NewFeedComponent() {
    const [success, setSucess] = useState(false);
    const [err, setErr] = useState("");


    const navigate = useNavigate();

    const createNewPost = (feedContent, feedLocation) => {
        createPost(feedContent, feedLocation).then((feed) => {
            setSucess(true);
            navigate('/app/feed')
        }).catch((error) => {
            setSucess(false)
            setErr(error.message)
        })
    }

  return (
    <div className='newfeedcomp'>
        <div className='newfeedcomp__form'>
            {err.length === 0 && success === true ? (
                <div>
                    <FaSpinner />
                </div>
            ):(
                <FeedForm handleSubmit={createNewPost} />
            )}
            
        </div>

    </div>
  )
}

export default NewFeedComponent