import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AnimatePresence, motion, type Easing } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import CakeImage from 'src/assets/cake_2.svg'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

// "Broken Sign" Animation
const HINGE_VARIANTS = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, -4, 2, -1, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut' as Easing,
      repeat: Infinity,
      repeatDelay: 4,
    },
  },
}

// "Smoky" Reveal
const SMOKE_VARIANTS = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 1.5, ease: 'easeOut' as Easing, delay: 0.5 },
  },
}

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '80vh',
        mt: { xs: 0, sm: 10 },
      }}
    >
      <Box
        key={i18n.language}
        height="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={4}
      >
        {/* Animated "Oops..." */}
        <motion.div
          variants={HINGE_VARIANTS}
          initial="initial"
          animate="animate"
          style={{ transformOrigin: 'top left' }}
        >
          <Typography
            sx={{
              fontFamily: 'subtitleFont',
              fontSize: {
                xs: isEnglish ? '5rem' : '3rem',
                sm: isEnglish ? '6rem' : '3.5rem',
              },
              lineHeight: isEnglish ? 1 : 1.5,
              transform: 'rotate(-7deg)',
              textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            }}
          >
            {t('notFound.title')}
          </Typography>
        </motion.div>

        {/* Smoky Message Reveal */}
        <motion.div
          variants={SMOKE_VARIANTS}
          initial="hidden"
          animate="visible"
          key={i18n.language}
        >
          <Typography
            mt={8}
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
        </motion.div>
      </Box>

      <StyledButton
        onClick={handleButtonClick}
        sx={{
          minWidth: { xs: '200px', sm: '250px' },
          zIndex: 20,
        }}
      >
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

      {/* The Peeping Cake */}
      <AnimatePresence>
        {isPeeping && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{
              x: ['100%', '40%', '58%', '62%', '58%', '62%', '100%'],
              rotate: [0, 0, -5, 5, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.8, 0.82, 0.85, 0.88, 0.9, 1],
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
