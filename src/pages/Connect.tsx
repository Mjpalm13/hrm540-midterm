import { CONNECT_STEPS, SESSIONS, STACK_LINE } from '../data'
import type { Route } from '../routes'

export function Connect({ go }: { go: (r: Route, session?: number) => void }) {
  return (
    <div>
      <div className="kicker">How the frameworks build</div>
      <h1>Each session adds a question about the same unit.</h1>
      <p className="lede">
        {STACK_LINE} The real midterm is 12 written questions; some combine two or more
        of these hops. Click a step to study that session, or sit the 12-Q exam when you
        can connect them without listing.
      </p>

      <div className="row" style={{ marginBottom: 18 }}>
        <button className="btn brick" type="button" onClick={() => go('exam')}>
          Sit the 12-question exam
        </button>
      </div>
      <div className="pipeline">
        {CONNECT_STEPS.map((step, i) => (
          <button
            key={step.id}
            type="button"
            className="pipe-step"
            onClick={() => go('learn', step.id)}
          >
            <span className="pipe-n">S{step.id}</span>
            <span>
              <strong>{step.ask}</strong>
              <span className="kb" style={{ display: 'block' }}>
                {step.does}
              </span>
            </span>
            {i < CONNECT_STEPS.length - 1 && <span className="pipe-arrow" aria-hidden="true">→</span>}
          </button>
        ))}
      </div>

      <h2 className="section-title">What to reach for in a written answer</h2>
      <div className="card" style={{ overflow: 'auto' }}>
        <table className="plain">
          <thead>
            <tr>
              <th>If the prompt is about…</th>
              <th>Start with</th>
              <th>Then stack</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Why GSU is a mess</td>
              <td>S1 levels + S2 SOES</td>
              <td>S3 fit, S4 FAE/stereotypes</td>
            </tr>
            <tr>
              <td>“They’re unmotivated”</td>
              <td>S5 motivation ≠ performance</td>
              <td>Herzberg, Kerr, E×I×V, equity</td>
            </tr>
            <tr>
              <td>No money / freeze</td>
              <td>S6 MPS multipliers</td>
              <td>S7 crafting + S8 Cialdini</td>
            </tr>
            <tr>
              <td>Juniors vs seniors</td>
              <td>S4 stereotype / SFP / FAE</td>
              <td>S5 equity, S7 relationship crafting</td>
            </tr>
            <tr>
              <td>What should Barbara do first</td>
              <td>S4 satisfice + 3×3×3</td>
              <td>S5 hygiene/I, S6 A and F, S8 influence</td>
            </tr>
            <tr>
              <td>Culture / blame</td>
              <td>S1 group + S8 agentic shift</td>
              <td>S4 prophecy, S5 alignment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-title">One sentence per hop</h2>
      <div className="grid">
        {SESSIONS.map((s, i) => {
          const next = SESSIONS[i + 1]
          return (
            <div key={s.id} className="card" style={{ padding: 16 }}>
              <div className="kicker">S{s.id} → {next ? `S${next.id}` : 'exam plan'}</div>
              <p style={{ margin: 0 }}>{s.toNext}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
