import { Channel } from "modules/channels/interfaces/channel"
import { User } from "modules/users/interfaces/user"

export interface Message {
  id: string
  message: string
  channel: Channel
  channelId: string
  user: User
  userId: string
  createdAt: string
}
