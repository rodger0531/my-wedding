import Grid from '@mui/material/Grid'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import Timer from 'src/components/Timer'

const WEDDING_DATE = new Date('2026-04-18T15:00:00')

const CountDown = () => {
  const { t } = useTranslation()
  return (
    <Grid container justifyContent="center" alignItems="center">
      <HalimumTitle>{t('landing.title.countingDays')}</HalimumTitle>
      <Timer expiryTimestamp={WEDDING_DATE} />
    </Grid>
  )
}

export default CountDown
