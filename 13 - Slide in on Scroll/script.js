function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

document.addEventListener('scroll', debounce(showCards, 50));

const cards = document.querySelectorAll('.card');

function showCards() {
  cards.forEach(card => {
    const showCardAt = (window.scrollY + window.innerHeight) - card.clientHeight / 2;

    const cardIsVisible = showCardAt > card.offsetTop;

    if(cardIsVisible) {
      card.classList.add('show');
    }
  });
}