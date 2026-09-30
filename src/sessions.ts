export type SessionGuide = {
  id: number
  title: string
  question: string
  remember: string
  mnemonic: string
  formula?: string
  goals: string[]
  parts: { name: string; detail: string }[]
  vocab: { term: string; line: string }[]
  ontoCase: { piece: string; fact: string }[]
  builds: string
  fromPrev: string
  toNext: string
  barbara: string
  worked: string
  examMiss: string
}

export const CONNECT_STEPS = [
  { id: 1, ask: "Where is it?", does: "Pick the floor: person, group, or hospital/unit system." },
  { id: 2, ask: "How do we know?", does: "Scientific, organizational, experiential, stakeholder evidence. Write a mechanism, not a vibe." },
  { id: 3, ask: "Who × setting?", does: "Behavior is a function of the person and the environment. Change the setting before you swap people." },
  { id: 4, ask: "How do they see it?", does: "Perceive → attribute → decide → evaluate. Satisfice. Name the trap." },
  { id: 5, ask: "Why would they move?", does: "Needs, specific goals, Kerr, expectancy × instrumentality × valence, equity." },
  { id: 6, ask: "Does the job pull?", does: "Job Characteristics Model / Motivating Potential Score. Raise autonomy and feedback first." },
  { id: 7, ask: "Can they recraft it?", does: "Perceptions, tasks, relationships. Passion follows mastery." },
  { id: 8, ask: "How do we get action?", does: "Five power bases plus Cialdini. Reverse the agentic shift." },
]

export const SESSIONS: SessionGuide[] = [
  {
    id: 1,
    title: "Organizational behavior",
    question: "Where is the problem?",
    remember: "Name the level before you diagnose. Wrong level = wrong fix.",
    mnemonic: "I-G-O: Individual, Group, Organization. Always climb the floors.",
    goals: [
      "Understand what organizational behavior is and how it relates to organizational effectiveness.",
      "Always name the floor — individual, group/team, or organization — before you pick a fix.",
    ],
    parts: [
      { name: "Individual", detail: "Personality, values, perception, motivation, job crafting, self-efficacy." },
      { name: "Group / team", detail: "Cliques, long-time nurses versus newer nurses versus patient care assistants, blame norms, not functioning as a team." },
      { name: "Organization", detail: "Eastern Massachusetts University Hospital freeze, no overtime, mystery reviews, medical hierarchy, the General Surgery Unit's blame culture." },
    ],
    vocab: [
      { term: "Organizational behavior", line: "How individuals and groups act inside organizations." },
      { term: "Three levels", line: "Individual / group / organizational — pick the floor of the fix." },
      { term: "Effectiveness", line: "OB exists so any function you join can work better." },
    ],
    ontoCase: [
      { piece: "Individual", fact: "Exhausted registered nurses; newer nurses called pests; Barbara is a new manager with low self-efficacy in the role." },
      { piece: "Group / team", fact: "No teamwork. Long-time nurses versus newer nurses versus patient care assistants. Blame and favoritism are the norms." },
      { piece: "Organization", fact: "Hiring freeze, no overtime, mystery reviews, physicians as order-takers, this unit known as the hospital’s worst." },
    ],
    builds: "This is the map of the course. Every later framework lives on one of these three floors.",
    fromPrev: "Start here. There is no earlier session.",
    toNext: "Once you name the floor, Session 2 asks how you know — evidence, not vibes.",
    barbara:
      "An essay that only coaches Barbara's personality misses the group (conflict) and org (freeze, mystery reviews) floors.",
    worked:
      "Individual: exhausted registered nurses, newer nurses called pests. Group: blame, favoritism, long-time nurses versus newer nurses versus patient care assistants. Organization: freeze, no overtime, mystery reviews, declining patient scores. Fix at least two floors.",
    examMiss: "Writing 'Barbara should be a better leader' with no level named.",
  },
  {
    id: 2,
    title: "Evidence-based management",
    question: "How do we know?",
    remember: "Four evidence types: scientific, organizational, experiential, stakeholder. Theory needs a why plus when it fails.",
    mnemonic: "Science, org data, experience, stakeholders. Theory = how/why + when it fails. Hypothesis predicts. Correlation is not causation.",
    formula: "Good theory: variables + causal mechanism + boundary / anomaly",
    goals: [
      "Know what good theory is (causal mechanism plus when it fails) and how a hypothesis differs.",
      "Use four types of evidence — scientific, organizational, experiential, stakeholder — and pair numbers with meaning.",
    ],
    parts: [
      { name: "Scientific", detail: "Published research on turnover, equity, Job Characteristics Model, influence." },
      { name: "Organizational", detail: "Satisfaction, turnover, patient scores, staffing, 29 one-to-one requests." },
      { name: "Experiential", detail: "Barbara's years as a registered nurse; Betty Nolan as a model of people leadership and real reviews." },
      { name: "Stakeholder", detail: "Nurses, patient care assistants, nurses borrowed from other units, physicians, patients, Director of Nursing." },
    ],
    vocab: [
      { term: "Theory", line: "How and why variables relate, and when they should not." },
      { term: "Hypothesis", line: "A theory-derived prediction you can test." },
      { term: "Four types of evidence", line: "Scientific, organizational, experiential, stakeholder." },
      { term: "Quant vs qual", line: "Numbers vs meaning (coding words and observations)." },
    ],
    ontoCase: [
      { piece: "Scientific", fact: "Published research on turnover, equity, job design, and influence — she should import this, not invent it." },
      { piece: "Organizational", fact: "Lowest satisfaction, highest turnover, falling patient scores, 29 one-on-one requests, two registered nurses gone in month one." },
      { piece: "Experiential", fact: "Her years as a registered nurse and Betty Nolan’s example. She does not yet have manager-domain reps, so gut is thin." },
      { piece: "Stakeholder / qualitative", fact: "Anonymous off-site cards: teamwork, conflict, doctors, money-over-patients, favoritism, staffing, mystery reviews." },
    ],
    builds: "Session 1 said what to study. Session 2 says how to know. Justify every later diagnosis with evidence.",
    fromPrev: "Session 1 named the floors. Now you need proof before you pick a floor to act on.",
    toNext: "Evidence still has to be interpreted by people. Session 3 is who those people are.",
    barbara:
      "The off-site is qualitative stakeholder evidence. Pair it with org metrics. Do not treat one loud nurse as the whole population.",
    worked:
      "Org numbers: lowest satisfaction, highest turnover, two registered nurses gone in month one. Qual: anonymous cards. Experiential: Nolan. Scientific: equity and Job Characteristics Model research. Next: code the cards, pair each theme with a metric, write a hypothesis.",
    examMiss: "Dumping the off-site as 'the truth' with no other evidence type.",
  },
  {
    id: 3,
    title: "Personality and fit",
    question: "Who, in what setting?",
    remember: "Behavior is a function of the person and the environment. Fit is the overlap. The Big Five traits beat type labels. Common values beat demonizing.",
    mnemonic: "Openness, conscientiousness, extraversion, agreeableness, neuroticism. Terminal = ends, instrumental = means. Barnum = if it fits anyone, it explains no one.",
    formula: "B = f(P, E). Fit = match of person characteristics to job/org characteristics.",
    goals: [
      "Use Lewin’s equation: behavior is a function of the person and the environment, not either alone.",
      "Tell terminal values (ends) from instrumental values (means), and prefer the Big Five over type labels.",
    ],
    parts: [
      { name: "Person", detail: "Values, Big Five, affect, self-monitoring, proactivity, self-esteem, self-efficacy, locus of control." },
      { name: "Environment", detail: "Job, organization, culture, staffing, physicians, reviews." },
      { name: "Fit", detail: "Match → attitudes and behavior: help, satisfaction, conflict, or exit." },
    ],
    vocab: [
      { term: "Lewin / interactionist", line: "Behavior is person and environment, not either alone." },
      { term: "Terminal vs instrumental values", line: "Desired ends vs preferred means." },
      { term: "Big Five personality traits", line: "Openness, conscientiousness, extraversion, agreeableness, neuroticism (need for stability)." },
      { term: "Myers-Briggs Type Indicator vs traits", line: "Types are preference bundles; Barnum is the risk." },
    ],
    ontoCase: [
      { piece: "Person (P)", fact: "Barbara: well-liked registered nurse, new master’s, not yet a practiced large-unit manager. Seniors may be lower in agreeableness." },
      { piece: "Environment (E)", fact: "Freeze, blame culture, mystery reviews, nurses borrowed from other units, physicians as order-givers." },
      { piece: "Fit / match", fact: "The same people might function on Betty Nolan’s unit. Hazing is currently paid off by status and control of scarce help — change E, not a personality workshop." },
      { piece: "Values", fact: "Shared terminal value: patient care. Clash is instrumental: how long-time nurses socialize newer nurses. Unite on the end; do not demonize." },
    ],
    builds: "Puts people into Session 1's individual level. Later sessions change E (job, rewards, power) more than P.",
    fromPrev: "Session 2 gave you evidence. Session 3 tells you not to read that evidence as 'bad people.'",
    toNext: "People still mis-see P and E. Session 4 is the biased camera: perceive, attribute, decide.",
    barbara: "Do not replace 'toxic nurses.' Change E so better behavior is the fit.",
    worked:
      "Barbara (P: well-liked registered nurse, new master's, low manager-domain expertise) × the General Surgery Unit (E: freeze, blame). Seniors may be low-agreeableness, but E currently rewards hazing. Change mentoring norms, not personality workshops.",
    examMiss: "Using the Myers-Briggs Type Indicator as a hiring or performance tool, or demonizing values.",
  },
  {
    id: 4,
    title: "Perception and decision-making",
    question: "How do they decide?",
    remember: "Perceive → attribute → decide → evaluate. Intuition needs expertise in a predictable world. Otherwise satisfice and debias.",
    mnemonic: "Perceive → attribute → decide → evaluate. Intuition = time pressure + a predictable environment + domain expertise.",
    formula: "3 futures × 3 objectives × 3 options. Satisfice when you cannot maximize.",
    goals: [
      "Name the decision type (programmed vs nonprogrammed; strategic / tactical / operational) and pick a model: intuitive, rational, or bounded.",
      "Walk perceive → attribute → decide → evaluate, name the trap, and pick a debiasing tool.",
    ],
    parts: [
      { name: "Perceive", detail: "Self-enhancement, stereotypes, self-fulfilling prophecy." },
      { name: "Attribute", detail: "Self-serving bias, fundamental attribution error, availability, regression to the mean, anchoring, framing." },
      { name: "Decide", detail: "Intuitive / rational / bounded (satisfice). Programmed vs nonprogrammed." },
      { name: "Evaluate", detail: "Confirmation, hindsight, escalation. Premortems, 3×3×3, devil's advocate, tripwires." },
    ],
    vocab: [
      { term: "Programmed vs nonprogrammed", line: "Routine vs surprise/crisis. The turnaround is nonprogrammed." },
      { term: "Satisfice", line: "Good enough under cognitive limits and imperfect information." },
      { term: "fundamental attribution error vs self-serving", line: "Others = character; me = situation when I fail." },
      { term: "Escalation", line: "Throwing more effort at a failing course because you already invested." },
    ],
    ontoCase: [
      { piece: "Decision type", fact: "Turning the unit around is nonprogrammed and tactical under crisis. Staffing a shift is operational. The freeze is a strategic constraint." },
      { piece: "Intuition gate", fact: "Time pressure: yes. Predictable environment: no. Domain expertise as a manager: no. Do not 'trust her nurse gut' for this." },
      { piece: "Perceive / stereotype", fact: "Long-time nurses call Megan a pest. That generalization then withholds teaching." },
      { piece: "Self-fulfilling prophecy + fundamental attribution error", fact: "Withhold teaching → she looks unskilled → 'confirmed.' Situation (no orientation, short staff) is downplayed." },
      { piece: "Escalation risk", fact: "Twenty-nine one-on-ones already started. Doubling down because she invested a month is escalation. Premortem it; satisfice with 3×3×3." },
    ],
    builds: "Explains why people misread the person-environment picture — and why Barbara's first-month choices can lock in.",
    fromPrev: "Session 3 said B = f(P,E). Session 4 says we distort P and E on the way in.",
    toNext: "After they decide, Session 5 asks why the system made that choice rational: needs, goals, rewards.",
    barbara:
      "The off-site gathered data (good) but ran long and became a vent session. Next decision should be bounded: few options, explicit objectives.",
    worked:
      "Megan as 'pest' = stereotype + fundamental attribution error + self-fulfilling prophecy. Barbara's 29 one-to-ones can escalate. Intuition fails: time pressure yes, predictable unit and manager expertise no. Satisfice.",
    examMiss: "Calling the turnaround 'intuitive' because she is a nurse. Wrong domain of expertise.",
  },
  {
    id: 5,
    title: "Goals and incentives",
    question: "Why would they move?",
    remember: "Needs → specific goals → hope vs reward → expectancy × instrumentality × valence → equity. Motivation is not performance.",
    mnemonic: "Needs, specific goals, Kerr (hope ≠ reward), Can I / Will it pay / Do I care, then fair vs whom.",
    formula: "Motivation = E × I × V (any zero kills it)",
    goals: [
      "Keep motivation distinct from performance. Walk needs → goals → rewards → expectancy → equity.",
      "Diagnose hygiene vs motivators, Kerr’s hope-versus-reward table, and which term in expectancy × instrumentality × valence is zero.",
    ],
    parts: [
      { name: "Needs", detail: "Maslow; Existence-Relatedness-Growth plus frustration-regression; Herzberg hygiene vs motivators." },
      { name: "Goals", detail: "Specific, hard goals plus feedback. Make the Director's vague demand specific, measurable, attainable, relevant, and time-bound." },
      { name: "Rewards", detail: "Focus problems, alignment (Kerr), controllability." },
      { name: "Expectancy + equity", detail: "Any zero in E × I × V kills motivation. Ratios vs referents drive exit." },
    ],
    vocab: [
      { term: "Hygiene vs motivators", line: "Herzberg: conditions stop dissatisfaction; achievement creates satisfaction." },
      { term: "Frustration-regression", line: "Existence-Relatedness-Growth: blocked growth or relatedness → fight over existence resources (hours, assignments, favorites)." },
      { term: "Alignment / Kerr", line: "We hope for A, we reward B." },
      { term: "Equity", line: "Outcomes/inputs vs a referent. Exit is a response, not a mystery." },
    ],
    ontoCase: [
      { piece: "Motivation ≠ performance", fact: "Nurses covering extra patients may be highly motivated to protect patients and still post declining scores." },
      { piece: "Hygiene / existence", fact: "Staffing, freeze, hostility, opaque policy. Herzberg: dissatisfaction stays until these move. Motivators (recognition) will bounce off." },
      { piece: "Kerr alignment", fact: "Hospital hopes for teamwork and quality; freeze + no overtime + mystery reviews reward survive-your-shift." },
      { piece: "Expectancy × instrumentality × valence", fact: "Cannot perform with this census and borrowed-unit coverage (E). Reviews are a mystery (I). Extra uncompensated shifts may be unwanted (V)." },
      { piece: "Equity", fact: "Same pay, worse schedules than favorites. Turnover is restoring the ratio by exiting." },
    ],
    builds: "Takes Session 4's 'they chose X' and asks what the system made rational. This is the extrinsic engine.",
    fromPrev: "Session 4 was how they see and choose. Session 5 is why the incentive system makes those choices sensible.",
    toNext: "Money is frozen. Session 6 asks whether the job itself can still pull (intrinsic).",
    barbara:
      "Walk Kerr's table, then hit E, I, and V separately so the essay is not a blurry 'they're unmotivated.'",
    worked:
      "Hygiene wrecked (staffing, hostility). Hope for teamwork; reward survive-the-shift. Expectancy low (nurses borrowed from other units), instrumentality low (mystery reviews), valence mixed. Equity: favoritism → turnover. Make the Director's 'turn it around fast' specific and time-bound.",
    examMiss: "Saying 'incentivize them' when there is no overtime and a freeze. Name I, equity, and hygiene levers that do not need cash.",
  },
  {
    id: 6,
    title: "Job design",
    question: "Does the work itself pull?",
    remember: "Variety, identity, significance, autonomy, feedback. Motivating Potential Score = ((V+I+S)/3) × A × F. Autonomy or feedback near zero kills the score.",
    mnemonic: "Variety, identity, significance, autonomy, feedback. Meaning trio gets averaged; A and F multiply — zeros are fatal.",
    formula: "Motivating Potential Score = ((Variety + Identity + Significance) / 3) × Autonomy × Feedback",
    goals: [
      "Tell extrinsic from intrinsic motivation, and scientific management from the Job Characteristics Model.",
      "Score variety, identity, significance, autonomy, and feedback. Know why autonomy and feedback are the fatal multipliers.",
    ],
    parts: [
      { name: "Scientific management", detail: "Efficiency, people as factors of production, manager plans the method." },
      { name: "Five characteristics", detail: "Variety, identity, significance, autonomy, feedback." },
      { name: "Three states", detail: "Meaningfulness, responsibility, knowledge of results → intrinsic motivation." },
      { name: "Motivating Potential Score", detail: "Average the meaning trio, then multiply by autonomy and feedback." },
    ],
    vocab: [
      { term: "Extrinsic vs intrinsic", line: "Outside carrot/stick vs the task as its own reward." },
      { term: "Scientific management", line: "People as interchangeable production factors." },
      { term: "Five job characteristics", line: "Variety, identity, significance, autonomy, feedback." },
      { term: "Motivating Potential Score", line: "If autonomy or feedback is near 0, significance cannot save the score." },
    ],
    ontoCase: [
      { piece: "Scientific management", fact: "The freeze plus nurses borrowed from other units treats people as interchangeable coverage — efficiency over identity." },
      { piece: "Significance", fact: "Already high: surgical patients. That is why 'nursing is meaningful' is not an exam answer by itself." },
      { piece: "Identity / variety", fact: "Care chopped across shifts and unfamiliar substitutes. Chaos crowds skilled nursing, so variety of craft work falls." },
      { piece: "Autonomy and feedback (multipliers)", fact: "Cannot control staffing or assignments. Feedback is rare or punishing. Either multiplier near zero collapses the score. Raise these first." },
    ],
    builds: "Session 5 tried to move people with goals and rewards. Session 6 asks whether the job itself is a reward.",
    fromPrev: "Session 5 is the pay/goal machine. Session 6 is the job machine — cheaper under a freeze.",
    toNext: "If Barbara cannot redesign every job, Session 7 lets workers recraft pieces of it.",
    barbara:
      "Significance is already high. Raise the multipliers — autonomy and feedback — plus identity via continuity of care.",
    worked:
      "Nurses borrowed from other units = scientific management. Significance high (surgery), identity low (chopped care), autonomy and feedback near zero → the Motivating Potential Score collapses. Raise assignment control and weekly non-punitive feedback first.",
    examMiss: "Praising 'meaningful nursing work' without using the Motivating Potential Score formula or naming autonomy and feedback.",
  },
  {
    id: 7,
    title: "Calling and job crafting",
    question: "Can they reshape meaning?",
    remember: "Do not wait to find a calling. Craft perceptions, tasks, and relationships. Passion often follows mastery.",
    mnemonic: "PTR: Perceptions, Tasks, Relationships. Passion is often a byproduct of mastery, not a treasure hunt.",
    goals: [
      "Reject the scavenger-hunt story of calling. Passion often follows mastery, not the reverse.",
      "Name the three crafts: perceptions (how you narrate), tasks (boundaries), relationships (who and how).",
    ],
    parts: [
      { name: "Heresies", detail: "Luck-only; one true calling; work will be bliss; the world will notice; all meaning lives at work." },
      { name: "Passion story", detail: "Follow passion → find calling → happiness. Treats passion as existing a priori." },
      { name: "Crafting path", detail: "Opportunity → master → improve → passion and new opportunity." },
      { name: "Three crafts", detail: "Perceptions (narrate), tasks (boundaries), relationships (who and how)." },
    ],
    vocab: [
      { term: "Calling", line: "Deeply fulfilling work believed to make the world better." },
      { term: "Five heresies", line: "Luck, one true calling, bliss, fame, all meaning equals work." },
      { term: "Job crafting", line: "Change how you narrate, what you do, and whom you do it with." },
    ],
    ontoCase: [
      { piece: "Heresy to reject", fact: "'I chose the wrong calling' because nursing met misery here. The job and culture blocked meaning; they did not pick the wrong life." },
      { piece: "Perceptions", fact: "Narrate the unit as protecting post-op patients through a crisis, not as the hospital’s problem child." },
      { piece: "Tasks", fact: "Own a bounded extra — precepting checklist, pain protocol — not infinite extra shifts." },
      { piece: "Relationships", fact: "Mentoring pairs instead of hazing cliques. One respected senior who precepts is relationship crafting with cover from Barbara." },
    ],
    builds: "Worker-side version of Session 6. If Barbara cannot redesign every job, people can still recraft pieces of it.",
    fromPrev: "Session 6 redesigned the job from above. Session 7 redesigns it from inside the role.",
    toNext: "Crafting still needs cover. Session 8 is power and influence to make the new story safe to live.",
    barbara:
      "Seniors craft relationships into mentoring. Juniors own a protocol. Barbara recrafts the story of the General Surgery Unit.",
    worked:
      "'I chose the wrong calling' is a heresy. Perception: we protect post-op patients through a crisis. Task: precepting checklist owner. Relationship: one mentoring pair, not a clique.",
    examMiss: "Telling people to follow their passion out of the General Surgery Unit. The case constraint is they are staying, under a freeze.",
  },
  {
    id: 8,
    title: "Power and influence",
    question: "How do we get action?",
    remember: "Five power bases plus dependence (scarcity, importance, substitutability). Freeze removes carrots. Cialdini without money. Watch new power and the agentic shift.",
    mnemonic: "Coercive, reward, legitimate, expert, referent. Dependence = scarce, important, (non)substitutable. Let's Recycle Some Cans And Save Unity.",
    formula: "Power: Coercive, Reward, Legitimate, Expert, Referent. Influence: Liking, Reciprocity, Social proof, Consistency, Authority, Scarcity, Unity.",
    goals: [
      "Map coercive, reward, legitimate, expert, and referent power, plus dependence (scarcity, importance, substitutability).",
      "Use Cialdini without money, watch the dark side of new power, and reverse the agentic shift — a speech will not undo it.",
    ],
    parts: [
      { name: "Bases", detail: "Coercive, reward, legitimate, expert, referent. Dependence: scarcity, importance, substitutability." },
      { name: "Dark side", detail: "Self-interest, objectifying, overconfidence — worse with new power and no checks." },
      { name: "Cialdini 7", detail: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity." },
      { name: "Agentic shift", detail: "People become instruments of authority; first compliance is sticky." },
    ],
    vocab: [
      { term: "Power", line: "Capacity of A to get B to act as A wishes — not only hierarchy." },
      { term: "Five bases plus dependence", line: "Coercive, reward, legitimate, expert, referent. Dependence: scarcity, importance, substitutability." },
      { term: "Cialdini 7", line: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity." },
      { term: "Agentic shift", line: "You become an agent of authority; going back after first compliance is hard." },
    ],
    ontoCase: [
      { piece: "Coercive / reward / legitimate", fact: "Hard to fire; freeze strips rewards; title is new and prior managers spent it." },
      { piece: "Expert / referent", fact: "Earn expertise on the floor (she already covers shifts). Referent possible from being a well-liked registered nurse, now 'management.'" },
      { piece: "Dependence", fact: "Registered nurses are scarce, important, and poorly substitutable. Borrowed-unit coverage is a bad substitute — they can squeeze her too." },
      { piece: "Cialdini without money", fact: "Liking and unity to dissolve cliques; public voluntary commitments from the off-site (consistency); one senior as social proof; authority as clinical expertise; scarcity of this reset window; reciprocity on brutal nights." },
      { piece: "Agentic shift", fact: "People execute the unit’s blame rules as agents, not as independent villains. First compliance is sticky. Make a new authority script that is safe to follow." },
    ],
    builds: "Sessions 1–7 diagnose. Session 8 is how Barbara implements — and how the unit currently produces obedience to a bad culture.",
    fromPrev: "You now know what to change. Session 8 is how you move people when you cannot pay them.",
    toNext: "This is the last session. Stack it on top of 1–7 for the exam action plan.",
    barbara:
      "Build referent and expert power, turn off-site complaints into public voluntary commitments, and make it legitimate to refuse blame culture.",
    worked:
      "Reward and coercive bases are thin. Registered nurses are scarce and poorly substitutable — they have dependence power too. Use unity, consistency from the off-site, social proof of one senior, expertise on the floor. Agentic shift: a speech will not undo blame-obedience.",
    examMiss: "Advising her to 'use her authority' as if legitimate power were enough, or ignoring that she is a low-status person who just gained power.",
  },
]
