import { contactCopy, products, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactPage() {
  const { locale } = useLocale()
  const copy = contactCopy[locale]
  const ui = uiCopy[locale]
  const inquiryTypes = [
    ui.inquiryTypeGeneral,
    ui.inquiryTypeQuote,
    ui.inquiryTypeDistributor,
    ui.inquiryTypeAfterSales,
  ]

  return (
    <div className="py-14">
      <PageSection className="overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%),linear-gradient(180deg,rgba(241,190,50,0.08),transparent_42%)]">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <SectionTitle eyebrow={ui.inquiryEyebrow} title={copy.title} body={copy.intro} />
            <div className="grid gap-4">
              {copy.channels.map(([label, value], index) => (
                <div key={label} className="border border-white/10 bg-zinc-950/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                      {label}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{`0${index + 1}`}</span>
                  </div>
                  <div className="mt-3">
                    {label.toLowerCase().includes('mail') || label.includes('邮箱') || label.includes('البريد') ? (
                      <a className="text-lg text-stone-100 transition hover:text-amber-300" href={`mailto:${value}`}>
                        {value}
                      </a>
                    ) : (label.toLowerCase().includes('whatsapp') || label.includes('واتساب')) && /\d/.test(value) ? (
                      <a
                        className="text-lg text-stone-100 transition hover:text-amber-300"
                        href={`https://wa.me/${value.replace(/[^\d]/g, '')}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {value}
                      </a>
                    ) : label.toLowerCase().includes('whatsapp') || label.includes('واتساب') ? (
                      <strong className="text-lg text-stone-100">{value}</strong>
                    ) : (
                      <strong className="text-lg text-stone-100">{value}</strong>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form className="grid gap-4 border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">
                {ui.formName}
              </span>
              <input
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={ui.formNamePlaceholder}
              />
            </label>
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">{ui.formEmail}</span>
              <input
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={ui.formEmailPlaceholder}
                type="email"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">{ui.formCompany}</span>
              <input
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={ui.formCompanyPlaceholder}
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">{ui.formProduct}</span>
                <select className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none focus:border-amber-300/40">
                  {products.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.title[locale]}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">{ui.formInquiryType}</span>
                <select className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none focus:border-amber-300/40">
                  {inquiryTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-stone-400">{ui.formDetails}</span>
              <textarea
                className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-300/40"
                placeholder={ui.formDetailsPlaceholder}
                rows={6}
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-amber-200/80 bg-linear-to-br from-amber-200 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5"
            >
              {ui.formSubmit}
            </button>
            <p className="text-sm leading-6 text-stone-500">{ui.formResponseNote}</p>
          </form>
        </div>
      </PageSection>
    </div>
  )
}
