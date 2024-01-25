let bt1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let box = document.querySelector("#box");

btn1.onclick = () => {
  console.log("Button was clicked");
};

btn2.onclick = () => {
  console.log("Button was clicked twice!");
};

// e is event object
box.onmouseover = (e) => {
  console.log("Mouse was hovered here");
  console.log(e.target);
  console.log(e.type);
};
