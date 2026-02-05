import LocationPinIcon from '@mui/icons-material/LocationPin'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import LocationImage from 'src/assets/location.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'

const LOCATION_URL = 'https://maps.app.goo.gl/qndacHT54qtPDGMs9'

const Location = () => {
  const { t } = useTranslation()
  return (
    <Grid>
      <HalimumTitle mb={4}>{t('landing.location')}</HalimumTitle>
      <StyledImage src={LocationImage} alt="Location" width="50%" />
      <Typography
        variant="h2"
        align="center"
        fontFamily="Dongle"
        lineHeight="2rem"
        mt={4}
      >
        {t('landing.address1')}
      </Typography>
      <Typography variant="h3" align="center" fontFamily="Dongle" mb={2}>
        {t('landing.address2')}
      </Typography>
      <Button
        component="a"
        variant="contained"
        href={LOCATION_URL}
        target="_blank"
        startIcon={<LocationPinIcon />}
        sx={{
          fontSize: '2rem',
          lineHeight: '2.5rem',
          borderRadius: '2rem',
          textTransform: 'none',
          fontFamily: 'Dongle',
          px: 5,
        }}
      >
        {t('landing.mapButton')}
      </Button>
    </Grid>
  )
}

export default Location
