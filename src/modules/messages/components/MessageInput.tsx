import Field from "components/field"
import { FormProvider } from "react-hook-form"
import useSendMessage from "../hooks/useSendMessage"

interface MessageInputProps {
  userId: string
}

export default function MessageInput({ userId }: MessageInputProps) {
  const { methods, handleSubmit } = useSendMessage(userId)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="p-2">
        <Field variant="text" name="message" placeholder="Nhập tin nhắn..." />
      </form>
    </FormProvider>
  )
}
