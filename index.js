let videoPlayer = document.getElementById("video");
let pauseButton = document.getElementById("pauseButton");
let volumeButton = document.getElementById("volumeButton");
const image = document.getElementById("mediaIcon");
const imageVolume = document.getElementById("volumeIcon");

pauseButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    image.src = "assets/pause.svg";
  } else {
    video.pause();
    image.src = "assets/play.svg";
  }
});

volumeButton.addEventListener("click", (e) => {
  if (video.muted) {
    video.muted = false;
    imageVolume.src = "assets/sound-on.svg";
  } else {
    video.muted = true;
    imageVolume.src = "assets/sound-off.svg";
  }
});

videoPlayer.muted = true;
videoPlayer.play();
