import type { Concept } from './data'

export type GradedConcept = Concept & { hit: boolean }

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9×x+\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function gradeText(text: string, concepts: Concept[]): GradedConcept[] {
  const hay = normalize(text)
  return concepts.map((c) => ({
    ...c,
    hit: c.aliases.some((alias) => hay.includes(normalize(alias))),
  }))
}

export function hitCount(graded: GradedConcept[]): { hit: number; total: number } {
  return { hit: graded.filter((g) => g.hit).length, total: graded.length }
}

export function scoreLabel(hit: number, total: number): string {
  if (total === 0) return "No rubric"
  const r = hit / total
  if (r >= 0.8) return "Strong coverage"
  if (r >= 0.5) return "Partial — add the missing pieces"
  if (r > 0) return "Thin — more course language needed"
  return "Start by naming the frameworks"
}

export function wordCount(text: string): number {
  const parts = text.trim().split(/\s+/).filter(Boolean)
  return parts.length
}
