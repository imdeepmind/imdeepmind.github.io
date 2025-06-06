---
sidebar_position: 10
---

# Querying and Filtering

DRF provides tools to efficiently query, filter, and optimize data retrieval from the database. These tools ensure that APIs deliver only the required data while maintaining performance.

## Filtering and Ordering

### Overview

Filtering and ordering allow you to return subsets of data or sort results based on specific fields.

### Using `filter_backends`

- DRF provides built-in filter backends for basic filtering, search, and ordering.
- Specify `filter_backends` in the view or globally in the settings.

#### Example Setup

1. Enable filter backends:

   ```python
   from rest_framework.filters import OrderingFilter

   class MyViewSet(viewsets.ModelViewSet):
       queryset = MyModel.objects.all()
       serializer_class = MySerializer
       filter_backends = [OrderingFilter]
       ordering_fields = ['field1', 'field2']  # Specify fields allowed for ordering
   ```

2. Global configuration:

   ```python
   REST_FRAMEWORK = {
       'DEFAULT_FILTER_BACKENDS': [
           'rest_framework.filters.OrderingFilter',
       ],
   }
   ```

### Filtering

1. **Simple Filtering**:
   Use `django_filters` to apply simple or complex filtering based on query parameters.

   ```python
   from django_filters.rest_framework import DjangoFilterBackend

   class MyViewSet(viewsets.ModelViewSet):
       queryset = MyModel.objects.all()
       serializer_class = MySerializer
       filter_backends = [DjangoFilterBackend]
       filterset_fields = ['field1', 'field2']  # Specify fields to filter
   ```

   - Example URL: `/api/items/?field1=value`

2. **Custom Filtering**:
   Define a custom filter backend for advanced filtering logic.

   ```python
   from rest_framework.filters import BaseFilterBackend

   class CustomFilterBackend(BaseFilterBackend):
       def filter_queryset(self, request, queryset, view):
           if 'custom_param' in request.query_params:
               return queryset.filter(custom_field=request.query_params['custom_param'])
           return queryset

   class MyViewSet(viewsets.ModelViewSet):
       filter_backends = [CustomFilterBackend]
   ```

### Ordering

- Add an `OrderingFilter` backend and specify `ordering_fields` or allow all fields.

  ```python
  from rest_framework.filters import OrderingFilter

  class MyViewSet(viewsets.ModelViewSet):
      queryset = MyModel.objects.all()
      serializer_class = MySerializer
      filter_backends = [OrderingFilter]
      ordering_fields = ['field1', 'field2']  # Fields for ordering
      ordering = ['field1']  # Default ordering
  ```

  - Example URL: `/api/items/?ordering=field1`

## Pagination

### Overview

Pagination splits large datasets into smaller chunks, making responses manageable and efficient.

### DRF Pagination Classes

1. **PageNumberPagination**:

   - Default pagination using page numbers.

   ```python
   from rest_framework.pagination import PageNumberPagination

   class MyPagination(PageNumberPagination):
       page_size = 10  # Number of items per page
       page_size_query_param = 'page_size'  # Allow clients to set page size
       max_page_size = 100  # Maximum allowed page size
   ```

2. **LimitOffsetPagination**:

   - Allows clients to specify an offset and limit.

   ```python
   from rest_framework.pagination import LimitOffsetPagination

   class MyPagination(LimitOffsetPagination):
       default_limit = 10
       max_limit = 100
   ```

3. **CursorPagination**:

   - Uses an opaque cursor for pagination, ensuring stable ordering.

   ```python
   from rest_framework.pagination import CursorPagination

   class MyPagination(CursorPagination):
       page_size = 10
       ordering = 'created_at'  # Field used for cursor
   ```

### Using Custom Pagination

Assign the pagination class to a view:

```python
class MyViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MySerializer
    pagination_class = MyPagination
```

### Global Pagination

Set pagination globally in `settings.py`:

```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}
```

## Searching

### Overview

DRF provides a `SearchFilter` backend for simple search functionality using query parameters.

### Adding Search to a View

1. Include the `SearchFilter` backend:

   ```python
   from rest_framework.filters import SearchFilter

   class MyViewSet(viewsets.ModelViewSet):
       queryset = MyModel.objects.all()
       serializer_class = MySerializer
       filter_backends = [SearchFilter]
       search_fields = ['name', 'description']  # Fields to search
   ```

2. Search query example:
   - URL: `/api/items/?search=keyword`

### Customizing Search

1. **Partial Matching**:

   - Use `^` (starts with), `@` (search), or `$` (regex) to control field behavior:

     ```python
     search_fields = ['^name', '=description', '@tags']
     ```

2. **Case-Insensitive Search**:
   - Apply filters like `icontains` in a custom backend.

### Full-Text Search

For advanced searching, integrate with third-party libraries like Elasticsearch, Solr, or Django’s PostgreSQL full-text search.

## Advanced Query Optimizations

### Overview

Query optimizations reduce database queries and improve performance when fetching related objects.

### Techniques

1. **`select_related`**:

   - Fetches related objects in a single query for ForeignKey relationships.

   ```python
   queryset = MyModel.objects.select_related('related_field')
   ```

2. **`prefetch_related`**:

   - Fetches related objects for ManyToMany or reverse ForeignKey relationships.

   ```python
   queryset = MyModel.objects.prefetch_related('related_field')
   ```

3. **Using Annotate and Aggregate**:

   - Add computed values to a query to reduce separate calculations.

   ```python
   from django.db.models import Count

   queryset = MyModel.objects.annotate(related_count=Count('related_field'))
   ```

4. **Avoid N+1 Query Problem**:

   - Avoid queries within loops by preloading related data.

   ```python
   queryset = MyModel.objects.select_related('related_field')
   for obj in queryset:
       print(obj.related_field.name)  # Avoids additional queries
   ```

5. **Use QuerySet Caching**:

   - Cache frequently accessed data using Django’s caching framework.

6. **Index Database Fields**:
   - Add database indexes for fields frequently used in filtering or ordering.

### Example of Optimized QuerySet

```python
queryset = MyModel.objects.select_related('foreign_key_field').prefetch_related('many_to_many_field').annotate(related_count=Count('related_field'))
```
