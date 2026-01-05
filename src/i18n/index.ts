import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zh_TW from './locales/zh_TW.json'

const resources = {
  en: { translation: en },
  zh: { translation: zh_TW },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
