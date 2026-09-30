import { useState } from 'react'
import { GradeSheet } from '../components/GradeSheet'
import { EXAM } from '../exam'
import { gradeText } from '../grade'
import { loadProgress, patchProgress } from '../storage'

export function Exam() {
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)
  const q = EXAM[idx]!
  const [draft, setDraft] = useState(() => loadProgress().exam[q.id]?.draft ?? '')

  function load(n: number) {
    const next = EXAM[n]!
    setIdx(n)
    setOpen(false)
    setDraft(loadProgress().exam[next.id]?.draft ?? '')
  }

  function save(text: string) {
    setDraft(text)
    patchProgress((p) => ({
      ...p,
      exam: {
        ...p.exam,
        [q.id]: {
          draft: text,
          lastHits: p.exam[q.id]?.lastHits ?? 0,
          lastTotal: p.exam[q.id]?.lastTotal ?? 0,
        },
      },
    }))
  }

  function check() {
    const graded = gradeText(draft, q.concepts)
    patchProgress((p) => ({
      ...p,
      exam: {
        ...p.exam,
        [q.id]: {
          draft,
          lastHits: graded.filter((g) => g.hit).length,
          lastTotal: graded.length,
        },
      },
    }))
    setOpen(true)
  }

  const done = EXAM.filter((item) => (loadProgress().exam[item.id]?.draft ?? '').trim().length > 0).length
  const last = loadProgress().exam[q.id]
  const pct = ((idx + 1) / EXAM.length) * 100

  return (
    <div>
      <div className="kicker">Practice exam · 12 written questions · some combine frameworks</div>
      <h1>Sit it like the midterm.</h1>
      <p className="lede">
        Twelve written questions, all about Barbara’s surgery unit. Single-framework items still want a
        four-beat answer. Combo items want the frameworks named and connected, not
        listed. Type first, then open a strong model.
      </p>
      <p className="kb">
        Drafts saved: {done}/12
        {last?.lastTotal ? ` · last check on this item ${last.lastHits}/${last.lastTotal} ideas` : ''}
      </p>
      <div className="progress-track" style={{ margin: '8px 0 14px' }}>
        <div style={{ width: `${pct}%` }} />
      </div>
      <div className="row" style={{ marginBottom: 14 }}>
        {EXAM.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`chip ${i === idx ? 'active' : ''}`}
            onClick={() => load(i)}
          >
            {item.n}
            {item.combo ? '+' : ''}
          </button>
        ))}
      </div>
      <div className="card" style={{ padding: 20 }}>
        <div className="row" style={{ marginBottom: 8 }}>
          <span className="chip">{q.combo ? 'Combination' : 'Single framework'}</span>
          <span className="kb">{q.uses}</span>
        </div>
        <h2 style={{ fontSize: '1.28rem' }}>
          Q{q.n}. {q.prompt}
        </h2>
        <p className="kb">If you freeze: {q.stems}</p>
        <textarea
          className="exam"
          style={{ minHeight: 280 }}
          value={draft}
          onChange={(e) => save(e.target.value)}
          placeholder="Name → define → a fact from the case → so what. If it is a combo, show how the frameworks build."
        />
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn brick" type="button" onClick={check}>
            See a strong answer
          </button>
          <button className="btn" type="button" disabled={idx === 0} onClick={() => load(idx - 1)}>
            Previous
          </button>
          <button
            className="btn"
            type="button"
            disabled={idx === EXAM.length - 1}
            onClick={() => load(idx + 1)}
          >
            Next question
          </button>
        </div>
      </div>
      {open && (
        <GradeSheet
          title={`Q${q.n} · ${q.uses}`}
          you={draft}
          model={q.model}
          graded={gradeText(draft, q.concepts)}
          onClose={() => setOpen(false)}
          onNext={idx < EXAM.length - 1 ? () => load(idx + 1) : undefined}
          nextLabel="Next exam question"
        />
      )}
    </div>
  )
}
