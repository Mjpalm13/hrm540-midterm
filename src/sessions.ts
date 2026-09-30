export type SessionGuide = {
  id: number
  title: string
  question: string
  remember: string
  mnemonic: string
  formula?: string
  parts: { name: string; detail: string }[]
  vocab: { term: string; line: string }[]
  builds: string
  fromPrev: string
  toNext: string
  barbara: string
  worked: string
  examMiss: string
}

export const CONNECT_STEPS = [
  { id: 1, ask: "Where is it?", does: "Pick the floor: person, group, or hospital/unit system." },
  { id: 2, ask: "How do we know?", does: "SOES evidence. Write a mechanism, not a vibe." },
  { id: 3, ask: "Who × setting?", does: "B = f(P, E). Change E before you swap people." },
  { id: 4, ask: "How do they see it?", does: "PADE. Satisfice. Name the trap." },
  { id: 5, ask: "Why would they move?", does: "Needs, SMART, Kerr, E×I×V, equity." },
  { id: 6, ask: "Does the job pull?", does: "VISAF / MPS. Raise A and F first." },
  { id: 7, ask: "Can they recraft it?", does: "Perceptions, tasks, relationships. Passion follows mastery." },
  { id: 8, ask: "How do we get action?", does: "CRLER + Cialdini. Reverse the agentic shift." },
]

export const SESSIONS: SessionGuide[] = [
  {
    id: 1,
    title: "Organizational behavior",
    question: "Where is the problem?",
    remember: "Name the level before you diagnose. Wrong level = wrong fix.",
    mnemonic: "I-G-O: Individual, Group, Organization. Always climb the floors.",
    parts: [
      { name: "Individual", detail: "Personality, values, perception, motivation, job crafting, self-efficacy." },
      { name: "Group / team", detail: "Cliques, seniors vs juniors vs PCAs, blame norms, not functioning as a team." },
      { name: "Organization", detail: "EMU freeze, no OT, mystery reviews, medical hierarchy, GSU's blame culture." },
    ],
    vocab: [
      { term: "Organizational behavior", line: "How individuals and groups act inside organizations." },
      { term: "Three levels", line: "Individual / group / organizational — pick the floor of the fix." },
      { term: "Effectiveness", line: "OB exists so any function you join can work better." },
    ],
    builds: "This is the map of the course. Every later framework lives on one of these three floors.",
    fromPrev: "Start here. There is no earlier session.",
    toNext: "Once you name the floor, Session 2 asks how you know — evidence, not vibes.",
    barbara:
      "An essay that only coaches Barbara's personality misses the group (conflict) and org (freeze, mystery reviews) floors.",
    worked:
      "Individual: exhausted RNs, juniors called pests. Group: blame, favoritism, seniors vs juniors vs PCAs. Organization: freeze, no OT, mystery reviews, declining patient scores. Fix at least two floors.",
    examMiss: "Writing 'Barbara should be a better leader' with no level named.",
  },
  {
    id: 2,
    title: "Evidence-based management",
    question: "How do we know?",
    remember: "SOES: Science, Org data, Experience, Stakeholders. Theory needs a why plus when it fails.",
    mnemonic: "SOES. Theory = how/why + when it fails. Hypothesis predicts. Correlation is not causation.",
    formula: "Good theory: variables + causal mechanism + boundary / anomaly",
    parts: [
      { name: "Scientific", detail: "Published research on turnover, equity, JCM, influence." },
      { name: "Organizational", detail: "Satisfaction, turnover, patient scores, staffing, 29 one-to-one requests." },
      { name: "Experiential", detail: "Barbara's RN years; Betty Nolan as a model of people leadership and real reviews." },
      { name: "Stakeholder", detail: "Nurses, PCAs, float pool, physicians, patients, Director of Nursing." },
    ],
    vocab: [
      { term: "Theory", line: "How and why variables relate, and when they should not." },
      { term: "Hypothesis", line: "A theory-derived prediction you can test." },
      { term: "SOES evidence", line: "Scientific, organizational, experiential, stakeholder." },
      { term: "Quant vs qual", line: "Numbers vs meaning (coding words and observations)." },
    ],
    builds: "Session 1 said what to study. Session 2 says how to know. Justify every later diagnosis with evidence.",
    fromPrev: "Session 1 named the floors. Now you need proof before you pick a floor to act on.",
    toNext: "Evidence still has to be interpreted by people. Session 3 is who those people are.",
    barbara:
      "The off-site is qualitative stakeholder evidence. Pair it with org metrics. Do not treat one loud nurse as the whole population.",
    worked:
      "Org numbers: lowest satisfaction, highest turnover, two RNs gone in month one. Qual: anonymous cards. Experiential: Nolan. Scientific: equity and JCM research. Next: code the cards, pair each theme with a metric, write a hypothesis.",
    examMiss: "Dumping the off-site as 'the truth' with no other evidence type.",
  },
  {
    id: 3,
    title: "Personality and fit",
    question: "Who, in what setting?",
    remember: "B = f(P, E). Fit is the overlap. OCEAN beats types. Common values beat demonizing.",
    mnemonic: "OCEAN. Terminal = ends, instrumental = means. Barnum = if it fits anyone, it explains no one.",
    formula: "B = f(P, E). Fit = match of person characteristics to job/org characteristics.",
    parts: [
      { name: "Person", detail: "Values, Big Five, affect, self-monitoring, proactivity, self-esteem, self-efficacy, locus of control." },
      { name: "Environment", detail: "Job, organization, culture, staffing, physicians, reviews." },
      { name: "Fit", detail: "Match → attitudes and behavior: help, satisfaction, conflict, or exit." },
    ],
    vocab: [
      { term: "Lewin / interactionist", line: "Behavior is person and environment, not either alone." },
      { term: "Terminal vs instrumental values", line: "Desired ends vs preferred means." },
      { term: "Big Five / OCEAN", line: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
      { term: "MBTI vs traits", line: "Types are preference bundles; Barnum is the risk." },
    ],
    builds: "Puts people into Session 1's individual level. Later sessions change E (job, rewards, power) more than P.",
    fromPrev: "Session 2 gave you evidence. Session 3 tells you not to read that evidence as 'bad people.'",
    toNext: "People still mis-see P and E. Session 4 is the biased camera: perceive, attribute, decide.",
    barbara: "Do not replace 'toxic nurses.' Change E so better behavior is the fit.",
    worked:
      "Barbara (P: liked RN, new master's, low manager-domain expertise) × GSU (E: freeze, blame). Seniors may be low-agreeableness, but E currently rewards hazing. Change mentoring norms, not personality workshops.",
    examMiss: "Using MBTI as a hiring or performance tool, or demonizing values.",
  },
  {
    id: 4,
    title: "Perception and decision-making",
    question: "How do they decide?",
    remember: "PADE. Intuition needs expertise in a predictable world. Otherwise satisfice and debias.",
    mnemonic: "PADE: Perceive → Attribute → Decide → Evaluate. Intuition = Time + Predictable + Expertise.",
    formula: "3 futures × 3 objectives × 3 options. Satisfice when you cannot maximize.",
    parts: [
      { name: "Perceive", detail: "Self-enhancement, stereotypes, self-fulfilling prophecy." },
      { name: "Attribute", detail: "Self-serving bias, FAE, availability, regression to the mean, anchoring, framing." },
      { name: "Decide", detail: "Intuitive / rational / bounded (satisfice). Programmed vs nonprogrammed." },
      { name: "Evaluate", detail: "Confirmation, hindsight, escalation. Premortems, 3×3×3, devil's advocate, tripwires." },
    ],
    vocab: [
      { term: "Programmed vs nonprogrammed", line: "Routine vs surprise/crisis. The turnaround is nonprogrammed." },
      { term: "Satisfice", line: "Good enough under cognitive limits and imperfect information." },
      { term: "FAE vs self-serving", line: "Others = character; me = situation when I fail." },
      { term: "Escalation", line: "Throwing more effort at a failing course because you already invested." },
    ],
    builds: "Explains why people misread the person-environment picture — and why Barbara's first-month choices can lock in.",
    fromPrev: "Session 3 said B = f(P,E). Session 4 says we distort P and E on the way in.",
    toNext: "After they decide, Session 5 asks why the system made that choice rational: needs, goals, rewards.",
    barbara:
      "The off-site gathered data (good) but ran long and became a vent session. Next decision should be bounded: few options, explicit objectives.",
    worked:
      "Megan as 'pest' = stereotype + FAE + self-fulfilling prophecy. Barbara's 29 one-to-ones can escalate. Intuition fails: time pressure yes, predictable unit and manager expertise no. Satisfice.",
    examMiss: "Calling the turnaround 'intuitive' because she is a nurse. Wrong domain of expertise.",
  },
  {
    id: 5,
    title: "Goals and incentives",
    question: "Why would they move?",
    remember: "Needs → SMART goals → hope vs reward → E × I × V → equity. Motivation is not performance.",
    mnemonic: "Needs, SMART, Kerr (hope ≠ reward), Can I / Will it pay / Do I care, then fair vs whom.",
    formula: "Motivation = E × I × V (any zero kills it)",
    parts: [
      { name: "Needs", detail: "Maslow; ERG + frustration-regression; Herzberg hygiene vs motivators." },
      { name: "Goals", detail: "Specific, hard goals plus feedback. SMART the Director's vague demand." },
      { name: "Rewards", detail: "Focus problems, alignment (Kerr), controllability." },
      { name: "Expectancy + equity", detail: "Any zero in E × I × V kills motivation. Ratios vs referents drive exit." },
    ],
    vocab: [
      { term: "Hygiene vs motivators", line: "Herzberg: conditions stop dissatisfaction; achievement creates satisfaction." },
      { term: "Frustration-regression", line: "ERG: blocked growth/relatedness → fight over existence resources." },
      { term: "Alignment / Kerr", line: "We hope for A, we reward B." },
      { term: "Equity", line: "Outcomes/inputs vs a referent. Exit is a response, not a mystery." },
    ],
    builds: "Takes Session 4's 'they chose X' and asks what the system made rational. This is the extrinsic engine.",
    fromPrev: "Session 4 was how they see and choose. Session 5 is why the incentive system makes those choices sensible.",
    toNext: "Money is frozen. Session 6 asks whether the job itself can still pull (intrinsic).",
    barbara:
      "Walk Kerr's table, then hit E, I, and V separately so the essay is not a blurry 'they're unmotivated.'",
    worked:
      "Hygiene wrecked (staffing, hostility). Hope for teamwork; reward survive-the-shift. E low (float pool), I low (mystery reviews), V mixed. Equity: favoritism → turnover. SMART the Director's 'turn it around fast.'",
    examMiss: "Saying 'incentivize them' when there is no OT and a freeze. Name I, equity, and hygiene levers that do not need cash.",
  },
  {
    id: 6,
    title: "Job design",
    question: "Does the work itself pull?",
    remember: "VISAF. MPS = ((V+I+S)/3) × A × F. Autonomy or feedback near zero kills the score.",
    mnemonic: "VISAF. Meaning trio gets averaged; A and F multiply — zeros are fatal.",
    formula: "MPS = ((Variety + Identity + Significance) / 3) × Autonomy × Feedback",
    parts: [
      { name: "Scientific management", detail: "Efficiency, people as factors of production, manager plans the method." },
      { name: "Five characteristics", detail: "Variety, identity, significance, autonomy, feedback." },
      { name: "Three states", detail: "Meaningfulness, responsibility, knowledge of results → intrinsic motivation." },
      { name: "MPS", detail: "Average the meaning trio, then multiply by autonomy and feedback." },
    ],
    vocab: [
      { term: "Extrinsic vs intrinsic", line: "Outside carrot/stick vs the task as its own reward." },
      { term: "Scientific management", line: "People as interchangeable production factors." },
      { term: "VISAF", line: "Variety, Identity, Significance, Autonomy, Feedback." },
      { term: "MPS", line: "If A or F is near 0, significance cannot save the score." },
    ],
    builds: "Session 5 tried to move people with goals and rewards. Session 6 asks whether the job itself is a reward.",
    fromPrev: "Session 5 is the pay/goal machine. Session 6 is the job machine — cheaper under a freeze.",
    toNext: "If Barbara cannot redesign every job, Session 7 lets workers recraft pieces of it.",
    barbara:
      "Significance is already high. Raise the multipliers — autonomy and feedback — plus identity via continuity of care.",
    worked:
      "Float pool = scientific management. S high (surgery), I low (chopped care), A and F near zero → MPS collapses. Raise assignment control and weekly non-punitive feedback first.",
    examMiss: "Praising 'meaningful nursing work' without using the MPS formula or naming A and F.",
  },
  {
    id: 7,
    title: "Calling and job crafting",
    question: "Can they reshape meaning?",
    remember: "Do not wait to find a calling. Craft perceptions, tasks, and relationships. Passion often follows mastery.",
    mnemonic: "PTR: Perceptions, Tasks, Relationships. Passion is often a byproduct of mastery, not a treasure hunt.",
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
    builds: "Worker-side version of Session 6. If Barbara cannot redesign every job, people can still recraft pieces of it.",
    fromPrev: "Session 6 redesigned the job from above. Session 7 redesigns it from inside the role.",
    toNext: "Crafting still needs cover. Session 8 is power and influence to make the new story safe to live.",
    barbara:
      "Seniors craft relationships into mentoring. Juniors own a protocol. Barbara recrafts the story of GSU.",
    worked:
      "'I chose the wrong calling' is a heresy. Perception: we protect post-op patients through a crisis. Task: precepting checklist owner. Relationship: one mentoring pair, not a clique.",
    examMiss: "Telling people to follow their passion out of GSU. The case constraint is they are staying, under a freeze.",
  },
  {
    id: 8,
    title: "Power and influence",
    question: "How do we get action?",
    remember: "CRLER + SIS. Freeze removes carrots. Cialdini without money. Watch new power and the agentic shift.",
    mnemonic: "CRLER. SIS = scarce, important, (non)substitutable. Let's Recycle Some Cans And Save Unity.",
    formula: "Power: Coercive, Reward, Legitimate, Expert, Referent. Influence: Liking, Reciprocity, Social proof, Consistency, Authority, Scarcity, Unity.",
    parts: [
      { name: "Bases", detail: "Coercive, reward, legitimate, expert, referent. Dependence: scarcity, importance, substitutability." },
      { name: "Dark side", detail: "Self-interest, objectifying, overconfidence — worse with new power and no checks." },
      { name: "Cialdini 7", detail: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity." },
      { name: "Agentic shift", detail: "People become instruments of authority; first compliance is sticky." },
    ],
    vocab: [
      { term: "Power", line: "Capacity of A to get B to act as A wishes — not only hierarchy." },
      { term: "CRLER + SIS", line: "Five bases plus dependence." },
      { term: "Cialdini 7", line: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity." },
      { term: "Agentic shift", line: "You become an agent of authority; going back after first compliance is hard." },
    ],
    builds: "Sessions 1–7 diagnose. Session 8 is how Barbara implements — and how the unit currently produces obedience to a bad culture.",
    fromPrev: "You now know what to change. Session 8 is how you move people when you cannot pay them.",
    toNext: "This is the last session. Stack it on top of 1–7 for the exam action plan.",
    barbara:
      "Build referent and expert power, turn off-site complaints into public voluntary commitments, and make it legitimate to refuse blame culture.",
    worked:
      "Reward and coercive bases are thin. RNs are scarce and poorly substitutable — they have dependence power too. Use unity, consistency from the off-site, social proof of one senior, expertise on the floor. Agentic shift: a speech will not undo blame-obedience.",
    examMiss: "Advising her to 'use her authority' as if legitimate power were enough, or ignoring that she is a low-status person who just gained power.",
  },
]
