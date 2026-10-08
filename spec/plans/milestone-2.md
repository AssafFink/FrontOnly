# Plan — Milestone 2: Working clock

## Goal
The page shows the real, live local time and today's date, and a button switches between 24-hour and 12-hour display. Function first — the look stays plain until Milestone 3.

**Done when:** the time matches my device clock, the seconds tick, the date is correct, and the format button works in both directions.

## Files to change
No new files.

| File | Change |
|------|--------|
| `index.html` | Remove the Milestone 1 status line; add the AM/PM label, the date line and the format button |
| `script.js` | Replace the Milestone 1 proof line with the clock logic |
| `styles.css` | A few plain rules so the new elements are readable (no real design yet) |
| `spec/MILESTONES.md` | Tick the three slices when built |

## Approach

### 1. `index.html`
Inside `<main>`, in this order:
- The time row:
  - `<time id="clock">00:00:00</time>` (already exists — kept)
  - `<span id="ampm"></span>` — empty in 24-hour format, `AM` / `PM` in 12-hour format
- `<p id="date"></p>` — the date line, filled by the script
- `<button id="format-toggle" type="button">12h</button>` — labeled with the format it switches **to** (per `DESIGN.md`)

Remove `<p id="status">` and its comment.

The button's final position (top-right corner) is a Milestone 3 concern; for now it simply sits below the date.

### 2. `script.js`
One small script, no libraries. Structure:

- **State:** one variable, `is24Hour`, starting as `true` (24-hour is the default). It is *not* saved between visits yet — remembering preferences is Slice 3.4.
- **`render()`** — the single function that draws everything:
  1. Read the current moment fresh from the device: `new Date()` (ADR-3 — never count seconds ourselves).
  2. Build the time text with two-digit padding:
     - 24-hour: `HH:MM:SS`, hours `00`–`23`, AM/PM label empty.
     - 12-hour: hours `01`–`12` (midnight and noon both show `12`), label `AM` before noon and `PM` from noon.
  3. Build the date text in English with `toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })`, which gives `Thursday, October 8, 2026`.
  4. Write the three texts into `#clock`, `#ampm` and `#date`.
  Because the date is rebuilt on every tick from the same fresh reading, it changes by itself at midnight with no special code.
- **Ticking:** after each `render()`, schedule the next one for the start of the next second (`setTimeout` for `1000 - milliseconds` of the current moment). This keeps the display in step with the device clock, instead of a fixed 1-second interval that slowly slips and occasionally skips or repeats a second.
- **Coming back to the tab:** listen for `visibilitychange` and call `render()` when the page becomes visible, so the time is correct the instant the visitor returns (browsers pause timers in background tabs).
- **Format button:** on click, flip `is24Hour`, set the button label to the *other* format (`12h` <-> `24h`), and call `render()` immediately so the change is instant rather than waiting for the next tick.
- Run `render()` once as soon as the script loads, so the real time replaces the `00:00:00` placeholder immediately.

### 3. `styles.css`
Plain, temporary rules only:
- AM/PM label: same monospace font, clearly smaller than the digits, a small gap after the time.
- Date line: light text, readable size, some space above it.
- Button: some space above it; browser default look is fine.

Not in this milestone: Google Fonts, accent color, light theme, pill-shaped buttons, top-right placement, responsive sizing, saved preferences, accessibility polish, the "JavaScript disabled" message. All of that is Milestone 3.

## What the finished page looks like
Dark page, centered:

```
17:05:09
Thursday, October 8, 2026
[ 12h ]
```

and after pressing the button:

```
05:05:09 PM
Thursday, October 8, 2026
[ 24h ]
```

## How Claude verifies before handing over
- Load the page in a real browser and confirm the time shown equals the device time and advances by one each second.
- Run `render()` against fixed test moments (by temporarily substituting the clock in the browser's test session — no test code is added to the project) to check the tricky cases:
  - `00:00:05` -> `12:00:05 AM` in 12-hour format
  - `12:00:05` -> `12:00:05 PM`
  - `13:07:09` -> `01:07:09 PM`
  - `09:03:04` -> leading zeros kept in both formats
  - crossing midnight -> the date line moves to the next day
- Confirm no errors in the browser console.

## How to check it (for the developer)
1. Open `index.html` — the real time appears immediately, not `00:00:00`.
2. Compare with the clock in the corner of your screen — same hour, minute and second.
3. Watch for 10 seconds — the seconds advance one by one, no jumps.
4. The date line shows today's day and date in English.
5. Press `12h` — the time switches to 12-hour with `AM` or `PM`, and the button now says `24h`. Press again — back to 24-hour.
6. Switch to another tab for a minute and come back — the time is correct straight away.
7. `F12` -> **Console** — no red error lines.

Reloading the page resets the format to 24-hour. That is expected for now; it is fixed in Milestone 3.

## Rules for the build
- Code comments in English only.
- Keep it minimal — nothing from Milestone 3.
- No commit or push without asking.
- After building: tick the three Milestone 2 slices in `spec/MILESTONES.md`, open the page for checking, then stop and wait for approval.
