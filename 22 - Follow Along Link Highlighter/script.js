const links = document.querySelectorAll('a');
const highlighter = document.createElement('span');

highlighter.classList.add('highlight');
document.body.append(highlighter);

function showHighlight() {
  const linkInfo = this.getBoundingClientRect();
  
  const coords = {
    width: linkInfo.width,
    height: linkInfo.height,
    top: linkInfo.top + window.scrollY,
    left: linkInfo.left + window.scrollX
  }

  highlighter.style.width = `${Math.round(coords.width)}px`;
  highlighter.style.height = `${Math.round(coords.height)}px`;
  highlighter.style.position = 'absolute';
  highlighter.style.transform = `translate(${coords.left}px, ${coords.top}px)`

  setTimeout(() => {
    highlighter.style.transition = `all 0.2s`;
  }, 10)
  
}

links.forEach(link => {
  link.addEventListener('mouseover', showHighlight);
})