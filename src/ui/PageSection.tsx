import type { ReactNode } from 'react'

export function PageSection({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={`relative mt-8 border border-white/10 bg-zinc-950/80 p-5 backdrop-blur-xl sm:p-8 ${className}`.trim()}
    >
      {children}
    </section>
  )
}
