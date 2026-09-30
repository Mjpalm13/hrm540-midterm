export type Concept = {
  id: string
  label: string
  aliases: string[]
}

export type Flashcard = {
  id: string
  session: number
  term: string
  definition: string
  parts?: string
  remember: string
  caseHook: string
}

export type ApplyQuestion = {
  id: string
  session: number
  prompt: string
  stems: string
  model: string
  concepts: Concept[]
}

export type McQuestion = {
  id: string
  session: number
  prompt: string
  choices: { id: string; text: string }[]
  correct: string
  why: string
}

export type Essay = {
  id: string
  title: string
  minutes: number
  prompt: string
  rubric: Concept[]
  model: string
}

export type SessionGuide = {
  id: number
  title: string
  question: string
  remember: string
  parts: { name: string; detail: string }[]
  builds: string
  barbara: string
}

export const SESSIONS: SessionGuide[] = [
  {
    id: 1,
    title: "Organizational behavior",
    question: "Where is the problem?",
    remember: "Name the level before you diagnose. Wrong level = wrong fix.",
    parts: [
      { name: "Individual", detail: "Personality, values, perception, motivation, job crafting, self-efficacy." },
      { name: "Group / team", detail: "Cliques, seniors vs juniors vs PCAs, blame norms, not functioning as a team." },
      { name: "Organization", detail: "EMU freeze, no OT, mystery reviews, medical hierarchy, GSU's blame culture." },
    ],
    builds: "This is the map of the course. Every later framework lives on one of these three floors.",
    barbara:
      "An essay that only coaches Barbara's personality misses the group (conflict) and org (freeze, mystery reviews) floors.",
  },
  {
    id: 2,
    title: "Evidence-based management",
    question: "How do we know?",
    remember: "SOES: Science, Org data, Experience, Stakeholders. Theory needs a why plus when it fails.",
    parts: [
      { name: "Scientific", detail: "Published research on turnover, equity, JCM, influence." },
      { name: "Organizational", detail: "Satisfaction, turnover, patient scores, staffing, 29 one-to-one requests." },
      { name: "Experiential", detail: "Barbara's RN years; Betty Nolan as a model of people leadership and real reviews." },
      { name: "Stakeholder", detail: "Nurses, PCAs, float pool, physicians, patients, Director of Nursing." },
    ],
    builds: "Session 1 said what to study. Session 2 says how to know. Justify every later diagnosis with evidence.",
    barbara:
      "The off-site is qualitative coding of meaning. Pair it with org metrics. Do not treat one loud nurse as the whole population.",
  },
  {
    id: 3,
    title: "Personality and fit",
    question: "Who, in what setting?",
    remember: "B = f(P, E). Fit is the overlap. OCEAN beats types. Common values beat demonizing.",
    parts: [
      { name: "Person", detail: "Values, Big Five, affect, self-monitoring, proactivity, self-esteem, self-efficacy, locus of control." },
      { name: "Environment", detail: "Job, organization, culture, staffing, physicians, reviews." },
      { name: "Fit", detail: "Match → attitudes and behavior: help, satisfaction, conflict, or exit." },
    ],
    builds: "Puts people into Session 1's individual level. Later sessions change E (job, rewards, power) more than P.",
    barbara: "Do not replace 'toxic nurses.' Change E so better behavior is the fit.",
  },
  {
    id: 4,
    title: "Perception and decision-making",
    question: "How do they decide?",
    remember: "PADE. Intuition needs expertise in a predictable world. Otherwise satisfice and debias.",
    parts: [
      { name: "Perceive", detail: "Self-enhancement, stereotypes, self-fulfilling prophecy." },
      { name: "Attribute", detail: "Self-serving bias, FAE, availability, regression to the mean, anchoring, framing." },
      { name: "Decide", detail: "Intuitive / rational / bounded (satisfice). Programmed vs nonprogrammed." },
      { name: "Evaluate", detail: "Confirmation, hindsight, escalation. Premortems, 3×3×3, devil's advocate, tripwires." },
    ],
    builds: "Explains why people misread the person-environment picture — and why Barbara's first-month choices can lock in.",
    barbara:
      "The off-site gathered data (good) but ran long and became a vent session. Next decision should be bounded: few options, explicit objectives.",
  },
  {
    id: 5,
    title: "Goals and incentives",
    question: "Why would they move?",
    remember: "Needs → SMART goals → hope vs reward → E × I × V → equity. Motivation is not performance.",
    parts: [
      { name: "Needs", detail: "Maslow; ERG + frustration-regression; Herzberg hygiene vs motivators." },
      { name: "Goals", detail: "Specific, hard goals plus feedback. SMART the Director's vague demand." },
      { name: "Rewards", detail: "Focus problems, alignment (Kerr), controllability." },
      { name: "Expectancy + equity", detail: "Any zero in E × I × V kills motivation. Ratios vs referents drive exit." },
    ],
    builds: "Takes Session 4's 'they chose X' and asks what the system made rational. This is the extrinsic engine.",
    barbara:
      "Walk Kerr's table, then hit E, I, and V separately so the essay is not a blurry 'they're unmotivated.'",
  },
  {
    id: 6,
    title: "Job design",
    question: "Does the work itself pull?",
    remember: "VISAF. MPS = ((V+I+S)/3) × A × F. Autonomy or feedback near zero kills the score.",
    parts: [
      { name: "Scientific management", detail: "Efficiency, people as production factors, manager plans the method." },
      { name: "Five characteristics", detail: "Variety, identity, significance, autonomy, feedback." },
      { name: "Three states", detail: "Meaningfulness, responsibility, knowledge of results → intrinsic motivation." },
      { name: "MPS", detail: "Average the meaning trio, then multiply by autonomy and feedback." },
    ],
    builds: "Session 5 tried to move people with goals and rewards. Session 6 asks whether the job itself is a reward.",
    barbara:
      "Significance is already high. Raise the multipliers — autonomy and feedback — plus identity via continuity of care.",
  },
  {
    id: 7,
    title: "Calling and job crafting",
    question: "Can they reshape meaning?",
    remember: "Do not wait to find a calling. Craft perceptions, tasks, and relationships. Passion often follows mastery.",
    parts: [
      { name: "Heresies", detail: "Luck-only; one true calling; work will be bliss; the world will notice; all meaning lives at work." },
      { name: "Passion story", detail: "Follow passion → find calling → happiness. Treats passion as existing a priori." },
      { name: "Crafting path", detail: "Opportunity → master → improve → passion and new opportunity." },
      { name: "Three crafts", detail: "Perceptions (narrate), tasks (boundaries), relationships (who and how)." },
    ],
    builds: "Worker-side version of Session 6. If Barbara cannot redesign every job, people can still recraft pieces of it.",
    barbara:
      "Seniors craft relationships into mentoring. Juniors own a protocol. Barbara recrafts the story of GSU.",
  },
  {
    id: 8,
    title: "Power and influence",
    question: "How do we get action?",
    remember: "CRLER + SIS. Freeze removes carrots. Cialdini without money. Watch new power and the agentic shift.",
    parts: [
      { name: "Bases", detail: "Coercive, reward, legitimate, expert, referent. Dependence: scarcity, importance, substitutability." },
      { name: "Dark side", detail: "Self-interest, objectifying, overconfidence — worse with new power and no checks." },
      { name: "Cialdini 7", detail: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity." },
      { name: "Agentic shift", detail: "People become instruments of authority; first compliance is sticky." },
    ],
    builds: "Sessions 1–7 diagnose. Session 8 is how Barbara implements — and how the unit currently produces obedience to a bad culture.",
    barbara:
      "Build referent and expert power, turn off-site complaints into public voluntary commitments, and make it legitimate to refuse blame culture.",
  },
]

export const FLASHCARDS: Flashcard[] = [
  {
    id: "ob",
    session: 1,
    term: "Organizational behavior",
    definition:
      "The discipline that studies how individuals and groups act inside the organizations where they work.",
    parts: "Three levels: individual, group/team, organizational.",
    remember: "Always name the level before you diagnose.",
    caseHook:
      "GSU is failing at all three: burned-out individuals, a non-team, and a hospital plus unit culture of cost-cutting and blame.",
  },
  {
    id: "theory",
    session: 2,
    term: "Theory",
    definition:
      "A collection of assertions about how and why variables are related, plus the conditions where they should and should not be related.",
    remember: "Good theory names the causal mechanism and the boundary / anomaly.",
    caseHook:
      "Do not just say morale is low. Name the mechanism: instrumentality is broken because extra effort is not rewarded under the freeze.",
  },
  {
    id: "hypothesis",
    session: 2,
    term: "Hypothesis",
    definition: "A theory-derived prediction that specifies a relationship between variables.",
    remember: "Theory explains. Hypothesis predicts. Data tests.",
    caseHook:
      "Hypothesis: if Barbara makes performance criteria public, perceived equity will rise even before pay can change.",
  },
  {
    id: "ebm",
    session: 2,
    term: "Evidence-based management",
    definition:
      "Using the best available evidence — not habit or anecdote alone — to make managerial decisions.",
    parts: "Scientific, organizational, experiential, stakeholder. Quantitative (numbers) vs qualitative (meaning).",
    remember: "SOES. Pair numbers with meaning.",
    caseHook:
      "Org: lowest satisfaction, highest turnover, declining patient scores. Qualitative: off-site cards. Stakeholder: nurses, PCAs, patients, DoN. Experiential: Betty Nolan.",
  },
  {
    id: "lewin",
    session: 3,
    term: "Lewin's equation / interactionist view",
    definition: "B = f(P, E). Behavior is a function of the person and the environment, not either alone.",
    remember: "Personality psychologists vs situationists: Org B takes both. Fit is the match.",
    caseHook:
      "Barbara is a well-liked new manager (P) dropped into a blaming, short-staffed unit with a freeze (E). Same person, different environment, different behavior.",
  },
  {
    id: "values",
    session: 3,
    term: "Values (terminal vs instrumental)",
    definition:
      "Principles about what is important. Terminal = desired ends. Instrumental = preferred means.",
    remember: "Ends vs means. Conflict: do not demonize; seek understanding; appeal to common values.",
    caseHook:
      "Nurses share a terminal value (patient care) but clash on instrumental values (how seniors socialize juniors). Unite on patient care.",
  },
  {
    id: "ocean",
    session: 3,
    term: "Big Five (OCEAN)",
    definition:
      "Trait model: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (need for stability).",
    parts: "Trait-based (Big Five) vs type-based (MBTI, DISC). Healthy neuroticism = low stability + high conscientiousness.",
    remember: "OCEAN. Traits predict better than types.",
    caseHook:
      "A highly conscientious nurse will still look unreliable if the environment dumps float-pool coverage on her. Do not FAE the person.",
  },
  {
    id: "mbti",
    session: 3,
    term: "MBTI four pairs",
    definition:
      "Type inventory of preferences: energy (E/I), perceiving (S/N), deciding (T/F), ambiguity (J/P).",
    remember: "Energy, perceive, decide, closure. Weakness: Barnum effect.",
    caseHook:
      "Use MBTI only as a language for how we prefer to work, never as hiring or performance. GSU already has favoritism.",
  },
  {
    id: "barnum",
    session: 3,
    term: "Barnum effect",
    definition:
      "People accept personality descriptions that could apply to almost anyone as uniquely true of them.",
    remember: "If it could describe anyone, it explains no one.",
    caseHook: "Do not treat 'she's a people person' as a complete diagnosis of Barbara or the unit.",
  },
  {
    id: "decisions",
    session: 4,
    term: "Decision types",
    definition:
      "Choosing among alternatives, including inaction. Programmed vs nonprogrammed; strategic / tactical / operational.",
    remember: "Programmed = frequent. Nonprogrammed = surprise. Strategic = trajectory. Tactical = how. Operational = daily.",
    caseHook:
      "Turning GSU around is a nonprogrammed tactical decision under crisis. Staffing a shift is operational. The freeze is a strategic constraint.",
  },
  {
    id: "three-models",
    session: 4,
    term: "Intuitive vs rational vs bounded rational",
    definition:
      "Intuition: fast, affect-charged, holistic. Rational: know the goal, all options, maximize. Bounded: imperfect info, cognitive limits, satisfice.",
    remember: "Intuition only when time pressure + predictable environment + domain expertise.",
    caseHook:
      "Barbara has time pressure but GSU is not yet predictable for her, and she lacks manager-domain expertise. She should satisfice.",
  },
  {
    id: "perception",
    session: 4,
    term: "Perceptual traps",
    definition:
      "Perception is detecting and interpreting stimuli. Traps: self-enhancement, stereotypes, self-fulfilling prophecy.",
    remember: "PADE: Perceive → Attribute → Decide → Evaluate.",
    caseHook:
      "Seniors stereotype juniors as pests; juniors then stop asking and look incompetent. Megan Mahoney's complaint is this trap.",
  },
  {
    id: "attribution",
    session: 4,
    term: "Attribution traps",
    definition:
      "Causal stories we tell. Self-serving: own success = me, failure = situation. FAE: others' behavior = who they are.",
    parts: "Also availability, regression to the mean, anchoring, framing.",
    remember: "Me = situation when I fail. You = character when you fail.",
    caseHook:
      "Staff blame lazy juniors (FAE) instead of staffing, freeze, and float pool. Barbara may self-serve about how hard she is trying.",
  },
  {
    id: "post-decision",
    session: 4,
    term: "Post-decision traps",
    definition: "Confirmation bias, hindsight bias, and escalation of commitment.",
    remember: "See what you already believe. 'I knew it.' Throw good effort after a failing plan.",
    caseHook:
      "If Barbara doubles down on endless 1:1s because she already invested a month, that is escalation. Premortem it.",
  },
  {
    id: "motivation",
    session: 5,
    term: "Motivation vs performance",
    definition:
      "Motivation is the reason one acts (movere = to move). It is not the same as performance.",
    remember: "Willing ≠ able ≠ allowed.",
    caseHook:
      "Nurses covering extra patients may be highly motivated to protect patients and still post declining satisfaction.",
  },
  {
    id: "needs",
    session: 5,
    term: "Need theories: Maslow, ERG, two-factor",
    definition:
      "People work to satisfy needs. Maslow is hierarchical. ERG is not, and frustration-regression can drop people down. Herzberg: hygiene removes dissatisfaction; motivators create satisfaction.",
    remember: "Fix hygiene first or motivators will not land.",
    caseHook:
      "Freeze, no OT, hostility = broken existence/hygiene. Recognition and development already missing = no motivators.",
  },
  {
    id: "goals",
    session: 5,
    term: "Goal-setting / SMART",
    definition:
      "Specific, challenging goals plus feedback raise performance. SMART: specific, measurable, attainable, relevant, time-bound.",
    remember: "'Turn the unit around fast' is a wish, not a goal.",
    caseHook:
      "Translate the Director's demand: zero RN resignations this quarter; a 15-minute huddle every shift; publish review criteria in 30 days.",
  },
  {
    id: "reinforcement",
    session: 5,
    term: "Reinforcement problems",
    definition:
      "People do what is rewarded. Focus: rewarded activity crowds out the rest. Alignment (Kerr): we hope for A, reward B. Controllability: reward results the person cannot control.",
    remember: "If it is not rewarded, it is optional.",
    caseHook:
      "Hospital hopes for teamwork and quality; freeze + no OT + mystery reviews reward survive your shift.",
  },
  {
    id: "expectancy",
    session: 5,
    term: "Expectancy theory (E × I × V)",
    definition:
      "Motivation = Expectancy (effort→performance) × Instrumentality (performance→outcome) × Valence (I want it). Any zero kills motivation.",
    remember: "Can I? Will it pay? Do I care? Multiplication, not addition.",
    caseHook:
      "E: cannot perform with this census and float pool. I: reviews are a mystery. V: extra uncompensated shifts can be unwanted.",
  },
  {
    id: "equity",
    session: 5,
    term: "Equity theory",
    definition:
      "People compare outcomes/inputs to a referent. Inequity motivates restoring the ratio: lower effort, demand more, distort, switch referent, leave, retaliate.",
    remember: "Fairness is relative. Favoritism is an equity alarm.",
    caseHook:
      "High performers see the same pay and worse schedules than favorites. Turnover is an equity response (exit).",
  },
  {
    id: "intrinsic",
    session: 6,
    term: "Extrinsic vs intrinsic motivation",
    definition:
      "Extrinsic: external incentive or punishment tied to performance. Intrinsic: doing the task is itself the reward.",
    remember: "Session 5 is mostly extrinsic systems. Session 6 asks whether the job itself pulls.",
    caseHook:
      "Barbara cannot buy much extrinsic reward. She must raise intrinsic pull: meaningfulness, responsibility, knowledge of results.",
  },
  {
    id: "taylor",
    session: 6,
    term: "Scientific management",
    definition:
      "Minimize waste by finding the most efficient method. People are factors of production; managers plan the work.",
    remember: "Efficiency lens. Opposite of JCM's human lens.",
    caseHook:
      "The freeze treats nurses as interchangeable production factors (hence float pool). That crushes intrinsic motivation.",
  },
  {
    id: "jcm",
    session: 6,
    term: "Job Characteristics Model",
    definition:
      "Structure work so people experience meaningfulness, responsibility, and knowledge of results — which raise intrinsic motivation.",
    parts: "VISAF: Variety, Identity, Significance, Autonomy, Feedback.",
    remember: "Nursing is high significance; GSU is low on the rest.",
    caseHook:
      "Task significance is sky-high. Identity fragments across shifts and float RNs. Autonomy and feedback are crushed.",
  },
  {
    id: "mps",
    session: 6,
    term: "Motivating Potential Score",
    definition:
      "MPS = ((Variety + Identity + Significance) / 3) × Autonomy × Feedback. If autonomy or feedback is near 0, MPS collapses.",
    remember: "Zeros on the multipliers are fatal.",
    caseHook:
      "Heroic significance cannot save MPS if Barbara never gives clear feedback and nurses cannot control assignments. Raise A and F first.",
  },
  {
    id: "calling",
    session: 7,
    term: "Calling vs the five heresies",
    definition:
      "A calling is deeply fulfilling work believed to make the world better. Heresies: luck-only; one true calling; work will be bliss; the world will notice; all meaning lives at work.",
    remember: "Finding a calling is not a scavenger hunt. Meaning is made, often at a cost.",
    caseHook:
      "GSU nurses entered a calling profession and met misery. That does not mean they chose wrong. The job and culture blocked meaning.",
  },
  {
    id: "passion",
    session: 7,
    term: "Passion perspective vs job crafting",
    definition:
      "Passion view: follow passion → find calling → happiness. Crafting view: take an opportunity, master it, improve it → passion follows.",
    parts: "Craft perceptions, tasks, and relationships.",
    remember: "Passion is often the feeling generated by mastery.",
    caseHook:
      "Barbara cannot find everyone a new calling. She can help seniors mentor, let nurses own a care bundle, and reframe GSU as protecting surgical patients together.",
  },
  {
    id: "power",
    session: 8,
    term: "Power and its bases",
    definition:
      "Capacity of A to get B to act as A wishes. Bases: coercive, reward, legitimate, expert, referent. Dependence: scarcity, importance, substitutability.",
    remember: "CRLER + SIS. Title is only legitimate power. Freeze strips reward power.",
    caseHook:
      "Barbara has new legitimate power, weak reward/coercive power, and must build expert and referent power. RNs are scarce and hard to substitute — they have power too.",
  },
  {
    id: "power-effects",
    session: 8,
    term: "Effects of power on the powerful",
    definition:
      "More self-interest, objectifying others, treating relationships as peripheral, reacting badly to competence threats, overconfidence. Worse with narcissism, no checks, or a low-status person who suddenly gains power.",
    remember: "Power is a risk factor. Values, moral identity, and checks blunt it.",
    caseHook:
      "Barbara is a staff nurse who just gained positional power. That is the danger profile. Stay close to patient-care values and invite checks.",
  },
  {
    id: "cialdini",
    session: 8,
    term: "Cialdini's seven influence tactics",
    definition: "Liking, reciprocity, social proof, consistency, authority, scarcity, unity.",
    remember: "Let's Recycle Some Cans And Save Unity. Commitments must be active, public, and voluntary.",
    caseHook:
      "No budget: liking, unity, consistency from the off-site, social proof from one senior, authority as clinical expertise, scarcity of this reset window, reciprocity on a brutal shift.",
  },
  {
    id: "agentic",
    session: 8,
    term: "Agentic shift",
    definition:
      "In an authority system, people stop seeing themselves as acting for their own purposes and become agents executing someone else's wishes. Autonomy drops; reversing first compliance is hard.",
    remember: "Once you obey, it is hard to go back. Culture is maintained by agentic compliance, not just villains.",
    caseHook:
      "Nurses who go along with blame may not be cruel; they have shifted to executing the unit's authority system. Make noncompliance with toxicity legitimate.",
  },
]

export const APPLY: ApplyQuestion[] = [
  {
    id: "q1",
    session: 1,
    prompt:
      "GSU has the lowest employee satisfaction and highest turnover at EMU, plus declining patient satisfaction. Diagnose this at all three levels of analysis. Why would a purely individual-level answer be incomplete?",
    stems: "At the individual level… At the group level… At the organizational level… Therefore Barbara should…",
    model:
      "Individual: exhaustion, low self-efficacy as a new manager and as juniors called pests, values around patient care colliding with daily experience. Group: no teamwork, seniors vs juniors vs PCAs, confrontation and favoritism as norms. Organization: freeze, no overtime, mystery performance reviews, physicians treating nurses as order-takers, prior weak management. A personality-only fix (replace bad apples) ignores that the same people might function on Betty Nolan's well-run unit. Session 1 already requires you to change the level of the intervention.",
    concepts: [
      { id: "individual", label: "Individual level", aliases: ["individual", "self-efficacy", "exhaust", "personality", "values"] },
      { id: "group", label: "Group / team level", aliases: ["group", "team", "clique", "senior", "junior", "favoritism", "blame"] },
      { id: "org", label: "Organizational level", aliases: ["organiz", "freeze", "overtime", "review", "hospital", "emu", "culture"] },
    ],
  },
  {
    id: "q2",
    session: 2,
    prompt:
      "Barbara is drowning in complaints after the off-site. Using the four types of evidence, what does she already have, what is she over-weighting, and what should she collect next?",
    stems: "Scientific evidence would say… Organizational evidence already shows… The off-site is… Stakeholder evidence she is missing is…",
    model:
      "Org evidence: satisfaction, turnover (2 RNs gone in her first month; 3 in the prior six), patient scores, 29 one-to-one requests, staffing math. Qualitative stakeholder evidence: anonymous cards — rich meaning, but a vent session is not a random sample and can trigger availability bias. Experiential: her RN expertise plus Nolan's model; she lacks manager-domain reps, so do not treat gut as data. Scientific: research on equity, JCM, and influence. Next: code the cards into categories, pair each with a metric, and write hypotheses rather than trying to fix every card.",
    concepts: [
      { id: "sci", label: "Scientific evidence", aliases: ["scientific", "research", "published", "jcm", "equity"] },
      { id: "org", label: "Organizational evidence", aliases: ["organiz", "turnover", "satisfaction", "score", "metric", "data"] },
      { id: "exp", label: "Experiential evidence", aliases: ["experien", "nolan", "gut", "rn years", "practitioner"] },
      { id: "stake", label: "Stakeholder evidence", aliases: ["stakeholder", "nurse", "patient", "pca", "physician", "off-site", "card"] },
    ],
  },
  {
    id: "q3",
    session: 3,
    prompt:
      "Apply B = f(P, E) and the notion of fit to (a) Barbara herself and (b) a senior nurse who hazes juniors. What should Barbara change — P or E — and why?",
    stems: "Barbara's P is… GSU's E is… Fit fails because… Therefore the lever is…",
    model:
      "Barbara: high agreeableness / referent potential and a new MS in nursing admin (P) in an environment of crisis, freeze, and blame (E). Behavior (overwhelm, staying from 6:30am past 10pm) is the interaction, not 'she is weak.' Senior nurse: personality may include low agreeableness, but E rewards hazing (status, control of scarce help). Changing P (personality workshop) is slow and Barnum-prone. Change E: make mentoring a visible, praised task; stop assigning the hazer unofficial gatekeeper power; appeal to shared terminal value of patient safety. Avoid demonizing.",
    concepts: [
      { id: "lewin", label: "B = f(P, E)", aliases: ["lewin", "b = f", "person", "environment", "fit"] },
      { id: "change-e", label: "Change the environment", aliases: ["environment", "change e", "system", "reward", "mentoring"] },
      { id: "values", label: "Shared values", aliases: ["value", "patient", "demoniz", "terminal"] },
    ],
  },
  {
    id: "q4",
    session: 4,
    prompt:
      "Is turning GSU around a programmed or nonprogrammed decision, and which decision model should Barbara use? Name two traps already visible in her first month and one debiasing tool for each.",
    stems: "This is a ___ decision because… Intuition is / is not appropriate because… Trap 1… Tool 1…",
    model:
      "Nonprogrammed, tactical, under crisis. Intuition requires time pressure AND a predictable environment AND domain expertise. She has the first, not the other two — so bounded rationality: satisfice on a few moves. Traps: FAE (staff as lazy rather than under-resourced); availability (loudest off-site stories drive the agenda); possible escalation if she keeps adding 1:1s; framing the freeze as yes/no. Tools: outsider/future-CNO view; premortem; 3 futures × 3 objectives × 3 options; devil's advocate; tripwire if two more RNs give notice.",
    concepts: [
      { id: "nonprog", label: "Nonprogrammed decision", aliases: ["nonprogrammed", "non-programmed", "crisis", "tactical"] },
      { id: "bounded", label: "Bounded rationality / satisfice", aliases: ["bounded", "satisfice", "good enough", "intuition"] },
      { id: "traps", label: "Named traps + tools", aliases: ["fae", "attribution", "availability", "escalat", "premortem", "tripwire", "devil"] },
    ],
  },
  {
    id: "q5",
    session: 4,
    prompt:
      "Megan Mahoney says senior nurses make her feel she does everything wrong, will not address her directly, and called her a pest. Map this onto stereotypes, self-fulfilling prophecy, and fundamental attribution error.",
    stems: "The stereotype is… It becomes self-fulfilling when… Seniors are committing FAE by…",
    model:
      "Stereotype: new nurses are incompetent pests. Self-fulfilling: they withhold teaching → she asks more or stops asking → she looks either needy or unskilled → stereotype confirmed. FAE: seniors attribute her questions to her disposition (pest) and downplay the situation (no orientation, short staff, hostile climate). Barbara's job is to change the situation (structured precepting, public norms for feedback) so the prophecy cannot run.",
    concepts: [
      { id: "stereo", label: "Stereotype", aliases: ["stereotype", "pest", "incompetent", "junior"] },
      { id: "sfp", label: "Self-fulfilling prophecy", aliases: ["self-fulfilling", "prophecy", "withhold", "confirm"] },
      { id: "fae", label: "Fundamental attribution error", aliases: ["fae", "fundamental", "disposition", "situation", "attribution"] },
    ],
  },
  {
    id: "q6",
    session: 5,
    prompt:
      "The Director wants the unit turned around fast. There is a hiring freeze and no overtime. Diagnose GSU with Herzberg, Kerr's alignment problem, expectancy theory, and equity theory.",
    stems: "Hygiene vs motivators… We hope for X but reward Y… E is… I is… V is… Compared with… they restore equity by…",
    model:
      "Herzberg: hygiene is wrecked (conditions, staffing, supervision, peer relations, opaque policy). Motivators (recognition, achievement, growth, the work itself) are blocked by mystery reviews and hostility. Kerr: hope for teamwork, quality, surfacing problems; reward individual throughput, keeping your head down, and favoritism. Expectancy: E low (cannot perform with this load/float pool); I low (performance does not map to reviews, pay, or thanks); V mixed (patient care is valued, extra uncompensated shifts are not). Equity: same outcomes for unequal inputs plus favoritism; responses already include exit. Barbara's realistic levers: I and equity via transparent reviews; E via better assignments; V via restoring meaning since money is frozen.",
    concepts: [
      { id: "herzberg", label: "Herzberg hygiene / motivators", aliases: ["herzberg", "hygiene", "motivator", "dissatisf"] },
      { id: "kerr", label: "Alignment / Kerr", aliases: ["kerr", "alignment", "hope", "reward"] },
      { id: "exp", label: "Expectancy, instrumentality, valence", aliases: ["expectancy", "instrumentality", "valence", "e × i", "e x i"] },
      { id: "equity", label: "Equity theory", aliases: ["equity", "fair", "favoritism", "referent", "turnover", "exit"] },
    ],
  },
  {
    id: "q7",
    session: 5,
    prompt:
      "Using ERG's frustration-regression hypothesis, explain why nurses who cannot get growth or even relatedness at GSU may start fighting over schedules, supplies, or who is the favorite.",
    stems: "Growth is blocked by… Relatedness is blocked by… Frustration-regression predicts they will…",
    model:
      "Growth (development, esteem from good reviews) is blocked. Relatedness (belonging, decent peer/physician relationships) is blocked by cliques and blame. ERG says people are not stuck waiting on a hierarchy; they regress to existence needs — hours, assignments, who covers the worst patients, who gets the float. That looks like pettiness; theoretically it is regression. Intervention: reopen relatedness (huddles, mixed-seniority pairs) even before growth opportunities exist.",
    concepts: [
      { id: "erg", label: "ERG", aliases: ["erg", "existence", "relatedness", "growth"] },
      { id: "fr", label: "Frustration-regression", aliases: ["frustration", "regression", "regress"] },
      { id: "exist", label: "Existence fights", aliases: ["schedule", "assignment", "favorite", "supplies", "hours"] },
    ],
  },
  {
    id: "q8",
    session: 6,
    prompt:
      "Score GSU nursing qualitatively on VISAF and explain why MPS can be low even though task significance is very high. What two characteristics should Barbara raise first, given the formula?",
    stems: "V… I… S… A… F… Because MPS = … the fatal factors are…",
    model:
      "Significance: high (surgical patients). Variety: mixed-to-low because chaos crowds skilled nursing. Identity: low — care chopped across shifts and unfamiliar float RNs. Autonomy: low — cannot control staffing, assignments, OT. Feedback: low or punishing. MPS = ((V+I+S)/3) × A × F. High S is averaged with weak V and I, then multiplied by near-zero A and F, so MPS collapses. Raise autonomy and feedback first — they are the multipliers. Then rebuild identity via continuity with patients.",
    concepts: [
      { id: "visaf", label: "VISAF named", aliases: ["variety", "identity", "significance", "autonomy", "feedback", "visaf"] },
      { id: "mps", label: "MPS formula", aliases: ["mps", "formula", "multiply", "((", "/ 3", "/3"] },
      { id: "multi", label: "Raise A and F first", aliases: ["autonomy", "feedback", "multiplier", "zero"] },
    ],
  },
  {
    id: "q9",
    session: 6,
    prompt:
      "How is the hospital's use of the float pool an expression of scientific management, and how does that collide with the Job Characteristics Model?",
    stems: "Scientific management assumes… The float pool treats nurses as… JCM predicts…",
    model:
      "Scientific management treats people as interchangeable factors and has managers design the one best method. Float RNs maximize coverage efficiency on paper. JCM says motivation depends on perceived characteristics of this job — identity, relationships, feedback from a known team. Substitutes who do not know GSU destroy identity and force regulars to re-teach. Barbara cannot end the freeze, but she can reduce the damage: better orientation for floats, pair them, keep a short GSU standard work that protects identity rather than only speed.",
    concepts: [
      { id: "sci", label: "Scientific management", aliases: ["scientific management", "interchangeable", "factor of production", "efficiency", "taylor"] },
      { id: "jcm", label: "JCM collision", aliases: ["jcm", "identity", "job characteristic", "intrinsic"] },
      { id: "float", label: "Float pool", aliases: ["float", "substitute", "coverage"] },
    ],
  },
  {
    id: "q10",
    session: 7,
    prompt:
      "A nurse tells Barbara, 'I thought nursing was my calling, so I must have chosen wrong.' Correct this using the five heresies and then give one crafting move in each of perceptions, tasks, and relationships.",
    stems: "The heresy here is… A better truth is… Perception craft… Task craft… Relationship craft…",
    model:
      "Heresies in play: one true calling, work will be bliss, meaning lives only at work, maybe luck. Truths: you can do good work in a hard assignment; meaning has a price; work is one stage. Perception: narrate GSU as protecting post-op patients through a crisis, not as a dumping ground. Tasks: take a bounded extra (precepting checklist, pain protocol owner) rather than infinite extra shifts. Relationships: one mentoring pair or a huddle ally so the social fabric is not only cliques. Passion can follow mastery of those crafts.",
    concepts: [
      { id: "heresy", label: "Calling heresies", aliases: ["heresy", "calling", "bliss", "passion", "one true"] },
      { id: "perc", label: "Perception crafting", aliases: ["perception", "narrate", "reframe", "story"] },
      { id: "task", label: "Task crafting", aliases: ["task", "protocol", "precept", "boundaries"] },
      { id: "rel", label: "Relationship crafting", aliases: ["relationship", "mentor", "huddle", "ally"] },
    ],
  },
  {
    id: "q11",
    session: 8,
    prompt:
      "Map Barbara's power using CRLER and dependence (SIS). Then argue why Cialdini will matter more than coercive or reward power for the next 90 days.",
    stems: "Coercive… Reward… Legitimate… Expert… Referent… Nurses' dependence power is… Therefore influence tactic X fits because…",
    model:
      "Coercive: weak (hard to terminate, culture already fearful). Reward: stripped (freeze, no OT). Legitimate: she has the title, but prior managers spent it. Expert: strong if she shows clinical competence on the floor. Referent: possible because she was a well-liked RN, but she is now management. Dependence: RNs are scarce, critically important, and poorly substitutable — staff can squeeze her. Use liking, unity, consistency (lock in voluntary public commitments from the off-site), social proof (one respected senior), authority-as-expertise, reciprocity on brutal shifts, and scarcity of this reset window.",
    concepts: [
      { id: "crler", label: "Power bases", aliases: ["coercive", "reward", "legitimate", "expert", "referent", "crler"] },
      { id: "sis", label: "Dependence / SIS", aliases: ["scarce", "scarcity", "important", "substitut", "dependence"] },
      { id: "cialdini", label: "Cialdini tactics", aliases: ["cialdini", "liking", "reciprocity", "social proof", "consistency", "unity", "authority"] },
    ],
  },
  {
    id: "q12",
    session: 8,
    prompt:
      "Use the agentic shift to explain why 'just tell them to stop the blame culture' will fail. What would reverse the shift?",
    stems: "Staff currently see themselves as… First compliance was… To restore autonomy Barbara must…",
    model:
      "People in GSU's authority system execute the local rules (blame, favorites, do not surface bad news) as agents, not as independent moral actors. Once they have complied, going back is hard. A speech does not restore autonomy. Reverse it by changing who is the authority to obey: Barbara plus a few opinion leaders publicly model a different rule, make the new rule easy to comply with first (huddle script, no-shame question policy), and give cover so dissent from toxicity is not career suicide. Checks on Barbara's own new power keep her from becoming the next authority people agentically obey.",
    concepts: [
      { id: "agentic", label: "Agentic shift", aliases: ["agentic", "agent", "authority system", "obey", "autonomy"] },
      { id: "comply", label: "Sticky first compliance", aliases: ["compli", "hard to go back", "sticky"] },
      { id: "reverse", label: "How to reverse it", aliases: ["huddle", "model", "cover", "legitimate", "opinion leader"] },
    ],
  },
  {
    id: "q13",
    session: 0,
    prompt:
      "Synthesis: Write an action plan that uses at least one idea from Sessions 2, 4, 5, 6, and 8. Show how they build, not a laundry list.",
    stems: "I will decide using… I will not trust intuition because… The motivation diagnosis is… The job-design lever is… Influence without money looks like…",
    model:
      "Evidence (S2) codes off-site themes and pairs them with turnover/satisfaction so she does not chase the loudest story (S4 availability). Because the environment is unpredictable and she is new, she satisfices: three objectives (stop RN loss, restore basic relatedness, publish review criteria) and three options each (S4 3×3×3), with a tripwire. Motivation (S5): hygiene/relatedness first; fix instrumentality and equity with transparent reviews; do not pretend money is coming. Job design (S6): raise the MPS multipliers — autonomy over assignments and weekly feedback — plus identity via continuity. Influence (S8): referent/expert on the floor, unity language, public commitments, social proof from one senior. Sequence: diagnose with evidence → choose boundedly → move people with systems and the job → implement with power that is not carrots.",
    concepts: [
      { id: "s2", label: "Evidence (S2)", aliases: ["evidence", "off-site", "code", "metric"] },
      { id: "s4", label: "Decision (S4)", aliases: ["satisfice", "bounded", "premortem", "tripwire", "3x3", "3×3"] },
      { id: "s5", label: "Motivation (S5)", aliases: ["hygiene", "equity", "instrumentality", "expectancy"] },
      { id: "s6", label: "Job design (S6)", aliases: ["mps", "autonomy", "feedback", "jcm", "identity"] },
      { id: "s8", label: "Power (S8)", aliases: ["referent", "cialdini", "unity", "influence", "expert"] },
    ],
  },
]

export const QUIZ: McQuestion[] = [
  {
    id: "m1",
    session: 1,
    prompt: "Barbara replaces two 'negative' nurses and nothing else. Which course mistake is that?",
    choices: [
      { id: "a", text: "Treating an organizational and group problem as only individual" },
      { id: "b", text: "Using qualitative data when she needed quantitative data" },
      { id: "c", text: "Applying scientific management instead of ERG theory" },
      { id: "d", text: "Using referent power when she needed coercive power" },
    ],
    correct: "a",
    why: "Turnover, freeze, and blame norms live at group and org levels. Swapping people (P) without changing E is a Session 1 + 3 miss.",
  },
  {
    id: "m2",
    session: 2,
    prompt: "The anonymous off-site cards are best classified as:",
    choices: [
      { id: "a", text: "Scientific evidence" },
      { id: "b", text: "Organizational quantitative evidence" },
      { id: "c", text: "Qualitative stakeholder evidence" },
      { id: "d", text: "A programmed operational metric" },
    ],
    correct: "c",
    why: "Words/meaning from people affected by the decision. Pair them with org numbers (turnover, scores) so you do not overweight the loudest card.",
  },
  {
    id: "m3",
    session: 3,
    prompt: "B = f(P, E) implies Barbara should mostly:",
    choices: [
      { id: "a", text: "Send everyone to MBTI so types will match" },
      { id: "b", text: "Change the environment that currently rewards hazing and favoritism" },
      { id: "c", text: "Wait for the freeze to lift before doing anything" },
      { id: "d", text: "Hire only highly agreeable people" },
    ],
    correct: "b",
    why: "Behavior is an interaction. Personality workshops are slow and Barnum-prone. Fit improves when E changes.",
  },
  {
    id: "m4",
    session: 3,
    prompt: "Which is a terminal value in the GSU fight between seniors and juniors?",
    choices: [
      { id: "a", text: "How to precept a new nurse" },
      { id: "b", text: "Whether to use float pool coverage" },
      { id: "c", text: "Patient care / not harming surgical patients" },
      { id: "d", text: "Who gets the holiday schedule" },
    ],
    correct: "c",
    why: "Terminal = ends. The others are means (instrumental) or existence resources. Appeal to the shared end.",
  },
  {
    id: "m5",
    session: 4,
    prompt: "Why is intuition a weak model for Barbara's turnaround decision?",
    choices: [
      { id: "a", text: "She has no time pressure" },
      { id: "b", text: "She lacks manager-domain expertise in a unit that is not yet predictable for her" },
      { id: "c", text: "Intuition is never allowed in hospitals" },
      { id: "d", text: "The decision is programmed and operational" },
    ],
    correct: "b",
    why: "Intuition needs time pressure + predictable environment + domain expertise. She only clearly has time pressure. Satisfice instead.",
  },
  {
    id: "m6",
    session: 4,
    prompt: "Seniors call Megan a pest and stop teaching her. She then looks unskilled. That sequence is:",
    choices: [
      { id: "a", text: "Regression to the mean" },
      { id: "b", text: "Hindsight bias" },
      { id: "c", text: "Self-fulfilling prophecy (fed by a stereotype)" },
      { id: "d", text: "Escalation of commitment" },
    ],
    correct: "c",
    why: "Expectation changes how they treat her, which produces the 'evidence' they expected.",
  },
  {
    id: "m7",
    session: 4,
    prompt: "Blaming 'lazy juniors' while ignoring the freeze and float pool is:",
    choices: [
      { id: "a", text: "Self-serving bias about Barbara" },
      { id: "b", text: "Fundamental attribution error" },
      { id: "c", text: "Barnum effect" },
      { id: "d", text: "Instrumentality" },
    ],
    correct: "b",
    why: "FAE = others' behavior attributed to disposition, downplaying the situation.",
  },
  {
    id: "m8",
    session: 5,
    prompt: "Motivation and performance are distinct at GSU because:",
    choices: [
      { id: "a", text: "Nurses cannot possibly care about patients" },
      { id: "b", text: "People can be willing and still unable or not allowed to perform given staffing" },
      { id: "c", text: "Maslow proved performance creates motivation" },
      { id: "d", text: "Only hygiene matters in hospitals" },
    ],
    correct: "b",
    why: "Willing ≠ able ≠ allowed. Do not diagnose 'they don't care' from declining scores alone.",
  },
  {
    id: "m9",
    session: 5,
    prompt: "Putting up a 'nurse of the month' poster while staffing and peer hostility stay wrecked fails Herzberg because:",
    choices: [
      { id: "a", text: "Motivators cannot land while hygiene is broken" },
      { id: "b", text: "Posters are scientific evidence" },
      { id: "c", text: "Valence is always zero in nursing" },
      { id: "d", text: "ERG forbids recognition" },
    ],
    correct: "a",
    why: "Hygiene (conditions, supervision, relationships, policy) removes dissatisfaction. Recognition is a motivator that will bounce off a hostile, understaffed unit.",
  },
  {
    id: "m10",
    session: 5,
    prompt: "EMU hopes for teamwork and quality but the freeze + mystery reviews + no OT actually pay off 'survive your shift.' This is:",
    choices: [
      { id: "a", text: "An expectancy problem only" },
      { id: "b", text: "Kerr's alignment problem (hope for A, reward B)" },
      { id: "c", text: "The Barnum effect" },
      { id: "d", text: "Task identity" },
    ],
    correct: "b",
    why: "Classic reward folly. Name hope vs reward on the exam.",
  },
  {
    id: "m11",
    session: 5,
    prompt: "If a nurse believes 'even if I perform, nothing happens to reviews or thanks,' which term is near zero?",
    choices: [
      { id: "a", text: "Expectancy" },
      { id: "b", text: "Instrumentality" },
      { id: "c", text: "Openness" },
      { id: "d", text: "Task significance" },
    ],
    correct: "b",
    why: "Instrumentality is performance → outcome. Mystery reviews crush I. Expectancy is effort → performance.",
  },
  {
    id: "m12",
    session: 5,
    prompt: "Turnover after favoritism in scheduling is most cleanly an:",
    choices: [
      { id: "a", text: "Equity response (exit)" },
      { id: "b", text: "Agentic shift" },
      { id: "c", text: "Programmed decision" },
      { id: "d", text: "Increase in MPS" },
    ],
    correct: "a",
    why: "People restore unequal ratios by leaving, among other reactions.",
  },
  {
    id: "m13",
    session: 6,
    prompt: "MPS = ((V+I+S)/3) × A × F. GSU has very high significance. Why can MPS still be terrible?",
    choices: [
      { id: "a", text: "Significance is not in the formula" },
      { id: "b", text: "If autonomy or feedback is near zero, the product collapses" },
      { id: "c", text: "You add autonomy instead of multiplying" },
      { id: "d", text: "Only variety matters in nursing" },
    ],
    correct: "b",
    why: "A and F are multipliers. Raise those first, then identity.",
  },
  {
    id: "m14",
    session: 6,
    prompt: "Using the float pool as interchangeable coverage is closest to:",
    choices: [
      { id: "a", text: "Job crafting" },
      { id: "b", text: "Scientific management" },
      { id: "c", text: "Referent power" },
      { id: "d", text: "Terminal values" },
    ],
    correct: "b",
    why: "People as factors of production; efficiency of coverage over identity and relationships.",
  },
  {
    id: "m15",
    session: 7,
    prompt: "The heresy in 'nursing was my calling so I must have chosen wrong' is mainly:",
    choices: [
      { id: "a", text: "That work will automatically be bliss / one true calling determines fulfillment" },
      { id: "b", text: "That MPS cannot be calculated in hospitals" },
      { id: "c", text: "That Cialdini forbids meaning" },
      { id: "d", text: "That relatedness is an existence need" },
    ],
    correct: "a",
    why: "Calling heresies include one true calling and work-will-be-bliss. Meaning can be crafted in a hard assignment.",
  },
  {
    id: "m16",
    session: 7,
    prompt: "A senior nurse starts mentoring instead of hazing. Which craft is that?",
    choices: [
      { id: "a", text: "Perception crafting only" },
      { id: "b", text: "Task crafting only" },
      { id: "c", text: "Relationship crafting (and likely some task change)" },
      { id: "d", text: "Coercive power" },
    ],
    correct: "c",
    why: "Changing the nature of interactions is relationship crafting. Owning precepting can also be task crafting.",
  },
  {
    id: "m17",
    session: 8,
    prompt: "Under the freeze, which power bases are weakest for Barbara?",
    choices: [
      { id: "a", text: "Expert and referent" },
      { id: "b", text: "Reward and coercive" },
      { id: "c", text: "Legitimate only, forever" },
      { id: "d", text: "Dependence of RNs on her" },
    ],
    correct: "b",
    why: "No OT, hiring freeze, hard to fire. She must build expert and referent and use Cialdini.",
  },
  {
    id: "m18",
    session: 8,
    prompt: "Asking staff at the off-site to make a public, voluntary commitment to one new huddle norm is mainly:",
    choices: [
      { id: "a", text: "Scarcity" },
      { id: "b", text: "Consistency" },
      { id: "c", text: "Coercive power" },
      { id: "d", text: "Scientific management" },
    ],
    correct: "b",
    why: "People align with clear commitments, especially if active, public, and voluntary.",
  },
  {
    id: "m19",
    session: 8,
    prompt: "The agentic shift predicts that blame culture persists because:",
    choices: [
      { id: "a", text: "Everyone at GSU has low agreeableness" },
      { id: "b", text: "People come to see themselves as executing the unit's authority rules, and first compliance is sticky" },
      { id: "c", text: "MPS is too high" },
      { id: "d", text: "Barbara has too much reward power" },
    ],
    correct: "b",
    why: "A pep talk does not restore autonomy. Change the rule it is safe to obey.",
  },
  {
    id: "m20",
    session: 0,
    prompt: "Best 90-day stack under the freeze?",
    choices: [
      { id: "a", text: "Wait for money, then add bonuses, then redesign jobs" },
      { id: "b", text: "Evidence-code the off-site → satisfice on a few goals → fix I/equity and MPS multipliers → influence with Cialdini" },
      { id: "c", text: "MBTI for all staff, then fire low extraverts" },
      { id: "d", text: "Maximize with a fully rational model of every complaint card" },
    ],
    correct: "b",
    why: "That is how Sessions 2, 4, 5, 6, and 8 actually build. Rational maximizing and money-first plans fail the case constraints.",
  },
]

export const ESSAYS: Essay[] = [
  {
    id: "w1",
    title: "Diagnose then act",
    minutes: 25,
    prompt:
      "You are advising Barbara Norris at the end of her first month. Using course vocabulary, diagnose why GSU is failing and recommend a 90-day plan she can execute under the hiring freeze. Explicitly connect frameworks rather than listing them.",
    rubric: [
      { id: "levels", label: "Two+ levels of analysis", aliases: ["individual", "group", "team", "organiz", "level"] },
      { id: "evidence", label: "Evidence types, not just 'morale'", aliases: ["evidence", "turnover", "satisfaction", "off-site", "qualitative"] },
      { id: "lewin", label: "B = f(P, E) or fit", aliases: ["lewin", "fit", "person", "environment", "b = f"] },
      { id: "motivation", label: "A motivation theory with parts", aliases: ["hygiene", "expectancy", "instrumentality", "valence", "equity", "kerr", "alignment"] },
      { id: "job", label: "JCM / MPS or crafting", aliases: ["jcm", "mps", "autonomy", "feedback", "crafting", "identity"] },
      { id: "power", label: "Power / influence without money", aliases: ["referent", "expert", "cialdini", "unity", "consistency", "influence"] },
      { id: "fact", label: "Specific GSU facts", aliases: ["freeze", "float", "review", "favoritism", "junior", "senior", "overtime"] },
    ],
    model:
      "Start with org evidence (lowest satisfaction, highest turnover, declining patient scores) and qualitative off-site themes (teamwork, conflict, mystery reviews, physicians as order-givers). Three-level failure: individuals exhausted, groups in blame/favoritism, organization in freeze/no-OT. Lewin: do not treat seniors as fixed types; the environment currently pays off hazing and FAE toward juniors. Decision: nonprogrammed; satisfice. 90 days: (1) hygiene/relatedness — huddles, mixed pairs, float orientation; (2) instrumentality and equity — write and share review criteria, stop favoritism in scheduling; (3) JCM multipliers — assignment autonomy, weekly specific feedback, protect task identity; (4) influence — expert presence on the floor, unity identity, public commitments, social proof from one senior. Tripwire: another RN resignation triggers a meeting with the Director armed with coded evidence.",
  },
  {
    id: "w2",
    title: "Motivation stack",
    minutes: 20,
    prompt:
      "A classmate says the nurses are 'just unmotivated.' Write a response that uses need theory, goal setting, reinforcement alignment, expectancy, and equity. Show that 'unmotivated' is an incomplete individual-level label.",
    rubric: [
      { id: "distinct", label: "Motivation ≠ performance", aliases: ["performance", "willing", "able", "distinct"] },
      { id: "needs", label: "Herzberg or ERG with GSU facts", aliases: ["hygiene", "herzberg", "erg", "existence", "relatedness"] },
      { id: "smart", label: "SMART vs 'turn it around fast'", aliases: ["smart", "goal", "specific", "turn the unit"] },
      { id: "kerr", label: "Hope vs reward", aliases: ["kerr", "alignment", "hope", "reward"] },
      { id: "eiv", label: "E, I, and V named separately", aliases: ["expectancy", "instrumentality", "valence"] },
      { id: "equity", label: "Equity + turnover as response", aliases: ["equity", "favoritism", "turnover", "exit"] },
      { id: "lever", label: "What she can change without money", aliases: ["review", "huddle", "meaning", "jcm", "recognition"] },
    ],
    model:
      "Motivation is reasons for movement, not output. Hygiene/existence is broken (staffing, freeze, hostility), so two-factor theory predicts dissatisfaction even if someone loves nursing. Relatedness is blocked, so ERG regression looks like fights over schedules. Goals are vague. Alignment: hope for collaboration; reward surviving the shift. Expectancy: cannot perform (E), performance does not pay (I), extra shifts may be unwanted (V). Equity: favorites and equal pay for unequal load → exit. They may care intensely and still look unmotivated. Barbara changes I and equity (transparent reviews), E (huddles, smarter assignments), and valence/meaning (JCM/crafting), while SMART-ing a few goals the staff can actually hit.",
  },
  {
    id: "w3",
    title: "Power without a budget",
    minutes: 18,
    prompt:
      "Assume the freeze will not lift this year. How should Barbara build and use power, what dark-side risks does she personally face, and how do Cialdini plus the agentic shift shape her tactics?",
    rubric: [
      { id: "crler", label: "CRLER mapped to freeze", aliases: ["coercive", "reward", "legitimate", "expert", "referent"] },
      { id: "sis", label: "Nurses' dependence power", aliases: ["scarce", "substitut", "dependence", "important"] },
      { id: "dark", label: "New-power risk for Barbara", aliases: ["overconfiden", "objectify", "low-status", "checks", "dark"] },
      { id: "cialdini", label: "Four+ Cialdini tactics with GSU behaviors", aliases: ["liking", "reciprocity", "social proof", "consistency", "authority", "scarcity", "unity"] },
      { id: "agentic", label: "Agentic shift", aliases: ["agentic", "authority", "compli", "obey"] },
      { id: "check", label: "A check on Barbara herself", aliases: ["check", "published", "criteria", "dissent", "balance"] },
    ],
    model:
      "Reward and coercive bases are thin. Legitimate power is new and discounted. Expert and referent must be earned on the floor (she is already covering shifts — reciprocity + authority-as-expertise). Staff are scarce/important/nonsubstitutable, so they can resist. She matches the low-status person gains power risk: objectifying, overconfidence. Mitigate with published criteria and inviting dissent. Tactics: liking and unity to dissolve cliques; consistency via voluntary public commitments; social proof via one high-status mentor; scarcity of the reset; reciprocity on hard nights. Agentic shift: people obey the old GSU rules; she must make a new authority script that is safe to follow, not a pep talk.",
  },
]

export const CASE_FACTS = [
  {
    title: "The job",
    body: "Barbara Norris is about one month into nurse manager of the General Surgery Unit at Eastern Massachusetts University Hospital. She owns staffing, scheduling, and budget. Experienced RN, new master's in nursing administration, not an experienced large-unit manager. Contrast mentor: Betty Nolan.",
  },
  {
    title: "The numbers",
    body: "Lowest employee satisfaction and highest turnover of any EMU department. Patient satisfaction average but declining. Two RNs gone in her first month; three in the six months before she arrived. Hiring freeze, so she cannot replace them. No overtime.",
  },
  {
    title: "The night",
    body: "The case opens at 10pm. She has been there since 6:30am and plans to stay to help the shift transition and orient two float-pool RNs. Tired. Overwhelmed.",
  },
  {
    title: "The freeze",
    body: "Economic crisis: EMU enacted a hiring freeze, stopped overtime, and cut shift differentials. She cannot throw money at motivation. Float-pool nurses cover gaps and do not know GSU.",
  },
  {
    title: "The culture",
    body: "Infamous for confrontation, blaming, and favoritism. Staff who remain are dissatisfied, unmotivated, not functioning as a team. Juniors vs seniors (Megan Mahoney called a pest). PCAs in the mix. Physicians treating nurses as order-takers.",
  },
  {
    title: "The off-site",
    body: "29 people asked for one-to-ones soon after she started. She ran an off-site: anonymous cards for 2–3 frustrations. Themes: no collaboration, interpersonal/intergroup conflict, doctors, administration caring about money over care, favoritism, staffing, mystery performance reviews. It ran long and turned into a vent.",
  },
]

export const EXAM_BEAT =
  "Name the concept → define it in one sentence → cite a concrete GSU fact → say what Barbara should do."

export const STACK_LINE =
  "People (who they are) in situations (levels + freeze) perceive and choose imperfectly; diagnose that with evidence; move them with needs, goals, rewards, expectancy, and fairness; then with the job and how they narrate it; then use power and influence — or the old authority system will keep producing agentic compliance with blame."
