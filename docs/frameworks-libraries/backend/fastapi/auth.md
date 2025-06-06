---
sidebar_position: 5
---

# Authentication & Security

FastAPI provides **built-in security utilities** for implementing **authentication, authorization, and secure API communication**. Below is a detailed breakdown of key security concepts and their implementation in FastAPI.

## Introduction to OAuth2 & JWT

### OAuth2

- A **standard protocol** for authorization (not authentication, but often used for both).
- Allows third-party apps to access user data **without exposing passwords**.
- Common **OAuth2 flows**:
  - **Password Flow** (for trusted apps, requires username/password)
  - **Authorization Code Flow** (for web apps, uses redirects)
  - **Client Credentials Flow** (for machine-to-machine auth)
  - **Implicit Flow** (legacy, not recommended)

### JWT (JSON Web Tokens)

- A **compact, URL-safe** way to represent claims between parties.
- Structure:
  ```
  Header.Payload.Signature
  ```
  - **Header**: Algorithm & token type (`{"alg": "HS256", "typ": "JWT"}`)
  - **Payload**: Claims (`{"sub": "user123", "exp": 1735689600}`)
  - **Signature**: Ensures token integrity (HMAC, RSA, etc.)

**Why JWT?**

- **Stateless**: No server-side session storage.
- **Self-contained**: User info is embedded.
- **Secure**: Signed/encrypted to prevent tampering.

## Password Hashing (`bcrypt`, `passlib`)

Storing **plain-text passwords** is dangerous. Instead, use **hashing**:

- **Hashing**: One-way transformation (cannot be reversed).
- **Salting**: Adds random data to prevent rainbow table attacks.

### Using `passlib` with `bcrypt`

```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Hash a password
hashed_password = pwd_context.hash("mysecretpassword")

# Verify a password
is_valid = pwd_context.verify("mysecretpassword", hashed_password)
```

**Best Practices**:

- Always **hash passwords** before storing.
- Use **strong algorithms** (`bcrypt`, `argon2`).
- Never store **plain-text passwords**.

## OAuth2 with Password (and Hashing), Bearer with JWT Tokens

FastAPI supports **OAuth2 Password Flow** with JWT tokens.

### Step-by-Step Implementation

#### (1) Define OAuth2 Password Flow

```python
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
```

#### (2) Authenticate User & Generate JWT

```python
from datetime import datetime, timedelta
from jose import JWTError, jwt

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect credentials")
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}
```

#### (3) Protect Routes with JWT

```python
async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return username

@app.get("/protected")
async def protected_route(user: str = Depends(get_current_user)):
    return {"message": f"Hello, {user}"}
```

## JWT (JSON Web Tokens) Implementation

### Key Components

| Component        | Role                                       |
| ---------------- | ------------------------------------------ |
| **`jose`**       | Python library for JWT operations.         |
| **`SECRET_KEY`** | Used to sign tokens (keep it secret!).     |
| **`ALGORITHM`**  | `HS256` (symmetric), `RS256` (asymmetric). |
| **`exp` claim**  | Ensures token expiry.                      |

### Token Generation & Verification

```python
from jose import jwt

# Generate token
token = jwt.encode({"sub": "user123"}, SECRET_KEY, algorithm=ALGORITHM)

# Decode & verify
decoded = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
```

## Role-Based Access Control (RBAC)

Restrict routes based on **user roles**.

### Implementation

```python
from fastapi import Depends, HTTPException

def get_current_user(token: str = Depends(oauth2_scheme)):
    # Decode JWT and get user role
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    return {"username": payload["sub"], "role": payload.get("role", "user")}

def require_admin(user: dict = Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

@app.get("/admin")
def admin_dashboard(user: dict = Depends(require_admin)):
    return {"message": "Welcome, admin!"}
```

## API Key Authentication (`APIKeyHeader`, `APIKeyQuery`)

For machine-to-machine authentication.

### Using `APIKeyHeader`

```python
from fastapi.security import APIKeyHeader

api_key_header = APIKeyHeader(name="X-API-Key")

@app.get("/secure")
def secure_route(api_key: str = Depends(api_key_header)):
    if api_key != "valid-api-key":
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return {"message": "Access granted"}
```

### Using `APIKeyQuery`

```python
from fastapi.security import APIKeyQuery

api_key_query = APIKeyQuery(name="api_key")

@app.get("/secure")
def secure_route(api_key: str = Depends(api_key_query)):
    if api_key != "valid-api-key":
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return {"message": "Access granted"}
```

## CORS (Cross-Origin Resource Sharing) Middleware

Allows **cross-domain requests** (e.g., frontend ↔ backend).

### Enable CORS in FastAPI

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React/Vue app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Key Parameters**:
| Parameter | Purpose |
|-----------|---------|
| `allow_origins` | Domains allowed to make requests. |
| `allow_methods` | HTTP methods (`GET`, `POST`, etc.). |
| `allow_headers` | Headers allowed in requests. |
