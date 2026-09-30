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
            <span className="pipe-n">Session {step.id}</span>
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
              <td>Why the surgery unit is struggling</td>
              <td>Session 1 levels + Session 2 evidence types</td>
              <td>Session 3 fit, Session 4 stereotypes and fundamental attribution error</td>
            </tr>
            <tr>
              <td>“They’re unmotivated”</td>
              <td>Session 5: motivation is not the same as performance</td>
              <td>Herzberg, Kerr, expectancy × instrumentality × valence, equity</td>
            </tr>
            <tr>
              <td>No money / freeze</td>
              <td>Session 6 Motivating Potential Score multipliers</td>
              <td>Session 7 job crafting + Session 8 influence</td>
            </tr>
            <tr>
              <td>Newer nurses versus long-time nurses</td>
              <td>Session 4 stereotype / self-fulfilling prophecy / fundamental attribution error</td>
              <td>Session 5 equity, Session 7 relationship crafting</td>
            </tr>
            <tr>
              <td>What should Barbara do first</td>
              <td>Session 4: satisfice + 3 futures × 3 objectives × 3 options</td>
              <td>Session 5 hygiene and instrumentality, Session 6 autonomy and feedback, Session 8 influence</td>
            </tr>
            <tr>
              <td>Culture / blame</td>
              <td>Session 1 group + Session 8 agentic shift</td>
              <td>Session 4 prophecy, Session 5 alignment</td>
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
              <div className="kicker">Session {s.id} → {next ? `Session ${next.id}` : 'exam plan'}</div>
              <p style={{ margin: 0 }}>{s.toNext}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
