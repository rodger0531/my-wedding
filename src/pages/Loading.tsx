import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import 'src/styles/loading.css'

const LoadingScreen = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0e0c3', // Match paper-like background
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: 'Arial',
          letterSpacing: 2,
          color: '#4e4e4e',
          textTransform: 'uppercase',
          fontSize: { xs: '2rem', sm: '3rem' },
        }}
      >
        {t('loading.message')}
      </Typography>
    </Box>
  )
}

export default LoadingScreen
