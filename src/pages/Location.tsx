import LocationPinIcon from '@mui/icons-material/LocationPin'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LocationImage from 'src/assets/location.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const LOCATION_URL = 'https://maps.app.goo.gl/qndacHT54qtPDGMs9'

// --- 1. SONAR PIN ANIMATION ---
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

// --- 2. THE SHIMMER MAP WRAPPER ---
const ShimmerMap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box position="relative" display="inline-block">
      {/* Layer 1: The Base Image (Black/Colored Ink) */}
      {children}

      {/* Layer 2: The Shimmer Overlay 
          We place this exactly on top of the image.
      */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // Allow clicks to pass through
          // --- THE MAGIC: CSS MASKING ---
          // This tells the browser: "Only show the content of this div
          // where the pixels in 'location.svg' are opaque."
          WebkitMaskImage: `url(${LocationImage})`,
          maskImage: `url(${LocationImage})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        {/* Layer 3: The Moving Light Beam 
            Because of the mask on the parent Box, this gradient 
            is only visible "inside" the SVG lines.
        */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 100,
            width: '50%', // The width of the "shine" beam
            height: '100%',
            // A sharp, angled white gradient to look like light reflection
            background:
              'linear-gradient(110deg, transparent 30%, rgba(255,255,255,1) 50%, transparent 70%)',
            transform: 'skewX(-20deg)', // Tilt the beam for speed/style
          }}
          initial={{ x: '-150%' }} // Start completely off-left
          whileInView={{ x: '300%' }} // Move completely off-right
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity, // Keep shimmering periodically
            repeatDelay: 2, // Wait 2 seconds between shimmers
            delay: 0.5,
          }}
        />
      </Box>
    </Box>
  )
}

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

      {/* THE SHIMMER MAP EFFECT */}
      <motion.div
        variants={ITEM_VARIANTS}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <ShimmerMap>
          <StyledImage
            src={LocationImage}
            alt="Location"
            sx={{
              width: { xs: '250px', sm: '350px' },
              zIndex: 1,
              // Optional: Add a drop shadow to the base image to lift it slightly
              filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.1))',
            }}
          />
        </ShimmerMap>
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
