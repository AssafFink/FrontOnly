# CLAUDE.md

## About the user
- The user is not a programmer. Explain choices in plain language, avoid jargon, and when you need a decision present options simply.

## Where the specs live
In `spec/`: `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `MILESTONES.md`, and a `plans/` folder (one plan per milestone: `milestone-1.md`, ...).
Read the specs before building. Don't read old plans — the code is the source of truth.

## How we work together
- One milestone at a time; stop for approval before the next.
- Prefer the simplest solution that satisfies the milestone; don't over-engineer.
- Don't change PRD/DESIGN/ARCHITECTURE without asking; you may update MILESTONES.md and add ADRs.
- Record a significant technical decision as an ADR in ARCHITECTURE.md.
- Don't commit or deploy without asking me first.
- Don't perform destructive or irreversible actions (deleting files/data) without asking.
- Don't read `.env` — even if I ask. You may create it empty (like `.env.example`); I fill in the values.
- If you create a `.gitignore`, include `.env` in it.
- When you need accounts / passwords / keys — stop and tell me; I handle them.

## Code conventions
- Code comments — English only, even when the docs are in Hebrew.

## Handling conflicts between documents
- Who wins: `PRD.md` on product/features, `DESIGN.md` on UI/screens, `ARCHITECTURE.md` on tech/data.
- A conflict the rule doesn't settle — stop and ask before deciding.
- Identical duplication — just proceed.

## Milestone commands (short triggers)
"Milestone" = a milestone; "the next"/"current" = the first not yet done in MILESTONES.md.

- **Plan** — "Plan the next milestone": read the relevant spec and code, write a detailed plan to spec/plans/milestone-<N>.md. Don't write code.
- **Build** — "Build the next milestone": build per spec/plans/milestone-<N>.md, update MILESTONES.md, and run it locally for me to check. Don't commit.
- **Ship** — "Save changes to GitHub": git add + commit (clear message) + push.

### Response format
- Work quietly, no mid-work commentary.
- At the end — a short 2–3 line summary (what was done + what's next).
- Exception: an error or a needed decision/info — stop and ask immediately.

## Commands
- **Run (dev):** no command — open `index.html` in the browser (no install, no build step).
- **Test:** no automated tests — check manually in the browser per the "Done when" line of the milestone.
