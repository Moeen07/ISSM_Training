let score = prompt("Enter score");
let grade;

if (score >= 80) {
  grade = "A";
} else if (score >= 70 && score <= 79) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else {
  grade = "F";
}

console.log(grade);
