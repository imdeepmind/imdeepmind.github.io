---
sidebar_position: 8
---

# Authentication

Authentication is a critical aspect of any web API. Django Rest Framework (DRF) provides a robust framework for handling authentication, allowing developers to secure API endpoints by validating the identity of users making requests. DRF includes built-in authentication mechanisms and supports custom implementations to meet unique requirements.

## Purpose of Authentication in DRF

- **Identity Verification**: Ensure that users accessing the API are who they claim to be.
- **Access Control**: Work with permissions to restrict access to certain parts of the API based on the user's identity.
- **Secure Communication**: Authenticate and validate credentials to protect sensitive data.

## Authentication Flow in DRF

1. A request is made to the API endpoint.
2. DRF checks the `Authorization` header or other predefined locations for credentials.
3. DRF uses the configured authentication classes to validate the credentials.
4. If the credentials are valid:
   - The `request.user` and `request.auth` objects are populated.
   - Permissions are checked to determine whether access is allowed.
5. If the credentials are invalid:
   - DRF returns a `401 Unauthorized` or `403 Forbidden` response.

## Authentication vs. Authorization

- **Authentication**: Focuses on verifying the identity of the user (e.g., logging in with credentials).
- **Authorization**: Focuses on determining what actions a user is allowed to perform.

Authentication classes populate the `request.user` object, while permissions determine whether the user has access to a specific view.

## Built-in Authentication Classes

DRF provides several built-in authentication classes that handle common use cases.

### BasicAuthentication

- Uses HTTP Basic Authentication.
- Credentials (username and password) are sent as a Base64-encoded string in the `Authorization` header.
- Suitable for testing but not recommended for production due to security concerns.
- **Example Configuration**:
  ```python
  REST_FRAMEWORK = {
      'DEFAULT_AUTHENTICATION_CLASSES': [
          'rest_framework.authentication.BasicAuthentication',
      ],
  }
  ```

### SessionAuthentication

- Relies on Django’s session framework.
- Typically used for browser-based clients.
- Requires the user to log in via Django’s login system.
- **Example Configuration**:
  ```python
  REST_FRAMEWORK = {
      'DEFAULT_AUTHENTICATION_CLASSES': [
          'rest_framework.authentication.SessionAuthentication',
      ],
  }
  ```

### TokenAuthentication

- Each user is assigned a token stored in the database.
- The client includes the token in the `Authorization` header for each request.
- Commonly used for APIs serving mobile or third-party clients.
- **Setup**:

  1. Install `djangorestframework` if not already installed:
     ```bash
     pip install djangorestframework
     ```
  2. Add `rest_framework.authtoken` to `INSTALLED_APPS`.
  3. Migrate the database:
     ```bash
     python manage.py migrate
     ```
  4. Generate tokens for users:

     ```python
     from rest_framework.authtoken.models import Token
     from django.contrib.auth.models import User

     user = User.objects.get(username='username')
     token, created = Token.objects.get_or_create(user=user)
     print(token.key)
     ```

  - **Example Configuration**:
    ```python
    REST_FRAMEWORK = {
        'DEFAULT_AUTHENTICATION_CLASSES': [
            'rest_framework.authentication.TokenAuthentication',
        ],
    }
    ```

### RemoteUserAuthentication

- Integrates with Django’s `RemoteUserBackend`.
- Suitable for environments with external authentication systems like Apache or Nginx.

## Built-in Authentication Methods in DRF

DRF supports several built-in authentication methods, each suited for different scenarios. Here's a summary:

| **Authentication Method** | **Description**                                                             | **Use Case**                                                          | **Pros**                               | **Cons**                                                               |
| ------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------- | ---------------------------------------------------------------------- |
| **BasicAuthentication**   | Uses HTTP Basic Auth; credentials sent as Base64-encoded username/password. | Suitable for testing or internal use.                                 | Simple to use.                         | Insecure unless used with HTTPS; sends credentials with every request. |
| **SessionAuthentication** | Uses Django's session framework to authenticate requests.                   | Browser-based clients interacting with the API.                       | Integrates with Django's login system. | Not ideal for mobile or third-party clients; depends on cookies.       |
| **TokenAuthentication**   | Clients send a token in the `Authorization` header for every request.       | APIs for mobile apps or third-party services.                         | Stateless; easy to implement.          | Requires token management; revoking tokens requires custom logic.      |
| **JWT Authentication**    | Stateless authentication using JSON Web Tokens (JWTs).                      | Secure, scalable APIs for distributed systems and stateless services. | Stateless; compact and secure.         | Expiry requires refresh tokens; slightly complex setup.                |
| **Custom Authentication** | Allows developers to define their own authentication logic.                 | Unique or non-standard authentication requirements.                   | Flexible and can match any scenario.   | Requires custom implementation and thorough testing.                   |

## Custom Authentication Class

For unique authentication requirements, DRF allows developers to create custom classes.

### Example

```python
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

class CustomAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_token = request.headers.get('X-Custom-Token')
        if not auth_token or auth_token != "secure_token":
            raise AuthenticationFailed("Invalid or missing token.")

        user = User.objects.get(username="custom_user")
        return (user, None)
```

### Usage

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'myapp.authentication.CustomAuthentication',
    ],
}
```

## Detailed Examples

### BasicAuthentication

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
    ],
}
```

**Usage**: Sends `Authorization: Basic <Base64(username:password)>`.

### SessionAuthentication

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
}
```

**Usage**: Relies on Django session cookies. Users must log in via Django’s authentication system.

### TokenAuthentication

1. **Setup**:

   ```bash
   pip install djangorestframework
   python manage.py migrate
   ```

   Add `rest_framework.authtoken` to `INSTALLED_APPS`.

2. **Generate Tokens**:

   ```python
   from rest_framework.authtoken.models import Token
   from django.contrib.auth.models import User

   user = User.objects.get(username='username')
   token, created = Token.objects.get_or_create(user=user)
   print(token.key)
   ```

3. **Configuration**:

   ```python
   REST_FRAMEWORK = {
       'DEFAULT_AUTHENTICATION_CLASSES': [
           'rest_framework.authentication.TokenAuthentication',
       ],
   }
   ```

4. **Usage**:
   ```bash
   curl -X GET http://localhost:8000/protected/ \
        -H "Authorization: Token your_token_here"
   ```

### JWT Authentication

JSON Web Tokens (JWTs) are a compact, self-contained way to transmit information securely. They are commonly used for stateless authentication in APIs.

1. **Setup**:
   Install the library:

   ```bash
   pip install djangorestframework-simplejwt
   ```

2. **Configuration**:
   Add `JWTAuthentication` to your settings:

   ```python
   REST_FRAMEWORK = {
       'DEFAULT_AUTHENTICATION_CLASSES': [
           'rest_framework_simplejwt.authentication.JWTAuthentication',
       ],
   }
   ```

3. **Add Token Views**:
   DRF SimpleJWT provides views for token generation and refresh.

   ```python
   from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
   from django.urls import path

   urlpatterns = [
       path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
       path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   ]
   ```

4. **Client Request Example**:
   Obtain a token:

   ```bash
   curl -X POST http://localhost:8000/api/token/ \
        -H "Content-Type: application/json" \
        -d '{"username": "your_username", "password": "your_password"}'
   ```

   Use the token:

   ```bash
   curl -X GET http://localhost:8000/protected-endpoint/ \
        -H "Authorization: Bearer your_jwt_token_here"
   ```

## Best Practices

- Use secure authentication mechanisms (e.g., TokenAuthentication or JWT) for production APIs.
- Always use HTTPS to secure credentials during transmission.
- Avoid using `BasicAuthentication` in production.
- Rotate and invalidate tokens periodically to enhance security.
- Combine authentication with robust permission classes.
