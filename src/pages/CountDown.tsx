import Grid from '@mui/material/Grid'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import Timer from 'src/components/Timer'
import { useLanguage } from 'src/hooks/useLanguage'

const WEDDING_DATE = new Date('2026-04-18T15:00:00')

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

const CountDown = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  const text = t('landing.title.countingDays')
  const words = isEnglish ? text.split(' ') : text.split('')

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
              key={index}
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
        <Timer expiryTimestamp={WEDDING_DATE} />
      </m.div>
    </Grid>
  )
}

export default CountDown
