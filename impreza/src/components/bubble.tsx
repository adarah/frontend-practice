import type { ReactNode } from "react"

interface BubbleProps {
  dark?: boolean
  children: ReactNode
}

export const Bubble = ({ dark, children }: BubbleProps) => {
  return (
    <div className="font-em rounded-xl">
      {children}
    </div>
  )
}