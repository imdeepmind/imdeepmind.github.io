---
sidebar_position: 16
---

# Object-Oriented Programming (OOPs)

Object-Oriented Programming (OOPs) is a programming paradigm that models real-world entities using objects. It provides a structured approach to organize and manage code by encapsulating data and functionality together. OOPs promotes reusability, scalability, and maintainability by employing key principles such as inheritance, encapsulation, polymorphism, and abstraction.

## Core Concepts of OOP

### Objects

- An object is a collection of **properties** and **methods**.
- Properties are key-value pairs that hold data, while methods are functions associated with the object.

**Example:**

```javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log(`${this.brand} ${this.model} is starting`);
  },
};

car.start(); // Output: Toyota Camry is starting
```

### Classes

A class is a blueprint for creating objects. It defines the structure and behavior of the object. In JavaScript, classes were introduced in ES6 (ECMAScript 2015).

**Example:**

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.start(); // Output: Toyota Camry is starting
```

### Encapsulation

Encapsulation refers to bundling the data (properties) and methods that operate on the data into a single unit (class or object). It also allows restricting direct access to some components using **private fields** or **methods**.

**Example:**

```javascript
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
// console.log(account.#balance); // Error: Private field cannot be accessed directly
```

### Inheritance

Inheritance allows a class to inherit properties and methods from another class. This helps in reusing existing code and extending functionality.

**Example:**

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call the parent class constructor
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.start(); // Output: Toyota Camry is starting
```

### Polymorphism

Polymorphism means "many forms." It allows methods to be overridden in derived classes, enabling different behaviors for the same method name.

**Example:**

```javascript
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());
// Output:
// Animal makes a sound
// Dog barks
// Cat meows
```

### Abstraction

Abstraction hides complex implementation details and exposes only the necessary parts of an object. In JavaScript, you can achieve abstraction by using classes and methods, and by combining public and private members.

**Example:**

```javascript
class CoffeeMachine {
  #waterLevel; // Private property

  constructor() {
    this.#waterLevel = 0;
  }

  fillWater(amount) {
    this.#waterLevel += amount;
    console.log(`Water level: ${this.#waterLevel}`);
  }

  brewCoffee() {
    if (this.#waterLevel > 0) {
      console.log("Brewing coffee...");
      this.#waterLevel -= 1;
    } else {
      console.log("Not enough water");
    }
  }
}

const machine = new CoffeeMachine();
machine.fillWater(2); // Output: Water level: 2
machine.brewCoffee(); // Output: Brewing coffee...
```

## Pillars of OOP

The following are the four main principles (pillars) of Object-Oriented Programming:

1. **Encapsulation**: Bundling data and methods into a single unit and restricting access to some parts.
2. **Abstraction**: Hiding implementation details and exposing only essential functionality.
3. **Inheritance**: Reusing code by deriving new classes from existing ones.
4. **Polymorphism**: Allowing the same interface to be used for different types.

## Features of OOP in JavaScript

### Constructor Functions (Pre-ES6)

Before ES6, JavaScript used constructor functions to create objects.

**Example:**

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.start = function () {
  console.log(`${this.brand} ${this.model} is starting`);
};

const myCar = new Car("Toyota", "Camry");
myCar.start(); // Output: Toyota Camry is starting
```

### Prototypal Inheritance

JavaScript is a prototype-based language. Every object in JavaScript has an internal `[[Prototype]]` property that refers to another object from which it can inherit properties and methods.

**Example:**

```javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const dog = Object.create(animal); // Create an object inheriting from `animal`
dog.barks = true;

console.log(dog.eats); // Output: true (inherited from `animal`)
dog.walk(); // Output: Animal walks
```

### ES6 Classes

With ES6, JavaScript introduced the `class` syntax, which simplifies the creation of objects and inheritance.

## Advantages of OOP

1. **Code Reusability**: Inheritance allows reusing existing code.
2. **Scalability**: OOP makes it easier to manage large applications.
3. **Maintainability**: Encapsulation ensures better organization of code.
4. **Flexibility**: Polymorphism makes code flexible and extensible.

## Disadvantages of OOP

1. **Complexity**: OOP can introduce unnecessary complexity for small programs.
2. **Performance Overhead**: The use of objects and inheritance can sometimes add overhead.
3. **Learning Curve**: Understanding OOP concepts like inheritance and polymorphism can be challenging for beginners.

## OOP vs. Functional Programming

| **Aspect**           | **OOP**                                | **Functional Programming**                    |
| -------------------- | -------------------------------------- | --------------------------------------------- |
| **State Management** | Uses objects to manage state.          | Uses immutable data and pure functions.       |
| **Code Structure**   | Organized around classes and objects.  | Organized around functions and composition.   |
| **Reusability**      | Achieved through inheritance.          | Achieved through higher-order functions.      |
| **Suitability**      | Best for modeling real-world entities. | Best for tasks involving data transformation. |

## Real-World Use Cases

1. **Game Development**: OOP is used to model entities like players, enemies, and game levels.
2. **UI Frameworks**: Libraries like React use OOP concepts to manage components.
3. **Backend Development**: OOP is commonly used in frameworks like Django, Ruby on Rails, and Spring.
