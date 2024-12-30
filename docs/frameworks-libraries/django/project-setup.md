---
sidebar_position: 3
---

# Project Setup

## Create a Virtual Environment

Using a virtual environment helps isolate project dependencies.

```cmd
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

## Install Required Libraries

Install Django, Django Rest Framework, psycopg2 (for PostgreSQL), and other necessary dependencies.

```python
# Upgrade pip
pip install --upgrade pip

# Install Django and Django Rest Framework
pip install django djangorestframework

# Install PostgreSQL driver
pip install psycopg2-binary
```

## Create a New Django Project

Create a new project and an app.

```python
# Create a new Django project in the current folder
django-admin startproject myproject .

# Navigate to the project directory (if needed)
cd myproject

# Create an app
python manage.py startapp myapp
```

## Set Up Django Rest Framework

Update `settings.py` to include DRF and your app.

```python
# settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Add these apps
    'rest_framework',
    'myapp',
]

# Optional: Add basic DRF settings
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',  # Allow open access for now
    ]
}
```

## Configure PostgreSQL

Update `settings.py` to use PostgreSQL.

1.  Install PostgreSQL and create a database:

    ```sql
    CREATE DATABASE myprojectdb;
    CREATE USER myprojectuser WITH PASSWORD 'mypassword';
    GRANT ALL PRIVILEGES ON DATABASE myprojectdb TO myprojectuser;
    ```

2.  Update `DATABASES` in `settings.py`:

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'myprojectdb',
            'USER': 'myprojectuser',
            'PASSWORD': 'mypassword',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

3.  Apply migrations to set up the database schema:

    ```cmd
    python manage.py makemigrations
    python manage.py migrate
    ```

## Run the Development Server

Start the server and test the setup:

```python
python manage.py runserver
```

Visit `http://127.0.0.1:8000/api/books/` to test the API. You should see an empty list if no books exist yet.

## Optional Enhancements

- **Use a `.env` File for Secrets:**

  Use libraries like `python-decouple` to store sensitive data like database credentials securely.

  ```cmd
  pip install python-decouple
  ```

  Update `settings.py`:

  ```python
  from decouple import config

  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': config('DB_NAME'),
          'USER': config('DB_USER'),
          'PASSWORD': config('DB_PASSWORD'),
          'HOST': 'localhost',
          'PORT': '5432',
      }
  }
  ```

- **Add Admin Superuser:**

  ```cmd
  python manage.py createsuperuser
  ```
