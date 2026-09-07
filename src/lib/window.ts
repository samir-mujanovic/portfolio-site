export type WindowMode = 'open' | 'minimized' | 'closed'

export function initialWindowPosition(offset = 0) {
  const w = Math.min(920, Math.max(340, window.innerWidth - 120))
  const h = Math.min(620, Math.max(300, window.innerHeight - 100))
  return {
    w,
    h,
    x: Math.max(80, (window.innerWidth - w) / 2 + offset),
    y: Math.max(48, (window.innerHeight - h) / 2 - 12 + offset),
  }
}
