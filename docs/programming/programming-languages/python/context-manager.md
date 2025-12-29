---
sidebar_position: 11
---

# Context Managers

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A **Context Manager** in Python is a programming construct that allows us to allocate and release resources precisely when we need them. It is often used for managing resources such as file handling, network connections, or database sessions. Context managers allow us to define a block of code that will execute at the start and end of the block, ensuring that necessary setup and cleanup operations are performed automatically.

The most common way to use a context manager in Python is with the `with` statement, which simplifies exception handling and ensures that resources are properly cleaned up, even if an error occurs during execution.

## Syntax

The syntax of a context manager looks like this:

```python
with <expression> as <variable>:
    # Code block
```

Where:

- `<expression>` evaluates to a context manager object.
- `<variable>` is the object returned by the context manager’s `__enter__` method, if needed.

## How Do Context Managers Work?

1. **Enter the Context:** The `__enter__` method is called when the `with` block is entered. It can perform setup actions like opening a file or acquiring a resource.
2. **Execute the Block:** The code inside the `with` block is executed.
3. **Exit the Context:** The `__exit__` method is called after the block is executed, even if an exception occurs. This method is responsible for performing cleanup tasks like closing a file or releasing a resource.

## Example: Using a Built-in Context Manager

A common example is using the `open()` function to work with files. The `open()` function returns a context manager that ensures the file is closed after the block is executed.

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed when the block is exited, even if an exception occurs.
```

In this example:

- The `__enter__()` method of the context manager opens the file.
- The `__exit__()` method automatically closes the file when the block exits.

## Custom Context Managers

We can create Our own context managers by implementing a class with `__enter__()` and `__exit__()` methods. Here’s an example:

```python
class MyContextManager:
    def __enter__(self):
        print("Entering the context")
        return self  # We can return any value we want to use inside the 'with' block

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting the context")
        if exc_type:
            print(f"Exception type: {exc_type}")
            print(f"Exception value: {exc_val}")
        return True  # Return True to suppress the exception, or False to propagate it

# Using the custom context manager
with MyContextManager() as cm:
    print("Inside the context")
    # Uncomment the following line to see exception handling
    # raise ValueError("An error occurred")

# Output
# Entering the context
# Inside the context
# Exiting the context
```

In this custom context manager:

- `__enter__()` prints "Entering the context" and returns the instance of the context manager, which can be used inside the block.
- `__exit__()` handles the exit logic, including printing "Exiting the context" and checking if an exception occurred. If an exception is raised inside the block, it is passed to `__exit__()` where it can be handled or suppressed.

### `__exit__()` Method Parameters

- `exc_type`: The exception type (e.g., `ValueError`).
- `exc_val`: The exception value.
- `exc_tb`: The traceback object.

If `__exit__()` returns `True`, the exception is suppressed (not re-raised). If `__exit__()` returns `False` or `None`, the exception is propagated.

## Using the `contextlib` Module

Python’s `contextlib` module provides utilities for creating context managers without having to define a class with `__enter__()` and `__exit__()`. One of the most commonly used functions from this module is `contextlib.contextmanager`, which allows us to create context managers using a generator function.

### Example with `contextlib.contextmanager`

```python
from contextlib import contextmanager

@contextmanager
def my_context_manager():
    print("Entering the context")
    yield  # This is where the code inside the 'with' block executes
    print("Exiting the context")

with my_context_manager():
    print("Inside the context")
```

Output:

```python
Entering the context
Inside the context
Exiting the context
```

In this example:

- The `yield` statement splits the code into two parts: the code before `yield` is executed when the `with` block is entered, and the code after `yield` is executed when the block is exited.

## Why Use Context Managers?

- **Resource Management:** They make resource management easier and less error-prone, especially when dealing with things like file handles, network connections, and database transactions.
- **Exception Safety:** By ensuring that cleanup happens even when an exception occurs, context managers make Our code safer.
- **Cleaner Code:** They simplify code by removing the need for explicit `try`, `finally` blocks and reducing boilerplate.
