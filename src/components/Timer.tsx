import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'src/hooks/useLanguage'

const FONT_SIZE = '5rem'
const MOBILE_FONT_SIZE = '3rem'

const Timer = ({
  time: { days, hours, minutes, seconds },
}: {
  time: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'timer' })

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
      }}
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
  const { i18n } = useTranslation()
  const { isEnglish } = useLanguage()
  return (
    <Grid>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 'bold',
          px: { xs: 1, sm: 4 },
        }}
      >
        {value}
      </Typography>
      <Typography
        key={i18n.language}
        className="flip-animate"
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: {
            xs: isEnglish ? '1.2rem' : '1.3rem',
            sm: '2rem',
          },
        }}
      >
        {label}
      </Typography>
    </Grid>
  )
}

const Separator = () => {
  return (
    <Box
      sx={{
        fontSize: { xs: MOBILE_FONT_SIZE, sm: FONT_SIZE },
        fontWeight: 'bold',
        paddingBottom: { xs: 4, sm: 6 },
      }}
    >
      :
    </Box>
  )
}

export default Timer
