// src/components/AnalyticsTracker.tsx
import { logEvent } from 'firebase/analytics'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getAnalyticsInstance } from 'src/firebase/analytics'

export const AnalyticsTracker = () => {
  const location = useLocation()

  useEffect(() => {
    const track = async () => {
      const analytics = await getAnalyticsInstance()
      if (analytics) {
        logEvent(analytics, 'page_view', {
          page_path: location.pathname + location.search,
        })
      } else if (import.meta.env.DEV) {
        console.log(
          '📊 Analytics: Page view tracked (ignored in dev)',
          location.pathname,
        )
      }
    }
    track()
  }, [location])

  return null
}
