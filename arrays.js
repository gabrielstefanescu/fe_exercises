// Task 1: Find the Maximum Element
// Write a function that finds and returns the maximum element in an array of numbers.
// Test the function with different arrays.
//Solution1
function findTheMaxElement(array) {
  for (let element of array) {
    if (typeof element !== "number") {
      return ("Invalid input");
    }
  }
  return Math.max(...array);
}
let x = findTheMaxElement([1, 5, 10, 109, 40, 35, 20]);
console.log(x);

//Solution2
function findTheMaxElement(array) {
  for (let element of array) {
    if (typeof element !== "number") {
      return ("Invalid input");
    }
  }
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
let x2 = findTheMaxElement([1, 5, 10, 109, 40, 35, 20]);
console.log(x2);

// Task 2: Reverse an Array
// Create a function that reverses the elements of an array without using the built-in reverse method.
// The original array should remain unchanged.
function reverseArray(array) {
  for (let element of array) {
    if (typeof element !== "number") {
      return ("Invalid input");
    }
  }
  let reverseElements = "";
  for (let i = 0; i < array.length; i++) {
    reverseElements += array.length - i + " ";
  }
  return reverseElements;
}
let x3 = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(x3);

// Task 3: Remove Duplicates
// Write a function that removes duplicate values from an array and returns a new array with unique values.
// For example, if the input is [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].
function removeDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let x5 = removeDuplicates([15, 15, 30, 45, 45, 50, 65, 70, 70, 85, 90, 90]);
console.log(x5);

// Task 4: Flatten Nested Arrays
// Implement a function that flattens a nested array into a single flat array.
// For example, if the input is [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].
function flattenArray(arr) {
  let flattenedArray = [];
  function helper(array) {
    for (let i = 0; i < array.length; i++) {
      let val = array[i];
      if (typeof val === "object" && val !== null) {
        helper(val);
      } else {
        flattenedArray.push(val);
      }
    }
  }
  helper(arr);
  return flattenedArray;
}
let flattened = flattenArray([1, 2, [3, 4, 5], [6, [7, 8], 9], 10]);
console.log(flattened);

// Task 5: Array Sorting
// Write a program that prompts the user to enter a list of numbers and then sorts and displays the numbers in ascending order 
// using the sort method. Ensure that the user can enter multiple numbers separated by spaces or commas.
function sortNumbers(array) {
  for (let element of array) {
    if (typeof element !== "number") {
      return "Invalid input";
    }
  }
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let x7 = sortNumbers([100, 15, 21, 55, 35, 20, 65, 29, 1]);
console.log(x7);