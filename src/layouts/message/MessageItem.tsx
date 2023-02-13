import clsx from "clsx"
import { Converstation } from "modules/messages/interfaces/converstation"
import moment from "moment"
import { Link } from "react-router-dom"
import { useUserStore } from "store/user"

interface MessageItemProps {
  data: Converstation
}

export default function MessageItem({ data }: MessageItemProps) {
  const { user } = useUserStore()
  return (
    <Link
      to={data.user.id}
      className={clsx(
        "p-2 grid grid-cols-[48px_1fr_auto] gap-x-2 items-center transition-all",
        "hover:bg-gray-100",
      )}
    >
      <img
        src="https://picsum.photos/200"
        alt=""
        className="h-12 rounded-full"
      />
      <div className="overflow-hidden space-y-1">
        <div className="font-medium truncate">{data.user.username}</div>
        <div className="text-xs text-gray-500 truncate">
          {user?.id === data.lastMessage.userId && "Bạn: "}
          {data.lastMessage.message}
        </div>
      </div>
      <div className="text-xs text-gray-500">
        {moment(data.lastMessage.createdAt).fromNow(true)}
      </div>
    </Link>
  )
}
