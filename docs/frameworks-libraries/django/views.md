---
sidebar_position: 7
---

# Views

Django Rest Framework (DRF) views are a core component used to define the behavior of API endpoints. They control the logic for handling HTTP requests and returning appropriate responses. DRF provides both function-based and class-based views, along with a range of generic views and viewsets to simplify API development.

## Purpose of Views in DRF

- **Process HTTP Requests**: Handle requests such as GET, POST, PUT, PATCH, and DELETE.
- **Return HTTP Responses**: Send appropriate responses (JSON, XML, etc.) back to clients.
- **Bridge Between Models and Serializers**: Fetch data from models, serialize it, and return it to clients.
- **Validation and Error Handling**: Manage validation and error responses effectively.

## Types of DRF Views

### Function-Based Views (FBVs)

- Similar to traditional Django views.
- Provide flexibility but require more boilerplate code.
- Use DRF decorators like `@api_view` for request handling.

### Class-Based Views (CBVs)

- Follow Django’s CBV structure and leverage object-oriented programming principles.
- Provide reusable and modular components.
- DRF enhances CBVs with mixins and generic views for common patterns.

### Viewsets

- Specialized CBVs that encapsulate logic for managing sets of resources.
- Work seamlessly with DRF routers for generating URLs.

## Function-Based Views

### Definition

- Decorated with `@api_view` to ensure they handle API requests.

### Example

```python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

## Class-Based Views

### APIView

- The most basic class-based view in DRF.
- Provides finer control over request handling.
- Requires explicit implementation of HTTP methods (e.g., `get`, `post`, etc.).

### Example

```python
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class BookListAPIView(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

## Difference Between Function-Based and Class-Based Views

### Function-Based Views (FBVs)

- **Definition**: Views are simple Python functions handling specific HTTP methods (e.g., GET, POST).
- **Pros**:
  - Easy to read and understand, especially for beginners.
  - Minimal abstraction, giving full control over logic.
  - Best suited for simple APIs with minimal logic.
- **Cons**:
  - Can become repetitive and harder to maintain for larger APIs.
  - Lack of modularity compared to CBVs.
  - No built-in support for DRY (Don’t Repeat Yourself) principles.
- **When to Use**:
  - For small-scale applications or APIs with straightforward requirements.
  - When the focus is on quick development with minimal complexity.

### Class-Based Views (CBVs)

- **Definition**: Views are Python classes with methods corresponding to HTTP actions (e.g., `get`, `post`).
- **Pros**:
  - Modular and reusable, with support for inheritance.
  - Built-in features for common patterns using mixins and generic views.
  - Promotes the DRY principle, reducing boilerplate code.
  - Easier to extend and customize for complex APIs.
- **Cons**:
  - Slightly steeper learning curve due to abstraction.
  - Overhead of understanding mixins and generics for beginners.
- **When to Use**:
  - For medium-to-large APIs with multiple endpoints.
  - When modularity and maintainability are priorities.
  - When reuse of common patterns is required.

## Generic Views

### Purpose

- DRF provides generic views for common patterns (e.g., listing objects, retrieving details).
- Simplify implementation by combining common behaviors.

### ListAPIView and RetrieveAPIView

- **ListAPIView**: Fetch and display a list of objects.
- **RetrieveAPIView**: Fetch details of a single object.

### Example

```python
from rest_framework.generics import ListAPIView, RetrieveAPIView

class BookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetailView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
```

## Mixins and GenericAPIView

### Mixins

- DRF mixins provide reusable functionality for common operations.
- Examples:
  - `CreateModelMixin`
  - `ListModelMixin`
  - `RetrieveModelMixin`
  - `UpdateModelMixin`
  - `DestroyModelMixin`

### GenericAPIView

- Extends DRF's `APIView` with support for mixins.
- Provides attributes like `queryset`, `serializer_class`, and methods like `get_queryset()`.

### Example

```python
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.generics import GenericAPIView

class BookListCreateView(ListModelMixin, CreateModelMixin, GenericAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
```

## Viewsets

### Purpose

- Encapsulate logic for handling a set of resources in a single class.
- Designed to work with DRF’s routers for URL generation.

### Types of Viewsets

- **ViewSet**: Generic base class.
- **ModelViewSet**: Combines list, create, retrieve, update, and destroy actions for model instances.

### Example

```python
from rest_framework.viewsets import ModelViewSet

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
```

### Routers with Viewsets

```python
from rest_framework.routers import DefaultRouter
from myapp.views import BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

## Customization in Views

### Filtering, Searching, and Pagination

- DRF provides built-in support for filtering, searching, and pagination.

```python
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination

class BookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'author__name']
    pagination_class = PageNumberPagination
```

### Customizing Response

```python
class CustomBookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data = {'books': response.data, 'message': 'Success'}
        return response
```

## Handling Permissions

DRF views integrate seamlessly with permission classes to restrict access based on user roles or conditions.

```python
from rest_framework.permissions import IsAuthenticated

class BookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
```
