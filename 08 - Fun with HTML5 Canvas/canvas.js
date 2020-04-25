const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastXpos = 0;
let lastYpos = 0;
let hue = 0;
let thickness = 1;
let direction = false;

function draw(e) {
  if(!isDrawing) {
    return;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 40%)`;
  ctx.lineWidth = `${thickness}`;

  ctx.beginPath();
  ctx.moveTo(lastXpos, lastYpos);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  hue++;
  
  if(thickness >= 50 || thickness <= 1) {
    direction = !direction;
  }

  if(direction) {
    thickness++;
  } else {
    thickness--;
  }

  [lastXpos, lastYpos] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
  isDrawing = true;

  [lastXpos, lastYpos] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);