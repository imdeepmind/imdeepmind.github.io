---
sidebar_position: 11
---

# Database Integration and Flask-SQLAlchemy

Flask, being a lightweight web framework, doesn't come with built-in database support, but it can easily integrate with various database systems using extensions. Database integration allows Flask applications to interact with persistent data stores (e.g., relational databases like MySQL, PostgreSQL, SQLite, and NoSQL databases like MongoDB).

Flask supports several tools and libraries for database interaction, with **SQLAlchemy** being one of the most popular and powerful extensions for working with relational databases. Flask also supports direct integration with other databases via native libraries and third-party extensions.

## Flask-SQLAlchemy: Overview

**Flask-SQLAlchemy** is an extension for Flask that adds support for SQLAlchemy, a powerful Object-Relational Mapping (ORM) library for Python. With Flask-SQLAlchemy, you can work with databases using high-level Python objects instead of writing raw SQL queries.

SQLAlchemy provides two main components:

1. **Core**: Provides the underlying database connection and raw SQL query capabilities.
2. **ORM**: Allows interaction with databases using Python classes that map to database tables.

Flask-SQLAlchemy integrates these components seamlessly into Flask applications, making it easier to manage your database schema and interact with the data.

## Setting Up Flask-SQLAlchemy

### Installation

To begin using **Flask-SQLAlchemy**, you need to install the required libraries.

```bash
pip install Flask-SQLAlchemy
```

### Configuration

After installation, you need to configure the database URI in the Flask application to tell Flask-SQLAlchemy where to connect. Typically, the database URI is set using the `SQLALCHEMY_DATABASE_URI` configuration key. This URI specifies the database type, username, password, host, and database name.

#### Example: SQLite Database

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Set up the database URI (SQLite in this case)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # SQLite file-based DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking to save resources

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)
```

- **SQLALCHEMY_DATABASE_URI**: Specifies the location of the database.
- **SQLALCHEMY_TRACK_MODIFICATIONS**: Flask-SQLAlchemy uses signals to track object modifications, but this feature can be disabled to save resources in most applications.

For other databases, the URI changes as follows:

- **PostgreSQL**: `'postgresql://username:password@localhost/dbname'`
- **MySQL**: `'mysql://username:password@localhost/dbname'`

## Defining Database Models

A **model** in Flask-SQLAlchemy is a Python class that represents a table in the database. The class inherits from `db.Model` and defines attributes (columns) of the table.

### Example: Defining a User Model

```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Integer column for ID, primary key
    username = db.Column(db.String(120), unique=True, nullable=False)  # String column for username
    email = db.Column(db.String(120), unique=True, nullable=False)  # String column for email
    password = db.Column(db.String(60), nullable=False)  # String column for password

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"
```

In this example:

- `db.Column` specifies a column in the database.
- `primary_key=True`: Marks the `id` field as the primary key.
- `unique=True`: Ensures that the field is unique across all records.
- `nullable=False`: Ensures that the column cannot have null values.
- The `__repr__` method provides a string representation for debugging purposes.

Flask-SQLAlchemy automatically translates the class into a corresponding table in the database.

## Performing CRUD Operations

Once the model is defined, you can interact with the database and perform CRUD (Create, Read, Update, Delete) operations.

### Create

To create a new record, instantiate the model and add it to the database session.

```python
new_user = User(username='johndoe', email='johndoe@example.com', password='password123')
db.session.add(new_user)
db.session.commit()  # Commit the transaction to save the record to the database
```

### Read

To query the database, you can use SQLAlchemy's querying capabilities to retrieve records.

#### Query All Users

```python
users = User.query.all()  # Get all users from the User table
```

#### Query a Single User by ID

```python
user = User.query.get(1)  # Get the user with ID 1
```

#### Query with Filters

```python
user = User.query.filter_by(username='johndoe').first()  # Get the first user with username 'johndoe'
```

### Update

To update an existing record, fetch the record, modify its attributes, and commit the transaction.

```python
user = User.query.get(1)
user.username = 'johnsmith'
db.session.commit()  # Save the changes to the database
```

### Delete

To delete a record, fetch the record and call `db.session.delete()` followed by `db.session.commit()`.

```python
user = User.query.get(1)
db.session.delete(user)
db.session.commit()  # Delete the user record from the database
```

## Database Migrations with Flask-Migrate

Database migrations are an essential part of database management, allowing you to evolve your database schema over time without losing data. **Flask-Migrate** is an extension that integrates **Alembic** (a lightweight database migration tool for SQLAlchemy) with Flask.

### Installation

```bash
pip install Flask-Migrate
```

### Setup

First, initialize the migration repository:

```bash
from flask_migrate import Migrate

migrate = Migrate(app, db)
```

In your application's entry point (`app.py`), you also need to create the migration commands:

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
```

Now you can use the following commands for migration:

1. **Initialize migration scripts**:

   ```bash
   flask db init
   ```

2. **Create a migration script**:

   ```bash
   flask db migrate -m "Initial migration"
   ```

3. **Apply the migration**:

   ```bash
   flask db upgrade
   ```

4. **Rollback to previous migrations**:

   ```bash
   flask db downgrade
   ```

## Handling Database Relationships

Flask-SQLAlchemy supports defining relationships between models using `db.relationship()` and `db.ForeignKey()`.

### Example: One-to-Many Relationship

Consider a scenario where each `User` can have multiple `Post`s.

```python
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    user = db.relationship('User', back_populates='posts')

User.posts = db.relationship('Post', back_populates='user', lazy=True)
```

In this example:

- `user_id` is a foreign key that refers to the `User` table.
- The `db.relationship()` method is used to define a relationship between `User` and `Post`.

### Example: Many-to-Many Relationship

For a many-to-many relationship, you typically use an auxiliary table to represent the connection.

```python
association_table = db.Table('association',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('group_id', db.Integer, db.ForeignKey('group.id'))
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    groups = db.relationship('Group', secondary=association_table, backref=db.backref('users', lazy='dynamic'))

class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
```
