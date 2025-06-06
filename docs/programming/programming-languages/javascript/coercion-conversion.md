---
sidebar_position: 17
---

# Type Coercion vs Type Conversion

In JavaScript, handling data types and performing operations that involve different data types is a common occurrence. JavaScript has two important concepts related to types: **Type Coercion** and **Type Conversion**. Although these terms are often used interchangeably, they have distinct meanings in the context of JavaScript programming.

## Type Coercion

**Type Coercion** refers to the **automatic or implicit** conversion of one data type to another by JavaScript. This happens when you perform an operation on values of different types, and JavaScript converts one of the operands to a suitable type for the operation. This process is automatic, and the programmer does not have to explicitly call a conversion function.

JavaScript uses **implicit coercion**, which means that the interpreter automatically converts types in certain situations, based on the operation being performed.

### Examples of Type Coercion

#### String and Number Coercion (Concatenation and Addition)

When a number is added to a string, JavaScript implicitly converts the number to a string.

```javascript
let result = 5 + "5";
console.log(result); // Output: "55" (Number 5 is coerced to string "5")
```

In this case, the number `5` is coerced into a string `"5"`, and then the two strings are concatenated.

#### Boolean Coercion (Truthiness/Falsiness)

JavaScript has rules for **truthy** and **falsy** values. Falsy values are automatically coerced to `false`, and truthy values are coerced to `true`.

```javascript
if ("hello") {
  console.log("This is truthy!");
} else {
  console.log("This is falsy!");
}
// Output: This is truthy!

if (0) {
  console.log("This is truthy!");
} else {
  console.log("This is falsy!");
}
// Output: This is falsy!
```

In the first condition, `"hello"` is a truthy value, so the condition evaluates to `true`. In the second, `0` is a falsy value, so the condition evaluates to `false`.

#### Coercion during Comparison (Equality operators)

JavaScript uses type coercion in comparison operations, especially with the loose equality `==` operator.

```javascript
console.log(5 == "5"); // Output: true
console.log(null == undefined); // Output: true
console.log(0 == false); // Output: true
console.log(false == ""); // Output: true
```

In these cases, JavaScript converts the operands to a common type before comparing them.

- `5 == "5"` is `true` because JavaScript coerces the string `"5"` into a number.
- `null == undefined` is `true` because they are considered loosely equal.
- `0 == false` and `false == ""` are `true` because both `false` and `""` are coerced to `0` when compared.

## Type Conversion

**Type Conversion** (also called **Explicit Type Conversion**) is the process where a programmer manually converts a value from one type to another using JavaScript functions or methods. Unlike **type coercion**, which is automatic, type conversion requires explicit action from the developer to change the type.

### Examples of Type Conversion

#### Converting a String to a Number

You can use the `Number()` function to explicitly convert a string into a number.

```javascript
let num = Number("123");
console.log(num); // Output: 123 (string "123" is explicitly converted to number 123)
```

Other functions like `parseInt()` and `parseFloat()` also perform similar operations, but `parseInt()` is for converting to integers, while `parseFloat()` converts to floating-point numbers.

```javascript
let intNum = parseInt("100.5");
console.log(intNum); // Output: 100 (parseInt converts the string to integer)

let floatNum = parseFloat("100.5");
console.log(floatNum); // Output: 100.5 (parseFloat keeps the decimal)
```

#### Converting a Number to a String

You can use the `String()` function or the `.toString()` method to explicitly convert a number to a string.

```javascript
let str = String(123);
console.log(str); // Output: "123" (number 123 is converted to string "123")

let str2 = (123).toString();
console.log(str2); // Output: "123"
```

#### Converting to Boolean

To explicitly convert a value to a boolean, you can use the `Boolean()` function.

```javascript
let isTrue = Boolean(1); // Output: true (1 is truthy)
let isFalse = Boolean(0); // Output: false (0 is falsy)
```

JavaScript will convert truthy values (non-zero numbers, non-empty strings, objects, etc.) to `true`, and falsy values (`0`, `NaN`, `null`, `undefined`, `""`) to `false`.

## Differences Between Type Coercion and Type Conversion

| **Aspect**      | **Type Coercion**                                         | **Type Conversion**                                           |
| --------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| **Definition**  | Implicit conversion done by JavaScript automatically.     | Explicit conversion done by the programmer.                   |
| **Control**     | Programmer has no control over when it happens.           | Programmer has full control over the conversion process.      |
| **Occurrence**  | Occurs during operations like addition, comparisons, etc. | Occurs when using functions like `Number()`, `String()`, etc. |
| **Example**     | `5 + "5"` → `"55"`                                        | `Number("5")` → `5`                                           |
| **Flexibility** | Automatic and might lead to unexpected results.           | Provides more predictable and controlled results.             |

## Falsy and Truthy Values in JavaScript

Understanding **truthy** and **falsy** values is important for type coercion, as JavaScript automatically converts values in conditional checks.

### Falsy Values

- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Any value that is not falsy is considered truthy.

### Truthy Values

- `"hello"`, `"false"`, and any non-empty string
- `42`, `3.14`, and any non-zero number
- `[]` (empty array)
- `{}` (empty object)
- `function() {}` (function)
- `Infinity`

## When to Use Type Coercion and Type Conversion

- **Type Coercion**: It is usually best to avoid relying on implicit coercion as it can lead to unexpected results, especially in comparisons. Instead, be aware of how JavaScript will perform coercion and use strict equality (`===`) where possible.
- **Type Conversion**: Use explicit conversion when you need precise control over the type of your variables. This makes your code clearer and avoids unpredictable behavior.
