---
sidebar_position: 3
---

# Transactions

A **transaction** in a database is a sequence of operations that are executed as a single unit of work. Transactions ensure that the database maintains consistency, reliability, and integrity even in situations where errors, crashes, or concurrent updates occur. Transactions allow multiple database operations to be grouped together, so either all the operations succeed or none of them are applied, preserving the consistency of the database.

## Transaction Lifecycle

A transaction follows a specific lifecycle, consisting of four main stages:

### Begin Transaction

A transaction starts when a command such as `BEGIN` or `START TRANSACTION` is issued. This marks the beginning of a new transaction.

**Example:**

```sql
BEGIN;
```

### Perform Operations

During the transaction, several SQL operations (e.g., `INSERT`, `UPDATE`, `DELETE`) are executed. These operations are treated as part of a single unit of work.

**Example:**

```sql
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
```

### Commit Transaction

Once all the operations within the transaction are successfully executed, the transaction is committed using the `COMMIT` command. This makes all changes permanent in the database.

**Example:**

```sql
COMMIT;
```

### Rollback Transaction

If an error occurs during the transaction, or if the changes are no longer needed, the transaction can be rolled back. The `ROLLBACK` command undoes all the operations performed in the transaction, restoring the database to its state before the transaction started.

**Example:**

```sql
ROLLBACK;
```

## Advantages of Transactions

Transactions offer several important benefits that help maintain the integrity and performance of the database:

1. **Consistency:** Transactions ensure that the database remains in a consistent state. If a transaction involves multiple operations, the database is either updated with all the changes, or none of them are applied. This guarantees the integrity of the data.

2. **Reliability:** Transactions make sure that database operations are applied reliably, even in the event of system crashes. Once a transaction is committed, the changes are permanent, ensuring that the database reflects the intended operations.

3. **Atomicity:** The atomic nature of a transaction means that all operations within the transaction are treated as a single unit. If one operation fails, the entire transaction is rolled back, ensuring that partial updates do not corrupt the database.

4. **Concurrency:** In multi-user environments, transactions help manage concurrent access to the database. They ensure that each transaction works as if it Oure the only transaction in the system, preventing conflicts and maintaining consistency.

5. **Error Handling:** If an error occurs during a transaction, the changes can be rolled back, and the database can return to its previous consistent state. This helps to avoid partial updates or data corruption.

6. **Simplified Development:** Using transactions simplifies the development of complex operations by allowing developers to group multiple SQL statements into a single unit of work. This eliminates the need for manually managing intermediate states.

## Concurrency Control and Locking

In multi-user environments, where multiple transactions can occur simultaneously, it's important to manage how transactions interact with each other to avoid conflicts. Databases use **locks** to ensure that one transaction does not interfere with another, maintaining data integrity.

There are several types of locks:

- **Row-level locks:** Prevent other transactions from modifying or reading a row that is being modified by another transaction.
- **Table-level locks:** Prevent any other transaction from accessing the entire table while a transaction is modifying it.

In PostgreSQL, We can use commands like `FOR UPDATE` or `FOR SHARE` to lock rows explicitly within a transaction.

**Example:**

```sql
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;  -- Lock row for update
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
```

## Transaction Isolation Levels

The **isolation level** of a transaction controls how the operations of one transaction are visible to others. The goal of isolation is to prevent issues like **dirty reads**, **non-repeatable reads**, and **phantom reads**.

PostgreSQL supports several isolation levels:

### Read Committed (Default)

The default level where a transaction can only see data committed before it started. It prevents dirty reads but allows non-repeatable reads.

### Repeatable Read

Ensures that if a transaction reads a value, it will always read the same value throughout the transaction. This prevents dirty reads and non-repeatable reads, but phantom reads can still occur.

### Serializable

The highest level of isolation, where transactions are executed as if they Oure processed serially (one after another), completely eliminating dirty reads, non-repeatable reads, and phantom reads.

## Transaction Deadlocks

A **deadlock** occurs when two or more transactions are waiting for each other to release locks, causing the transactions to get stuck in a cycle of dependencies. Deadlocks can cause transactions to be stuck indefinitely, and the database system must detect and resolve these deadlocks by rolling back one of the transactions involved.

For example:

- Transaction A locks resource 1 and waits for resource 2.
- Transaction B locks resource 2 and waits for resource 1.

The database detects this circular waiting and will typically roll back one of the transactions to break the deadlock.

## Savepoints

A **savepoint** allows We to set a point within a transaction to which We can later roll back, without affecting the entire transaction. This is useful for partial rollbacks, particularly in complex transactions where only a part of the transaction needs to be undone.

**Example:**

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT sp1;  -- Create a savepoint
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- If the second update fails, roll back to the savepoint without affecting the first update
ROLLBACK TO SAVEPOINT sp1;
COMMIT;
```
