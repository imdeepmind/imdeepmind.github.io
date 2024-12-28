---
sidebar_position: 9
---

# Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to model real-world or abstract entities. Objects contain data (attributes) and behaviors (methods). Python supports OOP principles like encapsulation, inheritance, polymorphism, and abstraction, which help in creating structured, reusable, and modular code.

## Classes and Objects

**Class:** A blueprint or template for creating objects. It defines attributes and methods that the objects created from the class will have.

**Object:** An instance of a class with specific values assigned to its attributes.

### Example

```python
class Dog:
    # Class Attribute
    species = "Canis lupus familiaris"

    # Constructor (initializer)
    def __init__(self, name, age):
        # Instance Attributes
        self.name = name
        self.age = age

    # Method
    def bark(self):
        return f"{self.name} says woof!"

# Creating objects
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.bark())  # Output: Buddy says woof!
print(dog2.age)     # Output: 5
```

## Encapsulation

Encapsulation is the practice of restricting direct access to the attributes of an object to keep data secure. Private attributes are created by prefixing the attribute name with an underscore (`_`) or double underscore (`__`), signaling that these should not be accessed directly.

### Example

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient funds.")

    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500
# account.__balance = 10000  # This would raise an AttributeError
```

## Inheritance

Inheritance allows a class (child) to inherit attributes and methods from another class (parent), promoting code reuse. The child class can also override or extend the behavior of the parent class.

**Does Python Support Multiple Inheritance?**  
Yes, Python supports multiple inheritance, which means that a class can inherit from more than one class.

### Example of Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def sound(self):
        return f"{self.name} barks"

class Cat(Animal):
    def sound(self):
        return f"{self.name} meows"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.sound())  # Output: Buddy barks
print(cat.sound())  # Output: Whiskers meows
```

### Example of Multiple Inheritance

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, my name is {self.name}"

class Worker:
    def __init__(self, job):
        self.job = job

    def work(self):
        return f"I am working as a {self.job}"

class Employee(Person, Worker):
    def __init__(self, name, job):
        Person.__init__(self, name)
        Worker.__init__(self, job)

employee = Employee("John", "Developer")
print(employee.greet())  # Output: Hello, my name is John
print(employee.work())   # Output: I am working as a Developer
```

## Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables the same method to have different meanings based on the object calling it.

### Example

```python
def animal_sound(animal):
    print(animal.sound())

dog = Dog("Buddy")
cat = Cat("Whiskers")
animal_sound(dog)  # Output: Buddy barks
animal_sound(cat)  # Output: Whiskers meows
```

## Abstraction

Abstraction hides the complexity of implementation and exposes only what is necessary. In Python, abstract classes can be created using the `abc` (Abstract Base Class) module.

### Example

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

rectangle = Rectangle(5, 10)
print(rectangle.area())  # Output: 50
```

## Dunder (Magic) Methods

Dunder (double underscore) or magic methods allow you to define behaviors for built-in operators and functions for your objects.

### Common Dunder Methods:

- `__init__`: Constructor to initialize objects.
- `__str__`: Defines how the object is represented as a string.
- `__len__`: Allows `len(obj)` to be called on the object.
- `__add__`: Defines behavior for the `+` operator.
- `__repr__`: Provides a detailed string representation of the object.
- `__eq__`: Compares objects for equality.
- `__lt__`: Compares objects for less-than relationship.

### Examples of Dunder Methods:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"'{self.title}' by {self.author}"

    def __len__(self):
        return self.pages

    def __eq__(self, other):
        return self.title == other.title and self.author == other.author

    def __lt__(self, other):
        return self.pages < other.pages

book1 = Book("1984", "George Orwell", 328)
book2 = Book("Animal Farm", "George Orwell", 112)
book3 = Book("1984", "George Orwell", 328)

print(book1)            # Output: '1984' by George Orwell
print(len(book1))       # Output: 328
print(book1 == book3)   # Output: True
print(book1 < book2)    # Output: False
```

## Class vs. Instance Attributes and Methods

- **Instance Attributes:** Defined within `__init__` and are specific to each object.
- **Class Attributes:** Shared across all instances of a class, defined directly in the class body.

### Example

```python
class Car:
    wheels = 4  # Class attribute

    def __init__(self, color):
        self.color = color  # Instance attribute

car1 = Car("red")
car2 = Car("blue")

print(car1.wheels)  # Output: 4
print(car2.color)   # Output: blue
```

## Static and Class Methods

- **Static Method:** A method that does not need access to the instance (`self`) or class (`cls`). It is marked with the `@staticmethod` decorator.
- **Class Method:** A method that works on the class level, marked with the `@classmethod` decorator.

### Example

```python
class Calculator:
    @staticmethod
    def add(x, y):
        return x + y

    @classmethod
    def description(cls):
        return f"This is a calculator class."

print(Calculator.add(5, 3))       # Output: 8
print(Calculator.description())   # Output: This is a calculator class.
```

## super() Method in Python

The `super()` function in Python is used to call methods from a parent class in a child class. It allows you to invoke a method from the superclass (parent class) without explicitly referring to the parent class by name. This is particularly useful in inheritance, where you want to extend or modify the behavior of a parent class method in a child class while still preserving the parent class's functionality.

### Key Points

- **Calling Parent Class Methods:** The `super()` function is typically used to call the parent class's methods, especially in the `__init__` constructor, where it is used to initialize the attributes of the parent class.
- **Multiple Inheritance:** In the case of multiple inheritance, `super()` is used to ensure that the method resolution order (MRO) is followed and the correct method from the class hierarchy is called.

### Syntax

```python
super().method_name(arguments)
```

Here, `super()` refers to the parent class, and `method_name` is the method that you want to call.

### Examples

#### Using `super()` in Single Inheritance:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

class Dog(Animal):
    def __init__(self, name, breed):
        # Calling the __init__ method of the parent class
        super().__init__(name)
        self.breed = breed

    def speak(self):
        super().speak()  # Calling the speak method of the parent class
        print(f"{self.name} barks!")

dog = Dog("Buddy", "Golden Retriever")
dog.speak()
# Output:
# Buddy makes a sound.
# Buddy barks!
```

In this example, `super().__init__(name)` calls the `__init__` method of the `Animal` class from the `Dog` class. Similarly, `super().speak()` calls the `speak` method of the parent class `Animal`.

#### Using `super()` in Multiple Inheritance:

In the case of multiple inheritance, `super()` helps manage the method resolution order (MRO) to call methods from all parent classes properly.

```python
class A:
    def method(self):
        print("Method of class A")

class B:
    def method(self):
        print("Method of class B")

class C(A, B):
    def method(self):
        super().method()  # Calls method from class A
        print("Method of class C")

c = C()
c.method()
# Output:
# Method of class A
# Method of class C
```

In this case, the `super()` call in class `C` ensures that the `method` from class `A` is called before executing the logic in class `C`. The MRO ensures that methods are called in the correct order in multiple inheritance.

#### Using `super()` to Avoid Redundant Code:

When overriding methods, `super()` helps avoid redundant code by allowing you to call the parent class's implementation without re-implementing it.

```python
class Base:
    def print_message(self):
        print("Message from Base class.")

class Derived(Base):
    def print_message(self):
        super().print_message()  # Calls the Base class method
        print("Message from Derived class.")

d = Derived()
d.print_message()
# Output:
# Message from Base class.
# Message from Derived class.
```

### Why Use `super()`?

- **Code Reusability:** It avoids duplicating code in the child class by calling the parent class methods directly.
- **Clearer Inheritance:** It promotes cleaner and more maintainable code by making inheritance explicit and less error-prone.
- **Multiple Inheritance Handling:** It helps manage method resolution order (MRO) effectively in complex inheritance scenarios.
