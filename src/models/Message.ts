export class Message {
  content: string
  sender: number

  constructor(content: string, sender: number) {
    this.content = content
    this.sender = sender
  }
}
