import Container from '@mui/material/Container'
import { useEffect } from 'react'
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
  useEffect(() => {
    // Tell browser to stop handling scroll restoration, prevents animations being played when reloading
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)

    // Restore 'auto' on unmount if needed (usually not for SPA)
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'
      }
    }
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
