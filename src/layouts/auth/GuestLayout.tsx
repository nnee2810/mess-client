import { Navigate, Outlet } from "react-router-dom"
import { AuthState, useUserStore } from "store/user"

export default function GuestLayout() {
  const { state } = useUserStore()

  if (state === AuthState.SUCCESS) return <Navigate to="/messages" />
  return <Outlet />
}
