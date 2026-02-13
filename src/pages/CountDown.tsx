import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import Timer from 'src/components/Timer'
import { useLanguage } from 'src/hooks/useLanguage'

const WEDDING_DATE = new Date('2026-04-18T16:00:00')
const WEDDING_FINISH_DATE = new Date('2026-04-19T00:00:00')

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, damping: 15, stiffness: 100 },
  },
}

const getOffsetTimestamp = (isWeddingFinished: boolean) => {
  const currentDate = new Date()
  if (!isWeddingFinished) return currentDate // Should not happen but just in case

  return new Date(
    currentDate.getTime() +
      (currentDate.getTime() - WEDDING_FINISH_DATE.getTime()),
  )
}

const CountDown = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  const currentDate = new Date()
  const isWeddingFinished = currentDate > WEDDING_FINISH_DATE
  const isWeddingHappening = currentDate > WEDDING_DATE && !isWeddingFinished
  const text = t(
    `landing.title.${isWeddingFinished ? 'happilyMarried' : 'countingDays'}`,
  )
  const words = isEnglish ? text.split(' ') : text.split('')

  if (isWeddingHappening)
    return (
      <Typography
        component={m.h1}
        variant="h1"
        sx={{ fontFamily: 'subtitleFont', my: 6, whiteSpace: 'pre-line' }}
        animate={{
          color: [
            '#ff0000',
            '#ff00ff',
            '#0000ff',
            '#00ffff',
            '#00ff00',
            '#ffff00',
            '#ff0000',
          ],
          textShadow: [
            '0px 0px 5px #ff0000',
            '0px 0px 5px #ff00ff',
            '0px 0px 5px #0000ff',
            '0px 0px 5px #00ffff',
            '0px 0px 5px #00ff00',
            '0px 0px 5px #ffff00',
            '0px 0px 5px #ff0000',
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {t('landing.weddingRightNowMsg')}
      </Typography>
    )

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <m.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
        key={i18n.language}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <HalimumTitle
          sx={{
            lineHeight: isEnglish ? 1.2 : 1.6,
            mb: isEnglish ? 0 : -1.6,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {words.map((word, index) => (
            <m.span
              key={`${word}-${index}`}
              variants={CHILD_VARIANTS}
              style={{
                display: 'inline-block',
                marginRight: isEnglish ? '0.25em' : '0px',
              }}
            >
              {word}
            </m.span>
          ))}
        </HalimumTitle>
      </m.div>
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {(!isWeddingHappening || isWeddingFinished) && (
          <Timer
            expiryTimestamp={WEDDING_DATE}
            offsetTimestamp={
              isWeddingFinished
                ? getOffsetTimestamp(isWeddingFinished)
                : undefined
            }
          />
        )}
        {isWeddingHappening && (
          <Typography
            variant="h1"
            sx={{ fontFamily: 'subtitleFont', my: 6, whiteSpace: 'pre-line' }}
          >
            {t('landing.weddingRightNowMsg')}
          </Typography>
        )}
      </m.div>
    </Grid>
  )
}

export default CountDown
