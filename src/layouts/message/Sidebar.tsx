import TextInput from "components/field/TextInput"
import Loading from "components/loading/Loading"
import { SocketEvent } from "configs/constants"
import { socket } from "configs/socket"
import useGetConverstations from "modules/messages/hooks/useGetConverstations"
import { useCallback, useEffect } from "react"
import MessageItem from "./MessageItem"

export default function Sidebar() {
  const { data, refetch, isLoading, isFetchingNextPage } =
    useGetConverstations()

  const handleIncomingMessage = useCallback(() => refetch(), [refetch])

  useEffect(() => {
    socket.on(SocketEvent.SEND_MESSAGE, handleIncomingMessage)
    return () => {
      socket.off(SocketEvent.SEND_MESSAGE, handleIncomingMessage)
    }
  }, [handleIncomingMessage])

  return (
    <div className="py-2 border-r border-r-gray-200">
      <div className="px-2 mb-2">
        <TextInput placeholder="Tìm kiếm cuộc trò chuyện" />
      </div>
      <div id="message-sidebar">
        {data?.pages.map((page) =>
          page.data.map((item) => (
            <MessageItem data={item} key={item.user.id} />
          )),
        )}
        {(isLoading || isFetchingNextPage) && <Loading />}
      </div>
    </div>
  )
}
