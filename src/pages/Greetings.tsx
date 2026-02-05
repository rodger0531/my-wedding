import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import Couple from 'src/assets/couple.svg'
import StyledImage from 'src/components/StyledImage'

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
        <StyledImage src={Couple} alt="Couple" width="100%" />
      </Grid>
    </>
  )
}

export default Greetings
