const FORMAT_KEY = 'clock-format';
const THEME_KEY = 'clock-theme';

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const formatToggle = document.getElementById('format-toggle');
const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

// Storage can be blocked (e.g. private browsing); the clock then just uses the defaults
function loadPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Nothing to do: the choice still applies for this visit
  }
}

// Anything missing or unrecognized falls back to the defaults: 24-hour, dark
let is24Hour = loadPreference(FORMAT_KEY) !== '12h';
let theme = loadPreference(THEME_KEY) === 'light' ? 'light' : 'dark';

function pad(value) {
  return String(value).padStart(2, '0');
}

// Draw the time and date, always read fresh from the device clock
function render() {
  const now = new Date();
  let hours = now.getHours();
  let ampm = '';

  if (!is24Hour) {
    ampm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12; // midnight and noon both show 12
  }

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(now.getMinutes());
  secondsEl.textContent = pad(now.getSeconds());
  ampmEl.textContent = ampm;
  dateEl.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Render now, then again at the start of every following second
function tick() {
  render();
  setTimeout(tick, 1000 - new Date().getMilliseconds());
}

// Each button is labeled with the option it switches to
function applyFormat() {
  formatToggle.textContent = is24Hour ? '12h' : '24h';
  formatToggle.setAttribute('aria-label', `Switch to ${is24Hour ? '12' : '24'}-hour format`);
}

function applyTheme() {
  const other = theme === 'dark' ? 'light' : 'dark';

  if (theme === 'light') {
    document.documentElement.dataset.theme = 'light';
  } else {
    delete document.documentElement.dataset.theme;
  }

  themeToggle.textContent = other === 'light' ? 'Light' : 'Dark';
  themeToggle.setAttribute('aria-label', `Switch to ${other} theme`);
  // Keep the mobile browser's own toolbar in the page's background color
  themeColorMeta.content = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
}

formatToggle.addEventListener('click', () => {
  is24Hour = !is24Hour;
  savePreference(FORMAT_KEY, is24Hour ? '24h' : '12h');
  applyFormat();
  render();
});

themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  savePreference(THEME_KEY, theme);
  applyTheme();
});

// Timers are paused in background tabs, so refresh as soon as the page is visible again
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    render();
  }
});

applyFormat();
applyTheme();
tick();
