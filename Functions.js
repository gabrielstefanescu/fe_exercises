// 4. Use functions to repeat actions.

//Exercise 1: Function Declaration
//Write a function called greet that takes a name as an argument and returns a greeting message.
//For example, if the name is "Alice," the function should return "Hello, Alice!"

function greet(personName) {
  return `Hello, ${personName}!`;
}
console.log(greet("Alice"));

// Exercise 2: Function Expression
// Create a function expression called multiply that takes two numbers as arguments and returns their product.
// Call the function with different sets of numbers and log the results to the console.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10));

// Exercise 3: Function with Default Parameter
// Write a function called calculateArea that calculates the area of a rectangle.
// The function should take the length and width as arguments, with a default width of 5 units. Log the area to the console.

function calculateArea(length, width = 5) {
  return length * width;
}
console.log(calculateArea(11));

// Exercise 4: Function with Variable Number of Arguments
// Create a function called sum that takes any number of arguments and returns their sum.
//  You can use the arguments object to access the arguments inside the function.

//solution 1
function sum(number1, number2) {
  return number1 + number2;
}
console.log(sum(15, 20));

//solution 2
function sum() {
  return arguments[0] + arguments[1];
}
console.log(sum(15, 20));

// Exercise 5: Recursive Function
// Write a recursive function called factorial that calculates the factorial of a positive integer.
// The factorial of a number n is the product of all positive integers from 1 to n.
// For example, factorial(5) should return 120.

//Solution 1 - Factorial without recursion
// function factorial(n) {
//   let result = n;
//   while (n > 1) {
//     n--;
//     result *= n;
//   }
//   return result;
// }
// console.log(factorial(5));

//Solution 2 - Factorial with recursion
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
let num = 5;
if (num >= 0) {
  let result = factorial(num);
  console.log(result);
}

// 5. Break down tasks and customize functions with parameters

// Exercise 1: Calculate the Area of a Rectangle

// Write a function called calculateRectangleArea that takes the length and width of a rectangle as parameters and returns the area.
//  Call the function with different sets of length and width values.
function calculateRectangleArea(width, length) {
  for (let i = 0; i < width.length; i++) {
    area.push(width[i] * length[i]);
  }
  return area;
}
let area = [];
console.log(calculateRectangleArea([4, 5, 6], [11, 12, 13]));

// Exercise 2: Find the Maximum Value in an Array

// Create a function called findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
//  Test the function with various arrays.

function findMax(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}
console.log(findMax([60, 20, 50, 100, 40, 10, 30, 70]));

// Exercise 3: Convert Temperature Units

// Write a function called convertTemperature that converts a temperature from Celsius to Fahrenheit.
//  The function should take the temperature in Celsius as a parameter and return the temperature in Fahrenheit.
//   Test the function with different temperatures.

function convertTemperature(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertTemperature(20));

// Exercise 4: Calculate the Factorial of a Number

// Create a function called calculateFactorial that calculates the factorial of a positive integer.
// The function should take the integer as a parameter and return the factorial. Test the function with different integers.
function factorial(n) {
  let result = n;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}
console.log(factorial(6));

// Exercise 5: Generate a Random Password

// Write a function called generatePassword that generates a random password of a specified length.
// The function should take the password length as a parameter and return the generated password.
// Customize the characters used in the password generation (e.g., letters, numbers, symbols)
// and test the function with different password lengths.

function generatePassword(length) {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
}
console.log(generatePassword(10));

//NEW EXERCISES

// Exercise 1: Create a function add() that can either add two numbers or concatenate two strings based on the input type?
function add(arg1, arg2) {
  return arg1 + arg2;
}
let result = add(30, 40);
console.log(result);

// Exercise 2: Write a function "operate(a, b, add)" that takes two numbers and an "add" function. Use the "add" function on the two numbers and return the result.
function operate(a, b, add) {
  function add() {
    return a + b;
  }
 return add();
}
let result2 = add(25, 15);
console.log(result2);