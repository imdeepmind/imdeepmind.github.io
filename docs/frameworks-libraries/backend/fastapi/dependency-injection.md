---
sidebar_position: 4
---

# Dependency Injection

Dependency Injection (DI) is a **design pattern** used to decouple components by **injecting dependencies** (like functions, classes, or objects) rather than hardcoding them. FastAPI has **first-class support** for DI, making it easy to manage dependencies cleanly and efficiently.

## What is Dependency Injection (DI) & Why It's Useful

- DI is a technique where an object receives its dependencies from an external source rather than creating them itself.
- In FastAPI, dependencies are declared using `Depends()` and can be **functions, classes, or even other dependencies**.

### Why Use DI?

- **Decoupling**: Components remain independent, making the code modular.
- **Reusability**: The same dependency can be used across multiple routes.
- **Testability**: Easily mock dependencies for unit testing.
- **Cleaner Code**: Avoids repetitive initialization logic (e.g., DB sessions, auth checks).
- **Dependency Scopes**: Control how long a dependency lives (per-request, singleton, etc.).

## Basic DI (`Depends(get_db)`)

FastAPI’s `Depends()` is used to declare dependencies. A simple example:

### Example: Database Session Dependency

```python
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

app = FastAPI()

# Dependency function
def get_db():
    db = SessionLocal()  # Assume SessionLocal is defined
    try:
        yield db
    finally:
        db.close()

# Using the dependency in a route
@app.get("/items/")
def read_items(db: Session = Depends(get_db)):
    items = db.query(Item).all()
    return items
```

- `get_db()` **yields** a database session.
- `Depends(get_db)` injects the session into the route.
- The session is automatically closed after the request.

## Function-Based vs Class-Based Dependencies

Dependencies can be **functions** or **classes**, each with different use cases.

### Function-Based Dependencies

- Simple, lightweight.
- Best for stateless operations (e.g., fetching a DB session).

```python
def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    return user

@app.get("/me")
def read_me(user: str = Depends(get_current_user)):
    return {"user": user}
```

### Class-Based Dependencies

- Useful when dependencies need **state or configuration**.
- Can be initialized with parameters.

```python
class Pagination:
    def __init__(self, max_limit: int = 100):
        self.max_limit = max_limit

    def __call__(self, skip: int = 0, limit: int = 10):
        return {"skip": skip, "limit": min(limit, self.max_limit)}

pagination = Pagination(max_limit=50)  # Configured dependency

@app.get("/items/")
def read_items(pagination_params: dict = Depends(pagination)):
    return pagination_params
```

## Dependency Scopes (Singleton, Request, etc.)

Dependencies can have different **lifetimes** (scopes):

| Scope         | Behavior                               | Use Case                            |
| ------------- | -------------------------------------- | ----------------------------------- |
| **Singleton** | Created once, reused forever.          | Database connection pools, configs. |
| **Request**   | Created per request, cleaned up after. | DB sessions, auth checks.           |
| **Transient** | Created every time it's needed.        | Rare, used for stateless utilities. |

### Example: Singleton vs Request-Scoped

```python
from fastapi import Depends, FastAPI

app = FastAPI()

# Singleton (initialized once)
def get_config():
    return {"env": "prod"}

# Request-scoped (new per request)
def get_db_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/data")
def get_data(
    config: dict = Depends(get_config),  # Singleton
    db: Session = Depends(get_db_session)  # Request-scoped
):
    return {"config": config, "db": db}
```

## Overriding Dependencies for Testing

FastAPI allows **overriding dependencies** in tests, making it easy to mock external services.

### Example: Mocking Authentication in Tests

```python
from fastapi.testclient import TestClient
from main import app, get_current_user

client = TestClient(app)

# Original dependency (requires real auth)
def get_current_user(token: str = Depends(oauth2_scheme)):
    return authenticate(token)

# Test override (bypasses auth)
def mock_get_current_user():
    return {"user": "test_user"}

# Apply override
app.dependency_overrides[get_current_user] = mock_get_current_user

# Test runs with mock
def test_read_me():
    response = client.get("/me")
    assert response.json() == {"user": "test_user"}

# Revert after test
app.dependency_overrides.clear()
```

## Using Dependencies for Authentication, DB Sessions, etc.

Dependencies are commonly used for:

- **Authentication** (JWT, OAuth2)
- **Database sessions** (SQLAlchemy, async DBs)
- **Rate limiting**
- **Request validation**
- **Logging & monitoring**

### Example: Role-Based Access Control (RBAC)

```python
from fastapi import Depends, HTTPException, status

def get_current_user(token: str = Depends(oauth2_scheme)):
    return decode_token(token)

def require_admin(user: dict = Depends(get_current_user)):
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admins only")
    return user

@app.get("/admin")
def admin_dashboard(user: dict = Depends(require_admin)):
    return {"message": "Welcome, admin!"}
```

### Example: Database Session Management

```python
from sqlalchemy.orm import Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/items/")
def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    return db_item
```
