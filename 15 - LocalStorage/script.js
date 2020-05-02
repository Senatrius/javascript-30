const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function handleSelection(e) {

  if(e.target.name === "select") {
    console.log('selecting all');

    items.map(item => {
      item.done = true;
    })

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  if(e.target.name === "deselect") {
    console.log('deselecting all');

    items.map(item => {
      item.done = false;
    })

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  if(e.target.name === "clear-all") {
    console.log('clear all');

    items = [];

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  if(e.target.name === "clear-selected") {
    console.log('deselecting all');

    items.map((item, index) => {
      if(item.done) {
        items.splice(index, 1);
      }
    })

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }
}

addItems.addEventListener('submit', addItem);
addItems.addEventListener('click', handleSelection);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);