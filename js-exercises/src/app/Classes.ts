//   1. Create a Class for Cars:
// Define a class named Car with properties like make, model, and year.
// Add a method to the class that displays information about the car.
// Create instances of the class and demonstrate the use of the class and its methods.

class car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    Information() {
      console.log(
        `The car is ${this.make}, model ${this.model}, year ${this.year}.`
      );
    }
  }
  
  const car1 = new car("Porsche", "911 Carrera", 2022);
  car1.Information();
  const car2 = new car("Ferarri", "SF90 STRADALE", 2023);
  car2.Information();
  
  // 2. Inheritance:
  // Create a class Animal with properties and methods.
  //  Then, create a subclass Bird that inherits from Animal and adds specific properties and methods for birds.
  //  Demonstrate the use of inheritance by creating instances of both classes.
  
  class Animal {
    species: string;
      action: string;
      order: string;
      food: string;
    constructor(species: string, action: string, order: string, food: string) {
      this.species = species;
      this.action = action;
      this.order = order;
      this.food = food;
    }
    animalInformation() {
      return `The animal is ${this.species}, it likes to ${this.action}, belongs to order ${this.order} and eats ${this.food}.`;
    }
  }
  
  const animal1 = new Animal("tiger", "run", "carnivore", "meat");
  console.log(animal1.animalInformation());
  
  class Bird extends Animal {
    move: string;
      coverage: string;
    constructor(species: string, action: string, order: string, food: string, move: string, coverage: string) {
      super(species, action, order, food);
      this.move = move;
      this.coverage = coverage;
    }
    animalInformationExtended() {
      console.log(
        this.animalInformation() +
          ` It can also ${this.move} and it has ${this.coverage}.`
      );
    }
  }
  
  const animal2 = new Bird(
    "eagle",
    "jump",
    "carnivore",
    "meat",
    "fly",
    "feathers"
  );
  animal2.animalInformationExtended();
  
  // 3. Encapsulation:
  // Design a class representing a bank account. Include properties like balance and methods for deposit and withdrawal.
  // Implement encapsulation by making the balance property private and providing public methods for interacting with the balance.
  
  class bankAccount {
    #firstName;
    #lastName;
    #id;
    #balance;
    constructor(firstName: string, lastName: string, id: number, balance: number) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#id = id;
      this.#balance = balance;
    }
    showBalance() {
      console.log(
        `Name: ${this.#firstName} ${this.#lastName}, ID: ${
          this.#id
        }. Your current ballance is: ${this.#balance}$.`
      );
    }
  
    deposit(x: number) {
      this.#balance += x;
      return "Current ballance: " + this.#balance + "$";
    }
  
    withdrawal(y: number) {
      if (this.#balance >= y) {
         this.#balance -= y;
         return console.log("Current ballance: " + this.#balance + "$");
      } else {
         console.log("Insufficient balance");
      }
    }
  }
  
  const user1 = new bankAccount("John", "Doe", 123456789, 1000);
  user1.showBalance();
  let deposit = user1.deposit(20);
  console.log(deposit);
  user1.withdrawal(600);
  
  
  // 4. Static Methods:
  // Create a class representing a utility tool. Add static methods to the class that perform common utility functions. 
  // Demonstrate calling these static methods without creating an instance of the class.
  
  class utilityTool {
    static add(x: number,y: number) {
      return x + y;
    }
  
    static divide(x: number,y: number) {
      return x - y;
    }
  
    static compare(x: number,y: number) {
      return x > y;
    }
  
  }
  let result = utilityTool.add(10,20);
  let result2 = utilityTool.divide(100,20);
  let result3 = utilityTool.compare(40,20);
  console.log(result);
  console.log(result2);
  console.log(result3);
  
  
  // 5. Prototype Methods:
  // Design a class representing a geometric shape (e.g., a circle or rectangle). 
  // Add prototype methods to calculate area and perimeter. 
  // Create instances of the class and use these prototype methods to compute and display the area and perimeter.
  
  
  class rectangle {
    sideA: number;
      sideB: number;
    constructor(sideA: number, sideB: number) {
      this.sideA = sideA;
      this.sideB = sideB;
    }
    area() {
     console.log(this.sideA * this.sideB);
    }
    perimeter() {
      console.log(2*(this.sideA + this.sideB));
    }
  }
  
  let rectangle1 = new rectangle(4, 5);
  rectangle1.area();
  rectangle1.perimeter();
  
  let rectangle2 = new rectangle(6, 7);
  rectangle2.area();
  rectangle2.perimeter();