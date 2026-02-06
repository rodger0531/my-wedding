import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import HeartImage from 'src/assets/heart.svg'
import StoryImage from 'src/assets/story.png'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

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
          sx={{ width: { xs: '230px', sm: '500px' } }}
        />
        <Grid mt={{ xs: 3, sm: 7 }}>
          {stories.map(({ year, content }) => (
            <TextBox key={year} title={year} content={content} />
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

const TextBox = ({ title, content }: { title: string; content: string }) => {
  const { isEnglish } = useLanguage()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      pl={{ xs: 1, sm: 2 }}
      sx={{
        height: { xs: 216, sm: 470 },
        width: '100%',
        wordWrap: 'break-word',
      }}
    >
      <Typography
        align="left"
        fontFamily="subtitleFont"
        sx={{
          lineHeight: 1,
          fontSize: {
            xs: isEnglish ? '3rem' : '1.75rem',
            sm: isEnglish ? '5rem' : '3rem',
          },
          pb: isEnglish ? 0 : 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        align="left"
        fontFamily="subtitleFont"
        sx={{
          lineHeight: { xs: isEnglish ? 1 : 1.5, sm: isEnglish ? 0.8 : 1.5 },
          fontSize: {
            xs: isEnglish ? '1.5rem' : '1rem',
            sm: isEnglish ? '3rem' : '1.75rem',
          },
        }}
      >
        {content}
      </Typography>
    </Box>
  )
}

export default LoveStory
