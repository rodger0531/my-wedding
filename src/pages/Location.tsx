import LocationPinIcon from '@mui/icons-material/LocationPin'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Easing,
} from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LocationImage from 'src/assets/location.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const LOCATION_URL = 'https://maps.app.goo.gl/qndacHT54qtPDGMs9'

// --- 1. THE 3D MAP CARD LOGIC ---
const Map3D: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth out the mouse movements so the tilt feels weighty, not jittery
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  // Calculate rotation based on mouse position
  // 30/-30 are the degrees of tilt. Increase for more extreme tilt.
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2

    // Normalize values between -0.5 and 0.5
    x.set(mouseXFromCenter / width)
    y.set(mouseYFromCenter / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        cursor: 'grab',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const SonarPin = () => (
  <Box
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {/* The Ripple Effect */}
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        zIndex: 0,
      }}
      animate={{
        scale: [1, 2],
        opacity: [0.6, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
    {/* The Actual Icon */}
    <LocationPinIcon style={{ position: 'relative', zIndex: 1 }} />
  </Box>
)

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

const Location = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid
      container
      component={motion.div}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      flexDirection="column"
      alignItems="center"
    >
      <motion.div variants={ITEM_VARIANTS}>
        <HalimumTitle
          mb={isEnglish ? 4 : 2.75}
          mt={isEnglish ? { xs: 1, sm: 0 } : { xs: 0, sm: 5 }}
        >
          {t('landing.title.location')}
        </HalimumTitle>
      </motion.div>

      {/* THE 3D MAP EFFECT */}
      <motion.div
        variants={ITEM_VARIANTS}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Map3D>
          <StyledImage
            src={LocationImage}
            alt="Location"
            sx={{
              width: { xs: '250px', sm: '350px' },
              filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))',
            }}
          />
        </Map3D>
      </motion.div>

      <motion.div variants={ITEM_VARIANTS}>
        <Typography
          variant="subtitle2"
          align="center"
          mt={isEnglish ? 4 : 2}
          sx={{ fontFamily: 'subtitleFont' }}
        >
          {t('landing.address1')}
        </Typography>
      </motion.div>

      <motion.div variants={ITEM_VARIANTS}>
        <Typography
          variant="h3"
          letterSpacing={isEnglish ? 0 : 4}
          align="center"
          mb={2}
          sx={{ fontFamily: 'subtitleFont' }}
        >
          {t('landing.address2')}
        </Typography>
      </motion.div>

      <motion.div
        variants={ITEM_VARIANTS}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <StyledButton
          component="a"
          href={LOCATION_URL}
          startIcon={<SonarPin />}
        >
          {t('landing.mapButton')}
        </StyledButton>
      </motion.div>
    </Grid>
  )
}

export default Location
