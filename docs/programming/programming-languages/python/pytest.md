---
sidebar_position: 19
---

# Pytest

**Pytest** is one of the most widely used testing frameworks in Python. It is known for its simplicity, scalability, and rich feature set. Pytest allows developers to write simple unit tests as well as complex functional tests, and it can easily integrate with other tools to provide a powerful testing experience. It also supports various testing styles, including functional, object-oriented, and parameterized testing.

## Key Features of Pytest

- **Simple and Concise**: Writing tests in Pytest is simple and concise compared to other testing frameworks like `unittest`. It does not require the use of classes for organizing tests, and tests are often written as simple functions.
- **Powerful Assertions**: Pytest enhances Python’s built-in assert statement with more informative error messages. This makes debugging easier and provides better insights into why a test failed.
- **Test Discovery**: Pytest automatically discovers tests by looking for files and functions that match a naming pattern (e.g., files starting with `test_` or ending with `_test.py`).
- **Fixtures**: Pytest allows for reusable setup and teardown logic using fixtures, which can be shared across tests.
- **Plugins**: Pytest has a rich ecosystem of plugins, including coverage tracking, parallel test execution, and various reporting tools.
- **Parameterized Testing**: Pytest supports parameterized tests using `@pytest.mark.parametrize`, enabling the testing of a function with multiple input values and expected results.

## Installing Pytest

To install Pytest, you can use `pip`:

```bash
pip install pytest
```

## Writing Tests with Pytest

In Pytest, tests are typically written as functions, not methods inside a class (though using classes is also supported). The test function names should start with `test_` for Pytest to automatically recognize them as tests.

### Example of a Simple Test Function

```python
# test_example.py

def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2
```

In this example, `test_add()` is a function that checks the correctness of the `add()` function using assertions. The tests are executed by Pytest when you run the test file.

## Running Pytest

Once you have written the tests, you can run them using the `pytest` command:

```bash
pytest
```

By default, Pytest will search for files that match the pattern `test_*.py` and will execute any function inside those files that starts with `test_`.

You can also run tests in a specific file:

```bash
pytest test_example.py
```

If you want to see more detailed output, you can use the `-v` (verbose) flag:

```bash
pytest -v
```

If you only want to run specific tests, you can specify the test name:

```bash
pytest test_example.py::test_add
```

## Assertions in Pytest

One of the key features of Pytest is its powerful assertion system. Instead of using `self.assertEqual()` or other assertion methods (as in `unittest`), Pytest uses Python’s built-in `assert` statement. Pytest automatically rewrites failed assertions to provide detailed error messages, making it easier to diagnose issues.

### Example of Assertion Failure

```python
def test_add():
    assert add(2, 3) == 6  # This will fail
```

Output:

```
E       assert 5 == 6
E        +  where 5 = add(2, 3)
```

In the case of failure, Pytest will show the expected and actual values, making it easy to understand why the test failed.

## Fixtures in Pytest

Fixtures are one of the most powerful features of Pytest. They provide a way to set up resources or state before running a test and can also be used to tear down resources after the test is completed. Fixtures can be shared across multiple tests and even across different test files.

### Defining a Fixture

```python
import pytest

@pytest.fixture
def setup_data():
    data = {'name': 'John', 'age': 30}
    return data

def test_person_name(setup_data):
    assert setup_data['name'] == 'John'

def test_person_age(setup_data):
    assert setup_data['age'] == 30
```

In this example:

- The `setup_data` fixture returns a dictionary that contains some sample data.
- Both `test_person_name()` and `test_person_age()` use the fixture by declaring `setup_data` as a parameter.

Fixtures can also handle cleanup tasks by using the `yield` keyword. Any code after the `yield` statement is considered part of the teardown process.

### Example with Cleanup

```python
@pytest.fixture
def resource_setup_and_teardown():
    # Setup phase: Acquire a resource (e.g., a database connection)
    resource = open('myfile.txt', 'w')
    yield resource  # This is where the test function will receive the resource
    # Teardown phase: Close the resource
    resource.close()

def test_write_to_file(resource_setup_and_teardown):
    resource_setup_and_teardown.write('Hello, World!')
    resource_setup_and_teardown.close()
```

In this case, the resource (`myfile.txt`) is opened in the setup phase and closed in the teardown phase.

## Parametrized Tests

Pytest allows you to run a single test function multiple times with different sets of input data using the `@pytest.mark.parametrize` decorator. This is useful for testing the same function with a variety of inputs and expected results.

### Example of Parametrized Tests

```python
import pytest

@pytest.mark.parametrize('a, b, expected', [
    (1, 2, 3),
    (2, 3, 5),
    (-1, 1, 0),
    (-2, -3, -5),
])
def test_add(a, b, expected):
    assert add(a, b) == expected
```

In this example, the `test_add` function is run four times with different parameter sets. Pytest will automatically generate tests for each tuple of values.

## Test Discovery

Pytest automatically discovers tests by searching for files with names matching `test_*.py` and looking for functions within those files whose names start with `test_`. It will then execute those functions as tests.

You can specify a directory for test discovery:

```bash
pytest tests/
```

Where `tests/` is the directory containing your test files.

## Marking Tests with `@pytest.mark`

Pytest allows tests to be marked with tags for different purposes, such as skipping tests, marking them as expected failures, or grouping tests.

### Example of Skipping a Test

```python
import pytest

@pytest.mark.skip(reason="This test is skipped")
def test_to_skip():
    assert 1 == 2
```

### Example of Expecting a Failure

```python
@pytest.mark.xfail
def test_expected_failure():
    assert 1 == 2  # This will be marked as a known failure
```

### Running Tests by Mark

You can also run tests based on their marks. For example, to run only tests that are marked as `xfail`:

```bash
pytest -m xfail
```

## Plugins and Extensions

Pytest has a rich ecosystem of plugins that extend its functionality. Some of the most popular plugins include:

- **pytest-cov**: For measuring test coverage.
- **pytest-django**: For testing Django applications.
- **pytest-mock**: For mocking in tests.
- **pytest-xdist**: For running tests in parallel to speed up test execution.

To install a plugin, simply use `pip`:

```bash
pip install pytest-cov
```

And then run it:

```bash
pytest --cov=my_module
```

## Running Tests in Parallel with `pytest-xdist`

To speed up testing, especially for large test suites, Pytest can run tests in parallel using the `pytest-xdist` plugin.

### Example

```bash
pytest -n 4  # Run tests using 4 processes
```

This splits the test suite into four processes and runs them simultaneously, which can significantly reduce the overall test run time.

## Test Coverage with `pytest-cov`

Test coverage measures how much of your code is tested by your unit tests. The `pytest-cov` plugin integrates with Pytest to provide coverage reports.

#### Example:

```bash
pip install pytest-cov
pytest --cov=my_module
```

This will display a test coverage report after running the tests.
