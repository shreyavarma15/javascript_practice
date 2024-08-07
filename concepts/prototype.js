console.log("PROTOTYPE INHERITANCE");

var arr = ["abc", "xyz"];

console.log(arr.__proto__);
console.log(Array.prototype);

console.log(arr.__proto__.__proto__);

//In the Prototype INHERITANCE, OBJECT is the parent.- prototype chaining
//Array, oBjects, Functions, Strings

let obj1 = {
  name: "Shreya",
  job: "IT",
  print: function () {
    console.log(this.name, " works in ", this.job, " industry ");
  },
};

let obj2 = {
  name: "Bhavani",
  job: "Architecture",
  print: function () {
    console.log("I am in obj2 Print");
  },
  obj2Func: function () {
    console.log("A fn written in obj2", this.name);
  },
};

console.log("obj1 proto", obj1.__proto__);
console.log("obj2 proto", obj2.__proto__);

obj2.__proto__ = obj1;

obj1.age = "10";

Object.prototype; //hasOwnProperty, keys(), values()

console.log("obj2 proto after change", obj2.__proto__);

console.log("obj2", obj2);

// let newfn = obj2.print().bind(obj2);

console.log(obj2.print());

console.log(obj2.obj2Func());

// console.log("obj2 proto", obj2.__proto__);
