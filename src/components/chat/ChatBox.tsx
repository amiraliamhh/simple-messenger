import React from 'react'

interface ChatBoxProps {
  className?: string
  isMine?: boolean
  message: string
}

export const ChatBox = ({ className = '', isMine = true, message }: ChatBoxProps) => (
  <div className={`chat-box ${className} ${isMine ? 'mine' : ''}`}>
    { message }
  </div>
)
