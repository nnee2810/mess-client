import { useInfiniteQuery } from "@tanstack/react-query"
import { api } from "configs/api"
import { PaginationData } from "interfaces/pagination-data"
import { Converstation } from "../interfaces/converstation"

export default function useGetConverstations() {
  return useInfiniteQuery(
    ["get-converstations"],
    async ({ pageParam = 0 }) =>
      (
        await api.get<PaginationData<Converstation>>(
          `/messages?skip=${pageParam}`,
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
