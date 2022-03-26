import React, { useState } from 'react';
import "./commentstyles.css";

function CommentForm({submitLabel, handleSubmit, hasCancelButon=false, initalText="", handleCancel}) {
  const [input, setInput ] = useState(initalText);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    handleSubmit(input)
    setInput("")
  }

  return (
    <form className='comment__form' onSubmit={handleFormSubmit}>
      <input required className='commentform__input' type="text" name="comment-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder='write comment' />
      <button className={input.length === 0 ? "commentform__button__disabled" : 'commentform__button'} type='submit' >
        {submitLabel}
      </button>

      {hasCancelButon && (
        <button className={input.length === 0 ? "commentform__button__disabled" : 'commentform__button'} type='button' onClick={handleCancel} >
          Cancel  
        </button>
          
      )}
    </form>
  )
}

export default CommentForm