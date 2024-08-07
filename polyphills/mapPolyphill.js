//Array.map((el, i, arr) => {})

Array.prototype.myMap = function (cb) {
  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(cb(arr[i], i, arr));
  }

  return temp;
};

// for (let i = 0; i < this.length; i++) {
//     if (this.indexOf(this[i]) > -1) {
//       result[i] = cb(this[i], i, this);
//     }

let arr = [1, 2, 3];

let res = arr.myMap((el) => {
  return el * 3;
});

console.log(res);
