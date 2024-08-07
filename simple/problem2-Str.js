//logic to move all 0s to end of the string
// let str = "10203040";

// function placeZeroToEnd(str) {
//   let length = str.length;
//   let arr = str.split("");
//   let filterZero = arr.filter((elem) => {
//     return elem !== "0";
//   });
//   let newStr = filterZero.join("");
//   let numberOfZeroToAdd = length - newStr.length;
//   let finalResult = newStr;
//   for (let i = 1; i <= numberOfZeroToAdd; i++) {
//     finalResult = finalResult + 0;
//   }
//   return console.log(finalResult);
// }

// placeZeroToEnd(str);

function placeZeroToEnd(str) {
  let zeroCount = 0;
  let result = "";

  // Count the number of zeros and build the result string without zeros
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      zeroCount++;
    } else {
      result += str[i];
    }
  }

  // Append zeros to the end of the result string
  result += "0".repeat(zeroCount);

  console.log(result);
}

let str = "10203040";
placeZeroToEnd(str); // Output: "12340000"

// write the output for the following
function checkScope(arg) {
  if (arg) {
    let a = "let declaration";
    var b = "var declaration";
    console.log("inside if");
    console.log(a);
    console.log(b);
  } else {
    console.log("inside else");
    console.log(a);
    console.log(b);
  }
  console.log("outside if-else");
  console.log(b);
}

checkScope(false);
