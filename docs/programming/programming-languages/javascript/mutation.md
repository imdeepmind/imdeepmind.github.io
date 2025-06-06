---
sidebar_position: 4
---

# Mutation and Immutability

In JavaScript, **mutation** refers to modifying or changing a value directly in memory, while **immutability** involves creating new values without altering the original data. Understanding which data types are mutable or immutable is essential for managing data flow and avoiding unintended side effects.

## Mutable vs. Immutable Data Types in JavaScript

1.  Immutable Data Types (Cannot be Mutated)
2.  Mutable Data Types (Can be Mutated)

### Immutable Data Types

JavaScript’s **primitive types** are immutable. This includes:

- `Number`
- `String`
- `Boolean`
- `BigInt`
- `Symbol`
- `Undefined`
- `Null`

These data types are immutable because their values, once created, cannot be changed directly. Instead, any operation that appears to modify an immutable type actually creates a new value.

#### Example with Primitive Types

```javascript
let x = 10;
let y = x; // Copies the value of x (10) to y

y = 20; // Changing y does not affect x
console.log(x); // Output: 10
console.log(y); // Output: 20
```

In this example, reassigning `y` does not affect `x` because `y` holds a copy of the original value rather than a reference to it.

#### Immutable String Example

```javascript
let str = "Hello";
let newStr = str.replace("H", "J");

console.log(str); // Output: "Hello" (original string remains unchanged)
console.log(newStr); // Output: "Jello" (new string created)
```

Even though it seems like `replace()` would modify `str`, the operation returns a new string without altering the original one.

### Mutable Data Types

In JavaScript, **reference types** like objects and arrays are mutable. This includes:

- `Object`
- `Array`
- `Function`

These data types are mutable because they are stored as references, which means multiple variables can refer to the same object or array in memory. Mutating a reference type via one variable affects all variables that reference the same object.

#### Example with Mutable Objects

```javascript
let person = { name: "Alice" };
let alias = person; // Both person and alias refer to the same object

alias.name = "Bob"; // Modifying alias also affects person
console.log(person.name); // Output: "Bob"
console.log(alias.name); // Output: "Bob"
```

In this example, `person` and `alias` both point to the same object in memory. Changing the `name` property on `alias` mutates the object, which is reflected when accessing `person.name`.

#### Mutable Array Example

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr1 and arr2 reference the same array

arr2.push(4); // Modifying arr2 also affects arr1
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
```

Since arrays are mutable, operations like `push()` mutate the original array, affecting all references to that array.

## Controlling Mutation with `const`, `Object.freeze()`, and Libraries

1.  **`const`**: Prevents reassignment of a variable but does not make it immutable. For instance, a `const` object or array can still have its properties or elements modified.

```javascript
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed, as it modifies the object but does not reassign it
```

2.  **`Object.freeze()`**: Prevents modification of an object’s properties, making the object effectively immutable at the top level. Note, however, that it does not make nested objects immutable (this is a shallow freeze).

```javascript
const frozenObj = Object.freeze({ name: "Alice" });
frozenObj.name = "Bob"; // Ignored in strict mode, no effect
```

3.  **Immutability Libraries**: Libraries like `Immutable.js` and `Immer` can create deeply immutable data structures, which is useful for state management in complex applications.

### Summary

| Data Type  | Mutability | Example                   | Notes                                       |
| ---------- | ---------- | ------------------------- | ------------------------------------------- |
| `Number`   | Immutable  | `let x = 5; x = x + 1;`   | Creates new values, not modified directly   |
| `String`   | Immutable  | `"abc".replace("a", "z")` | Returns a new string                        |
| `Boolean`  | Immutable  | `let isTrue = true;`      |                                             |
| `Object`   | Mutable    | `{ name: "Alice" }`       | Properties can be changed directly          |
| `Array`    | Mutable    | `[1, 2, 3].push(4)`       | Elements can be added, removed, or changed  |
| `Function` | Mutable    | `function greet() {}`     | Properties can be added to function objects |

Understanding the mutability of different data types helps manage data effectively, especially when working with complex applications where unintended mutations can lead to bugs and side effects.
