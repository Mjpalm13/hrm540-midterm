import { useEffect, useMemo, useState } from 'react'
import { FLASHCARDS, SESSIONS, type Flashcard } from '../data'
import { loadProgress, patchProgress, type CardRating } from '../storage'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

export function Cards({
  session,
  onFilter,
}: {
  session: number
  onFilter: (s: number) => void
}) {
  const [weakOnly, setWeakOnly] = useState(false)
  const [order, setOrder] = useState<string[]>(() => FLASHCARDS.map((c) => c.id))
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [tick, setTick] = useState(0)

  const deck = useMemo(() => {
    const progress = loadProgress()
    void tick
    return order
      .map((id) => FLASHCARDS.find((c) => c.id === id))
      .filter((c): c is Flashcard => Boolean(c))
      .filter((c) => (session === 0 ? true : c.session === session))
      .filter((c) => {
        if (!weakOnly) return true
        const r = progress.cards[c.id]?.rating
        return r === 'miss' || r === 'partial' || !r
      })
  }, [order, session, weakOnly, tick])

  const card = deck[Math.min(i, Math.max(deck.length - 1, 0))]
  const rating = card ? loadProgress().cards[card.id]?.rating : undefined

  useEffect(() => {
    setI(0)
    setFlipped(false)
  }, [session, weakOnly, order])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
      if (e.key === 'ArrowRight') jump(i >= deck.length - 1 ? 0 : i + 1)
      if (e.key === 'ArrowLeft') jump(i <= 0 ? deck.length - 1 : i - 1)
      if (e.key === '1') rate('miss')
      if (e.key === '2') rate('partial')
      if (e.key === '3') rate('knew')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  function jump(n: number) {
    setFlipped(false)
    setI(n)
  }

  function prev() {
    jump(i <= 0 ? deck.length - 1 : i - 1)
  }

  function next() {
    jump(i >= deck.length - 1 ? 0 : i + 1)
  }

  function rate(r: CardRating) {
    if (!card) return
    patchProgress((p) => ({
      ...p,
      cards: { ...p.cards, [card.id]: { rating: r, at: Date.now() } },
    }))
    setTick((t) => t + 1)
    setFlipped(false)
    jump(i >= deck.length - 1 ? 0 : i + 1)
  }

  const pct = deck.length ? ((Math.min(i, deck.length - 1) + 1) / deck.length) * 100 : 0

  return (
    <div>
      <div className="kicker">Flashcards · space to flip · 1 miss · 2 partial · 3 knew</div>
      <h1>Say it, then flip.</h1>
      <p className="lede">
        Front is the term. Back is definition, how to remember it, and how it shows up in the case.
      </p>
      <div className="row" style={{ margin: '12px 0 18px' }}>
        <button className={`chip ${session === 0 ? 'active' : ''}`} type="button" onClick={() => onFilter(0)}>
          All sessions
        </button>
        {SESSIONS.map((s) => (
          <button
            key={s.id}
            className={`chip ${session === s.id ? 'active' : ''}`}
            type="button"
            onClick={() => onFilter(s.id)}
          >
            S{s.id}
          </button>
        ))}
        <button className={`chip ${weakOnly ? 'active' : ''}`} type="button" onClick={() => { setWeakOnly((w) => !w) }}>
          Weak / unrated only
        </button>
        <button
          className="chip"
          type="button"
          onClick={() => {
            setOrder(shuffle(FLASHCARDS.map((c) => c.id)))
          }}
        >
          Shuffle
        </button>
      </div>
      <div className="progress-track" style={{ marginBottom: 16 }}>
        <div style={{ width: `${pct}%` }} />
      </div>
      {!card ? (
        <div className="callout">No cards in this filter. Turn off “weak only” or pick another session.</div>
      ) : (
        <>
          <p className="kb">
            {Math.min(i, deck.length - 1) + 1} / {deck.length}
            {rating ? ` · last rated ${rating}` : ' · not rated yet'}
            {' · Session '}
            {card.session}
          </p>
          <div className="flash-wrap">
            <div
              className="flash"
              onClick={() => setFlipped((f) => !f)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlipped((f) => !f)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={flipped ? 'Card back. Click to hide.' : 'Card front. Click to flip.'}
            >
              {!flipped ? (
                <div className="face">
                  <div className="kicker">Term</div>
                  <h2>{card.term}</h2>
                  <p className="kb" style={{ marginTop: 'auto' }}>
                    Click or press space
                  </p>
                </div>
              ) : (
                <div className="face back">
                  <div className="kicker">Definition</div>
                  <p style={{ fontSize: '1.08rem' }}>{card.definition}</p>
                  {card.parts && <p>{card.parts}</p>}
                  <p>
                    <strong>Remember.</strong> {card.remember}
                  </p>
                  <p>
                    <strong>In the case.</strong> {card.caseHook}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="row" style={{ marginTop: 16, justifyContent: 'center' }}>
            <button className="btn" type="button" onClick={prev}>
              Previous
            </button>
            <button className="btn" type="button" onClick={() => setFlipped((f) => !f)}>
              {flipped ? 'Hide' : 'Flip'}
            </button>
            <button className="btn" type="button" onClick={next}>
              Next
            </button>
          </div>
          <div className="row" style={{ marginTop: 10, justifyContent: 'center' }}>
            <button className="btn" type="button" onClick={() => rate('miss')}>
              Missed
            </button>
            <button className="btn" type="button" onClick={() => rate('partial')}>
              Partial
            </button>
            <button className="btn brick" type="button" onClick={() => rate('knew')}>
              Knew it
            </button>
          </div>
        </>
      )}
    </div>
  )
}
