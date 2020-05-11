const navBar = document.getElementById('main');
let navTop = navBar.offsetTop;

function fixNavPosition() {
  if(window.scrollY >= navTop) {
    document.body.style.paddingTop = `${navBar.offsetHeight}px`;
    document.body.classList.add('fixed-nav');

    console.log('fixed');
  } else {
    document.body.style.paddingTop = `0px`;
    document.body.classList.remove('fixed-nav');

    console.log('not fixed');
  }
}

document.addEventListener('scroll', fixNavPosition);