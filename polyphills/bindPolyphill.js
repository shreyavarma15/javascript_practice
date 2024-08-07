function print(city, state) {
  console.log(`I ${this.name}, of age ${this.age} live is ${city}, ${state}`);
}

let obj = {
  name: "Shreya",
  age: 25,
};

//let newFunc = print.bind(obj, "Pune", "Maharashtra"); OR-
//let newFunc = print.bind(obj); and then newFunc( "Pune", "Maharashtra")

Function.prototype.myBind = function (context, ...args) {
  let myFunction = this;

  if (typeof myFunction !== "function") {
    throw new Error(myFunction + "is not a function, so not callable ");
  }

  context.fn = myFunction;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

// let newFunc = print.myBind(obj, "Pune", "Maharashtra");
// newFunc();

let newFunc = print.myBind(obj);
newFunc("Pune", "Maharashtra");
