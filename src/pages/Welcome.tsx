import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import WeAreMarried from 'src/assets/married.svg'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Welcome = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isEnglish } = useLanguage()

  const handleOnClick = () => {
    navigate('/main')
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <StyledImage src={WeAreMarried} width="50%" alt="We are married" />
      <Button
        variant="contained"
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: isEnglish ? '3rem' : '2rem',
          lineHeight: isEnglish ? 1.5 : 2.25,
          letterSpacing: isEnglish ? 1.3 : 3,
          width: '400px',
          padding: '0 3rem',
          borderRadius: '32px',
          textTransform: 'none',
        }}
        onClick={handleOnClick}
      >
        {t('welcomePage.button')}
      </Button>
    </Box>
  )
}

export default Welcome
