# GSU Study Studio

Interactive study site for **HRM 540** — vocab, frameworks, and written answers tied to the case *Barbara Norris: Leading Change in the General Surgery Unit*.

Live: **https://mjpalm13.github.io/hrm540-midterm/**

## How to study

1. **Cards** — flip, then rate missed / partial / knew. Keyboard: space, arrows, 1 / 2 / 3.
2. **Type** — write a case answer, then **Check what I should have put**. A popup shows your text next to a model and flags course ideas it did not find.
3. **Quiz** — 20 multiple-choice traps.
4. **Essays** — three full prompts with an optional timer and the same comparison popup.
5. **Sessions / Case** — infographics and cite-able facts.

Progress is stored in your browser (`localStorage`).

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds with base path `/hrm540-midterm/` and publishes GitHub Pages.
