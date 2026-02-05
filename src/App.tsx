import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from 'src/components/Header.tsx'
import { Colours } from 'src/constants/colour.ts'
import LandingPage from 'src/pages/LandingPage.tsx'
import Welcome from 'src/pages/Welcome.tsx'
import 'src/styles/base.css'
// Load chinese fonts separately to enable font subset splitting by vite-plugin-font for better performance.
import 'src/assets/fonts/gensen-rounded.otf';
import 'src/assets/fonts/chinese-handwriting.ttf';
import 'src/assets/fonts/honya.ttf';

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
      // Honya font = default_font_family
      titleFont: language === 'en' ? 'Better Together' : 'default_font_family',
      // GenSenRounded2 TW M = gensen-rounded
      subtitleFont: language === 'en' ? 'Dongle' : 'GenSenRounded2 TW M',
      // chinese-handwriting = 辰宇落雁體 Thin
      handWriting: language === 'en' ? 'Halimun' : '辰宇落雁體 Thin',
    },
  })

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

export default App