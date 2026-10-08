# Architecture

## 1. Tech stack
- **Type of app:** website (single page), works on desktop and mobile browsers
- **Frontend:** plain HTML, CSS and JavaScript — no framework, no libraries, no build step
- **Backend:** none
- **Database:** none
- **Hosting:** GitHub Pages (free)
- **Code storage:** GitHub

### File structure
```
index.html    <- the page (structure and text)
styles.css    <- the look (colors, fonts, layout, both themes)
script.js     <- the behavior (reading the time, the two toggles, saving preferences)
```
All three files sit in the project root, next to `CLAUDE.md` and `spec/`.

## 2. Data
The app has no database and stores nothing on any server. The only saved information is two display preferences, kept in the visitor's own browser (`localStorage`):

- **Time format:** `24h` or `12h` (default `24h`)
- **Theme:** `dark` or `light` (default `dark`)

The time and date themselves are never stored — they are read from the visitor's device every second.

## 3. Integrations & services
- **Google Fonts** — delivers the two fonts defined in `DESIGN.md`. Free, no account or key needed. If it is unreachable, the site falls back to fonts already on the device.
- No payment provider, no analytics, no other outside services.

## 4. Deployment (going live)
- **Repo:** GitHub — `digital-clock` (public). Not created yet; the owner will create it before Milestone 4. GitHub username: to be provided then.
- **Hosting:** GitHub Pages, serving the `main` branch from the repository root. Expected address: `https://<github-username>.github.io/digital-clock/`
- Note: Claude prepares the code and config; YOU create the GitHub account and repository, and approve each push and the publish step.

## 5. Key decisions (ADRs)

### ADR-1: Plain HTML/CSS/JavaScript, no framework
- **Context:** The site is one screen with a clock and two buttons. The owner is not a programmer and wants the simplest thing that works.
- **Decision:** Three hand-written files (`index.html`, `styles.css`, `script.js`) with no framework, libraries or build tools.
- **Consequences:** Nothing to install; the site runs by opening `index.html`; publishing is just uploading the files. Rejected: React / Vite and similar — they add setup and moving parts with no benefit at this size. If the site later grows into many screens, this decision should be revisited.

### ADR-2: Host on GitHub Pages
- **Context:** The code must end up on GitHub, the budget is zero, and the site has no backend.
- **Decision:** Publish with GitHub Pages directly from the `main` branch of the same repository.
- **Consequences:** No additional account or service; every push updates the live site. On a free GitHub account this requires the repository to be public. Rejected: Netlify / Vercel — equally capable but need another account.

### ADR-3: Always read the time from the device
- **Context:** Browsers slow down or pause timers in background tabs and when a device sleeps, so a clock that "adds one second" each tick drifts.
- **Decision:** On every tick, read the current time fresh from the device clock and display it. Never count seconds ourselves. Local device time only; no time zone selection and no internet time check.
- **Consequences:** The clock is always correct when the visitor looks at it, and daylight-saving and midnight changes work automatically. The site is only as accurate as the device's own clock.

### ADR-4: Save preferences in the browser (localStorage)
- **Context:** Visitors should not have to re-choose format and theme each visit, and there is no backend or login.
- **Decision:** Store the two preferences in the browser's `localStorage`. If storage is unavailable, silently use the defaults.
- **Consequences:** No server and no cookies; preferences are per browser and per device and do not sync between devices.

### ADR-5: Load fonts from Google Fonts with a fallback
- **Context:** The design relies on a distinctive fixed-width font for the digits, which is not installed on most devices.
- **Decision:** Load the fonts from Google Fonts and declare built-in device fonts as fallbacks.
- **Consequences:** One line of setup and good-looking digits everywhere. The page makes a request to Google when it loads; without internet the clock still works with the fallback font. Rejected for now: bundling the font files in the repository — more files to manage; can be done later if independence from Google is wanted.
