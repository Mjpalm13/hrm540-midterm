import { useMemo, useState } from 'react'
import { GradeSheet } from '../components/GradeSheet'
import { APPLY, SESSIONS } from '../data'
import { gradeText } from '../grade'
import { loadProgress, patchProgress } from '../storage'

export function Apply() {
  const [session, setSession] = useState(0)
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)
  const [, setTick] = useState(0)

  const list = useMemo(
    () => APPLY.filter((q) => (session === 0 ? true : q.session === session)),
    [session],
  )
  const q = list[Math.min(idx, Math.max(list.length - 1, 0))]
  const saved = q ? loadProgress().apply[q.id]?.draft ?? '' : ''
  const [draft, setDraft] = useState(saved)

  function select(n: number, nextSession = session) {
    const nextList = APPLY.filter((item) => (nextSession === 0 ? true : item.session === nextSession))
    const next = nextList[Math.min(n, nextList.length - 1)]
    setIdx(n)
    setOpen(false)
    setDraft(next ? loadProgress().apply[next.id]?.draft ?? '' : '')
  }

  function save(text: string) {
    if (!q) return
    setDraft(text)
    patchProgress((p) => ({
      ...p,
      apply: {
        ...p.apply,
        [q.id]: {
          draft: text,
          lastHits: p.apply[q.id]?.lastHits ?? 0,
          lastTotal: p.apply[q.id]?.lastTotal ?? 0,
        },
      },
    }))
  }

  function check() {
    if (!q) return
    const graded = gradeText(draft, q.concepts)
    const hit = graded.filter((g) => g.hit).length
    patchProgress((p) => ({
      ...p,
      apply: {
        ...p.apply,
        [q.id]: { draft, lastHits: hit, lastTotal: graded.length },
      },
    }))
    setTick((t) => t + 1)
    setOpen(true)
  }

  if (!q) {
    return <div className="callout">No questions in this session filter.</div>
  }

  const graded = gradeText(draft, q.concepts)

  return (
    <div>
      <div className="kicker">Typed case questions · write first, then open the popup</div>
      <h1>Connect the vocab to GSU.</h1>
      <p className="lede">
        Cover the model until you have tried. The popup compares what you wrote with what
        you should probably have put, and flags course ideas it did not find in your text.
      </p>
      <div className="row" style={{ margin: '12px 0 16px' }}>
        <button className={`chip ${session === 0 ? 'active' : ''}`} type="button" onClick={() => { setSession(0); select(0, 0) }}>
          All
        </button>
        {SESSIONS.map((s) => (
          <button
            key={s.id}
            className={`chip ${session === s.id ? 'active' : ''}`}
            type="button"
            onClick={() => { setSession(s.id); select(0, s.id) }}
          >
            S{s.id}
          </button>
        ))}
      </div>
      <p className="kb">
        {Math.min(idx, list.length - 1) + 1} / {list.length}
        {q.session === 0 ? ' · Synthesis' : ` · Session ${q.session}`}
      </p>
      <div className="card" style={{ padding: 20, marginBottom: 14 }}>
        <h2 style={{ fontSize: '1.25rem' }}>{q.prompt}</h2>
        <p className="kb">If you freeze: {q.stems}</p>
        <textarea
          className="exam"
          value={draft}
          onChange={(e) => save(e.target.value)}
          placeholder="Name it → define it → GSU fact → so what."
        />
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn brick" type="button" onClick={check}>
            Check what I should have put
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => select(idx <= 0 ? list.length - 1 : idx - 1)}
          >
            Previous
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => select(idx >= list.length - 1 ? 0 : idx + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {open && (
        <GradeSheet
          title={q.session === 0 ? 'Synthesis' : `Session ${q.session}`}
          you={draft}
          model={q.model}
          graded={graded}
          onClose={() => setOpen(false)}
          onNext={() => select(idx >= list.length - 1 ? 0 : idx + 1)}
        />
      )}
    </div>
  )
}
