// import axios from "axios";
// const axios = require("axios"); // legacy way

const API_URL = "https://github.com/shreyavarma15";

// const promise = axios({
//   method: "get",
//   url: "https://jsonplaceholder.typicode.com/todos/1",
//   responseType: "stream",
// });
// .then(function (response) {
//   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
// });

const promiseData = fetch("https://github.com/shreyavarma15");

console.log(promiseData);
promiseData
  .then((response) => {
    console.log("earlier response ==", response);
    return response.json();
  })
  .then((response) => {
    console.log("final response ==", response.title);
  })
  .catch((err) => {
    console.log("catch block ERROR ==", err);
  });

//PromiseAll, Promise reject
