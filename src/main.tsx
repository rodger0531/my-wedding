import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header.tsx'
import i18n from './i18n/index.ts'
import LandingPage from './pages/LandingPage.tsx'
import Welcome from './pages/Welcome.tsx'
import './styles/base.css'

const weddingRed = '#c13c35'

const theme = createTheme({
  palette: {
    primary: {
      main: weddingRed,
    },
    text: {
      primary: weddingRed,
      secondary: weddingRed,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="main" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
