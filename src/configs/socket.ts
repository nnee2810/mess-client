import { io } from "socket.io-client"
import { Key } from "./constants"

export const socket = io(import.meta.env.VITE_API_URL, {
  auth: {
    token: localStorage.getItem(Key.TOKEN),
  },
})
