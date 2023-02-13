import clsx from "clsx"
import { TextareaHTMLAttributes } from "react"

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "textarea"
  isInvalid?: boolean
}

export default function Textarea({
  variant,
  isInvalid,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        "textarea textarea-bordered w-full",
        {
          "textarea-error": isInvalid,
        },
        className,
      )}
    />
  )
}
