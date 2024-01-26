const employee = {
  calcTax() {
    console.log("This is tax function");
  },
};

const harshadMehta = {
  salary: 40000,
};
// Making custom prototype
harshadMehta.__proto__ = employee;
console.log(harshadMehta.calcTax());
