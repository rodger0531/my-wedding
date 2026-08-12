import LocationPinIcon from '@mui/icons-material/LocationPin'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LocationImage from 'src/assets/location.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { LocationURL } from 'src/constants/location'
import { useLanguage } from 'src/hooks/useLanguage'

const SonarPin = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* The Ripple Effect */}
    <m.div
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
      component={m.div}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <m.div variants={ITEM_VARIANTS}>
        <HalimumTitle
          sx={{
            mb: isEnglish ? 4 : 2.75,
            mt: isEnglish ? { xs: 1, sm: 0 } : { xs: 0, sm: 5 },
          }}
        >
          {t('landing.title.location')}
        </HalimumTitle>
      </m.div>

      <m.div
        variants={ITEM_VARIANTS}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <m.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-block' }}
        >
          {/* 3. Floating Loop Config */}
          <m.div
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
          </m.div>
        </m.div>
      </m.div>

      <m.div variants={ITEM_VARIANTS}>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            mt: isEnglish ? 4 : 2,
            fontFamily: 'subtitleFont',
          }}
        >
          {t('landing.address1')}
        </Typography>
      </m.div>

      <m.div variants={ITEM_VARIANTS}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            letterSpacing: isEnglish ? 0 : 4,
            lineHeight: {
              xs: isEnglish ? 0.8 : 1.5,
              sm: isEnglish ? 1.2 : 1.3,
            },
            mt: { xs: 0, sm: isEnglish ? -3 : 0 },
            mb: 2,
            fontFamily: 'subtitleFont',
          }}
        >
          {t('landing.address2')}
        </Typography>
      </m.div>

      <m.div
        variants={ITEM_VARIANTS}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <StyledButton
          component="a"
          href={LocationURL.R23Park}
          startIcon={<SonarPin />}
        >
          {t('landing.mapButton')}
        </StyledButton>
      </m.div>
    </Grid>
  )
}

export default Location
