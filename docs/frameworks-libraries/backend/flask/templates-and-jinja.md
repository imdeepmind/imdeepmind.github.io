---
sidebar_position: 5
---

# Templates and Jinja2

In Flask, **templates** are files (usually HTML) that serve as the foundation for rendering dynamic web pages. Flask integrates the **Jinja2** templating engine to allow developers to embed Python code within templates and dynamically generate content based on server-side logic.

## What Are Templates?

Templates are used to separate the presentation layer (HTML and UI logic) from the business logic (Python code). They are a way to render HTML dynamically by combining static content (HTML structure) with dynamic data (passed from the server).

For example, instead of writing static HTML:

```html
<h1>Welcome, Abhishek!</h1>
```

A Flask template allows you to dynamically insert the user's name:

```html
<h1>Welcome, {{ username }}!</h1>
```

This ensures reusability and separation of concerns, making the application easier to maintain.

## Flask and Jinja2

Flask uses the **Jinja2** templating engine by default. Jinja2 provides:

- **Template rendering**: Insert dynamic content into HTML.
- **Control structures**: Use loops and conditionals within templates.
- **Template inheritance**: Reuse common layout files across multiple pages.
- **Filters**: Modify or format data before rendering.

## Folder Structure for Templates

Flask looks for template files in the **`templates/`** directory by default. A typical folder structure might look like this:

```bash
project/
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── about.html
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
├── app.py
```

- **`templates/`**: Contains all template files.
- **`base.html`**: A common base layout file.
- **`home.html`**, **`about.html`**: Specific templates for different pages.

## Rendering Templates

Flask provides the **`render_template`** function to render templates and return HTML responses to the client.

### Syntax

```python
from flask import render_template

render_template(template_name, **context)
```

- **`template_name`**: The name of the template file (e.g., `home.html`).
- **`context`**: Key-value pairs passed to the template for dynamic rendering.

### Example: Basic Template Rendering

#### File: `app.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', username='Abhishek')

if __name__ == '__main__':
    app.run(debug=True)
```

#### File: `templates/home.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Welcome, {{ username }}!</h1>
  </body>
</html>
```

- The `username` variable is passed to the template and rendered dynamically.
- The output will be: **"Welcome, Abhishek!"**

## Features of Flask Templates

### Template Variables

Variables passed from the Flask application to the template are accessible using `{{ variable_name }}`.

**Example**:

```python
@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)
```

#### File: `templates/user.html`

```html
<h1>Hello, {{ name }}!</h1>
```

- URL `/user/Abhishek` will render: **"Hello, Abhishek!"**

### Control Structures

Jinja2 templates support loops and conditionals.

#### Loops

**Example**:

```python
@app.route('/items')
def items():
    items = ['Apple', 'Banana', 'Cherry']
    return render_template('items.html', items=items)
```

#### File: `templates/items.html`

```html
<ul>
  {% for item in items %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>
```

- Output:

  ```html
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>
  ```

#### Conditionals

**Example**:

```python
@app.route('/check/<int:score>')
def check(score):
    return render_template('check.html', score=score)
```

#### File: `templates/check.html`

```html
{% if score >= 50 %}
<p>Pass</p>
{% else %}
<p>Fail</p>
{% endif %}
```

- URL `/check/60` will render: **"Pass"**
- URL `/check/40` will render: **"Fail"**

### Template Inheritance

Template inheritance allows you to create a **base template** with common structure and reuse it in other templates.

#### File: `templates/base.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}My Flask App{% endblock %}</title>
    <link
      rel="stylesheet"
      href="{{ url_for('static', filename='css/styles.css') }}"
    />
  </head>
  <body>
    <header>
      <h1>Flask App Header</h1>
    </header>
    <main>{% block content %}{% endblock %}</main>
    <footer>
      <p>Footer content</p>
    </footer>
  </body>
</html>
```

#### File: `templates/home.html`

```html
{% extends 'base.html' %} {% block title %}Home Page{% endblock %} {% block
content %}
<p>Welcome to the homepage!</p>
{% endblock %}
```

#### File: `templates/about.html`

```html
{% extends 'base.html' %} {% block title %}About Page{% endblock %} {% block
content %}
<p>This is the about page.</p>
{% endblock %}
```

- The `base.html` file contains the common structure (header, footer, etc.).
- The child templates (`home.html`, `about.html`) define specific content for their respective pages.

### Filters

Filters modify the output of variables. Some commonly used filters include:

- **`upper`**: Converts text to uppercase.
- **`lower`**: Converts text to lowercase.
- **`length`**: Returns the length of a variable.

**Example**:

```html
<p>{{ name.upper() }}</p>
<p>{{ description | lower }}</p>
<p>Length: {{ items | length }}</p>
```

### Comments

Comments in Jinja2 templates are not rendered in the final output.

**Syntax**:

```html
{# This is a comment #}
```

## Passing Context to Templates

Flask supports passing multiple key-value pairs to templates.

**Example**:

```python
@app.route('/dashboard')
def dashboard():
    user = {'name': 'Abhishek', 'age': 30}
    stats = {'posts': 15, 'followers': 200}
    return render_template('dashboard.html', user=user, stats=stats)
```

### File: `templates/dashboard.html`

```html
<h1>Welcome, {{ user.name }}!</h1>
<p>Age: {{ user.age }}</p>
<p>Posts: {{ stats.posts }}</p>
<p>Followers: {{ stats.followers }}</p>
```

## Best Practices for Flask Templates

1. **Use Template Inheritance**:

   - Create a base layout for consistent design across pages.

2. **Organize Templates**:

   - Place related templates in subdirectories (e.g., `templates/users/profile.html`).

3. **Avoid Business Logic in Templates**:

   - Templates should focus on presentation, not logic.

4. **Use Filters for Formatting**:

   - Format dates, numbers, and strings using filters.

5. **Use `url_for` for URLs**:
   - Avoid hardcoding URLs in templates.

---

## Example: A Complete Flask App with Templates

### Folder Structure

```bash
project/
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── about.html
├── app.py
```

### File: `app.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### File: `templates/base.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}Flask App{% endblock %}</title>
  </head>
  <body>
    <header>
      <h1>My Flask App</h1>
    </header>
    <main>{% block content %}{% endblock %}</main>
    <footer>
      <p>Footer content</p>
    </footer>
  </body>
</html>
```

### File: `templates/home.html`

```html
{% extends 'base.html' %} {% block title %}Home Page{% endblock %} {% block
content %}
<h1>Welcome to the homepage!</h1>
{% endblock %}
```

### File: `templates/about.html`

```html
{% extends 'base.html' %} {% block title %}About Us{% endblock %} {% block
content %}
<h1>About This App</h1>
<p>This is a Flask application demonstrating templates.</p>
{% endblock %}
```
