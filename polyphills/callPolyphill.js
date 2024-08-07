function print(city, state) {
  console.log(`I ${this.name}, of age ${this.age} live is ${city}, ${state}`);
}

let obj = {
  name: "Shreya",
  age: 25,
};

// print.call(obj, "Pune", "Maharashtra");

Function.prototype.myCall = function (context, ...args) {
  let myFunction = this;

  if (typeof myFunction !== "function") {
    throw new Error(myFunction + "is not a function, so not callable ");
  }

  context.fn = myFunction;
  let result = context.fn(...args);

  delete context.fn;

  return result;
};

print.myCall(obj, "Pune", "Maharashtra");
