function print(city, state) {
  console.log(`I ${this.name}, of age ${this.age} live is ${city}, ${state}`);
}

let obj = {
  name: "Shreya",
  age: 25,
};

// print.apply(obj,[ "Pune", "Maharashtra"]);

Function.prototype.myApply = function (context, argsArray) {
  let myFunction = this;

  if (typeof myFunction !== "function") {
    throw new Error(myFunction + "is not a function, so not callable ");
  }

  if (Array.isArray(argsArray)) {
    throw new Error(argsArray + "should be an array");
  }

  context.fn = myFunction;

  let result = context.fn(...args);

  return result;
};

print.myApply(obj, ["Pune", "Maharashtra"]);
