# Product Requirements Document (PRD)

## 1. Background & Goals

### a. Product goal
A beautiful, single-page website that shows the current time as a digital clock.

### b. Problem description
Someone who wants to glance at the time on a screen (a laptop, a second monitor, a phone on a stand) usually gets a tiny clock in the corner of the operating system, or a clock website cluttered with ads, pop-ups and unrelated features. There is no calm, good-looking, full-screen clock that simply works.

### c. Solution description
A clean web page whose whole purpose is the clock: large, readable digits showing the current local time, with the date underneath. No sign-up, no ads, nothing to install — open the link and the clock is running.

### d. MVP vision
One screen that shows the correct local time (hours, minutes, seconds) and today's date, looks good on both desktop and mobile, lets the visitor switch between 24-hour and 12-hour formats and between a dark and a light theme, and is publicly available through a link.

## 2. Target Audience & User Needs

### a. User Personas
- **The builder (primary):** the project owner, who is not a programmer and is building this as a personal / learning project. Wants a small, finished, good-looking result they can share with a link.
- **The casual visitor:** anyone who opens the link on a computer or phone and wants to see the time at a glance, possibly leaving the page open on a screen for a long time.

### b. User Stories
- As a visitor, I want to see the current time the moment the page opens, so that I can know what time it is without doing anything.
- As a visitor, I want to see the seconds ticking, so that I can tell the clock is live and accurate.
- As a visitor, I want to see today's date and day of the week, so that I can get the full "when is it now" picture in one place.
- As a visitor, I want to switch between 24-hour and 12-hour (AM/PM) formats, so that I can read the time the way I am used to.
- As a visitor, I want to switch between a dark and a light theme, so that I can use the clock comfortably in a dark room or in daylight.
- As a returning visitor, I want the page to remember my format and theme choices, so that I can avoid setting them again every visit.
- As a mobile visitor, I want the clock to fit my screen, so that I can read it without zooming or scrolling.

## 3. Flows & User Experience

### a. User Journey
The visitor wants to know the time, or wants a pleasant clock to keep open on a screen. They open the link, read the time immediately, optionally adjust the format or theme once, and then leave the page open or close it.

### b. User Flows
There is a single screen and no navigation.

```
Open the link
   -> Clock screen appears, already showing the current time and date
        -> (optional) press "12h / 24h"  -> the time is re-displayed in the other format
        -> (optional) press "Dark / Light" -> the colors switch to the other theme
   -> The clock keeps updating every second for as long as the page is open
```

On the next visit from the same browser, the page opens with the format and theme chosen last time.

### c. UX Requirements
- **Instant:** the time is visible as soon as the page loads; no splash screen, no clicks required.
- **The clock is the hero:** the time is by far the largest thing on the screen; everything else is small and quiet.
- **No clutter:** only two controls (format, theme). No menus, pop-ups, ads or banners.
- **Stable display:** digits must not jump or shift sideways as they change (fixed-width digits).
- **Responsive:** fits any screen from a small phone to a large monitor, portrait or landscape, without scrolling.
- **Readable:** strong contrast between digits and background in both themes.
- **Accessible:** both controls work with keyboard and screen readers; animations respect the visitor's "reduce motion" setting.
- **Interface language:** English only.

## 4. Functional Requirements

### a. Features & Functional Requirements
- **Live digital clock:** shows hours, minutes and seconds (`HH:MM:SS`) with leading zeros, in the local time of the visitor's device. Updates every second.
- **Date display:** shows the day of the week and the full date in English, e.g. `Thursday, October 8, 2026`. Updates automatically at midnight.
- **Time format toggle (12h / 24h):** a button switches between 24-hour (`17:05:09`) and 12-hour (`05:05:09 PM`) display. Default: 24-hour.
- **Theme toggle (dark / light):** a button switches between the dark and light color themes. Default: dark.
- **Remembered preferences:** the chosen format and theme are saved in the visitor's browser and applied on the next visit.
- **Responsive layout:** the clock scales to the screen size and stays centered.

### b. Edge Cases & Errors
- **Page left in a background tab or device asleep:** when the visitor returns, the clock immediately shows the correct time (the time is always read fresh from the device, never counted up).
- **Midnight:** the date changes automatically without reloading the page.
- **Daylight saving time changes:** the clock follows the device and shows the correct time automatically.
- **Wrong device clock:** the site shows whatever the device reports; it does not check the time against the internet. This is accepted.
- **Preferences cannot be saved** (e.g. private browsing blocks storage): the site still works fully, using the defaults (24-hour, dark); no error is shown.
- **Custom font fails to load** (e.g. no internet): the clock falls back to a built-in device font and keeps working.
- **Very small or very wide screens:** the digits shrink or grow to fit; nothing is cut off and no scroll bar appears.
- **JavaScript disabled:** a short message explains that the clock needs JavaScript to run.

## 5. Technical Requirements & Constraints

### a. Technical requirements
- A website only — no mobile or desktop app.
- **Frontend only:** no server, no database, no user accounts.
- Works in current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.
- Works by simply opening the page; nothing to install.
- The code is stored on GitHub and the site is published at a public link.

### b. Constraints
- **Budget:** zero. Only free tools and free hosting.
- **Privacy:** no personal data is collected, no cookies, no analytics, no tracking. The only stored information is the two display preferences, kept inside the visitor's own browser.
- **Simplicity:** the simplest solution that meets the requirements; no frameworks or build tools.

## 6. Success Metrics

### a. Success criteria
- Opening the public link shows the correct local time, updating every second, with the correct date.
- Both toggles work and their choices survive a page reload.
- The page looks good and is fully readable on a phone and on a desktop monitor, in both themes.
- The code is in a GitHub repository.

### b. KPIs (Key Performance Indicators)
This is a personal project without analytics, so the metrics are quality checks rather than usage numbers:
- Time shown differs from the device clock by less than 1 second.
- The clock is visible in under 1 second after opening the page on a normal connection.
- 0 errors in the browser console.
- 0 horizontal or vertical scroll bars on screens from 320px wide and up.
- Text contrast of at least 4.5:1 in both themes.

## 7. Out of Scope

- Alarm clock, timer, stopwatch, countdown.
- Choosing a time zone or showing several cities (world clock).
- Analog (round) clock face.
- Languages other than English; right-to-left layout.
- More than two themes, custom colors, or background images.
- Full-screen button.
- Sounds.
- User accounts, login, or syncing preferences between devices.
- Any backend, database, or analytics.
- Installable app / offline mode (PWA).
