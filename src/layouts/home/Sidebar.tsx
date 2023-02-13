import clsx from "clsx"
import Tooltip from "components/Tooltip"
import useAuth from "modules/auth/hooks/useAuth"
import { ReactElement } from "react"
import {
  AiOutlineComment,
  AiOutlineRollback,
  AiOutlineTeam,
} from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"

interface Item {
  name: string
  href: string
  icon: ReactElement
}

const items: Item[] = [
  {
    name: "Trò chuyện",
    href: "/messages",
    icon: <AiOutlineComment />,
  },
  {
    name: "Liên hệ",
    href: "/contact",
    icon: <AiOutlineTeam />,
  },
]

export default function Sidebar() {
  const { signOut } = useAuth()
  const location = useLocation()

  return (
    <div className="p-2 flex flex-col justify-between border-r border-r-gray-200">
      <div>
        {items.map((item) => (
          <Link to={item.href} key={item.href}>
            <div
              className={clsx(
                "py-3 flex justify-center text-2xl rounded-md transition-all",
                location.pathname.startsWith(item.href)
                  ? "bg-gray-300"
                  : "hover:bg-gray-100",
              )}
            >
              <Tooltip content={item.name} position="right">
                {item.icon}
              </Tooltip>
            </div>
          </Link>
        ))}
      </div>
      <div
        className={clsx(
          "py-3 flex justify-center text-2xl rounded-md transition-all cursor-pointer",
          "hover:bg-gray-100",
        )}
        onClick={signOut}
      >
        <Tooltip content="Đăng xuất">
          <AiOutlineRollback />
        </Tooltip>
      </div>
    </div>
  )
}
