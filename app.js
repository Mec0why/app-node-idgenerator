const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = [
  'Mike',
  'Will',
  'Dustin',
  'Lucas',
  'Steve',
  'Jim',
  'Jonathan',
];
const femaleNames = [
  'Max',
  'Eleven',
  'Nancy',
  'Joyce',
  'Robin',
  'Erica',
  'Karen',
];
const lastNames = [
  'Wheeler',
  'Hopper',
  'Byers',
  'Henderson',
  'Sinclair',
  'Mayfield',
  'Harrington',
  'Buckley',
];

const randChoice = (arr) => {
  let randName = Math.floor(Math.random() * (arr.length - 1));
  const name = arr[randName];
  return name;
};

let people = [];

for (let i = 0; i < 20; i++) {
  const randGender = randChoice(genders);

  let name = '';

  if (randGender === 'M') {
    name = randChoice(maleNames);
  } else {
    name = randChoice(femaleNames);
  }

  const lastName =
    lastNames[Math.floor(Math.random() * (lastNames.length - 1))];

  const age = Math.floor(Math.random() * (78 - 18) + 18);

  const idGenerator = {
    gender: randGender,
    name: name,
    lastName: lastName,
    age: age,
  };

  people.push(idGenerator);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw console.log('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});
