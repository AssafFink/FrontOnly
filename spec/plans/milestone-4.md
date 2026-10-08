# Plan — Milestone 4: Going live

## Goal
Publish the finished clock at a public link with GitHub Pages, and give the repository a proper front page.

**Done when:** the clock works at `https://assaffink.github.io/FrontOnly/`, on my computer and on my phone.

## Where things stand
Already done in earlier steps: the repository exists (`AssafFink/FrontOnly`), `.gitignore` is in place, the code is pushed to `main`, and the real addresses are in `ARCHITECTURE.md`.

Still open:
1. Add a `README.md`
2. Switch the repository from private to public
3. Turn on GitHub Pages
4. Confirm the live site works

The site code itself needs **no changes**: every link inside the page (`styles.css`, `script.js`, `favicon.svg`) is relative, so it works unchanged under the `/FrontOnly/` address.

## Files

| File | Change |
|------|--------|
| `README.md` | **New** — the repository's front page |
| `.nojekyll` | **New**, empty — tells GitHub Pages to publish the files exactly as they are, skipping its own site-building step (not needed for plain HTML; makes publishing faster and avoids surprises) |
| `spec/MILESTONES.md` | Tick items as they are done |
| `spec/ARCHITECTURE.md` | Update the Deployment section once the site is live (repository is public, site is live) |

## Step 1 — `README.md` (Claude)
Short and in English:
- Title and one-line description
- Link to the live site
- Features: live time with seconds, date, 12h/24h toggle, dark/light theme, remembered preferences, responsive
- How to run it locally: open `index.html` in a browser — nothing to install
- Project structure: the three site files, the icon, and the `spec/` folder
- A note that the project was built spec-first, pointing to `spec/`

No license file is added (not requested). Without one, others may view the code but have no formal permission to reuse it; a license can be added later if wanted.

Then, **with approval**: commit `README.md` and `.nojekyll` and push.

## Step 2 — Make the repository public (developer decision)
GitHub Pages on a free account only works for public repositories (ADR-2).

**Before switching, be aware that going public exposes everything in the repository, not just the clock:**
- all files — including `CLAUDE.md` and the whole `spec/` folder (PRD, architecture, design, plans);
- the full commit history, which includes the author name and **email address** recorded in each commit (currently `assaf.fink@gmail.com`).

Claude has checked that the repository contains no passwords, keys or `.env` file. The email in the commit history is the one thing worth a conscious decision. Options:
- **Accept it** — the simplest; very common for personal projects.
- **Hide it** — would require rewriting the existing history with GitHub's private "noreply" address and force-pushing. This is a destructive operation; Claude will only do it if explicitly asked.

How to switch (either way, it is the developer's call):
- **In the browser:** repository page -> **Settings** -> **General** -> scroll to **Danger Zone** -> **Change repository visibility** -> **Change to public**, and confirm.
- **Or** tell Claude explicitly to do it; Claude then runs the one GitHub command for it.

## Step 3 — Turn on GitHub Pages (Claude, with approval)
Using the GitHub command-line tool already installed and signed in on this computer:
- enable Pages for the repository, publishing the `main` branch from the root folder (ADR-2);
- wait for GitHub's first publish to finish (usually about a minute) and confirm it reports success.

From then on, every push to `main` updates the live site automatically.

(Manual alternative: **Settings** -> **Pages** -> under **Build and deployment**, Source: **Deploy from a branch**, Branch: `main`, folder `/ (root)` -> **Save**.)

## Step 4 — Verify the live site (Claude)
Against `https://assaffink.github.io/FrontOnly/`:
- the page, stylesheet, script and icon all load successfully (no "not found" files);
- the page shows the current time and date, and both buttons work;
- the address is served over a secure connection (`https`);
- no errors in the browser console.

## Step 5 — Wrap up (Claude)
- Add the repository description and the live site link to the repository's "About" box on GitHub (with approval).
- Update `ARCHITECTURE.md` -> Deployment: repository is public, site is live.
- Tick the Milestone 4 items in `MILESTONES.md` and add a Done-log line.
- With approval: commit and push these document updates.

## How to check it (for the developer)
1. On the computer: open `https://assaffink.github.io/FrontOnly/` — the clock appears, same as the local version.
2. Press both buttons, reload — the choices are remembered.
3. On the phone: open the same link — the clock fits the screen in portrait and when turned sideways.
4. Open `https://github.com/AssafFink/FrontOnly` in a private/incognito window — the repository and its README are visible without signing in.

## Not in this milestone
- A custom domain name (e.g. `myclock.com`).
- Replacing the three placeholder images in `spec/`.
- Any change to the clock itself.

## Rules for the build
- Each outward-facing action — push, making the repository public, turning on Pages, editing the repository's About box — needs explicit approval first.
- No rewriting of git history unless explicitly asked.
- After finishing: stop and wait for the developer's check and approval.
