import { Link, useParams } from 'react-router-dom'

import { productDesignCopy, productFamilyCopy, products, uiCopy } from '../content/site'
import { useLocale } from '../state/locale'
import { PageSection } from '../ui/PageSection'

export function ProductPage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const ui = uiCopy[locale]
  const design = productDesignCopy[locale]
  const product = products.find((item) => item.slug === slug)
  const relatedProducts = products.filter((item) => item.slug !== slug).slice(0, 2)

  if (!product) {
    return (
      <div className="py-14">
        <PageSection className="max-w-[760px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%),rgba(16,19,22,0.92)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{ui.productCatalogEyebrow}</p>
          <h1 className="mt-3 font-['Oxanium'] text-[clamp(2.6rem,6vw,4rem)] leading-[0.94] text-stone-100">{ui.productMissing}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">
            The requested machine entry is not available in the current release. Return to the catalog to continue
            browsing the current featured equipment range.
          </p>
          <Link
            className="mt-6 inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
            to="/products"
          >
            {ui.backToProducts}
          </Link>
        </PageSection>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px] py-14">
      <Link
        className="mb-5 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-400 transition hover:text-amber-300"
        to="/products"
      >
        {ui.backToProducts}
      </Link>

      <PageSection
        className={[
          'grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_300px]',
          product.accent === 'amber'
            ? 'bg-[linear-gradient(180deg,rgba(241,190,50,0.14),transparent_50%),rgba(16,19,22,0.9)]'
            : product.accent === 'steel'
              ? 'bg-[linear-gradient(180deg,rgba(135,150,164,0.12),transparent_50%),rgba(16,19,22,0.9)]'
              : 'bg-[linear-gradient(180deg,rgba(81,87,96,0.18),transparent_50%),rgba(16,19,22,0.9)]',
        ].join(' ')}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="text-amber-300">{productFamilyCopy[product.family][locale]}</span>
            <span className="text-stone-500">/</span>
            <span className="text-stone-400">{product.category[locale]}</span>
          </div>
          <h1 className="mt-3 font-['Oxanium'] text-[clamp(3rem,7vw,5rem)] leading-[0.92] text-stone-100">
            {product.title[locale]}
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-400">{product.detail[locale]}</p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {product.specs[locale].map((spec, index) => (
              <div key={spec} className="border border-white/10 bg-black/25 px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{`0${index + 1}`}</div>
                <p className="mt-2 text-base leading-6 text-stone-300">{spec}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2 border border-white/10 bg-white/[0.03] p-5">
          <img
            alt={product.imageAlt[locale]}
            className="mb-3 h-56 w-full border border-white/10 object-cover"
            src={product.image}
          />
          <span className="text-sm text-stone-400">{product.imageLabel[locale]}</span>
          <strong className="font-['Oxanium'] text-4xl text-amber-300">{productFamilyCopy[product.family][locale]}</strong>
          <span className="text-base text-stone-400">{product.category[locale]}</span>
        </div>
      </PageSection>

      <section className="mt-6 grid gap-5 lg:grid-cols-2">
        <article className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
          <h2 className="font-['Oxanium'] text-2xl text-stone-100">{ui.productPositioning}</h2>
          <p className="mt-3 text-lg leading-7 text-stone-400">{product.summary[locale]}</p>
        </article>
        <article className="border border-white/10 bg-zinc-950/85 p-6 backdrop-blur-xl">
          <h2 className="font-['Oxanium'] text-2xl text-stone-100">{ui.productConfig}</h2>
          <ul className="mt-4 list-disc pl-5 text-base leading-7 text-stone-400">
            {product.specs[locale].map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_300px]">
        <article className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%),rgba(16,19,22,0.9)] p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{design.useCaseFraming}</p>
          <h2 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{design.useCaseTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-stone-400">{design.useCaseBody}</p>
        </article>
        <aside className="border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{design.inquiryFit}</p>
          <div className="mt-4 grid gap-3 text-base leading-7 text-stone-300">
            {design.inquiryPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </aside>
      </section>

      <Link
        className="mt-6 inline-flex items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition hover:border-amber-300/35 hover:text-amber-300"
        to="/contact"
      >
        {ui.inquireProduct}
      </Link>

      <section className="mt-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-['Oxanium'] text-3xl text-stone-100">{ui.relatedProducts}</h2>
          <Link className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300" to="/products">
            {ui.backToProducts}
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {relatedProducts.map((item) => (
            <Link
              key={item.slug}
              className="border border-white/10 bg-zinc-950/85 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/35"
              to={`/products/${item.slug}`}
            >
              <img alt={item.imageAlt[locale]} className="mb-4 h-48 w-full border border-white/10 object-cover" src={item.image} />
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="text-amber-300">{productFamilyCopy[item.family][locale]}</span>
                <span className="text-stone-500">/</span>
                <span className="text-stone-400">{item.category[locale]}</span>
              </div>
              <h3 className="mt-3 font-['Oxanium'] text-3xl text-stone-100">{item.title[locale]}</h3>
              <p className="mt-3 text-lg leading-7 text-stone-400">{item.summary[locale]}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
