import React from 'react';
import "./ChatMessage.css";

function ChatMessage({text, author, createdAt}) {

    // to detarmine the position of the message
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved'; 
  return (
    <div className={`message`}>
        <img className='chatmessage__img' src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${author}`} alt={author} />
        <div className='message__userdata'>
           <div>
              <p className='message__author'>{author}</p>
              <p className='message__date'>{createdAt?.toDate().toDateString()}</p>
           </div>
            <h5 className='message__text'>{text}</h5>
        </div>
       
    </div>
  )
}

export default ChatMessage