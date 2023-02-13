import { useInfiniteQuery } from "@tanstack/react-query"
import { api } from "configs/api"
import { PaginationData } from "interfaces/pagination-data"
import { Message } from "../interfaces/message"

export default function useGetMessages(id: string) {
  return useInfiniteQuery(
    ["get-messages", id],
    async ({ pageParam = 0 }) =>
      (
        await api.get<PaginationData<Message>>(
          `/messages/${id}?skip=${pageParam}`,
        )
      ).data,
    {
      getNextPageParam(lastPage) {
        if (lastPage.skip + lastPage.take < lastPage.total)
          return lastPage.skip + lastPage.take
        return undefined
      },
    },
  )
}
