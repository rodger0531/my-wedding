import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion, steps } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import BouquetImage from 'src/assets/bouquet.svg'
import CakeImage from 'src/assets/cake.svg'
import HeelsImage from 'src/assets/heels.svg'
import RSVPImage from 'src/assets/rsvp.webp'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const MotionBox = motion(Box)

const Rsvp = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid container direction="column" alignItems="center">
      <Box
        position="relative"
        width="100%"
        height={{ xs: '300px', sm: '600px' }}
      >
        <StyledImage src={RSVPImage} alt="RSVP" sx={{ width: '50%' }} />
        <Icons
          src={CakeImage}
          alt="Cake"
          index={0}
          sx={{
            position: 'absolute',
            top: { xs: -100, sm: -150 },
            left: 0,
            width: { xs: 120, sm: 230 },
          }}
          animateRotate={[2, -2, 3, 0]}
        />
        <Icons
          src={BouquetImage}
          alt="Bouquet"
          index={1}
          animateScale={[1, 1.03, 0.97, 1]}
          translate={{ x: [0, 3, 1, 0], y: [0, -2, 1, 0] }}
          sx={{
            position: 'absolute',
            top: 0,
            right: { xs: 10, sm: 0 },
            width: { xs: 120, sm: 250 },
          }}
        />
        <Icons
          src={HeelsImage}
          alt="Heels"
          index={2}
          animateRotate={[3, 0, -3, 0]}
          animateScale={[1, 1.03, 0.97, 1]}
          sx={{
            bottom: { xs: -90, sm: -150 },
            left: { xs: 30, sm: 20 },
            width: { xs: 90, sm: 180 },
          }}
        />
      </Box>

      {/* 2. Animate the RSVP Message */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        // MUI Props
        mt={4}
        width="80%"
        textAlign="center"
      >
        <Typography
          variant="h3"
          {...(isEnglish ? {} : { lineHeight: 1.5 })}
          align="center"
          sx={{ fontFamily: 'subtitleFont' }}
        >
          {t('landing.rsvpMsg')}
        </Typography>
      </MotionBox>

      {/* 3. Animate the Button */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // MUI Props
        mt={4}
      >
        <StyledButton>{t('landing.rsvpButton')}</StyledButton>
      </MotionBox>
    </Grid>
  )
}

const Icons = ({
  sx,
  index = 0,
  animateRotate = 0,
  animateScale = 1,
  translate = {},
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  return (
    <MotionBox
      component="img"
      draggable={false}
      animate={{
        rotate: animateRotate,
        scale: animateScale,
        ...translate,
      }}
      transition={{
        ease: steps(1),
        duration: 0.5 + index * 0.1,
        repeat: Infinity,
      }}
      sx={{
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        transformOrigin: 'center center',
        ...sx,
      }}
      {...props}
    />
  )
}

export default Rsvp
