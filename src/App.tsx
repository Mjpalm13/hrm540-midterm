import { useEffect, useState } from 'react'
import { Apply } from './pages/Apply'
import { Cards } from './pages/Cards'
import { Case } from './pages/Case'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'
import { Sessions } from './pages/Sessions'
import { Write } from './pages/Write'
import { NAV, hashFor, routeFromHash, type Route } from './routes'

export default function App() {
  const [route, setRoute] = useState<Route>(() => routeFromHash(window.location.hash))

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  function go(next: Route) {
    window.location.hash = hashFor(next)
    setRoute(next)
    window.scrollTo(0, 0)
  }

  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#/" onClick={(e) => { e.preventDefault(); go('home') }}>
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#1c1915" />
            <rect x="6" y="7" width="20" height="5" rx="1" fill="#f4efe4" />
            <rect x="9" y="14" width="14" height="5" rx="1" fill="#c45a3c" />
            <rect x="12" y="21" width="8" height="5" rx="1" fill="#f4efe4" />
          </svg>
          <div>
            <strong>GSU Study Studio</strong>
            <span>HRM 540 midterm</span>
          </div>
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={route === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                go(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      {route === 'home' && <Home go={go} />}
      {route === 'cards' && <Cards />}
      {route === 'apply' && <Apply />}
      {route === 'quiz' && <Quiz />}
      {route === 'write' && <Write />}
      {route === 'sessions' && <Sessions />}
      {route === 'case' && <Case />}
      <p className="footer-note">
        Built for a written exam: connect course language to Barbara Norris / GSU. Progress
        saves in this browser. Frameworks follow HRM/BUSM 540 Sessions 1–8.
      </p>
    </div>
  )
}
