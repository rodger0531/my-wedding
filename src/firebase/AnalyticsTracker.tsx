// src/components/AnalyticsTracker.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { logPageView } from 'src/firebase/analytics'
import { whenIdle } from 'src/utils/whenIdle'

export const AnalyticsTracker = () => {
  const location = useLocation()

  useEffect(() => {
    const pagePath = location.pathname + location.search

    // Fetching and parsing the firebase chunk is deferred to idle time so it
    // does not compete with the entrance animation on first paint.
    return whenIdle(() => {
      logPageView(pagePath).then((sent) => {
        if (!sent && import.meta.env.DEV) {
          console.log(
            '📊 Analytics: Page view tracked (ignored in dev)',
            location.pathname,
          )
        }
      })
    })
  }, [location])

  return null
}
