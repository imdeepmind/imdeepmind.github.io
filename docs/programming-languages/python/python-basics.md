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

## Control Flow Statements

**Conditional Statements**:

Used to make decisions in the code. `if`, `elif`, and `else` keywords are used for conditional branching.

```python
x = 10
if x > 5:
    print("Greater than 5")
elif x == 5:
    print("Equal to 5")
else:
    print("Less than 5")
```

## Loops

**for Loop**: Used to iterate over a sequence (e.g., list, tuple, string).

```python
for i in range(5):  # Iterates from 0 to 4
    print(i)
```

**while Loop**: Repeats as long as a condition is true.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

**Loop Control Statements**:

- **break**: Exits the loop immediately.
- **continue**: Skips the current iteration and continues to the next one.

## Functions

Functions are defined using the `def` keyword. They can take arguments and return values.

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

**Default Arguments**: You can set default values for parameters.

```python
def greet(name="World"):
    return f"Hello, {name}!"
```

**Lambda Functions**: Anonymous, single-line functions.

```python
add = lambda x, y: x + y
print(add(3, 4))  # Outputs 7
```

## Variable Scope

**Local Scope**: Variables defined inside a function are local to that function.

**Global Scope**: Variables defined outside of functions are global and can be accessed throughout the code.

**The `global` keyword**: Used to modify a global variable inside a function.

```python
x = 5

def update():
    global x
    x = 10

update()
print(x)  # Outputs 10
```

## List Comprehension

A concise way to create lists based on existing iterables.

```python
squares = [x**2 for x in range(10)]

```

## Exception Handling

Handling errors using `try`, `except`, and `finally` blocks.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution complete.")
```

## Basic I/O

**Input**: `input()` function to take user input.

```python
name = input("Enter your name: ")
```

**Output**: `print()` function to display output.

```python
print("Hello, World!")
```
