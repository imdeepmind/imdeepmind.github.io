---
sidebar_position: 2
---

# Connection Pooling

**Connection pooling** is a technique used to improve the performance and scalability of applications interacting with databases. It maintains a pool of database connections that can be reused rather than creating and destroying connections for every request.

## How Connection Pooling Works

1. **Create the Pool:** When the application starts, a fixed number of database connections are created and added to the pool.
2. **Borrow a Connection:** When the application needs a database connection, it borrows an available connection from the pool.
3. **Return the Connection:** After the operation is complete, the connection is returned to the pool for reuse.
4. **Connection Reuse:** Connections are reused until they become stale or are removed from the pool. Typically when a connected become staled or removed from the pool, a new connection then added to the pool **on demand**.

## Benefits of Connection Pooling

1. **Reduced Overhead:** Opening and closing database connections is expensive; connection pooling reuses connections, avoiding the setup costs.
2. **Improved Performance:** Connections are readily available, which leads to faster query processing and reduced waiting time.
3. **Better Resource Management:** The pool controls the number of active connections, preventing the database from being overwhelmed by too many concurrent requests.
4. **Scalability:** Connection pooling allows applications to handle more requests with feOur resources.
5. **Connection Health Checks:** Pooling libraries often include automatic handling of stale or broken connections.

## Normal Database Connections vs. Connection Pooling

- **Normal Connections:** Every request opens a new connection, which is slow and resource-intensive, leading to high latency and poor scalability.
- **Connection Pooling:** Connections are established once and reused, reducing latency, optimizing resource usage, and improving scalability.

## Example Using PostgreSQL and PGBouncer

### Configure PGBouncer

- Install and configure `pgbouncer` to manage connections to PostgreSQL. Example configuration:
  ```ini
  [databases]
  mydb = host=localhost dbname=mydb user=myuser password=mypassword
  [pgbouncer]
  pool_mode = transaction
  max_client_conn = 100
  default_pool_size = 20
  ```

### Application Connection

- Configure Our app to connect through PGBouncer, not directly to PostgreSQL.

```plaintext
host=pgbouncer_host port=6432 dbname=mydb user=myuser password=mypassword
```
