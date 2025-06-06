---
sidebar_position: 12
---

# Closures and Lexical Scoping

## Closures

A **closure** is a fundamental concept in programming, particularly in languages like JavaScript, Python, and Go, that captures the idea of a function "remembering" the variables from its surrounding scope even after that scope has exited. Closures allow functions to access variables defined outside their immediate scope, and this capability is often used for creating encapsulation, maintaining state, and implementing higher-order functions.

In simpler terms, **closures** enable you to "close over" variables from an outer function within an inner function, allowing the inner function to maintain access to these variables after the outer function has finished executing.

### How Closures Work

When a function is declared inside another function, the inner function can access:

1. Its own local variables.
2. The variables declared in its containing (outer) function.
3. Variables in the global scope.

When the outer function finishes executing, its local variables are normally discarded. However, if an inner function **retains a reference to these variables**, they are preserved in the closure, keeping them alive.

#### Example of Closures in JavaScript

```typescript
function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    console.log(counter);
  }

  return innerFunction;
}

const incrementCounter = outerFunction();
incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3
```

In the above example:

1. `innerFunction` is a closure because it "remembers" the `counter` variable from `outerFunction`.
2. Even though `outerFunction` has finished executing, the `counter` variable is preserved because `innerFunction` is still holding a reference to it.

### Key Characteristics of Closures

- Closures enable functions to access variables from their lexical scope, even if the outer function has already returned.
- They help maintain state across multiple invocations without using global variables.
- Each closure maintains its own copy of the variables it has closed over.

### Use Cases of Closures

1. **Data Encapsulation**
   Closures can be used to create private variables, a common pattern for encapsulating state.

   ```typescript
   function createCounter() {
     let count = 0;

     return {
       increment: function () {
         count++;
         console.log(count);
       },
       decrement: function () {
         count--;
         console.log(count);
       },
     };
   }

   const counter = createCounter();
   counter.increment(); // Output: 1
   counter.increment(); // Output: 2
   counter.decrement(); // Output: 1
   ```

2. **Function Factories**
   Closures are often used to create customized functions.

   ```typescript
   function createMultiplier(multiplier: number) {
     return function (value: number) {
       return value * multiplier;
     };
   }

   const double = createMultiplier(2);
   const triple = createMultiplier(3);

   console.log(double(5)); // Output: 10
   console.log(triple(5)); // Output: 15
   ```

3. **Callbacks and Event Handlers**
   Closures are extensively used in asynchronous programming and event handling.

   ```typescript
   function setupEventHandlers() {
     for (let i = 1; i <= 3; i++) {
       setTimeout(function () {
         console.log(`Button ${i} clicked`);
       }, i * 1000);
     }
   }

   setupEventHandlers();
   // Output:
   // Button 1 clicked
   // Button 2 clicked
   // Button 3 clicked
   ```

## Lexical Scoping

**Lexical scoping** (also called **static scoping**) determines how variable names are resolved in nested functions: **the scope of a variable is defined by its position in the source code and the nested structure of the program.**

In a lexically scoped language, a function's scope is defined when the function is written, not when it is executed. This is why a function can "remember" the variables of its surrounding scope—because its scope is determined at definition time.

### Example of Lexical Scoping in JavaScript

```typescript
function outerFunction() {
  let outerVariable = "I'm from outerFunction";

  function innerFunction() {
    console.log(outerVariable);
  }

  innerFunction();
}

outerFunction();
// Output: "I'm from outerFunction"
```

In the above example:

- `innerFunction` has access to `outerVariable` because of **lexical scoping**. The scope is determined by the location of `outerVariable` in the source code (inside `outerFunction`).

### Key Characteristics of Lexical Scoping

1. Variables are resolved based on their location in the code, not the runtime call stack.
2. Functions defined in a specific scope have access to variables declared in that scope and its parent scopes.
3. The nesting of functions in the code defines the scope hierarchy.

### Behavior of Lexical Scoping in Closures

Lexical scoping is the foundation of closures because closures rely on the function's ability to "remember" the variables in the lexical scope where it was created.

#### Example

```typescript
function makeGreeter(greeting: string) {
  return function (name: string) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");

sayHello("Alice"); // Output: "Hello, Alice!"
sayHi("Bob"); // Output: "Hi, Bob!"
```

Here:

- The inner function "remembers" the `greeting` variable because of **lexical scoping**, even after `makeGreeter` has returned.

### Difference Between Closures and Lexical Scoping

| **Closures**                                                                                                       | **Lexical Scoping**                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Closures allow functions to retain access to their lexical environment even after the outer function has executed. | Lexical scoping defines how variable names are resolved based on their location in the source code. |
| Requires a function to be defined within another function to "capture" the outer scope's variables.                | Does not require functions; it's simply a rule for resolving variable names.                        |
| Used for state preservation, data encapsulation, and higher-order functions.                                       | Provides the mechanism by which closures work.                                                      |

### Advantages of Closures

- Closures provide a clean way to encapsulate state and behavior.
- They help avoid global variables by maintaining state in a local, private scope.
- Essential for callbacks, event handlers, and asynchronous programming.

### Common Pitfalls

- **Memory Leaks**: Improper use of closures can lead to memory leaks as variables in the closure may remain in memory longer than necessary.
- **Unexpected Behavior**: Capturing variables in a loop may lead to unexpected results if not handled properly (e.g., capturing the loop variable).

#### Fixing the Loop Issue

```typescript
function setupEventHandlers() {
  for (var i = 1; i <= 3; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(`Button ${i} clicked`);
      }, i * 1000);
    })(i);
  }
}

setupEventHandlers();
```

Here, an **Immediately Invoked Function Expression (IIFE)** is used to create a new scope for each iteration.
