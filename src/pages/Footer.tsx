import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FooterImage from 'src/assets/footer_image.webp'
import StyledImage from 'src/components/StyledImage'
import { Fonts } from 'src/constants/fonts'
import { useLanguage } from 'src/hooks/useLanguage'

// Animation Variants
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as Easing },
  },
}

const Footer = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Stack
      component={m.footer}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        mt: 5,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ flexWrap: 'nowrap', alignItems: 'center' }}
      >
        <Box
          component={m.div}
          variants={ITEM_VARIANTS}
          sx={{ width: { xs: '80%', sm: '400px' }, minWidth: '300px' }}
        >
          <StyledImage src={FooterImage} alt="Footer" />
        </Box>
        <Box
          component={m.div}
          variants={ITEM_VARIANTS}
          sx={{ mt: { xs: 3, sm: 0 } }}
        >
          <Typography
            align="center"
            sx={{
              fontFamily: 'subtitleFont',
              fontSize: {
                xs: isEnglish ? '2rem' : '1.3rem',
                sm: isEnglish ? '2.5rem' : '1.5rem',
              },
              lineHeight: {
                xs: isEnglish ? 0.8 : 1.2,
                sm: isEnglish ? 0.8 : 1.6,
              },
              px: { xs: 2, sm: 4 },
            }}
          >
            {t('landing.footerMsg')}
          </Typography>
        </Box>
      </Stack>
      <NameWave />
    </Stack>
  )
}

export default Footer

// 1. Entrance Variants (The fade-in and slide-up)
// Controlled by the parent Stagger
const ENTRANCE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as Easing },
  },
}

const NameWave = ({ sx = {}, ...props }) => {
  const name = 'Rodger & Claire'
  const letters = Array.from(name)

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // Stagger the entrance of each letter wrapper
      transition={{ staggerChildren: 0.05 }}
      style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
    >
      <Typography
        component="div"
        align="center"
        sx={{
          fontFamily: Fonts.EnglishHandwriting,
          fontSize: { xs: '4rem', sm: '6rem' },
          display: 'flex',
          whiteSpace: 'pre', // Crucial for keeping spaces
          ...sx,
        }}
        {...props}
      >
        {letters.map((char, index) => (
          // WRAPPER SPAN: Handles the one-time Entrance (Slide Up + Fade In)
          <m.span
            key={index}
            variants={ENTRANCE_VARIANTS}
            style={{ display: 'inline-block' }}
          >
            {/* INNER SPAN: Handles the Infinite Wave (Jump Up and Down) */}
            <m.span
              animate={{
                y: [0, -20, 10, 0],
              }}
              transition={{
                duration: 0.4, // Speed of one jump
                repeat: Infinity,
                ease: 'easeIn', // Makes the jump look smooth (slow at top/bottom)
                delay: 1 + index * 0.03, // Wait for entrance to finish, then ripple
                repeatDelay: 2.5, // Delay before next jump
              }}
              style={{ display: 'inline-block' }}
            >
              {char}
            </m.span>
          </m.span>
        ))}
      </Typography>
    </m.div>
  )
}
