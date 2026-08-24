document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const enterBtn = document.getElementById("enter-btn");
  const details = document.getElementById("details");

  if (bgMusic) bgMusic.load();

  function toggleAudio() {
    if (!bgMusic) return;

    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        if (musicIcon) musicIcon.textContent = "🎵";
      }).catch(err => console.log("Audio block:", err));
    } else {
      bgMusic.pause();
      if (musicIcon) musicIcon.textContent = "🔇";
    }
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      toggleAudio();
      details.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", toggleAudio);
  }

  // INTERSECTION OBSERVER FOR SOFT SCROLL REVEAL
  const fadeElements = document.querySelectorAll(".fade-in");
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));
});
