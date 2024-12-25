---
sidebar_position: 6
---

# Conditions and Loops

## Conditionals

Conditionals allow you to control the flow of your program based on certain conditions. JavaScript provides several ways to handle conditional logic.

### `if` Statement

The `if` statement is the simplest form of conditional. It executes a block of code only if a specified condition evaluates to `true`.

```javascript
if (condition) {
  // Code to execute if condition is true
}
```

**Example:**

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}
```

### `if...else` Statement

The `if...else` statement allows you to specify a block of code to execute when the condition is true, and another block of code to execute when it is false.

```javascript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

**Example:**

```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

### `else if` Statement

The `else if` statement allows for multiple conditions to be checked in sequence. If the first condition is false, it checks the next one, and so on.

```javascript
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the conditions are true
}
```

**Example:**

```javascript
let age = 20;
if (age >= 65) {
  console.log("You are a senior");
} else if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

### Ternary Operator

The ternary operator provides a shorthand for an `if...else` statement. It's used for simple conditional expressions.

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Example:**

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // 'Adult'
```

### Switch Statement

A `switch` statement is used to execute one of many blocks of code based on the value of a variable or expression. It’s an alternative to multiple `if...else if` statements when checking for several possible conditions.

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
  // Code to execute if expression doesn't match any value
}
```

**Example:**

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}
```

## Loops in JavaScript

Loops allow you to repeat a block of code multiple times until a specified condition is met.

### `for` Loop

The `for` loop is the most commonly used loop, ideal when you know the number of iterations beforehand.

```javascript
for (initialization; condition; increment / decrement) {
  // Code to execute on each iteration
}
```

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0 1 2 3 4
}
```

### `while` Loop

The `while` loop executes the block of code as long as the specified condition evaluates to `true`. If the condition is false initially, the block will not execute.

```javascript
while (condition) {
  // Code to execute while the condition is true
}
```

**Example:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0 1 2 3 4
  i++;
}
```

### `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code is executed at least once before checking the condition.

```javascript
do {
  // Code to execute at least once
} while (condition);
```

**Example:**

```javascript
let i = 0;
do {
  console.log(i); // Outputs: 0 1 2 3 4
  i++;
} while (i < 5);
```

### `for...in` Loop

The `for...in` loop is used to iterate over the properties of an object. It is not commonly used for arrays because the order of properties is not guaranteed.

```javascript
for (let key in object) {
  // Code to execute for each property of the object
}
```

**Example:**

```javascript
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Outputs:
// name: Alice
// age: 25
```

### `for...of` Loop

The `for...of` loop is used to iterate over iterable objects like arrays, strings, and other collections. It provides a simpler way to loop through the values of an iterable.

```javascript
for (let item of iterable) {
  // Code to execute for each item in the iterable
}
```

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num); // Outputs: 1 2 3 4 5
}
```

## Important Notes on Loops and Conditionals

### Short-circuiting in Logical Operators

- JavaScript uses short-circuit evaluation in logical operators (`&&`, `||`). This means the evaluation stops as soon as the result is determined.
- `&&` stops when a `false` value is encountered, and `||` stops when a `true` value is encountered.

**Example:**

```javascript
let x = 0;
if (x && 1 / x) {
  // This code will not run because x is falsy (0).
}
```

### Breaking and Continuing in Loops

- You can use the `break` statement to exit a loop early, and the `continue` statement to skip the current iteration and move to the next.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the iteration when i equals 2
  }
  console.log(i); // Outputs: 0 1 3 4
}
```

### Infinite Loops

- Be cautious with loops that have conditions that never become `false`, as they can result in infinite loops, which can crash the browser or application.

**Example:**

```javascript
while (true) {
  // This will run forever unless explicitly broken out of
}
```
