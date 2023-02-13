import Button from "components/Button"
import Field from "components/field"
import useSignIn from "modules/auth/hooks/useSignIn"
import { FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const navigate = useNavigate()
  const { methods, handleSubmit, isLoading } = useSignIn()

  return (
    <div className="h-screen flex justify-center items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full flex flex-col space-y-2"
        >
          <Field variant="text" name="username" label="Tên đăng nhập" />
          <Field
            variant="text"
            name="password"
            type="password"
            label="Mật khẩu"
          />
          <Button colorScheme="primary" loading={isLoading}>
            Đăng nhập
          </Button>
          <Button
            colorScheme="primary"
            outline
            disabled={isLoading}
            onClick={() => navigate("/auth/sign-up")}
          >
            Chưa có tài khoản
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
