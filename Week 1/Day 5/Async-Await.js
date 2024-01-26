// async keyword...means the function will return a promise
// await keyword... pauses execution of the async function

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("Success");
//     }, 3000);
//   });
// }

// getWeatherData = async () => {
//   await api(); //1st call
//   await api(); //2ndcall
//   console.log("Waiting for data");
// };

// getWeatherData();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

getAllData = async () => {
  await getData(1);
  await getData(2);
  await getData(3);
};

getAllData();
