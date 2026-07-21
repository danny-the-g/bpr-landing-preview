document.documentElement.classList.add("js");

// Countdown: rolls to 11:59:59 PM on the last day of the current month, in
// the visitor's local timezone. Automatically re-targets the next month once
// the current one passes, so the "closes end of month" offer never shows 00.
function endOfMonth() {
  const now = new Date();
  let end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  if (end - now <= 0) end = new Date(now.getFullYear(), now.getMonth() + 2, 0, 23, 59, 59);
  return end;
}
const DEADLINE = endOfMonth();

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
