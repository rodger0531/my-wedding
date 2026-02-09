import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import HeartImage from 'src/assets/heart.svg'
import StoryImage from 'src/assets/story.webp'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const TITLE_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const TITLE_WORD = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as Easing },
  },
}

type Story = {
  year: string
  content: string
}

const LoveStory = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  const stories = t('loveStory', {
    returnObjects: true,
    defaultValue: [],
  }) as Story[]

  const titleText = t('landing.title.loveStory')
  const titleSegments = isEnglish ? titleText.split(' ') : titleText.split('')

  return (
    <Grid
      component={m.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* WORD-BY-WORD REVEAL TITLE */}
      <HalimumTitle key={i18n.language}>
        <m.span
          variants={TITLE_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.2em',
          }}
        >
          {titleSegments.map((word, i) => (
            <m.span
              key={i}
              variants={TITLE_WORD}
              style={{ display: 'inline-block' }}
            >
              {word}
            </m.span>
          ))}
        </m.span>
      </HalimumTitle>

      <Grid container mt={2} flexWrap="nowrap">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <StyledImage
            src={StoryImage}
            alt="Love Story"
            sx={{ width: { xs: '230px', sm: '500px' } }}
          />
        </m.div>

        <Grid mt={{ xs: 3, sm: 7 }}>
          {stories.map(({ year, content }, index) => (
            <TextBox key={year} title={year} content={content} index={index} />
          ))}
        </Grid>
      </Grid>

      {/* FLOATING HEART ANIMATION */}
      <Box display="flex" justifyContent="center">
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 1 }}
        >
          <StyledImage
            src={HeartImage}
            alt="Heart"
            sx={{ width: { xs: 100, sm: 150 }, mt: 2, mb: 4 }}
          />
        </m.div>
      </Box>
    </Grid>
  )
}

const TextBox = ({
  title,
  content,
  index,
}: {
  title: string
  content: string
  index: number
}) => {
  const { isEnglish } = useLanguage()

  return (
    <Box
      component={m.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
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
          lineHeight: { xs: isEnglish ? 0.9 : 1.5, sm: isEnglish ? 0.8 : 1.5 },
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
