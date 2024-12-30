---
sidebar_position: 20
---

# ES6 and Beyond

Modern JavaScript (ES6+) introduced several powerful features that simplify code, improve readability, and enable developers to write more expressive and maintainable applications. Below is a detailed explanation of these features.

## Template Literals

Template literals are a cleaner way to create strings and include dynamic values. They use backticks (`` ` ``) instead of quotes and allow embedding expressions with `${}`.

**Features:**

- Multi-line strings
- String interpolation
- Tagged templates

**Example:**

```javascript
// Multi-line strings
const multiLine = `This is
a multi-line string.`;
console.log(multiLine);

// String interpolation
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// Tagged templates
function tag(strings, value) {
  return `${strings[0]}${value.toUpperCase()}`;
}
const message = tag`Hello, ${name}`;
console.log(message); // Output: Hello, JOHN
```

## Destructuring

Destructuring allows you to unpack values from arrays or objects into separate variables, making your code more concise.

### Array Destructuring

```javascript
const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output: 1 2 3
```

### Object Destructuring

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Output: Alice 25
```

### Default Values

```javascript
const { x = 10, y = 20 } = { x: 5 };
console.log(x, y); // Output: 5 20
```

### Nested Destructuring

```javascript
const user = { id: 1, details: { name: "Bob", age: 30 } };
const {
  details: { name, age },
} = user;
console.log(name, age); // Output: Bob 30
```

## Spread and Rest Operators

The `...` operator is used for both spreading and collecting values.

### Spread Operator

- Expands elements of arrays or objects.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // Output: [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // Output: { a: 1, b: 2 }
```

### Rest Operator

- Collects remaining elements into an array or object.

```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest); // Output: 1 [2, 3, 4]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // Output: { b: 2, c: 3 }
```

## Arrow Functions and Lexical Scoping

Arrow functions provide a concise syntax for writing functions and bind `this` lexically, which means they inherit `this` from the surrounding context.

### Syntax

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Lexical `this`

```javascript
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
new Counter(); // Inherits `this` from Counter
```

## Modules (import/export)

JavaScript modules allow splitting code into reusable pieces. Modules use `export` and `import` keywords.

### Exporting

```javascript
// utils.js
export const add = (a, b) => a + b;
export default function greet(name) {
  return `Hello, ${name}`;
}
```

### Importing

```javascript
// main.js
import greet, { add } from "./utils.js";
console.log(greet("John")); // Output: Hello, John
console.log(add(2, 3)); // Output: 5
```

### Internals

- Modules are loaded asynchronously.
- Each module runs in its own scope, preventing global namespace pollution.
- A module is evaluated only once, and its exports are cached.

## Generator Functions and Async Iterators

Generators are special functions that can pause execution and resume later. They are defined using the `function*` syntax.

### Generator Functions

```javascript
function* count() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = count();
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
```

### Async Iterators

Used to handle asynchronous data streams with the `for await...of` loop.

```javascript
async function* fetchData() {
  yield await Promise.resolve("Data 1");
  yield await Promise.resolve("Data 2");
}
(async () => {
  for await (const data of fetchData()) {
    console.log(data);
  }
})();
```

## Proxy and Reflect API

The `Proxy` object allows you to create a proxy for an object to intercept and redefine operations like property access, assignment, and function invocation.

### Proxy

```javascript
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : "Property not found";
  },
};
const obj = { a: 1 };
const proxy = new Proxy(obj, handler);
console.log(proxy.a); // Output: 1
console.log(proxy.b); // Output: Property not found
```

### Reflect API

The `Reflect` object provides methods to perform operations on objects (like `get`, `set`, etc.) in a more predictable way.

```javascript
const obj = { a: 1 };
Reflect.set(obj, "b", 2);
console.log(Reflect.get(obj, "b")); // Output: 2
```

### Proxy with Reflect

```javascript
const handler = {
  get(target, prop, receiver) {
    console.log(`Accessing property "${prop}"`);
    return Reflect.get(target, prop, receiver);
  },
};
const obj = { name: "John" };
const proxy = new Proxy(obj, handler);
console.log(proxy.name); // Output: Accessing property "name" \n John
```
