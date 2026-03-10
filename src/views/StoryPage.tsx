import { Link } from 'react-router-dom'

import { companyCopy, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function StoryPage() {
  const { locale } = useLocale()
  const copy = companyCopy[locale]
  const ui = uiCopy[locale]

  return (
    <div className="py-14">
      <PageSection className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_48%),linear-gradient(180deg,rgba(241,190,50,0.08),transparent_42%)]">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_25%)] lg:block" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_320px]">
          <div>
            <SectionTitle eyebrow={ui.companyEyebrow} title={copy.title} body={copy.intro} />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {copy.pillars.map(([title, body], index) => (
                <article
                  key={title}
                  className="border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 font-['Oxanium'] text-2xl text-stone-100">{title}</h3>
                  <p className="mt-3 text-lg leading-7 text-stone-400">{body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-6 border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Signal</p>
              <strong className="mt-3 block font-['Oxanium'] text-6xl leading-none text-amber-300">CAT</strong>
              <p className="mt-4 text-base leading-7 text-stone-400">
                Dark metal surfaces, rigid framing, and selective safety-yellow accents set the tone. The goal is
                machinery confidence, not marketplace noise.
              </p>
            </div>
            <div className="grid gap-3 border-t border-white/10 pt-5 text-sm text-stone-400">
              <div className="flex items-center justify-between gap-4">
                <span>Brand posture</span>
                <span className="text-stone-100">Industrial / direct</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Catalog logic</span>
                <span className="text-stone-100">Family-first</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Global reading</span>
                <span className="text-stone-100">EN + multi-language</span>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>

      <PageSection className="mt-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <article className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Positioning</span>
            <h2 className="mt-4 font-['Oxanium'] text-4xl leading-[0.95] text-stone-100">
              A sharper global shell around practical machinery.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-400">
              Jiuyu does not need a generic export-site tone. The stronger move is a disciplined industrial voice that
              makes products easier to trust, easier to compare, and easier to inquire about from abroad.
            </p>
          </article>

          <article className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%),rgba(16,19,22,0.9)] p-6 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">What the site should do</span>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ['01', 'Show serious equipment without catalog clutter'],
                ['02', 'Turn social traffic into product understanding'],
                ['03', 'Support inquiries without overcomplicating the path'],
                ['04', 'Leave room for more products and more languages'],
              ].map(([index, body]) => (
                <div key={index} className="border border-white/10 bg-black/30 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{index}</div>
                  <p className="mt-3 text-base leading-7 text-stone-300">{body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </PageSection>

      <PageSection className="mt-6">
        <div className="flex flex-col gap-5 border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Next path</p>
            <h2 className="mt-3 font-['Oxanium'] text-4xl leading-[0.95] text-stone-100">
              From brand story to product depth.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center border border-amber-200/80 bg-linear-to-br from-amber-200 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5"
              to="/products"
            >
              Explore products
            </Link>
            <Link
              className="inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
              to="/contact"
            >
              {ui.formSubmit}
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  )
}
