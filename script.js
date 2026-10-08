const clockEl = document.getElementById('clock');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const formatToggle = document.getElementById('format-toggle');

let is24Hour = true;

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

  clockEl.textContent = `${pad(hours)}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
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

formatToggle.addEventListener('click', () => {
  is24Hour = !is24Hour;
  // The label names the format the button switches to
  formatToggle.textContent = is24Hour ? '12h' : '24h';
  render();
});

// Timers are paused in background tabs, so refresh as soon as the page is visible again
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    render();
  }
});

tick();
