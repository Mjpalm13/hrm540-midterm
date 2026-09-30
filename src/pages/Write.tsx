import { useEffect, useState } from 'react'
import { GradeSheet } from '../components/GradeSheet'
import { ESSAYS } from '../data'
import { gradeText, wordCount } from '../grade'
import { loadProgress, patchProgress } from '../storage'

export function Write() {
  const [id, setId] = useState(ESSAYS[0]!.id)
  const essay = ESSAYS.find((e) => e.id === id) ?? ESSAYS[0]!
  const [draft, setDraft] = useState(() => loadProgress().essays[essay.id]?.draft ?? '')
  const [open, setOpen] = useState(false)
  const [seconds, setSeconds] = useState<number | null>(null)

  useEffect(() => {
    setDraft(loadProgress().essays[id]?.draft ?? '')
    setOpen(false)
    setSeconds(null)
  }, [id])

  useEffect(() => {
    if (seconds === null) return
    if (seconds <= 0) return
    const t = window.setTimeout(() => setSeconds((s) => (s === null ? s : s - 1)), 1000)
    return () => window.clearTimeout(t)
  }, [seconds])

  function save(text: string) {
    setDraft(text)
    patchProgress((p) => ({
      ...p,
      essays: {
        ...p.essays,
        [essay.id]: {
          draft: text,
          lastHits: p.essays[essay.id]?.lastHits ?? 0,
          lastTotal: p.essays[essay.id]?.lastTotal ?? 0,
        },
      },
    }))
  }

  function check() {
    const graded = gradeText(draft, essay.rubric)
    patchProgress((p) => ({
      ...p,
      essays: {
        ...p.essays,
        [essay.id]: {
          draft,
          lastHits: graded.filter((g) => g.hit).length,
          lastTotal: graded.length,
        },
      },
    }))
    setOpen(true)
  }

  const mm = seconds === null ? null : Math.floor(seconds / 60)
  const ss = seconds === null ? null : seconds % 60
  const timedOut = seconds === 0

  return (
    <div>
      <div className="kicker">Written exam simulator</div>
      <h1>One sitting, one essay.</h1>
      <p className="lede">
        Write as you would in class. Then open the popup: your draft next to a teaching
        key, plus rubric chips for ideas it did not detect in your sentences.
      </p>
      <div className="row" style={{ margin: '12px 0 16px' }}>
        {ESSAYS.map((e) => (
          <button
            key={e.id}
            className={`chip ${id === e.id ? 'active' : ''}`}
            type="button"
            onClick={() => setId(e.id)}
          >
            {e.title}
          </button>
        ))}
      </div>
      <div className="card" style={{ padding: 20 }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h2>{essay.title}</h2>
          <span className="kb">
            {wordCount(draft)} words
            {mm !== null && ss !== null ? ` · ${mm}:${String(ss).padStart(2, '0')}` : ` · ~${essay.minutes} min`}
          </span>
        </div>
        <p>{essay.prompt}</p>
        {timedOut && (
          <div className="callout" style={{ marginBottom: 12 }}>
            Time. Stop adding new arguments and check the popup.
          </div>
        )}
        <textarea
          className="exam"
          style={{ minHeight: 320 }}
          value={draft}
          onChange={(e) => save(e.target.value)}
          placeholder="Stack frameworks. Cite the hiring freeze, the off-site, long-time versus newer nurses, mystery reviews, and nurses borrowed from other units. Name → define → a fact from the case → so what."
        />
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn brick" type="button" onClick={check}>
            See what I should have put
          </button>
          {seconds === null ? (
            <button className="btn" type="button" onClick={() => setSeconds(essay.minutes * 60)}>
              Start {essay.minutes}-min timer
            </button>
          ) : (
            <button className="btn" type="button" onClick={() => setSeconds(null)}>
              Clear timer
            </button>
          )}
        </div>
      </div>
      {open && (
        <GradeSheet
          title={essay.title}
          you={draft}
          model={essay.model}
          graded={gradeText(draft, essay.rubric)}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
