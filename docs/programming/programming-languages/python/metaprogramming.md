---
sidebar_position: 16
---

# Metaprogramming

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Metaprogramming refers to the ability of a program to treat other programs as data. It involves writing code that manipulates or generates other code at runtime, often modifying its behavior dynamically. Python is an excellent language for metaprogramming because of its dynamic nature, where classes and functions can be modified or generated on the fly. This gives developers a high degree of flexibility and power.

Metaprogramming in Python is commonly achieved through the following techniques:

## Introspection

Introspection refers to the ability of a program to examine the type or properties of an object at runtime. Python provides powerful introspection capabilities via functions and methods like:

- `type()`: Returns the type of an object.
- `dir()`: Lists all attributes of an object.
- `id()`: Returns the identity of an object (memory address).
- `getattr()`: Retrieves an attribute of an object by name.
- `setattr()`: Sets an attribute on an object by name.
- `hasattr()`: Checks if an object has a particular attribute.
- `callable()`: Checks if an object is callable (a function or method).

Example:

```python
class MyClass:
    def my_method(self):
        return "Hello, World!"

obj = MyClass()
print(type(obj))  # <class '__main__.MyClass'>
print(dir(obj))   # Lists all methods and attributes, including 'my_method'
print(getattr(obj, 'my_method')())  # Calls 'my_method' dynamically
```

## Metaclasses

A metaclass is a class of a class. In Python, classes are instances of metaclasses. Metaclasses allow you to control the creation of classes and modify their behavior at the time they are defined.

In Python, `type` is the default metaclass. You can create a custom metaclass by inheriting from `type` and overriding methods like `__new__` or `__init__`.

Example of a metaclass:

```python
class MyMeta(type):
    def __new__(cls, name, bases, dct):
        dct['greeting'] = "Hello, World!"  # Add a new attribute to the class
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass

print(MyClass.greeting)  # "Hello, World!"
```

In this example, the metaclass `MyMeta` adds a new attribute `greeting` to the class `MyClass` during its creation.

## Dynamic Class Creation

Python allows you to create classes dynamically at runtime using the `type()` function. This is a form of metaprogramming where you define classes on the fly.

Example:

```python
def dynamic_class(name, base_classes, class_dict):
    return type(name, base_classes, class_dict)

# Create a new class dynamically
NewClass = dynamic_class('NewClass', (object,), {'greeting': 'Hello, Dynamic!'})

# Instantiate and access the attribute
obj = NewClass()
print(obj.greeting)  # "Hello, Dynamic!"
```

## Customizing Attribute Access with `__getattr__`, `__setattr__`, and `__delattr__`

You can customize the behavior of attribute access, modification, and deletion in Python by overriding the special methods `__getattr__`, `__setattr__`, and `__delattr__`. These methods are called when an attribute is accessed, set, or deleted, respectively.

Example of `__getattr__` and `__setattr__`:

```python
class MyClass:
    def __init__(self):
        self._data = {}

    def __getattr__(self, name):
        if name in self._data:
            return self._data[name]
        else:
            return f"Attribute {name} not found"

    def __setattr__(self, name, value):
        if name == "_data":
            super().__setattr__(name, value)
        else:
            self._data[name] = value

obj = MyClass()
obj.new_attribute = 42
print(obj.new_attribute)  # 42
print(obj.some_attribute)  # "Attribute some_attribute not found"
```

## Code Generation with `exec()` and `eval()`

Python allows you to execute dynamically generated code using the `exec()` and `eval()` functions.

- `eval()` evaluates a string as a Python expression and returns the result.
- `exec()` executes a string as Python code, but it does not return any value.

Example using `eval()`:

```python
expression = "3 + 5"
result = eval(expression)
print(result)  # 8
```

Example using `exec()`:

```python
code = """
def dynamic_func():
    return "This is dynamically generated!"
"""
exec(code)
print(dynamic_func())  # This is dynamically generated!
```

## Using `__call__` for Callable Objects

In Python, you can make instances of a class callable by defining the `__call__` method. This is another form of metaprogramming, allowing objects to behave like functions.

Example:

```python
class CallableClass:
    def __call__(self, name):
        print(f"Hello, {name}!")

obj = CallableClass()
obj("World")  # Hello, World!
```

## Monkey Patching

Monkey patching is the practice of dynamically modifying or extending the behavior of classes or modules at runtime. This can be useful in certain situations but should be used with caution, as it can lead to code that is difficult to understand and maintain.

Example:

```python
import math

# Original behavior
print(math.sqrt(9))  # 3.0

# Monkey patching sqrt method
def new_sqrt(x):
    return x * 2

math.sqrt = new_sqrt
print(math.sqrt(9))  # 18
```

## When to Use Metaprogramming

While metaprogramming provides a great deal of flexibility, it should be used judiciously. It can make code more dynamic and adaptable, but it can also introduce complexity and make debugging and understanding the code harder. Here are some appropriate use cases:

- **Dynamic code generation**: When you need to generate classes or functions based on runtime data.
- **Code reuse and abstraction**: When you want to abstract common logic across different classes or functions.
- **Validation and constraint checking**: To enforce rules dynamically (e.g., enforcing specific patterns in attributes or method calls).
- **Decorator patterns**: To add or modify functionality of existing code in a clean and reusable way.
- **Testing frameworks**: To generate tests dynamically based on input data.
