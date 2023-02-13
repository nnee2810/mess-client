import { Key } from "configs/constants"
import { socket } from "configs/socket"
import { PropsWithChildren, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AuthState, useUserStore } from "store/user"

export default function AuthLayout({ children }: PropsWithChildren) {
  const { state } = useUserStore()

  useEffect(() => {
    if (state === AuthState.SUCCESS) {
      socket.auth = {
        token: localStorage.getItem(Key.TOKEN),
      }
      socket.connect()
    }
    return () => {
      socket.disconnect()
    }
  }, [state])

  if (state === AuthState.FAIL) return <Navigate to="/auth/sign-in" />
  return <div>{children}</div>
}
