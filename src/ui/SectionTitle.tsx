export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-['Oxanium'] text-[clamp(2rem,4vw,3.25rem)] leading-none text-stone-100">
        {title}
      </h2>
      {body ? <p className="mt-3 text-lg leading-7 text-stone-400">{body}</p> : null}
    </div>
  )
}
