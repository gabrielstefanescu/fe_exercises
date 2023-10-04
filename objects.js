// Task 1: Create an Object
// Create an object representing a car with properties like make, model, year, and color.
//  Then, write a function to display information about the car.

// Task 2: Object Methods
// Extend the car object from Task 1 by adding a method that calculates the age of the car based on the current year.
// Display the car's age using this method.

const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
  color: "blue",
  age: function () {
    return new Date().getFullYear() - car.year;
  },
};
function displayInfo() {
  console.log(
    car.make +
      ", " +
      car.model +
      ", " +
      car.year +
      ", " +
      car.color +
      ", " +
      car.age()
  );
}
displayInfo();

// Task 3: Object Iteration
// Given an object with properties representing items in a shopping cart (e.g., item1, item2, item3),
// write a function to calculate the total price of the items and display it.

const shoppingCart = {
  item1: { name: "Fish", price: 10 },
  item2: { name: "Meat", price: 8 },
  item3: { name: "Bread", price: 1.5 },
  item4: { name: "Sauce", price: 2 },
  item5: { name: "Cheese", price: 3 },
  item6: { name: "Milk", price: 1.2 },
  item7: { name: "Eggs", price: 2.5 },
  item8: { name: "Butter", price: 2.8 },
  item9: { name: "Salt", price: 0.5 },
  item10: { name: "Pepper", price: 0.8 },
  item11: { name: "Sugar", price: 1 },
  item12: { name: "Flour", price: 0.9 },
  item13: { name: "Rice", price: 2.2 },
  item14: { name: "Pasta", price: 1.8 },
  item15: { name: "Olive Oil", price: 4 },
  item16: { name: "Tomatoes", price: 2.5 },
  item17: { name: "Potatoes", price: 1.5 },
  item18: { name: "Onions", price: 1 },
  item19: { name: "Garlic", price: 0.7 },
  item20: { name: "Carrots", price: 1.2 },
  item21: { name: "Apples", price: 2 },
  item22: { name: "Bananas", price: 1.5 },
  item23: { name: "Grapes", price: 3 },
  item24: { name: "Oranges", price: 2.5 },
  item25: { name: "Lemons", price: 1.8 },
  item26: { name: "Strawberries", price: 4 },
  item27: { name: "Blueberries", price: 5 },
  item28: { name: "Raspberries", price: 6 },
  item29: { name: "Blackberries", price: 5.5 },
  item30: { name: "Pineapple", price: 3.5 },
  item31: { name: "Mango", price: 2.8 },
  item32: { name: "Papaya", price: 3 },
  item33: { name: "Peach", price: 2.5 },
  item34: { name: "Plum", price: 2 },
  item35: { name: "Cherries", price: 4.5 },
  item36: { name: "Pears", price: 2.2 },
  item37: { name: "Kiwi", price: 1.8 },
  item38: { name: "Watermelon", price: 5 },
  item39: { name: "Cantaloupe", price: 3.5 },
  item40: { name: "Honeydew", price: 3.8 },
  item41: { name: "Ginger", price: 2.5 },
  item42: { name: "Cinnamon", price: 2 },
  item43: { name: "Nutmeg", price: 3 },
  item44: { name: "Cloves", price: 2.5 },
  item45: { name: "Chili Powder", price: 1.5 },
  item46: { name: "Cumin", price: 1.8 },
  item47: { name: "Coriander", price: 2 },
  item48: { name: "Turmeric", price: 2.5 },
  item49: { name: "Paprika", price: 1.5 },
  item50: { name: "Oregano", price: 1.2 },
};

function calculatePrice() {
  return console.log(
    shoppingCart.item1.price +
      shoppingCart.item2.price +
      shoppingCart.item3.price +
      shoppingCart.item4.price +
      "$"
  );
}
calculatePrice();

// Task 4: Object Prototypes
// Create a prototype object for "Person" with properties like name, age, and a method to introduce themselves.
//  Then, create multiple instances of "Person" and call their introduction method.

const person = {
  name: this.name,
  age: this.age,
  introduction: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

const person1 = Object.create(person);
person1.name = "Alice";
person1.age = 20;
person1.introduction();

const person2 = Object.create(person);
person1.name = "Alan";
person1.age = 25;
person1.introduction();

// Task 5: Object Composition
// Create two objects, one representing a "Book" with properties like title, author, and year,
// and another representing a "Library" that contains an array of books.
// Write functions to add a book to the library and display the list of books in the library.

let book = {
  title: "Great Expectations",
  author: "Charles Dickens",
  year: 1861,
};

let library = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
];

function addBook() {
  library.push(book);
}
addBook();

function displayList() {
  for (let key in library) {
    console.log(library[key]);
  }
}
displayList();
