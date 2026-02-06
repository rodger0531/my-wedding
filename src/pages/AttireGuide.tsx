import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import AttireImage from 'src/assets/attire.svg'
import ColourBlocks from 'src/assets/colours.svg'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

// const COLOURS = ['#9faf9a', '#8fa3b8', '#b7b2aa', '#c9a3a6', '#d8dfc4']
// const COLOURS = ['#7C8A7C', '#8C8F8F', '#BFA07B', '#C9A3A6', '#8FA3B8']

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
      <StyledImage
        my={4}
        src={ColourBlocks}
        alt="Colour Blocks"
        sx={{ width: { xs: '20rem', sm: '35rem' } }}
      />
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
