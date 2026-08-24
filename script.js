document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("envelope-video");
  const card = document.getElementById("card-overlay");
  const audio = document.getElementById("bg-music");

  // Fasten video speed (1.4x faster)
  if (video) {
    video.playbackRate = 1.4;

    // Reveal main name card smoothly when video ends
    video.addEventListener("ended", () => {
      card.classList.add("visible");
    });
  }

  // Play audio on first user tap/interaction
  const playAudio = () => {
    if (audio && audio.paused) {
      audio.play().catch((err) => console.log("Audio play deferred:", err));
    }
  };

  document.body.addEventListener("click", playAudio, { once: true });
  document.body.addEventListener("touchstart", playAudio, { once: true });
});
