---
sidebar_position: 19
---

# `"use strict"`

`"use strict"` is a directive introduced in ECMAScript 5 (ES5) that enables **strict mode** in JavaScript. Strict mode is a restricted variant of JavaScript that helps catch common coding mistakes, prevents the use of unsafe features, and enforces stricter parsing and error handling.

Strict mode can be applied to an **entire script** or to **individual functions**, and its purpose is to make JavaScript code more secure, robust, and predictable.

## How to Enable Strict Mode

### For the Entire Script

Place `"use strict";` at the very top of the JavaScript file.

```javascript
"use strict";
let x = 3.14;
console.log(x); // Output: 3.14
```

### For Individual Functions

Place `"use strict";` at the beginning of the function body.

```javascript
function strictFunction() {
  "use strict";
  let x = 3.14;
  console.log(x); // Output: 3.14
}

function nonStrictFunction() {
  x = 3.14; // No error in non-strict mode
  console.log(x);
}
```

## Why Use Strict Mode?

Strict mode eliminates some silent errors in JavaScript and converts them into explicit errors, making debugging easier. It also disables certain features of JavaScript that are considered unsafe or prone to mistakes.

## Benefits of Strict Mode

### Prevents the Use of Undeclared Variables

In non-strict mode, assigning a value to an undeclared variable creates it as a global variable. Strict mode prevents this.

```javascript
"use strict";
x = 10; // ReferenceError: x is not defined
```

### Throws Errors for Assignments to Read-Only Properties

Strict mode prevents assigning values to properties that are read-only or non-writable.

```javascript
"use strict";
const obj = Object.freeze({ name: "John" });
obj.name = "Jane"; // TypeError: Cannot assign to read-only property
```

### Disallows Duplicate Parameter Names in Functions

In strict mode, functions cannot have duplicate parameter names.

```javascript
"use strict";
function add(a, a, c) {
  return a + c; // SyntaxError: Duplicate parameter name not allowed
}
```

### Prevents the Use of Octal Literals

Octal literals (numbers starting with `0`) are disallowed in strict mode.

```javascript
"use strict";
let num = 010; // SyntaxError: Octal literals are not allowed in strict mode
```

### Disallows `this` Binding to the Global Object

In strict mode, the value of `this` inside functions that are called globally (i.e., without a specific object context) is `undefined`, rather than the global object.

```javascript
"use strict";
function showThis() {
  console.log(this); // undefined
}
showThis();
```

In non-strict mode, `this` would refer to the global object (`window` in browsers).

### Prevents Deleting Variables, Functions, and Objects

Strict mode throws an error if you try to delete variables, functions, or objects.

```javascript
"use strict";
let x = 10;
delete x; // SyntaxError: Delete of an unqualified identifier in strict mode
```

### Disallows `with` Statements

The `with` statement is prohibited in strict mode as it can make code unpredictable and hard to debug.

```javascript
"use strict";
with (Math) {
  console.log(PI); // SyntaxError: Strict mode code may not include a with statement
}
```

### Secure JavaScript for Future ECMAScript Versions

Strict mode prevents the use of certain reserved keywords for future ECMAScript versions.

```javascript
"use strict";
let public = 10; // SyntaxError: Unexpected strict mode reserved word
```

## Differences Between Strict Mode and Non-Strict Mode

| **Feature**                     | **Strict Mode**                                      | **Non-Strict Mode**                           |
| ------------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| Undeclared variables            | Throws a `ReferenceError`.                           | Implicitly creates global variables.          |
| Duplicate parameter names       | Syntax error.                                        | Allowed without error.                        |
| Use of `with` statements        | Throws a `SyntaxError`.                              | Allowed.                                      |
| Deleting variables or functions | Throws a `SyntaxError`.                              | Allowed (but has no effect).                  |
| `this` in global functions      | `undefined`.                                         | Refers to the global object (e.g., `window`). |
| Octal literals                  | Throws a `SyntaxError`.                              | Allowed, though not recommended.              |
| Reserved keywords               | Throws a `SyntaxError` for reserved future keywords. | Allowed.                                      |

## Use Cases for Strict Mode

1. **Prevent Common Bugs:**
   Strict mode eliminates many silent bugs in JavaScript by throwing errors. For example, accidentally creating global variables can lead to hard-to-find issues.

2. **Secure JavaScript Code:**
   It makes JavaScript code safer by restricting dangerous language features like `with`.

3. **Improve Debugging:**
   Strict mode highlights potential issues and prevents unpredictable behavior, making debugging easier.

4. **Future-Proof Code:**
   Using strict mode ensures compatibility with future versions of ECMAScript, as it prevents the use of reserved keywords.

5. **Cleaner Code for Team Projects:**
   Enforcing strict mode in shared codebases can help maintain consistent coding practices and reduce errors.

## Caveats of Strict Mode

1. **Not Retroactive:**
   Enabling strict mode for a script or function does not affect external libraries or previously written non-strict code.

2. **May Break Legacy Code:**
   If your code relies on behavior allowed in non-strict mode (like implicit global variables or `this` binding to the global object), enabling strict mode may cause errors.

3. **Explicit Opt-In:**
   Strict mode must be explicitly enabled with `"use strict";`. Without this directive, JavaScript operates in non-strict mode.

## Common Mistakes Avoided by Strict Mode

1. Accidentally creating global variables:

   ```javascript
   "use strict";
   x = 10; // ReferenceError: x is not defined
   ```

2. Silent failure when assigning to non-writable properties:

   ```javascript
   "use strict";
   Object.defineProperty(this, "name", { value: "John", writable: false });
   name = "Jane"; // TypeError: Cannot assign to read-only property
   ```

3. Unexpected results from the `with` statement:

   ```javascript
   "use strict";
   with (Math) {
     console.log(PI);
   } // SyntaxError
   ```

4. Accidentally overwriting reserved keywords:
   ```javascript
   "use strict";
   let public = 42; // SyntaxError
   ```

## Best Practices

1. Always use `"use strict";` for modern JavaScript projects to ensure cleaner, more predictable, and safer code.
2. Apply strict mode selectively to functions if you are integrating it into legacy code.
3. Use it in combination with modern JavaScript features like ES6+ classes, modules, and `const`/`let` declarations to ensure better coding practices.
