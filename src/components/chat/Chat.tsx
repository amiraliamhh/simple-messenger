import React, { useContext } from 'react'
import { ChatBox } from './ChatBox'
import { MessageInput } from '../'
import './Chat.css'
import { store } from '../../Store'

export const Chat = () => {
  const { state: { currentChat } } = useContext(store)

  return (
    <>
      <div className="chat">
        {
          currentChat.chat.length
          ? currentChat.chat.map(({ content, sender }, index) => <ChatBox key={index} message={content} isMine={sender === 0} />)
          : <p>No messages yet ...</p>
        }
      </div>
      <MessageInput />
    </>
  )
}
