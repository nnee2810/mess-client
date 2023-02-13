import Button from "components/Button"
import Field from "components/field"
import useSignUp from "modules/auth/hooks/useSignUp"
import { FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const navigate = useNavigate()
  const { methods, handleSubmit, isLoading } = useSignUp()

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
          <Field
            variant="text"
            name="confirmPassword"
            type="password"
            label="Nhập lại mật khẩu"
          />
          <Button colorScheme="primary" loading={isLoading}>
            Đăng kí
          </Button>
          <Button
            colorScheme="primary"
            outline
            disabled={isLoading}
            onClick={() => navigate("/auth/sign-in")}
          >
            Đã có tài khoản
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
