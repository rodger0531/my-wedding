import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import CakeImage from 'src/assets/cake_2.svg'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const NotFound = () => {
  const { t, i18n } = useTranslation()
  const [isPeeping, setIsPeeping] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { isEnglish } = useLanguage()
  const navigate = useNavigate()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleButtonClick = () => {
    setIsPeeping(true)
    timeoutRef.current = setTimeout(() => navigate('/'), 2500)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Container
      maxWidth="md"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        mt: { xs: 0, sm: 10 },
      }}
    >
      <Box key={i18n.language} height="400px">
        <Typography
          className="flip-animate"
          sx={{
            fontFamily: 'subtitleFont',
            fontSize: {
              xs: isEnglish ? '5rem' : '3rem',
              sm: isEnglish ? '6rem' : '3.5rem',
            },
            lineHeight: isEnglish ? 1 : 1.5,
          }}
        >
          {t('notFound.title')}
        </Typography>
        <Typography
          className="flip-animate"
          mt={5}
          mb={10}
          align="center"
          sx={{
            fontFamily: 'subtitleFont',
            whiteSpace: 'pre-line',
            fontSize: {
              xs: isEnglish ? '2.5rem' : '1.5rem',
              sm: isEnglish ? '3.5rem' : '2.5rem',
            },
            lineHeight: isEnglish ? 1 : 1.8,
          }}
        >
          {t('notFound.message')}
        </Typography>
      </Box>
      <StyledButton onClick={handleButtonClick}>
        <AnimatePresence mode="wait">
          {!isPeeping ? (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <span key={i18n.language} className="flip-animate">
                {t('notFound.button')}
              </span>
            </motion.span>
          ) : (
            <motion.span
              key="active"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <span key={i18n.language} className="flip-animate">
                {t('notFound.navigating')}
              </span>
            </motion.span>
          )}
        </AnimatePresence>
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
