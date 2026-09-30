import { APPLY, ESSAYS, FLASHCARDS, QUIZ, SESSIONS } from '../data'
import type { Route } from '../routes'
import { loadProgress } from '../storage'

export function Home({ go }: { go: (r: Route) => void }) {
  const p = loadProgress()
  const rated = Object.keys(p.cards).length
  const knew = Object.values(p.cards).filter((c) => c.rating === 'knew').length
  const applied = Object.keys(p.apply).length
  const written = Object.keys(p.essays).length

  return (
    <div>
      <div className="kicker">HRM 540 · Barbara Norris</div>
      <h1>Study like the exam is a case, not a vocab list.</h1>
      <p className="lede">
        The midterm is written. You win by connecting frameworks to the General Surgery
        Unit — freeze, blame culture, mystery reviews, seniors vs juniors, no overtime.
        Drill cards, type answers, then see a popup of what a strong answer probably
        included.
      </p>
      <div className="grid stats" style={{ margin: '22px 0 26px' }}>
        <div className="card stat">
          <b>{knew}/{FLASHCARDS.length}</b>
          <span>cards marked knew</span>
        </div>
        <div className="card stat">
          <b>{rated}</b>
          <span>cards rated at least once</span>
        </div>
        <div className="card stat">
          <b>{applied}/{APPLY.length}</b>
          <span>typed case questions tried</span>
        </div>
        <div className="card stat">
          <b>{p.quizBest || '—'}</b>
          <span>best quiz / {QUIZ.length}</span>
        </div>
      </div>
      <div className="grid two">
        <a className="door" href="#/cards" onClick={(e) => { e.preventDefault(); go('cards') }}>
          <div className="num">01</div>
          <h2>Flashcards</h2>
          <p>Flip for definition, memory hook, and the GSU hook. Rate missed / partial / knew.</p>
        </a>
        <a className="door" href="#/apply" onClick={(e) => { e.preventDefault(); go('apply') }}>
          <div className="num">02</div>
          <h2>Type an answer</h2>
          <p>Exam-style prompts. Write, then open the popup: your words vs what you should have put.</p>
        </a>
        <a className="door" href="#/quiz" onClick={(e) => { e.preventDefault(); go('quiz') }}>
          <div className="num">03</div>
          <h2>Quick quiz</h2>
          <p>{QUIZ.length} multiple-choice traps that look like midterm distractors.</p>
        </a>
        <a className="door" href="#/write" onClick={(e) => { e.preventDefault(); go('write') }}>
          <div className="num">04</div>
          <h2>Full essays</h2>
          <p>{ESSAYS.length} timed-length prompts with auto-checked rubric chips in the popup.</p>
        </a>
      </div>
      <div className="space" />
      <div className="grid two">
        <a className="door" href="#/sessions" onClick={(e) => { e.preventDefault(); go('sessions') }}>
          <h2>Session maps</h2>
          <p>{SESSIONS.length} infographics: parts, how they stack, GSU hook.</p>
        </a>
        <a className="door" href="#/case" onClick={(e) => { e.preventDefault(); go('case') }}>
          <h2>Case facts</h2>
          <p>Cite-able GSU details so you stop writing generic “change the culture” essays.</p>
        </a>
      </div>
      {written > 0 && (
        <p className="kb" style={{ marginTop: 18 }}>
          You have draft text saved for {written} essay{written === 1 ? '' : 's'} on this browser.
        </p>
      )}
    </div>
  )
}
