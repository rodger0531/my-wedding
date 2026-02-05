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
      <HalimumTitle mb={4}>{t('landing.title.location')}</HalimumTitle>
      <StyledImage src={LocationImage} alt="Location" width="50%" />
      <Typography
        variant="h2"
        align="center"
        lineHeight="2rem"
        mt={4}
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.address1')}
      </Typography>
      <Typography
        variant="h3"
        align="center"
        mb={2}
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.address2')}
      </Typography>
      <Button
        component="a"
        variant="contained"
        href={LOCATION_URL}
        target="_blank"
        startIcon={<LocationPinIcon />}
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: '2rem',
          lineHeight: '2.5rem',
          borderRadius: '2rem',
          textTransform: 'none',
          px: 5,
        }}
      >
        {t('landing.mapButton')}
      </Button>
    </Grid>
  )
}

export default Location
