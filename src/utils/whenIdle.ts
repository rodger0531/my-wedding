/**
 * Defers `task` until the main thread is idle and returns a cancel function.
 *
 * Used to keep startup side effects (route preloading, analytics init) from
 * landing in the middle of the welcome screen's entrance animation: parsing a
 * lazy chunk and inserting its stylesheet forces a style recalculation, which
 * shows up as a stutter in the stagger.
 *
 * Safari has no requestIdleCallback, so fall back to a timeout there.
 */
export const whenIdle = (task: () => void, timeout = 2000) => {
  if (typeof window === 'undefined') return () => {}

  // lib.dom declares requestIdleCallback as always present, so an `in` check
  // would narrow the fallback branch to `never`. Probe the value instead, and
  // still call it off `window` to keep it bound.
  const supportsIdleCallback =
    typeof (window.requestIdleCallback as unknown) === 'function'

  if (supportsIdleCallback) {
    const handle = window.requestIdleCallback(task, { timeout })
    return () => window.cancelIdleCallback(handle)
  }

  const handle = window.setTimeout(task, timeout)
  return () => window.clearTimeout(handle)
}
