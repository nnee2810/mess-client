import { SelectHTMLAttributes } from "react"

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "select"
}

export default function Select(props: SelectProps) {
  return <div>Select</div>
}
