# Milestones — Build Plan

> The plan for building the app, one step at a time. This is a living file: mark things done as you go. Claude will update it as it works.
>
> - **Milestone** = a big checkpoint you can stop at and check.
> - **Slice** = one complete piece of value inside a milestone.
> - Build one milestone at a time. Check it works before the next.

## Important rule — approval between milestones
After finishing each milestone, Claude stops and waits. I (the developer) check that the milestone works, and only after I explicitly approve does Claude continue to the next milestone. Do not start a new milestone before I approve.

The detailed plan for each milestone is written to `spec/plans/milestone-N.md` (e.g. `milestone-1.md`) before building it.

## How to mark progress
- [ ] not started
- [x] done
- 🟢 = checked and working

---

## Milestone 1 — Walking Skeleton
> The site opens in the browser with almost nothing in it. This proves the three files are connected before we add features.
- [x] Create `index.html`, `styles.css` and `script.js` in the project root, linked together
- [x] The page shows a simple placeholder (e.g. `00:00:00`) on a plain background
- [x] The script runs (proven by a value on the page that only JavaScript could have put there)
- **Done when:** opening `index.html` in the browser shows the placeholder page with no errors in the browser console

## Milestone 2 — Working clock
> The page shows the real, live time and date. Plain looks — function first.
- [ ] Slice 2.1: show the current local time as `HH:MM:SS`, updating every second, always read fresh from the device
- [ ] Slice 2.2: show the day of the week and full date below the time (e.g. `Thursday, October 8, 2026`), changing by itself at midnight
- [ ] Slice 2.3: a button switches between 24-hour and 12-hour (AM/PM) display; 24-hour is the default
- **Done when:** the time matches my device clock, the seconds tick, the date is correct, and the format button works in both directions

## Milestone 3 — Design & preferences
> The clock becomes beautiful and remembers the visitor's choices.
- [ ] Slice 3.1: apply the style guide from `DESIGN.md` — dark theme colors, fonts, centered layout, button style
- [ ] Slice 3.2: responsive sizing — the clock fits phones and large monitors with no scroll bars
- [ ] Slice 3.3: a button switches between the dark and light themes; dark is the default
- [ ] Slice 3.4: remember the chosen format and theme in the browser and apply them on the next visit; fall back to defaults if saving is not possible
- [ ] Slice 3.5: finishing touches — keyboard and screen-reader support for the buttons, reduced-motion support, page title and icon, message when JavaScript is disabled
- **Done when:** the page matches `DESIGN.md` in both themes, looks right on a phone-sized and a desktop-sized window, and my choices are still there after reloading the page

## Milestone 4 — Going live
> Put the code on GitHub and publish the site at a public link.
- [ ] I (the developer) create a public GitHub repository named `digital-clock` and give Claude my GitHub username
- [ ] Add a `README.md` and a `.gitignore`
- [ ] Put the code on GitHub (`main` branch)
- [ ] Turn on GitHub Pages for the repository
- [ ] Fill in the real repository and site addresses in `ARCHITECTURE.md`
- **Done when:** the clock works at the public GitHub Pages link, on my computer and on my phone

---

## Done log
- 2026-10-08 — Spec documents written (PRD, ARCHITECTURE, DESIGN, MILESTONES). No code yet.
- 2026-10-08 — Milestone 1 built (walking skeleton). Waiting for the developer's check and approval.
