// Task 1: Find the Maximum Element
// Write a function that finds and returns the maximum element in an array of numbers.
// Test the function with different arrays.
//Solution1
function findTheMaxElement(array) {
  return Math.max(...array);
}
let x = findTheMaxElement([1, 5, 10, 109, 40, 35, 20]);
console.log(x);

//Solution2
function findTheMaxElement(array) {
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
//Solution1:
function reverseArray(array) {
  let reverseElements = "";
  for (let i = array.length - 1; i >= 0; i--) {
    reverseElements += array[i];
  }
  return reverseElements;
}
let x3 = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(x3);

//Solution2:
function reverseArray(array) {
  let reverseElements = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array[i];
    reverseElements.push(element);
  }
  return reverseElements;
}
let x4 = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(x4);

// Task 3: Remove Duplicates
// Write a function that removes duplicate values from an array and returns a new array with unique values.
// For example, if the input is [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].
function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}
let x5 = removeDuplicates([15, 15, 30, 45, 45, 50, 65, 70, 70, 85, 90, 90]);
console.log(x5);

// Task 4: Flatten Nested Arrays
// Implement a function that flattens a nested array into a single flat array.
// For example, if the input is [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].
function flatten(array) {
    return array.flat(Infinity);
}
let x6 = flatten([10, [15, 20], 25, [35, [60, 65, 70], 90, true, "Element"]]);
console.log(x6);

// Task 5: Array Sorting
// Write a program that prompts the user to enter a list of numbers and then sorts and displays the numbers in ascending order 
// using the sort method. Ensure that the user can enter multiple numbers separated by spaces or commas.
function sortNumbers(array) {
  for (let element of array) {
    if (typeof element !== "number") {
      return "Invalid input";
    }
  }
  array.sort(function(a, b){return a - b});
  return array;
}
let x7 = sortNumbers([100, 15, 21, 55, 35, 20, 65, 29, 1]);
console.log(x7);