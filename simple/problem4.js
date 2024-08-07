//Convert an array of arrays into array of filterObjects
const users = [
  ["David", "USA", 30],
  ["Billy", "Japan", 20],
  ["Mike", "Singapore", 50],
];

const output = users.map((user) => {
  const [name, country, age] = user;
  return { name: name, country: country, age: age };
});
console.log(output);

//More optimised code
const output2 = users.map(([name, country, age]) => {
  return { name, country, age };
});

console.log(output2);
