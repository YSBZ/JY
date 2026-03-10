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
      <PageSection>
        <SectionTitle eyebrow={ui.companyEyebrow} title={copy.title} body={copy.intro} />
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.pillars.map(([title, body]) => (
            <article key={title} className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
              <h3 className="font-['Oxanium'] text-2xl text-stone-100">{title}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{body}</p>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  )
}
