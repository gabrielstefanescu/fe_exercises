let firstName = "John";
let lastName = "Doe";
let age = 35;
console.log(`${firstName} ${lastName} ${age}`);

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

let counter = 0;
counter++;
counter--;
counter *= 2;
console.log(counter);

let firstName2 = "John";
let lastName2 = "Doe";
console.log(firstName2+" "+lastName2);

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius+"\n"+fahrenheit);