const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function(e) {
  const yPos = e.pageY - this.offsetTop;
  const speedPercent = yPos / this.offsetHeight;
  const min = 0.3;
  const max = 3;

  const speedHeight = Math.round(speedPercent * 100) + '%';
  const playbackRate = speedPercent * (max - min) + min;

  speedBar.style.height = speedHeight;
  speedBar.textContent = playbackRate.toFixed(2);
  video.playbackRate = playbackRate;

  console.log(speedHeight);

})