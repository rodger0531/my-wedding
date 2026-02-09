import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import { useLanguage } from 'src/hooks/useLanguage'

type Topic = {
  title: string
  content: string
}

const Details = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Box px={2}>
      <HalimumTitle mb={isEnglish ? 0 : 2}>
        {t('landing.title.details')}
      </HalimumTitle>
      {(
        t('weddingDetails', {
          defaultValue: [],
          returnObjects: true,
        }) as Topic[]
      ).map(({ title, content }) => (
        <Topic key={title} title={title} content={content} />
      ))}
    </Box>
  )
}

const Topic = ({ title, content }: { title: string; content: string }) => {
  return (
    <Grid container>
      <Title title={title} />
      <Content content={content} />
    </Grid>
  )
}

const Title = ({ title }: { title: string }) => {
  const { isEnglish } = useLanguage()

  return (
    <Typography
      fontFamily="titleFont"
      sx={{
        fontSize: {
          xs: isEnglish ? '3.5rem' : '2rem',
          sm: isEnglish ? '4.5rem' : '2.5rem',
        },
        lineHeight: isEnglish ? 1.5 : 1.3,
        letterSpacing: isEnglish ? 'normal' : 7,
      }}
      mb={isEnglish ? 0 : 3}
    >
      {title}
    </Typography>
  )
}

const Content = ({ content }: { content: string }) => {
  const { isEnglish } = useLanguage()

  return (
    <Typography
      variant="h4"
      align="left"
      sx={{
        fontFamily: 'subtitleFont',
        lineHeight: {
          xs: isEnglish ? 1 : 1.5,
          sm: isEnglish ? 1.1 : 1.5,
        },
      }}
      mb={isEnglish ? 0 : 6}
    >
      {content}
    </Typography>
  )
}

export default Details
