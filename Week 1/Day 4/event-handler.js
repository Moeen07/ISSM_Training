let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let box = document.querySelector("#box");

// btn1.onclick = () => {
//   console.log("Button was clicked");
// };

btn2.onclick = () => {
  console.log("Button was clicked twice!");
};

// e is event object
box.onmouseover = (e) => {
  console.log("Mouse was hovered here");
  console.log(e.target);
  console.log(e.type);
};
// Event listeners are useful because we can create multiple listeners thus enabling ourselves to do multiple tasks
// on a single event
btn1.addEventListener("click", (e) => {
  console.log("Button 1 was clicked");
  console.log(e.type);
});
btn1.addEventListener("click", (e) => {
  console.log("Button 1 was clicked - handler 2");
});

const handler3 = () => {
  console.log("Button 1 was clicked - handler 3");
};

btn1.addEventListener("click", handler3);

// Removing event listener
btn1.removeEventListener("click", handler3);
