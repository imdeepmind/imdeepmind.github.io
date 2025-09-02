---
sidebar_position: 2
---

# Python Basics

## Variables and Data Types

**Variables**: Variables in Python are used to store data and do not require explicit declaration. They are created when a value is assigned.

```python
age = 25  # Integer
name = "Alice"  # String
is_student = True  # Boolean
```

**Data Types**:

- **int**: Integer, e.g., `5`
- **float**: Floating-point number, e.g., `5.0`
- **str**: String, e.g., `"Hello"`
- **bool**: Boolean, e.g., `True` or `False`
- **NoneType**: Represents the absence of value, `None`

## Basic Operators

**Arithmetic Operators**: `+`, `-`, `*`, `/`, `//` (floor division), `%` (modulus), `**` (exponent)

**Comparison Operators**: `==`, `!=`, `<`, `>`, `<=`, `>=`

**Logical Operators**: `and`, `or`, `not`

## Precedence and Associativity

In Python, **precedence** determines the order in which operators are evaluated in an expression, while **associativity** defines the direction in which operators of the same precedence level are evaluated.

### Operator Precedence

Operators with higher precedence are evaluated before operators with lower precedence. For example:

```python
result = 10 + 5 * 2  # Multiplication (*) has higher precedence than addition (+)
print(result)  # Output: 20
```

Here, `5 * 2` is evaluated first, and then `10 + 10`.

### Operator Associativity

When operators of the same precedence appear together, associativity determines their evaluation order:

- **Left-to-right associativity**: Most operators (e.g., `+`, `-`, `*`, `/`, etc.) are evaluated from left to right.

  ```python
  result = 10 - 5 + 2  # Evaluated as (10 - 5) + 2
  print(result)  # Output: 7
  ```

- **Right-to-left associativity**: Some operators (e.g., `**` for exponentiation and assignment operators like `=`) are evaluated from right to left.

  ```python
  result = 2 ** 3 ** 2  # Evaluated as 2 ** (3 ** 2)
  print(result)  # Output: 512
  ```

### Parentheses

To explicitly define the evaluation order, you can use parentheses:

```python
result = (10 + 5) * 2  # Parentheses override default precedence
print(result)  # Output: 30
```

### Operator Precedence and Associativity Table

| **Operator**                                   | **Description**                                  | **Associativity**        |
| ---------------------------------------------- | ------------------------------------------------ | ------------------------ |
| `()`                                           | Parentheses                                      | N/A (Highest precedence) |
| `**`                                           | Exponentiation                                   | Right-to-left            |
| `+x, -x, ~x`                                   | Unary plus, minus, bitwise NOT                   | Right-to-left            |
| `*, /, //, %`                                  | Multiplication, division, floor division, modulo | Left-to-right            |
| `+, -`                                         | Addition, subtraction                            | Left-to-right            |
| `<<, >>`                                       | Bitwise shift operators                          | Left-to-right            |
| `&`                                            | Bitwise AND                                      | Left-to-right            |
| `^`                                            | Bitwise XOR                                      | Left-to-right            |
| `                                              | `                                                | Bitwise OR               |
| `==, !=, >, >=, <, <=, is, is not, in, not in` | Comparison and membership operators              | Left-to-right            |
| `not`                                          | Logical NOT                                      | Right-to-left            |
| `and`                                          | Logical AND                                      | Left-to-right            |
| `or`                                           | Logical OR                                       | Left-to-right            |
| `=, +=, -=, *=, /=, %=, **=, //=`              | Assignment operators                             | Right-to-left            |
| `lambda`                                       | Lambda expressions                               | N/A (Lowest precedence)  |

## List Comprehension

A concise way to create lists based on existing iterables.

```python
squares = [x**2 for x in range(10)]
```

## Basic I/O

**Input**: `input()` function to take user input.

```python
name = input("Enter Our name: ")
```

**Output**: `print()` function to display output.

```python
print("Hello, World!")
```

## Mutation

### Key Points

1. **Mutable Data Structures**:

   - Can be modified after creation.
   - Examples: `list`, `dict`, `set`, `bytearray`.

2. **Immutable Data Structures**:
   - Cannot be modified after creation.
   - Examples: `tuple`, `str`, `frozenset`, `bytes`, `range`.

Here is a table summarizing common Python data structures and whether they are **mutable** or **immutable**:

| **Data Structure**           | **Mutable** | **Description**                                                                |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------ |
| **List (`list`)**            | Yes         | Can be modified after creation (e.g., adding, removing, or changing elements). |
| **Tuple (`tuple`)**          | No          | Immutable sequence; cannot be changed after creation.                          |
| **Dictionary (`dict`)**      | Yes         | Keys and values can be added, removed, or updated.                             |
| **Set (`set`)**              | Yes         | Can add or remove elements; unordered collection of unique elements.           |
| **String (`str`)**           | No          | Immutable sequence of characters; cannot be modified after creation.           |
| **Frozen Set (`frozenset`)** | No          | Immutable version of `set`; cannot add or remove elements.                     |
| **Bytes (`bytes`)**          | No          | Immutable sequence of bytes (binary data).                                     |
| **Bytearray (`bytearray`)**  | Yes         | Mutable version of `bytes`; can modify individual bytes.                       |
| **Range (`range`)**          | No          | Immutable sequence representing a range of numbers.                            |

## Unpacking Symbol in Python

In Python, unpacking is a mechanism that allows you to assign values from an iterable (like a list, tuple, or dictionary) to multiple variables in a single step. The unpacking operation is done using the `*` and `**` symbols. Below is a detailed explanation of their usage:

### Unpacking with `*` (Single Asterisk)

The `*` symbol is used for unpacking elements from **iterables** (like lists, tuples, or sets).

#### Unpacking Elements into Variables

The `*` symbol can capture multiple elements from an iterable into a list.

##### Example

```python
# Unpacking a list
a, *b, c = [1, 2, 3, 4, 5]
print(a)  # 1
print(b)  # [2, 3, 4]
print(c)  # 5
```

##### Explanation

- `a` gets the first element.
- `c` gets the last element.
- `*b` captures all the elements in the middle.

#### Function Arguments Unpacking

The `*` symbol can unpack an iterable (like a list or tuple) and pass its elements as arguments to a function.

##### Example

```python
def add(a, b, c):
    return a + b + c

args = [1, 2, 3]
result = add(*args)  # Unpacks the list [1, 2, 3] into a, b, c
print(result)  # 6
```

#### Unpacking in List or Set Literals

You can use `*` to unpack elements into a new list or set.

##### Example

```python
# List Unpacking
a = [1, 2, 3]
b = [*a, 4, 5]
print(b)  # [1, 2, 3, 4, 5]

# Set Unpacking
s1 = {1, 2, 3}
s2 = {*s1, 4, 5}
print(s2)  # {1, 2, 3, 4, 5}
```

#### Unpacking for `zip()` in Matrix Transposition

The `*` operator can unpack rows of a matrix to pass them as arguments to the `zip()` function.

##### Example

```python
matrix = [[1, 2], [3, 4], [5, 6]]
transposed = list(zip(*matrix))
print(transposed)  # [(1, 3, 5), (2, 4, 6)]
```

#### Collecting Excess Positional Arguments

In function definitions, the `*` symbol allows you to collect extra positional arguments into a tuple.

##### Example

```python
def func(a, *args):
    print(a)      # First argument
    print(args)   # Remaining arguments as a tuple

func(1, 2, 3, 4)  # Output: 1 and (2, 3, 4)
```

### Unpacking with `**` (Double Asterisk)

The `**` symbol is used for unpacking **dictionaries** into key-value pairs.

#### Function Keyword Argument Unpacking

You can use `**` to unpack a dictionary and pass its key-value pairs as keyword arguments to a function.

##### Example

```python
def greet(name, age):
    print(f"Hello {name}, you are {age} years old.")

data = {"name": "Alice", "age": 25}
greet(**data)  # Equivalent to: greet(name="Alice", age=25)
```

#### Merging Dictionaries

You can use `**` to unpack multiple dictionaries into a new dictionary.

##### Example

```python
d1 = {"a": 1, "b": 2}
d2 = {"c": 3, "d": 4}
merged = {**d1, **d2}
print(merged)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

#### Collecting Keyword Arguments

In function definitions, `**` allows you to collect excess keyword arguments into a dictionary.

##### Example

```python
def func(a, **kwargs):
    print(a)        # First argument
    print(kwargs)   # Remaining keyword arguments as a dictionary

func(1, b=2, c=3)  # Output: 1 and {'b': 2, 'c': 3}
```

### Combining `*` and `**` in Functions

You can use both `*` and `**` together in function definitions to handle both extra positional and keyword arguments.

#### Example

```python
def func(a, *args, **kwargs):
    print(a)         # First argument
    print(args)      # Extra positional arguments
    print(kwargs)    # Extra keyword arguments

func(1, 2, 3, b=4, c=5)
# Output:
# 1
# (2, 3)
# {'b': 4, 'c': 5}
```

### Unpacking in For Loops

You can unpack iterables while iterating through them in a loop.

#### Example

```python
pairs = [(1, 2), (3, 4), (5, 6)]
for a, b in pairs:
    print(a, b)
# Output:
# 1 2
# 3 4
# 5 6
```

### Nested Unpacking

Python allows unpacking within nested structures.

#### Example

```python
nested = [1, (2, 3), 4]
a, (b, c), d = nested
print(a, b, c, d)  # 1 2 3 4
```

### Summary of `*` and `**` Usage

| **Symbol** | **Use Case**                     | **Description**                                                         |
| ---------- | -------------------------------- | ----------------------------------------------------------------------- |
| `*`        | Unpacking Iterables              | Used to unpack lists, tuples, sets, or other iterables.                 |
| `*`        | Collect Positional Arguments     | Collects extra positional arguments into a tuple.                       |
| `*`        | List/Set Unpacking               | Unpacks iterables into new lists or sets.                               |
| `*`        | For `zip()` Matrix Transposition | Unpacks rows for transposition.                                         |
| `**`       | Unpacking Dictionaries           | Used to unpack key-value pairs into function calls or new dictionaries. |
| `**`       | Collect Keyword Arguments        | Collects extra keyword arguments into a dictionary.                     |
