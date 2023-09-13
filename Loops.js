// Task 1: Sum of Natural Numbers
// Write a program that calculates the sum of the first N natural numbers (positive integers).
// Prompt the user for the value of N and use a while loop to compute the sum.

let number = 5;
let result = 0;
while (number > 0) {
  result += number;
  number--;
}
console.log(result);

// Task 2: Factorial Calculation
// Create a function that calculates the factorial of a given number using a for loop.
// The factorial of a number N is the product of all positive integers from 1 to N.

function factorial(n) {
  let result = 1;
  for (let i=0; n > i; n--) {
    result *= n;
  }
  return result;
}
let x = factorial(6);
console.log(x);

// Task 3: Find Prime Numbers
// Write a program that finds and prints all prime numbers between a given range (e.g., 1 to 100).
// Use a for loop for iterating through numbers and implement a prime-checking function.

let count = 0;
function primeCheck(num1, num2) {
  let primes = [];
  for (let j = 2; j <= num2; j++) {
    for (let i = num1; i <= j; i++) {
      if (j % i == 0) {
        count++;
      }
    }
    if (count == 2) {
        primes.push(j);
    }
    count = 0;
  }
  return primes;
}
let x2 = primeCheck(1, 100);
console.log(x2);

// Task 4: Reverse a String
// Implement a function that reverses a given string using a for loop.
// For example, if the input is "hello," the function should return "olleh."

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
let x4 = reverseString("Hello");
console.log(x4);

// Task 5: Pattern Printing
// Write a program to print the following pattern using nested for loops:
// 1
// 12
// 123
// 1234
// 12345
let num = 5;
for (let col = 1; col <= num; col++) {
    row = "";
  for (let i = 1; i <= col; i++) {
    row += i;
    }
    console.log(row);
}
