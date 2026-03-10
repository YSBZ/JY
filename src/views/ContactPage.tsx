import { contactCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactPage() {
  const { locale } = useLocale()
  const copy = contactCopy[locale]

  return (
    <div className="py-14">
      <PageSection>
        <SectionTitle eyebrow="Inquiry" title={copy.title} body={copy.intro} />

        <div className="grid gap-5 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)]">
          <div className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
            {copy.channels.map(([label, value]) => (
              <div key={label} className="mb-5 last:mb-0">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {label}
                </span>
                <strong className="text-lg text-stone-100">{value}</strong>
              </div>
            ))}
          </div>

          <form className="grid gap-4 border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">
                {locale === 'zh' ? '姓名' : 'Name'}
              </span>
              <input
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={locale === 'zh' ? '请输入姓名' : 'Your name'}
              />
            </label>
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">
                {locale === 'zh' ? '邮箱' : 'Email'}
              </span>
              <input
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder="name@company.com"
                type="email"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">
                {locale === 'zh' ? '需求内容' : 'Inquiry details'}
              </span>
              <textarea
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={
                  locale === 'zh'
                    ? '请填写产品、工况、数量或地区需求'
                    : 'Tell us the product, operating scenario, volume, and destination market'
                }
                rows={6}
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-amber-200/80 bg-linear-to-br from-amber-200 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5"
            >
              {locale === 'zh' ? '提交需求' : 'Send inquiry'}
            </button>
          </form>
        </div>
      </PageSection>
    </div>
  )
}
