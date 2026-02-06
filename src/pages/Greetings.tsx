import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import Couple from 'src/assets/couple2.svg'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Greetings = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <>
      <Grid>
        <Typography
          key={i18n.language}
          className="flip-animate"
          variant="h3"
          align="center"
          sx={{
            fontFamily: 'subtitleFont',
            letterSpacing: isEnglish ? 0 : 3,
            lineHeight: {
              xs: isEnglish ? 1.2 : 1.6,
              sm: isEnglish ? 1.2 : 1.9,
            },
            m: 4,
            mt: 1,
          }}
        >
          {t('landing.greetingMsg')}
        </Typography>
      </Grid>
      <Grid width="100%" display="flex" justifyContent="center">
        <StyledImage
          src={Couple}
          alt="Couple"
          sx={{ width: { xs: '350px', sm: '500px' } }}
        />
      </Grid>
    </>
  )
}

export default Greetings
