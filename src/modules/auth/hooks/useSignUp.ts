import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { api } from "configs/api"
import { notMatchMessage, requiredMessage } from "helpers/validateMessage"
import { SignUpDto } from "modules/auth/dto/sign-up.dto"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"

interface FormValues extends SignUpDto {
  confirmPassword: string
}

const formSchema: yup.SchemaOf<FormValues> = yup.object().shape({
  username: yup.string().label("Tên đăng nhập").required(requiredMessage),
  password: yup.string().label("Mật khẩu").required(requiredMessage),
  confirmPassword: yup
    .string()
    .label("Nhập lại mật khẩu")
    .required(requiredMessage)
    .oneOf([yup.ref("password")], notMatchMessage),
})

export default function useSignUp() {
  const navigate = useNavigate()
  const methods = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  })
  const { mutate, isLoading } = useMutation((values: SignUpDto) =>
    api.post("/auth/sign-up", values),
  )

  const handleSubmit = methods.handleSubmit(
    ({ confirmPassword, ...values }: FormValues) => {
      mutate(values, {
        onSuccess() {
          toast.success("Tạo tài khoản thành công, hãy đăng nhập")
          navigate("/auth/sign-in")
        },
      })
    },
  )

  return { methods, handleSubmit, isLoading }
}
