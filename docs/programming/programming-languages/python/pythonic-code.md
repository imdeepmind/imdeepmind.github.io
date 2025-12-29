---
sidebar_position: 8
---

# Pythonic Code

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

"**Pythonic**" refers to writing code that adheres to the conventions, idioms, and best practices that are considered natural and efficient in Python. Pythonic code is not only functional but also elegant, readable, and maintainable. Writing Pythonic code typically involves using the language’s features in a way that is most efficient and idiomatic, making it easy to understand for others who are familiar with Python.

In this note, we’ll explore the key ideas behind Pythonic code, focusing on Python's **Zen of Python**, **list comprehensions**, **generator expressions**, and **unpacking**.

## The Zen of Python

The Zen of Python is a collection of guiding principles for writing clean, readable, and simple Python code. It can be accessed by typing `import this` in a Python shell, and it provides a succinct overview of Python’s philosophy.

Here’s a summary of some key points from the Zen of Python:

### "Beautiful is better than ugly."

Code should be easy to read and aesthetically pleasing, even if it is slightly longer.

### "Explicit is better than implicit."

Code should be clear and easy to understand. Avoid shortcuts or tricks that obscure the meaning of Our code.

### "Simple is better than complex."

Favor simplicity over complexity, unless complexity is absolutely necessary.

### "Readability counts."

Code should be written in a way that it’s easily readable by others (and Ourself in the future).

### "There should be one—and preferably only one—obvious way to do it."

Python emphasizes having one clear, consistent way to accomplish a task, which reduces confusion.

### "In the face of ambiguity, refuse the temptation to guess."

If something is unclear, it’s better to be explicit and avoid assumptions.

### "If the implementation is hard to explain, it's a bad idea."

Python favors simplicity and clarity. If a solution is too complex to explain, it's probably not the right approach.

### "Namespaces are one honking great idea—let's do more of those!"

Python supports clear separation of concerns using namespaces, modules, and classes, which should be leveraged for better code organization.

## List Comprehensions

List comprehensions are a concise, readable, and efficient way to create lists in Python. They allow We to generate a new list by applying an expression to each element of an iterable, optionally filtering elements based on a condition.

### Syntax of List Comprehensions

```python
[expression for item in iterable if condition]
```

### Example 1: Basic List Comprehension

Suppose We want to create a list of squares of numbers from 0 to 9.

```python
squares = [x**2 for x in range(10)]
print(squares)
```

Output:

```text
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Example 2: List Comprehension with Condition

We can add an `if` statement to filter elements.

```python
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)
```

Output:

```text
[0, 4, 16, 36, 64]
```

### Example 3: Nested List Comprehension

List comprehensions can also be nested for working with multidimensional lists.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [item for row in matrix for item in row]
print(flattened)
```

Output:

```text
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Generator Expressions

Generator expressions are similar to list comprehensions but are more memory efficient. Instead of creating an entire list in memory, a generator yields items one by one, which is especially useful when working with large datasets or infinite sequences.

### Syntax of Generator Expressions

```python
(expression for item in iterable if condition)
```

### Example 1: Basic Generator Expression

```python
gen = (x**2 for x in range(10))
print(next(gen))  # Output: 0
print(next(gen))  # Output: 1
```

The generator doesn't evaluate all values at once, only when `next()` is called.

### Example 2: Using `sum()` with Generator Expression

Generators are commonly used with functions like `sum()`, `min()`, and `max()` to efficiently process large collections.

```python
gen = (x**2 for x in range(10))
total = sum(gen)
print(total)
```

Output:

```text
285
```

### Why Use Generators?

- **Memory Efficiency**: They do not store the entire list in memory, making them more efficient for large datasets.
- **Lazy Evaluation**: They produce items only when needed (on demand), which can be helpful when working with large streams of data.

## Unpacking

Unpacking is a Python feature that allows We to assign values from an iterable to variables in a concise and readable way. It works with tuples, lists, and other iterable objects, and can be used in various contexts.

### Example 1: Basic Unpacking

Unpacking can be used to assign variables from a tuple or list:

```python
point = (3, 4)
x, y = point
print(x, y)
```

Output:

```text
3 4
```

### Example 2: Extended Unpacking (Python 3.0+)

Python 3 introduced extended unpacking, allowing We to capture multiple values in a list during unpacking.

```python
a, *middle, b = [1, 2, 3, 4, 5]
print(a, middle, b)
```

Output:

```text
1 [2, 3, 4] 5
```

### Example 3: Unpacking in Function Arguments

We can also use unpacking when passing arguments to functions.

```python
def add(x, y):
    return x + y

args = (3, 5)
print(add(*args))
```

Output:

```text
8
```

### Example 4: Unpacking in Loops

We can use unpacking in loops when iterating over a sequence of tuples or lists.

```python
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
for num, letter in pairs:
    print(num, letter)
```

Output:

```text
1 a
2 b
3 c
```

## Other Pythonic Practices

In addition to the key topics discussed above, here are some other Pythonic practices:

### Use `enumerate()` Instead of `range()` for Indexing

When We need both the index and the value from a list, using `enumerate()` is more Pythonic than manually managing the index.

```python
for idx, value in enumerate(['a', 'b', 'c']):
    print(idx, value)
```

Output:

```text
0 a
1 b
2 c
```

### Use `zip()` for Pairing Iterables

The `zip()` function is a Pythonic way to iterate over multiple iterables simultaneously.

```python
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(name, age)
```

Output:

```text
Alice 25
Bob 30
Charlie 35
```

### Avoid Using `Lambda` for Simple Functions

While `lambda` functions are concise, they can make the code harder to read if overused. For simple functions, it’s often better to define a regular function using `def`.
