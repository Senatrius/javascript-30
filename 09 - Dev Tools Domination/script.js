const dogs = [
	{ name: "Snickers", age: 2 },
	{ name: "Hugo", age: 8 },
];
const apiInput = document.querySelector('.api-input');
let isChanged = false;

function changeBtn() {
	const btn = document.querySelectorAll(".btn");

	if (!isChanged) {
		btn.forEach((item) => {
			item.style.color = "white";
			item.style.background = "hsl(210, 65%, 40%)";
			item.style.boxShadow = "0 .2rem 0 hsl(215, 60%, 35%)";
			item.style.borderRadius = "100rem";
		});

		isChanged = true;
	} else {
		btn.forEach((item) => {
			item.style.color = "black";
			item.style.background = "white";
			item.style.boxShadow = ".1rem .1rem .3rem rgba(12, 12, 12, .2)";
			item.style.borderRadius = "4px";
		});

		isChanged = false;
	}
}

// Regular
function regular() {
  console.log('Just a regular console log');
}

// Interpolated
function interpolated() {
  console.log('Just like a regular console log... but with a variable. API input: %s', apiInput.value);
}

// Styled
function styled() {
  console.log('%c It\'s a styled console.log. Isn\'t that nice.', 'color: white; background: #1a7254; border-radius: 100px; font-size: 16px; padding: 2px 5px');
}

// warning!
function warning() {
  console.warn('Warning. It\'s a warning.')
}

// Error :|
function error() {
  console.error('Did you forget to check your ;\'s again?')
}

// Info
function info() {
  console.info('Fun fact!: Loading.....')
}

// Testing
function assert() {
  console.assert(apiInput.value !== '', 'Your API input appears to be empty');
}

// clearing
function clearing() {
  console.clear();
}

// Viewing DOM Elements
function viewDOM() {
  console.dir(window.document.body);
}

// Grouping together
function group() {
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
      console.log(`${dog.name} is ${dog.age} years old.`);
      console.info(`${dog.name} is a good dog.`)
    console.groupEnd(`${dog.name}`);
  })
}

// counting
function count() {
  console.count('a');
  console.count('b');
  console.count('a');
  console.count('c');
  console.count('b');
  console.count('a');
  console.count('c');
  console.count('c');
  console.count('b');
  console.count('a');
  console.count('a');
  console.count('b');
}

// timing
function time() {
  console.time('Fetching API')
    fetch(apiInput.value)
        .then(response => response.json())
        .then(data => {
          console.groupCollapsed('API Data')
            console.log(data);
          console.groupEnd('API data')

          console.timeEnd('Fetching API')
        })
        .catch(err => {console.error('API fetching failed. Check your API input.')});
}