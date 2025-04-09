---
sidebar_position: 3
---

# Serialization and Validation

FastAPI is a modern, fast (hence the name) web framework for building APIs in Python. One of its core features is **Pydantic**, which is used for data validation and serialization. FastAPI leverages Pydantic to ensure that data passed to your application is valid and structured correctly. Let’s dive deeper into the key concepts: **Pydantic Models**, **Data Validation**, **Response Models**, **Nested Models**, and **Custom Validators**.

## Pydantic Models

**Pydantic** is a data validation and parsing library that FastAPI uses to define and validate the structure of the data, both for incoming requests (body, query parameters, etc.) and outgoing responses.

A **Pydantic model** is a class that inherits from `pydantic.BaseModel`. These models define the shape of the data and automatically perform validation based on the types and constraints you specify.

### Example: Basic Pydantic Model

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None
```

- **Attributes**: The attributes `name`, `description`, `price`, and `tax` define the structure of an item.
- **Type Validation**: FastAPI uses Python's type annotations to validate the data. For example, `name: str` ensures the `name` is a string, and `price: float` ensures the `price` is a floating-point number.
- **Optional Fields**: `description` and `tax` are optional, as they have default values of `None`.

## Data Validation

One of the primary benefits of using Pydantic models in FastAPI is automatic **data validation**. When a request body is passed to a FastAPI endpoint, FastAPI will validate it against the Pydantic model. If the data doesn't match the expected structure, FastAPI will return an error with a detailed message.

### Example: Automatic Data Validation

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    description: str = None
    tax: float = None

@app.post("/items/")
def create_item(item: Item):
    return {"item_name": item.name, "item_price": item.price}
```

- When a client sends a request to `POST /items/` with invalid data (e.g., missing required fields), FastAPI will return a **422 Unprocessable Entity** error with details about which fields are missing or invalid.

### Example Request (Invalid JSON)

```json
{
  "name": "Laptop"
}
```

### Response (Error Message)

```json
{
  "detail": [
    {
      "loc": ["body", "price"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

In this case, the `price` field is required but missing, so FastAPI returns a 422 status with an error message indicating the missing field.

## Response Models

FastAPI allows you to use Pydantic models to return structured data from your endpoints. This ensures that the response data is properly validated and formatted.

By default, FastAPI automatically serializes the response to JSON based on the Pydantic model.

### Example: Using Response Models

```python
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    description: str = None
    tax: float = None

@app.post("/items/", response_model=Item)
def create_item(item: Item):
    return item  # Returning the created item as a response
```

- **Response Model**: By specifying `response_model=Item` in the `@app.post()` decorator, FastAPI will ensure that the response data conforms to the `Item` Pydantic model. This automatically validates and serializes the response before sending it back to the client.
- The response will be a JSON object with the same structure as the `Item` model.

### Example Response:

```json
{
  "name": "Laptop",
  "price": 999.99,
  "description": "High-end laptop",
  "tax": 50.99
}
```

If you return extra or invalid fields in the response, FastAPI will automatically handle them according to the model.

## Nested Models

Pydantic models can be nested inside other models to represent complex data structures. This is especially useful for representing hierarchical or related data.

### Example: Nested Models

```python
from pydantic import BaseModel

class Category(BaseModel):
    name: str
    description: str

class Item(BaseModel):
    name: str
    price: float
    category: Category

@app.post("/items/", response_model=Item)
def create_item(item: Item):
    return item
```

- **Nested Model**: In this example, the `Item` model contains a nested `Category` model, which itself has `name` and `description` attributes.
- **Automatic Validation**: FastAPI will recursively validate the nested model. In this case, it will validate both `Item` and the `Category` nested inside it.

### Example Request (JSON)

```json
{
  "name": "Laptop",
  "price": 999.99,
  "category": {
    "name": "Electronics",
    "description": "Devices and gadgets"
  }
}
```

### Example Response (JSON)

```json
{
  "name": "Laptop",
  "price": 999.99,
  "category": {
    "name": "Electronics",
    "description": "Devices and gadgets"
  }
}
```

## Custom Validators

While Pydantic provides built-in validation for common data types, you can also create **custom validators** for more complex validation logic. This allows you to ensure that the incoming data meets your application's specific requirements.

### Example: Using Custom Validators

You can define custom validation logic using the `@validator` decorator in Pydantic models. Validators allow you to add custom constraints or modify the data before it’s used.

```python
from pydantic import BaseModel, validator

class Item(BaseModel):
    name: str
    price: float
    description: str = None

    # Custom validator for price
    @validator("price")
    def validate_price(cls, value):
        if value <= 0:
            raise ValueError("Price must be greater than 0")
        return value

@app.post("/items/")
def create_item(item: Item):
    return item
```

- **Custom Validator**: The `@validator("price")` decorator allows you to define a custom validation function for the `price` field. In this case, it checks that the price is greater than 0. If the validation fails, a `ValueError` is raised, and FastAPI will return a 422 error.

### Example Request (Invalid JSON)

```json
{
  "name": "Laptop",
  "price": -999.99
}
```

### Response (Error Message)

```json
{
  "detail": [
    {
      "loc": ["body", "price"],
      "msg": "Price must be greater than 0",
      "type": "value_error"
    }
  ]
}
```

### Additional Validator Example: String Length Validation

You can also validate string lengths with custom validators.

```python
class Item(BaseModel):
    name: str
    description: str

    @validator("name")
    def name_length(cls, value):
        if len(value) < 3:
            raise ValueError("Name must be at least 3 characters long")
        return value
```

- This custom validator ensures that the `name` field is at least 3 characters long. If the condition fails, it raises an error.
