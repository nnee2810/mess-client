import { RouteObject } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export const authRoutes: RouteObject[] = [
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]
