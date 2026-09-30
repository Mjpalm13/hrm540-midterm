import { CASE_FACTS, EXAM_BEAT } from '../data'

export function Case() {
  return (
    <div>
      <div className="kicker">Cite these, not vibes</div>
      <h1>Barbara Norris at GSU.</h1>
      <p className="lede">
        Eastern Massachusetts University Hospital, General Surgery Unit. Your exam
        answers get specific: freeze, float pool, 29 one-to-ones, off-site cards,
        mystery reviews, Megan vs seniors.
      </p>
      <div className="callout ink" style={{ margin: '8px 0 18px' }}>
        <div className="kicker">Four-beat</div>
        <p style={{ margin: 0, color: '#f4efe4' }}>{EXAM_BEAT}</p>
      </div>
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
        group/org level. Show mechanisms: what is rewarded, what is attributed, what MPS
        looks like, who has power, and who people have become agents for. Then pick two or
        three moves that hit those mechanisms under the freeze.
      </div>
    </div>
  )
}
