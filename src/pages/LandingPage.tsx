import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'
import { lazy, Suspense, useEffect } from 'react'
import BottomNavbar from 'src/components/BottomNavBar'
import Divider from 'src/components/Divider'
import CountDown from './CountDown'
import Greetings from './Greetings'
import SaveTheDate from './SaveTheDate'
import WeddingShoots from './WeddingShoots'

import 'src/styles/fonts_2.css'
// Load chinese fonts separately to enable font subset splitting by vite-plugin-font for better performance.
import 'src/assets/fonts/honya.ttf?subsets'
import 'src/assets/fonts/lihsianti.ttf?subsets'

const Location = lazy(() => import('./Location'))
const Timeline = lazy(() => import('./Timeline'))
const Details = lazy(() => import('./Details'))
const AttireGuide = lazy(() => import('./AttireGuide'))
const LoveStory = lazy(() => import('./LoveStory'))
const Rsvp = lazy(() => import('./Rsvp'))
const Footer = lazy(() => import('./Footer'))

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
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <Location />
          </Skeleton>
        }
      >
        <Location />
      </Suspense>
      <Divider my={5} sx={{ transform: 'scaleX(-1)' }} />
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <Timeline />
          </Skeleton>
        }
      >
        <Timeline />
      </Suspense>
      <Divider my={5} sx={{ transform: 'scale(-1, -1)' }} />
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <Details />
          </Skeleton>
        }
      >
        <Details />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <AttireGuide />
          </Skeleton>
        }
      >
        <AttireGuide />
      </Suspense>
      <Divider my={5} />
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <LoveStory />
          </Skeleton>
        }
      >
        <LoveStory />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <WeddingShoots />
          </Skeleton>
        }
      >
        <WeddingShoots />
      </Suspense>
      <Divider my={5} />
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <Rsvp />
          </Skeleton>
        }
      >
        <Rsvp />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton variant="rectangular">
            <Footer />
          </Skeleton>
        }
      >
        <Footer />
      </Suspense>
      {import.meta.env.DEV && <BottomNavbar />}
    </Container>
  )
}

export default LandingPage
