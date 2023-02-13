import clsx from "clsx"
import Tooltip from "components/Tooltip"
import moment from "moment"
import { useUserStore } from "store/user"
import { Message } from "../interfaces/message"

interface MessageBubbleProps {
  data: Message
  isLast?: boolean
}

export default function MessageBubble({ data }: MessageBubbleProps) {
  const { user } = useUserStore()
  const isMe = user?.id === data.userId

  return (
    <div
      className={clsx("flex last:mt-auto", {
        "justify-end": isMe,
      })}
    >
      <Tooltip
        content={moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss")}
        position={isMe ? "left" : "right"}
      >
        <div
          className={clsx(
            "px-4 py-2 border border-gray-200 rounded-lg cursor-default",
            isMe ? "bg-green-200 text-right" : "bg-gray-100 text-left",
          )}
        >
          {data.message}
        </div>
      </Tooltip>
    </div>
  )
}
