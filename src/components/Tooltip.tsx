import clsx from "clsx"
import { PropsWithChildren } from "react"

interface TooltipProps extends PropsWithChildren {
  content: string
  position?: "top" | "right" | "bottom" | "left"
}

export default function Tooltip({
  content,
  position = "top",
  children,
}: TooltipProps) {
  return (
    <div
      className={clsx("tooltip", {
        "tooltip-top": position === "top",
        "tooltip-right": position === "right",
        "tooltip-bottom": position === "bottom",
        "tooltip-left": position === "left",
      })}
      data-tip={content}
    >
      {children}
    </div>
  )
}
