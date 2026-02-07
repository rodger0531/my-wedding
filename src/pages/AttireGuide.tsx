import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import AttireImage from 'src/assets/attire.svg'
import Colour1 from 'src/assets/colour_1.png'
import Colour2 from 'src/assets/colour_2.png'
import Colour3 from 'src/assets/colour_3.png'
import Colour4 from 'src/assets/colour_4.png'
import Colour5 from 'src/assets/colour_5.png'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const AttireGuide = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h1" fontFamily="titleFont" mb={isEnglish ? 0 : 3}>
        {t('landing.title.attireGuide')}
      </Typography>
      <StyledImage
        src={AttireImage}
        alt="Attire Guide"
        sx={{ width: { xs: '15rem', sm: '20rem' } }}
      />
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="center"
        my={4}
      >
        {[Colour1, Colour2, Colour3, Colour4, Colour5].map((colour, index) => (
          <Grid key={index}>
            <StyledImage
              src={colour}
              alt={`Colour Block ${index + 1}`}
              sx={{ width: { xs: '3.5rem', sm: '7rem' } }}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h4"
        {...(isEnglish ? {} : { lineHeight: 1.75 })}
        sx={{ fontFamily: 'subtitleFont' }}
      >
        {t('landing.attireGuideMsg')}
      </Typography>
    </Grid>
  )
}

export default AttireGuide
