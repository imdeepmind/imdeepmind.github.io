---
sidebar_position: 5
---

# Models and ORM

Django's **Object-Relational Mapping (ORM)** system allows developers to interact with the database using Python code, without having to write SQL queries manually. The ORM works by mapping Python classes to database tables, allowing the creation, retrieval, update, and deletion (CRUD) of data.

## Defining Models and Fields

In Django, a **model** is a Python class that defines the structure of your database table. The class inherits from `django.db.models.Model`, and each attribute of the class corresponds to a field in the table.

### Example:

```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)  # A string field (VARCHAR)
    author = models.CharField(max_length=100)  # A string field (VARCHAR)
    published_date = models.DateField()  # A Date field (DATE)
    price = models.DecimalField(max_digits=5, decimal_places=2)  # A Decimal field (numeric values)
    created_at = models.DateTimeField(auto_now_add=True)  # Auto timestamp for creation
    updated_at = models.DateTimeField(auto_now=True)  # Auto timestamp for last update

    def __str__(self):
        return self.title
```

### Common Field Types:

- **CharField**: Used for short text values like names or titles (requires `max_length`).
- **IntegerField**: Used for integer values.
- **DateField**: Stores date values (without time).
- **DateTimeField**: Stores date and time values.
- **DecimalField**: Used for fixed-point decimal numbers (e.g., prices).
- **BooleanField**: Stores `True` or `False` values.
- **TextField**: For large text data (unlimited length).

### Additional Options for Fields:

- `null=True` – Allows database to store `NULL` (useful for optional fields).
- `blank=True` – Allows form validation to accept empty values.
- `default=` – Assign a default value to the field.

## QuerySets and Managers

A **QuerySet** is a collection of database queries, and **Managers** are the interface through which QuerySets are accessed.

### Example of QuerySets:

```python
# Fetch all Book objects
books = Book.objects.all()

# Filter books by author
books_by_author = Book.objects.filter(author='John Doe')

# Get a single book by title
book = Book.objects.get(title='Django for Beginners')

# Exclude books that are priced over $50
cheap_books = Book.objects.exclude(price__gt=50)

# Retrieve books sorted by price
sorted_books = Book.objects.all().order_by('price')
```

### Custom Manager:

You can define custom managers to encapsulate frequently used queries:

```python
class BookManager(models.Manager):
    def published_this_year(self):
        return self.filter(published_date__year=2024)

class Book(models.Model):
    title = models.CharField(max_length=100)
    published_date = models.DateField()

    # Custom manager
    books = BookManager()

# Usage
books_published_this_year = Book.books.published_this_year()
```

## Relationships: ForeignKey, OneToOneField, ManyToManyField

Django allows you to define relationships between models. There are three main types of relationships: **One-to-Many**, **One-to-One**, and **Many-to-Many**.

### ForeignKey (One-to-Many Relationship):

A **ForeignKey** defines a many-to-one relationship, where one object can be associated with multiple other objects.

```python
class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
```

`on_delete=models.CASCADE`: Specifies the behavior when the related object is deleted (e.g., delete all related books when an author is deleted).

### OneToOneField (One-to-One Relationship):

A **OneToOneField** defines a one-to-one relationship, where each object is associated with exactly one other object.

```python
class Author(models.Model):
    name = models.CharField(max_length=100)

class AuthorProfile(models.Model):
    author = models.OneToOneField(Author, on_delete=models.CASCADE)
    bio = models.TextField()
```

### ManyToManyField (Many-to-Many Relationship):

A **ManyToManyField** defines a many-to-many relationship, where each object can be associated with multiple other objects.

```python
class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=100)
    authors = models.ManyToManyField(Author)
```

## Common QuerySet Methods: `filter()`, `exclude()`, `annotate()`, `aggregate()`, etc.

Here are some common methods for working with QuerySets:

### filter()

Returns a new QuerySet containing objects that match the given conditions.

```python
books = Book.objects.filter(author='John Doe')
```

### exclude()

Excludes objects that match the given conditions.

```python
expensive_books = Book.objects.exclude(price__gt=100)
```

### annotate()

Used to perform calculations on a QuerySet, such as counting related objects or summing values.

```python
from django.db.models import Count

author_book_count = Author.objects.annotate(num_books=Count('book'))
```

### aggregate()

Performs a calculation on the entire QuerySet and returns a dictionary of values.

```python
from django.db.models import Avg

avg_price = Book.objects.aggregate(Avg('price'))
```

### order_by()

Orders the results based on the given field(s).

```python
sorted_books = Book.objects.order_by('published_date')
```

### get()

Retrieves a single object that matches the query. Raises an exception if there is no match or multiple matches.

```python
book = Book.objects.get(id=1)
```

## Model Inheritance

Django supports model inheritance, which allows you to create models that inherit from a parent model.

### Abstract Base Classes:

An abstract base class allows you to define common fields or methods that will be shared by multiple child models. The parent class will not create a database table.

```python
class CommonInfo(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

class Author(CommonInfo):
    biography = models.TextField()
```

### Multi-table Inheritance:

Each model in the inheritance hierarchy gets its own database table. The child model will contain a reference to the parent model.

```python
class Author(models.Model):
    name = models.CharField(max_length=100)

class AuthorProfile(Author):
    biography = models.TextField()
```

`AuthorProfile` will have its own table, with a reference to the `Author` table.

## Transactions and Atomicity

Django allows you to handle database transactions to ensure that operations are completed successfully or rolled back in case of errors.

### Atomic Transactions:

A transaction ensures that a set of operations are executed as a single unit. If one operation fails, all operations are rolled back.

### Example of Atomic Block:

```python
from django.db import transaction

try:
    with transaction.atomic():
        # Perform multiple operations
        book = Book.objects.create(title='New Book', author='John Doe')
        author = Author.objects.create(name='John Doe')
        # If any operation fails, both changes are rolled back
except Exception as e:
    print("Transaction failed:", e)
```

### `atomic()`:

Ensures that all database operations within the block are executed as one transaction. If any exception occurs, the database will roll back the changes to the state before the transaction began.
