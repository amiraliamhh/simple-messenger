import React, { useContext } from 'react'
import { Friend } from '../'
import { store } from '../../Store'
import './Sidebar.css'

export const Sidebar = () => {
  const { state: { friends, currentChat } } = useContext(store)

  return (
    <div className="sidebar">
      {
        friends.map((user) => (
          <Friend selected={currentChat.id === user.id} user={user} key={user.id} />
        ))
      }
    </div>
  )
}
