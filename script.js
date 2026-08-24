document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const scrollBtn = document.getElementById("scroll-btn");
  const detailsSection = document.getElementById("details");

  if (bgMusic) bgMusic.load();

  function playMusic() {
    if (bgMusic && bgMusic.paused) {
      bgMusic.play().then(() => {
        if (musicIcon) musicIcon.textContent = "🎵";
      }).catch(err => console.log("Audio block:", err));
    }
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      playMusic();
    } else {
      bgMusic.pause();
      if (musicIcon) musicIcon.textContent = "🔇";
    }
  }

  // OPEN ENVELOPE ON CLICK
  envelope.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
      envelope.classList.add("open");
      envelopeWrapper.classList.add("expanded");
      playMusic();
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      detailsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", toggleMusic);
  }

  // SMOOTH SCROLL REVEAL FOR EVENT DETAILS
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
