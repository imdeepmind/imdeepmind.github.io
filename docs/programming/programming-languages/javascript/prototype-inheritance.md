---
sidebar_position: 15
---

# Prototypes and Inheritance

## Prototypes

In JavaScript, **prototypes** are a fundamental mechanism for object inheritance. Every object has a prototype, which is another object that it inherits properties and methods from. When you try to access a property or method on an object, JavaScript first checks if the property exists on the object itself. If not, it looks up the prototype chain (more on this below).

- **Prototype of an object:** Every object has an internal property `[[Prototype]]` (accessed via `__proto__` or `Object.getPrototypeOf()`), which points to another object.
- **Constructor functions and prototypes:** Functions in JavaScript automatically have a `prototype` property, which is an object. This object contains properties and methods that are shared by all instances created by that constructor function.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice", 30);
person1.sayHello(); // Outputs: Hello, my name is Alice
```

## Prototypal Inheritance

**Prototypal inheritance** refers to the way objects can inherit properties and methods from other objects through the prototype chain. When a property or method is accessed on an object, JavaScript first checks if it's defined on the object itself. If not, it checks the prototype of that object, and so on up the prototype chain.

```javascript
const animal = {
  eat: function () {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.eat(); // Inherited from animal, Outputs: Eating...
dog.bark(); // Outputs: Woof!
```

## Prototype Chain

The **prototype chain** is a series of links between an object and its prototype. Every object in JavaScript is linked to another object via its prototype, and this chain can continue indefinitely, although in most cases it ends with `Object.prototype`.

- `Object.prototype` is the root of all JavaScript objects, and it does not have a prototype.
- If a property or method is not found in an object's prototype, the search continues up the chain until `Object.prototype` is reached.

```javascript
const obj = { name: "John" };
console.log(obj.toString()); // toString is inherited from Object.prototype
```

## Factory Functions

A **factory function** is a function that creates and returns an object. This pattern allows you to create multiple objects with the same properties and methods without using the `new` keyword or constructor functions.

Factory functions can be used to simulate classical inheritance by setting up prototype chains manually.

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

const person1 = createPerson("Alice", 30);
person1.sayHello(); // Outputs: Hello, my name is Alice
```

## `new` Keyword

The **`new` keyword** is used to create instances of a constructor function. When you use `new`, it does the following:

1. Creates a new empty object.
2. Sets the prototype of the new object to the constructor function’s `prototype` property.
3. Binds `this` inside the constructor function to the new object.
4. Returns the new object (unless the constructor explicitly returns something else).

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Alice
```
