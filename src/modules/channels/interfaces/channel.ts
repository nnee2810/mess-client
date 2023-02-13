import { User } from "modules/users/interfaces/user"

export interface Channel {
  id: string
  users: User[]
  createdAt: string
}
