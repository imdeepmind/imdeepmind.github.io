---
sidebar_position: 2
---

# Routes

FastAPI is an extremely powerful framework for building APIs in Python. In this note, we will dive deeper into the core concepts of FastAPI, covering **Basic Route Handling**, **Path Parameters**, **Query Parameters**, and **Request Body**, as well as how to return appropriate HTTP status codes.

## Basic Route Handling in FastAPI

In FastAPI, route handling refers to defining functions that are triggered when a client sends an HTTP request to a specific URL. These routes are decorated with HTTP method decorators, such as `@app.get()`, `@app.post()`, `@app.put()`, etc., which indicate which HTTP methods the route will handle.

### Example 1: Basic Route Handling

```python
from fastapi import FastAPI

app = FastAPI()

# A simple GET route
@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

# A POST route to create a resource
@app.post("/create")
def create_item(item: dict):
    return {"message": "Item created successfully", "item": item}
```

- **GET Route** (`@app.get("/")`): This route will respond to `GET` requests to the root URL (`/`). When accessed, it returns a simple JSON response.
- **POST Route** (`@app.post("/create")`): This route listens for `POST` requests at `/create` and accepts a JSON payload, which is returned as part of the response.

### Example 2: Returning Different Status Codes

In FastAPI, you can return different status codes like `201 Created`, `204 No Content`, etc., to indicate the outcome of the operation. To customize the status code, you can use the `status_code` parameter.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi import status

app = FastAPI()

# Pydantic model to validate the request body
class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

# A POST route that creates an item and returns a 201 status code
@app.post("/items/", status_code=status.HTTP_201_CREATED)
def create_item(item: Item):
    return {"message": "Item created", "item": item}

# A DELETE route that returns 204 status code (No Content) after deleting an item
@app.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_item(item_id: int):
    return None  # No content is returned, just status code 204
```

- **201 Created**: The `create_item` route returns a `201 Created` status code when a new item is successfully created. This is indicated using `status_code=status.HTTP_201_CREATED`.
- **204 No Content**: The `delete_item` route deletes an item and returns a `204 No Content` status code. This means the request was successful, but there's no content to return.

## Path Parameters

Path parameters are dynamic segments in the URL that allow you to capture data from the URL itself. Path parameters are used for identifying specific resources, like user IDs or item IDs. In FastAPI, these parameters are defined by placing them inside curly braces `{}` in the route path.

### Example 1: Using Path Parameters

```python
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
```

- **Path Parameter** (`{item_id}`): In this example, the route `GET /items/{item_id}` expects an integer parameter `item_id` in the URL, which is passed to the `read_item()` function.

### Example 2: Using Multiple Path Parameters

```python
@app.get("/users/{user_id}/items/{item_id}")
def get_user_item(user_id: str, item_id: int):
    return {"user_id": user_id, "item_id": item_id}
```

- **Multiple Path Parameters**: This route captures two parameters from the URL: `user_id` (a string) and `item_id` (an integer).

### Example Request:

- `GET /items/10` would return `{"item_id": 10}`.
- `GET /users/john/items/20` would return `{"user_id": "john", "item_id": 20}`.

FastAPI will validate the types of path parameters automatically. If the type doesn't match, FastAPI will return a `422 Unprocessable Entity` error.

## Query Parameters

Query parameters are optional parameters appended to the URL after a question mark (`?`). They are commonly used for filtering, sorting, or modifying the request. In FastAPI, query parameters are passed as function arguments.

### Example 1: Using Query Parameters

```python
@app.get("/search")
def search_items(q: str = None, limit: int = 10):
    return {"query": q, "limit": limit}
```

- **`q`**: This query parameter is used for searching. It's optional and defaults to `None`.
- **`limit`**: This query parameter limits the number of results returned. It has a default value of `10`.

### Example Request:

- `GET /search?q=laptop&limit=5` would return `{"query": "laptop", "limit": 5}`.
- `GET /search` (no parameters) would return `{"query": null, "limit": 10}`.

### Example 2: Validating Query Parameters

You can validate query parameters by defining them with type annotations.

```python
@app.get("/items")
def get_items(limit: int = 10, skip: int = 0):
    return {"limit": limit, "skip": skip}
```

- **Type Validation**: FastAPI automatically validates the types of query parameters. In this case, `limit` must be an integer, and `skip` must be an integer.

### Example Request:

- `GET /items?limit=20&skip=5` would return `{"limit": 20, "skip": 5}`.

If you pass invalid types, FastAPI will return a `422 Unprocessable Entity` error with details about the validation issue.

## Request Body

Request bodies are used to send data to the server, typically in POST, PUT, or PATCH requests. FastAPI uses Pydantic models to define and validate the structure of the request body. The request body is parsed into Python objects automatically by FastAPI.

### Example 1: Creating a Pydantic Model for Request Body

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.post("/items/")
def create_item(item: Item):
    return {"message": "Item created", "item": item}
```

- **Pydantic Model** (`Item`): The `Item` class defines the structure of the request body. The attributes `name`, `description`, `price`, and `tax` are defined, where `name` and `price` are required.
- **Request Body**: The `create_item` function accepts an instance of `Item` as the request body. FastAPI automatically parses the incoming JSON data into this model.

### Example Request:

```json
{
  "name": "Laptop",
  "price": 999.99,
  "tax": 19.99
}
```

### Example 2: Returning a Different Status Code for Created Resource

You can use FastAPI’s `status_code` parameter to customize the HTTP response status code.

```python
from fastapi import status

@app.post("/items/", status_code=status.HTTP_201_CREATED)
def create_item(item: Item):
    return {"message": "Item created successfully", "item": item}
```

- **201 Created**: This will return a `201 Created` status code, indicating that a new resource was successfully created.

### Example 3: Using Request Body with Optional Fields

```python
class User(BaseModel):
    username: str
    email: str
    age: int = None  # Optional field

@app.post("/users/")
def create_user(user: User):
    return {"message": "User created", "user": user}
```

- **Optional Fields**: In this case, the `age` field is optional. If it is not provided in the request body, it will default to `None`.

### Example Request:

```json
{
  "username": "john_doe",
  "email": "john@example.com"
}
```

This request would return:

```json
{
  "message": "User created",
  "user": {
    "username": "john_doe",
    "email": "john@example.com",
    "age": null
  }
}
```

### Example 4: Returning 400 Error for Invalid Input

FastAPI will automatically validate the request body. If the input data does not match the expected schema, FastAPI will return a `422 Unprocessable Entity` error.

For example, if the request body is missing the required `name` field:

```json
{
  "price": 999.99
}
```

This will return:

```json
{
  "detail": [
    {
      "loc": ["body", "name"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```
