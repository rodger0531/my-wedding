import type { PropsOf } from '@emotion/react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import BouquetImage from 'src/assets/bouquet.svg'
import CakeImage from 'src/assets/cake.svg'
import HeelsImage from 'src/assets/heels.svg'
import RSVPImage from 'src/assets/rsvp.png'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

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
          sx={{
            position: 'absolute',
            top: { xs: -100, sm: -150 },
            left: 0,
            width: { xs: 120, sm: 230 },
          }}
        />
        <Icons
          src={BouquetImage}
          alt="Bouquet"
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
          sx={{
            bottom: { xs: -90, sm: -150 },
            left: { xs: 30, sm: 20 },
            width: { xs: 90, sm: 180 },
          }}
        />
      </Box>
      <Typography
        variant="h3"
        {...(isEnglish ? {} : { lineHeight: 1.5 })}
        align="center"
        mt={4}
        width="80%"
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.rsvpMsg')}
      </Typography>
      <StyledButton sx={{ mt: 4 }}>{t('landing.rsvpButton')}</StyledButton>
    </Grid>
  )
}

const Icons = ({ sx, ...props }: PropsOf<typeof StyledImage>) => {
  return (
    <Box
      component="img"
      draggable={false}
      sx={{
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        ...sx,
      }}
      {...props}
    />
  )
}

export default Rsvp
