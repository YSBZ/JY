import { Route, Routes } from 'react-router-dom'

import { Shell } from './ui/Shell'
import { ArticlePage } from './views/ArticlePage'
import { ArticlesPage } from './views/ArticlesPage'
import { ContactPage } from './views/ContactPage'
import { HomePage } from './views/HomePage'
import { NotFoundPage } from './views/NotFoundPage'
import { ProductPage } from './views/ProductPage'
import { ProductsPage } from './views/ProductsPage'
import { StoryPage } from './views/StoryPage'

export function App() {
  return (
    <Shell>
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
