---
sidebar_position: 15
---

# Advanced Topics

DRF offers flexibility and extensibility for building robust APIs. Mastering advanced topics such as custom serializers, non-CRUD operations, signals, versioning, caching, asynchronous views, and WebSocket integration empowers developers to handle complex business requirements efficiently.

## Custom Fields and Serializers

Custom fields and serializers allow developers to adapt DRF's serialization/deserialization logic to unique business needs.

### Custom Fields

Custom fields override the default behavior of DRF fields.

**Steps to Create a Custom Field**:

1. Subclass `rest_framework.fields.Field`.
2. Override `to_representation()` (serialization).
3. Override `to_internal_value()` (deserialization).

#### Example: Encrypting/Decrypting a Field

```python
from rest_framework.fields import Field
from cryptography.fernet import Fernet

class EncryptedField(Field):
    def __init__(self, key, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fernet = Fernet(key)

    def to_representation(self, value):
        return self.fernet.encrypt(value.encode()).decode()

    def to_internal_value(self, data):
        return self.fernet.decrypt(data.encode()).decode()
```

### Custom Serializers

Custom serializers handle complex data representations that cannot be managed by default `ModelSerializer`.

#### Example: Combining Fields from Multiple Models

```python
from rest_framework import serializers
from myapp.models import Author, Book

class AuthorBookSerializer(serializers.Serializer):
    author_name = serializers.CharField(source='author.name')
    book_title = serializers.CharField(source='book.title')

    def to_representation(self, instance):
        return {
            "author_name": instance.author.name,
            "book_title": instance.book.title,
        }
```

## Custom Views for Non-CRUD Operations

Non-CRUD operations (like login, export, or analytics) often require custom views.

### Customizing API Views

1. Subclass `APIView` or `GenericAPIView`.
2. Override HTTP method handlers like `get()`, `post()`.

#### Example: Custom Login Endpoint

```python
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if username == 'admin' and password == 'password':
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
```

## Signal Handling in DRF

Django signals are useful for decoupled communication between components. They can be used in DRF for tasks like logging, sending notifications, or triggering background jobs.

### Using Signals in DRF

1. Import the required signal (e.g., `post_save`).
2. Connect a receiver function to the signal.

#### Example: Sending an Email After User Registration

```python
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.mail import send_mail

@receiver(post_save, sender=User)
def send_welcome_email(sender, instance, created, **kwargs):
    if created:
        send_mail(
            subject="Welcome to MyApp",
            message="Thank you for registering!",
            from_email="noreply@myapp.com",
            recipient_list=[instance.email],
        )
```

## Versioning

Versioning APIs help manage changes without breaking existing functionality.

### DRF’s Versioning Support

1. **NamespaceVersioning**: Uses the URL namespace.
2. **URLPathVersioning**: Extracts the version from the URL path.
3. **QueryParameterVersioning**: Extracts the version from a query parameter.
4. **HeaderVersioning**: Extracts the version from a custom header.

#### Example: URLPathVersioning

```python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
}

# urls.py
from django.urls import path, include

urlpatterns = [
    path('v1/', include('myapp.api_v1_urls')),
    path('v2/', include('myapp.api_v2_urls')),
]
```

## Caching

Caching reduces the load on the server by storing and reusing responses.

### Common Caching Techniques

1. **Django’s Cache Framework**:
   - Use cache backends like Redis or Memcached.
2. **DRF’s Throttle Classes**:
   - Use throttling to limit repeated requests and cache results.
3. **Custom Cache Middleware**:
   - Add caching logic in middleware or views.

#### Example: View-Level Caching

```python
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator

class CachedView(APIView):
    @method_decorator(cache_page(60 * 15))  # Cache for 15 minutes
    def get(self, request):
        return Response({"data": "Cached content"})
```

## Asynchronous Views

DRF supports asynchronous views starting from Django 3.1+, enabling better performance for I/O-bound operations.

### Writing Asynchronous Views

Use `async def` to define the view and asynchronous libraries like `httpx` for non-blocking operations.

#### Example: Asynchronous View

```python
from rest_framework.views import APIView
from rest_framework.response import Response
import httpx

class AsyncAPIView(APIView):
    async def get(self, request):
        async with httpx.AsyncClient() as client:
            response = await client.get('https://api.example.com/data')
        return Response(response.json())
```

## WebSockets and DRF

For real-time communication, integrate DRF with **Django Channels**, which provides WebSocket support.

### Setting Up Django Channels

1. Install Django Channels:

   ```bash
   pip install channels
   ```

2. Add `channels` to `INSTALLED_APPS` and configure ASGI settings.

### Creating a WebSocket Consumer

```python
from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def receive(self, text_data):
        message = json.loads(text_data).get('message')
        await self.send(text_data=json.dumps({"message": message}))
```
