import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'react-i18next'
import { useTimer } from 'react-timer-hook'

const FONT_SIZE = '5rem'

const Timer = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'timer' })

  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp,
  })

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      fontFamily="Helvetica"
      textTransform="uppercase"
    >
      <Numbers value={days} label={t('days')} />
      <Separator />
      <Numbers value={hours} label={t('hours')} />
      <Separator />
      <Numbers value={minutes} label={t('minutes')} />
      <Separator />
      <Numbers value={seconds} label={t('seconds')} />
    </Grid>
  )
}

const Numbers = ({ value, label }: { value: number; label: string }) => {
  return (
    <Grid>
      <Typography variant="subtitle1" fontWeight="bold" px={4}>
        {value}
      </Typography>
      <Typography variant="h5">{label}</Typography>
    </Grid>
  )
}

const Separator = () => {
  return (
    <Box fontSize={FONT_SIZE} fontWeight="bold" paddingBottom={6}>
      :
    </Box>
  )
}

export default Timer
