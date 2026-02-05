import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import WeAreMarried from '../assets/married.svg'

const Welcome = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/main')
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        src={WeAreMarried}
        width="50%"
        alt="We are married"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
        draggable={false}
      />
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
