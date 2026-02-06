import Container from '@mui/material/Container'
import React from 'react'
import BottomNavbar from 'src/components/BottomNavBar'
import Divider from 'src/components/Divider'
import AttireGuide from './AttireGuide'
import CountDown from './CountDown'
import Details from './Details'
import Footer from './Footer'
import Greetings from './Greetings'
import Location from './Location'
import LoveStory from './LoveStory'
import Rsvp from './Rsvp'
import SaveTheDate from './SaveTheDate'
import Timeline from './Timeline'

const LandingPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container maxWidth="md" sx={{ px: 0 }}>
      <Greetings />
      <Divider mb={5} />
      <CountDown />
      <SaveTheDate />
      <Location />
      <Divider my={5} sx={{ transform: 'scaleX(-1)' }} />
      <Timeline />
      <Divider my={5} sx={{ transform: 'scale(-1, -1)' }} />
      <Details />
      <AttireGuide />
      <Divider my={5} />
      <LoveStory />
      <Divider my={5} />
      <Rsvp />
      <Footer />
      {import.meta.env.DEV && <BottomNavbar />}
    </Container>
  )
}

export default LandingPage
