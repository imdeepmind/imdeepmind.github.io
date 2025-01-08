---
sidebar_position: 3
---

# Flask App and `app.run`

In Flask, the **application object** (`Flask`) is the central object that represents the web application. It acts as the foundation for configuring, routing, and running the application. When you create a Flask app, you're essentially creating an instance of the `Flask` class, which serves as the main entry point for your application.

## Creating a Flask App

To create a Flask application, you instantiate the `Flask` class. Here's the basic structure:

```python
from flask import Flask

# Create a Flask app instance
app = Flask(__name__)
```

## Key Responsibilities of the Flask App Object

1. **Routing**:

   - The app object manages URL routing, mapping URLs to specific functions (called view functions).
   - Example:

     ```python
     @app.route('/')
     def home():
         return "Welcome to my Flask app!"
     ```

2. **Configuration**:

   - The app object stores the application's configuration settings (e.g., debugging mode, secret keys).
   - Example:

     ```python
     app.config['DEBUG'] = True
     ```

3. **Middleware and Extensions**:

   - Middleware (like WSGI middleware) and extensions (e.g., Flask-SQLAlchemy, Flask-Login) integrate with the app object.

4. **Error Handling**:

   - Flask allows you to define custom error handlers (e.g., for 404 errors) using the app object.

5. **Request Handling**:
   - The app object processes incoming HTTP requests and delegates them to the appropriate view functions.

## Anatomy of the `Flask` Class

The `Flask` class has several attributes and methods that make it the core of a Flask application. Here are some key attributes:

1. **`app.config`**:

   - A dictionary-like object for storing configuration values (e.g., `DEBUG`, `SECRET_KEY`).
   - Example:

     ```python
     app.config['DEBUG'] = True
     ```

2. **`app.url_map`**:

   - Stores the URL-to-function mapping.
   - Example:

     ```python
     print(app.url_map)
     ```

3. **`app.before_request`, `app.after_request`, `app.teardown_request`**:
   - Hooks that allow you to define functions to be executed before or after a request is processed.

## The `app.run()` Method

The `app.run()` method is used to run the Flask application. It launches the **development server**, which is used for testing and debugging during development. When you're ready to deploy your app to production, you typically use a production-ready WSGI server like Gunicorn, uWSGI, or Waitress instead of `app.run()`.

---

### Syntax of `app.run`

```python
app.run(
    host=None,
    port=None,
    debug=None,
    load_dotenv=True,
    **options
)
```

### Parameters of `app.run`

1. **`host`**:

   - Specifies the hostname or IP address on which the server should run.
   - Default: `'127.0.0.1'` (localhost).
   - To make the app accessible on the network, set it to `'0.0.0.0'`.

   Example:

   ```python
   app.run(host='0.0.0.0')
   ```

2. **`port`**:

   - Specifies the port number on which the server should listen.
   - Default: `5000`.

   Example:

   ```python
   app.run(port=8080)
   ```

3. **`debug`**:

   - Enables or disables the debug mode.
   - Default: `None`.
   - When set to `True`, it:
     - Enables the **debugger**, which shows a detailed error page when an exception occurs.
     - Enables the **reloader**, which restarts the server whenever code changes are detected.

   Example:

   ```python
   app.run(debug=True)
   ```

4. **`load_dotenv`**:

   - Default: `True`.
   - Automatically loads environment variables from a `.env` file in the project directory.

5. **`**options`\*\*:
   - Passes additional options to the underlying WSGI server.

### Example of `app.run`

Here's a complete example:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    # Run the app on a specific host and port in debug mode
    app.run(host='0.0.0.0', port=5000, debug=True)
```

### How `app.run` Works

1. **Development Server**:

   - The `app.run` method starts Flask's built-in development server (based on Werkzeug).
   - This server is lightweight and meant for development, not for production.

2. **Request Handling**:

   - The server listens for HTTP requests on the specified host and port.
   - When a request is received, the server passes it to the Flask app object for routing and processing.

3. **Debugging Features**:
   - The debug mode allows developers to catch and diagnose errors during development.
   - The interactive debugger provides a stack trace and lets you inspect variables.

### Key Features of the Development Server

1. **Hot Reloading**:

   - The development server reloads automatically whenever code changes are detected. This saves time during development.

2. **Debug Toolbar**:
   - When debug mode is enabled, Flask provides an interactive debugger in the browser, allowing you to inspect exceptions and errors.

### When Not to Use `app.run`

The `app.run()` method is not suitable for production environments because:

1. It uses a single-threaded server, which cannot handle high traffic or concurrent requests efficiently.
2. It lacks advanced features like load balancing, security optimizations, and scalability.

Instead, in production, use a WSGI server like:

- **Gunicorn**:

  ```bash
  gunicorn app:app
  ```

- **uWSGI**:

  ```bash
  uwsgi --http :5000 --wsgi-file app.py --callable app
  ```

## Common Scenarios and Examples

### Running the App on a Custom Host and Port

```python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
```

- This makes the app accessible on all IP addresses (`0.0.0.0`) and listens on port 8000.

### Running in Debug Mode

```python
if __name__ == '__main__':
    app.run(debug=True)
```

- This enables the debug features, including the interactive debugger and automatic code reloading.

### Running Without Hardcoding Configuration

```python
if __name__ == '__main__':
    import os
    app.run(
        host=os.getenv('FLASK_RUN_HOST', '127.0.0.1'),
        port=int(os.getenv('FLASK_RUN_PORT', 5000)),
        debug=bool(os.getenv('FLASK_DEBUG', True))
    )
```

- Here, environment variables are used to configure the host, port, and debug mode.

### Using Environment Variables with `.env`

Flask can automatically load settings from a `.env` file if `load_dotenv=True` (default).

Example `.env` file:

```bash
FLASK_RUN_HOST=0.0.0.0
FLASK_RUN_PORT=8000
FLASK_DEBUG=True
```

When running the app:

```bash
python app.py
```

Flask reads the `.env` file and applies the settings automatically.
