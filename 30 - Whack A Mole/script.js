const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.high-score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.start-btn');

let lastHole;
let timeUp = false;
let score = 0;
let highScore = 0;

showHighscore();

function moleTimer(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = moleTimer(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  startBtn.classList.add('playing');

  setTimeout(() => {
    timeUp = true;
    showHighscore();
    startBtn.classList.remove('playing');
  }, 10000)
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;

  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;

  storeScores();
}

function storeScores() {
  if(score > highScore) {
    highScore = score;
  }

  localStorage.setItem('hi-score', highScore);
}

function showHighscore() {
  let highscore = localStorage.getItem('hi-score');

  highscoreDisplay.textContent = `Your current Hi-Score is: ${highscore}`;
}

moles.forEach(mole => mole.addEventListener('click', bonk));