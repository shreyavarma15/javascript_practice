function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rollDice(num) {
  var res;
  var rolledNum = getRandomArbitrary(1, 7);
  var i = 1;

  console.log("rolledNum", rolledNum);

  if (rolledNum !== 6 && i !== num) {
    rollDice(num - 1);
    i = i + 1;
  } else {
    res = rolledNum;
  }

  return res;
}
