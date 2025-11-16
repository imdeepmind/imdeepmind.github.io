---
sidebar_position: 8
---

# Execution Context

JavaScript is a single-threaded, synchronous programming language. Despite its asynchronous capabilities (using features like `setTimeout`, Promises, etc.), its execution model revolves around the **Execution Context**, which is the environment in which JavaScript code is evaluated and executed.

An **Execution Context** contains information about the code being executed, including variable declarations, functions, `this` keyword binding, and the outer environment.

## Types of Execution Contexts

JavaScript has three main types of execution contexts:

### Global Execution Context (GEC)

- This is the default execution context.
- It is created when the JavaScript code is first executed.
- It is associated with the global object, which is:
  - `window` in browsers.
  - `global` in Node.js.
- Responsibilities:
  - Sets up the global object (`window` or `global`).
  - Sets the value of `this` to the global object.
  - Prepares the global scope for execution of the code.

### Function Execution Context (FEC)

- Created whenever a function is invoked.
- A new execution context is created for each function call.
- Contains everything required to execute the function:
  1. **Arguments Object:** Provides access to the arguments passed to the function.
  2. **Scope Chain:** Used for variable resolution. Contains:
     - Variables declared inside the function.
     - Variables from the outer environment (closures).
  3. **`this` Binding:** Refers to the context in which the function is called.
  4. **Variable Environment:** Stores function-specific variables, constants, and inner functions.

### Eval Execution Context

- Created when code is executed using the `eval()` function.
- Not commonly used and considered bad practice due to security and performance issues.

## Phases of Execution Context

An execution context has two phases:

### Creation Phase

- This happens before the code is executed.
- Key operations:

  1. **Global Context (GEC):**
     - Creates the global object (`window` or `global`).
     - Initializes `this` to the global object.
     - Sets up memory (heap) for variables and functions in the global scope.
     - Hoisting happens:
       - Variable declarations are set to `undefined`.
       - Functions are fully defined (stored in memory).
  2. **Function Context (FEC):**
     - Sets up the `arguments` object.
     - Hoists variable declarations (initialized to `undefined`).
     - Hoists function declarations.
     - Sets up `this` binding.

- **Key Concept: Hoisting**

  - During the creation phase, JavaScript moves function and variable declarations to the top of the context.
  - Example:

    ```javascript
    console.log(a); // undefined (due to hoisting)
    var a = 10;

    greet(); // Hello!
    function greet() {
      console.log("Hello!");
    }
    ```

### Execution Phase

- JavaScript executes the code line by line.
- It assigns values to variables and executes functions.
- If a function is called, a new function execution context is pushed onto the **Call Stack**.
