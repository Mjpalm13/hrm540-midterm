import type { ReactNode } from 'react'

function Fig({
  title,
  caption,
  children,
}: {
  title: string
  caption?: string
  children: ReactNode
}) {
  return (
    <figure className="fig">
      <div className="fig-head">
        <span className="kicker">Framework from class</span>
        <h2>{title}</h2>
      </div>
      <div className="fig-body">{children}</div>
      {caption ? <figcaption className="fig-cap">{caption}</figcaption> : null}
    </figure>
  )
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="viz-arrow" aria-hidden="true">
      <span>→</span>
      {label ? <small>{label}</small> : null}
    </div>
  )
}

export function SessionVisuals({ id }: { id: number }) {
  if (id === 1) return <Session1 />
  if (id === 2) return <Session2 />
  if (id === 3) return <Session3 />
  if (id === 4) return <Session4 />
  if (id === 5) return <Session5 />
  if (id === 6) return <Session6 />
  if (id === 7) return <Session7 />
  return <Session8 />
}

function Session1() {
  return (
    <div className="diag-stack">
      <Fig
        title="Three levels of analysis"
        caption="The slide nests these three boxes. Wrong floor = wrong fix. Name the level in the first sentence of an answer."
      >
        <div className="levels-org">
          <div className="lvl-label">
            <strong>Organization</strong>
            <span>Systems, culture, structure, policies, reputation</span>
          </div>
          <div className="levels-group">
            <div className="lvl-label">
              <strong>Group / team</strong>
              <span>Norms, cliques, how people treat each other</span>
            </div>
            <div className="levels-ind">
              <div className="lvl-label">
                <strong>Individual</strong>
                <span>Personality, values, perception, motivation, self-efficacy</span>
              </div>
            </div>
          </div>
        </div>
      </Fig>
      <Fig
        title="Why this course exists"
        caption="Organizational behavior is not a side topic. The slide’s point: principles about people, groups, and organizations make any function more effective."
      >
        <div className="flow wrap" style={{ justifyContent: 'center' }}>
          <div className="card pad">
            <h3>Understand</h3>
            <p>Individuals (including you), groups/teams, and organizations</p>
          </div>
          <Arrow label="so you can" />
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>Make any function effective</h3>
            <p>Nursing unit, finance team, startup — same three floors</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session2() {
  const evidence = [
    ['Scientific', 'Findings from published research', 'Turnover, equity, job design, influence studies'],
    ['Organizational', 'Data, facts, and figures from this workplace', 'Satisfaction, turnover, patient scores, vacancies'],
    ['Experiential', 'Professional experience and judgment', 'Years as a nurse; Betty Nolan; not yet manager reps'],
    ['Stakeholder', 'Values and concerns of people affected', 'Nurses, assistants, patients, physicians, Director'],
  ]
  return (
    <div className="diag-stack">
      <Fig
        title="Theory versus hypothesis"
        caption="Good theory names the causal mechanism and the conditions where it should fail (anomaly / boundary)."
      >
        <div className="grid two">
          <div className="card pad">
            <h3>Theory</h3>
            <p>
              A collection of assertions about how and why variables are related, plus when they should and should
              not be related.
            </p>
          </div>
          <div className="card pad">
            <h3>Hypothesis</h3>
            <p>A theory-derived prediction that specifies a relationship you can actually test with data.</p>
          </div>
        </div>
      </Fig>
      <Fig
        title="The scientific method"
        caption="The class slide is this cycle. Correlation is not causation — a spurious graph is not a mechanism."
      >
        <div className="cycle">
          {[
            ['1', 'Observe', 'Something happens on the unit'],
            ['2', 'Theorize', 'Name how and why, and when it would fail'],
            ['3', 'Hypothesize', 'If public reviews, then perceived equity rises'],
            ['4', 'Data', 'Numbers and coded meaning — not vibes'],
            ['5', 'Revise', 'Keep, bound, or drop the theory'],
          ].map((row) => (
            <div key={row[0]} className="cycle-step">
              <b>{row[0]}</b>
              <strong>{row[1]}</strong>
              <span>{row[2]}</span>
            </div>
          ))}
        </div>
      </Fig>
      <Fig title="Four types of evidence" caption="Use more than one type. The off-site cards are stakeholder / qualitative — not the whole truth.">
        <div className="grid two">
          {evidence.map(([t, d, ex]) => (
            <div key={t} className="card pad">
              <h3>{t}</h3>
              <p>{d}</p>
              <p className="kb" style={{ margin: 0 }}>
                On this unit: {ex}
              </p>
            </div>
          ))}
        </div>
      </Fig>
      <Fig title="Two kinds of data" caption="Pair them. Measurement without meaning, or cards without metrics, both fail the exam.">
        <div className="grid two">
          <div className="card pad">
            <h3>Quantitative — world of measurement</h3>
            <p>Data = numbers. Statistical analysis. Satisfaction scores, turnover counts, vacancies.</p>
          </div>
          <div className="card pad">
            <h3>Qualitative — world of meaning</h3>
            <p>Data = observations and words. Coding. Anonymous off-site cards, what “pest” actually does to a new nurse.</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session3() {
  const ocean = [
    ['Openness', 'Curious, original, open to new ideas'],
    ['Conscientiousness', 'Organized, dependable, achievement-oriented'],
    ['Extraversion', 'Outgoing, talkative, draws energy from people'],
    ['Agreeableness', 'Trusting, kind, warm, tolerant'],
    ['Neuroticism', 'Need for stability: composed vs anxious / moody'],
  ]
  const mbti = [
    ['Energy', 'Extraversion', 'Introversion', 'From others vs from self'],
    ['Perceive', 'Sensing', 'Intuition', 'Five senses vs hunches and meaning'],
    ['Decide', 'Thinking', 'Feeling', 'Logic / fact vs needs and harmony'],
    ['Ambiguity', 'Judging', 'Perceiving', 'Need closure vs keep options open'],
  ]
  return (
    <div className="diag-stack">
      <Fig
        title="Person versus situation — then Lewin"
        caption="Personality psychologists vs situationists. Organizational behavior takes both: B = f(P, E)."
      >
        <div className="grid two">
          <div className="card pad">
            <h3>Personality psychologists</h3>
            <p>People have characteristics that guide behavior across situations.</p>
          </div>
          <div className="card pad">
            <h3>Situationists</h3>
            <p>Behavior is a product of the situation the person is embedded in.</p>
          </div>
        </div>
        <p className="eq-hero">
          B = f(P, E)
        </p>
        <p className="kb" style={{ textAlign: 'center', margin: '0 0 8px' }}>
          Behavior is a function of personal characteristics and environmental characteristics
        </p>
      </Fig>
      <Fig
        title="The interactionist picture — and fit"
        caption="Two circles overlap. Match of person to job/organization produces attitudes and behavior. No match: conflict, withholding, exit."
      >
        <div className="fit-row">
          <div className="venn">
            <div className="venn-p">Person</div>
            <div className="venn-e">Job / organization</div>
            <div className="venn-m">Match</div>
          </div>
          <Arrow label="produces" />
          <div className="card pad" style={{ borderColor: 'var(--brick)', minWidth: 180 }}>
            <h3>Attitudes and behavior</h3>
            <p>Help, satisfaction, conflict, or leave</p>
          </div>
        </div>
      </Fig>
      <Fig title="Two ways to assess fit" caption="Traits beat types for prediction. Type tools are a language, not a hiring test.">
        <div className="grid two">
          <div className="card pad">
            <h3>Trait-based</h3>
            <p>Measures variance on particular traits. Big Five, HEXACO.</p>
          </div>
          <div className="card pad">
            <h3>Type-based</h3>
            <p>Bundles preferences into types. Myers-Briggs, Color Code, DISC. Watch the Barnum effect.</p>
          </div>
        </div>
      </Fig>
      <Fig title="Big Five personality factors" caption="Most researched model. Healthy neuroticism on the slides: low stability + high conscientiousness.">
        <div className="ocean">
          {ocean.map(([n, d]) => (
            <div key={n} className="ocean-cell">
              <strong>{n}</strong>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </Fig>
      <Fig title="Myers-Briggs: four pairs of preferences" caption="Energy, perceive, decide, respond to ambiguity. Never use this as performance or hiring.">
        <table className="plain">
          <thead>
            <tr>
              <th>Question</th>
              <th>Pole</th>
              <th>Pole</th>
              <th>What it is</th>
            </tr>
          </thead>
          <tbody>
            {mbti.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fig>
      <Fig title="Values and value conflict" caption="Terminal = desired ends. Instrumental = preferred means. When they clash: do not demonize; seek understanding; appeal to common values.">
        <div className="grid three">
          <div className="card pad">
            <h3>Terminal</h3>
            <p>Ends: patient care, safety, dignity.</p>
          </div>
          <div className="card pad">
            <h3>Instrumental</h3>
            <p>Means: how you precept, who speaks in huddle, how seniors socialize juniors.</p>
          </div>
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>When they clash</h3>
            <p>Avoid demonizing. Seek understanding. Unite on a shared end.</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session4() {
  const traps = [
    ['Perceive', 'Self-enhancement', 'Overestimate our own performance and see ourselves in a more positive light'],
    ['Perceive', 'Stereotypes', 'Generalizations based on group characteristics — “newer nurses are pests”'],
    ['Perceive', 'Self-fulfilling prophecy', 'Expectation changes how we treat them, which produces the “evidence”'],
    ['Attribute', 'Self-serving bias', 'My success = me. My failure = the situation'],
    ['Attribute', 'Fundamental attribution error', 'Your behavior = who you are. Downplay the situation'],
    ['Attribute', 'Availability', 'Judge frequency by how easily an example comes to mind (loudest card)'],
    ['Attribute', 'Anchoring / framing / regression', 'First number sticks; yes/no freeze frame; extreme cases move back to average'],
    ['Evaluate', 'Confirmation', 'Search for what supports the decision already made'],
    ['Evaluate', 'Hindsight', '“I knew it” — events look more predictable after they happen'],
    ['Evaluate', 'Escalation of commitment', 'Persist in a failing course because you already invested'],
  ]
  return (
    <div className="diag-stack">
      <Fig title="Types of decisions" caption="Choosing among alternatives, including inaction. The turnaround is nonprogrammed and tactical. A shift assignment is operational.">
        <div className="grid two">
          <div className="card pad">
            <h3>How often?</h3>
            <p>
              <strong>Programmed</strong> — frequently occurring.
              <br />
              <strong>Nonprogrammed</strong> — nonroutine, surprise, crisis.
            </p>
          </div>
          <div className="card pad">
            <h3>How big?</h3>
            <p>
              <strong>Strategic</strong> — organizational trajectory (top team).
              <br />
              <strong>Tactical</strong> — how things will get done (managers).
              <br />
              <strong>Operational</strong> — day-to-day (employees).
            </p>
          </div>
        </div>
      </Fig>
      <Fig title="Three models of decision making" caption="Intuition is affectively charged, rapid, nonconscious, holistic. Rational needs full information. Bounded: satisfice.">
        <div className="grid three">
          <div className="card pad">
            <h3>1. Intuitive</h3>
            <p>Fast gut. Only when all three gates below are true.</p>
          </div>
          <div className="card pad">
            <h3>2. Rational</h3>
            <p>Know the goal, clear preferences, know all options, pick the one that maximizes.</p>
          </div>
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>3. Bounded rational</h3>
            <p>Imperfect information + cognitive limits. Choose good enough. Satisfice.</p>
          </div>
        </div>
      </Fig>
      <Fig
        title="When to rely on intuition — three gates"
        caption="All three must be present. Pattern recognition is the expertise piece. Barbara has time pressure only."
      >
        <div className="gate-row">
          {['Time pressure', 'Predictable environment', 'Domain expertise'].map((g, i) => (
            <div key={g} className="gate">
              <b>{i + 1}</b>
              <strong>{g}</strong>
              {i < 2 ? <span className="gate-and">AND</span> : null}
            </div>
          ))}
        </div>
      </Fig>
      <Fig
        title="Decision-making process (simplified)"
        caption="The slide’s four beats: What do you see? What caused it / what do you conclude? What do you choose? How do you evaluate what you did?"
      >
        <div className="pade">
          {[
            ['1. Perceive', 'What do you see?'],
            ['2. Attribute / judge', 'What is the cause? What conclusion?'],
            ['3. Decide', 'What will you do (including nothing)?'],
            ['4. Evaluate', 'How do you read what you did?'],
          ].map((step, i) => (
            <div key={step[0]} className="pade-step">
              <strong>{step[0]}</strong>
              <span>{step[1]}</span>
              {i < 3 ? <em>→</em> : null}
            </div>
          ))}
        </div>
      </Fig>
      <Fig title="Traps along the process" caption="Name the stage and the trap. “Bias” with no name is not an exam answer.">
        <div className="trap-grid">
          {traps.map((t) => (
            <div key={t[1]} className="trap-card">
              <span className="kb">{t[0]}</span>
              <strong>{t[1]}</strong>
              <p>{t[2]}</p>
            </div>
          ))}
        </div>
      </Fig>
      <Fig title="What we can do about it" caption="From the slides: futures, options, objectives, then 3 × 3 × 3. Also premortems, outsider/future-CEO view, tripwires, devil’s advocate, avoid yes/no framing.">
        <div className="three-by">
          <div>
            <h3>3 futures</h3>
            <p>Anticipate three possible worlds, not one plan.</p>
          </div>
          <span>×</span>
          <div>
            <h3>3 objectives</h3>
            <p>Generate many, cycle through them, look to others.</p>
          </div>
          <span>×</span>
          <div>
            <h3>3 options</h3>
            <p>Not yes/no. Joint evaluation. Vanishing options.</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session5() {
  const kerr = [
    ['Teamwork', 'Individual effort'],
    ['Setting challenging “stretch” objectives', 'Achieving (easy) goals'],
    ['Commitment to total quality', 'Shipping on schedule, even with defects'],
    ['Long-term growth / environmental responsibility', 'Quarterly earnings'],
    ['Surfacing news early', 'Reporting good news, whether true or not'],
    ['Candor', 'Agreeing with the boss, whether she’s right or not'],
  ]
  const equityRx = [
    'Lower your inputs (effort)',
    'Demand more outcomes',
    'Distort how you see your own ratio',
    'Distort how you see the other person',
    'Switch the referent (“compared to whom”)',
    'Leave (exit / turnover)',
    'Retaliate',
  ]
  return (
    <div className="diag-stack">
      <Fig
        title="Motivation is not performance"
        caption="From the Latin movere: to move. Willing ≠ able ≠ allowed. Do not diagnose “they don’t care” from declining scores alone."
      >
        <div className="flow wrap" style={{ justifyContent: 'center' }}>
          <div className="card pad">
            <h3>Motivation</h3>
            <p>The reason one acts</p>
          </div>
          <span className="flow-plus">≠</span>
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>Performance</h3>
            <p>What actually gets produced under staffing, skill, and permission</p>
          </div>
        </div>
      </Fig>
      <Fig title="Maslow’s hierarchy of needs" caption="Need-based theories: the manager’s job is to make the workplace a means of satisfying needs. Maslow is hierarchical; Existence-Relatedness-Growth is not.">
        <div className="pyramid">
          {[
            ['Self-actualization', 'Become what you can become'],
            ['Esteem', 'Recognition, competence, respect'],
            ['Belonging / love', 'Team, not a clique war'],
            ['Safety', 'Staffing, not getting blamed, not drowning'],
            ['Physiological', 'Hours, rest, a shift you can survive'],
          ].map((row, i) => (
            <div key={row[0]} className={`pyr pyr-${i}`}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>
      </Fig>
      <Fig
        title="Existence-Relatedness-Growth, plus two-factor"
        caption="Frustration-regression: blocked growth or relatedness and people fight over existence resources (hours, assignments, favorites). Herzberg: hygiene removes dissatisfaction; motivators create satisfaction — they are not the same list."
      >
        <div className="grid two">
          <div className="card pad">
            <h3>Existence-Relatedness-Growth</h3>
            <p>
              Existence ≈ physiological / safety. Relatedness ≈ belonging. Growth ≈ esteem / self-actualization. Not a
              strict ladder. If growth is blocked, people regress.
            </p>
          </div>
          <div className="herzberg">
            <div>
              <h3>Hygiene (dissatisfaction)</h3>
              <p>Policy, supervision, peers, conditions, pay, status, security</p>
            </div>
            <div>
              <h3>Motivators (satisfaction)</h3>
              <p>Achievement, recognition, the work itself, responsibility, growth</p>
            </div>
          </div>
        </div>
      </Fig>
      <Fig
        title="Kerr (1995): we hope for… but we often reward…"
        caption="Alignment problem. The table is from the slides. On this unit: hope for teamwork and quality; reward survive-the-shift, silence, and favoritism."
      >
        <table className="plain kerr">
          <thead>
            <tr>
              <th>We hope for…</th>
              <th>But we often reward…</th>
            </tr>
          </thead>
          <tbody>
            {kerr.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fig>
      <Fig
        title="Expectancy theory — multiplication, not addition"
        caption="Any zero kills motivation. Expectancy: can I perform? Instrumentality: will performance pay? Valence: do I want that outcome?"
      >
        <div className="eiv">
          <div>
            <b>E</b>
            <strong>Expectancy</strong>
            <span>Effort → performance</span>
          </div>
          <span>×</span>
          <div>
            <b>I</b>
            <strong>Instrumentality</strong>
            <span>Performance → outcome</span>
          </div>
          <span>×</span>
          <div>
            <b>V</b>
            <strong>Valence</strong>
            <span>I actually want it</span>
          </div>
          <span>=</span>
          <div className="eiv-out">
            <strong>Motivation</strong>
            <span>One zero and the product is zero</span>
          </div>
        </div>
      </Fig>
      <Fig
        title="Equity theory"
        caption="People compare outcomes/inputs to a referent. Inequity motivates restoring the ratio. Turnover is one of those restorations, not a mystery culture."
      >
        <p className="eq-hero" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
          Outcomes<sub>me</sub> / Inputs<sub>me</sub>
          {'  vs  '}
          Outcomes<sub>referent</sub> / Inputs<sub>referent</sub>
        </p>
        <div className="chip-row">
          {equityRx.map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
      </Fig>
      <Fig title="Common issues with incentives" caption="Slide checklist. Under a freeze, still name which of these you can move without cash (reviews, assignments, what gets praised).">
        <div className="chip-row">
          {[
            'Focus problems',
            'Alignment problems',
            'Controllability problems',
            'Expectancy problems',
            'Instrumentality problems',
            'Valence problems',
            'Equity problems',
          ].map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
      </Fig>
    </div>
  )
}

function Session6() {
  return (
    <div className="diag-stack">
      <Fig title="Extrinsic versus intrinsic" caption="Session 5 is mostly the external machine. Session 6 asks whether the task itself is the reward.">
        <div className="grid two">
          <div className="card pad">
            <h3>Extrinsic</h3>
            <p>Generated by an external incentive or punishment tied to task performance.</p>
          </div>
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>Intrinsic</h3>
            <p>Felt when task performance serves as its own reward.</p>
          </div>
        </div>
      </Fig>
      <Fig
        title="Scientific management versus the Job Characteristics Model"
        caption="Scientific management: people as factors of production; manager plans the one best method. Job Characteristics Model: people are not merely factors; motivation depends on how they perceive the job."
      >
        <div className="grid two">
          <div className="card pad">
            <h3>Scientific management</h3>
            <p>Minimize waste. Interchangeable labor. Coverage efficiency. That is what borrowed-unit staffing is doing.</p>
          </div>
          <div className="card pad">
            <h3>Job Characteristics Model</h3>
            <p>Structure work so people experience meaningfulness, responsibility, and knowledge of results — which raise intrinsic motivation.</p>
          </div>
        </div>
      </Fig>
      <Fig title="The five job characteristics" caption="Variety, identity, significance, autonomy, feedback. Significance is already high in nursing. The others are the exam.">
        <div className="five-char">
          {[
            ['Variety', 'Different skills, not only chaos'],
            ['Identity', 'A whole piece of work you can point to'],
            ['Significance', 'The work matters to other people'],
            ['Autonomy', 'Discretion over how the work is done'],
            ['Feedback', 'Clear knowledge of results from the job itself or from people'],
          ].map(([n, d]) => (
            <div key={n} className="card pad">
              <h3>{n}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Fig>
      <Fig
        title="Job Characteristics Model — the full path"
        caption="This is the flowchart on the slides: five characteristics feed three psychological states, which feed intrinsic motivation and other outcomes."
      >
        <div className="jcm">
          <div className="jcm-col">
            <span className="kb">Core characteristics</span>
            <div>Variety + identity + significance</div>
            <div>Autonomy</div>
            <div>Feedback</div>
          </div>
          <Arrow />
          <div className="jcm-col">
            <span className="kb">Critical states</span>
            <div>Experienced meaningfulness</div>
            <div>Experienced responsibility</div>
            <div>Knowledge of results</div>
          </div>
          <Arrow />
          <div className="jcm-col brick-col">
            <span className="kb">Outcomes</span>
            <div>Intrinsic motivation</div>
            <div>Quality performance</div>
            <div>Satisfaction · lower exit</div>
          </div>
        </div>
      </Fig>
      <Fig
        title="Motivating Potential Score"
        caption="Meaning trio is averaged. Autonomy and feedback multiply. A zero on either multiplier collapses the whole score — heroic significance cannot save it."
      >
        <p className="eq-hero mps">
          ((V + I + S) / 3) × A × F
        </p>
        <div className="grid two">
          <div className="card pad">
            <h3>Averaged</h3>
            <p>Variety, identity, significance. High significance gets diluted if the other two are weak.</p>
          </div>
          <div className="card pad" style={{ borderColor: 'var(--brick)' }}>
            <h3>Multipliers — raise these first</h3>
            <p>Autonomy and feedback. Near-zero either one and the product is near-zero.</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session7() {
  const heresies = [
    'You might have a calling if you are lucky — or you might not',
    'You have to find your one true calling to be fulfilled',
    'When you find it, work will be bliss',
    'Finding a calling means the world will take notice',
    'Meaningfulness in life is to be found at work',
  ]
  return (
    <div className="diag-stack">
      <Fig title="Five heresies of “find your calling”" caption="From the slides. The unit’s misery does not prove people chose the wrong profession.">
        <ol className="heresy">
          {heresies.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ol>
      </Fig>
      <Fig
        title="Two stories about passion"
        caption="Passion perspective: passion exists before the work. Crafting / mastery view (Newport, Lopez, Rowe): passion is the feeling generated by mastery. It does not exist outside serious work."
      >
        <div className="grid two">
          <div className="path-col">
            <h3>Passion story</h3>
            <div className="path-step">Follow your passion</div>
            <span>↓</span>
            <div className="path-step">Find your calling based on that passion</div>
            <span>↓</span>
            <div className="path-step">Find happiness</div>
            <p className="kb">Treats passion as already sitting there, waiting to be discovered.</p>
          </div>
          <div className="path-col good-path">
            <h3>Job-crafting path</h3>
            <div className="path-step">Take an opportunity</div>
            <span>↓</span>
            <div className="path-step">Learn and master everything you can in it</div>
            <span>↓</span>
            <div className="path-step">Improve that opportunity where possible</div>
            <span>↓</span>
            <div className="path-step">Passion, new opportunity, and happiness</div>
          </div>
        </div>
      </Fig>
      <Fig title="Three job-crafting principles" caption="Perceptions, tasks, relationships. The slide examples (R&D leader, sales manager, managing director) are the pattern — then map them onto this unit.">
        <div className="grid three">
          <div className="card pad">
            <h3>1. Perceptions</h3>
            <p>Change how you think about and narrate the job to yourself and others.</p>
            <p className="kb">Slide: an R&amp;D leader sees advancing the science, not only managing projects.</p>
          </div>
          <div className="card pad">
            <h3>2. Tasks</h3>
            <p>Take on more or fewer tasks, expand or shrink scope, change how they are done.</p>
            <p className="kb">Slide: a sales manager adds event planning because the logistics challenge fits.</p>
          </div>
          <div className="card pad">
            <h3>3. Relationships</h3>
            <p>Change the nature or extent of interactions with other people.</p>
            <p className="kb">Slide: a director builds mentoring with young associates.</p>
          </div>
        </div>
      </Fig>
    </div>
  )
}

function Session8() {
  const milgram = [
    ['Yale undergrads', 65],
    ['New Haven residents', 60],
    ['South Africa', 87.5],
    ['Austria', 80],
    ['Jordan', 68],
    ['Spain', 50],
    ['Australia', 28],
  ]
  const cialdini = [
    ['Liking', 'People comply with those they know and like', 'Uncover similarities; offer praise', 'Classic studies on the slides jump from ~18% to ~55–90% when liking is in play'],
    ['Reciprocity', 'People feel obligated to repay', 'Make it meaningful and unexpected', 'The slide series: small gifts move compliance in steps (+3 → +14 → +23)'],
    ['Social proof', 'People follow similar others', 'Use “peer power” when the proof is true', 'One respected senior who precepts beats a poster'],
    ['Consistency', 'People align with clear commitments', 'Active, public, voluntary', 'Turn off-site complaints into a public “we will huddle”'],
    ['Authority', 'People defer to experts', 'Expose expertise, not only the title', 'Slide numbers: credentials in view lifted compliance (~15% → ~20% in the demo)'],
    ['Scarcity', 'People want more of what they can have less of', 'Highlight unique benefits and real limits', 'This reset window is scarce; the freeze is not a fake deadline'],
    ['Unity', 'People help those with a shared identity', 'We are this unit, not two cliques', 'Shared identity around surgical patients'],
  ]
  return (
    <div className="diag-stack">
      <Fig
        title="What power is — and the five bases plus dependence"
        caption="Capacity of A to get B to act as A wishes. Not always from hierarchy. Dependence: scarcity × importance × substitutability."
      >
        <div className="bases">
          {[
            ['Coercive', 'Capacity to punish'],
            ['Reward', 'Capacity to reward'],
            ['Legitimate', 'Authority / sanctioned position'],
            ['Expert', 'Expertise'],
            ['Referent', 'Desire to emulate'],
          ].map(([n, d]) => (
            <div key={n} className="card pad">
              <h3>{n}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <p className="kb" style={{ marginTop: 12 }}>
          Dependence sits under all of this: is the other person scarce, important, and hard to substitute? Registered
          nurses on this unit hold that too.
        </p>
      </Fig>
      <Fig
        title="Effects of power on the powerful"
        caption="Worse with narcissism, no checks, or a low-status person who suddenly gains power — Barbara’s profile. Values, moral identity, and published criteria blunt it."
      >
        <ul className="plain-list">
          <li>More likely to place their own interests above others</li>
          <li>More likely to objectify others</li>
          <li>More likely to see relationships as peripheral</li>
          <li>More likely to react badly to competence threats</li>
          <li>More likely to be overconfident in decisions</li>
        </ul>
      </Fig>
      <Fig title="Cialdini’s seven influence tactics" caption="Let’s Recycle Some Cans And Save Unity. Commitments must be active, public, and voluntary. Numbers below are the demo stats from the slides, not magic constants.">
        <div className="cialdini">
          {cialdini.map((row) => (
            <div key={row[0]} className="card pad">
              <h3>{row[0]}</h3>
              <p>
                <strong>Principle.</strong> {row[1]}
              </p>
              <p>
                <strong>How.</strong> {row[2]}
              </p>
              <p className="kb" style={{ margin: 0 }}>
                {row[3]}
              </p>
            </div>
          ))}
        </div>
      </Fig>
      <Fig
        title="Obedience findings — then the agentic shift"
        caption="Women complied to the same degree as men. Once someone sees themselves as an agent executing another’s wishes, autonomy drops and first compliance is sticky. A pep talk does not reverse it."
      >
        <div className="bars">
          {milgram.map(([place, pct]) => (
            <div key={String(place)} className="bar-row">
              <span>{place}</span>
              <div className="bar-track">
                <div style={{ width: `${Number(pct)}%` }} />
              </div>
              <b>{pct}%</b>
            </div>
          ))}
        </div>
        <div className="callout" style={{ marginTop: 14 }}>
          <strong>Agentic shift.</strong> High autonomy → low autonomy. The person in an authority system no longer
          views himself as acting out of his own purposes but as an agent for executing another’s wishes. Make a new
          authority script that is safe to follow — huddle language, no-shame questions, cover for dissent from blame.
        </div>
      </Fig>
    </div>
  )
}
