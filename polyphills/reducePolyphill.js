//Array.reduce((acc, current, i, arr) => {}, initialValue)

//If user doesn't pass the initialValue, then acc is assigned the value of first element,
//and the current becomes the second element of the array

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    accumulator = accumulator ? cb(accumulator, arr[i], i, arr) : arr[i];
  }
  return accumulator;
};

let arr = [1, 2, 3, 4, 5];

let res = arr.myReduce((acc, current, i, arr) => {
  return acc + current;
}, 0);

console.log(res);
