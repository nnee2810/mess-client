import AuthLayout from "layouts/auth/AuthLayout"
import GuestLayout from "layouts/auth/GuestLayout"
import HomeLayout from "layouts/home"
import { authRoutes } from "modules/auth/routes"
import { contactRoutes } from "modules/contact/routes"
import { messagesRoutes } from "modules/messages/routes"
import { RouteObject, useRoutes } from "react-router-dom"

const routes: RouteObject[] = [
  {
    path: "auth",
    element: <GuestLayout />,
    children: [...authRoutes],
  },
  {
    path: "",
    element: (
      <AuthLayout>
        <HomeLayout />
      </AuthLayout>
    ),
    children: [messagesRoutes, contactRoutes],
  },
]

export default function AppRoutes() {
  return useRoutes(routes)
}
