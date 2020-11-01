import React from 'react'
import { Message } from '../../models'

interface ChatBoxProps {
  className?: string
  message: Message
}

export const ChatBox = ({ className = '', message }: ChatBoxProps) => (
  <div className={`chat-box ${className} ${message.sender === 0 ? 'mine' : ''}`}>
    { message.content }
  </div>
)
