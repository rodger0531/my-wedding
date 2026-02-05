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
    <Box
      position="sticky"
      top={0}
      width="100%"
      zIndex={10}
      sx={{ textAlign: 'right', mt: -4 }}
    >
      <Button
        sx={{
          ':hover': { backgroundColor: 'transparent' },
          textTransform: 'none',
          fontSize: '1rem',
        }}
        className="wedding-red"
        onClick={handleChangeLanguage}
        startIcon={<LanguageIcon />}
        size="large"
      >
        {t('header.language')}
      </Button>
    </Box>
  )
}

export default Header
