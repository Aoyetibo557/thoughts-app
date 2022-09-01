import React from 'react'
import ChatBoard from '../components/Chat/ChatBoard'

function ChatRoom({author, chatGroup}) {
  return (
    <div>
      
        <ChatBoard currentUser ={author} chatgroup={chatGroup} />
    </div>
  )
}

export default ChatRoom