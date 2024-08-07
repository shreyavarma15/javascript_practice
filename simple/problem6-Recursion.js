function flattenArray(arr) {
  let result = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el));
    } else {
      result.push(el);
    }
  });
  return result;
}
let arr = [1, 2, [3, 4, 5, [6, 7, [8]]]];
console.log(flattenArray(arr));
