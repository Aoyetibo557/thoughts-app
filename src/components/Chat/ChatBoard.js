import React, { useState, useEffect, useRef } from 'react';
import "./ChatBoard.css";
import ChatMessage from './ChatMessage';
import { BsThreeDotsVertical} from "react-icons/bs";
import { auth } from '../../firebase/firebase';
import { createNewMessage, getGroupMessage } from '../../util/util';
import { IoSend } from "react-icons/io5"


function ChatBoard({currentUser, chatgroup}) {
    const [allmessages, setAllMessages] = useState([]);
    const [formValue, setFormValue] = useState("");
    const [success, setSuccess] = useState(false);


    const dummyRef = useRef()

    useEffect(() => {
        getGroupMessage(chatgroup).then((response) => {
            setAllMessages(response)
            setSuccess(false) //im using this here since i can't use onSnapshot , where theres a change to the state the call is made
        })
    },[chatgroup, success])



    const sendMessage = (ev) => {
        ev.preventDefault();

        // const { uid } = auth.currentUser;

        // add function to add new essageto the correct collection
        createNewMessage(chatgroup, auth.currentUser.uid, formValue, currentUser).then((response)=>{
            // console.log(response);
            setSuccess(true)
        }).catch((err) => {
            setSuccess(false);
            console.log(err.message)
        })

        setFormValue("");

        dummyRef.current.scrollIntoView( { behavior: 'smooth'});
    }


  return (
    <div className='chatboard'>
        <div className='chatboard__top'>
            {/* chat top */}
            <h4 className='chatboard__header'>{chatgroup}</h4>
            <BsThreeDotsVertical className='chatboard__header__icon' />
        </div>

        <div className="chatboard__messages">
            {allmessages.length === 0 && (
                <ChatMessage 
                    author="ThoughtBot"
                    text={<p> Hello <span className="bot__msg__span" title='You'>@{currentUser}</span>! 👋🏽👋🏽 i'm thoughtBot. Great to have you here in <b><i>{chatgroup}</i></b> community! You've already been added to the community👏. Please refrain from using 
                            vulgar words and phrases otherwise you will be banned 😡. This is a safe space please be advised. Users who violate our terms and conditions will be banned. Not sure what to do next? Introduce yourself to the community😊 . We'd love to hear more about you! </p>}

                />
            )}

            {allmessages && allmessages.map((msg, idx) => (
                <ChatMessage
                    key={idx}
                    // uid={msg?.uid}
                    text={msg.message} 
                    createdAt={msg.createdAt}
                    author={msg.author}
                />
            ))}

            {/* this is to make sure we auto scroll on new messages */}
            <div ref={dummyRef}></div>
        </div>

        <div className='chatboard__footer' > 
           <form className='chatboard__form' onSubmit={sendMessage}>
               <input required className='chatboard__input' type="text" name='chat-input' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='new Message' />
               <button type='submit' className={formValue.length === 0 ? "chatboard__button-disabled" : 'chatboard__button'}>
                    <IoSend aria-disabled={formValue.length === 0 ? "true" :"false"} className='chatboard__button__icon' /> 
                </button>
           </form>
        </div>
    </div>
  )
}

export default ChatBoard