---
sidebar_position: 3
---

# Core Software Engineering Principles

These fundamental principles help developers write maintainable, scalable, and robust code. Let's explore each with Python examples.

## DRY (Don't Repeat Yourself)

Avoid code duplication by abstracting common functionality into reusable components.

### Why it matters

- Reduces maintenance overhead
- Minimizes bugs from inconsistent changes
- Improves readability

### Bad Example (Violates DRY)

```python
def calculate_area_square(side):
    return side * side

def calculate_volume_cube(side):
    return side * side * side  # Duplicated multiplication logic
```

### Good Example (DRY)

```python
def square(x):
    return x * x

def calculate_area_square(side):
    return square(side)

def calculate_volume_cube(side):
    return square(side) * side  # Reuses square() function
```

### When to break DRY

- When abstraction would make code harder to understand
- For truly one-off operations

## KISS (Keep It Simple, Stupid)

Favor simple, straightforward solutions over complex ones.

### Why it matters

- Easier to maintain and debug
- Faster to implement
- More accessible to other developers

### Complex Solution (Violates KISS)

```python
def is_even(num):
    return True if num % 2 == 0 else False  # Unnecessary ternary
```

### Simple Solution (KISS)

```python
def is_even(num):
    return num % 2 == 0  # Direct boolean expression
```

### KISS in Practice

- Avoid premature optimization
- Prefer clear variable names over clever one-liners
- Limit abstraction layers to what's necessary

## YAGNI (You Aren't Gonna Need It)

Don't implement functionality until it's actually needed.

### Why it matters

- Reduces wasted development time
- Keeps codebase lean
- Avoids maintaining unused code

### Bad Example (Violates YAGNI)

```python
class User:
    def __init__(self, name):
        self.name = name
        self.age = None  # Added "just in case" we need it later
        self.address = None  # Not currently used anywhere
```

### Good Example (YAGNI)

```python
class User:
    def __init__(self, name):
        self.name = name  # Only what we need now
```

### YAGNI Exception

When building extensible frameworks where future needs are well-understood

## Law of Demeter (Principle of Least Knowledge)

An object should only talk to its immediate neighbors (friends), not strangers.

### Why it matters

- Reduces coupling between classes
- Makes code more modular
- Easier to refactor

### Violation Example

```python
# Bad: Digging deep into object relationships
user.get_account().get_balance().format_currency()
```

### Proper Implementation

```python
# Good: Delegate to immediate neighbors
user.format_account_balance()

# Inside User class:
def format_account_balance(self):
    return self.account.format_balance()  # Only talks to direct dependency
```

### Demeter Exception

- Builder pattern method chaining
- Fluent interfaces

## Composition Over Inheritance

Favor building functionality by combining simple objects rather than inheriting from base classes.

### Why it matters

- More flexible than deep inheritance hierarchies
- Avoids fragile base class problem
- Easier to change behavior at runtime

### Inheritance Example (Problematic)

```python
class Vehicle:
    def move(self):
        pass

class Car(Vehicle):
    def move(self):
        print("Driving")

class FlyingCar(Car):  # What if we need different movement?
    def move(self):
        print("Flying")  # Overriding parent behavior
```

### Composition Solution

```python
class Engine:
    def move(self):
        print("Driving")

class JetEngine:
    def move(self):
        print("Flying")

class Vehicle:
    def __init__(self, engine):
        self.engine = engine

    def move(self):
        self.engine.move()

# Usage
car = Vehicle(Engine())
car.move()  # Driving

flying_car = Vehicle(JetEngine())
flying_car.move()  # Flying
```

### When to Use Inheritance

- For true "is-a" relationships
- When you need method overriding
- For interface implementation

## Separation of Concerns (SoC)

Divide a program into distinct sections, each addressing a separate concern.

### Why it matters

- Easier maintenance
- Better code organization
- Enables parallel development

### Violation Example (Monolithic Function)

```python
def process_order(order):
    # Validate order
    if not order.items:
        raise ValueError("Empty order")

    # Calculate total
    total = sum(item.price * item.quantity for item in order.items)

    # Charge payment
    payment_service.charge(order.customer, total)

    # Send confirmation
    email_service.send_confirmation(order.customer)

    # Update inventory
    inventory_manager.update_stock(order.items)
```

### Proper Separation

```python
class OrderValidator:
    def validate(self, order):
        if not order.items:
            raise ValueError("Empty order")

class OrderCalculator:
    def get_total(self, order):
        return sum(item.price * item.quantity for item in order.items)

class OrderProcessor:
    def __init__(self):
        self.validator = OrderValidator()
        self.calculator = OrderCalculator()

    def process(self, order):
        self.validator.validate(order)
        total = self.calculator.get_total(order)
        payment_service.charge(order.customer, total)
        email_service.send_confirmation(order.customer)
        inventory_manager.update_stock(order.items)
```

### SoC Benefits

- Each class has single responsibility
- Easier to test components in isolation
- Changes to one concern don't affect others

## Summary Table

| Principle          | Key Benefit        | Python Example           | When to Violate                |
| ------------------ | ------------------ | ------------------------ | ------------------------------ |
| **DRY**            | Reduce duplication | Reusable functions       | When abstraction hurts clarity |
| **KISS**           | Maintainability    | Simple boolean returns   | Performance-critical sections  |
| **YAGNI**          | Avoid waste        | Minimal class attributes | Framework development          |
| **Law of Demeter** | Loose coupling     | Method delegation        | Fluent interfaces              |
| **Composition**    | Flexibility        | Engine injection         | True "is-a" relationships      |
| **SoC**            | Modularity         | Separate validator class | Trivial applications           |
