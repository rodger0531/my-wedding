import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import AttireImage from 'src/assets/attire.svg'
import StyledImage from 'src/components/StyledImage'

const COLOURS = ['#9faf9a', '#8fa3b8', '#b7b2aa', '#c9a3a6', '#d8dfc4']

const AttireGuide = () => {
  const { t } = useTranslation()
  return (
    <Grid>
      <Typography variant="h1" fontFamily="Better Together">
        {t('landing.title.attireGuide')}
      </Typography>
      <StyledImage src={AttireImage} alt="Attire Guide" width="20rem" />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        rowSpacing={1}
        mt={1}
        mb={3}
      >
        {COLOURS.map((colour) => (
          <ColourBlock key={colour} colour={colour} />
        ))}
      </Grid>
      {/* use painting like blotch style for colours */}
      <Typography variant="h4">{t('landing.attireGuideMsg')}</Typography>
    </Grid>
  )
}

const ColourBlock = ({ colour }: { colour: string }) => {
  return <Box width="80px" height="80px" bgcolor={colour} />
}

export default AttireGuide
