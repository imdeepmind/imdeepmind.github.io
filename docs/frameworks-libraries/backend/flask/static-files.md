---
sidebar_position: 6
---

# Static Files

Static files such as images, CSS, JavaScript, and other assets are essential components of a web application. Flask provides a simple and efficient way to serve these static files to users. Understanding how Flask handles static files and the best practices for organizing them is crucial for building effective web applications.

## What Are Static Files?

Static files are resources that do not change dynamically and are served directly to the client without any processing by the server. Examples of static files include:

- Images (`.jpg`, `.png`, `.gif`)
- CSS stylesheets
- JavaScript files
- Fonts (`.ttf`, `.woff`, `.woff2`)
- Documents (`.pdf`, `.docx`)

Flask provides a built-in mechanism to serve these files from a directory in your project.

## Flask's Default Static Folder

Flask automatically serves static files from a directory named **`static`** located in the root of your Flask project. You don't need to write additional code for serving static files from this directory.

The default static file URL is:

```bash
/static/<filename>
```

For example:

- If you have an image file located at `static/images/logo.png`, it can be accessed via the URL `/static/images/logo.png`.

## Folder Structure for Static Files

Here is a typical Flask project structure with static files:

```bash
project/
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── images/
│   │   └── logo.png
├── templates/
│   └── index.html
├── app.py
```

- **`static/`**: Contains all static assets.
- **`css/`**: Stores CSS files.
- **`js/`**: Stores JavaScript files.
- **`images/`**: Stores images.

## Serving Static Files in Flask

### Using the Default Static Folder

Flask automatically serves files placed in the `static` directory.

- **Example**:
  - Place an image at `static/images/logo.png`.
  - Access it via the URL: `http://127.0.0.1:5000/static/images/logo.png`.

### Referencing Static Files in HTML

To include static files in your HTML templates, Flask provides the `url_for` function, which generates the URL for a static file.

**Example**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flask Static Example</title>
    <link
      rel="stylesheet"
      href="{{ url_for('static', filename='css/styles.css') }}"
    />
  </head>
  <body>
    <h1>Welcome to Flask</h1>
    <img src="{{ url_for('static', filename='images/logo.png') }}" alt="Logo" />
    <script src="{{ url_for('static', filename='js/app.js') }}"></script>
  </body>
</html>
```

- **Advantages of Using `url_for`**:
  - Automatically handles path generation.
  - Ensures compatibility if the app is hosted under a subdirectory.

### Custom Static Folder

By default, Flask looks for static files in the `static/` directory. You can specify a custom static folder when creating the Flask application instance.

**Example**:

```python
from flask import Flask

app = Flask(__name__, static_folder='assets')

@app.route('/')
def home():
    return 'Custom static folder example'
```

- In this case, Flask will serve files from the `assets/` directory instead of `static/`.

### Custom Static URL Path

You can also change the default `/static` URL prefix by specifying the `static_url_path` parameter when creating the Flask app.

**Example**:

```python
from flask import Flask

app = Flask(__name__, static_url_path='/assets')

@app.route('/')
def home():
    return 'Custom static URL path example'
```

- Now, static files are accessed via `/assets/<filename>` instead of `/static/<filename>`.

### Serving Static Files Outside the Default Directory

If you want to serve static files from a directory outside the default static folder, you can use Flask's `send_from_directory` function.

**Example**:

```python
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory('uploads', filename)

if __name__ == '__main__':
    app.run(debug=True)
```

- In this example, static files are served from an `uploads/` directory outside the `static/` folder.

## Best Practices for Static Files in Flask

1. **Organize Files**:

   - Group related static files into subdirectories like `css/`, `js/`, and `images/`.
   - Avoid cluttering the `static/` directory.

2. **Use `url_for` for Referencing Files**:

   - Always use the `url_for` function to generate static file URLs in templates. This ensures compatibility and avoids hardcoding paths.

3. **Minify Assets**:

   - Minify CSS and JavaScript files to reduce file size and improve loading speed.

4. **Cache Busting**:

   - When deploying an updated version of your app, browsers might cache static files. Use cache-busting techniques by appending a version parameter to the URL:

     ```html
     <link
       rel="stylesheet"
       href="{{ url_for('static', filename='css/styles.css') }}?v=1.0"
     />
     ```

5. **Use a CDN for Large Applications**:

   - For large-scale applications, consider hosting static files on a Content Delivery Network (CDN) to improve performance.

6. **Security**:
   - Avoid exposing sensitive files through the `static/` folder.
   - Validate user input if dynamic file paths are used.

## Example: A Complete Flask App with Static Files

Here's an example Flask application demonstrating the use of static files:

### Folder Structure

```bash
project/
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── images/
│   │   └── flask-logo.png
├── templates/
│   └── index.html
├── app.py
```

### File: `static/css/styles.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}
```

### File: `static/js/app.js`

```javascript
console.log("JavaScript is working!");
```

### File: `templates/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flask Static Example</title>
    <link
      rel="stylesheet"
      href="{{ url_for('static', filename='css/styles.css') }}"
    />
  </head>
  <body>
    <h1>Welcome to Flask</h1>
    <p>This page demonstrates serving static files in Flask.</p>
    <img
      src="{{ url_for('static', filename='images/flask-logo.png') }}"
      alt="Flask Logo"
    />
    <script src="{{ url_for('static', filename='js/app.js') }}"></script>
  </body>
</html>
```

### File: `app.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### How It Works

1. The app serves static files (CSS, JS, and images) from the `static/` folder.
2. The HTML file references these files using the `url_for` function.
3. When the app runs, the page is styled with the CSS file, the JavaScript file logs a message, and the image is displayed.
