import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'gray'
}

export default function Section({ className, variant = 'default', children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32",
        variant === 'gray' && "bg-gray-50",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}
