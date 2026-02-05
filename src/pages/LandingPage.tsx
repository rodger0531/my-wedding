import Couple from '@/assets/couple.svg'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const LandingPage = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'landing' })
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      maxWidth="800px"
      margin="0 auto"
    >
      <Grid>
        <Typography
          variant="h3"
          align="center"
          sx={{ margin: '2rem', fontFamily: 'Dongle' }}
        >
          {t('greeting')}
        </Typography>
      </Grid>
      <Grid width="100%" display="flex" justifyContent="center">
        <img src={Couple} alt="Couple" width="100%" />
      </Grid>
    </Grid>
  )
}

export default LandingPage
