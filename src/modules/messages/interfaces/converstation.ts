import { User } from "modules/users/interfaces/user"
import { Message } from "./message"

export interface Converstation {
  channelId: string
  user: User
  lastMessage: Message
}
