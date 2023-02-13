import clsx from "clsx"
import { Link, useLocation } from "react-router-dom"

interface Item {
  name: string
  href: string
}

const items: Item[] = [
  {
    name: "Tìm kiếm",
    href: "/contact/search",
  },
  {
    name: "Liên hệ đã chặn",
    href: "/contact/blocked",
  },
]

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <div className="p-2 border-r border-r-gray-200">
      {items.map((item) => (
        <Link to={item.href} key={item.name}>
          <div
            className={clsx(
              "p-3 rounded-md font-medium transition-all",
              pathname === item.href ? "bg-gray-300" : "hover:bg-gray-100",
            )}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
