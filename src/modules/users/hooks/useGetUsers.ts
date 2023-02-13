import { useQuery } from "@tanstack/react-query"
import { api } from "configs/api"
import { PaginationData } from "interfaces/pagination-data"
import queryString from "query-string"
import { GetUsersDto } from "../dto/get-users.dto"
import { User } from "../interfaces/user"

export function useGetUsers(query: GetUsersDto) {
  const qs = queryString.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-users", query],
    async () => (await api.get<PaginationData<User>>(`/users/?${qs}`)).data,
  )
}
