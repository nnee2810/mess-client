import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { api } from "configs/api"
import { User } from "modules/users/interfaces/user"
import { useUserStore } from "store/user"

export default function useAuth() {
  const { setUser, clearUser } = useUserStore()

  const { mutate: checkAuth } = useMutation(
    () => api.post<User>("/auth/check"),
    {
      onSuccess({ data }) {
        setUser(data)
      },
      onError(error: AxiosError) {
        if (error.code === "401") localStorage.clear()
        clearUser()
      },
    },
  )
  const signOut = () => {
    localStorage.clear()
    clearUser()
  }

  return { checkAuth, signOut }
}
