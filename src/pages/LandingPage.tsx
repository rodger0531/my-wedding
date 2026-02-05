import Container from '@mui/material/Container'
import Divider from 'src/components/Divider'
import CountDown from './CountDown'
import Greetings from './Greetings'
import Location from './Location'
import SaveTheDate from './SaveTheDate'
import Timeline from './Timeline'

const LandingPage = () => {
  return (
    <Container maxWidth="md">
      <Greetings />
      <Divider mb={5} />
      <CountDown />
      <SaveTheDate />
      <Location />
      <Divider my={5} sx={{ transform: 'scaleX(-1)' }} />
      <Timeline />
      <Divider my={5} sx={{ transform: 'scale(-1, -1)' }} />
    </Container>
  )
}

export default LandingPage
