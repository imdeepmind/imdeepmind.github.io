---
sidebar_position: 14
---

# Documentation

API documentation is essential for describing the functionality, endpoints, and usage of an API to developers and consumers. Django Rest Framework (DRF) provides built-in tools for generating API documentation, and there are several third-party libraries for more advanced features and customization.

## DRF’s Built-in Documentation

DRF includes schema generation tools that can automatically generate OpenAPI or CoreAPI schemas, which are foundational for API documentation.

### Schema Generation

1. **Using the Built-in Schema Generator**:
   DRF provides a schema generation framework via `SchemaGenerator`:

   - It creates an OpenAPI specification for the API.
   - Integrates seamlessly with DRF views, serializers, and permissions.

2. **Adding Schema Views**:
   Add a schema view to expose the API schema:

   ```python
   from rest_framework.schemas import get_schema_view
   from django.urls import path

   schema_view = get_schema_view(title="My API")

   urlpatterns = [
       path('schema/', schema_view),
   ]
   ```

3. **Customizing the Schema**:
   Customize the schema generation by specifying:

   - **Title**
   - **Description**
   - **Version**

   ```python
   schema_view = get_schema_view(
       title="My API",
       description="API documentation for My API",
       version="1.0.0"
   )
   ```

### Built-in Browsable API

DRF’s browsable API provides interactive documentation by default, allowing developers to:

- Explore endpoints.
- Test API responses.
- View input fields and required data.

The browsable API is enabled by the `BrowsableAPIRenderer` in the `DEFAULT_RENDERER_CLASSES` setting.

### Example of Built-in Schema

The schema endpoint (`/schema/`) returns an OpenAPI-compliant specification, which can be used with tools like Swagger or Postman.

## Third-party Tools for Documentation

For more advanced and interactive API documentation, DRF integrates with third-party libraries such as **drf-yasg** and **django-rest-swagger**.

### a. drf-yasg (Yet Another Swagger Generator)

**drf-yasg** is a powerful library for generating Swagger/OpenAPI documentation.

**Installation**:

```bash
pip install drf-yasg
```

**Basic Setup**:
Add a schema view for Swagger and ReDoc documentation:

```python
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny
from django.urls import path

schema_view = get_schema_view(
    openapi.Info(
        title="My API",
        default_version='v1',
        description="API documentation for My API",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="contact@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
```

**Features of drf-yasg**:

- **Interactive Swagger UI**: Provides a user-friendly interface to test endpoints.
- **ReDoc Integration**: Generates clean, responsive documentation.
- **Customizable**: Supports overriding default schemas, descriptions, and parameters.

**Customizing Endpoint Metadata**:
Use `@swagger_auto_schema` to customize schema details:

```python
from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class MyAPIView(APIView):
    @swagger_auto_schema(
        operation_description="Retrieve data from the API",
        responses={200: "Success", 400: "Bad Request"}
    )
    def get(self, request):
        return Response({"message": "Success"}, status=status.HTTP_200_OK)
```

### b. django-rest-swagger

`django-rest-swagger` was an earlier library for generating Swagger documentation. However, it is now deprecated in favor of **drf-yasg**. For legacy projects, it provides basic Swagger UI integration.

**Installation**:

```bash
pip install django-rest-swagger
```

**Setup**:

```python
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title="My API")

urlpatterns = [
    path('swagger/', schema_view),
]
```

## Comparison of Documentation Tools

| Feature                 | Built-in DRF Schema | drf-yasg              | django-rest-swagger  |
| ----------------------- | ------------------- | --------------------- | -------------------- |
| Schema Type             | OpenAPI             | OpenAPI               | Swagger (deprecated) |
| Interactive UI          | No                  | Yes (Swagger & ReDoc) | Yes                  |
| Customization           | Limited             | Highly customizable   | Limited              |
| Support for Annotations | No                  | Yes                   | No                   |
| Maintenance             | Actively supported  | Actively supported    | Deprecated           |

## Best Practices for API Documentation

1. **Keep Documentation Updated**:

   - Use tools like `drf-yasg` to auto-generate documentation based on code.
   - Regularly review and update descriptions, examples, and details.

2. **Write Detailed Descriptions**:

   - Provide clear, concise descriptions for endpoints, parameters, and responses.
   - Include error scenarios and HTTP status codes.

3. **Use Examples**:

   - Show example requests and responses for clarity.
   - Include edge cases and common use cases.

4. **Customize Where Needed**:

   - Use custom schema overrides for non-standard endpoints.
   - Add human-readable descriptions for developers.

5. **Host Documentation**:

   - Expose Swagger or ReDoc documentation at a `/docs/` endpoint.
   - Protect documentation with authentication if necessary for private APIs.

6. **Automate Generation**:
   - Integrate schema generation and validation into the CI/CD pipeline.
