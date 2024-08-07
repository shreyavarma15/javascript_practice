function groupValues(names) {
  const groupedNames = {};

  // Group names by their first letter
  names.forEach((name) => {
    const firstLetter = name[0].toUpperCase();
    if (!groupedNames[firstLetter]) {
      groupedNames[firstLetter] = [];
    }
    groupedNames[firstLetter].push(name);
  });

  // Convert groupedNames object to array of objects
  const result = Object.keys(groupedNames).map((letter) => ({
    [letter]: groupedNames[letter],
  }));

  // Sort the array by keys
  result.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

  return result;
}

const names = [
  "Richard",
  "Elmer",
  "Zack",
  "Jess",
  "Jake",
  "Riley",
  "Drew",
  "Anthony",
  "Aaron",
  "Bernard",
];

const output = groupValues(names);
console.log(output);
