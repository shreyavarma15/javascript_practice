function fn() {
  console.log("Javascript");

  for (var i = 1; i < 6; i++) {
    function inner(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    inner(i);
  }

  console.log("Hello World!");
}

//5 times loop, 5 setTimeouts are sitting in cb queue

// fn();

function x() {
  for (let i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 2000);
    }
    close(i);
  }
}

// x();

//CONSOLES
setTimeout(() => {
  console.log("1");
}, 0);

new Promise((resolve) => {
  console.log("2");
  resolve();
}).then(() => {
  console.log("3");
});

console.log("4");

queueMicrotask(() => {
  console.log("5");
});

new Promise((resolve, reject) => {
  reject("6");
}).catch(console.log);

// 2, 4, 3, 6,5, 1
