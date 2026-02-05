import Grid from '@mui/material/Grid'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import Timer from 'src/components/Timer'
import { useLanguage } from 'src/hooks/useLanguage'

const WEDDING_DATE = new Date('2026-04-18T15:00:00')

const CountDown = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <HalimumTitle mb={isEnglish ? 0 : -1.6}>
        {t('landing.title.countingDays')}
      </HalimumTitle>
      <Timer expiryTimestamp={WEDDING_DATE} />
    </Grid>
  )
}

export default CountDown
