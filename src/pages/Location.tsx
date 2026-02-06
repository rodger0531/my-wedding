import LocationPinIcon from '@mui/icons-material/LocationPin'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import LocationImage from 'src/assets/location.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const LOCATION_URL = 'https://maps.app.goo.gl/qndacHT54qtPDGMs9'

const Location = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid>
      <HalimumTitle mb={isEnglish ? 4 : 2.75} mt={isEnglish ? 0 : 5}>
        {t('landing.title.location')}
      </HalimumTitle>
      <StyledImage src={LocationImage} alt="Location" width="50%" />
      <Typography
        align="center"
        mt={isEnglish ? 4 : 2}
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: isEnglish ? '4.5rem' : '3rem',
          letterSpacing: isEnglish ? 0 : 2,
          lineHeight: isEnglish ? '2rem' : '4rem',
        }}
      >
        {t('landing.address1')}
      </Typography>
      <Typography
        variant={isEnglish ? 'h3' : 'h4'}
        letterSpacing={isEnglish ? 0 : 4}
        align="center"
        mb={2}
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.address2')}
      </Typography>
      <StyledButton
        component="a"
        href={LOCATION_URL}
        startIcon={<LocationPinIcon />}
      >
        {t('landing.mapButton')}
      </StyledButton>
    </Grid>
  )
}

export default Location
