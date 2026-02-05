import Couple from '@/assets/couple.svg'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const Greetings = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'landing' })

  return (
    <>
      <Grid>
        <Typography variant="h3" align="center" fontFamily="Dongle" margin={4}>
          {t('greeting')}
        </Typography>
      </Grid>
      <Grid width="100%" display="flex" justifyContent="center">
        <img src={Couple} alt="Couple" width="100%" />
      </Grid>
    </>
  )
}

export default Greetings
