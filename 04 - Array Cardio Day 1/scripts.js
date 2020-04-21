const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

function bornIn1500s() {
  const result = inventors.filter(inv => (inv.year >= 1500 && inv.year < 1600));

  console.clear();
  console.table(result);
}

function inventorNames() {
  const result = inventors.map(inv => `${inv.first} ${inv.last}`);

  console.clear();
  console.log(result);
}

function sortByBirth() {
  const result = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);

  console.clear();
  console.table(result);
}

function totalYears() {
  const result = inventors.reduce((total, next) => {
    const lived = next.passed - next.year;

    return total + lived;
  }, 0)

  console.clear();
  console.log(result + " total years...");
}

function sortByLifetime() {
  const result = inventors.sort((a, b) => {
    const aLived = a.passed - a.year;
    const bLived = b.passed - b.year;

    return aLived > bLived ? -1 : 1;
  }) 

  console.clear();
  console.table(result);
}

function sortBoulevards() {
  if(window.location !== 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris') {
    console.error('Whoops, you should go to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris and run the code there!');
  }
}

function sortPeopleByLastName() {
  const result = people.sort((a, b) => {
    const [aLastName, aFirstName] = a.split(', ');
    const [bLastName, bFirstName] = b.split(', ');

    return aLastName > bLastName ? -1 : 1;
  })

  console.clear();
  console.table(result);
}

function countInstances() {
  const result = data.reduce((object, item) => {
    if(!object[item]) {
      object[item] = 0;
    }

    object[item]++
    return object;
  }, {})

  console.clear();
  console.table(result);
}