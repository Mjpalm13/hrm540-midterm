import { CASE_FACTS, CASE_GLOSSARY, EXAM_BEAT } from '../data'

export function Case() {
  return (
    <div>
      <div className="kicker">Start here if the case still feels foggy</div>
      <h1>Barbara Norris and the General Surgery Unit</h1>
      <p className="lede">
        You do not need the jargon to start. Barbara is a new nurse manager on a struggling
        surgery floor at Eastern Massachusetts University Hospital. Read the names below,
        then the story beats. Use these facts in every written answer.
      </p>

      <h2 className="section-title">Names and phrases, spelled out</h2>
      <div className="grid two">
        {CASE_GLOSSARY.map((g) => (
          <div key={g.term} className="card" style={{ padding: 16 }}>
            <h3>{g.term}</h3>
            <p style={{ margin: 0 }}>{g.body}</p>
          </div>
        ))}
      </div>

      <div className="callout ink" style={{ margin: '22px 0 18px' }}>
        <div className="kicker">Four-beat</div>
        <p style={{ margin: 0, color: '#f4efe4' }}>{EXAM_BEAT}</p>
      </div>

      <h2 className="section-title">What happens in the case</h2>
      <div className="grid two">
        {CASE_FACTS.map((f) => (
          <div key={f.title} className="card" style={{ padding: 18 }}>
            <h2 style={{ fontSize: '1.25rem' }}>{f.title}</h2>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
      <div className="callout" style={{ marginTop: 18 }}>
        <strong>Do not write a generic “change the culture” essay.</strong> Culture is the
        team-and-hospital level. Show the mechanism: what gets rewarded, how people explain
        each other’s behavior, whether the job itself is motivating, who has power, and why
        people go along with blame. Then pick two or three moves that still work under the
        hiring freeze and the ban on overtime.
      </div>
    </div>
  )
}
