# Plan — Milestone 3: Design & preferences

## Goal
The clock becomes beautiful and remembers the visitor's choices: the full look from `DESIGN.md`, a dark/light theme button, sizing that fits any screen, and saved preferences.

**Done when:** the page matches `DESIGN.md` in both themes, looks right on a phone-sized and a desktop-sized window, and my choices are still there after reloading the page.

## Files

| File | Change |
|------|--------|
| `index.html` | Fonts, page details, the theme button, restructured time row, "no JavaScript" message |
| `styles.css` | Rewritten: the real design replaces the temporary Milestone 2 rules |
| `script.js` | Theme toggle, saved preferences, small accessibility updates |
| `favicon.svg` | **New** — the small icon shown on the browser tab |
| `spec/MILESTONES.md` | Tick the five slices when built |

Still no libraries and no build step.

## Slice 3.1 — Apply the style guide

### `index.html`
- **Fonts:** load JetBrains Mono (weight 500) and Inter (weights 400, 500) from Google Fonts, with the two `preconnect` hints and `display=swap` so text appears immediately in the fallback font and upgrades when the font arrives.
- **Controls:** move the format button out of `<main>` into a small `<header>` and add the theme button next to it:
  - `<button id="format-toggle" type="button">12h</button>`
  - `<button id="theme-toggle" type="button">Light</button>`
- **Time row:** split the time into separate pieces so the colons can take the accent color:
  `<time id="clock">` containing `<span id="hours">`, a colon span, `<span id="minutes">`, a colon span, `<span id="seconds">`; then `<span id="ampm">` right after it.

### `styles.css`
- **Colors as named variables** on the page root, using the exact dark-theme values from `DESIGN.md` (background, text, muted text, accent, button border). Every rule uses the variables, never a raw color — this is what makes the light theme a small addition in Slice 3.3.
- **Layout:** the page fills the screen; `<main>` sits in the exact center; the `<header>` with the two buttons is pinned to the top-right corner with comfortable spacing from the edges.
- **Time:** JetBrains Mono, medium weight, main text color; fixed-width digits so nothing shifts as they change. Colons and the AM/PM label in the accent color.
- **AM/PM:** Inter, about one third of the digit size, sitting next to the seconds.
- **Date:** Inter, muted color, slightly widened letter spacing.
- **Buttons:** pill-shaped, transparent background, thin border, muted label; on hover and on keyboard focus the border and label turn to the accent color.
- Fallback fonts declared after each Google font (device monospace / device sans-serif).

### `script.js`
- `render()` writes hours, minutes and seconds into their three separate spans instead of one text.

## Slice 3.2 — Responsive sizing
All in `styles.css`, no script:
- **Time size:** scales with the screen — about 16% of the screen width, never below 40px and never above 220px. It is also capped by the screen *height*, so on a phone held sideways the clock does not overflow vertically.
- **Date size:** from 16px on phones up to 24px on large screens.
- **Buttons:** about 14px text; at least 44px tall on touch screens.
- **No scroll bars:** the page is exactly one screen tall (using the modern unit that accounts for mobile browser toolbars, with the older unit as a fallback).
- The time, including the AM/PM label in 12-hour format, must fit on one line down to a 320px-wide screen.

## Slice 3.3 — Theme toggle

- **`styles.css`:** a second set of the same color variables with the light-theme values from `DESIGN.md`, applied when the page is marked `data-theme="light"`. A soft 0.3s fade on background and text colors when switching.
- **`script.js`:** a `theme` state (`dark` by default — not taken from the device's own dark/light setting, per the PRD). Clicking the theme button flips it, marks the page with the new theme, and updates the button label to the theme it switches **to** (`Light` <-> `Dark`).
- The browser's own interface color on phones (`theme-color`) and built-in form colors (`color-scheme`) follow the chosen theme.

## Slice 3.4 — Remembered preferences

- **What is saved** (in the browser's `localStorage`, per ADR-4):
  - `clock-format`: `24h` or `12h`
  - `clock-theme`: `dark` or `light`
- **Saving:** each button click saves the new value.
- **Loading:** on page load the script reads both values. Anything missing or unrecognized is treated as the default (24-hour, dark).
- **When storage is blocked** (e.g. some private-browsing modes): reading and saving are wrapped so a failure is silently ignored — the site works fully with the defaults and shows no error.
- **No flash of the wrong theme:** a tiny script placed directly in the `<head>` applies the saved theme *before* the page is drawn, so a visitor who chose light never sees a dark flash on load. The button labels are then set by `script.js` to match the loaded preferences.

## Slice 3.5 — Finishing touches

- **Keyboard:** both buttons are real `<button>` elements (already keyboard-operable); add a clearly visible accent-colored focus ring that appears for keyboard users.
- **Screen readers:**
  - each button gets a descriptive spoken label that updates with its state (e.g. "Switch to 12-hour format", "Switch to light theme");
  - a visually hidden page heading "Digital Clock";
  - the clock is *not* announced automatically every second (that would make the page unusable with a screen reader) — it is read only when the visitor moves to it.
- **Reduced motion:** when the visitor's device asks for reduced motion, the theme fade is turned off.
- **Page title and icon:** keep the title `Digital Clock`; add a short page description; add `favicon.svg` — a simple clock-face icon in the accent color.
- **JavaScript disabled:** a `<noscript>` message in place of the clock: "This clock needs JavaScript to run. Please enable it and reload the page."

## Not in this milestone
- GitHub Pages, `README.md` — Milestone 4.
- Anything listed under "Out of Scope" in the PRD (full-screen button, more themes, sounds, etc.).
- Replacing the three placeholder images in `spec/`.

## How Claude verifies before handing over
In a real browser (headless Edge), without adding test code to the project:
- **Screenshots in both themes** at four sizes — small phone (320x568), phone (375x812), phone sideways (812x375), desktop (1920x1080) — each also in 12-hour format, the widest case. Reviewed against `DESIGN.md`.
- **No overflow:** measured at each size that the page is not wider or taller than the screen.
- **Colors:** the colors actually applied match the `DESIGN.md` hex values in both themes; text contrast calculated to be at least 4.5:1 (PRD KPI).
- **Preferences:** choose 12-hour + light, reload, confirm both are restored and both button labels are right; confirm unrecognized saved values fall back to defaults; confirm the page works with storage blocked.
- **Milestone 2 behavior unchanged:** re-run the fixed-moment time checks (midnight, noon, leading zeros, date change).
- **Console:** no errors from the page.

## How to check it (for the developer)
1. Open `index.html` — dark page, large light digits in the center with teal colons, date below in gray, two small pill buttons at the top-right.
2. Press `Light` — the page fades to the light theme and the button now says `Dark`. Press again to return.
3. Press `12h` — a small teal `AM`/`PM` appears next to the seconds.
4. Choose 12-hour and light, then reload the page (F5) — both choices are still there.
5. Drag the browser window narrower and wider — the clock shrinks and grows, never cut off, never a scroll bar.
6. Phone-size check: press `F12`, then the phone/tablet icon at the top of the panel, and pick a phone from the list.
7. Press `Tab` on the keyboard — a teal ring moves between the two buttons; `Enter` or `Space` activates them.
8. `F12` -> **Console** — no red error lines.

## Rules for the build
- Code comments in English only.
- Colors and fonts exactly as in `DESIGN.md`; if something in the design turns out not to work on screen, stop and ask rather than quietly changing it.
- No commit or push without asking.
- After building: tick the five Milestone 3 slices in `spec/MILESTONES.md`, open the page for checking, then stop and wait for approval.
