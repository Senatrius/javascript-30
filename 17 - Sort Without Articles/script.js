const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.getElementById('bands');

function populateList(array = [], target) {
  array.map(item => {
    const listItem = document.createElement('li');

    listItem.textContent = item;
    target.appendChild(listItem);
  })
}

function sortList(e) {
  e.preventDefault();

  const articleRegex = new RegExp('^(the |a |an )', 'i');

  const sorted = bands.sort((a, b) => {
    return a.replace(articleRegex, "") > b.replace(articleRegex, "") ? 1 : -1 
  })

  list.innerHTML = '';
  populateList(sorted, list);
}

populateList(bands, list);

document.addEventListener('click', sortList);