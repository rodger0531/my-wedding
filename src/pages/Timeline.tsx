import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion, type TargetAndTransition } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import EventsImageEN from 'src/assets/events_en.svg'
import EventsImageENLarge from 'src/assets/events_en_mobile.svg'
import EventsImageZH from 'src/assets/events_zh.svg'
import EventsImageZHLarge from 'src/assets/events_zh_mobile.svg'
import TimelineImage from 'src/assets/timeline.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const getEventsImg = (isMobile: boolean, isEnglish: boolean) => {
  if (isMobile) {
    return isEnglish ? EventsImageENLarge : EventsImageZHLarge
  }
  return isEnglish ? EventsImageEN : EventsImageZH
}

const Timeline = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box pb={{ xs: 2, sm: 6 }}>
      <HalimumTitle mb={{ xs: isEnglish ? 0 : -4, sm: -4 }}>
        {t('landing.title.timeline')}
      </HalimumTitle>
      <Box position="relative">
        <ShimmeringLine />
        <Events src={getEventsImg(isMobile, isEnglish)} />
      </Box>
    </Box>
  )
}

export default Timeline

const Events: React.FC<{ src: string }> = ({ src }) => {
  const { isEnglish } = useLanguage()

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      sx={{
        width: '100%',
        mt: 4,
        position: 'absolute',
        top: { xs: isEnglish ? '5%' : '10%', sm: '8%' },
        left: 0,
      }}
    >
      <StyledImage
        src={src}
        alt="Events Timeline"
        sx={{
          width: '100%',
          transform: {
            xs: 'scale(1.1)',
            sm: isEnglish ? 'scale(1)' : 'scale(1.1)',
          },
        }}
      />
    </Box>
  )
}

const ShimmeringLine: React.FC = () => {
  return (
    <Box position="relative" display="inline-block" lineHeight={0}>
      {/* LAYER 1: The Base Image (Red line)
        This provides the permanent visual.
      */}
      <StyledImage src={TimelineImage} alt="Timeline" />

      {/* LAYER 2: The "Light" Overlay 
        This is a duplicate image sitting exactly on top.
      */}
      <motion.div
        initial={
          {
            // Start with the mask completely off to the left
            WebkitMaskPosition: '150%',
            maskPosition: '150%',
          } as TargetAndTransition
        }
        whileInView={
          {
            // Slide the mask completely to the right
            WebkitMaskPosition: '-150%',
            maskPosition: '-150%',
          } as TargetAndTransition
        }
        transition={{
          duration: 2.5,
          ease: 'easeIn',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',

          // 1. Turn this duplicate layer into white (The "Light")
          filter: 'brightness(0) invert(1) drop-shadow(0 0 2px white)',

          // 2. The Masking Magic
          // We mask this white layer with a sliding gradient.
          // Transparent = Hidden (Show base layer)
          // Black (Opaque) = Visible (Show white layer)
          WebkitMaskImage:
            'linear-gradient(110deg, transparent 35%, black 50%, transparent 65%)',
          maskImage:
            'linear-gradient(110deg, transparent 35%, black 50%, transparent 65%)',

          WebkitMaskSize: '200% 100%',
          maskSize: '200% 100%',

          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        {/* The Duplicate Image itself */}
        <StyledImage src={TimelineImage} alt="timeline shimmer" />
      </motion.div>
    </Box>
  )
}
