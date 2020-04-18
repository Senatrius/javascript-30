window.addEventListener('keydown', e => {
  const code = e.keyCode;
  const key = document.querySelector(`.key[data-key="${code}"]`);
  const audio = document.querySelector(`audio[data-key="${code}"]`)

  if(key) {
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
  } else {
    return;
  }

  audio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
});