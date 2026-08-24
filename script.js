document.addEventListener("DOMContentLoaded", () => {
  const motionVideo = document.getElementById("motion-video");
  const tapOverlay = document.getElementById("tap-overlay");
  const mainCard = document.getElementById("main-card");
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const scrollHint = document.getElementById("scroll-hint");
  const detailsSection = document.getElementById("details");

  if (bgMusic) bgMusic.load();

  function playAudio() {
    if (bgMusic && bgMusic.paused) {
      bgMusic.play().then(() => {
        if (musicIcon) musicIcon.textContent = "🎵";
      }).catch(err => console.log("Audio play error:", err));
    }
  }

  function toggleAudio() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      playAudio();
    } else {
      bgMusic.pause();
      if (musicIcon) musicIcon.textContent = "🔇";
    }
  }

  // TAP TO UNMUTE AND PLAY
  tapOverlay.addEventListener("click", () => {
    tapOverlay.style.opacity = "0";
    setTimeout(() => {
      tapOverlay.style.display = "none";
    }, 800);

    playAudio();

    if (motionVideo) {
      motionVideo.muted = false;
      motionVideo.play().catch(err => console.log("Video play error:", err));
    }
  });

  // FADE IN MAIN CARD WHEN VIDEO FINISHES
  if (motionVideo) {
    motionVideo.addEventListener("ended", () => {
      mainCard.classList.add("show");
    });
  }

  // SMOOTH SCROLL BUTTON
  if (scrollHint) {
    scrollHint.addEventListener("click", () => {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", toggleAudio);
  }

  // SCROLL REVEAL OBSERVER
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
