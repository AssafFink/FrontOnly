# Digital Clock

A clean, single-page digital clock that shows the current local time and date.

**Live site:** https://assaffink.github.io/FrontOnly/

## Features

- Live time with seconds, read from your device every second
- Day of the week and full date
- Switch between 24-hour and 12-hour (AM/PM) formats
- Dark and light themes
- Remembers your format and theme in the browser
- Fits any screen, from a small phone to a large monitor

Frontend only: no server, no database, no tracking.

## Run locally

Open `index.html` in a browser. There is nothing to install or build.

## Project structure

```
index.html     the page
styles.css     colors, fonts and layout for both themes
script.js      the clock, the two buttons and the saved preferences
favicon.svg    the browser-tab icon
spec/          the documents the project was built from
```

## How it was built

The project was written spec-first: the product requirements, architecture, design and build plan in [`spec/`](spec/) came before the code, and the site was built one milestone at a time from [`spec/MILESTONES.md`](spec/MILESTONES.md).
