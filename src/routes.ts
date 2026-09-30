export type Route = 'home' | 'cards' | 'apply' | 'quiz' | 'write' | 'sessions' | 'case'

export const NAV: { id: Route; label: string; path: string }[] = [
  { id: 'home', label: 'Home', path: '#/' },
  { id: 'cards', label: 'Cards', path: '#/cards' },
  { id: 'apply', label: 'Type', path: '#/apply' },
  { id: 'quiz', label: 'Quiz', path: '#/quiz' },
  { id: 'write', label: 'Essays', path: '#/write' },
  { id: 'sessions', label: 'Sessions', path: '#/sessions' },
  { id: 'case', label: 'Case', path: '#/case' },
]

export function routeFromHash(hash: string): Route {
  const h = hash.replace(/^#/, '').replace(/^\//, '')
  if (h === 'cards') return 'cards'
  if (h === 'apply') return 'apply'
  if (h === 'quiz') return 'quiz'
  if (h === 'write') return 'write'
  if (h === 'sessions') return 'sessions'
  if (h === 'case') return 'case'
  return 'home'
}

export function hashFor(route: Route): string {
  return route === 'home' ? '#/' : `#/${route}`
}
