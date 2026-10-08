# Plan — Milestone 1: Walking Skeleton

## Goal
The site opens in the browser with almost nothing in it, proving that the page, the stylesheet and the script are connected. No real clock, no real design yet.

**Done when:** opening `index.html` in the browser shows the placeholder page with no errors in the browser console.

## Files to create
All three in the project root (next to `CLAUDE.md` and `spec/`). No other files, no folders, nothing to install.

| File | Role in this milestone |
|------|------------------------|
| `index.html` | The page: placeholder time, plus links to the other two files |
| `styles.css` | Minimal styling — just enough to prove the stylesheet is loaded |
| `script.js` | One small action — just enough to prove the script runs |

No existing files are changed, except ticking the checkboxes in `spec/MILESTONES.md` at the end.

## Approach

### 1. `index.html`
- Standard HTML5 page: `<!DOCTYPE html>`, `<html lang="en">`, `charset="utf-8"`, and the mobile `viewport` meta tag (needed later for responsive sizing — cheap to add now).
- `<title>`: `Digital Clock`.
- Link `styles.css` in the `<head>`.
- Body contains one `<main>` with:
  - the time placeholder: `<time id="clock">00:00:00</time>`
  - a small status line: `<p id="status">Script not loaded</p>`
- Load `script.js` at the end of the `<head>` with the `defer` attribute, so it runs after the page is ready.

The `id="clock"` element is the one Milestone 2 will fill with the real time, so it is named for its final purpose. The `id="status"` line exists only for this milestone's proof and is removed in Milestone 2.

### 2. `styles.css`
Only what is needed to see that the stylesheet is applied:
- Remove the default page margin; make the page fill the full screen height.
- Dark background `#0B0F14` and light text `#E6EDF3` (the two main dark-theme colors from `DESIGN.md`).
- Center the content horizontally and vertically.
- A built-in monospace font for the placeholder time, at a moderately large size.

Not in this milestone: Google Fonts, the accent color, the light theme, buttons, responsive sizing rules, animations. Those belong to Milestone 3.

### 3. `script.js`
- Find the `#status` element and replace its text with `Script running`.
- Nothing else. No time logic, no timers, no saved preferences.

This is the "value on the page that only JavaScript could have put there": if the page still says `Script not loaded`, the script is not connected.

## What the finished page looks like
A dark page with, in the center:

```
00:00:00
Script running
```

## How to check it (for the developer)
1. Double-click `index.html` — it opens in the browser.
2. The background is dark and the text is light and centered -> the stylesheet is connected.
3. The small line reads `Script running` (not `Script not loaded`) -> the script is connected.
4. Press `F12`, open the **Console** tab -> no red error lines.

## Rules for the build
- Code comments in English only.
- Keep it minimal — resist adding anything from later milestones.
- No commit and no GitHub actions in this milestone (GitHub is Milestone 4).
- After building: tick the three Milestone 1 checkboxes in `spec/MILESTONES.md`, then stop and wait for approval.
