import { APPLY, FLASHCARDS, SESSIONS } from '../data'
import type { Route } from '../routes'

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
      <div className="kicker">Learn by session · infographic, memorize, GSU example</div>
      <h1>
        Session {s.id}: {s.title}
      </h1>
      <p className="lede">
        Study one class at a time. Then drill this session’s cards and type a Barbara
        Norris question that uses it.
      </p>
      <div className="row" style={{ margin: '12px 0 18px' }}>
        {SESSIONS.map((item) => (
          <button
            key={item.id}
            className={`chip ${id === item.id ? 'active' : ''}`}
            type="button"
            onClick={() => go('learn', item.id)}
          >
            S{item.id}
          </button>
        ))}
      </div>

      <Infographic id={s.id} />

      <div className="memo">
        <div className="kicker">Memorize this</div>
        <p className="memo-line">{s.mnemonic}</p>
        {s.formula && <p className="formula">{s.formula}</p>}
        <p style={{ marginBottom: 0 }}>{s.remember}</p>
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

      <h2 className="section-title">Worked onto Barbara / GSU</h2>
      <div className="card" style={{ padding: 18 }}>
        <p>{s.worked}</p>
        <p>
          <strong>GSU hook.</strong> {s.barbara}
        </p>
        <div className="callout" style={{ margin: 0 }}>
          <strong>Usual exam miss.</strong> {s.examMiss}
        </div>
      </div>

      <div className="row" style={{ marginTop: 18 }}>
        <button className="btn brick" type="button" onClick={() => go('cards', s.id)}>
          Flashcards for S{s.id} ({cardCount})
        </button>
        <button className="btn" type="button" onClick={() => go('apply', s.id)}>
          Type a GSU question ({qCount})
        </button>
        <button className="btn ghost" type="button" onClick={() => go('connect')}>
          See the full stack
        </button>
      </div>
    </div>
  )
}

function Infographic({ id }: { id: number }) {
  if (id === 1) {
    return (
      <div className="viz">
        <div className="levels-org">
          <strong>Organization</strong>
          <span>freeze · reviews · EMU culture · GSU reputation</span>
          <div className="levels-group">
            <strong>Group</strong>
            <span>cliques · seniors / juniors / PCAs · blame norms</span>
            <div className="levels-ind">
              <strong>Individual</strong>
              <span>values · personality · exhaustion · self-efficacy</span>
            </div>
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
      <div className="viz">
        <div className="grid two">
          {cells.map(([t, d]) => (
            <div key={t} className="card" style={{ padding: 16 }}>
              <h3>{t}</h3>
              <p className="kb">{d}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (id === 3) {
    return (
      <div className="viz flow">
        <div className="card" style={{ padding: 16 }}>
          <h3>Person (P)</h3>
          <p>values, OCEAN, efficacy</p>
        </div>
        <span className="flow-plus">+</span>
        <div className="card" style={{ padding: 16 }}>
          <h3>Environment (E)</h3>
          <p>job, culture, freeze</p>
        </div>
        <span className="flow-plus">→</span>
        <div className="card" style={{ padding: 16, borderColor: 'var(--brick)' }}>
          <h3>Behavior (B)</h3>
          <p>help, blame, exit</p>
        </div>
      </div>
    )
  }

  if (id === 4) {
    const stages = [
      ['1 Perceive', 'stereotypes, self-enhancement'],
      ['2 Attribute', 'FAE, availability, framing'],
      ['3 Decide', 'intuit / maximize / satisfice'],
      ['4 Evaluate', 'confirm, hindsight, escalate'],
    ]
    return (
      <div className="viz flow wrap">
        {stages.map((pair, i) => (
          <div key={pair[0]} className="flow-chunk">
            <div className="card" style={{ padding: 14 }}>
              <h3>{pair[0]}</h3>
              <p className="kb">{pair[1]}</p>
            </div>
            {i < stages.length - 1 && <span className="flow-plus">→</span>}
          </div>
        ))}
      </div>
    )
  }

  if (id === 5) {
    const row = ['Needs', 'SMART goals', 'Hope vs reward', 'E × I × V', 'Equity']
    return (
      <div className="viz flow wrap">
        {row.map((t, i) => (
          <div key={t} className="flow-chunk">
            <div className="card" style={{ padding: 14, textAlign: 'center' }}>
              <strong>{t}</strong>
            </div>
            {i < row.length - 1 && <span className="flow-plus">→</span>}
          </div>
        ))}
      </div>
    )
  }

  if (id === 6) {
    return (
      <div className="viz flow">
        <div className="card" style={{ padding: 16 }}>
          <h3>VISAF</h3>
          <p>Variety · Identity · Significance · Autonomy · Feedback</p>
        </div>
        <span className="flow-plus">→</span>
        <div className="card" style={{ padding: 16 }}>
          <h3>Three states</h3>
          <p>Meaningfulness, responsibility, knowledge of results</p>
        </div>
        <span className="flow-plus">→</span>
        <div className="card" style={{ padding: 16, borderColor: 'var(--brick)' }}>
          <h3>MPS</h3>
          <p>((V+I+S)/3) × A × F</p>
        </div>
      </div>
    )
  }

  if (id === 7) {
    return (
      <div className="grid two viz">
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
    <div className="viz">
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
