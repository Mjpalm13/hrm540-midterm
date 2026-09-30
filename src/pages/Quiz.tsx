import { useMemo, useState } from 'react'
import { QUIZ } from '../data'
import { patchProgress } from '../storage'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

export function Quiz() {
  const [seed, setSeed] = useState(0)
  const deck = useMemo(() => shuffle(QUIZ), [seed])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = deck[i]

  function choose(id: string) {
    if (picked || !q) return
    setPicked(id)
    if (id === q.correct) setScore((s) => s + 1)
  }

  function next() {
    setPicked(null)
    setI((n) => n + 1)
  }

  function finish() {
    patchProgress((p) => ({
      ...p,
      quizLast: score,
      quizBest: Math.max(p.quizBest, score),
    }))
    setDone(true)
  }

  function restart() {
    setSeed((s) => s + 1)
    setI(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  if (!q) return null

  if (done) {
    return (
      <div>
        <div className="kicker">Quiz complete</div>
        <h1>
          {score} / {deck.length}
        </h1>
        <p className="lede">
          {score >= 16
            ? 'You are catching the traps. Go type a full essay while this is warm.'
            : score >= 11
              ? 'Solid middle. Misses are usually level-of-analysis or E vs I vs V. Drill those cards.'
              : 'Treat every miss as a vocab card. Then retry.'}
        </p>
        <button className="btn brick" type="button" onClick={restart}>
          Shuffle and retry
        </button>
      </div>
    )
  }

  const locked = picked !== null
  const pct = ((i + (locked ? 1 : 0)) / deck.length) * 100

  return (
    <div>
      <div className="kicker">
        Multiple choice · Session {q.session === 0 ? 'synthesis' : q.session}
      </div>
      <h1>Pick the best course move.</h1>
      <p className="kb">
        {i + 1} / {deck.length} · score {score}
      </p>
      <div className="progress-track" style={{ margin: '8px 0 18px' }}>
        <div style={{ width: `${pct}%` }} />
      </div>
      <div className="card" style={{ padding: 20 }}>
        <h2 style={{ fontSize: '1.28rem' }}>{q.prompt}</h2>
        <div className="grid" style={{ marginTop: 12 }}>
          {q.choices.map((c) => {
            let cls = 'choice'
            if (locked && c.id === q.correct) cls += ' right'
            else if (locked && c.id === picked && c.id !== q.correct) cls += ' wrong'
            else if (!locked && c.id === picked) cls += ' picked'
            return (
              <button key={c.id} className={cls} type="button" onClick={() => choose(c.id)}>
                <strong>{c.id.toUpperCase()}.</strong> {c.text}
              </button>
            )
          })}
        </div>
        {locked && (
          <div className="callout" style={{ marginTop: 14 }}>
            {picked === q.correct ? 'Correct. ' : 'Not that one. '}
            {q.why}
          </div>
        )}
        <div className="row" style={{ marginTop: 14 }}>
          {locked && i < deck.length - 1 && (
            <button className="btn brick" type="button" onClick={next}>
              Next
            </button>
          )}
          {locked && i === deck.length - 1 && (
            <button className="btn brick" type="button" onClick={finish}>
              See score
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
