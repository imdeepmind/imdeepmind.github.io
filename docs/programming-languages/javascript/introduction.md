---
sidebar_position: 1
---

# Introduction

- JavaScript is a high-level, interpreted programming language.
- Primarily used for enhancing web pages, enabling interactive features.

## Data Types

- **Primitive Types**:
  - **String**: Represents text (e.g., `"Hello, World!"`).
  - **Number**: Represents numeric values (e.g., `42`, `3.14`).
  - **Boolean**: Represents `true` or `false`.
  - **Null**: Represents an intentional absence of any value.
  - **Undefined**: A variable that has been declared but not assigned a value.
  - **Symbol**: A unique and immutable value.
- **Complex Types**:
  - **Object**: A collection of properties (e.g., `{ name: "John", age: 30 }`).
  - **Array**: An ordered list of values (e.g., `[1, 2, 3]`).

## Variables

- Declared using `var`, `let`, or `const`:
  - `var`: Function-scoped or globally scoped, can be re-declared.
  - `let`: Block-scoped, cannot be re-declared in the same block.
  - `const`: Block-scoped, must be initialized and cannot be re-assigned.

## Operators

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)

## Control Structures

- **Conditional Statements**:
  ```javascript
  if (condition) {
    // code to execute if condition is true
  } else {
    // code to execute if condition is false
  }
  ```
- **Switch Statement**:

  ```javascript
  switch (expression) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
    // code
  }
  ```

- **Loops**:
  - **for loop**:
    ```javascript
    for (let i = 0; i < 5; i++) {
      // code
    }
    ```
  - **while loop**:
    ```javascript
    while (condition) {
      // code
    }
    ```
- **Functions**:
  - Declared using the `function` keyword
    ```javascript
    function myFunction(param1, param2) {
      // code
    }
    ```
  - **Arrow functions**:
    ```javascript
    const myFunction = (param1, param2) => {
      // code
    };
    ```

## Objects

- Creating an object:

  ```javascript
  const person = {
      name: "Alice",
      age: 25,
      greet: function() {
          console.log("Hello!");
      }
  };`
  ```

## Arrays

- Creating an array:

  ```javascript
  const fruits = ["apple", "banana", "cherry"];
  ```

- Common array methods: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.map()`, `.filter()`, `.reduce()`
