---
sidebar_position: 3
---

# Data Types

JavaScript is a dynamically typed language, which means variables are not bound to specific data types. However, it still categorizes values into distinct data types, broadly divided into _primitive_ and _non-primitive_ types.

## Primitive Data Types

Primitive data types are immutable and represent a single value. There are seven primitive data types in JavaScript:

### Number

Represents numeric values, both integer and floating-point numbers. JavaScript uses double-precision 64-bit format (IEEE 754) for numbers.

- Examples:

  ```javascript
  let integer = 42;
  let float = 3.14;
  let negative = -10;
  ```

- Special numeric values:

  - `Infinity` and `-Infinity`

    ```javascript
    console.log(1 / 0); // Infinity
    ```

  - `NaN` (Not-a-Number)

    ```javascript
    console.log(Math.sqrt(-1)); // NaN
    ```

### BigInt

Used to represent integers of arbitrary length.

- Syntax:

  ```javascript
  let bigInt = 1234567890123456789012345678901234567890n;
  ```

- Operations with BigInt and Number are not allowed:

  ```javascript
  let sum = bigInt + 10n; // Works
  let invalid = bigInt + 10; // TypeError
  ```

### String

Represents textual data enclosed within single (`'`), double (`"`), or template literals (`` ` ``).

- Examples:

  ```javascript
  let single = "Hello";
  let double = "World";
  let template = `Sum: ${5 + 10}`; // Template literal
  ```

### Boolean

Represents logical values: `true` or `false`.

- Examples:

  ```javascript
  let isTrue = true;
  let isFalse = false;
  ```

### Undefined

Indicates a variable has been declared but not assigned a value.

- Example:

  ```javascript
  let unassigned;
  console.log(unassigned); // undefined
  ```

### Null

Represents the intentional absence of any object value.

- Example:

  ```javascript
  let empty = null;
  console.log(empty); // null
  ```

### Symbol

Introduced in ES6, used to create unique and immutable identifiers.

- Example:

  ```javascript
  let sym1 = Symbol("description");
  let sym2 = Symbol("description");
  console.log(sym1 === sym2); // false
  ```

## Non-Primitive Data Types

Non-primitive types are mutable and include objects, arrays, and functions.

### Object

An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.

- Example:

  ```javascript
  let person = {
    name: "John",
    age: 30,
    greet: function () {
      console.log("Hello");
    },
  };
  ```

### Array

A type of object used to store ordered lists of values. Arrays are zero-indexed.

- Example:

  ```javascript
  let fruits = ["Apple", "Banana", "Cherry"];
  ```

### Function

Functions are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

- Example:

  ```javascript
  function add(a, b) {
    return a + b;
  }
  let subtract = (a, b) => a - b;
  ```

### Date, Set, Map, WeakSet, WeakMap

JavaScript includes several built-in objects for more specialized purposes:

- **Date**: For handling dates and times.

  ```javascript
  let now = new Date();
  ```

- **Set**: For storing unique values.

  ```javascript
  let unique = new Set([1, 2, 2, 3]);
  ```

- **Map**: For key-value pairs with any data type as keys.

  ```javascript
  let map = new Map();
  map.set("key", "value");
  ```

- **WeakSet** and **WeakMap**: Similar to Set and Map but allow garbage collection of unused entries.

## Type Coercion

JavaScript performs implicit type conversion (coercion) in certain operations:

- Example:

  ```javascript
  console.log("5" - 3); // 2 (string '5' is coerced to number)
  console.log("5" + 3); // '53' (number 3 is coerced to string)
  ```

## Checking Data Types

To determine the type of a value, use:

### `typeof` Operator

Returns the type of a value as a string.

- Examples:

  ```javascript
  console.log(typeof 42); // "number"
  console.log(typeof null); // "object" (quirk in JavaScript)
  console.log(typeof undefined); // "undefined"
  ```

### `instanceof` Operator

Checks if an object is an instance of a specific class or constructor.

- Example:

  ```javascript
  console.log([] instanceof Array); // true
  console.log({} instanceof Object); // true
  ```

### `Array.isArray` Method

Used to check if a value is an array.

- Example:

  ```javascript
  console.log(Array.isArray([])); // true
  ```

## Summary

- **Primitive types**: Immutable, single values like `Number`, `String`, and `Boolean`.
- **Non-primitive types**: Mutable, complex types like `Object`, `Array`, and `Function`.
- Use `typeof`, `instanceof`, and `Array.isArray` for type checking.
- JavaScript's type system supports flexibility but requires careful handling to avoid bugs due to coercion or type mismatches.
