// =======================
// GSAP + ScrollTrigger
// =======================
gsap.registerPlugin(ScrollTrigger);

// =======================
// Smooth Scroll (Lenis)
// =======================
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// =======================
// Section Animation
// =======================
gsap.utils.toArray(".section").forEach((sec) => {
  gsap.from(sec, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    }
  });
});

// =======================
// Timeline Animation
// =======================
gsap.from(".event", {
  opacity: 0,
  x: -30,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%"
  }
});

// =======================
// COUNTDOWN (FIXED ✅)
// =======================
const timer = document.getElementById("timer");

// 👉 CHANGE DATE HERE (IMPORTANT)
// Example: April 6, 2026
const weddingDate = new Date(2026, 3, 6, 0, 0, 0).getTime();
console.log(weddingDate)

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    timer.innerHTML = "Today is the Day 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `
    <span>${days} Days</span> 
    <span>${hours}h</span> 
    <span>${minutes}m</span> 
    <span>${seconds}s</span>
  `;
}

// Run immediately (VERY IMPORTANT)
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);