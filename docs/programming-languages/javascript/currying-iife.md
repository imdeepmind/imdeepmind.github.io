---
sidebar_position: 14
---

# Currying and IIFE

JavaScript has several advanced functional programming concepts that make it highly versatile. Two such concepts are **currying** and **Immediately Invoked Function Expressions (IIFE)**. This note explains these concepts in detail, with examples.

## Currying

**Currying** is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, the function takes the first argument, returns another function to take the next argument, and so on, until all arguments are supplied. When all arguments are provided, the original function is executed.

In simpler terms, currying converts a function with multiple arguments into a series of nested functions, each accepting one argument.

### How Currying Works

The primary idea behind currying is **partial application** of arguments. This makes functions more reusable and composable.

### Syntax and Example

Here’s an example of a regular function and its curried version:

```typescript
// Regular function
function multiply(a: number, b: number, c: number): number {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); // Output: 24

// Curried function
function curriedMultiply(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a * b * c;
    };
  };
}

const multiplyBy2 = curriedMultiply(2);
const multiplyBy2And3 = multiplyBy2(3);
console.log(multiplyBy2And3(4)); // Output: 24
```

### Key Points About Currying

1. **Decomposition**: Currying breaks down a function into smaller, more manageable pieces.
2. **Reusability**: Functions can be partially applied and reused.
3. **Declarative Code**: Currying improves readability by creating more specific and clear function calls.

### Real-World Use Cases of Currying

#### Function Composition

Currying allows for creating reusable utilities.

```typescript
function add(a: number) {
  return function (b: number) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(10)); // Output: 15
```

#### Event Handlers

You can pre-configure a handler for specific actions using currying.

```typescript
function eventHandler(type: string) {
  return function (message: string) {
    console.log(`[${type}] ${message}`);
  };
}

const errorHandler = eventHandler("Error");
const infoHandler = eventHandler("Info");

errorHandler("Something went wrong!"); // Output: [Error] Something went wrong!
infoHandler("Operation successful!"); // Output: [Info] Operation successful!
```

#### API Request Utility

Currying can help set up configurable functions for API calls.

```typescript
function apiRequest(baseUrl: string) {
  return function (endpoint: string) {
    return function (params: Record<string, string>) {
      const query = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      return `${baseUrl}/${endpoint}?${query}`;
    };
  };
}

const githubApi = apiRequest("https://api.github.com");
const searchUsers = githubApi("search/users");
console.log(searchUsers({ q: "john", page: "1" }));
// Output: https://api.github.com/search/users?q=john&page=1
```

#### Automatic Currying with Utility Libraries

Manually currying can become verbose. Utility libraries like **Lodash** or **Ramda** provide functions to automatically curry any function.

```typescript
import _ from "lodash";

const curriedFunction = _.curry((a, b, c) => a + b + c);
console.log(curriedFunction(1)(2)(3)); // Output: 6
```

### Advantages of Currying

1. **Improved Reusability**: Functions can be reused in different configurations.
2. **Easier Composition**: Currying makes it easier to compose functions in functional programming.
3. **Declarative Syntax**: It leads to cleaner, more readable code.

### Disadvantages

1. **Performance Overhead**: Currying may introduce slight performance overhead due to multiple function calls.
2. **Verbosity**: It can make code harder to understand for beginners.

## Immediately Invoked Function Expressions (IIFE)

An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that is executed immediately after its definition. It is a self-executing anonymous function, often used to create a new scope and avoid polluting the global namespace.

### Syntax of IIFE

The syntax of an IIFE involves wrapping the function in parentheses and immediately invoking it.

```typescript
(function () {
  console.log("IIFE executed!");
})();
```

Or, using the arrow function syntax:

```typescript
(() => {
  console.log("IIFE executed!");
})();
```

### Purpose of IIFE

1. **Encapsulation**: Variables inside an IIFE are not accessible outside of it, preventing pollution of the global namespace.
2. **Isolation**: IIFEs are commonly used to isolate code blocks and avoid variable name conflicts.
3. **Execution Context**: IIFEs execute immediately, making them suitable for initialization code.

### Example of IIFE

```typescript
const result = (function () {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(result); // Output: 30
```

Here, the variables `a` and `b` are encapsulated within the IIFE and do not pollute the global scope.

### Use Cases of IIFE

1. **Module Pattern**
   IIFEs are often used to implement the module pattern, providing private state and methods.

   ```typescript
   const Counter = (function () {
     let count = 0;

     return {
       increment: function () {
         count++;
         console.log(count);
       },
       reset: function () {
         count = 0;
         console.log("Counter reset");
       },
     };
   })();

   Counter.increment(); // Output: 1
   Counter.increment(); // Output: 2
   Counter.reset(); // Output: Counter reset
   ```

2. **Avoiding Global Scope Pollution**
   IIFEs prevent variables from leaking into the global scope.

   ```typescript
   (function () {
     const temp = "I'm inside an IIFE!";
     console.log(temp);
   })();

   // console.log(temp); // Error: temp is not defined
   ```

3. **One-Time Initialization**
   IIFEs are useful for running one-time setup code.

   ```typescript
   (() => {
     console.log("Application initialized!");
   })();
   ```

### Advantages of IIFE

1. **Encapsulation**: Keeps the code modular and prevents conflicts.
2. **Global Scope Protection**: Reduces the risk of overwriting global variables.
3. **Execution Control**: Executes code immediately without the need for external invocation.

### Disadvantages of IIFE

1. **Readability**: For beginners, the syntax of IIFE can be confusing.
2. **Debugging**: Debugging code inside an IIFE can be tricky due to its immediate execution.

### IIFE vs. Currying

| **Aspect**     | **IIFE**                                                                  | **Currying**                                                                              |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Definition** | A function executed immediately after being defined.                      | A technique to transform a function into a series of functions, each taking one argument. |
| **Purpose**    | Used for encapsulation, isolation, and immediate execution.               | Used for partial application, function composition, and improving reusability.            |
| **Execution**  | Executes immediately without external invocation.                         | Requires arguments to be provided over multiple calls to eventually execute the logic.    |
| **Use Cases**  | Module pattern, avoiding global scope pollution, one-time initialization. | Function composition, reusable utilities, declarative function calls.                     |
