import { useStopwatch } from 'react-timer-hook'
import { WEDDING_FINISH_DATE } from 'src/constants/date'
import Timer from './Timer'

const getOffsetTimestamp = () => {
  const currentDate = new Date()
  return new Date(
    currentDate.getTime() +
      (currentDate.getTime() - WEDDING_FINISH_DATE.getTime()),
  )
}

const StopWatchTimer = () => {
  const { days, hours, minutes, seconds } = useStopwatch({
    offsetTimestamp: getOffsetTimestamp(),
    autoStart: true,
  })

  return <Timer time={{ days, hours, minutes, seconds }} />
}

export default StopWatchTimer
