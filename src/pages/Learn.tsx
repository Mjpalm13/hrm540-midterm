import { APPLY, FLASHCARDS, SESSIONS } from '../data'
import type { Route } from '../routes'
import { SessionVisuals } from '../visuals'

export function Learn({
  session,
  go,
}: {
  session: number
  go: (r: Route, s?: number) => void
}) {
  const id = session >= 1 && session <= 8 ? session : 1
  const s = SESSIONS[id - 1] ?? SESSIONS[0]!
  const cardCount = FLASHCARDS.filter((c) => c.session === s.id).length
  const qCount = APPLY.filter((q) => q.session === s.id).length

  return (
    <div>
      <div className="kicker">Learn by session · diagrams from class, then the case</div>
      <h1>
        Session {s.id}: {s.title}
      </h1>
      <p className="lede">
        {s.question} Study the frameworks as they appear on the slides, then map every box onto
        Barbara’s unit. Drill cards and a typed question when the picture is in your head.
      </p>
      <div className="row" style={{ margin: '12px 0 18px' }}>
        {SESSIONS.map((item) => (
          <button
            key={item.id}
            className={`chip ${id === item.id ? 'active' : ''}`}
            type="button"
            onClick={() => go('learn', item.id)}
          >
            {item.id}. {item.title.split(' ')[0]}
          </button>
        ))}
      </div>

      <h2 className="section-title">What this session is for</h2>
      <ol className="goals">
        {s.goals.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ol>

      <h2 className="section-title">Frameworks and graphs</h2>
      <p className="kb" style={{ marginTop: -6 }}>
        Drawn from the class slide structures (levels, Lewin, decision process, needs, Kerr table,
        job characteristics, crafting paths, Cialdini, obedience data) — not a photocopy of the
        deck, so you can study them here.
      </p>
      <SessionVisuals id={s.id} />

      <div className="memo">
        <div className="kicker">Memorize this</div>
        <p className="memo-line">{s.mnemonic}</p>
        {s.formula && <p className="formula">{s.formula}</p>}
        <p style={{ marginBottom: 0 }}>{s.remember}</p>
      </div>

      <h2 className="section-title">Map every box onto Barbara’s unit</h2>
      <div className="card" style={{ overflow: 'auto' }}>
        <table className="plain map-table">
          <thead>
            <tr>
              <th>Piece of the framework</th>
              <th>What it looks like in the case</th>
            </tr>
          </thead>
          <tbody>
            {s.ontoCase.map((row) => (
              <tr key={row.piece}>
                <td>{row.piece}</td>
                <td>{row.fact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid two" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 18 }}>
          <div className="kicker">This session asks</div>
          <h2>{s.question}</h2>
          <p>{s.builds}</p>
        </div>
        <div className="card" style={{ padding: 18 }}>
          <div className="kicker">How it connects</div>
          <p>
            <strong>From before.</strong> {s.fromPrev}
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Into next.</strong> {s.toNext}
          </p>
        </div>
      </div>

      <h2 className="section-title">Parts to name on the exam</h2>
      <div className="grid">
        {s.parts.map((p) => (
          <div key={p.name} className="card" style={{ padding: '14px 16px' }}>
            <strong>{p.name}.</strong> {p.detail}
          </div>
        ))}
      </div>

      <h2 className="section-title">Vocab you should be able to define</h2>
      <div className="grid">
        {s.vocab.map((v) => (
          <details key={v.term} className="vocab">
            <summary>{v.term}</summary>
            <p>{v.line}</p>
          </details>
        ))}
      </div>

      <h2 className="section-title">Worked onto Barbara’s unit</h2>
      <div className="card" style={{ padding: 18 }}>
        <p>{s.worked}</p>
        <p>
          <strong>In the case.</strong> {s.barbara}
        </p>
        <div className="callout" style={{ margin: 0 }}>
          <strong>Usual exam miss.</strong> {s.examMiss}
        </div>
      </div>

      <div className="row" style={{ marginTop: 18 }}>
        <button className="btn brick" type="button" onClick={() => go('cards', s.id)}>
          Flashcards for Session {s.id} ({cardCount})
        </button>
        <button className="btn" type="button" onClick={() => go('apply', s.id)}>
          Type a case question ({qCount})
        </button>
        <button className="btn ghost" type="button" onClick={() => go('connect')}>
          See the full stack
        </button>
      </div>
    </div>
  )
}
