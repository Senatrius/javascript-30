const KONAMI_CODE = ['\u21d1', '\u21d1', '\u21d3', '\u21d3', '\u21d0', '\u21d2', '\u21d0', '\u21d2', 'B', 'A', 'Enter']
const display = document.querySelector('.display');

let userInput = [];

window.addEventListener('keyup', e => {
  switch(e.key) {
    case 'ArrowLeft':
      userInput.push('\u21d0');
      break;
    case 'ArrowUp':
      userInput.push('\u21d1');
      break;
    case 'ArrowRight':
      userInput.push('\u21d2');
      break;
    case 'ArrowDown':
      userInput.push('\u21d3');
      break;
    case 'a':
      userInput.push('A');
      break;
    case 'b':
      userInput.push('B');
      break;
    case 'Backspace':
      userInput.pop();
      break;
    case ' ':
      userInput.push('\u2423');
      break;
    default:
      userInput.push(e.key);
  }

  userInput.splice(-KONAMI_CODE.length - 1, userInput.length - KONAMI_CODE.length)

  if(KONAMI_CODE.join('') == userInput.join('')) {
    display.classList.add('correct');
  } else {
    display.classList.remove('correct');
  }

  display.textContent = [...userInput].join(' ');
});