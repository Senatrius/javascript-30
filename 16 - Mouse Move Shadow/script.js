const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const maxShadow = 150;

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // Center of the screen means 0 shadow
  // ... (500 / 1000 * 50) - (50 / 2) = 0

  // Offsetting the mouse position from center adds a shadow
  // ... (750 / 1000 * 50) - (50 / 2) = 17.5

  const shadowOffsetX = Math.round((x / width * maxShadow) - (maxShadow / 2));
  const shadowOffsetY = Math.round((y / height * maxShadow) - (maxShadow / 2));

  console.log(blur);

  text.style.textShadow = `
    ${-shadowOffsetY}px ${shadowOffsetX}px 0px hsla(40, 100%, 50%,50%),
    ${shadowOffsetY}px ${-shadowOffsetX}px 0px hsla(130, 100%, 50%,50%),
    ${-shadowOffsetX}px ${shadowOffsetY}px 0px hsla(220, 100%, 50%,50%),
    ${shadowOffsetX}px ${shadowOffsetY}px 0px hsla(310, 100%, 50%,50%)
  `;
}

hero.addEventListener('mousemove', shadow);