import { useQuery } from "@tanstack/react-query"
import { api } from "configs/api"
import { User } from "../interfaces/user"

export function useGetUser(id: string) {
  return useQuery(
    ["get-user", id],
    async () => (await api.get<User>(`/users/${id}`)).data,
  )
}
