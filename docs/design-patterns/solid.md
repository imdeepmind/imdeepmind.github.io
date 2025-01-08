---
sidebar_position: 2
---

# SOLD

**SOLID** is an acronym that represents five principles of object-oriented design that help developers create systems that are easier to manage, extend, and maintain. These principles, introduced by Robert C. Martin (Uncle Bob), are widely regarded as essential for writing clean, efficient, and maintainable code. By following these principles, developers can ensure that their software is more modular, flexible, and robust to changes.

The SOLID principles are:

1. **S** – **Single Responsibility Principle (SRP)**
2. **O** – **Open/Closed Principle (OCP)**
3. **L** – **Liskov Substitution Principle (LSP)**
4. **I** – **Interface Segregation Principle (ISP)**
5. **D** – **Dependency Inversion Principle (DIP)**

## Single Responsibility Principle (SRP)\*\*

The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility. This means that a class should encapsulate a single concept, and it should not be responsible for multiple unrelated tasks. By adhering to SRP, the software becomes easier to understand, test, and maintain, as each class focuses on a single responsibility.

### Example

Imagine a class `User` that handles both user data management and sending emails. According to SRP, it should only handle one of these tasks. The responsibilities should be separated into two different classes, one for user data and one for sending emails, which leads to better modularity and easier future modifications.

```python
# Violating SRP: Single class doing multiple tasks
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def save(self):
        # Save user to the database
        pass

    def send_email(self):
        # Send an email to the user
        pass

# Following SRP: Separate responsibilities
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def save(self):
        # Save user to the database
        pass

class EmailService:
    def send_email(self, email):
        # Send email logic
        pass
```

## Open/Closed Principle (OCP)\*\*

The Open/Closed Principle states that a software entity (class, module, or function) should be open for extension but closed for modification. In other words, you should be able to add new functionality to a class without changing its existing code. This principle encourages the use of polymorphism, inheritance, and interfaces, which allow the behavior of the class to be extended without altering its original implementation.

### Example

Imagine a `Shape` class that calculates the area for different types of shapes. According to OCP, we can extend the functionality for new shapes (like `Circle`, `Rectangle`, etc.) without modifying the existing `Shape` class. Instead, we can extend the base class and override its methods.

```python
# Violating OCP: Modifying the class for new shapes
class AreaCalculator:
    def calculate_area(self, shape):
        if isinstance(shape, Circle):
            return 3.14 * shape.radius ** 2
        elif isinstance(shape, Rectangle):
            return shape.length * shape.width
        # Additional shapes require modifying the code

# Following OCP: Extending functionality via inheritance
class Shape:
    def calculate_area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width
```

## Liskov Substitution Principle (LSP)\*\*

The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, a subclass should extend the functionality of a superclass without changing its expected behavior. Violating LSP can lead to unpredictable behavior and bugs when replacing objects at runtime.

### Example

Consider a `Bird` class with a `fly` method, and a `Penguin` subclass. Penguins cannot fly, so violating LSP would occur if we had a `Penguin` class inherit from `Bird` and use the `fly` method. Instead, `Penguin` should either not inherit from `Bird` or redefine its behavior in a way that does not interfere with the superclass expectations.

```python
# Violating LSP
class Bird:
    def fly(self):
        pass

class Penguin(Bird):
    def fly(self):
        raise NotImplementedError("Penguins can't fly")

# Following LSP
class Bird:
    def move(self):
        pass

class Sparrow(Bird):
    def move(self):
        # Logic for flying

class Penguin(Bird):
    def move(self):
        # Logic for swimming
```

## Interface Segregation Principle (ISP)\*\*

The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. In other words, classes should have small, focused interfaces rather than large, monolithic ones. This principle prevents clients from having to implement unnecessary methods, leading to a cleaner, more maintainable design.

### Example

Suppose you have an interface for `Machine` that includes methods for both `print` and `scan`. If a `Printer` class only needs the `print` functionality, it should not be forced to implement the `scan` method, as it has no use for it.

```python
# Violating ISP
class Machine:
    def print(self):
        pass

    def scan(self):
        pass

class Printer(Machine):
    def print(self):
        pass

    def scan(self):
        raise NotImplementedError("Printer can't scan")

# Following ISP
class Printer:
    def print(self):
        pass

class Scanner:
    def scan(self):
        pass
```

## Dependency Inversion Principle (DIP)\*\*

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions. This principle promotes loose coupling between classes and allows for easier modification and testing by inverting the direction of dependencies.

### Example

Suppose a `UserService` class depends on a `Database` class for data storage. Following DIP, the `UserService` class should depend on an abstraction (like an interface) rather than the concrete `Database` class. This makes it easier to switch between different database implementations or mock dependencies for testing.

```python
# Violating DIP
class UserService:
    def __init__(self):
        self.database = Database()  # Direct dependency on Database

    def save_user(self, user):
        self.database.save(user)

class Database:
    def save(self, user):
        # Save logic
        pass

# Following DIP
class UserService:
    def __init__(self, database: DatabaseInterface):
        self.database = database  # Dependency injected through abstraction

    def save_user(self, user):
        self.database.save(user)

class DatabaseInterface:
    def save(self, user):
        pass

class MySQLDatabase(DatabaseInterface):
    def save(self, user):
        # MySQL save logic
        pass

class MongoDatabase(DatabaseInterface):
    def save(self, user):
        # MongoDB save logic
        pass
```
