const timeNodes = [...document.querySelectorAll('[data-time]')];
const totalTime = document.querySelector('.total-time');

const totalSeconds = timeNodes.map(node => {
  return node.dataset.time;
}).map(node => {
  const [mm, ss] = node.split(':').map(parseFloat);
  return (mm * 60) + ss;
}).reduce((total, next) => {
  return total + next;
}, 0)

function getTimeFromSeconds(secs) {
  let remainingSecs = secs;

  const hours = Math.floor(remainingSecs / 3600);
  remainingSecs = remainingSecs % 3600;

  const minutes = Math.floor(remainingSecs / 60);
  remainingSecs = remainingSecs % 60;

  const seconds = remainingSecs;

  totalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

getTimeFromSeconds(totalSeconds);