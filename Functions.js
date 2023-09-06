//Write a function called greet that takes a name as an argument and returns a greeting message.
//For example, if the name is "Alice," the function should return "Hello, Alice!"

function greet(personName) {
  return `Hello, ${personName}!`;
}
// let personName = "Alice";
console.log(greet("Alice"));

carName = "Saab";

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
  return carName;
}
//carName = "Saab";
console.log(carName);
//console.log(myFunction());

console.log(myFunction(5));
function myFunction(y) {
  return y * y;
}

const x = (x, y) => x * y;
console.log(x(6, 5));

