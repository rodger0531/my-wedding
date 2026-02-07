import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { domAnimation, LazyMotion } from 'framer-motion'
import { lazy, Suspense, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from 'src/components/Header.tsx'
import { Colours } from 'src/constants/colour.ts'
import { Fonts } from 'src/constants/fonts'
import { useLanguage } from 'src/hooks/useLanguage'
import Welcome from 'src/pages/Welcome.tsx'

import 'src/styles/animations.css'
import 'src/styles/base.css'
// Load chinese fonts separately to enable font subset splitting by vite-plugin-font for better performance.
import 'src/assets/fonts/chinese-handwriting.ttf'
import 'src/assets/fonts/gensen-rounded.otf'
import 'src/assets/fonts/honya.ttf'

const LandingPage = lazy(() => import('src/pages/LandingPage'))
const NotFound = lazy(() => import('src/pages/NotFound'))

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
      h1: {
        fontSize: isEnglish ? '6rem' : '3rem',
      },
      h2: {
        fontSize: isEnglish ? '3.75rem' : '4rem',
      },
      h3: {
        fontSize: isEnglish ? '3rem' : '2rem',
      },
      h4: {
        fontSize: isEnglish ? '2rem' : '1.5rem',
      },
      subtitle1: {
        fontSize: '5rem',
      },
      subtitle2: {
        fontSize: isEnglish ? '4.5rem' : '3rem',
        fontFamily: isEnglish ? Fonts.Dongle : Fonts.GenSenRounded,
        letterSpacing: isEnglish ? 0 : 2,
      },
    },
  })

const App = () => {
  const { isEnglish } = useLanguage()

  const theme = useMemo(() => {
    return responsiveFontSizes(getTheme(isEnglish))
  }, [isEnglish])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LazyMotion features={domAnimation} strict>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Welcome />} />
              <Route path="main" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </LazyMotion>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
