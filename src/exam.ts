import type { Concept } from './data'

export type ExamQuestion = {
  id: string
  n: number
  combo: boolean
  uses: string
  prompt: string
  stems: string
  model: string
  concepts: Concept[]
}

export const EXAM: ExamQuestion[] = [
  {
    id: "e1",
    n: 1,
    combo: false,
    uses: "Session 1",
    prompt:
      "Diagnose the General Surgery Unit at all three levels of analysis. Why would an answer that only talks about Barbara's personality be incomplete?",
    stems: "Individual… Group… Organization… Therefore a personality-only fix fails because…",
    model:
      "Individual: exhaustion, low self-efficacy (new manager; juniors called pests), values around patient care colliding with daily work. Group: no teamwork, long-time nurses versus newer nurses versus patient care assistants, blame and favoritism as norms. Organization: hiring freeze, no overtime, mystery reviews, physicians as order-takers, the General Surgery Unit's reputation as the hospital's worst unit. A personality-only answer lives on one floor. The same people might function on Betty Nolan's unit — so the fix has to hit group norms and org constraints, not just 'be a better leader.'",
    concepts: [
      { id: "ind", label: "Individual level", aliases: ["individual", "self-efficacy", "personality", "exhaust", "values"] },
      { id: "grp", label: "Group level", aliases: ["group", "team", "senior", "junior", "favoritism", "blame", "clique"] },
      { id: "org", label: "Organizational level", aliases: ["organiz", "freeze", "overtime", "review", "hospital", "emu"] },
    ],
  },
  {
    id: "e2",
    n: 2,
    combo: false,
    uses: "Session 2",
    prompt:
      "After the off-site, Barbara has a pile of anonymous complaint cards. Using the four types of evidence, what does she already have, what is she over-weighting, and what should she collect next?",
    stems: "Scientific… Organizational… Experiential… Stakeholder… She should next…",
    model:
      "Organizational: lowest satisfaction, highest turnover, declining patient scores, 29 one-to-one requests, two registered nurses gone in month one. Stakeholder/qualitative: the cards — rich meaning, not a random sample (availability risk). Experiential: her years as a registered nurse and Betty Nolan; she lacks manager-domain reps, so gut is not enough. Scientific: research on equity, Job Characteristics Model, influence. Over-weighting: the loudest card. Next: code themes, pair each with a metric, write a hypothesis (e.g. public review criteria → perceived equity) instead of trying to fix every card.",
    concepts: [
      { id: "sci", label: "Scientific", aliases: ["scientific", "research"] },
      { id: "org", label: "Organizational", aliases: ["organiz", "turnover", "satisfaction", "score", "metric"] },
      { id: "exp", label: "Experiential", aliases: ["experien", "nolan", "gut"] },
      { id: "stk", label: "Stakeholder", aliases: ["stakeholder", "card", "off-site", "nurse", "patient"] },
    ],
  },
  {
    id: "e3",
    n: 3,
    combo: false,
    uses: "Session 3",
    prompt:
      "Apply B = f(P, E) and fit to Barbara and to a senior nurse who hazes juniors. Should she change P or E? Why?",
    stems: "Barbara's P… the General Surgery Unit's E… The senior's behavior is… The lever is…",
    model:
      "Barbara: well-liked registered nurse with a new MS (P) in freeze + blame (E). Staying from 6:30am past 10pm is the interaction, not 'she is weak.' The senior may be low-agreeableness (P), but E currently rewards hazing (status, control of scarce help). Changing P (personality workshop, Myers-Briggs Type Indicator) is slow and Barnum-prone. Change E: mentoring as a visible praised task, stop unofficial gatekeeper power, appeal to shared terminal value of patient safety. Do not demonize.",
    concepts: [
      { id: "lewin", label: "B = f(P, E)", aliases: ["lewin", "b = f", "person", "environment", "fit"] },
      { id: "e", label: "Change the environment", aliases: ["environment", "change e", "reward", "mentoring", "norm"] },
      { id: "val", label: "Values / don't demonize", aliases: ["value", "terminal", "demoniz", "patient"] },
    ],
  },
  {
    id: "e4",
    n: 4,
    combo: true,
    uses: "Sessions 3 + 4",
    prompt:
      "Seniors call Megan a pest and stop teaching her; she then looks unskilled. Combine fit/Lewin with perceptual and attribution traps. What should Barbara change so the prophecy cannot run?",
    stems: "Using B = f(P,E)… The stereotype is… Self-fulfilling when… fundamental attribution error is… So Barbara changes E by…",
    model:
      "Lewin: do not read Megan as a low-competence person. The environment (no orientation, short staff, hostile seniors) is producing the behavior. Stereotype: new nurses are pests. Self-fulfilling prophecy: withhold teaching → she asks more or stops asking → looks needy or unskilled → 'confirmed.' fundamental attribution error: questions attributed to her disposition, situation downplayed. Barbara changes E: structured precepting, public norms for direct feedback, mixed-seniority pairs — so the prophecy has no runway. A personality label on Megan would be the same trap the seniors are using.",
    concepts: [
      { id: "lewin", label: "Lewin / environment", aliases: ["lewin", "environment", "fit", "situation"] },
      { id: "st", label: "Stereotype", aliases: ["stereotype", "pest"] },
      { id: "sfp", label: "Self-fulfilling prophecy", aliases: ["self-fulfilling", "prophecy", "withhold"] },
      { id: "fae", label: "Fundamental attribution error", aliases: ["fae", "fundamental", "disposition", "attribution"] },
    ],
  },
  {
    id: "e5",
    n: 5,
    combo: false,
    uses: "Session 4",
    prompt:
      "Is turning the unit around programmed or nonprogrammed, and which decision model should Barbara use? Name two traps in her first month and one tool for each.",
    stems: "This is ___ because… Intuition is/is not appropriate because… Trap + tool… Trap + tool…",
    model:
      "Nonprogrammed, tactical, under crisis. Intuition needs time pressure AND a predictable environment AND domain expertise. She has time pressure only — the General Surgery Unit is not yet predictable for her, and she lacks manager-domain expertise — so bounded rationality: satisfice. Traps: fundamental attribution error (lazy newer nurses vs hiring freeze and nurses borrowed from other units); availability (loudest off-site stories); escalation if she keeps adding one-on-one meetings because she already started; yes/no framing of the freeze. Tools: premortem; 3 futures × 3 objectives × 3 options; outsider/future chief nursing officer view; tripwire if two more registered nurses give notice; devil's advocate.",
    concepts: [
      { id: "np", label: "Nonprogrammed", aliases: ["nonprogrammed", "non-programmed", "tactical", "crisis"] },
      { id: "sat", label: "Satisfice / bounded", aliases: ["satisfice", "bounded", "intuition"] },
      { id: "tool", label: "Trap + tool", aliases: ["fae", "availability", "escalat", "premortem", "tripwire", "3"] },
    ],
  },
  {
    id: "e6",
    n: 6,
    combo: true,
    uses: "Session 5 (Herzberg + expectancy × instrumentality × valence)",
    prompt:
      "A classmate says the nurses are 'just unmotivated.' Combine two-factor theory with expectancy theory to show why that label is incomplete under the freeze.",
    stems: "Motivation ≠ performance… Hygiene is… Motivators are… E is… I is… V is… So Barbara can still change…",
    model:
      "Motivation is reasons for movement, not output. Willing ≠ able ≠ allowed. Hygiene is wrecked (staffing, freeze, hostility, opaque policy), so Herzberg predicts dissatisfaction even if they love nursing. Motivators (recognition, growth, the work itself) cannot land on broken hygiene. Expectancy: E low (cannot perform with this census and nurses borrowed from other units); I low (mystery reviews, no overtime, no thanks in the file); V mixed (patient care valued, extra uncompensated shifts not). Any zero in expectancy × instrumentality × valence kills motivation. They may care intensely and still look unmotivated. Without money: raise I and hygiene-fairness via transparent reviews; raise E via huddles and smarter assignments.",
    concepts: [
      { id: "mp", label: "Motivation ≠ performance", aliases: ["performance", "willing", "able", "distinct"] },
      { id: "hyg", label: "Hygiene / motivators", aliases: ["hygiene", "herzberg", "motivator", "dissatisf"] },
      { id: "eiv", label: "Expectancy, instrumentality, and valence", aliases: ["expectancy", "instrumentality", "valence"] },
    ],
  },
  {
    id: "e7",
    n: 7,
    combo: true,
    uses: "Session 5 (Kerr + equity)",
    prompt:
      "Eastern Massachusetts University Hospital hopes for teamwork and quality. Combine Kerr's alignment problem with equity theory to explain turnover and withholding on the General Surgery Unit. What can Barbara change without new full-time positions or overtime?",
    stems: "We hope for… We actually reward… Inequity looks like… They restore the ratio by… Barbara's no-money levers are…",
    model:
      "Kerr: hope for teamwork, quality, surfacing problems; reward survive-your-shift, looking busy, silence, and favoritism. Alignment problem. Equity: same outcomes for unequal inputs; favorites get better schedules. People restore the ratio by lowering effort, distorting, switching referents, or exiting — turnover is an equity response, not mysterious culture. No-money levers: publish review criteria (instrumentality + fairness), stop favoritism in assignments, recognize extra load in the file and in huddles, make teamwork visible so it is no longer unrewarded.",
    concepts: [
      { id: "kerr", label: "Alignment / Kerr", aliases: ["kerr", "alignment", "hope", "reward"] },
      { id: "eq", label: "Equity", aliases: ["equity", "fair", "favoritism", "referent", "ratio"] },
      { id: "exit", label: "Turnover as response", aliases: ["turnover", "exit", "withhold"] },
    ],
  },
  {
    id: "e8",
    n: 8,
    combo: false,
    uses: "Session 6",
    prompt:
      "Score nursing on this unit on variety, identity, significance, autonomy, and feedback. Why can the Motivating Potential Score be low when task significance is very high, and which two characteristics should Barbara raise first?",
    stems: "V… I… S… A… F… Motivating Potential Score = … so the fatal factors are…",
    model:
      "Significance: high (surgical patients). Variety: mixed-to-low because chaos crowds skilled nursing. Identity: low — care chopped across shifts and nurses borrowed from other units. Autonomy: low. Feedback: low or punishing. Motivating Potential Score = ((V+I+S)/3) × A × F. High S is averaged with weak V and I, then multiplied by near-zero A and F, so the score collapses. Raise autonomy and feedback first — they are the multipliers. Then rebuild identity via continuity / beneficiary contact.",
    concepts: [
      { id: "visaf", label: "Five job characteristics named", aliases: ["variety", "identity", "significance", "autonomy", "feedback", "visaf"] },
      { id: "mps", label: "Motivating Potential Score formula", aliases: ["mps", "/3", "/ 3", "multiply"] },
      { id: "af", label: "Raise autonomy and feedback", aliases: ["multiplier", "zero", "autonomy", "feedback"] },
    ],
  },
  {
    id: "e9",
    n: 9,
    combo: true,
    uses: "Sessions 6 + 7",
    prompt:
      "The freeze will not lift. Combine the Job Characteristics Model with job crafting: what should Barbara redesign from above, and what can nurses recraft from inside the role?",
    stems: "Job Characteristics Model / Motivating Potential Score from above… Crafting perceptions… tasks… relationships… This beats 'find your calling' because…",
    model:
      "From above (the Job Characteristics Model): she cannot add full-time staff but she can raise the multipliers — some assignment autonomy, weekly specific non-punitive feedback — and protect identity (same nurse follows a patient when possible; better float orientation so substitutes do not shred identity). From inside (crafting): perceptions — narrate the General Surgery Unit as protecting post-op patients through a crisis, not as the hospital's problem child. Tasks — own a bounded extra (precepting checklist, pain protocol), not infinite extra shifts. Relationships — mentoring pairs instead of hazing. The heresy to reject: 'nursing was my calling so I chose wrong.' Passion can follow mastery of these crafts; it does not have to precede them.",
    concepts: [
      { id: "jcm", label: "Job Characteristics Model / Motivating Potential Score", aliases: ["jcm", "mps", "autonomy", "feedback", "identity"] },
      { id: "cr", label: "Three crafts", aliases: ["perception", "task", "relationship", "crafting", "mentor"] },
      { id: "her", label: "Calling heresy", aliases: ["calling", "heresy", "passion"] },
    ],
  },
  {
    id: "e10",
    n: 10,
    combo: true,
    uses: "Session 8 (five power bases + Cialdini)",
    prompt:
      "Map Barbara's power with the five bases (coercive, reward, legitimate, expert, referent) and dependence (scarcity, importance, substitutability). Why will Cialdini matter more than reward or coercive power for 90 days? Give at least four tactics tied to behaviors on her unit.",
    stems: "Coercive… Reward… Legitimate… Expert… Referent… Nurses' dependence power… Tactic + a behavior from her unit…",
    model:
      "Coercive: weak (hard to fire; culture already fearful). Reward: stripped (freeze, no overtime). Legitimate: she has the title; prior managers spent it. Expert: earn it on the floor (she already stays to cover shifts). Referent: possible from being a well-liked registered nurse, now 'management.' Dependence: registered nurses are scarce, important, poorly substitutable (nurses borrowed from other units are a bad substitute) — they can squeeze her. Tactics: liking (similarities, praise); unity ('we are this unit'); consistency (public voluntary commitments from the off-site); social proof (one respected senior who mentors); authority-as-expertise not just title; reciprocity on brutal shifts; scarcity of this reset window.",
    concepts: [
      { id: "bases", label: "Five power bases", aliases: ["coercive", "reward", "legitimate", "expert", "referent"] },
      { id: "sis", label: "Dependence (scarcity, importance, substitutability)", aliases: ["scarce", "scarcity", "substitut", "dependence", "important"] },
      { id: "c7", label: "Cialdini tactics", aliases: ["cialdini", "liking", "reciprocity", "social proof", "consistency", "unity", "authority"] },
    ],
  },
  {
    id: "e11",
    n: 11,
    combo: true,
    uses: "Sessions 1 + 8",
    prompt:
      "Combine the group/org level with the agentic shift: why will 'just tell them to stop the blame culture' fail, and what would actually reverse it?",
    stems: "Blame lives at which level… Agentic shift means… First compliance is… To restore autonomy… A check on Barbara because…",
    model:
      "Blame is a group/org norm, not only a few mean individuals (Session 1). Agentic shift (Session 8): people in the General Surgery Unit's authority system execute local rules (blame, favorites, do not surface bad news) as agents, not as independent moral actors. First compliance is sticky; a speech does not restore autonomy. Reverse it by changing which authority is safe to obey: Barbara plus opinion leaders model a new rule, make the first compliance easy (huddle script, no-shame questions), and give cover so dissent from toxicity is not career suicide. She is a low-status person who just gained power — publish criteria and invite dissent so she does not become the next authority people agentically obey.",
    concepts: [
      { id: "lvl", label: "Group / org level", aliases: ["group", "organiz", "norm", "culture", "level"] },
      { id: "ag", label: "Agentic shift", aliases: ["agentic", "agent", "authority", "obey", "autonomy"] },
      { id: "rev", label: "How to reverse", aliases: ["huddle", "model", "cover", "opinion", "check"] },
    ],
  },
  {
    id: "e12",
    n: 12,
    combo: true,
    uses: "Sessions 2, 4, 5, 6, and 8",
    prompt:
      "Write a 90-day plan under the freeze that uses at least five sessions. Show how they build — not a laundry list.",
    stems: "I will decide using evidence by… I will not maximize because… Motivation lever… Job-design lever… Influence without money…",
    model:
      "Evidence (Session 2): code off-site themes and pair them with turnover/satisfaction so she does not chase the loudest story (Session 4 availability). Because the unit is unpredictable and she is new, she satisfices (Session 4): three objectives (stop registered-nurse resignations, restore relatedness, publish review criteria) × three options, with a tripwire. Motivation (Session 5): hygiene/relatedness first; fix instrumentality and equity with transparent reviews — do not pretend money is coming. Job design (Session 6): raise Motivating Potential Score multipliers (assignment autonomy, weekly feedback) plus identity via continuity. Influence (Session 8): referent/expert on the floor, unity language, public commitments, social proof from one senior. Sequence: diagnose with evidence → choose boundedly → move people with systems and the job → implement with power that is not carrots.",
    concepts: [
      { id: "s2", label: "Evidence (Session 2)", aliases: ["evidence", "off-site", "code", "metric"] },
      { id: "s4", label: "Decision (Session 4)", aliases: ["satisfice", "bounded", "premortem", "tripwire"] },
      { id: "s5", label: "Motivation (Session 5)", aliases: ["hygiene", "equity", "instrumentality", "expectancy"] },
      { id: "s6", label: "Job design (Session 6)", aliases: ["mps", "autonomy", "feedback", "jcm", "identity"] },
      { id: "s8", label: "Power (Session 8)", aliases: ["referent", "cialdini", "unity", "influence", "expert"] },
    ],
  },
]
