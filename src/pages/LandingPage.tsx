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
      <Divider my={5} />
      <Timeline />
    </Container>
  )
}

export default LandingPage
