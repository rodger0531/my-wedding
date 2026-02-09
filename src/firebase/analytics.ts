import type { Analytics } from 'firebase/analytics'
import { app } from './config'

let analyticsInstance: Analytics | null = null

export async function getAnalyticsInstance() {
  if (typeof window === 'undefined') return null

  if (!import.meta.env.PROD) return null

  if (!analyticsInstance) {
    try {
      const { getAnalytics } = await import('firebase/analytics')
      analyticsInstance = getAnalytics(app)
    } catch (error) {
      console.error('Failed to initialize Firebase Analytics:', error)
      return null
    }
  }

  return analyticsInstance
}
