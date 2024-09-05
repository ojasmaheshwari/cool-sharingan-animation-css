const sharinganAudio = new Audio("sharingan-audio.mp3");

const sharinganElement = document.querySelector(".sharingan");
const enableAudioElement = document.querySelector("#click-enable-audio");

enableAudioElement.addEventListener("click", () => {
  new Audio().play();
  enableAudioElement.style.display = "none";
});

sharinganElement.addEventListener('mouseover', () => {
  sharinganAudio.play();
});
