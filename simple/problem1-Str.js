//count the maximun numbers of repeating characters in a string

function maxRepeatingCharacters(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxCount = 0;
  const valuesOfCharObj = Object.values(charCount);

  for (let count of valuesOfCharObj) {
    maxCount = Math.max(maxCount, count);
  }

  return console.log(maxCount);
}

const str = "Hello world";

maxRepeatingCharacters(str);
