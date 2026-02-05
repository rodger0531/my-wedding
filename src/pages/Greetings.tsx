import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import Couple from 'src/assets/couple2.svg'
import StyledImage from 'src/components/StyledImage'

const Greetings = () => {
  const { t } = useTranslation()

  return (
    <>
      <Grid>
        <Typography
          variant="h3"
          align="center"
          margin={4}
          sx={{ fontFamily: 'subtitleFont' }}
        >
          {t('landing.greetingMsg')}
        </Typography>
      </Grid>
      <Grid width="100%" display="flex" justifyContent="center">
        <StyledImage src={Couple} alt="Couple" width="80%" />
      </Grid>
    </>
  )
}

export default Greetings
