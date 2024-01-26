const employee = {
  calcTax() {
    console.log("This is tax function");
  },
};

const harshadMehta = {
  salary: 40000,
};

const amirJamal = {
  salary: 40000,
  calcTax() {
    console.log("This is tax function for Amir");
  },
};

// Making custom prototype
harshadMehta.__proto__ = employee;
amirJamal.__proto__ = employee;

console.log(harshadMehta.calcTax());
console.log(amirJamal.calcTax());
