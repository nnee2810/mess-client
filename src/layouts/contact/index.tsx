import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function ContactLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr]">
      <Sidebar />
      <Outlet />
    </div>
  )
}
