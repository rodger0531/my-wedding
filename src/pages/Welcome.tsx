import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import WeAreMarried from 'src/assets/married.svg'
import StyledButton from 'src/components/StyledButton'
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
      <StyledButton
        variant="contained"
        sx={{
          fontSize: isEnglish ? '3rem' : '2rem',
          letterSpacing: isEnglish ? 1.3 : 3,
          width: '400px',
          height: '60px',
        }}
        onClick={handleOnClick}
      >
        {t('welcomePage.button')}
      </StyledButton>
    </Box>
  )
}

export default Welcome
