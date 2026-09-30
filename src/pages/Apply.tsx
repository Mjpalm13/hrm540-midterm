import { APPLY, SESSIONS } from '../data'
import { GradeSheet } from '../components/GradeSheet'
import { gradeText } from '../grade'
import type { Route } from '../routes'
import { loadProgress, patchProgress } from '../storage'
import { useMemo, useState } from 'react'

export function Apply({
  session,
  go,
}: {
  session: number
  go: (r: Route, s?: number) => void
}) {
  const list = useMemo(
    () => APPLY.filter((q) => (session === 0 ? true : q.session === session)),
    [session],
  )
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)

  const q = list[Math.min(idx, Math.max(list.length - 1, 0))]
  const [draft, setDraft] = useState(() =>
    q ? loadProgress().apply[q.id]?.draft ?? '' : '',
  )

  function loadIndex(n: number, nextSession = session) {
    const nextList = APPLY.filter((item) => (nextSession === 0 ? true : item.session === nextSession))
    const next = nextList[Math.min(n, Math.max(nextList.length - 1, 0))]
    setIdx(n)
    setOpen(false)
    setDraft(next ? loadProgress().apply[next.id]?.draft ?? '' : '')
  }

  function changeFilter(nextSession: number) {
    go('apply', nextSession)
    loadIndex(0, nextSession)
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
    patchProgress((p) => ({
      ...p,
      apply: {
        ...p.apply,
        [q.id]: {
          draft,
          lastHits: graded.filter((g) => g.hit).length,
          lastTotal: graded.length,
        },
      },
    }))
    setOpen(true)
  }

  if (!q) {
    return (
      <div>
        <p>No case questions tagged to this session yet.</p>
        <button className="btn" type="button" onClick={() => changeFilter(0)}>
          Show all questions
        </button>
      </div>
    )
  }

  const graded = gradeText(draft, q.concepts)
  const last = loadProgress().apply[q.id]

  return (
    <div>
      <div className="kicker">Barbara Norris × course concepts</div>
      <h1>Type your answer, then see a strong one.</h1>
      <p className="lede">
        Write as you would on the midterm. When you check, a popup puts your words beside
        what would most likely be a strong answer — plus course ideas it did not find in
        your text.
      </p>
      <div className="row" style={{ margin: '12px 0 16px' }}>
        <button className={`chip ${session === 0 ? 'active' : ''}`} type="button" onClick={() => changeFilter(0)}>
          All
        </button>
        {SESSIONS.map((s) => (
          <button
            key={s.id}
            className={`chip ${session === s.id ? 'active' : ''}`}
            type="button"
            onClick={() => changeFilter(s.id)}
          >
            S{s.id}
          </button>
        ))}
      </div>

      <div className="apply-layout">
        <aside className="q-list">
          {list.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`q-item ${i === Math.min(idx, list.length - 1) ? 'active' : ''}`}
              onClick={() => loadIndex(i)}
            >
              <span className="kb">{item.session === 0 ? 'Synth' : `S${item.session}`}</span>
              {item.prompt.slice(0, 72)}
              {item.prompt.length > 72 ? '…' : ''}
            </button>
          ))}
        </aside>
        <div className="card" style={{ padding: 20 }}>
          <p className="kb">
            {Math.min(idx, list.length - 1) + 1} / {list.length}
            {last?.lastTotal ? ` · last check ${last.lastHits}/${last.lastTotal} ideas` : ''}
          </p>
          <h2 style={{ fontSize: '1.25rem' }}>{q.prompt}</h2>
          <p className="kb">If you freeze: {q.stems}</p>
          <textarea
            className="exam"
            value={draft}
            onChange={(e) => save(e.target.value)}
            placeholder="Name it → define it → a fact from the case → so what."
          />
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn brick" type="button" onClick={check}>
              See a strong answer
            </button>
            <button className="btn" type="button" onClick={() => go('learn', q.session || 1)}>
              Review this session
            </button>
          </div>
        </div>
      </div>
      {open && (
        <GradeSheet
          title={q.session === 0 ? 'Synthesis' : `Session ${q.session} on the case`}
          you={draft}
          model={q.model}
          graded={graded}
          onClose={() => setOpen(false)}
          onNext={() => loadIndex(idx >= list.length - 1 ? 0 : idx + 1)}
        />
      )}
    </div>
  )
}
