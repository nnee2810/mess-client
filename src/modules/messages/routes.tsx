import MessageLayout from "layouts/message"
import { RouteObject } from "react-router-dom"
import Message from "./pages/Message"
import MessageDetail from "./pages/MessageDetail"

export const messagesRoutes: RouteObject = {
  path: "messages",
  element: <MessageLayout />,
  children: [
    {
      path: "",
      element: <Message />,
    },
    {
      path: ":id",
      element: <MessageDetail />,
    },
  ],
}
