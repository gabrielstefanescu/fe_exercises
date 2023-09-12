//4. Use functions to repeat actions.

// Exercise 1: Function Declaration
// Write a function called greet that takes a name as an argument and returns a greeting message. 
// For example, if the name is "Alice," the function should return "Hello, Alice!"
function greet(personName) {
  return `Hello, ${personName}!`;
}
console.log(greet("Alice"));

// Exercise 2: Function Expression
// Create a function expression called multiply that takes two numbers as arguments and returns their product. 
// Call the function with different sets of numbers and log the results to the console.
function multiply(a,b) {
  return a*b;
}
console.log(multiply(5,10));

// Exercise 3: Function with Default Parameter
// Write a function called calculateArea that calculates the area of a rectangle.
//  The function should take the length and width as arguments, with a default width of 5 units. Log the area to the console.
function calculateArea(length,width=5) {
  return length*width;
  }
  console.log(calculateArea(11));

// Exercise 4: Function with Variable Number of Arguments
// Create a function called sum that takes any number of arguments and returns their sum. 
// You can use the arguments object to access the arguments inside the function.

//solution 1
function sum() {
  return number1+number2;
}
let number1 = 20;
let number2 = 15;
console.log(sum());

//solution 2
function sum() {
  arguments[0] = 20; // first argument
  arguments[1] = 15; // second argument
  return arguments[0]+arguments[1];
}
console.log(sum());

// Exercise 5: Recursive Function
// Write a recursive function called factorial that calculates the factorial of a positive integer.
// The factorial of a number n is the product of all positive integers from 1 to n. For example, factorial(5) should return 120.
function factorial(x) {
  if (x == 0) {
      return 1;
  }
  else {
      return x * factorial(x - 1);
  }
}
let num = 5;
if (num >= 0) {
  let result = factorial(num);
  console.log(result);
}

//5. Break down tasks and customize functions with parameters

// Exercise 1: Calculate the Area of a Rectangle
// Write a function called calculateRectangleArea that takes the length and width of a rectangle as parameters and returns the area.
//  Call the function with different sets of length and width values.
function calculateRectangleArea() {
  for(let i = 0; i < width.length; i++)
  {
      area.push(width[i] * length[i]);
  }
return area;
}
let area = [];
let width = [4,5,6];
let length = [11,12,13];
console.log(calculateRectangleArea());

// Exercise 2: Find the Maximum Value in an Array
// Create a function called findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
//  Test the function with various arrays.
function findMax() {
  array.sort(function(a, b){return a - b});
  return array;
}
let array = [60, 20, 50, 100, 40, 10, 30, 70];
console.log(findMax());

// Exercise 3: Convert Temperature Units
// Write a function called convertTemperature that converts a temperature from Celsius to Fahrenheit.
// The function should take the temperature in Celsius as a parameter and return the temperature in Fahrenheit.
// Test the function with different temperatures.
function convertTemperature() {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
let celsius = 30;
console.log(convertTemperature());

// Exercise 4: Calculate the Factorial of a Number
// Create a function called calculateFactorial that calculates the factorial of a positive integer.
//  The function should take the integer as a parameter and return the factorial. Test the function with different integers.
function factorial(n) {
  let result = n;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}
//console.log(factorial(7)); - Bad for debugging.
let x = factorial(7) //Better approach for debugging.
console.log(x);

// Exercise 5: Generate a Random Password
// Write a function called generatePassword that generates a random password of a specified length.
// The function should take the password length as a parameter and return the generated password.
// Customize the characters used in the password generation (e.g., letters, numbers, symbols) and test the function with
// different password lengths.
function generatePassword() {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= 10; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}
console.log(generatePassword());
//let x = generatePassword(10); - This approach is better for debugging.
//console.log(x);



//NEW EXERCISES

// Exercise 1: Create a function add() that can either add two numbers or concatenate two strings based on the input type?
function add(arg1, arg2) {
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1.concat(arg2);
  } else if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else {
    console.log("Invalid input");
  }
}
let result = add(30, 40); //returns 70
let result1 = add("Hello ", "World"); //returns Hello World
let result2 = add("Hello ", 40); //returns Invalid input
let result3 = add(30, "40"); //returns Invalid input with the current conditions - otherwise it returns 3040
console.log(result);

// Exercise 2: Write a function "operate(a, b, operation)" that takes two numbers and an "operation" function. 
//Use the "operation" function on the two numbers and return the result.
function operate(a, b, operation) {
  return operation(a, b);
}
function addition(x, y) {
  return x + y;
}
let result4 = operate(15, 25, addition);
console.log(result4);


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

let result5 = operationFactory("add");
console.log(result5(60,5));


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
let result6 = passedVar(50);
console.log(result6);