Array.prototype.myFilter = function (cb) {
  let arr = this;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6];

let res = arr.myFilter((el) => {
  return el > 2;
});

console.log(res);
