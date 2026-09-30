import type { GradedConcept } from '../grade'
import { hitCount, scoreLabel } from '../grade'

type Props = {
  title: string
  you: string
  model: string
  graded: GradedConcept[]
  onClose: () => void
  onNext?: () => void
  nextLabel?: string
}

export function GradeSheet({ title, you, model, graded, onClose, onNext, nextLabel }: Props) {
  const { hit, total } = hitCount(graded)
  const empty = you.trim().length === 0

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="grade-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-head">
          <div>
            <div className="kicker">Most likely a strong exam answer</div>
            <h2 id="grade-title">{title}</h2>
            <p className="kb">
              {scoreLabel(hit, total)} · {hit}/{total} course ideas detected in what you typed
            </p>
          </div>
          <button className="btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="sheet-body">
          <div className="row" style={{ marginBottom: 14 }}>
            {graded.map((g) => (
              <span key={g.id} className={`chip ${g.hit ? 'good' : 'miss'}`}>
                {g.hit ? 'In yours' : 'Probably missing'}: {g.label}
              </span>
            ))}
          </div>
          {empty && (
            <div className="callout" style={{ marginBottom: 14 }}>
              You submitted a blank box. The right column is the model anyway — try rewriting with the
              missing chips, then check again.
            </div>
          )}
          <div className="split">
            <div className="pane">
              <h3>What you wrote</h3>
              <p style={{ whiteSpace: 'pre-wrap' }}>{empty ? '—' : you}</p>
            </div>
            <div className="pane model">
              <h3>A strong answer would most likely include</h3>
              <p style={{ whiteSpace: 'pre-wrap' }}>{model}</p>
            </div>
          </div>
          <div className="space" />
          <div className="row">
            <button className="btn" type="button" onClick={onClose}>
              Keep writing
            </button>
            {onNext && (
              <button className="btn brick" type="button" onClick={onNext}>
                {nextLabel ?? 'Next question'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
