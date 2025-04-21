---
sidebar_position: 4
---

# Architectural Patterns

## MVC (Model-View-Controller)

MVC separates an application into three interconnected components:

- **Model:** Manages data and business logic.
- **View:** Represents UI and presentation layer.
- **Controller:** Handles user input and updates the Model and View.

### Benefits

- Separation of concerns
- Easier to test and maintain
- Promotes modularity

### Example

```python
# Model
class User:
    def __init__(self, username):
        self.username = username

# View
class UserView:
    def show_user(self, user):
        print(f"User: {user.username}")

# Controller
class UserController:
    def __init__(self, user, view):
        self.user = user
        self.view = view

    def update_username(self, new_name):
        self.user.username = new_name

    def display_user(self):
        self.view.show_user(self.user)

# Usage
user = User("abhishek")
view = UserView()
controller = UserController(user, view)

controller.display_user()
controller.update_username("abhi_updated")
controller.display_user()
```

## Layered Architecture (N-tier)

Divides the application into layers:

- **Presentation Layer:** UI
- **Business Logic Layer:** Core functionalities
- **Data Access Layer:** Interacts with DB

### Benefits

- Clear separation of responsibilities
- Testability and maintainability

### Example

```python
# Data Layer
class UserRepository:
    def get_user(self, user_id):
        return {"id": user_id, "name": "Abhishek"}

# Business Layer
class UserService:
    def __init__(self, repository):
        self.repository = repository

    def get_user_name(self, user_id):
        user = self.repository.get_user(user_id)
        return user["name"]

# Presentation Layer
def display_user(user_service, user_id):
    name = user_service.get_user_name(user_id)
    print(f"User Name: {name}")

repo = UserRepository()
service = UserService(repo)
display_user(service, 1)
```

## Repository Pattern

Abstracts the data layer, encapsulating the logic to access data from a data source.

### Benefits

- Centralized data access logic
- Decouples business logic from database logic

### Example

```python
class User:
    def __init__(self, user_id, name):
        self.id = user_id
        self.name = name

# Repository
class UserRepository:
    def __init__(self):
        self.users = {}  # Simulated database

    def add_user(self, user):
        self.users[user.id] = user

    def get_user_by_id(self, user_id):
        return self.users.get(user_id)

repo = UserRepository()
repo.add_user(User(1, "Abhishek"))

user = repo.get_user_by_id(1)
print(user.name)  # Output: Abhishek
```

## Dependency Injection (DI) / Inversion of Control (IoC)

- **DI:** Objects receive their dependencies from an external source rather than creating them internally.
- **IoC:** The control flow of a program is inverted — the framework calls your code instead of your code calling the framework.

### Benefits

- Improved testability
- Decoupled code

### Example

```python
# Service
class EmailService:
    def send_email(self, user, message):
        print(f"Sending email to {user}: {message}")

# Controller with DI
class UserController:
    def __init__(self, email_service):
        self.email_service = email_service

    def notify_user(self, user):
        self.email_service.send_email(user, "Hello!")

# Injecting the dependency
email_service = EmailService()
controller = UserController(email_service)
controller.notify_user("abhishek@example.com")
```

## Microservices vs Monolith

### Monolith

- A single codebase handling all business logic.
- Simpler to deploy initially, tightly coupled.

### Microservices

- Application is broken into smaller, independent services.
- Each service runs in its own process and communicates via HTTP or messaging queues.

### Example (Conceptual)

```python
# Monolith
class App:
    def register_user(self):
        pass

    def process_payment(self):
        pass

# Microservices
# user_service.py
def register_user():
    pass

# payment_service.py
def process_payment():
    pass

# These services would run independently and communicate over HTTP or message queues
```

## Event-Driven Architecture

Components communicate by emitting and listening to events asynchronously.

### Benefits

- Loose coupling
- High scalability

### Example using a simple event bus

```python
# Simple Event Bus
class EventBus:
    def __init__(self):
        self.listeners = {}

    def subscribe(self, event_type, callback):
        self.listeners.setdefault(event_type, []).append(callback)

    def publish(self, event_type, data):
        for callback in self.listeners.get(event_type, []):
            callback(data)

# Usage
bus = EventBus()

def handle_user_registered(data):
    print(f"Sending welcome email to {data['email']}")

bus.subscribe("user_registered", handle_user_registered)

# Emit the event
bus.publish("user_registered", {"email": "abhi@example.com"})
```

## CQRS (Command Query Responsibility Segregation)

- Segregates read and write operations into separate models.
- **Command:** Updates data (write)
- **Query:** Reads data

### Benefits

- Optimized for reads and writes independently
- Good for complex domains

### Example

```python
# Command - Write model
class UserCommandHandler:
    def __init__(self):
        self.store = {}

    def create_user(self, user_id, name):
        self.store[user_id] = name
        print(f"User created: {name}")

# Query - Read model
class UserQueryHandler:
    def __init__(self, store):
        self.store = store

    def get_user(self, user_id):
        return self.store.get(user_id)

# Usage
command_handler = UserCommandHandler()
command_handler.create_user(1, "Abhishek")

query_handler = UserQueryHandler(command_handler.store)
print(query_handler.get_user(1))  # Output: Abhishek
```
