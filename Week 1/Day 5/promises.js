// let promise = new Promise((resolve, reject) => {
//   console.log("This is a promise");
//   resolve("Successfully Resolved");
// });

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("This is a promise");
    // resolve("Success...");
    reject("Some error occured...");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log(res, "Promise Fullfilled");
});

promise.catch((err) => {
  console.log("Promise was not fullfilled", err);
});

// Suppose this is an API
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success..!");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }

// result = getData(25);
// console.log(result);

//   getData(1, () => {
//     getData(2, () => {
//       getData(3, () => {
//         getData(4);
//       });
//     });
//   });
