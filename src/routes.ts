export type Route =
  | 'home'
  | 'learn'
  | 'connect'
  | 'cards'
  | 'apply'
  | 'exam'
  | 'quiz'
  | 'write'
  | 'case'

export const NAV: { id: Route; label: string; path: string }[] = [
  { id: 'home', label: 'Home', path: '#/' },
  { id: 'learn', label: 'Learn', path: '#/learn' },
  { id: 'connect', label: 'Connect', path: '#/connect' },
  { id: 'cards', label: 'Cards', path: '#/cards' },
  { id: 'apply', label: 'Case Qs', path: '#/apply' },
  { id: 'exam', label: '12-Q exam', path: '#/exam' },
  { id: 'quiz', label: 'Quiz', path: '#/quiz' },
  { id: 'case', label: 'Facts', path: '#/case' },
]

export function parseHash(hash: string): { route: Route; session: number } {
  const stripped = hash.replace(/^#/, '')
  const [pathPart, query] = stripped.split('?')
  const path = (pathPart || '/').replace(/^\//, '')
  const params = new URLSearchParams(query || '')
  const sRaw = params.get('s')
  const parsed = sRaw ? Number(sRaw) : 0
  const session = Number.isFinite(parsed) ? parsed : 0

  if (path === 'learn' || path === 'sessions') return { route: 'learn', session: session || 1 }
  if (path === 'connect') return { route: 'connect', session }
  if (path === 'cards') return { route: 'cards', session }
  if (path === 'apply') return { route: 'apply', session }
  if (path === 'exam') return { route: 'exam', session }
  if (path === 'quiz') return { route: 'quiz', session }
  if (path === 'write') return { route: 'write', session }
  if (path === 'case') return { route: 'case', session }
  return { route: 'home', session }
}

export function hashFor(route: Route, session = 0): string {
  const base = route === 'home' ? '#/' : `#/${route}`
  if (!session) return base
  return `${base}?s=${session}`
}
