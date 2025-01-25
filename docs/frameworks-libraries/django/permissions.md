---
sidebar_position: 9
---

# Permissions, Access Control, Throttling

Django Rest Framework provides robust tools for controlling who can access your APIs, what they can do, and how often they can make requests. Below is a detailed explanation of these concepts.

## Permissions

Permissions in DRF define whether a request should be granted or denied based on the user making the request. Permissions are checked during the view processing stage.

### Types of Permissions

1. **Global Permissions**:

   - Apply to all views by setting the `DEFAULT_PERMISSION_CLASSES` in your settings:
     ```python
     REST_FRAMEWORK = {
         'DEFAULT_PERMISSION_CLASSES': [
             'rest_framework.permissions.IsAuthenticated',
         ]
     }
     ```

2. **View-Level Permissions**:

   - Set per view using the `permission_classes` attribute:

     ```python
     from rest_framework.permissions import IsAuthenticated

     class ExampleView(APIView):
         permission_classes = [IsAuthenticated]
     ```

### Built-in Permission Classes

1. **AllowAny**: Allows unrestricted access to all users, including unauthenticated users.
2. **IsAuthenticated**: Grants access only to authenticated users.
3. **IsAdminUser**: Grants access only to users with `is_staff=True`.
4. **IsAuthenticatedOrReadOnly**: Authenticated users have full access; unauthenticated users can only read (GET, HEAD, OPTIONS).

### Custom Permissions

- Create custom permission classes by inheriting `BasePermission` and overriding the `has_permission` or `has_object_permission` methods:

  ```python
  from rest_framework.permissions import BasePermission

  class IsOwnerOrReadOnly(BasePermission):
      def has_object_permission(self, request, view, obj):
          # Allow read-only methods for everyone
          if request.method in ['GET', 'HEAD', 'OPTIONS']:
              return True
          # Write permissions are only allowed to the object's owner
          return obj.owner == request.user
  ```

### Object-Level Permissions

- Used to check permissions for individual objects, typically combined with a custom `has_object_permission` method.

## Access Control

Access control ensures specific user roles or groups have access to certain resources or actions.

### Common Access Control Patterns

1. **Role-Based Access Control (RBAC)**:

   - Use Django's built-in user groups and permissions.
   - Assign users to groups and attach permissions to groups.

2. **Object-Level Access**:
   - Determine whether a user can interact with a specific object. For example:
     ```python
     def has_object_permission(self, request, view, obj):
         return obj.created_by == request.user
     ```

### Setting Access Control at View Level

- Permissions can be layered to enforce both global and per-object rules:
  ```python
  permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
  ```

## Throttling

Throttling controls the rate of requests a client can make to your API, helping prevent abuse or overloading.

### Types of Throttles

1. **AnonRateThrottle**: Limits requests from unauthenticated users.
2. **UserRateThrottle**: Limits requests from authenticated users.
3. **ScopedRateThrottle**: Limits requests on specific views or viewsets based on a custom scope.

### Configuring Throttling

1. Add throttling classes in `settings.py`:

   ```python
   REST_FRAMEWORK = {
       'DEFAULT_THROTTLE_CLASSES': [
           'rest_framework.throttling.AnonRateThrottle',
           'rest_framework.throttling.UserRateThrottle',
       ],
       'DEFAULT_THROTTLE_RATES': {
           'anon': '10/min',  # 10 requests per minute for unauthenticated users
           'user': '1000/day',  # 1000 requests per day for authenticated users
       }
   }
   ```

2. Override throttle rates per view:

   ```python
   from rest_framework.throttling import UserRateThrottle

   class ExampleThrottle(UserRateThrottle):
       rate = '5/min'  # Custom rate for this view

   class MyView(APIView):
       throttle_classes = [ExampleThrottle]
   ```

### Custom Throttle Classes

- Create custom throttles by subclassing `BaseThrottle`:

  ```python
  from rest_framework.throttling import BaseThrottle

  class CustomThrottle(BaseThrottle):
      def allow_request(self, request, view):
          # Logic to determine if the request should be allowed
          return True

      def wait(self):
          # Time (in seconds) until the next request is allowed
          return 60
  ```

## Best Practices

1. Use **AllowAny** sparingly to avoid unrestricted access.
2. Combine multiple permission classes for fine-grained control.
3. Set reasonable throttle and rate limits to balance performance and user experience.
4. Test access control rules thoroughly to ensure secure behavior.
5. Leverage logging and monitoring tools to track API usage and throttling behavior.
