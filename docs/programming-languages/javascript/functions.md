---
sidebar_position: 5
---

# Functions

In JavaScript, **functions** are core building blocks. A function is a reusable block of code that performs a specific task. Functions allow for modular code, encapsulation, and are essential for asynchronous operations and callback handling.

## Declaring Functions

Functions in JavaScript can be created in several ways, each with unique syntax and behavior.

### Function Declaration

A **function declaration** defines a named function that can be invoked later.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

**Characteristics:**

- Function declarations are hoisted, meaning they are available throughout their scope even before they are declared.

### Function Expression

A **function expression** creates a function as part of an expression, usually by assigning it to a variable.

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!
```

**Characteristics:**

- Function expressions are not hoisted. The function can only be used after the expression is evaluated.

### Arrow Function

An **arrow function** is a concise way to write functions introduced in ES6.

```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Carol")); // Output: Hello, Carol!
```

**Characteristics:**

- Arrow functions have a shorter syntax and are useful for simple functions.
- They do not have their own `this` context (inherited from their enclosing scope).

## Parameters and Arguments

Functions can take **parameters** (placeholders in the function definition) and are passed **arguments** when invoked.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // Output: 8
```

**Default Parameters**: JavaScript allows you to set default values for function parameters.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
```

## Return Statements

Functions use the `return` keyword to return a value to the caller. If there is no `return`, the function returns `undefined` by default.

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // Output: 20
```

**Returning Functions**: Functions in JavaScript can also return other functions.

```javascript
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

## Anonymous Functions

**Anonymous functions** are functions without a name, often used as arguments or immediately invoked.

```javascript
setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);
```

**Immediately Invoked Function Expressions (IIFE)**: An IIFE is an anonymous function that is executed immediately after its definition.

```javascript
(function () {
  console.log("IIFE Executed!");
})();
```

---

## Higher-Order Functions

A **higher-order function** is a function that accepts other functions as arguments or returns a function. Many built-in array methods like `map`, `filter`, and `reduce` are higher-order functions.

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

## Closures

A **closure** is created when an inner function maintains access to variables from its outer function, even after the outer function has finished execution.

```javascript
function outer() {
  const message = "Hello, world!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const sayHello = outer();
sayHello(); // Output: Hello, world!
```

Closures are useful for encapsulating data and creating private variables.

## `this` Context

The `this` keyword refers to the context in which a function is called. In traditional functions, `this` refers to the object calling the function. In arrow functions, `this` is lexically scoped, meaning it refers to the enclosing scope.

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // Output: Hello, Alice

// With arrow function (inherits 'this' from surrounding scope)
const person2 = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};

person2.greet(); // Output: Hello, undefined (since 'this' refers to the global scope)
```

## Function Scope and Hoisting

JavaScript functions are **function-scoped** (or **block-scoped** if using `let` or `const` within blocks). Function declarations are hoisted, meaning they can be called before their definition.

```javascript
console.log(add(2, 3)); // Output: 5

function add(x, y) {
  return x + y;
}
```

## Rest Parameters and Spread Operator

**Rest Parameters** allow a function to accept an indefinite number of arguments as an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

**Spread Operator** lets you spread an array into individual arguments:

```javascript
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // Output: 3
```

## Pure vs. Impure Functions

- **Pure Functions**: A pure function always returns the same result for the same inputs and has no side effects.

```javascript
function add(a, b) {
  return a + b;
}
```

- **Impure Functions**: Impure functions may have side effects, such as modifying global variables or changing input data.

```javascript
let count = 0;
function increment() {
  count++;
}
```
