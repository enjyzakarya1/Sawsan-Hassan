document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("envelope-video");
  const card = document.getElementById("card-overlay");
  const audio = document.getElementById("bg-music");

  // Fasten video playback speed (1.35x speed)
  if (video) {
    video.playbackRate = 1.35;

    // Reveal overlay card when video finishes opening
    video.addEventListener("ended", () => {
      card.classList.add("visible");
    });
  }

  // Play background music on user's first tap/click anywhere on the page
  const playAudio = () => {
    if (audio && audio.paused) {
      audio.play().catch((err) => console.log("Audio play deferred:", err));
    }
  };

  document.body.addEventListener("click", playAudio, { once: true });
  document.body.addEventListener("touchstart", playAudio, { once: true });
});
