---
sidebar_position: 4
---

# Routes

In Flask, **routes** are the URLs or endpoints that define how a web application responds to client requests. A route maps a specific URL to a Python function (known as a **view function**), which processes the request and generates a response. Routes are a fundamental part of Flask's design, enabling developers to define the behavior of their web application.

## What are Routes?

A **route** in Flask is essentially a mapping between a URL and a function. The function is executed whenever a request is made to the associated URL. This URL-to-function mapping is maintained by Flask's application object.

For example:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the homepage!"
```

In the example above, the route `'/'` maps to the `home` function. When a client accesses the root URL (`/`), the `home` function is executed, and its return value is sent as the HTTP response.

## The `@app.route` Decorator

The `@app.route` decorator is used to define a route in Flask. It binds a URL to a Python function. This decorator is a part of the Flask `app` object.

### Syntax

```python
@app.route(route, methods=['GET'], **options)
```

- **`route`**: The URL path (e.g., `/home`, `/about`, `/user/<id>`).
- **`methods`**: Specifies the HTTP methods allowed for this route (default: `['GET']`).
- **`options`**: Additional options for the route, like `strict_slashes`.

## Key Features of Flask Routes

### Basic Routes

A basic route responds to a specific URL. For example:

```python
@app.route('/')
def home():
    return "Hello, Flask!"
```

- When a client accesses the root URL `/`, the `home` function is executed.

### Dynamic Routing

Dynamic routes allow the inclusion of variables in the URL. These variables can be passed to the view function as arguments.

- **Syntax for Dynamic Routing**:

  ```python
  @app.route('/<variable_name>')
  def function_name(variable_name):
      ...
  ```

- **Example**:

  ```python
  @app.route('/user/<username>')
  def show_user(username):
      return f"Hello, {username}!"
  ```

  - URL `/user/abhishek` will respond with "Hello, abhishek!"

- **Type Converters**:
  Flask supports type converters to enforce variable types in dynamic routes:

  - `<string>`: Default, matches strings.
  - `<int>`: Matches integers.
  - `<float>`: Matches floating-point numbers.
  - `<path>`: Matches a string containing slashes (`/`).
  - `<uuid>`: Matches a UUID string.

  **Example with Type Converters**:

  ```python
  @app.route('/product/<int:product_id>')
  def show_product(product_id):
      return f"Product ID: {product_id}"
  ```

### HTTP Methods

Routes can specify the allowed HTTP methods (e.g., `GET`, `POST`, `PUT`, `DELETE`).

- **Specifying Methods**:

  ```python
  @app.route('/submit', methods=['POST'])
  def submit():
      return "Form submitted!"
  ```

- **Handling Multiple Methods**:

  ```python
  @app.route('/form', methods=['GET', 'POST'])
  def form():
      if request.method == 'POST':
          return "Form submitted!"
      return "Form page"
  ```

### Route Options

#### `strict_slashes`

- Controls whether Flask treats routes with or without trailing slashes differently.
- By default, Flask is **not strict** with slashes.

**Example**:

```python
@app.route('/about/', strict_slashes=True)
def about():
    return "About page"
```

- Accessing `/about` will result in a `404 Not Found`.

### Redirects with `@app.route`

When two routes lead to the same function, Flask can redirect users from one route to another.

**Example**:

```python
@app.route('/old-home')
def old_home():
    return redirect('/home')

@app.route('/home')
def home():
    return "Welcome to the homepage!"
```

In the above example, accessing `/old-home` redirects the client to `/home`.

### Using `url_for` to Build URLs

The `url_for` function generates URLs dynamically using the name of the view function. It is particularly useful when you want to avoid hardcoding URLs in templates or code.

**Example**:

```python
from flask import url_for

@app.route('/profile/<username>')
def profile(username):
    return f"Profile of {username}"

@app.route('/dashboard')
def dashboard():
    profile_url = url_for('profile', username='abhishek')
    return f"Go to your profile: {profile_url}"
```

- The `url_for` function generates `/profile/abhishek`.

### Route Aliases

You can define multiple routes that map to the same view function.

**Example**:

```python
@app.route('/')
@app.route('/home')
def home():
    return "Welcome to the homepage!"
```

Both `/` and `/home` invoke the `home` function.

### Error Handling in Routes

Custom error handlers can be defined for specific HTTP status codes (like `404` or `500`).

**Example**:

```python
@app.errorhandler(404)
def not_found(error):
    return "Page not found!", 404
```

## Best Practices for Defining Routes

1. **Use Descriptive Names**:

   - Keep your routes descriptive and meaningful.
   - Example: Use `/user/profile` instead of `/up`.

2. **Keep URLs Consistent**:

   - Use consistent conventions for case and separators (e.g., `snake_case` or `kebab-case`).

3. **Use `url_for` Instead of Hardcoding URLs**:

   - Always use `url_for` to generate URLs dynamically.

4. **Organize Routes for Scalability**:

   - Use **blueprints** for modular applications when you have many routes.

5. **Limit HTTP Methods**:
   - Restrict HTTP methods to only those required for a route.

## Advanced Routing: Flask Blueprints

As your application grows, it can become unwieldy to manage all routes in a single file. Flask provides **blueprints** for modular and scalable applications.

- **Example of a Blueprint**:

  ```python
  from flask import Blueprint

  user_bp = Blueprint('user', __name__)

  @user_bp.route('/profile/<username>')
  def profile(username):
      return f"User profile: {username}"

  app.register_blueprint(user_bp, url_prefix='/user')
  ```

- The above blueprint defines a route `/profile/<username>` under the `/user` prefix, resulting in `/user/profile/<username>`.

## Example of a Complete Flask Routing Application

```python
from flask import Flask, request, url_for

app = Flask(__name__)

# Basic route
@app.route('/')
def home():
    return "Welcome to Flask!"

# Dynamic route
@app.route('/user/<username>')
def show_user(username):
    return f"Hello, {username}!"

# Route with type converters
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f"Post ID: {post_id}"

# Route with multiple methods
@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        return "Form submitted!"
    return "Form page"

# Using url_for
@app.route('/generate-url')
def generate_url():
    profile_url = url_for('show_user', username='abhishek')
    return f"Generated URL: {profile_url}"

# Error handler
@app.errorhandler(404)
def not_found(error):
    return "Page not found!", 404

if __name__ == '__main__':
    app.run(debug=True)
```

## Flask Views

In Flask, **views** are functions that handle incoming HTTP requests and return responses. A view function is associated with a specific route (URL pattern) in the web application, and it is executed when the associated route is accessed. The primary role of a view is to process data, interact with the database or other services, and return the appropriate HTTP response to the client.

Flask views can return various types of responses, including HTML, JSON, redirect responses, or even custom responses. The view functions in Flask are typically defined using Python's standard function syntax.

### Defining Views in Flask

In Flask, views are linked to URLs via the `@app.route()` decorator, which maps a route to a specific function.

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'  # Returns a simple response

if __name__ == '__main__':
    app.run(debug=True)
```

In this example:

- The route `/` is associated with the `home()` function.
- When a user accesses the root URL (`/`), Flask calls the `home()` function, which returns the string `'Hello, World!'` as an HTTP response.

### Types of Views in Flask

1. **Basic Views**: Return static or dynamic content (HTML, text, JSON).

   ```python
   @app.route('/about')
   def about():
       return 'This is the About page.'
   ```

2. **Views with Variables**: Routes can have variables that are passed to view functions.

   ```python
   @app.route('/user/<username>')
   def show_user_profile(username):
       return f'User: {username}'
   ```

3. **Views with HTTP Methods**: You can specify which HTTP methods a view should handle (GET, POST, etc.).

   ```python
   @app.route('/submit', methods=['POST'])
   def submit():
       return 'Form Submitted'
   ```

4. **Views with Templates**: Flask views can render HTML templates using the **Jinja2** template engine.

   ```python
   from flask import render_template

   @app.route('/home')
   def home():
       return render_template('home.html', username='John')
   ```

5. **Error Views**: Flask allows you to handle HTTP errors (e.g., 404 Not Found) using custom views.

   ```python
   @app.errorhandler(404)
   def page_not_found(e):
       return 'Page not found!', 404
   ```
