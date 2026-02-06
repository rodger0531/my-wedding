import { useTranslation } from 'react-i18next'
import { Language } from 'src/constants/lang'

export const useLanguage = () => {
  // Use resolvedLanguage to exclude region information (e.g. en-US, zh-TW).
  const { resolvedLanguage = 'en' } = useTranslation().i18n
  return {
    isEnglish: resolvedLanguage.includes(Language.EN),
    isChinese: resolvedLanguage.includes(Language.ZH),
  }
}
