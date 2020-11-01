import React, { useContext } from 'react'
import { store } from '../../Store'
import { User } from '../../models'
import './Friend.css'

interface FriendProps {
  selected: boolean
  user: User
}

export const Friend = ({ user, selected }: FriendProps) => {
  const { dispatch } = useContext(store)

  const changeChat = () => {
    dispatch({ type: 'changeChat', chat: user })
  }

  return (
    <div className={`friend ${selected ? 'selected' : ''}`} onClick={changeChat} >
      { user.name }
    </div>
  )
}
