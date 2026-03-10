import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { App } from './App'
import { LocaleProvider } from './state/locale'
import './app.css'

const Router = window.location.hostname.endsWith('github.io') ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </Router>
  </React.StrictMode>,
)
