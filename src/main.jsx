import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TranslationProvider } from './contexts/translationContext'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider >
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </HelmetProvider>
  </StrictMode>
)
