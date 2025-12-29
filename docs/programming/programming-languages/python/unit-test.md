---
sidebar_position: 18
---

# Unit Testing

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Unit testing is a fundamental concept in software development where individual units (typically functions or methods) of a program are tested in isolation to ensure that each part of the code functions as expected. In Python, unit testing is typically done using the `unittest` module, which is a built-in testing framework inspired by Java's JUnit. Unit tests help identify bugs early in the development cycle and provide a safety net when making changes or refactoring code.

Python also provides other testing tools like `pytest` and `nose`, but the built-in `unittest` framework is often sufficient for most testing purposes.

## Key Concepts in Unit Testing

1. **Test Case**: A unit of testing that checks a particular feature or functionality of the code. It is written as a method inside a test class that extends `unittest.TestCase`.
2. **Test Suite**: A collection of test cases that can be run together. It can be a collection of individual test methods or test case classes.
3. **Test Runner**: The component that runs the tests. In Python, the `unittest` module itself provides a test runner that executes the test cases and reports the results.
4. **Assertion**: Methods used to test if a condition is true. Assertions check if the expected result matches the actual result produced by the code. Common assertions include `assertEqual()`, `assertTrue()`, `assertFalse()`, etc.

## Writing Unit Tests with `unittest`

### Basic Structure of Unit Tests

A typical unit test in Python consists of three main phases:

- **Setup**: Preparing the necessary conditions for the test (e.g., initializing objects).
- **Test**: Executing the actual code to be tested.
- **Teardown**: Cleaning up any resources that were used during the test (if necessary).

#### Example

```python
import unittest

# A simple function to test
def add(a, b):
    return a + b

# Define the test case
class TestMathFunctions(unittest.TestCase):

    # Setup method (if needed)
    def setUp(self):
        self.value1 = 5
        self.value2 = 10

    # Test method
    def test_add(self):
        result = add(self.value1, self.value2)
        self.assertEqual(result, 15)  # Check if the result is correct

    # Teardown method (if needed)
    def tearDown(self):
        pass  # Clean-up code if needed

# Running the tests
if __name__ == '__main__':
    unittest.main()
```

In this example, the `TestMathFunctions` class is derived from `unittest.TestCase`. The `test_add` method tests the `add` function to ensure it returns the correct result. The `setUp` method initializes the values for testing, and `tearDown` would handle any clean-up tasks (though it's not needed here).

### Assertions in Unit Tests

Assertions are used to verify if the code behaves as expected. Here are some common assertions provided by `unittest`:

- `assertEqual(a, b)` – Verifies that `a == b`.
- `assertNotEqual(a, b)` – Verifies that `a != b`.
- `assertTrue(x)` – Verifies that `x` is `True`.
- `assertFalse(x)` – Verifies that `x` is `False`.
- `assertIsNone(x)` – Verifies that `x` is `None`.
- `assertIsNotNone(x)` – Verifies that `x` is not `None`.
- `assertRaises(exception, func, *args, **kwargs)` – Verifies that calling `func` with the given arguments raises the specified exception.

#### Example of assertions

```python
class TestMathFunctions(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(5, 10), 15)

    def test_subtract(self):
        self.assertNotEqual(add(5, 5), 10)

    def test_add_negative(self):
        self.assertTrue(add(-1, -1) < 0)

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            result = 1 / 0
```

### Test Fixtures

Test fixtures are used to set up conditions for running tests. These can be methods in the test class that are called before (via `setUp()`) or after (via `tearDown()`) each test method. They help avoid code duplication by preparing shared test data for multiple tests.

- `setUp()`: Called before every individual test method.
- `tearDown()`: Called after every individual test method.

#### Example with `setUp` and `tearDown`

```python
class TestDatabaseOperations(unittest.TestCase):

    def setUp(self):
        # Set up a mock database connection or some necessary resource
        self.db = MockDatabase()
        self.db.connect()

    def test_insert_data(self):
        self.db.insert({"id": 1, "name": "John"})
        self.assertEqual(len(self.db.get_all()), 1)

    def tearDown(self):
        # Clean up by closing the database connection
        self.db.disconnect()
```

## Running Unit Tests

To run the unit tests, you can simply call `unittest.main()` in your script, which will automatically discover and run all the test cases in the file. However, it's also possible to run tests from the command line using the `python -m unittest` command.

### Running tests from the command line

```bash
python -m unittest test_module.py
```

This will discover all the test cases in the `test_module.py` file and execute them.

## Test Discovery

The `unittest` module supports automatic test discovery, which allows you to find and run tests without explicitly specifying each test. By using `unittest.TestLoader().discover()`, Python can automatically find and execute tests in a specified directory.

Example of test discovery:

```python
import unittest

# Discover all tests in the 'tests' directory
test_suite = unittest.defaultTestLoader.discover('tests', pattern='test_*.py')
unittest.TextTestRunner().run(test_suite)
```

## Mocking in Unit Tests

Mocking is used in unit testing to replace parts of the system that are either difficult or unnecessary to test in isolation. The `unittest.mock` module provides tools to create mock objects and replace real implementations.

### Example of mocking

```python
from unittest import mock

class TestAPIClient(unittest.TestCase):

    @mock.patch('api_module.APIClient.get_data')
    def test_get_data(self, mock_get):
        # Define the mock behavior
        mock_get.return_value = {"status": "ok", "data": [1, 2, 3]}

        client = APIClient()
        response = client.get_data()

        self.assertEqual(response['status'], 'ok')
        self.assertEqual(response['data'], [1, 2, 3])
```

In this example, the `get_data` method of `APIClient` is replaced with a mock that returns predefined data.

## Test Coverage

Test coverage measures how much of your code is covered by tests. In Python, you can use tools like `coverage.py` to measure and report on test coverage.

To use `coverage.py`, install it via `pip`:

```bash
pip install coverage
```

Then, run the tests with coverage tracking:

```bash
coverage run -m unittest test_module.py
```

You can generate a coverage report after running the tests:

```bash
coverage report
```

Or generate an HTML report:

```bash
coverage html
```

## Best Practices for Unit Testing

- **Test Small Units of Code**: Each test should focus on a single unit of functionality, such as a method or function.
- **Make Tests Independent**: Tests should be independent of each other. They should not rely on the state left by other tests.
- **Write Meaningful Test Names**: Test names should clearly describe the behavior they are testing (e.g., `test_addition_with_positive_numbers`).
- **Use Mocks and Stubs**: Mock external systems, such as databases or APIs, to avoid dependencies on those systems during testing.
- **Run Tests Frequently**: Run unit tests frequently to catch errors early in the development cycle.
- **Keep Tests Readable**: Write tests that are easy to read and maintain, so they can be modified as the code evolves.
