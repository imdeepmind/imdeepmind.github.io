---
sidebar_position: 10
---

# Exception Handling

Exception handling in Python is a powerful feature that allows a program to deal with errors (exceptions) in a controlled manner. It prevents abrupt termination of the program and allows the developer to handle errors in a way that is appropriate to the context.

## Key Concepts

1. **Exceptions**: Exceptions are events that disrupt the normal flow of a program's execution. Examples include division by zero, file not found, or network errors.

2. **Error Types**: Python categorizes exceptions into several built-in types, including:

   - `ZeroDivisionError`: Raised when attempting to divide by zero.
   - `FileNotFoundError`: Raised when trying to open a file that does not exist.
   - `ValueError`: Raised when a function receives an argument of the correct type but inappropriate value (e.g., trying to convert a non-numeric string to an integer).
   - `IndexError`: Raised when trying to access an index that is out of range.
   - `TypeError`: Raised when an operation or function is applied to an object of inappropriate type.

3. **Handling Exceptions**: Python provides a way to handle exceptions using `try`, `except`, `else`, and `finally` blocks.

## Syntax of Exception Handling

```python
try:
    # Code that may raise an exception
    result = 10 / 0  # Example of division by zero error
except ZeroDivisionError as e:
    # Handling specific exception
    print(f"Error: {e}")
except Exception as e:
    # Handling any other exceptions
    print(f"An unexpected error occurred: {e}")
else:
    # Code that runs if no exception occurs
    print("No error occurred.")
finally:
    # Code that will run no matter what (e.g., cleanup)
    print("Execution finished.")
```

## Key Components of Exception Handling

1. **try Block**: The `try` block contains code that might raise an exception. If an exception occurs, the rest of the `try` block is skipped, and control is transferred to the `except` block.

2. **except Block**: This block catches the exception. You can catch specific exceptions (e.g., `except ZeroDivisionError`) or use a general `except Exception` to catch any exception. The exception object is optionally bound to a variable, allowing you to access the error details.

3. **else Block**: The `else` block, if present, will run only if no exceptions were raised in the `try` block. It’s useful for code that should execute if everything goes well, such as clean up operations or actions after successful execution.

4. **finally Block**: This block is always executed, regardless of whether an exception occurred. It is often used for cleanup operations, like closing files, releasing resources, or restoring the system state.

## Example of Multiple Except Clauses

You can handle different types of exceptions in separate `except` clauses.

```python
try:
    value = int(input("Enter a number: "))
    result = 10 / value
except ValueError:
    print("Invalid input! Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
else:
    print(f"Result is: {result}")
finally:
    print("Execution finished.")
```

## Raising Exceptions

You can raise exceptions manually using the `raise` keyword, which is useful for error handling in custom logic.

```python
def check_positive(value):
    if value < 0:
        raise ValueError("The value must be positive")
    return value

try:
    check_positive(-5)
except ValueError as e:
    print(f"Error: {e}")
```

## Custom Exceptions

You can define custom exceptions by subclassing the built-in `Exception` class. This is useful for creating domain-specific error messages.

```python
class CustomError(Exception):
    pass

try:
    raise CustomError("This is a custom error")
except CustomError as e:
    print(f"Caught custom exception: {e}")
```

## Best Practices

1. **Avoid Catching Broad Exceptions**: It’s best practice to catch specific exceptions rather than catching all exceptions using `except Exception`. This ensures that only the expected exceptions are handled, and unexpected ones are not silently ignored.
2. **Use `else` for Clean Code**: If you need to run code after the `try` block that only depends on the absence of exceptions, place it in the `else` block. This keeps the code clean and readable.

3. **Use `finally` for Cleanup**: Use the `finally` block for cleanup actions such as closing files or releasing resources, regardless of whether an exception occurred.

4. **Don’t Overuse Exception Handling for Control Flow**: Exception handling should be used to deal with actual error conditions, not for normal program flow. Overusing exceptions to control program logic can lead to poor performance and harder-to-maintain code.
