import React from 'react'
import "./DraftCard.css";
import {GrLocationPin} from 'react-icons/gr';
import { CgClose } from 'react-icons/cg';



function DraftCard({draft, onDelete}) {



  return (
    <div key={draft.postId} className='draftcard'>
        <div  className='draftcard__top'>
            <img className='profile__avatar' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${draft.author}`} alt={draft.author} />
            <CgClose className='draftcard__delete' onClick={onDelete} />
        </div>
        <div className='draftcard__mid'>
            <p className='draftcard__location'>
                <GrLocationPin />
                {draft.location}
            </p>
           <p className='draftcard__date'>
                {draft.date.toDate().toDateString() + ' , '+ new Date(draft.date.seconds * 1000).toLocaleTimeString()}
           </p>
        </div>
        <div className='draftcard__content__container'>
            <h3 className='draftcard__content'>{draft.content}</h3>

            <button className='button primary__button'>Post</button>
        </div>

        <div className='draftcard__bottom'>
           
        </div>


    </div>
  )
}

export default DraftCard