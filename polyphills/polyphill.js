//forEach polyphill
Array.prototype.myForEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      callback.call(context, this[i], i, this);
    }
  }
};

let arr = [1, 2, 3];
arr.myForEach((e) => {
  console.log(e);
});

//polyphill for Bind method

Function.prototype.myBind = function (...args1) {
  let obj = this;
  let params = args1.slice(1);
  return function (...args2) {
    obj.apply(args1[0], [...params, ...args2]);
  };
};

const obj = {
  firstname: "Shreya",
  lastname: "Varma",
  printName: function (city, state) {
    console.log(this.firstname, this.lastname, city, state);
  },
};

const obj2 = {
  firstname: "Jyoti",
  lastname: "Varma",
};

const print = obj.printName.myBind(obj2, "Dhule", "MH");
console.log(print());

//polyphill for map method
//Map method takes 3 args- element, index, original array itself

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      result[i] = cb(this[i], i, this);
    }
  }
  return result;
};
