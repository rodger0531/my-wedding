import { useTimer } from 'react-timer-hook'
import { WEDDING_DATE } from 'src/constants/date'
import Timer from './Timer'

const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: WEDDING_DATE,
  })

  return <Timer time={{ days, hours, minutes, seconds }} />
}

export default CountdownTimer
