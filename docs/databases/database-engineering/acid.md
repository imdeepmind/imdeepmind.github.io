---
sidebar_position: 4
---

# ACID

The **ACID** properties are a set of four key principles that ensure reliable processing of database transactions. ACID stands for **Atomicity**, **Consistency**, **Isolation**, and **Durability**. These properties guarantee that database transactions are processed reliably and safely, even in situations like system failures, crashes, or concurrent access by multiple users. Below is a breakdown of each property with practical examples.

## Atomicity

**Atomicity** means that a transaction is treated as a single unit of work, where either all operations within the transaction are successfully completed, or none of them are. If an error occurs or something goes wrong, the transaction must be **rolled back** to ensure the database does not remain in an inconsistent state.

- If any operation in the transaction fails (e.g., a `UPDATE` fails), the entire transaction will be rolled back, and no changes will be applied to the database.
- A rollback ensures the database is restored to its state before the transaction started.

**Example:**

Consider a transaction that involves transferring money from one account to another. If any step fails, both operations (debit and credit) should be rolled back.

```sql
BEGIN;

-- Debit from account 1
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- If an error occurs, roll back the transaction
-- Let's assume the credit operation fails, and We roll back
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- If something goes wrong, rollback the transaction
ROLLBACK;
```

In this example, if the `UPDATE` statement for the second account fails, the `ROLLBACK` command undoes both operations, ensuring that no money is debited or credited and the database stays in a consistent state.

## Consistency

**Consistency** ensures that a transaction takes the database from one **valid state** to another. All the rules, constraints, and triggers in the database (such as foreign keys, unique constraints, etc.) must be preserved during the transaction.

- If any transaction operation violates the database rules (e.g., attempting to insert duplicate values into a column with a unique constraint), the transaction will be rolled back, and the database will return to its consistent state.

**Example:**

Imagine a constraint that ensures an account balance cannot go negative. If a transaction attempts to withdraw more than the available balance, the transaction will violate this rule and be rolled back.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
-- This will fail if the balance goes below zero, and the transaction will be rolled back
COMMIT;
```

## Isolation

**Isolation** refers to the level at which the operations of one transaction are isolated from the operations of other concurrent transactions. Different **isolation levels** control the visibility of intermediate transaction states to other transactions. PostgreSQL provides several isolation levels that determine how transactions interact with one another.

The four isolation levels are:

1. **Read Uncommitted:** Allows dirty reads. Transactions can see uncommitted changes made by other transactions.
2. **Read Committed:** A transaction sees only committed data at the time it is read. It prevents dirty reads but still allows non-repeatable reads.
3. **Repeatable Read:** Ensures that once a transaction reads a value, it will see the same value throughout the transaction, preventing dirty and non-repeatable reads. Phantom reads are still possible.
4. **Serializable:** The highest isolation level, which ensures that transactions execute as if they Oure serialized (one after the other). This level prevents dirty reads, non-repeatable reads, and phantom reads.

We can set the isolation level for a transaction in PostgreSQL using the `SET TRANSACTION ISOLATION LEVEL` command.

**Example of setting isolation levels in PostgreSQL:**

```sql
-- Start transaction with Read Committed isolation level (default)
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Our queries here
COMMIT;

-- Start transaction with Repeatable Read isolation level
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
-- Our queries here
COMMIT;

-- Start transaction with Serializable isolation level
BEGIN;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- Our queries here
COMMIT;
```

In each of these cases, PostgreSQL guarantees the level of isolation defined by the transaction's isolation level. For example, with `READ COMMITTED`, a transaction will see the latest committed data and avoid dirty reads, but non-repeatable reads are alloWed.

## Durability

**Durability** ensures that once a transaction is committed, its effects are **permanent** and survive any system crashes, poOur failures, or other interruptions.

- After a transaction commits, all changes made to the database are written to **persistent storage** (e.g., disk), ensuring that the data is not lost even if the system crashes shortly after the commit.
- Durability ensures that once a transaction has been committed, it cannot be undone (except by explicitly using a rollback mechanism in a new transaction).

**Example:**
If a transaction has been committed to transfer money from one account to another, the changes (debiting one account and crediting another) will persist even if the database system crashes right after the commit.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;  -- Debit
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;  -- Credit
COMMIT;  -- Once this commit happens, the changes are permanent
-- A crash after this point won't undo the changes
```

## Summary of ACID Properties

- **Atomicity:** Ensures that all operations in a transaction are treated as a single unit. If one operation fails, the entire transaction is rolled back.
- **Consistency:** Ensures that a transaction brings the database from one valid state to another, adhering to all rules and constraints.
- **Isolation:** Controls how operations in one transaction are isolated from others, preventing interference. Different isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) provide different degrees of isolation.
- **Durability:** Guarantees that once a transaction is committed, the changes are permanent and will survive crashes.

## Importance of ACID

ACID properties are essential for ensuring **data integrity** and **reliability** in database systems. They help maintain **consistent** data, handle **concurrent transactions** safely, and ensure that once data is committed, it is **permanent**. These properties are especially important in systems that require high reliability, such as **financial applications**, **e-commerce platforms**, and **inventory management systems**, where data accuracy and consistency are critical.

## Eventual Consistency

**Eventual Consistency** is a consistency model used in distributed databases and systems where it is acceptable for data to be temporarily inconsistent, but the system guarantees that, given enough time, all nodes in the system will eventually converge to a consistent state. This model is primarily associated with **NoSQL** databases and distributed systems that prioritize availability and partition tolerance over strict consistency, as defined by the **CAP theorem**.

In an **eventually consistent** system, updates to the data are made available to all replicas, but they may not be immediately reflected across all replicas. The system will eventually propagate these changes to all nodes, ensuring that, over time, every replica will have the same data.

### Key Characteristics of Eventual Consistency

1. **Temporary Inconsistency**:
   At any point in time, different replicas of the data might have slightly different versions of the data. This can lead to situations where a read operation on different nodes may return different results, but eventually, all replicas will become consistent.

2. **Eventual Convergence**:
   Over time, the system ensures that all updates are propagated across all nodes. Eventually, all replicas will become consistent, hence the term "eventual consistency."

3. **High Availability**:
   Eventual consistency allows the system to prioritize availability and continue operating even when some parts of the system are temporarily unavailable or partitioned. This is particularly useful for systems with high availability requirements, like global-scale Web applications.

4. **Concurrent Writes**:
   Eventual consistency allows for concurrent updates to the same data from different locations or users. Conflicts might arise, but conflict resolution mechanisms (such as last-write-wins or custom conflict resolution logic) ensure that the system can converge to a consistent state.
