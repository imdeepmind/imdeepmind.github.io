---
sidebar_position: 6
---

# ORMs

FastAPI works seamlessly with various databases (SQL & NoSQL) and ORMs (Object-Relational Mappers). Below is a **detailed breakdown** of database integration, including **SQLAlchemy (sync/async), NoSQL (MongoDB, Redis), migrations (Alembic), and Pydantic ↔ ORM model conversions**.

## Connecting to Databases (SQL & NoSQL)

FastAPI is database-agnostic but commonly uses:

- **SQL Databases**: PostgreSQL, MySQL, SQLite (via SQLAlchemy, asyncpg, etc.)
- **NoSQL Databases**: MongoDB (Motor), Redis, DynamoDB, etc.

### Key Concepts

| Database Type        | Python Libraries                     | Use Case                      |
| -------------------- | ------------------------------------ | ----------------------------- |
| **SQL (Relational)** | `SQLAlchemy`, `databases`, `asyncpg` | Structured data, transactions |
| **NoSQL (Document)** | `Motor` (MongoDB), `redis-py`        | Flexible schemas, high speed  |
| **Key-Value Store**  | `redis`, `aioredis`                  | Caching, sessions             |

## SQL Databases with SQLAlchemy Core/ORM

SQLAlchemy provides two approaches:

- **Core** (Low-level SQL abstraction)
- **ORM** (High-level object mapping)

### (A) SQLAlchemy ORM Setup

```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL (SQLite example)
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# Engine & Session
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Define a model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)

# Create tables
Base.metadata.create_all(bind=engine)
```

### (B) Using the ORM in FastAPI

```python
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

app = FastAPI()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route using ORM
@app.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    return user
```

## Async SQL with SQLAlchemy + Databases

For **async support**, use:

- `databases` (for async querying)
- `asyncpg` (PostgreSQL async driver)
- `SQLAlchemy 1.4+` (supports async)

### (A) Async SQLAlchemy Setup

```python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

ASYNC_DATABASE_URL = "postgresql+asyncpg://user:password@localhost/db"

async_engine = create_async_engine(ASYNC_DATABASE_URL)
AsyncSessionLocal = sessionmaker(async_engine, class_=AsyncSession, expire_on_commit=False)
```

### (B) FastAPI Async Route

```python
from sqlalchemy.future import select

@app.get("/async-users/{user_id}")
async def read_async_user(user_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()
    return user
```

## NoSQL with MongoDB (Motor), Redis, etc

### (A) MongoDB (Motor - Async)

```python
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient  # Sync version

# Async MongoDB setup
MONGO_URI = "mongodb://localhost:27017"
async_mongo_client = AsyncIOMotorClient(MONGO_URI)
db = async_mongo_client["fastapi_db"]

# FastAPI route
@app.get("/mongo-users/{user_id}")
async def get_mongo_user(user_id: str):
    user = await db["users"].find_one({"_id": user_id})
    return user
```

### (B) Redis (Caching/Sessions)

```python
import redis

# Sync Redis
redis_client = redis.Redis(host="localhost", port=6379)

# Async Redis (aioredis)
import aioredis
async_redis = await aioredis.create_redis_pool("redis://localhost")

# FastAPI route
@app.get("/cache-data")
async def get_cached_data(key: str):
    data = await async_redis.get(key)
    return {"data": data}
```

## Database Migrations with Alembic

Alembic handles **schema migrations** (SQLAlchemy only).

### (A) Setup Alembic

1. Install:

   ```bash
   pip install alembic
   ```

2. Initialize:

   ```bash
   alembic init alembic
   ```

3. Configure `alembic.ini`:

   ```ini
   sqlalchemy.url = postgresql://user:password@localhost/db
   ```

4. Modify `env.py` (to detect models):

   ```python
   from models import Base
   target_metadata = Base.metadata
   ```

### (B) Creating & Running Migrations

```bash
# Generate a migration
alembic revision --autogenerate -m "Create users table"

# Apply migrations
alembic upgrade head
```

## Pydantic Models ↔ Database Models (ORM Pattern)

To avoid mixing **database models** with **API schemas**, use separate Pydantic models.

### (A) SQLAlchemy Model → Pydantic Model

```python
from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class UserDB(UserBase):
    id: int

    class Config:
        orm_mode = True  # Allows conversion from ORM objects
```

### (B) Using Pydantic with ORM

```python
@app.post("/users/", response_model=UserDB)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user  # Automatically converted to UserDB
```
