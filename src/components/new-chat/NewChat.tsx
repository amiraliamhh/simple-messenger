import React, { useState, useContext } from 'react'
import { store } from '../../Store'
import './NewChat.css'

export const NewChat = () => {
  const { dispatch } = useContext(store)
  const [isOpen, setOpen] = useState(false)
  const [friendsName, setFriendsName] = useState('')

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const stopPropagation = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.stopPropagation()
  }

  const handleNameChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFriendsName(value)
  }

  const startNewChat = () => {
    closeModal()
    setFriendsName('')
    dispatch({ type: 'newChat', name: friendsName })
  }

  return (
    <>
      <button className="new-chat-button" onClick={openModal}>
        +
      </button>
      {
        isOpen
        ? <div className="new-chat-modal" onClick={closeModal}>
          <form className="new-chat-box" onClick={stopPropagation} onSubmit={startNewChat}>
            <h4>Please enter your friends name:</h4>
            <input type="text" value={friendsName} onChange={handleNameChange} />
            <button type="submit">Start to Chat</button>
          </form>
        </div>
        : null
      }
    </>
  )
}
