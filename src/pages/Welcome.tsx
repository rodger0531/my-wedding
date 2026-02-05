import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import WeAreMarried from 'src/assets/married.svg'
import StyledImage from 'src/components/StyledImage'

const Welcome = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/main')
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <StyledImage src={WeAreMarried} width="50%" alt="We are married" />
      <Button
        variant="contained"
        sx={{
          fontSize: '2.5rem',
          padding: '0 3rem',
          borderRadius: '16px',
          textTransform: 'none',
          fontFamily: 'Dongle',
        }}
        onClick={handleOnClick}
      >
        {t('welcomePage.button')}
      </Button>
    </Box>
  )
}

export default Welcome
