import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import DateSvg from 'src/assets/date.svg'
import Frame from 'src/assets/frame.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const GRID_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}

const WORD_VARIANTS = {
  hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' as Easing },
  },
}

const BOUNCY_POP = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 15,
      mass: 0.8,
    },
  },
}

const SaveTheDate = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  const titleText = t('landing.title.saveTheDate')
  const titleSegments = isEnglish ? titleText.split(' ') : titleText.split('')

  const titleInnerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isEnglish ? 0.15 : 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleFontSize = isEnglish
    ? { xs: '2.7rem', sm: '5rem' }
    : { xs: '1.4rem', sm: '2.75rem' }

  return (
    <Box
      position="relative"
      component={m.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      sx={{ my: 4 }}
    >
      <m.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          width: '100%',
          display: 'block',
          lineHeight: 0,
        }}
      >
        <StyledImage
          src={Frame}
          alt="frame"
          sx={{ width: { xs: '100%', sm: '90%' } }}
          height="auto"
        />
      </m.div>

      <Grid
        container
        component={m.div}
        variants={GRID_VARIANTS}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <m.div
          key={i18n.language}
          variants={titleInnerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <HalimumTitle
            mt={isEnglish ? { xs: 2.5, sm: 5 } : { xs: 0, sm: 0 }}
            mb={isEnglish ? 0 : { xs: 2, sm: 4 }}
          >
            {titleSegments.map((seg, i) => (
              <m.span
                key={`${i18n.language}-${i}`}
                variants={WORD_VARIANTS}
                style={{
                  display: 'inline-block',
                  marginRight: isEnglish ? '0.25em' : 0,
                }}
              >
                {seg}
              </m.span>
            ))}
          </HalimumTitle>
        </m.div>

        <m.div variants={BOUNCY_POP}>
          <Typography
            variant="h1"
            mb={isEnglish ? 0 : { xs: 1, sm: 3 }}
            fontFamily="titleFont"
            sx={{ fontSize: titleFontSize }}
          >
            {t('landing.weddingDate')}
          </Typography>
        </m.div>

        <m.div variants={BOUNCY_POP}>
          <StyledImage
            src={DateSvg}
            alt="date decoration"
            sx={{ width: { xs: '85%', sm: '80%' } }}
          />
        </m.div>

        <m.div variants={BOUNCY_POP}>
          <Typography
            variant="h1"
            fontFamily="titleFont"
            sx={{ fontSize: titleFontSize }}
          >
            {t('landing.weddingTime')}
          </Typography>
        </m.div>
      </Grid>
    </Box>
  )
}

export default SaveTheDate
