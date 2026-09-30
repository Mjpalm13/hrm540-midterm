import { APPLY, EXAM_BEAT, FLASHCARDS, QUIZ, SESSIONS, STACK_LINE } from '../data'
import type { Route } from '../routes'
import { loadProgress } from '../storage'

export function Home({ go }: { go: (r: Route, session?: number) => void }) {
  const p = loadProgress()
  const knew = Object.values(p.cards).filter((c) => c.rating === 'knew').length
  const applied = Object.keys(p.apply).length

  return (
    <div>
      <div className="kicker">HRM 540 · four study sections</div>
      <h1>Learn it, connect it, drill it, then write it onto GSU.</h1>
      <p className="lede">
        The midterm is a written case. Use the sections in order: study each session
        (infographics, vocab, memory tricks), see how frameworks stack, flip cards, then
        type Barbara Norris answers and compare to a strong model.
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
            All {SESSIONS.length} sessions: diagram, parts to name, memorize tips, worked GSU
            example, and the usual exam miss.
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
            Term on the front. Definition, memory hook, and GSU hook on the back. Rate missed
            / partial / knew. Filter by session.
          </p>
        </a>
        <a className="door" href="#/case" onClick={(e) => { e.preventDefault(); go('case') }}>
          <div className="num">Cite, don’t vibe</div>
          <h2>Case facts</h2>
          <p>
            Freeze, float pool, 29 one-to-ones, off-site cards, mystery reviews, seniors vs
            juniors. Stock these for every written answer.
          </p>
        </a>
      </div>

      <h2 className="section-title">3. Apply to Barbara Norris</h2>
      <div className="grid two">
        <a className="door" href="#/apply" onClick={(e) => { e.preventDefault(); go('apply') }}>
          <div className="num">{APPLY.length} prompts</div>
          <h2>Type, then see a strong answer</h2>
          <p>
            Write how a concept maps onto GSU. A popup shows what you wrote next to what
            would most likely be a strong exam answer, plus missing course ideas.
          </p>
        </a>
        <a className="door" href="#/write" onClick={(e) => { e.preventDefault(); go('write') }}>
          <div className="num">Full essays</div>
          <h2>Exam-length practice</h2>
          <p>
            Optional timer. Same popup with a rubric scan. Stack frameworks instead of
            listing them.
          </p>
        </a>
      </div>

      <h2 className="section-title">4. Quick checks</h2>
      <a className="door" href="#/quiz" onClick={(e) => { e.preventDefault(); go('quiz') }}>
        <div className="num">Multiple choice</div>
        <h2>Trap quiz</h2>
        <p>Distractors that look like midterm mistakes: wrong level, E vs I vs V, MPS zeros, intuition misuse.</p>
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
