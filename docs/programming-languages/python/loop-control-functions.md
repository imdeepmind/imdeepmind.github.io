---
sidebar_position: 5
---

# Loops, Control Structures, and Functions

## Python Loops

Loops allow you to iterate over a sequence (like a list, tuple, string, or range) and execute a block of code repeatedly. Python supports two primary types of loops: `for` and `while`.

### For Loop

The `for` loop iterates over a sequence (e.g., a list, string, or range) and executes a block of code for each item in the sequence.

```python
for i in range(5):
    print(i)
```

This will output:

```
0
1
2
3
4
```

**Syntax:**

```python
for variable in iterable:
    # block of code
```

- `range(start, stop, step)` generates a sequence of numbers starting from `start` to `stop` (exclusive), with an optional step size.  
  Example:

```python
for i in range(2, 10, 2):
    print(i)
```

Output:

```
2
4
6
8
```

### While Loop

The `while` loop repeats a block of code as long as a given condition is true. It requires a conditional expression to determine when to stop.

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

Output:

```
0
1
2
3
4
```

**Syntax:**

```python
while condition:
    # block of code
```

- It's crucial to ensure that the condition will eventually become `False` to avoid an infinite loop.

### Loop Control Statements

- **break**: Terminates the loop completely.

  ```python
  for i in range(10):
      if i == 5:
          break
      print(i)
  ```

  Output:

  ```
  0
  1
  2
  3
  4
  ```

- **continue**: Skips the current iteration and proceeds with the next iteration.

  ```python
  for i in range(5):
      if i == 3:
          continue
      print(i)
  ```

  Output:

  ```
  0
  1
  2
  4
  ```

- **pass**: Does nothing, used as a placeholder where code is syntactically required but you don't want any action to be taken.
  ```python
  for i in range(5):
      if i == 3:
          pass
      print(i)
  ```
  Output:
  ```
  0
  1
  2
  3
  4
  ```

## Python Control Structures

Control structures in Python manage the flow of execution by deciding which code to execute based on conditions.

### If Statement

The `if` statement evaluates a condition and executes a block of code if the condition is `True`. If `False`, the `else` block can execute.

```python
x = 10
if x > 5:
    print("x is greater than 5")
```

Output:

```
x is greater than 5
```

**Syntax:**

```python
if condition:
    # block of code
elif another_condition:
    # block of code
else:
    # block of code
```

### If-Elif-Else

You can chain multiple conditions using `elif` (else if). If the `if` condition fails, the `elif` condition is checked. If no condition is `True`, the `else` block runs.

```python
x = 10
if x > 15:
    print("x is greater than 15")
elif x > 5:
    print("x is greater than 5")
else:
    print("x is 5 or less")
```

Output:

```
x is greater than 5
```

### Ternary Operator

Python also supports a shorthand if-else expression known as the ternary operator:

```python
x = 10
result = "x is greater than 5" if x > 5 else "x is 5 or less"
print(result)
```

Output:

```
x is greater than 5
```

## Python Functions

Functions allow you to organize your code into reusable blocks, improving modularity and readability. Functions can accept parameters and return values.

### Defining a Function

Functions are defined using the `def` keyword followed by the function name, a list of parameters in parentheses, and a block of code.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Abhishek")
```

Output:

```
Hello, Abhishek!
```

**Syntax:**

```python
def function_name(parameters):
    # block of code
```

### Return Statement

Functions can return a value using the `return` keyword.

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
```

Output:

```
5
```

### Default Arguments

Python allows you to define default values for function parameters. If no argument is provided, the default value is used.

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()  # Uses default value
greet("Abhishek")
```

Output:

```
Hello, Guest!
Hello, Abhishek!
```

### Variable-Length Arguments

Python supports functions that accept a variable number of arguments using `*args` (for non-keyword arguments) and `**kwargs` (for keyword arguments).

- **`*args`**: Collects additional positional arguments into a tuple.

  ```python
  def print_args(*args):
      for arg in args:
          print(arg)

  print_args(1, 2, 3)
  ```

  Output:

  ```
  1
  2
  3
  ```

- **`**kwargs`\*\*: Collects additional keyword arguments into a dictionary.

  ```python
  def print_kwargs(**kwargs):
      for key, value in kwargs.items():
          print(f"{key}: {value}")

  print_kwargs(name="Abhishek", age=25)
  ```

  Output:

  ```
  name: Abhishek
  age: 25
  ```

### Lambda Functions

A `lambda` function is a small anonymous function defined using the `lambda` keyword. It's typically used for simple operations where defining a full function is unnecessary.

```python
add = lambda x, y: x + y
print(add(3, 5))
```

Output:

```
8
```

### Function Scopes

- **Global Scope**: Variables defined outside any function are accessible everywhere in the code.
- **Local Scope**: Variables defined inside a function are accessible only within that function.

Python allows you to use the `global` keyword to modify a global variable inside a function.

```python
x = 10  # Global variable

def modify_global():
    global x
    x = 20  # Modifies the global variable

modify_global()
print(x)  # Output: 20
```
