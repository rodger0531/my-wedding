import Container from '@mui/material/Container'
import Divider from 'src/components/Divider'
import CountDown from './CountDown'
import Greetings from './Greetings'

const LandingPage = () => {
  return (
    <Container maxWidth="md">
      <Greetings />
      <Divider mb={5} />
      <CountDown />
    </Container>
  )
}

export default LandingPage
