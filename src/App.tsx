import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { articles, products, uiCopy } from './content/site'
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

  useEffect(() => {
    const path = location.pathname
    let title = 'Jiuyu Machinery'

    if (path === '/') {
      title = 'Jiuyu Machinery'
    } else if (path === '/products') {
      title = `${ui.productCatalogTitle} | Jiuyu Machinery`
    } else if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '')
      const product = products.find((item) => item.slug === slug)
      title = product ? `${product.title[locale]} | Jiuyu Machinery` : `${ui.productMissing} | Jiuyu Machinery`
    } else if (path === '/story') {
      title = `${ui.companyEyebrow} | Jiuyu Machinery`
    } else if (path === '/articles') {
      title = `${ui.articlesTitle} | Jiuyu Machinery`
    } else if (path.startsWith('/articles/')) {
      const slug = path.replace('/articles/', '')
      const article = articles.find((item) => item.slug === slug)
      title = article ? `${article.title[locale]} | Jiuyu Machinery` : `${ui.articleMissing} | Jiuyu Machinery`
    } else if (path === '/contact') {
      title = `${ui.inquiryEyebrow} | Jiuyu Machinery`
    } else {
      title = `${ui.notFoundTitle} | Jiuyu Machinery`
    }

    document.title = title
  }, [locale, location.pathname, ui])

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
