---
sidebar_position: 6
---

# `*args` and `**kwargs`

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

In Python, `*args` and `**kwargs` are used to handle variable numbers of arguments passed to a function. These allow us to write more flexible functions that can accept a range of input values without needing to explicitly define every parameter.

## `*args` (Non-keyword Arguments)

- **Definition**: The `*args` syntax allows a function to accept an arbitrary number of positional arguments.
- **How it works**: The `*args` collects additional positional arguments passed to the function into a tuple.
- **Use case**: When we do not know in advance how many arguments will be passed to the function.

```python
def print_args(*args):
    for arg in args:
        print(arg)

print_args(1, 2, 3, 4)
# Output:
# 1
# 2
# 3
# 4
```

- **Important Notes**:
  - `args` is just a convention. We can name it anything, but the `*` is required.
  - It must be placed at the end of the function signature (after regular parameters and before `**kwargs` if both are used).

## `**kwargs` (Keyword Arguments)

- **Definition**: The `**kwargs` syntax allows a function to accept an arbitrary number of keyword arguments (arguments passed by name).
- **How it works**: The `**kwargs` collects keyword arguments into a dictionary, where the keys are the argument names and the values are the corresponding values passed to the function.
- **Use case**: When we need to pass a varying number of named arguments to a function.

```python
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')

print_kwargs(name="Alice", age=25)
# Output:
# name: Alice
# age: 25
```

- **Important Notes**:
  - `kwargs` is a convention, but we can name it anything we like, just like `*args`.
  - It must also be placed after regular parameters and `*args` (if both are used).

## Combining `*args` and `**kwargs`

We can use both `*args` and `**kwargs` in the same function to accept both variable positional and keyword arguments.

```python
def greet(name, *args, **kwargs):
    print(f"Hello {name}!")
    if args:
        print("Positional arguments:", args)
    if kwargs:
        print("Keyword arguments:", kwargs)

greet("Alice", 25, "Engineer", country="USA", city="New York")
# Output:
# Hello Alice!
# Positional arguments: (25, 'Engineer')
# Keyword arguments: {'country': 'USA', 'city': 'New York'}
```

## Key Points to Remember

1. **Order of Arguments**:

   - Normal parameters first.
   - Then `*args` for variable positional arguments.
   - Then `**kwargs` for variable keyword arguments.

   ```python
   def func(param1, param2, *args, **kwargs):
       pass
   ```

2. **Single `*` in function**: Sometimes, a single `*` is used in function signatures to indicate that all following parameters must be specified as keyword arguments.

   ```python
   def func(param1, param2, *, kwarg1, kwarg2):
       pass
   ```

3. **Default Values**: We can combine default values with `*args` and `**kwargs`. Just ensure the default arguments appear before `*args`.

## Example: Function with Default Arguments, `*args`, and `**kwargs`

```python
def describe_person(name, age=30, *args, **kwargs):
    print(f"Name: {name}, Age: {age}")
    if args:
        print("Additional info:", args)
    if kwargs:
        print("Keyword info:", kwargs)

describe_person("Alice", 25, "Engineer", "Music lover", country="USA", city="New York")
# Output:
# Name: Alice, Age: 25
# Additional info: ('Engineer', 'Music lover')
# Keyword info: {'country': 'USA', 'city': 'New York'}
```

This makes Python functions highly flexible and allows for handling a wide range of argument types efficiently.
