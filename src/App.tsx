import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from 'src/components/Header.tsx'
import { Colours } from 'src/constants/colour.ts'
import { Fonts } from 'src/constants/fonts'
import LandingPage from 'src/pages/LandingPage.tsx'
import Welcome from 'src/pages/Welcome.tsx'
import { useLanguage } from './hooks/useLanguage'

import 'src/styles/base.css'
// Load chinese fonts separately to enable font subset splitting by vite-plugin-font for better performance.
import 'src/assets/fonts/chinese-handwriting.ttf'
import 'src/assets/fonts/gensen-rounded.otf'
import 'src/assets/fonts/honya.ttf'

const getTheme = (isEnglish: boolean) =>
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
      titleFont: isEnglish ? Fonts.EnglishHandwriting : Fonts.defaultFontFamily,
      subtitleFont: isEnglish ? Fonts.Dongle : Fonts.GenSenRounded,
      handWriting: isEnglish ? Fonts.Halimun : Fonts.ChineseHandwriting,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: isEnglish ? Fonts.Dongle : Fonts.GenSenRounded,
            fontSize: isEnglish ? '2rem' : '1.25rem',
            textTransform: 'none',
          },
        },
      },
    },
  })

const App = () => {
  const { isEnglish } = useLanguage()

  const theme = useMemo(() => {
    return getTheme(isEnglish)
  }, [isEnglish])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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
