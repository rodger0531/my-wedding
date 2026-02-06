import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
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
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Box display="flex" minHeight="500px">
        <StyledImage src={WeAreMarried} alt="We are married" />
      </Box>
      <StyledButton
        variant="contained"
        sx={{
          fontSize: isEnglish
            ? { xs: '2rem', sm: '2.75rem' }
            : { xs: '1.5rem', sm: '1.75rem' },
          letterSpacing: isEnglish ? 1.3 : 3,
          width: { xs: '200px', sm: '300px' },
          height: { xs: '60px', sm: '100px' },
          borderRadius: 4,
          px: 2,
          mt: 2,
        }}
        onClick={handleOnClick}
      >
        {t('welcomePage.button')}
      </StyledButton>
    </Stack>
  )
}

export default Welcome
