const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const input = document.querySelector('.search');
const display = document.querySelector('.suggestion-block');
const cities = [];

fetch(endpoint)
      .then(response => response.json())
      .then(data => cities.push(...data));
  
function findMatches(wordToMatch, arrayToSearch) {
  inputRegex = new RegExp(wordToMatch, 'gi');

  return arrayToSearch.filter(place => {
    return (place.city.match(inputRegex) || place.state.match(inputRegex));
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayResults() {
  const results = findMatches(this.value, cities);

  display.innerHTML = results.map(item => {
    const highlightRegex = new RegExp(this.value, 'gi');
    const cityName = item.city.replace(highlightRegex, `<span class="match">${this.value}</span>`)
    const stateName = item.state.replace(highlightRegex, `<span class="match">${this.value}</span>`)

    return `
    <li>
      <div class="location">
        <span class="city">${cityName}, ${stateName}</span>
        <span class="population">Pop. ${numberWithCommas(item.population)}</span>
      </div>
      <div class="distance">
        <i class="fas fa-location-arrow"></i>
        <span class="km">000 km</span>
      </div>
    </li>
    `
  }).join('');

  if(this.value === '') {
    display.innerHTML = null;
  }
}

input.addEventListener('change', displayResults);
input.addEventListener('keyup', displayResults);