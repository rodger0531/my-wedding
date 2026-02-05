import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
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
    <Box>
      <HalimumTitle mb={isEnglish ? 0 : 2}>
        {t('landing.title.details')}
      </HalimumTitle>
      {t<'weddingDetails', { returnObjects: true }, Topic[]>('weddingDetails', {
        returnObjects: true,
      }).map(({ title, content }) => (
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
      variant={isEnglish ? 'h1' : 'h3'}
      fontFamily="titleFont"
      letterSpacing={isEnglish ? 0 : 7}
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
      variant={isEnglish ? 'h4' : 'h5'}
      {...(isEnglish ? {} : { lineHeight: 2 })}
      align="left"
      sx={{ fontFamily: 'subtitleFont' }}
      mb={isEnglish ? 0 : 6}
    >
      {content}
    </Typography>
  )
}

export default Details
