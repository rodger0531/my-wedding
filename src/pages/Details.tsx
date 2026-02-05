import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'

type Topic = {
  title: string
  content: string
}

const Details = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <HalimumTitle>{t('landing.title.details')}</HalimumTitle>
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
  return (
    <Typography variant="h1" fontFamily="Better Together">
      {title}
    </Typography>
  )
}

const Content = ({ content }: { content: string }) => {
  return (
    <Typography variant="h4" align="left">
      {content}
    </Typography>
  )
}

export default Details
