const panels = document.querySelectorAll('.panels .panel');

panels.forEach(panel => {
  panel.addEventListener('click', togglePanel);
  panel.addEventListener('transitionend', toggleText);
})

function togglePanel() {
  this.classList.toggle('open');
}

function toggleText(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('show-text');
  }
}