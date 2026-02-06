import type { PropsOf } from '@emotion/react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import BouquetImage from 'src/assets/bouquet.svg'
import CakeImage from 'src/assets/cake.svg'
import HeelsImage from 'src/assets/heels.svg'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Rsvp = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid container direction="column" alignItems="center">
      <Box position="relative" width="100%" height="600px">
        <Typography
          fontSize="525px"
          width="50%"
          lineHeight="270px"
          margin={4}
          sx={{
            fontFamily: 'Dongle',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            position: 'absolute',
            margin: 0,
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          RSVP
        </Typography>
        <Icons
          src={CakeImage}
          alt="Cake"
          sx={{ top: 0, left: 20, width: 230 }}
        />
        <Icons
          src={BouquetImage}
          alt="Bouquet"
          sx={{ top: 120, right: 10, width: 250 }}
        />
        <Icons
          src={HeelsImage}
          alt="Heels"
          sx={{ bottom: 90, left: 70, width: 180 }}
        />
      </Box>
      <Typography
        variant={isEnglish ? 'h3' : 'h4'}
        {...(isEnglish ? {} : { lineHeight: 1.5 })}
        align="center"
        mt={4}
        width="80%"
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.rsvpMsg')}
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          fontFamily: 'subtitleFont',
          mt: 4,
          width: '250px',
          fontSize: isEnglish ? '2rem' : '1.25rem',
          lineHeight: '2.5rem',
          borderRadius: '2rem',
          textTransform: 'none',
          px: 5,
        }}
      >
        {t('landing.rsvpButton')}
      </Button>
    </Grid>
  )
}

const Icons = ({ sx, ...props }: PropsOf<typeof StyledImage>) => {
  return <StyledImage sx={{ position: 'absolute', ...sx }} {...props} />
}

export default Rsvp
