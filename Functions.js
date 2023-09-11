// Create a function called operationFactory. This function should take a string, either "add", "subtract", "multiply",
// or "divide", and return a new function that takes two parameters and
// performs the specified arithmetic operation on those parameters.

function operationFactory(operation) {
  function performOperation(a, b) {
    if (operation == "add") {
      return a + b;
    } else if (operation == "subtract") {
      return a - b;
    } else if (operation == "multiply") {
      return a * b;
    } else if (operation == "divide") {
      return a / b;
    }
  }
  return performOperation(60, 5);
}
let result = operationFactory("add");
console.log(result);

// Create two functions, outer and inner. The outer function should have two local variables and should return the inner function.
// The inner function should sum the two local variables from the outer function and a third variable passed as an argument to inner.
// Demonstrate how closure works by executing these functions.

function outer(num1,num2,num3) {
  let localVar1 = num1;
  let localVar2 = num2;
  let passedVar = num3;
  inner(passedVar)
  function inner() {
    return localVar1 + localVar2 + passedVar;
  }
  return inner();
}
console.log(outer(10,20,50));
