import { Controller, useFormContext } from "react-hook-form"
import Select, { SelectProps } from "./Select"
import Textarea, { TextareaProps } from "./Textarea"
import TextInput, { TextInputProps } from "./TextInput"

interface FieldBaseProps {
  name: string
  label?: string
}

type FieldProps = (TextInputProps | SelectProps | TextareaProps) &
  FieldBaseProps

export default function Field(props: FieldProps) {
  const { variant, name, label } = props
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      {label && <div className="text-sm">{label}</div>}
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...restField } }) => (
          <>
            {variant === "text" && (
              <TextInput isInvalid={!!errors[name]} {...props} {...restField} />
            )}
            {variant === "select" && <Select {...props} {...restField} />}
            {variant === "textarea" && (
              <Textarea isInvalid={!!errors[name]} {...props} {...restField} />
            )}
          </>
        )}
      />

      {errors[name] && (
        <div className="text-xs text-red-500">
          {String(errors[name]?.message)}
        </div>
      )}
    </div>
  )
}
