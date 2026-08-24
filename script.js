document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("envelope-video");
  const card = document.getElementById("card-overlay");
  const audio = document.getElementById("bg-music");

  // Fasten video speed
  if (video) {
    video.playbackRate = 1.4;

    video.addEventListener("ended", () => {
      card.classList.add("visible");
    });
  }

  // Forces music to trigger on any interaction (Click, Tap, or Scroll)
  const startAudio = () => {
    if (audio) {
      audio.play().then(() => {
        console.log("Audio playing successfully.");
      }).catch((err) => {
        console.log("Audio play deferred until user gesture:", err);
      });
    }
  };

  window.addEventListener("click", startAudio, { once: true });
  window.addEventListener("touchstart", startAudio, { once: true });
  window.addEventListener("scroll", startAudio, { once: true });
});
