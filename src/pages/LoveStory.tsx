import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import HeartImage from 'src/assets/heart.svg'
import StoryImage from 'src/assets/story.png'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'

type Story = {
  year: string
  content: string
}

const LoveStory = () => {
  const { t } = useTranslation()

  const stories = t('loveStory', {
    returnObjects: true,
    defaultValue: [],
  }) as Story[]

  return (
    <Grid>
      <HalimumTitle>{t('landing.title.loveStory')}</HalimumTitle>
      <Grid container mt={2} flexWrap="nowrap">
        <StyledImage
          src={StoryImage}
          alt="Love Story"
          sx={{ width: { xs: '200px', sm: '500px' } }}
        />
        <Grid mt={{ xs: 3, sm: 7 }}>
          {stories.map(({ year, content }) => (
            <TextBox key={year} text={content} />
          ))}
        </Grid>
      </Grid>
      <StyledImage
        src={HeartImage}
        alt="Heart"
        sx={{ width: { xs: 100, sm: 150 }, mt: 5 }}
      />
    </Grid>
  )
}

const TextBox = ({ text }: { text: string }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      pl={{ xs: 1, sm: 2 }}
      sx={{
        height: { xs: 185, sm: 470 },
        width: '100%',
        wordWrap: 'break-word',
      }}
    >
      <Typography
        variant="h4"
        align="left"
        fontFamily="subtitleFont"
        sx={{
          lineHeight: 1.5,
          fontSize: { xs: '1rem', sm: '1.5rem' },
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default LoveStory
