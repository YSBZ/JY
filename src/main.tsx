import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { App } from './App'
import { LocaleProvider } from './state/locale'
import './app.css'

const isGitHubPages = window.location.hostname.endsWith('github.io')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isGitHubPages ? (
      <HashRouter>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </HashRouter>
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </BrowserRouter>
    )}
  </React.StrictMode>,
)
