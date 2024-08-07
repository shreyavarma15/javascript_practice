// const arr = [[1, 2], 1, [2, "A"], "A"];

function getFrequency(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        res[arr[i][j]] = (res[arr[i][j]] || 0) + 1;
      }
    } else {
      res[arr[i]] = (res[arr[i]] || 0) + 1;
    }
  }
  return res;
}

//more optimised solution
function getFrequency(arr) {
  const res = new Map();
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        res.set(subElement, (res.get(subElement) || 0) + 1);
      }
    } else {
      res.set(element, (res.get(element) || 0) + 1);
    }
  }
  return res;
}



//fn with any name- accept single param

function myFunc(a) {
  let b = 10;
  return a + b;
}

function myFunc2(x) {
  let y = 20;
  return function () {
    myFunc(x * y);
  };
}

let newFn = myFunc2(10);
console.log(newFn());
