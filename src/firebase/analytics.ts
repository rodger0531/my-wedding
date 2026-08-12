import type { Analytics } from 'firebase/analytics'

// Everything firebase is reached through dynamic imports only. A static import
// anywhere in this file (or in a consumer) pulls firebase/app and
// firebase/analytics into the entry chunk, which then has to be parsed before
// the first paint. Keep `logPageView` as the only entry point so callers never
// need to import firebase themselves.

let analyticsInstance: Analytics | null = null

export async function getAnalyticsInstance() {
  if (typeof window === 'undefined') return null

  if (!import.meta.env.PROD) return null

  if (!analyticsInstance) {
    try {
      const [{ getAnalytics }, { app }] = await Promise.all([
        import('firebase/analytics'),
        import('./config'),
      ])
      analyticsInstance = getAnalytics(app)
    } catch (error) {
      console.error('Failed to initialize Firebase Analytics:', error)
      return null
    }
  }

  return analyticsInstance
}

/** Returns false when analytics is inert (dev, SSR, or init failure). */
export async function logPageView(pagePath: string) {
  const analytics = await getAnalyticsInstance()
  if (!analytics) return false

  const { logEvent } = await import('firebase/analytics')
  logEvent(analytics, 'page_view', { page_path: pagePath })
  return true
}
