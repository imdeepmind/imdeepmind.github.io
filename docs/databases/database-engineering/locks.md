---
sidebar_position: 5
---

# Database Locking

Database locking is a mechanism that ensures **data consistency** and **integrity** when multiple transactions access the database concurrently. Locks prevent conflicting operations from being executed simultaneously, ensuring that operations comply with ACID (Atomicity, Consistency, Isolation, Durability) principles.

## What Do Shared and Exclusive Locks Mean?

### Shared Lock (S-Lock)

- A shared lock allows **multiple transactions to read** the same data concurrently but prevents any transaction from **modifying** the data until all shared locks are released.
- Shared locks ensure **read consistency** but block write operations.

**Example:**

```sql
BEGIN;
SELECT * FROM employees WHERE id = 1 FOR SHARE;
-- This transaction can read the row, but no other transaction can modify it.
COMMIT;
```

### Exclusive Lock (X-Lock)

- An exclusive lock allows **only one transaction to modify** the data.
- It blocks all other transactions, including both **read** and **write**, until the lock is released.
- Exclusive locks are critical for maintaining data integrity during update operations.

**Example:**

```sql
BEGIN;
UPDATE employees SET salary = salary + 500 WHERE id = 1;
-- This transaction locks the row, preventing any other transaction from reading or writing to it.
COMMIT;
```

## Lock Types in PostgreSQL

PostgreSQL provides various locks to handle concurrent access effectively. Key lock types include:

### Row-Level Locks

- Lock individual rows to reduce contention and maximize concurrency.
- Used in operations like `SELECT ... FOR SHARE` or `SELECT ... FOR UPDATE`.
- `FOR SHARE` is a shared lock, so reads are alloWed.
- `FOR UPDATE` is exclusive lock, so reads and write are **NOT** alloWed.

**Example:**

```sql
BEGIN;
SELECT * FROM employees WHERE id = 1 FOR UPDATE;
-- Locks only the row with id = 1, allowing other rows to be accessed concurrently.
COMMIT;
```

### Table-Level Locks

- Lock the entire table for operations affecting all rows or for schema modifications.
- Example: Acquired during `TRUNCATE` or `ALTER TABLE`.

**Example:**

```sql
BEGIN;
LOCK TABLE employees IN ACCESS EXCLUSIVE MODE;
-- Blocks all access to the table until the transaction is complete.
COMMIT;
```

### Advisory Locks

- Custom, application-controlled locks that allow developers to implement business-specific locking logic.
- Advisory locks are not enforced by the database engine.

**Example: Complete Usage of Advisory Locks:**

Imagine a scenario where multiple workers process tasks from a shared `tasks` table. Each worker should only process a task that is not being handled by another worker.

```sql
-- Worker 1
BEGIN;

-- Try to acquire an advisory lock on the task ID (e.g., ID = 101)
SELECT pg_try_advisory_lock(101) AS lock_acquired;

-- Check if the lock was acquired
-- If lock_acquired is true, process the task
UPDATE tasks
SET status = 'in_progress'
WHERE id = 101 AND status = 'pending';

-- Task processing logic here...

-- Release the advisory lock after processing
SELECT pg_advisory_unlock(101);

COMMIT;
```

**Explanation:**

- `pg_try_advisory_lock` tries to acquire a lock without blocking. If the lock is already held, it does not wait.
- Once the lock is acquired, the worker updates the task's status and begins processing.
- After completing the task, the worker releases the advisory lock with `pg_advisory_unlock`.

This ensures that no two workers process the same task simultaneously.

## Deadlocks

A **deadlock** occurs when two or more transactions block each other by holding locks and waiting for resources locked by the other transactions. PostgreSQL automatically detects deadlocks and resolves them by aborting one of the transactions.

**Example:**

```sql
-- Transaction 1
BEGIN;
UPDATE employees SET salary = salary + 500 WHERE id = 1;

-- Transaction 2
BEGIN;
UPDATE employees SET salary = salary + 500 WHERE id = 2;

-- Transaction 1 tries to lock row 2
UPDATE employees SET salary = salary + 500 WHERE id = 2;

-- Transaction 2 tries to lock row 1, causing a deadlock
UPDATE employees SET salary = salary + 500 WHERE id = 1;
```

In this case, PostgreSQL will abort one of the transactions to resolve the deadlock.

## How Databases Handle Locked Rows

When a transaction attempts to access a row that is already locked by another transaction, databases use different strategies to handle the conflict:

### Blocking Until the Lock Is Released

- By default, PostgreSQL waits for the lock to be released.
- The waiting transaction is blocked but remains in the queue to acquire the lock.
- We can also have a timeout to fail the transaction after a certain period.
- For timeout, We can use the `lock_timeout` to set timeout.

**Example:**

```sql
BEGIN;
SET lock_timeout = '5s';  -- Set the lock acquisition timeout to 5 seconds.

SELECT * FROM employees WHERE id = 1 FOR UPDATE;
-- Another transaction attempting the same lock will wait until this transaction is committed or rolled back.
COMMIT;
```

### NOWAIT

- If the row is locked, the transaction **fails immediately** with an error instead of waiting for the lock to be released.
- Useful for applications where blocking is unacceptable.

**Example:**

```sql
BEGIN;
SELECT * FROM employees WHERE id = 1 FOR UPDATE NOWAIT;
-- If the row is already locked, this query fails with an error.
COMMIT;
```

### SKIP LOCKED

- If a row is locked, the query **skips the locked rows** and processes only the unlocked rows.
- Useful for task queues where workers can skip locked tasks and process available ones.

**Example:**

```sql
BEGIN;
SELECT * FROM tasks WHERE status = 'pending' FOR UPDATE SKIP LOCKED;
-- Processes only unlocked rows, ignoring locked rows.
COMMIT;
```

## Transaction Isolation Levels and Locking

PostgreSQL supports four standard isolation levels that define how transactions interact with locks:

### Read Uncommitted

- No locking; allows dirty reads.
- Rarely used in PostgreSQL.

### Read Committed

- Ensures no dirty reads by acquiring shared or exclusive locks as needed.
- Default isolation level in PostgreSQL.

**Example:**

```sql
BEGIN;
UPDATE employees SET salary = salary + 500 WHERE id = 1;
-- Other transactions cannot read or modify the locked row until committed.
COMMIT;
```

### Repeatable Read

- Prevents non-repeatable reads by locking all rows read during a transaction.
- Ensures consistent results for all queries within the transaction.

**Example:**

```sql
BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT * FROM employees WHERE department = 'Sales';
-- Ensures no other transaction can modify these rows until committed.
COMMIT;
```

### Serializable

- The strictest isolation level, ensuring transactions appear to execute serially.
- May block or fail transactions to maintain serializability.

## Best Practices

### Keep Transactions Short

- Minimize transaction duration to reduce lock contention.

### Use Appropriate Isolation Levels

- Choose the least restrictive isolation level that satisfies Our requirements.

### Indexing

- Proper indexing reduces the number of rows locked during queries, improving concurrency.

### Handle Deadlocks Gracefully

- Design transactions to access resources in a consistent order to avoid deadlocks.

### Monitor Locks

- Use PostgreSQL system views like `pg_locks` to monitor and troubleshoot locks.

**Example:**

```sql
SELECT * FROM pg_locks;
```
