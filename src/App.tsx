import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { articles, companyCopy, contactCopy, homeCopy, products, uiCopy } from './content/site'
import { useLocale } from './state/locale'
import { Shell } from './ui/Shell'
import { ArticlePage } from './views/ArticlePage'
import { ArticlesPage } from './views/ArticlesPage'
import { ContactPage } from './views/ContactPage'
import { HomePage } from './views/HomePage'
import { NotFoundPage } from './views/NotFoundPage'
import { ProductPage } from './views/ProductPage'
import { ProductsPage } from './views/ProductsPage'
import { StoryPage } from './views/StoryPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function RouteMetadata() {
  const location = useLocation()
  const { locale } = useLocale()
  const ui = uiCopy[locale]
  const home = homeCopy[locale]
  const company = companyCopy[locale]
  const contact = contactCopy[locale]

  useEffect(() => {
    const path = location.pathname
    const siteUrl = new URL(path === '/' ? '/' : path, window.location.origin).toString()
    const shareImage = new URL('/og-image.svg', window.location.origin).toString()
    let title = 'Jiuyu Machinery'
    let description = home.intro

    if (path === '/') {
      title = 'Jiuyu Machinery'
      description = home.intro
    } else if (path === '/products') {
      title = `${ui.productCatalogTitle} | Jiuyu Machinery`
      description = ui.productCatalogBody
    } else if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '')
      const product = products.find((item) => item.slug === slug)
      title = product ? `${product.title[locale]} | Jiuyu Machinery` : `${ui.productMissing} | Jiuyu Machinery`
      description = product ? product.summary[locale] : ui.productMissingBody
    } else if (path === '/story') {
      title = `${ui.companyEyebrow} | Jiuyu Machinery`
      description = company.intro
    } else if (path === '/articles') {
      title = `${ui.articlesTitle} | Jiuyu Machinery`
      description = ui.articlesBody
    } else if (path.startsWith('/articles/')) {
      const slug = path.replace('/articles/', '')
      const article = articles.find((item) => item.slug === slug)
      title = article ? `${article.title[locale]} | Jiuyu Machinery` : `${ui.articleMissing} | Jiuyu Machinery`
      description = article ? article.excerpt[locale] : ui.articleMissingBody
    } else if (path === '/contact') {
      title = `${ui.inquiryEyebrow} | Jiuyu Machinery`
      description = contact.intro
    } else {
      title = `${ui.notFoundTitle} | Jiuyu Machinery`
      description = ui.notFoundBody
    }

    document.title = title
    const descriptionMeta = document.querySelector('meta[name="description"]')
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    const ogTitleMeta = document.querySelector('meta[property="og:title"]')
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
    const ogUrlMeta = document.querySelector('meta[property="og:url"]')
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]')
    const twitterUrlMeta = document.querySelector('meta[name="twitter:url"]')
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]')

    descriptionMeta?.setAttribute('content', description)
    canonicalLink?.setAttribute('href', siteUrl)
    ogTitleMeta?.setAttribute('content', title)
    ogDescriptionMeta?.setAttribute('content', description)
    ogUrlMeta?.setAttribute('content', siteUrl)
    ogImageMeta?.setAttribute('content', shareImage)
    twitterTitleMeta?.setAttribute('content', title)
    twitterDescriptionMeta?.setAttribute('content', description)
    twitterUrlMeta?.setAttribute('content', siteUrl)
    twitterImageMeta?.setAttribute('content', shareImage)
  }, [company.intro, contact.intro, home.intro, locale, location.pathname, ui])

  return null
}

export function App() {
  return (
    <Shell>
      <ScrollToTop />
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Shell>
  )
}
