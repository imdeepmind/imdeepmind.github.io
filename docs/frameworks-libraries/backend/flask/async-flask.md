---
sidebar_position: 12
---

# Async in Flask

Flask is a popular lightweight web framework for building web applications in Python. Traditionally, Flask operates in a synchronous manner, where each request is handled one at a time, blocking the server until the request is processed and a response is returned. However, with the growing need for handling concurrent requests more efficiently (especially for I/O-bound tasks like database queries, file uploads, or network calls), Flask has started supporting asynchronous programming. This allows for non-blocking I/O operations, leading to better performance under heavy load, especially when dealing with concurrent requests.

In this detailed note, we will explore how asynchronous programming works in Flask, how to use `async` and `await`, and the integration of Flask with asynchronous tools.

## Introduction to Async Programming in Flask

### Synchronous vs. Asynchronous

- **Synchronous (Blocking)**: Each request is handled sequentially, blocking the server's ability to handle other requests while waiting for I/O operations (such as database queries or API calls) to complete.
- **Asynchronous (Non-blocking)**: Requests can be handled concurrently, allowing the server to process other requests while waiting for I/O operations to finish. This improves the application's throughput and responsiveness.

Flask's default behavior is synchronous, meaning each HTTP request blocks the thread until it is fully processed and a response is returned. However, with the introduction of **`async`/`await`**, Python allows for asynchronous execution, which can be beneficial for Flask applications, especially for I/O-bound operations.

## Flask's Support for Async Programming

Flask 2.0 introduced asynchronous view functions, allowing Flask to handle asynchronous requests. This is based on Python's `asyncio` framework, which provides a single-threaded event loop for concurrent tasks.

### Key Features

- **Async View Functions**: Flask allows you to define view functions as asynchronous functions using the `async def` syntax.
- **Asynchronous Database and I/O Operations**: Flask can work with asynchronous libraries for tasks like database queries, file I/O, and external API calls, preventing blocking.
- **Async Support in Flask Extensions**: While not all Flask extensions are fully asynchronous, some (such as **Flask-SQLAlchemy** with SQLAlchemy 1.4+, **aiohttp**, and **Asyncio**) are compatible with asynchronous operations.

## Defining Asynchronous View Functions

In Flask 2.0 and beyond, you can define view functions as asynchronous using the `async def` syntax. These asynchronous functions allow Flask to yield control back to the event loop while waiting for I/O-bound tasks, enabling Flask to handle other requests.

### Basic Example of an Async View Function

```python
from flask import Flask

app = Flask(__name__)

@app.route('/async')
async def async_view():
    await some_async_function()  # Simulate an async operation like I/O or network call
    return 'This is an async response'

async def some_async_function():
    # Simulate an async task (like a database query or API request)
    await asyncio.sleep(2)  # Simulating a delay
    return "Task Complete"

if __name__ == "__main__":
    app.run(debug=True)
```

In this example:

- The `async def` keyword is used to define the view function `async_view`.
- The `await` keyword is used to call an asynchronous function (`some_async_function`), which mimics a time-consuming operation (like waiting for a response from a remote API).

When the request is made to `/async`, the server can handle other requests while waiting for `some_async_function()` to complete.

### Important Notes

- `await` can only be used inside `async` functions.
- Flask uses **`asyncio`**, which provides the event loop that handles asynchronous tasks, but Flask's own request/response cycle remains synchronous unless explicitly handled asynchronously.

## Running Asynchronous Tasks in Flask

You can use asynchronous libraries or frameworks to handle long-running or blocking tasks without blocking the server's main thread. Common examples include making asynchronous HTTP requests or querying an asynchronous database.

### Example: Using `aiohttp` for Asynchronous HTTP Requests

```python
import aiohttp
import asyncio
from flask import Flask

app = Flask(__name__)

@app.route('/async-request')
async def async_request():
    async with aiohttp.ClientSession() as session:
        async with session.get('https://jsonplaceholder.typicode.com/todos/1') as response:
            data = await response.json()
            return f'Fetched data: {data}'

if __name__ == "__main__":
    app.run(debug=True)
```

In this example:

- We use **`aiohttp`**, a library for making asynchronous HTTP requests, which is designed to work with `async` and `await`.
- When a user visits `/async-request`, the Flask server doesn't block the main thread while waiting for the HTTP request to complete; other requests can still be processed.

## Working with Asynchronous Databases

Flask's synchronous database libraries, such as **Flask-SQLAlchemy**, don't natively support asynchronous execution. However, you can integrate Flask with asynchronous databases by using libraries like **Databases** or **Tortoise ORM** (for async database models).

### Example: Using Async with `Databases` Library

```bash
pip install databases asyncpg
```

```python
import databases
from flask import Flask

DATABASE_URL = "postgresql://user:password@localhost/mydatabase"
database = databases.Database(DATABASE_URL)

app = Flask(__name__)

@app.route('/async-db')
async def async_db():
    query = "SELECT * FROM my_table"
    result = await database.fetch_all(query)
    return {'data': result}

if __name__ == "__main__":
    app.run(debug=True)
```

In this example:

- We use the **`databases`** library, which is an async database query library compatible with **SQLAlchemy** or **PostgreSQL**.
- The query execution is asynchronous, allowing Flask to process other requests while waiting for the database query to complete.

## Running Flask Asynchronously with `asyncio`

Flask itself is not fully asynchronous by default, but you can run the app in an asynchronous event loop using **`asyncio`** and asynchronous web servers, such as **`uvicorn`**.

```bash
pip install uvicorn
```

### Running Flask Asynchronously with Uvicorn

```bash
import asyncio
from flask import Flask

app = Flask(__name__)

@app.route('/async')
async def async_view():
    await asyncio.sleep(2)  # Simulating async task
    return "Async Response"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
```

In this example:

- Flask is run with **Uvicorn**, an ASGI (Asynchronous Server Gateway Interface) server that supports asynchronous I/O, allowing Flask to handle asynchronous requests.
- `asyncio.sleep(2)` simulates a delay (such as waiting for an external resource or a slow I/O operation).

## Limitations and Considerations

### Flask's Threaded Model

Flask has a **threaded model** that allows handling multiple requests concurrently by using threads. This works well for synchronous applications. However, asynchronous programming in Flask requires an event loop (e.g., `asyncio`), which may require additional setup and integration with an ASGI server (like `uvicorn` or `hypercorn`).

### Asynchronous Database Support

Many common Flask database extensions (such as **Flask-SQLAlchemy**) are synchronous and don't natively support asynchronous operations. However, you can use asynchronous libraries like **Tortoise ORM** or **Databases** for async database operations.

### Flask Extensions Compatibility

Not all Flask extensions support asynchronous programming. Extensions that rely on blocking I/O may not perform well in an async environment. It's important to verify whether the Flask extensions you're using are compatible with async programming.

### Complexity

While async programming can improve performance for I/O-bound tasks, it introduces complexity to the codebase. If the application relies heavily on blocking I/O (such as CPU-bound tasks), the overhead of async programming might not provide significant performance improvements.
