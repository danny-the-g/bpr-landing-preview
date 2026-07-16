document.documentElement.classList.add("js");

// Countdown: set to your real deadline. Currently July 24, 2026, 11:59:59 PM
// in the visitor's local timezone (no explicit UTC offset).
const DEADLINE = new Date("2026-07-24T23:59:59");

function updateCountdown() {
  const daysEl = document.getElementById("cd-days");
  if (!daysEl) return;
  const now = new Date();
  let diff = DEADLINE - now;
  if (diff < 0) diff = 0;
  const pad = (n) => String(n).padStart(2, "0");
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  daysEl.textContent = pad(days);
  document.getElementById("cd-hours").textContent = pad(hours);
  document.getElementById("cd-mins").textContent = pad(mins);
  document.getElementById("cd-secs").textContent = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in-view"));
}
