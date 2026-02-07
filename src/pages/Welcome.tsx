import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion, type Easing } from 'framer-motion'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import HandsImage from 'src/assets/welcome_hands.svg'
import TitleImage from 'src/assets/welcome_title.svg'
import OurName from 'src/components/OurName'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

// 1. Container controls the sequence
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
  // The exit animation when button is clicked
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
    transition: { duration: 0.8, ease: 'easeInOut' as Easing },
  },
}

// 2. Elements floating UP
const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' as Easing },
  },
}

// 3. Elements floating DOWN
const FADE_DOWN = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' as Easing },
  },
}

// 4. Simple Fade
const FADE_IN = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' as Easing },
  },
}

const Welcome = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { isEnglish } = useLanguage()
  const [isExiting, setIsExiting] = useState(false)

  const handleOnClick = () => {
    setIsExiting(true)
    setTimeout(() => {
      navigate('/main')
    }, 300)
  }

  return (
    <Stack
      component={motion.div}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate={isExiting ? 'exit' : 'visible'}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      sx={{ mt: -5 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="500px"
      >
        {/* 1. Title: Floats Down */}
        <motion.div variants={FADE_DOWN}>
          <StyledImage
            src={TitleImage}
            alt="We are married"
            sx={{
              width: { xs: '250px', sm: '350px' },
              mb: 2,
            }}
          />
        </motion.div>

        {/* 2. Hands: Floats Up + "Gentle Sway" Animation */}
        <motion.div variants={FADE_UP}>
          <motion.div
            style={{ transformOrigin: 'bottom center' }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <StyledImage
              src={HandsImage}
              alt="Holding hands"
              sx={{
                width: { xs: '300px', sm: '450px' },
              }}
            />
          </motion.div>
        </motion.div>

        <Box textAlign="center">
          {/* 3. Name: Fades In */}
          <motion.div variants={FADE_IN}>
            <OurName
              sx={{
                letterSpacing: 0,
                fontSize: { xs: '4.5rem', sm: '6rem' },
                lineHeight: 0.75,
                display: 'inline-block',
              }}
            />
          </motion.div>

          {/* 4. Date: Fades In */}
          <motion.div variants={FADE_IN}>
            <Typography
              key={i18n.language}
              className="flip-animate"
              align="center"
              sx={{
                fontFamily: 'subtitleFont',
                fontSize: isEnglish
                  ? { xs: '2.5rem', sm: '3rem' }
                  : { xs: '1.5rem', sm: '1.8rem' },
                lineHeight: isEnglish ? { xs: 1.2, sm: 1 } : { xs: 2, sm: 1.8 },
                mt: isEnglish ? 0 : { xs: 1, sm: 1 },
              }}
            >
              <Trans
                i18nKey="welcomePage.fullWeddingDate"
                components={{
                  sup: <sup />,
                }}
              />
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* 5. Button: Fades Up + Heartbeat Shadow Pulse */}
      <motion.div variants={FADE_UP}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0px 0px 0px rgba(0,0,0,0)',
              '0px 4px 20px rgba(0,0,0,0.1)',
              '0px 0px 0px rgba(0,0,0,0)',
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <StyledButton
            variant="contained"
            sx={{
              fontSize: isEnglish
                ? { xs: '2rem', sm: '2.75rem' }
                : { xs: '1.5rem', sm: '1.75rem' },
              letterSpacing: isEnglish ? 1.3 : 3,
              width: { xs: '200px', sm: '300px' },
              height: { xs: '60px', sm: '60px' },
              borderRadius: 4,
              px: 2,
              mt: 2,
            }}
            onClick={handleOnClick}
          >
            <span key={i18n.language} className="flip-animate">
              {t('welcomePage.button')}
            </span>
          </StyledButton>
        </motion.div>
      </motion.div>
    </Stack>
  )
}

export default Welcome
