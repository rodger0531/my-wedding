import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from 'src/components/Header.tsx'
import { Colours } from 'src/constants/colour.ts'
import i18n from 'src/i18n/index.ts'
import LandingPage from 'src/pages/LandingPage.tsx'
import Welcome from 'src/pages/Welcome.tsx'
import 'src/styles/base.css'

const theme = createTheme({
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
    fontFamily: 'Dongle, Helvetica, sans-serif',
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
