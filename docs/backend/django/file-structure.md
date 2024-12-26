---
sidebar_position: 4
---

# File Structure

When you create a Django project and app, Django generates several files and directories. Below is an overview of the typical file structure and their purposes.

## Project Directory (`myproject/`)

- **`manage.py`**: A command-line utility to manage your project. Common commands include starting the development server, applying migrations, and creating a superuser.
- **Project Package (`myproject/`)**:
  - **`__init__.py`**: Marks the directory as a Python package.
  - **`settings.py`**: Main configuration file for your project.
  - **`urls.py`**: Defines URL patterns for your project.
  - **`wsgi.py`**: Entry point for WSGI-compatible web servers in production.
  - **`asgi.py`**: Entry point for ASGI-compatible web servers, supporting asynchronous protocols.

## App Directory (`myapp/`)

- **`__init__.py`**: Marks the directory as a Python package.
- **`admin.py`**: Registers models with the Django admin site.
- **`apps.py`**: Contains app-specific configurations.
- **`models.py`**: Defines database models for the app.
- **`views.py`**: Handles HTTP requests and returns responses.
- **`urls.py`**: (Optional) Defines app-specific URL patterns.
- **`serializers.py`**: (For DRF) Converts Python objects to JSON or other formats.
- **`tests.py`**: Contains test cases for the app.
- **`migrations/`**: Tracks database schema changes.

## Additional Directories (Optional or Auto-Generated)

- **`templates/`**: Contains HTML templates for rendering views.
- **`static/`**: Contains static assets like CSS, JavaScript, and images.
- **`media/`**: Stores user-uploaded files.

## Summary of File Roles

| File/Directory      | Role                                          |
| ------------------- | --------------------------------------------- |
| `manage.py`         | Command-line utility for project management.  |
| `settings.py`       | Central configuration for the project.        |
| `urls.py`           | Defines URL routing for the project and apps. |
| `wsgi.py`/`asgi.py` | Entry points for deploying the project.       |
| `models.py`         | Defines database schema using models.         |
| `views.py`          | Handles HTTP requests and returns responses.  |
| `serializers.py`    | DRF-specific file for data serialization.     |
| `admin.py`          | Registers models with the Django admin site.  |
| `tests.py`          | Contains test cases for the app.              |
| `migrations/`       | Tracks database schema changes.               |
| `templates/`        | Stores HTML templates for rendering data.     |
| `static/`           | Contains static assets (CSS, JS, images).     |
| `media/`            | Stores uploaded files.                        |
