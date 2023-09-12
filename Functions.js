// Create a function called operationFactory. This function should take a string, either "add", "subtract", "multiply",
// or "divide", and return a new function that takes two parameters and
// performs the specified arithmetic operation on those parameters.


function operationFactory(operation) {
  
    if (operation == "add") {
      return function (a, b) {
        return a + b;
      }
    } else if (operation == "subtract") {
      return function (a, b) {
        return a - b;
      }
    } else if (operation == "multiply") {
      return function (a, b) {
        return a * b;
      }
    } else if (operation == "divide") {
      return function (a, b) {
        return a / b;
      }
    }
  }

let result = operationFactory("add");
console.log(result(60,5));


// Create two functions, outer and inner. The outer function should have two local variables and should return the inner function.
// The inner function should sum the two local variables from the outer function and a third variable passed as an argument to inner.
// Demonstrate how closure works by executing these functions.

function outer() {
  let localVar1 = 10;
  let localVar2 = 20;
  function inner(num) {
    return localVar1 + localVar2 + num;
  }
  return inner;
}
let passedVar = outer();
let result1 = passedVar(50);
console.log(result1);