---
sidebar_position: 1
---

# Introduction

Design Patterns are reusable solutions to common problems in software design. The Gang of Four (GoF)—Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides—introduced 23 classic design patterns in their book "Design Patterns: Elements of Reusable Object-Oriented Software" (1994).

These patterns are categorized into three main types:

- **Creational** – Deal with object creation mechanisms.
- **Structural** – Concerned with object composition and relationships.
- **Behavioral** – Define communication between objects.

## Creational Design Patterns

Creational design patterns deal with **object creation mechanisms**, trying to create objects in a manner suitable to the situation. They help make a system **independent of how its objects are created, composed, and represented**.

### Singleton Pattern

Ensures that a class has **only one instance** and provides a **global point of access** to it.

#### When to use

- When exactly one instance of a class is needed (e.g., database connection, logging service).
- To control shared resources.

#### Python Example

```python
class Singleton:
    _instance = None  # Class-level variable to store the single instance

    def __new__(cls):
        """Override __new__ to control instance creation."""
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True (Both variables point to the same instance)
```

#### Pros & Cons

✅ **Memory efficient** (only one instance exists)  
❌ **Global state** (can make testing harder)

### Factory Method Pattern

Defines an **interface for creating objects**, but lets **subclasses decide which class to instantiate**.

#### When to use

- When a class can't anticipate the type of objects it needs to create.
- When you want to delegate instantiation to subclasses.

#### Python Example

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    """Abstract base class for vehicles."""
    @abstractmethod
    def drive(self):
        pass

class Car(Vehicle):
    def drive(self):
        return "Driving a car!"

class Bike(Vehicle):
    def drive(self):
        return "Riding a bike!"

class VehicleFactory(ABC):
    """Abstract factory that defines the factory method."""
    @abstractmethod
    def create_vehicle(self) -> Vehicle:
        pass

class CarFactory(VehicleFactory):
    """Concrete factory for creating cars."""
    def create_vehicle(self) -> Vehicle:
        return Car()

class BikeFactory(VehicleFactory):
    """Concrete factory for creating bikes."""
    def create_vehicle(self) -> Vehicle:
        return Bike()

# Usage
car_factory = CarFactory()
car = car_factory.create_vehicle()
print(car.drive())  # Output: "Driving a car!"
```

#### Pros & Cons

✅ **Loose coupling** (client code doesn’t depend on concrete classes)  
❌ **Can lead to many subclasses**

### Abstract Factory Pattern

Provides an **interface for creating families of related objects** without specifying their concrete classes.

#### When to use

- When a system needs to be **independent of how its products are created**.
- When working with **multiple product families** (e.g., UI components for different OS).

#### Python Example

```python
from abc import ABC, abstractmethod

# Abstract Products
class Button(ABC):
    @abstractmethod
    def render(self):
        pass

class Checkbox(ABC):
    @abstractmethod
    def render(self):
        pass

# Concrete Products (Windows)
class WindowsButton(Button):
    def render(self):
        return "Windows Button"

class WindowsCheckbox(Checkbox):
    def render(self):
        return "Windows Checkbox"

# Concrete Products (Mac)
class MacButton(Button):
    def render(self):
        return "Mac Button"

class MacCheckbox(Checkbox):
    def render(self):
        return "Mac Checkbox"

# Abstract Factory
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass

    @abstractmethod
    def create_checkbox(self) -> Checkbox:
        pass

# Concrete Factories
class WindowsFactory(GUIFactory):
    def create_button(self) -> Button:
        return WindowsButton()

    def create_checkbox(self) -> Checkbox:
        return WindowsCheckbox()

class MacFactory(GUIFactory):
    def create_button(self) -> Button:
        return MacButton()

    def create_checkbox(self) -> Checkbox:
        return MacCheckbox()

# Usage
def create_ui(factory: GUIFactory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()
    print(button.render(), checkbox.render())

# Create Windows UI
create_ui(WindowsFactory())  # Output: "Windows Button Windows Checkbox"

# Create Mac UI
create_ui(MacFactory())  # Output: "Mac Button Mac Checkbox"
```

#### Pros & Cons

✅ **Ensures product compatibility**  
❌ **Complex to implement**

### Builder Pattern

Separates the **construction of a complex object** from its representation, allowing the same construction process to create different representations.

#### When to use

- When an object has **many optional parameters** (e.g., configuring a complex object).
- When you want to **avoid telescoping constructors**.

#### Python Example

```python
class Pizza:
    def __init__(self):
        self.crust = None
        self.sauce = None
        self.toppings = []

    def __str__(self):
        return f"Pizza: {self.crust} crust, {self.sauce} sauce, toppings: {', '.join(self.toppings)}"

class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def set_crust(self, crust):
        self.pizza.crust = crust
        return self  # Return self for method chaining

    def set_sauce(self, sauce):
        self.pizza.sauce = sauce
        return self

    def add_topping(self, topping):
        self.pizza.toppings.append(topping)
        return self

    def build(self):
        return self.pizza

# Usage
builder = PizzaBuilder()
pizza = (builder.set_crust("thin")
               .set_sauce("tomato")
               .add_topping("cheese")
               .add_topping("mushrooms")
               .build())

print(pizza)  # Output: "Pizza: thin crust, tomato sauce, toppings: cheese, mushrooms"
```

#### Pros & Cons

✅ **Flexible object construction**  
❌ **Slightly verbose for simple objects**

### Prototype Pattern

Creates new objects by **cloning an existing object** (prototype) instead of creating new instances from scratch.

#### When to use

- When object creation is **expensive** (e.g., database calls, complex computations).
- When you need **similar objects with slight variations**.

#### Python Example

```python
import copy

class Prototype:
    def clone(self):
        """Deep copy the object to create a new instance."""
        return copy.deepcopy(self)

class Car(Prototype):
    def __init__(self, model, color):
        self.model = model
        self.color = color

    def __str__(self):
        return f"{self.color} {self.model}"

# Usage
original_car = Car("Tesla Model S", "Red")
cloned_car = original_car.clone()

print(original_car)  # Output: "Red Tesla Model S"
print(cloned_car)    # Output: "Red Tesla Model S"

# Modify the clone
cloned_car.color = "Blue"
print(cloned_car)    # Output: "Blue Tesla Model S" (Original remains unchanged)
```

#### Pros & Cons

✅ **Performance boost** (avoids expensive initialization)  
❌ **Deep vs. shallow copy issues**

### Summary Table

| Pattern              | Purpose                 | Use Case                 | Pros                  | Cons            |
| -------------------- | ----------------------- | ------------------------ | --------------------- | --------------- |
| **Singleton**        | Single instance         | Logging, DB connections  | Memory efficient      | Global state    |
| **Factory Method**   | Delegate instantiation  | Frameworks               | Loose coupling        | Many subclasses |
| **Abstract Factory** | Families of objects     | Cross-platform UI        | Product compatibility | Complex         |
| **Builder**          | Complex object creation | Configurable objects     | Flexible              | Verbose         |
| **Prototype**        | Clone objects           | Expensive initialization | Performance boost     | Copy issues     |

## Structural Design Patterns

Structural patterns deal with **object composition** - how classes and objects are combined to form larger structures. They help ensure that when one part of a system changes, the entire structure doesn't need to change.

### Adapter Pattern

Allows **incompatible interfaces** to work together by converting the interface of one class into another interface clients expect.

#### When to use

- When you need to integrate a new component with an existing system that expects a different interface
- When working with legacy code or third-party libraries

#### Python Example

```python
# Old incompatible class
class OldPrinter:
    def print_document(self):
        print("Printing using old printer")

# New expected interface
class NewPrinterInterface(ABC):
    @abstractmethod
    def print(self):
        pass

# Adapter that makes OldPrinter compatible with NewPrinterInterface
class PrinterAdapter(NewPrinterInterface):
    def __init__(self, old_printer: OldPrinter):
        self.old_printer = old_printer

    def print(self):
        self.old_printer.print_document()

# Usage
old_printer = OldPrinter()
adapter = PrinterAdapter(old_printer)
adapter.print()  # Output: "Printing using old printer"
```

#### Pros & Cons

✅ **Enables reusability of existing code**
❌ **Can increase complexity with many adapters**

### Decorator Pattern

Dynamically **adds responsibilities** to objects without changing their class. Provides a flexible alternative to subclassing.

#### When to use

- When you need to add functionality to objects at runtime
- When subclassing would lead to an explosion of classes

#### Python Example

```python
class Coffee:
    def cost(self):
        return 5

class MilkDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 2

class SugarDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 1

# Usage
simple_coffee = Coffee()
print(simple_coffee.cost())  # 5

milk_coffee = MilkDecorator(simple_coffee)
print(milk_coffee.cost())  # 7

sweet_milk_coffee = SugarDecorator(milk_coffee)
print(sweet_milk_coffee.cost())  # 8
```

#### Pros & Cons

✅ **More flexible than inheritance**
❌ **Can result in many small objects**

### Facade Pattern

Provides a **simplified interface** to a complex subsystem. Hides implementation details behind a unified interface.

#### When to use

- When you need to provide a simple interface to a complex system
- To decouple client code from subsystem components

#### Python Example

```python
class CPU:
    def start(self):
        print("Starting CPU")

class Memory:
    def load(self):
        print("Loading memory")

class HardDrive:
    def read(self):
        print("Reading from hard drive")

class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.memory = Memory()
        self.hard_drive = HardDrive()

    def start(self):
        self.cpu.start()
        self.memory.load()
        self.hard_drive.read()

# Usage
computer = ComputerFacade()
computer.start()
# Output:
# Starting CPU
# Loading memory
# Reading from hard drive
```

#### Pros & Cons

✅ **Reduces complexity for clients**
❌ **Can become a "god object"**

### Proxy Pattern

Provides a **surrogate or placeholder** for another object to control access to it.

#### When to use

- For lazy initialization
- Access control (protection proxy)
- Remote object handling (remote proxy)

#### Python Example

```python
class RealImage:
    def __init__(self, filename):
        self.filename = filename
        self._load_from_disk()

    def _load_from_disk(self):
        print(f"Loading {self.filename}")

    def display(self):
        print(f"Displaying {self.filename}")

class ImageProxy:
    def __init__(self, filename):
        self.filename = filename
        self.real_image = None

    def display(self):
        if self.real_image is None:
            self.real_image = RealImage(self.filename)
        self.real_image.display()

# Usage
image = ImageProxy("test.jpg")
# Image not loaded yet
image.display()
# Output:
# Loading test.jpg
# Displaying test.jpg
```

#### Pros & Cons

✅ **Controls object creation**
❌ **Can introduce latency**

### Composite Pattern

Composes objects into **tree structures** to represent part-whole hierarchies. Lets clients treat individual objects and compositions uniformly.

#### When to use

- When you need to represent hierarchies of objects
- When clients should ignore differences between compositions and individual objects

#### Python Example

```python
from abc import ABC, abstractmethod

class Component(ABC):
    @abstractmethod
    def operation(self):
        pass

class Leaf(Component):
    def operation(self):
        return "Leaf operation"

class Composite(Component):
    def __init__(self):
        self._children = []

    def add(self, component: Component):
        self._children.append(component)

    def remove(self, component: Component):
        self._children.remove(component)

    def operation(self):
        results = []
        for child in self._children:
            results.append(child.operation())
        return f"Branch({'+'.join(results)})"

# Usage
leaf1 = Leaf()
leaf2 = Leaf()
composite = Composite()
composite.add(leaf1)
composite.add(leaf2)

print(composite.operation())  # Output: "Branch(Leaf operation+Leaf operation)"
```

#### Pros & Cons

✅ **Simplifies client code**
❌ **Can make design overly general**

### Bridge Pattern

Decouples an abstraction from its implementation so they can vary independently. Uses composition instead of inheritance.

#### When to use

- When you want to avoid permanent binding between abstraction and implementation
- When both abstractions and implementations should be extensible

#### Python Example

```python
from abc import ABC, abstractmethod

# Implementation interface
class Renderer(ABC):
    @abstractmethod
    def render_circle(self, radius):
        pass

# Concrete Implementations
class VectorRenderer(Renderer):
    def render_circle(self, radius):
        print(f"Drawing a circle of radius {radius} using vector graphics")

class RasterRenderer(Renderer):
    def render_circle(self, radius):
        print(f"Drawing a circle of radius {radius} using pixels")

# Abstraction
class Shape:
    def __init__(self, renderer: Renderer):
        self.renderer = renderer

    def draw(self):
        pass

# Refined Abstraction
class Circle(Shape):
    def __init__(self, renderer: Renderer, radius):
        super().__init__(renderer)
        self.radius = radius

    def draw(self):
        self.renderer.render_circle(self.radius)

# Usage
vector_renderer = VectorRenderer()
raster_renderer = RasterRenderer()

circle = Circle(vector_renderer, 5)
circle.draw()  # Output: "Drawing a circle of radius 5 using vector graphics"

circle = Circle(raster_renderer, 10)
circle.draw()  # Output: "Drawing a circle of radius 10 using pixels"
```

#### Pros & Cons

✅ **Separates platform-independent code**
❌ **Increases complexity**

### Summary Table

| Pattern       | Purpose                  | Use Case               | Pros        | Cons                |
| ------------- | ------------------------ | ---------------------- | ----------- | ------------------- |
| **Adapter**   | Interface conversion     | Legacy integration     | Reusability | Complexity          |
| **Decorator** | Dynamic responsibilities | Runtime enhancements   | Flexible    | Many objects        |
| **Facade**    | Simplified interface     | Complex subsystems     | Easy to use | God object risk     |
| **Proxy**     | Controlled access        | Lazy loading           | Security    | Latency             |
| **Composite** | Tree structures          | Part-whole hierarchies | Uniformity  | Over-generalization |
| **Bridge**    | Decouple abstraction     | Cross-platform         | Extensible  | Complexity          |

## Behavioral Design Patterns

Behavioral patterns focus on **communication between objects**, defining how objects interact and distribute responsibility. They help make object interactions more flexible and maintainable.

### Observer Pattern

Defines a **one-to-many dependency** between objects so that when one object changes state, all its dependents are notified automatically.

#### When to use

- When changes to one object require changing others
- For event handling systems, notifications

#### Python Example

```python
from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, message):
        pass

class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer: Observer):
        self._observers.append(observer)

    def detach(self, observer: Observer):
        self._observers.remove(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class EmailAlert(Observer):
    def update(self, message):
        print(f"Email Alert: {message}")

class SMSAlert(Observer):
    def update(self, message):
        print(f"SMS Alert: {message}")

# Usage
newsletter = Subject()
email = EmailAlert()
sms = SMSAlert()

newsletter.attach(email)
newsletter.attach(sms)

newsletter.notify("New article published!")
# Output:
# Email Alert: New article published!
# SMS Alert: New article published!
```

#### Pros & Cons

✅ **Loose coupling between subject and observers**
❌ **Can cause memory leaks if observers aren't properly detached**

### Strategy Pattern

Defines a **family of algorithms**, encapsulates each one, and makes them interchangeable.

#### When to use

- When you need different variants of an algorithm
- To avoid conditional statements for selecting algorithms

#### Python Example

```python
from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid ${amount} via Credit Card")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid ${amount} via PayPal")

class ShoppingCart:
    def __init__(self, strategy: PaymentStrategy):
        self._strategy = strategy

    def checkout(self, amount):
        self._strategy.pay(amount)

# Usage
cart = ShoppingCart(CreditCardPayment())
cart.checkout(100)  # Output: "Paid $100 via Credit Card"

cart = ShoppingCart(PayPalPayment())
cart.checkout(50)   # Output: "Paid $50 via PayPal"
```

#### Pros & Cons

✅ **Easy to extend with new strategies**
❌ **Can be overkill for simple conditional logic**

### Command Pattern

Encapsulates a request as an object, allowing parameterization of clients with different requests.

#### When to use

- For undo/redo functionality
- Queueing requests
- Implementing callbacks

#### Python Example

```python
from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

class Light:
    def on(self):
        print("Light is ON")

    def off(self):
        print("Light is OFF")

class LightOnCommand(Command):
    def __init__(self, light: Light):
        self._light = light

    def execute(self):
        self._light.on()

class LightOffCommand(Command):
    def __init__(self, light: Light):
        self._light = light

    def execute(self):
        self._light.off()

class RemoteControl:
    def submit(self, command: Command):
        command.execute()

# Usage
light = Light()
on_command = LightOnCommand(light)
off_command = LightOffCommand(light)

remote = RemoteControl()
remote.submit(on_command)   # Output: "Light is ON"
remote.submit(off_command)  # Output: "Light is OFF"
```

#### Pros & Cons

✅ **Decouples invoker from receiver**
❌ **Can lead to many command classes**

### Iterator Pattern

Provides a way to **access elements of a collection** sequentially without exposing its underlying representation.

#### When to use

- For uniform traversal of different data structures
- When you want to hide collection implementation

#### Python Example

```python
class Book:
    def __init__(self, title):
        self.title = title

class BookShelf:
    def __init__(self):
        self._books = []

    def add_book(self, book: Book):
        self._books.append(book)

    def __iter__(self):
        return BookIterator(self._books)

class BookIterator:
    def __init__(self, books):
        self._books = books
        self._index = 0

    def __next__(self):
        if self._index < len(self._books):
            book = self._books[self._index]
            self._index += 1
            return book
        raise StopIteration

# Usage
shelf = BookShelf()
shelf.add_book(Book("Design Patterns"))
shelf.add_book(Book("Clean Code"))

for book in shelf:
    print(book.title)
# Output:
# Design Patterns
# Clean Code
```

#### Pros & Cons

✅ **Single Responsibility Principle**
❌ **Can be overkill for simple collections**

### State Pattern

Allows an object to **alter its behavior when its internal state changes**.

#### When to use

- When an object's behavior depends on its state
- To replace large conditional statements

#### Python Example

```python
from abc import ABC, abstractmethod

class State(ABC):
    @abstractmethod
    def handle(self):
        pass

class ConcreteStateA(State):
    def handle(self):
        print("Handling in State A")
        return ConcreteStateB()

class ConcreteStateB(State):
    def handle(self):
        print("Handling in State B")
        return ConcreteStateA()

class Context:
    def __init__(self, state: State):
        self._state = state

    def request(self):
        self._state = self._state.handle()

# Usage
context = Context(ConcreteStateA())
context.request()  # Output: "Handling in State A" → switches to State B
context.request()  # Output: "Handling in State B" → switches back to State A
```

#### Pros & Cons

✅ **Clean alternative to conditionals**
❌ **Can be complex for few states**

### Template Method Pattern

Defines the **skeleton of an algorithm** in a method, deferring some steps to subclasses.

#### When to use

- For invariant algorithm structures
- Framework development

#### Python Example

```python
from abc import ABC, abstractmethod

class DataProcessor(ABC):
    def process(self):  # Template method
        self.load_data()
        self.analyze()
        self.report()

    @abstractmethod
    def load_data(self):
        pass

    @abstractmethod
    def analyze(self):
        pass

    def report(self):  # Optional hook
        print("Generating report...")

class CSVProcessor(DataProcessor):
    def load_data(self):
        print("Loading CSV data...")

    def analyze(self):
        print("Analyzing CSV data...")

# Usage
processor = CSVProcessor()
processor.process()
# Output:
# Loading CSV data...
# Analyzing CSV data...
# Generating report...
```

#### Pros & Cons

✅ **Code reuse via inheritance**
❌ **Can be rigid due to inheritance**

### Chain of Responsibility

Passes a request along a **chain of handlers**, where each handler decides either to process the request or pass it to the next handler.

#### When to use

- When multiple objects can handle a request
- For event processing pipelines

#### Python Example

```python
from abc import ABC, abstractmethod

class Handler(ABC):
    def __init__(self, successor=None):
        self._successor = successor

    def handle(self, request):
        if self._can_handle(request):
            self._process(request)
        elif self._successor:
            self._successor.handle(request)

    @abstractmethod
    def _can_handle(self, request):
        pass

    @abstractmethod
    def _process(self, request):
        pass

class ConcreteHandlerA(Handler):
    def _can_handle(self, request):
        return request == "A"

    def _process(self, request):
        print(f"Handler A processing {request}")

class ConcreteHandlerB(Handler):
    def _can_handle(self, request):
        return request == "B"

    def _process(self, request):
        print(f"Handler B processing {request}")

# Usage
handler_chain = ConcreteHandlerA(ConcreteHandlerB())
handler_chain.handle("A")  # Output: "Handler A processing A"
handler_chain.handle("B")  # Output: "Handler B processing B"
```

#### Pros & Cons

✅ **Decouples senders and receivers**
❌ **Requests can go unhandled**

### Summary Table

| Pattern                     | Purpose                    | Use Case             | Pros                | Cons                      |
| --------------------------- | -------------------------- | -------------------- | ------------------- | ------------------------- |
| **Observer**                | One-to-many dependency     | Event systems        | Loose coupling      | Memory leaks              |
| **Strategy**                | Interchangeable algorithms | Payment methods      | Easy extension      | Over-engineering          |
| **Command**                 | Encapsulate requests       | Undo/redo operations | Decoupling          | Many classes              |
| **Iterator**                | Sequential access          | Collection traversal | SRP compliant       | Overkill for simple cases |
| **State**                   | Behavior change with state | Order processing     | Clean code          | Complexity                |
| **Template Method**         | Algorithm skeleton         | Frameworks           | Code reuse          | Rigid structure           |
| **Chain of Responsibility** | Handler pipeline           | Middleware           | Flexible processing | Unhandled requests        |
