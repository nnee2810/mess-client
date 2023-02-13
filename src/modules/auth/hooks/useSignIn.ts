import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { api } from "configs/api"
import { Key } from "configs/constants"
import { requiredMessage } from "helpers/validateMessage"
import { SignInDto } from "modules/auth/dto/sign-in.dto"
import { User } from "modules/users/interfaces/user"
import { useForm } from "react-hook-form"
import { useUserStore } from "store/user"
import * as yup from "yup"

interface FormValues extends SignInDto {}

const formSchema: yup.SchemaOf<FormValues> = yup.object().shape({
  username: yup.string().label("Tên đăng nhập").required(requiredMessage),
  password: yup.string().label("Mật khẩu").required(requiredMessage),
})

export default function useSignIn() {
  const { setUser } = useUserStore()
  const methods = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  })
  const { mutate, isLoading } = useMutation(
    (values: SignInDto) =>
      api.post<{ token: string; user: User }>("/auth/sign-in", values),
    {
      onSuccess({ data: { token, user } }) {
        localStorage.setItem(Key.TOKEN, token)
        setUser(user)
      },
    },
  )

  const handleSubmit = methods.handleSubmit((values: FormValues) =>
    mutate(values),
  )

  return {
    methods,
    handleSubmit,
    isLoading,
  }
}
