---
sidebar_position: 2
---

# Variables

Variables in JavaScript are used to store data values, which can be of various types like numbers, strings, objects, and arrays.

## Variable Declaration Keywords

JavaScript offers three main keywords to declare variables: `var`, `let`, and `const`.

### `var`

- **Scope**: `var` is function-scoped or globally scoped. This means if declared inside a function, it can only be accessed within that function; if declared outside, it’s accessible everywhere.
- **Hoisting**: Variables declared with `var` are hoisted, meaning they can be accessed before their declaration, but they are initialized as `undefined` until the actual declaration is reached.
- **Re-declaration**: You can re-declare `var` variables in the same scope.
  Example:

```javascript
var name = "Alice";
console.log(name); // Outputs: Alice
```

### `let`

- **Scope**: `let` is block-scoped, meaning it’s only accessible within the nearest enclosing block (like within an `if` statement or a loop).
- **Hoisting**: Similar to `var`, `let` variables are hoisted, but accessing them before declaration results in a `ReferenceError`.
- **Re-declaration**: You cannot re-declare a `let` variable in the same block.

Example:

```javascript
let age = 25;
if (true) {
  let age = 30; // Different scope
  console.log(age); // Outputs: 30
}
console.log(age); // Outputs: 25
```

### `const`

- **Scope**: Like `let`, `const` is also block-scoped.
- **Hoisting**: `const` variables are hoisted and cannot be accessed before their declaration.
- **Re-declaration**: You cannot re-declare or re-assign a `const` variable. It must be initialized at the time of declaration.

Example:

```javascript
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable
console.log(pi); // Outputs: 3.14
```

## Variable Scope

Scope defines where a variable is accessible in your code.

### Global Scope

- Variables declared outside any function or block are in the global scope and can be accessed from anywhere in your code.

Example:

```javascript
var globalVar = "I am global!";
function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Outputs: I am global!
```

### Local Scope

- Variables declared inside a function are local to that function and cannot be accessed outside it.

Example:

```javascript
function myFunction() {
  var localVar = "I am local!";
  console.log(localVar);
}
myFunction(); // Outputs: I am local!
// console.log(localVar); // Error: localVar is not defined
```

### Block Scope

- Variables declared with `let` and `const` within a block (e.g., inside an `if` statement) are limited to that block.

Example:

```javascript
if (true) {
  let blockVar = "I am block-scoped!";
  console.log(blockVar); // Outputs: I am block-scoped!
}
// console.log(blockVar); // Error: blockVar is not defined
```

## Namespaces

- **Definition**: A namespace is a container that helps organize code and prevents name collisions. It allows grouping related variables and functions together under a single identifier.
- **Usage**: Namespaces are especially useful in larger applications to avoid conflicts between variables and functions with the same name.

### Creating a Namespace

You can create a namespace using an object:

```javascript
const MyNamespace = {
  variable1: "Value 1",
  variable2: "Value 2",
  myFunction: function () {
    console.log("Function inside namespace");
  },
};

// Accessing namespace properties
console.log(MyNamespace.variable1); // Outputs: Value 1
MyNamespace.myFunction(); // Outputs: Function inside namespace
```

### Nested Namespaces

Namespaces can be nested to create a hierarchy:

```javascript
const App = {
  Module1: {
    variable1: "Module 1 Variable",
    function1: function () {
      console.log("Function in Module 1");
    },
  },
  Module2: {
    variable2: "Module 2 Variable",
    function2: function () {
      console.log("Function in Module 2");
    },
  },
};

// Accessing nested namespace properties
console.log(App.Module1.variable1); // Outputs: Module 1 Variable
App.Module2.function2(); // Outputs: Function in Module 2
```
