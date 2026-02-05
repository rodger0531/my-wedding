import LanguageIcon from '@mui/icons-material/Language'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { Language } from 'src/constants/lang'
import i18n from 'src/i18n'

const Header = () => {
  const { t } = useTranslation()

  const handleChangeLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Language.EN ? Language.ZH : Language.EN,
    )
  }

  return (
    <Box position="relative" width="100%">
      <Box>
        <Button
          sx={{
            ':hover': { backgroundColor: 'transparent' },
            textTransform: 'none',
          }}
          className="wedding-red"
          onClick={handleChangeLanguage}
        >
          {t('header.language')}
          <LanguageIcon className="wedding-red" />
        </Button>
      </Box>
    </Box>
  )
}

export default Header
