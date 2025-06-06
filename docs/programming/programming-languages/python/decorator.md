---
sidebar_position: 17
---

# Decorators

## What are Decorators?

Decorators in Python are a powerful feature that allows you to modify or enhance the behavior of functions or classes **without modifying their actual code**. They are often used to wrap another function or method, adding extra functionality in a clean and reusable manner.

A decorator in Python is a callable (usually a function) that takes another function (or class) as its argument and returns a modified or extended version of that function (or class).

## Why Use Decorators?

1. **Code Reusability**: Common functionality (e.g., logging, authentication, performance monitoring) can be extracted and reused across multiple functions or classes.
2. **Separation of Concerns**: The original function’s core logic is preserved, while additional features are handled externally.
3. **Improved Readability**: Decorators make it easier to apply functionality without cluttering the main code.

## How Do Decorators Work?

A decorator is essentially a **higher-order function**, meaning it either:

- Takes a function as an argument, or
- Returns a function.

At its core, a decorator works like this:

```python
def decorator(func):
    def wrapper():
        # Code to execute BEFORE the original function
        print("Before the function call.")

        # Call the original function
        func()

        # Code to execute AFTER the original function
        print("After the function call.")

    return wrapper
```

If you apply this decorator to a function:

```python
@decorator
def my_function():
    print("This is my function.")

my_function()
```

**Output**:

```
Before the function call.
This is my function.
After the function call.
```

## Creating and Using Decorators

### Basic Decorator

Here is a basic example of a decorator that logs when a function is called.

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Function '{func.__name__}' is being called.")
        result = func(*args, **kwargs)
        print(f"Function '{func.__name__}' finished execution.")
        return result
    return wrapper

@logger
def greet(name):
    print(f"Hello, {name}!")

greet("Abhishek")
```

**Output**:

```
Function 'greet' is being called.
Hello, Abhishek!
Function 'greet' finished execution.
```

### Using Arguments in Decorators

Decorators can also handle arguments passed to the wrapped function using `*args` and `**kwargs`.

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with arguments {args} and {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

result = add(10, 20)
print(f"Result: {result}")
```

**Output**:

```
Calling add with arguments (10, 20) and {}
Result: 30
```

### Chaining Decorators

Multiple decorators can be applied to a single function. They are applied in the order they are listed, from top to bottom.

```python
def uppercase(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

def exclaim(func):
    def wrapper():
        result = func()
        return f"{result}!"
    return wrapper

@uppercase
@exclaim
def greet():
    return "hello"

print(greet())
```

**Output**:

```
HELLO!
```

Here, the `exclaim` decorator is applied first, followed by `uppercase`.

### Using Decorators with Functions that Return Values

When the wrapped function returns a value, the decorator must ensure it returns the result correctly.

```python
def double_result(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result * 2
    return wrapper

@double_result
def multiply(a, b):
    return a * b

print(multiply(5, 3))
```

**Output**:

```
30
```

### Decorators with Arguments

A decorator itself can accept arguments by wrapping it inside another function.

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")

say_hello()
```

**Output**:

```
Hello!
Hello!
Hello!
```

## Built-in Decorators in Python

Python provides some commonly used decorators:

1. **@staticmethod**: Defines a static method within a class (does not access class or instance attributes).
2. **@classmethod**: Defines a class method that takes the class (`cls`) as the first argument instead of the instance (`self`).
3. **@property**: Converts a method into a read-only property.

Example:

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative.")
        self._radius = value

circle = Circle(5)
print(circle.radius)  # Access property
circle.radius = 10    # Modify property
print(circle.radius)
```

## Practical Examples of Decorators

### Logging

```python
def log(func):
    def wrapper(*args, **kwargs):
        print(f"Logging: {func.__name__} was called with arguments {args} and {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@log
def divide(a, b):
    return a / b

print(divide(10, 2))
```

### Authentication

```python
def requires_login(func):
    def wrapper(user, *args, **kwargs):
        if not user.get("logged_in"):
            raise PermissionError("User is not logged in!")
        return func(user, *args, **kwargs)
    return wrapper

@requires_login
def view_profile(user):
    print(f"Viewing profile of {user['username']}")

user = {"username": "Abhishek", "logged_in": True}
view_profile(user)
```

### Performance Monitoring

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time: {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(2)
    print("Function complete!")

slow_function()
```

## Best Practices for Using Decorators

1. **Use `functools.wraps`**:
   - When defining a decorator, use `functools.wraps` to preserve the metadata (e.g., function name, docstring) of the original function.

```python
from functools import wraps

def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
```

2. **Keep Decorators Simple**:

   - Avoid making the decorator too complex. Its purpose is to add functionality while keeping the code readable.

3. **Test the Decorator**:
   - Test the decorator separately to ensure it behaves as expected.
