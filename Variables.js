// Exercise 1: Variable Declaration
// Declare three variables (firstName, lastName, and age) and assign your name and age to them.
//  Then, log a message to the console that displays your name and age.

let firstName = "John";
let lastName = "Doe";
let age = 35;
console.log(`${firstName} ${lastName} ${age}`);

// Exercise 2: Variable Types
// Create variables to store values of different data types: a number, a string, a boolean, an array, and an object.
// Log the types of these variables to the console.

let typeNumber = 20;
let typeString = "String";
let typeBoolean = true;
let typeArray = ["Array"];
let typeObject = { key1: 10, key2: "value2" };
console.log(
  typeNumber +
    "\n" +
    typeString +
    "\n" +
    typeBoolean +
    "\n" +
    typeArray +
    "\n" +
    JSON.stringify(typeObject)
);

// Exercise 3: Variable Manipulation
// Declare a variable counter and set its initial value to 0.
// Then, increment it by 1, decrement it by 1, and multiply it by 2. Log the final value of counter to the console.
let counter = 0;
counter++;
counter--;
counter *= 2;
console.log(counter);

// Exercise 4: String Concatenation
// Create two variables, firstName and lastName, with your first and last names.
// Use string concatenation to create a full name and log it to the console.

let firstName2 = "John";
let lastName2 = "Doe";
console.log(firstName2 + " " + lastName2);

// Exercise 5: Temperature Conversion
// Declare a variable celsius and set it to a temperature in Celsius.
// Convert this temperature to Fahrenheit using the formula Fahrenheit = (Celsius * 9/5) + 32.
// Log the temperature in both Celsius and Fahrenheit to the console.

let celsius = 30;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + "\n" + fahrenheit);
