const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const someAbove18 = () => {
  const results = [];

  people.some(person => {
    const currentYear = new Date().getFullYear();

    if(currentYear - person.year >= 18) {
      results.push(person);
    }
  })

  console.clear();
  console.table(results);
}

const allAbove18 = () => {
  const result = people.every(person => {
    const currentYear = new Date().getFullYear();

    return currentYear - person.year >= 18;
  })

  console.clear();
  console.log(result ? "Everyone is above 18" : "Not everyone is above 18");
}

const input = document.querySelector('.id-input');

const findById = () => {
  comments.find(comment => {
    if(input.value == comment.id) {
      console.clear();
      console.table(comment);
    }
  })
}

const deleteById = () => {
  const id = comments.findIndex(comment => input.value == comment.id);
  const result = [...comments.slice(0, id), ...comments.slice(id + 1)];

  console.clear();
  console.table(result);
}