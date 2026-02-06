import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CakeImage from 'src/assets/cake_2.svg'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const NotFound = () => {
  const { t } = useTranslation()
  const [isPeeping, setIsPeeping] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { isEnglish } = useLanguage()

  const handleButtonClick = () => {
    setIsPeeping(true)
    setTimeout(() => setIsPeeping(false), 2500)
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        mt: 10,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: {
            xs: isEnglish ? '5rem' : '2rem',
            sm: isEnglish ? '5rem' : '4rem',
          },
        }}
      >
        {t('notFound.title')}
      </Typography>
      <Typography
        mt={5}
        mb={10}
        align="center"
        sx={{
          fontFamily: 'subtitleFont',
          whiteSpace: 'pre-line',
          fontSize: {
            xs: isEnglish ? '2.5rem' : '1.2rem',
            sm: isEnglish ? '3.5rem' : '2.5rem',
          },
          lineHeight: isEnglish ? 1 : 1.5,
        }}
      >
        {t('notFound.message')}
      </Typography>
      <StyledButton onClick={handleButtonClick}>
        {t('notFound.button')}
      </StyledButton>

      <AnimatePresence>
        {isPeeping && (
          <motion.div
            initial={{ x: '100%' }} // Start completely off-screen to the right
            animate={{
              x: ['100%', '40%', '58%', '62%', '58%', '62%', '100%'],
              rotate: [0, 0, -5, 5, -10, 10, 0], // Add a little tilt during the jitter
            }}
            transition={{
              duration: 2,
              times: [0, 0.8, 0.82, 0.85, 0.88, 0.9, 1], // Controls the pacing of each stage
              ease: 'easeInOut',
            }}
            style={{
              position: 'fixed',
              right: 0,
              top: isMobile ? '70%' : '60%',
              zIndex: 10,
            }}
          >
            <StyledImage
              src={CakeImage}
              alt="Cake"
              sx={{ width: { xs: '250px', sm: '350px' }, height: 'auto' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default NotFound
