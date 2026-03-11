import { Link } from 'react-router-dom'

import { uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'

export function NotFoundPage() {
  const { locale } = useLocale()
  const ui = uiCopy[locale]

  return (
    <div className="py-14">
      <PageSection className="max-w-[820px] overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_48%),linear-gradient(180deg,rgba(241,190,50,0.07),transparent_38%)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">404</p>
        <h1 className="mt-3 font-['Oxanium'] text-[clamp(3rem,7vw,5rem)] leading-[0.92] text-stone-100">
          {ui.notFoundTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">{ui.notFoundBody}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            className="inline-flex items-center justify-center border border-amber-200/80 bg-linear-to-br from-amber-200 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5"
            to="/"
          >
            {ui.returnHome}
          </Link>
          <Link
            className="inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
            to="/products"
          >
            {ui.backToProducts}
          </Link>
        </div>
      </PageSection>
    </div>
  )
}
