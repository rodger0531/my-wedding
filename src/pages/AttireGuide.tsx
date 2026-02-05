import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import AttireImage from 'src/assets/attire.svg'
import StyledImage from 'src/components/StyledImage'

const AttireGuide = () => {
  const { t } = useTranslation()
  return (
    <Grid>
      <Typography variant="h1" fontFamily="Better Together">
        {t('landing.title.attireGuide')}
      </Typography>
      <StyledImage src={AttireImage} alt="Attire Guide" width="20rem" />
      {/* use painting like blotch style for colours */}
      <Typography variant="h4">{t('landing.attireGuideMsg')}</Typography>
    </Grid>
  )
}

export default AttireGuide
