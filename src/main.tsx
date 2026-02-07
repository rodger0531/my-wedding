import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/i18n/index.ts'
import App from './App'

if (import.meta.env.PROD) {
  import('src/firebase/analytics').then((m) => m.initFirebaseMetrics())
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
