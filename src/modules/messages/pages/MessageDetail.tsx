import Button from "components/Button"
import Loading from "components/loading/Loading"
import { SocketEvent } from "configs/constants"
import { socket } from "configs/socket"
import { hasScroll, scrollToBottom } from "helpers/scroll"
import { useGetUser } from "modules/users/hooks/useGetUser"
import moment from "moment"
import { useCallback, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useUserStore } from "store/user"
import MessageBubble from "../components/MessageBubble"
import MessageInput from "../components/MessageInput"
import useGetMessages from "../hooks/useGetMessages"
import { Message } from "../interfaces/message"

export default function MessageDetail() {
  const { id } = useParams<{ id: string }>()
  const { user } = useUserStore()
  const { isLoading: loadingUser, data: dataUser } = useGetUser(String(id))
  const {
    isLoading: loadingMessages,
    data: dataMessages,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetMessages(String(id))
  const [messages, setMessages] = useState<Message[]>([])

  const handleIncomingMessage = useCallback(
    (message: Message) => {
      if ([user?.id, dataUser?.id].includes(message.userId))
        setMessages((prev) => [message, ...prev])
    },
    [user, dataUser, setMessages],
  )

  useEffect(() => {
    socket.on(SocketEvent.SEND_MESSAGE, handleIncomingMessage)

    return () => {
      socket.off(SocketEvent.SEND_MESSAGE, handleIncomingMessage)
    }
  }, [handleIncomingMessage])
  useEffect(() => {
    if (messages.length && messages[messages.length - 1].userId === user?.id)
      scrollToBottom("message-detail")
  }, [messages])
  useEffect(() => {
    if (hasNextPage) {
      if (hasScroll("message-detail")) scrollToBottom("message-detail")
      else fetchNextPage()
    }
  }, [hasNextPage])

  if (loadingUser) return <Loading />
  if (dataUser)
    return (
      <div className="h-full">
        <div className="p-2 flex gap-x-2 border-b border-b-gray-200">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="h-12 rounded-full"
          />
          <div className="overflow-hidden">
            <div className="font-medium truncate">{dataUser.username}</div>
            <div className="text-xs text-gray-500 truncate">
              Active {moment(dataUser.lastSignIn).fromNow()}
            </div>
          </div>
        </div>
        <div
          className="h-[calc(100vh-129px)] p-2 flex flex-col-reverse gap-y-1.5 overflow-y-auto"
          id="message-detail"
        >
          {messages.map((message) => (
            <MessageBubble data={message} key={message.id} />
          ))}
          {dataMessages?.pages.map((page) =>
            page.data.map((message) => (
              <MessageBubble data={message} key={message.id} />
            )),
          ) || null}
          {hasNextPage && !isFetchingNextPage && (
            <div className="flex justify-center">
              <Button onClick={() => fetchNextPage()}>Tải thêm</Button>
            </div>
          )}
          {(loadingMessages || isFetchingNextPage) && <Loading />}
        </div>
        <MessageInput userId={dataUser.id} />
      </div>
    )
  return <Navigate to="/messages" />
}
