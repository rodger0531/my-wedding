import { createTheme, ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header.tsx'
import i18n from './i18n/index.ts'
import './styles/base.css'
import Welcome from './Welcome.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#c13c35',
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route path="main" element={} /> */}
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
