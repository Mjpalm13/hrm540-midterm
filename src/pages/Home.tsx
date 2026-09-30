import { APPLY, EXAM_BEAT, FLASHCARDS, QUIZ, SESSIONS, STACK_LINE } from '../data'
import type { Route } from '../routes'
import { loadProgress } from '../storage'

export function Home({ go }: { go: (r: Route, session?: number) => void }) {
  const p = loadProgress()
  const knew = Object.values(p.cards).filter((c) => c.rating === 'knew').length
  const applied = Object.keys(p.apply).length

  return (
    <div>
      <div className="kicker">Midterm 1 Prep · HRM 540</div>
      <h1>Learn it, connect it, drill it, then write it onto the case.</h1>
      <p className="lede">
        The midterm is fully written: 12 questions on the Barbara Norris case. Some items
        use one framework; some combine two or more. Learn each session, see how they
        stack, then sit a 12-question practice exam and compare to a strong model.
      </p>
      <p className="kb">
        Progress on this browser: {knew}/{FLASHCARDS.length} cards marked knew · {applied}/{APPLY.length} case
        questions tried · quiz best {p.quizBest || '—'}/{QUIZ.length}
      </p>

      <h2 className="section-title">1. Learn the material</h2>
      <div className="grid two">
        <a className="door" href="#/learn" onClick={(e) => { e.preventDefault(); go('learn', 1) }}>
          <div className="num">Learn by session</div>
          <h2>Infographics + resources</h2>
          <p>
            All {SESSIONS.length} sessions, in depth: the slide frameworks as diagrams (levels, Lewin,
            decision process, Maslow, Kerr, job characteristics, crafting, Cialdini), then every box
            mapped onto Barbara’s unit.
          </p>
        </a>
        <a className="door" href="#/connect" onClick={(e) => { e.preventDefault(); go('connect') }}>
          <div className="num">How they connect</div>
          <h2>The stack</h2>
          <p>
            Later sessions do not replace earlier ones. Each adds a question about the same
            unit. This is the spine of a full essay.
          </p>
        </a>
      </div>

      <h2 className="section-title">2. Memorize</h2>
      <div className="grid two">
        <a className="door" href="#/cards" onClick={(e) => { e.preventDefault(); go('cards') }}>
          <div className="num">{FLASHCARDS.length} cards</div>
          <h2>Flashcards</h2>
          <p>
            Term on the front. Definition, memory hook, and how it shows up in the case on the back. Rate missed
            / partial / knew. Filter by session.
          </p>
        </a>
        <a className="door" href="#/case" onClick={(e) => { e.preventDefault(); go('case') }}>
          <div className="num">Cite, don’t vibe</div>
          <h2>Case facts</h2>
          <p>
            Hiring freeze, nurses borrowed from other units, 29 one-on-one requests, off-site
            complaint cards, mystery reviews, long-time nurses versus newer nurses. Stock
            these for every written answer.
          </p>
        </a>
      </div>

      <h2 className="section-title">3. Apply to Barbara Norris</h2>
      <div className="grid two">
        <a className="door" href="#/exam" onClick={(e) => { e.preventDefault(); go('exam') }}>
          <div className="num">12 questions</div>
          <h2>Practice exam</h2>
          <p>
            Matches the real test length. Several items combine frameworks. Type, then see
            what a strong answer would most likely include.
          </p>
        </a>
        <a className="door" href="#/apply" onClick={(e) => { e.preventDefault(); go('apply') }}>
          <div className="num">{APPLY.length} extra drills</div>
          <h2>More case questions</h2>
          <p>
            Extra typed prompts by session if you want more reps after the 12-question set.
          </p>
        </a>
      </div>

      <h2 className="section-title">4. Quick checks</h2>
      <a className="door" href="#/quiz" onClick={(e) => { e.preventDefault(); go('quiz') }}>
        <div className="num">Multiple choice</div>
        <h2>Trap quiz</h2>
        <p>Distractors that look like midterm mistakes: wrong level of analysis, expectancy vs instrumentality vs valence, Motivating Potential Score zeros, misusing intuition.</p>
      </a>

      <div className="callout ink" style={{ marginTop: 22 }}>
        <div className="kicker">Four-beat on every concept</div>
        <p style={{ margin: 0, color: '#f4efe4' }}>{EXAM_BEAT}</p>
        <p className="kb" style={{ margin: '10px 0 0', color: '#d7cfc2' }}>
          {STACK_LINE}
        </p>
      </div>
    </div>
  )
}
