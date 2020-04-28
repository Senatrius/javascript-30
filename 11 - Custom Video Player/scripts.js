const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const controlPanel = document.querySelector(".player__controls");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playBtn = document.querySelector(".toggle");
const volumeSlider = document.querySelector('input[name="volume"]');
const speedSlider = document.querySelector('input[name="playbackRate"]');
const skipBtns = document.querySelectorAll("button[data-skip]");
const fullScreen = document.querySelector('.full-screen');

player.addEventListener("click", (e) => {
	if (e.target === video || e.target === playBtn) {
		const status = video.paused ? "play" : "pause";

		video[status]();
	}
});

skipBtns.forEach((btn) => {
	btn.addEventListener("click", skipVideo);
});

video.addEventListener("play", updatePlayBtn);
video.addEventListener("pause", updatePlayBtn);
video.addEventListener("timeupdate", updateProgressBar);

let mouseDown = false;
progress.addEventListener('click', changeProgressBar);
progress.addEventListener('mousemove', e => mouseDown && changeProgressBar(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

volumeSlider.addEventListener("input", () => {
	video.volume = volumeSlider.value;
});
speedSlider.addEventListener("input", () => {
	video.playbackRate = speedSlider.value;
});

fullScreen.addEventListener('click', toggleFullScreen);

function updatePlayBtn() {
	const icon = this.paused ? "►" : "❚ ❚";
	console.log(icon);

	playBtn.textContent = icon;
}

function skipVideo() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgressBar() {
  let currentPos = (video.currentTime / video.duration) * 100;
  let percent = parseFloat(currentPos.toFixed(2));

  progressBar.style.flexBasis = `${percent}%`;
}

function changeProgressBar(e) {
  let newTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = newTime;
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}