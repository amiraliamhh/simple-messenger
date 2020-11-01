import React, { useState, ChangeEvent, useContext } from 'react'
import './MessageInput.css'
import { store } from '../../Store'

export const MessageInput = () => {
  const { dispatch } = useContext(store)
  const [message, setMessage] = useState('')

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(value)
  }

  const sendMessage = () => {
    setMessage('')
    dispatch({
      type: 'sendMessage',
      message
    })
  }

  const handleEnter = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="message-input">
      <textarea placeholder="Type here ..." onChange={handleChange} value={message} onKeyDown={handleEnter} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
