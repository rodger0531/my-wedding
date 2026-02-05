import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { StrictMode, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from 'src/components/Header.tsx'
import { Colours } from 'src/constants/colour.ts'
import i18n from 'src/i18n/index.ts'
import LandingPage from 'src/pages/LandingPage.tsx'
import Welcome from 'src/pages/Welcome.tsx'
import 'src/styles/base.css'

const getTheme = (language: string) =>
  createTheme({
    palette: {
      primary: {
        main: Colours.WeddingRed,
      },
      text: {
        primary: Colours.WeddingRed,
        secondary: Colours.WeddingRed,
      },
    },
    typography: {
      titleFont: language === 'en' ? 'Better Together' : 'Honya',
      subtitleFont: language === 'en' ? 'Dongle' : 'Helvetica',
    },
  })

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const { i18n: i18nInstance } = useTranslation()

  const theme = useMemo(
    () => getTheme(i18nInstance.language),
    [i18nInstance.language],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="main" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
