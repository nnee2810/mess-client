import ContactLayout from "layouts/contact"
import { RouteObject } from "react-router-dom"
import ContactBlocked from "./pages/ContactBlocked"
import ContactSearch from "./pages/ContactSearch"

export const contactRoutes: RouteObject = {
  path: "contact",
  element: <ContactLayout />,
  children: [
    {
      path: "search",
      element: <ContactSearch />,
    },
    {
      path: "blocked",
      element: <ContactBlocked />,
    },
  ],
}
