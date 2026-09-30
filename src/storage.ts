const KEY = "hrm540-studio-v1"

export type CardRating = "miss" | "partial" | "knew"

export type Progress = {
  cards: Record<string, { rating: CardRating; at: number }>
  apply: Record<string, { draft: string; lastHits: number; lastTotal: number }>
  essays: Record<string, { draft: string; lastHits: number; lastTotal: number }>
  quizBest: number
  quizLast: number
}

const empty = (): Progress => ({
  cards: {},
  apply: {},
  essays: {},
  quizBest: 0,
  quizLast: 0,
})

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    return { ...empty(), ...JSON.parse(raw) as Progress }
  } catch {
    return empty()
  }
}

export function saveProgress(p: Progress): void {
  localStorage.setItem(KEY, JSON.stringify(p))
}

export function patchProgress(fn: (p: Progress) => Progress): Progress {
  const next = fn(loadProgress())
  saveProgress(next)
  return next
}
