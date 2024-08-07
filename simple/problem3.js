//remove object from array in javascript

const filterObjects = (key, value) => {
  const arr = [123, "Shreya Varma", "Pune", { "age 12": "abc" }, [1, 2, 3]];

  return arr.filter((e) => {
    if (e && e.hasOwnProperty(key) && e[key] === value) {
      return false;
    }
    return true;
  });
};

console.log(filterObjects("age 12", "abc"));

// also arr.splice(4, 1)
_______________________________________________________________________;
let arr = [1, 3, 4, 5];

// Inserting 2 at the second position
arr.splice(1, 0, 2);

console.log(arr); // Output: [1, 2, 3, 4, 5]
