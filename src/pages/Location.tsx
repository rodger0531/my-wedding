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

      <motion.div
        variants={ITEM_VARIANTS}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-block' }}
        >
          {/* 3. Floating Loop Config */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0,
            }}
          >
            <StyledImage
              src={LocationImage}
              alt="Location"
              sx={{
                width: { xs: '250px', sm: '350px' },
                filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))',
              }}
            />
          </motion.div>
        </motion.div>
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
