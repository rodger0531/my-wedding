import type { Analytics } from 'firebase/analytics'
import type { FirebasePerformance } from 'firebase/performance'
import { app } from './config'

let analytics: Analytics | undefined
let perf: FirebasePerformance | undefined

export async function initFirebaseMetrics() {
  if (typeof window === 'undefined') return

  if (!analytics) {
    const { getAnalytics } = await import('firebase/analytics')
    analytics = getAnalytics(app)
  }

  if (!perf) {
    const { getPerformance } = await import('firebase/performance')
    perf = getPerformance(app)
  }

  return { analytics, perf }
}
