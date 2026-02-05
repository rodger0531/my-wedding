import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { language } = useTranslation().i18n
  return {
    isEnglish: language === 'en',
    isChinese: language === 'zh',
  }
}
