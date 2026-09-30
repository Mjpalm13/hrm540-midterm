import { useState } from 'react'
import { SESSIONS, STACK_LINE } from '../data'

export function Sessions() {
  const [id, setId] = useState(1)
  const s = SESSIONS[id - 1] ?? SESSIONS[0]!

  return (
    <div>
      <div className="kicker">How the frameworks build</div>
      <h1>Each session adds a question about the same unit.</h1>
      <p className="lede">{STACK_LINE}</p>
      <div className="row" style={{ margin: '14px 0 18px' }}>
        {SESSIONS.map((item) => (
          <button
            key={item.id}
            className={`chip ${id === item.id ? 'active' : ''}`}
            type="button"
            onClick={() => setId(item.id)}
          >
            S{item.id} {item.title.split(' ')[0]}
          </button>
        ))}
      </div>
      <Infographic id={s.id} />
      <div className="grid two" style={{ marginTop: 16 }}>
        <div className="card" style={{ padding: 18 }}>
          <div className="kicker">This session asks</div>
          <h2>{s.question}</h2>
          <p>{s.builds}</p>
        </div>
        <div className="card" style={{ padding: 18 }}>
          <div className="kicker">Way to remember</div>
          <h2 style={{ fontSize: '1.25rem' }}>{s.remember}</h2>
          <p>
            <strong>GSU. </strong>
            {s.barbara}
          </p>
        </div>
      </div>
      <h3 style={{ marginTop: 22 }}>Parts to name on the exam</h3>
      <div className="grid">
        {s.parts.map((p) => (
          <div key={p.name} className="card" style={{ padding: '14px 16px' }}>
            <strong>{p.name}.</strong> {p.detail}
          </div>
        ))}
      </div>
    </div>
  )
}

function Infographic({ id }: { id: number }) {
  if (id === 1) {
    return (
      <div className="levels-org">
        <strong>Organization</strong> — freeze, reviews, EMU culture, GSU reputation
        <div className="levels-group">
          <strong>Group</strong> — cliques, seniors / juniors / PCAs, blame norms
          <div className="levels-ind">
            <strong>Individual</strong> — values, personality, exhaustion, self-efficacy
          </div>
        </div>
      </div>
    )
  }

  if (id === 2) {
    const cells = [
      ['Scientific', 'Research on turnover, equity, JCM'],
      ['Organizational', 'Scores, vacancies, 29 one-to-ones'],
      ['Experiential', 'RN years + Betty Nolan'],
      ['Stakeholder', 'Nurses, PCAs, MDs, patients, DoN'],
    ]
    return (
      <div className="grid two">
        {cells.map(([t, d]) => (
          <div key={t} className="card" style={{ padding: 16 }}>
            <h3>{t}</h3>
            <p className="kb">{d}</p>
          </div>
        ))}
      </div>
    )
  }

  if (id === 3) {
    return (
      <div className="grid three">
        <div className="card" style={{ padding: 16 }}>
          <h3>Person (P)</h3>
          <p>values, OCEAN, efficacy</p>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <h3>Environment (E)</h3>
          <p>job, culture, freeze</p>
        </div>
        <div className="card" style={{ padding: 16, borderColor: 'var(--brick)' }}>
          <h3>Behavior (B)</h3>
          <p>help, blame, exit</p>
        </div>
      </div>
    )
  }

  if (id === 4) {
    const stages = [
      ['Perceive', 'stereotypes, self-enhancement'],
      ['Attribute', 'FAE, availability, framing'],
      ['Decide', 'intuit / maximize / satisfice'],
      ['Evaluate', 'confirm, hindsight, escalate'],
    ]
    return (
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        {stages.map(([t, d]) => (
          <div key={t} className="card" style={{ padding: 14 }}>
            <h3>{t}</h3>
            <p className="kb">{d}</p>
          </div>
        ))}
      </div>
    )
  }

  if (id === 5) {
    const row = ['Needs', 'Goals', 'Rewards', 'E × I × V', 'Equity']
    return (
      <div className="grid" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
        {row.map((t) => (
          <div key={t} className="card" style={{ padding: 14, textAlign: 'center' }}>
            <strong>{t}</strong>
          </div>
        ))}
      </div>
    )
  }

  if (id === 6) {
    return (
      <div className="grid three">
        <div className="card" style={{ padding: 16 }}>
          <h3>VISAF</h3>
          <p>Variety, Identity, Significance, Autonomy, Feedback</p>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <h3>Psychological states</h3>
          <p>Meaningfulness, responsibility, knowledge of results</p>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <h3>MPS</h3>
          <p>((V+I+S)/3) × A × F — zeros on A or F kill it</p>
        </div>
      </div>
    )
  }

  if (id === 7) {
    return (
      <div className="grid two">
        <div className="card" style={{ padding: 16 }}>
          <h3>Passion story (heresies)</h3>
          <p>Follow passion → find calling → bliss. Fails at GSU: calling met misery.</p>
        </div>
        <div className="card" style={{ padding: 16, borderColor: 'var(--brick)' }}>
          <h3>Crafting path</h3>
          <p>Opportunity → master → improve. Perceptions · Tasks · Relationships.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: 10 }}>
        {['Coercive', 'Reward', 'Legitimate', 'Expert', 'Referent'].map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <p className="kb">Dependence: scarcity × importance × substitutability — GSU RNs hold this too.</p>
      <div className="row">
        {['Liking', 'Reciprocity', 'Social proof', 'Consistency', 'Authority', 'Scarcity', 'Unity'].map(
          (t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ),
        )}
      </div>
    </div>
  )
}
