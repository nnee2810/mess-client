import clsx from "clsx"
import { ButtonHTMLAttributes, ReactElement } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: "primary" | "success" | "warning" | "error"
  outline?: boolean
  loading?: boolean
  fullWidth?: boolean
  beforeIcon?: ReactElement
  afterIcon?: ReactElement
}

export default function Button({
  colorScheme,
  outline,
  loading,
  fullWidth,
  beforeIcon,
  afterIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(className, "btn gap-2", {
        "btn-primary": colorScheme === "primary",
        "btn-success": colorScheme === "success",
        "btn-warning": colorScheme === "warning",
        "btn-error": colorScheme === "error",
        "btn-disabled": props.disabled,
        "btn-outline": outline,
        loading,
        "w-full": fullWidth,
      })}
    >
      {beforeIcon}
      {children}
      {afterIcon}
    </button>
  )
}
