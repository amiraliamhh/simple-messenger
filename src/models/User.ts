import { Message } from './Message'

export class User {
  name: string
  id: number
  chat: Message[]

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
    this.chat = []
  }

  sendMessage(content: string, sender = 0) {
    this.chat.push(new Message(content, sender))
  }
}
