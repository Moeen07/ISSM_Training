// function vowelCount(str) {
//   let num = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       num++;
//     }
//   }
//   return num;
// }

// console.log(vowelCount("alienware"));

const vowelCount = (str) => {
  let num = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      num++;
    }
  }
  return num;
};

console.log(vowelCount("scientist"));
