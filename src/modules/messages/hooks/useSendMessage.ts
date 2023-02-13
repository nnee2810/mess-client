import { yupResolver } from "@hookform/resolvers/yup"
import { SocketEvent } from "configs/constants"
import { socket } from "configs/socket"
import { useForm } from "react-hook-form"
import { removeWhiteSpace } from "utils/removeWhiteSpace"
import * as yup from "yup"
import { SendMessageDto } from "../dto/send-message.dto"

interface FormValues extends SendMessageDto {}

const formSchema: yup.SchemaOf<FormValues> = yup.object().shape({
  userId: yup.string().required(),
  message: yup
    .string()
    .required()
    .transform((value) => removeWhiteSpace(value)),
})

export default function useSendMessage(userId: string) {
  const methods = useForm<FormValues>({
    defaultValues: {
      userId,
      message: "",
    },
    resolver: yupResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit((values) => {
    socket.emit(SocketEvent.SEND_MESSAGE, values)
    methods.reset()
  })

  return {
    methods,
    handleSubmit,
  }
}
