---
sidebar_position: 9
---

# Testing & Debugging

Testing and debugging are **critical** for building **reliable** and **maintainable** FastAPI applications. This guide covers **unit/integration testing, mocking, debugging, and automated API testing**.

## Testing FastAPI Apps with `pytest`

`pytest` is the **standard** testing framework for Python. FastAPI works seamlessly with it.

### Installation

```bash
pip install pytest pytest-cov httpx
```

### Basic Test Structure

```python
# tests/test_main.py
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}
```

**Key Features**:

- **`TestClient`** – Simulates HTTP requests.
- **Assertions** – Check status codes, response data, headers.
- **Fixtures** – Reusable test setups (e.g., DB sessions).

## Using `TestClient` (from `fastapi.testclient`)

`TestClient` allows **mocking HTTP requests** without running a live server.

### Example: Testing CRUD Endpoints

```python
def test_create_item():
    response = client.post(
        "/items/",
        json={"name": "Foo", "price": 10.5},
    )
    assert response.status_code == 201
    assert response.json() == {"name": "Foo", "price": 10.5}

def test_read_item():
    response = client.get("/items/1")
    assert response.status_code == 200
    assert response.json() == {"id": 1, "name": "Foo"}
```

**Supported Methods**:

- `client.get()`
- `client.post()`
- `client.put()`
- `client.delete()`
- `client.options()`

## Mocking Dependencies for Testing

**Problem**: Some dependencies (DB, external APIs) should **not** run in tests.

### (A) Overriding Dependencies

```python
from fastapi import FastAPI, Depends
from main import app, get_db

# Override the real DB dependency
def mock_get_db():
    return "Fake DB Session"

app.dependency_overrides[get_db] = mock_get_db

def test_with_mock_db():
    response = client.get("/items/1")
    assert response.json() == {"id": 1, "name": "Mocked Item"}
```

### (B) Using `unittest.mock`

```python
from unittest.mock import patch

def test_external_api_call():
    with patch("module.external_api") as mock_api:
        mock_api.return_value = {"data": "mocked"}
        response = client.get("/external-data")
        assert response.json() == {"data": "mocked"}
```

**Best Practices**:

- Mock **external services** (Stripe, SMTP).
- Keep **business logic** unmocked.

## Debugging with `pdb`, `breakpoint()`, and Logging

### (A) Debugging with `pdb`

Insert a breakpoint in code:

```python
import pdb; pdb.set_trace()  # Python 3.7+
```

**OR**

```python
breakpoint()  # Python 3.7+
```

**Commands**:

- `n` (next line)
- `c` (continue)
- `q` (quit)

### (B) Logging for Debugging

```python
import logging

logging.basicConfig(level=logging.DEBUG)

@app.get("/debug")
def debug_endpoint():
    logging.debug("Debug message")
    return {"status": "ok"}
```

**Log Levels**:

- `DEBUG` (detailed info)
- `INFO` (general logs)
- `ERROR` (critical issues)

## Automated API Testing (Postman, Swagger)

### (A) Postman/Newman

- **Manual Testing**: Use Postman GUI.
- **Automated Testing**:
  ```bash
  newman run collection.json --environment env.json
  ```
  **Workflow**:

1. Create a **Postman Collection**.
2. Export as `JSON`.
3. Run with `newman` in CI/CD.

### (B) Swagger/OpenAPI Automated Tests

FastAPI **auto-generates** OpenAPI docs (`/docs`). Tools like **Schemathesis** can test all endpoints:

```bash
pip install schemathesis
schemathesis run http://localhost:8000/openapi.json
```

**Key Features**:

- **Fuzz testing** (malformed inputs).
- **Validate responses** against OpenAPI schema.

## Summary Table

| Task                  | Tool/Method                             | Key Benefit        |
| --------------------- | --------------------------------------- | ------------------ |
| **HTTP Testing**      | `TestClient`                            | Simulate API calls |
| **Mocking**           | `dependency_overrides`, `unittest.mock` | Isolate tests      |
| **Debugging**         | `pdb`, `breakpoint()`, `logging`        | Fix issues faster  |
| **Automated Testing** | Postman, Newman, Schemathesis           | CI/CD integration  |

## Best Practices

1. **Test all status codes** (200, 404, 422, etc.).
2. **Mock expensive calls** (DB, APIs).
3. **Use `pytest fixtures`** for reusable setups.
4. **Run tests in CI/CD** (GitHub Actions, GitLab CI).
5. **Monitor test coverage** (`pytest --cov`).
