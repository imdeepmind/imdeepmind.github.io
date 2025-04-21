---
sidebar_position: 8
---

# Performance & Optimization

FastAPI is designed for **high performance**, but optimizing your application requires understanding **async/await, database interactions, caching, compression, and load testing**. Below is a **detailed breakdown** of key optimization techniques.

## Async/Await in FastAPI (`async def` vs `def`)

### When to Use `async def` vs `def`

|                        | `async def`                              | `def`                                            |
| ---------------------- | ---------------------------------------- | ------------------------------------------------ |
| **Use Case**           | I/O-bound tasks (DB calls, API requests) | CPU-bound tasks (calculations, image processing) |
| **Blocks Event Loop?** | No (yields control)                      | Yes (blocks until completion)                    |
| **Performance Impact** | Better for concurrency                   | Worse for concurrency                            |

### Example: Async vs Sync Endpoints

```python
from fastapi import FastAPI
import time

app = FastAPI()

# Async endpoint (non-blocking)
@app.get("/async-endpoint")
async def async_example():
    await some_io_task()  # Simulate DB call
    return {"message": "Async response"}

# Sync endpoint (blocking)
@app.get("/sync-endpoint")
def sync_example():
    time.sleep(1)  # Simulate CPU-bound task
    return {"message": "Sync response"}
```

**Key Takeaways**:

- Use `async def` for **I/O-bound** operations (DB, HTTP requests).
- Use `def` for **CPU-bound** tasks (but avoid long-running sync code).

## Using Async Databases (SQLAlchemy Async, Databases, etc.)

### Why Async Databases?

- Avoid **blocking the event loop** during DB queries.
- Supports **high concurrency** (e.g., 10K+ requests/sec).

### (A) SQLAlchemy Async (1.4+)

```python
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

ASYNC_DB_URL = "postgresql+asyncpg://user:password@localhost/db"
async_engine = create_async_engine(ASYNC_DB_URL)
AsyncSessionLocal = sessionmaker(async_engine, class_=AsyncSession)

@app.get("/async-db")
async def get_async_data(db: AsyncSession = Depends(AsyncSessionLocal)):
    result = await db.execute(select(User))
    return result.scalars().all()
```

### (B) `databases` Library (Simpler Async SQL)

```python
from databases import Database

database = Database("postgresql://user:password@localhost/db")

@app.on_event("startup")
async def startup():
    await database.connect()

@app.get("/databases-example")
async def read_db():
    query = "SELECT * FROM users"
    return await database.fetch_all(query)
```

**Async DB Drivers**:
| Database | Async Library |
|----------|--------------|
| PostgreSQL | `asyncpg` |
| MySQL | `aiomysql` |
| SQLite | `aiosqlite` |

## Caching Strategies (`redis`, `fastapi-cache`)

### Why Caching?

- **Reduce DB load** (cache frequent queries).
- **Speed up responses** (avoid recomputation).

### (A) Redis Caching

```python
import redis

# Sync Redis
r = redis.Redis(host="localhost", port=6379)

@app.get("/cached-data")
def get_data(key: str):
    cached = r.get(key)
    if cached:
        return {"data": cached.decode()}
    data = expensive_operation()  # Fetch from DB
    r.setex(key, 3600, data)  # Cache for 1 hour
    return {"data": data}
```

### (B) `fastapi-cache` (Automatic Caching)

```python
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache

FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")

@app.get("/auto-cached")
@cache(expire=60)  # Cache for 60 seconds
async def get_cached_data():
    return {"message": "This response is cached!"}
```

**Cache Backends**:

- **Redis** (recommended for production)
- **In-memory** (for testing)
- **Memcached** (alternative to Redis)

## Optimizing Response Time (Compression, Gzip)

### Why Compress Responses?

- **Reduces bandwidth** (faster transfers).
- **Improves perceived performance**.

### (A) Enable Gzip Middleware

```python
from fastapi.middleware.gzip import GZipMiddleware

app = FastAPI()
app.add_middleware(GZipMiddleware, minimum_size=1000)  # Compress responses >1KB
```

### (B) Manual Compression (If Needed)

```python
import gzip

@app.get("/compressed-data")
async def get_compressed_data():
    data = {"key": "value"}
    compressed = gzip.compress(json.dumps(data).encode())
    return Response(content=compressed, media_type="application/gzip")
```

**Best Practices**:

- **Avoid compressing tiny responses** (overhead > benefit).
- **Use CDN compression** (e.g., Cloudflare, AWS CloudFront).

## Load Testing with Locust or JMeter

### Why Load Test?

- Identify **bottlenecks** (DB, CPU, memory).
- Measure **max requests/sec** before failure.

### (A) Locust (Python-Based)

```python
# locustfile.py
from locust import HttpUser, task

class FastAPIUser(HttpUser):
    @task
    def load_test(self):
        self.client.get("/endpoint")
```

**Run Locust**:

```bash
locust -f locustfile.py
```

- Open `http://localhost:8089` to simulate traffic.

### (B) JMeter (Java-Based)

- **GUI-based** load testing.
- Supports **complex workflows** (e.g., login → API calls).

**Key Metrics to Monitor**:
| Metric | Target |
|--------|--------|
| **Requests/sec** | ≥1000 (for high-traffic APIs) |
| **95th % Latency** | < 600 ms |
| **Error Rate** | < 1 % |

## Summary of Optimization Techniques

| Technique        | Tools/Libraries               | Impact                          |
| ---------------- | ----------------------------- | ------------------------------- |
| **Async/Await**  | `async def`, `await`          | ⭐⭐⭐ (High concurrency)       |
| **Async DBs**    | SQLAlchemy async, `databases` | ⭐⭐⭐ (No DB bottlenecks)      |
| **Caching**      | Redis, `fastapi-cache`        | ⭐⭐ (Reduces DB load)          |
| **Compression**  | GzipMiddleware                | ⭐ (Faster transfers)           |
| **Load Testing** | Locust, JMeter                | ⭐⭐⭐ (Identifies bottlenecks) |

## Final Recommendations

1. **Always use `async def` for I/O-bound routes**.
2. **Cache aggressively** (Redis + `fastapi-cache`).
3. **Enable Gzip for JSON/HTML responses**.
4. **Load test before deployment** (simulate real traffic).
5. **Monitor performance** (Prometheus, Grafana).
