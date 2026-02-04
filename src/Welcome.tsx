import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import WeAreMarried from './assets/married.svg'

const Welcome = () => {
  const { t } = useTranslation()
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
          fontSize: '1.5rem',
          padding: '0.75rem 5rem',
          borderRadius: '16px',
          textTransform: 'none',
        }}
      >
        {t('welcomePage.button')}
      </Button>
    </Box>
  )
}

export default Welcome
