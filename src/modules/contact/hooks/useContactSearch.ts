import { useGetUsers } from "modules/users/hooks/useGetUsers"
import { useForm } from "react-hook-form"

interface FormValues {
  username: string
}

export function useContactSearch() {
  const methods = useForm<FormValues>({
    defaultValues: {
      username: "",
    },
  })
  const { username } = methods.watch()

  const { isLoading, data } = useGetUsers({
    username,
  })

  const handleSubmit = methods.handleSubmit((values) => {
    console.log(values)
  })

  return {
    methods,
    handleSubmit,
    isLoading,
    data,
  }
}
