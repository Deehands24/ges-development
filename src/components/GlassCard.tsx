import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function GlassCard({ className, hover = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
