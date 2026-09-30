import { useEffect, useState } from 'react'
import { Apply } from './pages/Apply'
import { Cards } from './pages/Cards'
import { Case } from './pages/Case'
import { Connect } from './pages/Connect'
import { Home } from './pages/Home'
import { Learn } from './pages/Learn'
import { Quiz } from './pages/Quiz'
import { Write } from './pages/Write'
import { NAV, hashFor, parseHash, type Route } from './routes'

export default function App() {
  const [loc, setLoc] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onHash = () => setLoc(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  function go(next: Route, session = 0) {
    window.location.hash = hashFor(next, session)
    setLoc(parseHash(hashFor(next, session)))
    window.scrollTo(0, 0)
  }

  const { route, session } = loc

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
                go(item.id, item.id === 'learn' ? session || 1 : 0)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      {route === 'home' && <Home go={go} />}
      {route === 'learn' && <Learn session={session || 1} go={go} />}
      {route === 'connect' && <Connect go={go} />}
      {route === 'cards' && (
        <Cards session={session} onFilter={(s) => go('cards', s)} />
      )}
      {route === 'apply' && (
        <Apply key={session} session={session} go={go} />
      )}
      {route === 'quiz' && <Quiz />}
      {route === 'write' && <Write />}
      {route === 'case' && <Case />}
      <p className="footer-note">
        Sections: Learn (by session) · Connect (how they stack) · Cards · Case questions
        (type, then a strong-answer popup) · Quiz · Essays · Facts. Progress saves in this
        browser.
      </p>
    </div>
  )
}
