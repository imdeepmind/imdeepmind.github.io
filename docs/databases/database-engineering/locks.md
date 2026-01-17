---
sidebar_position: 5
---

# Database Locking

In multi-user database systems, multiple transactions execute concurrently to maximize throughput and resource utilization. Locks exist to **coordinate concurrent access to shared data** so that correctness is preserved. Without locks, concurrent reads and writes could corrupt data or expose inconsistent intermediate states.

Locks primarily protect against the following anomalies:

- **Lost updates** – one transaction overwrites another’s changes
- **Dirty reads** – reading uncommitted data
- **Non-repeatable reads** – re-reading yields different results
- **Phantom reads** – new rows appear between reads

Conceptually, a lock is a **contract** between a transaction and the database engine that grants controlled access to a data item.

## Concurrency Control Overview

Concurrency control ensures that the outcome of concurrent execution is equivalent to some serial execution (serializability).

Two dominant approaches:

1. **Lock-based concurrency control**

   - Transactions acquire locks before accessing data
   - Conflicts are resolved by blocking or aborting transactions

2. **Optimistic / MVCC-based concurrency control**

   - Readers do not block writers
   - Conflicts are detected at commit time

Locks are still essential even in MVCC systems for:

- Writes
- Schema changes
- Certain isolation guarantees

## ACID Properties Relation

Locks are primarily tied to **Isolation** and **Consistency**, but they indirectly support all ACID properties.

| ACID Property | Role of Locks                                |
| ------------- | -------------------------------------------- |
| Atomicity     | Prevents partial visibility of changes       |
| Consistency   | Enforces integrity during concurrent updates |
| Isolation     | Core purpose of locks                        |
| Durability    | Locks ensure committed state is well-defined |

Isolation levels (Read Committed, Repeatable Read, Serializable) determine **how aggressively locks are used**.

## Transactions and Lock Scope

Locks are scoped to:

- A **transaction** (released on commit/rollback)
- A **statement** (statement-level locks)

Scope dimensions:

- Object scope: row, page, table, database
- Time scope: short-lived vs long-lived

Long-running transactions dramatically increase lock contention and risk of blocking.

## Lock Granularity

Lock granularity defines **how much data a lock protects**.

### Database Level

- Locks the entire database
- Rare, usually for maintenance operations
- Highest contention, lowest overhead

Use cases:

- Backup
- Restore
- Global configuration changes

### Table Level

- Locks the entire table
- Common for DDL and bulk operations

Pros:

- Simple
- Low lock manager overhead

Cons:

- Poor concurrency

### Page Level

- Locks a fixed-size block (page) of data
- Balance between concurrency and overhead

Often used internally by storage engines where row-level locks are too expensive.

### Row Level

- Locks individual rows
- Highest concurrency
- Highest lock bookkeeping cost

Used heavily in OLTP systems.

#### Granularity Hierarchy

<div style={{textAlign: 'center'}}>

```mermaid
graph TD
    DB[Database Lock]
    T[Table Lock]
    P[Page Lock]
    R[Row Lock]

    DB --> T
    T --> P
    P --> R
```

</div>

## Lock Types and Modes

### Shared Locks (S)

- Allows multiple readers
- Prevents writers

Used for SELECT queries under stronger isolation levels.

### Exclusive Locks (X)

- Allows a single writer
- Blocks all other access

Required for UPDATE, DELETE, INSERT.

### Intent Locks

Intent locks signal **future locking intentions** at a finer granularity.

Examples:

- IS (Intent Shared)
- IX (Intent Exclusive)

They enable efficient multi-granularity locking.

<div style={{textAlign: 'center'}}>

```mermaid
graph LR
    T[Table]
    R1[Row 1]
    R2[Row 2]

    T -->|IX| R1
    T -->|IX| R2
```

</div>

### Update Locks (U)

Used to avoid deadlocks during read-modify-write cycles.

Behavior:

- Initially behaves like Shared
- Converts to Exclusive when update happens

Common in SQL Server–style engines.

### Schema Locks

Protect database metadata.

Types:

- Schema Stability (allows queries)
- Schema Modification (blocks everything)

DDL statements rely heavily on schema locks.

## Lock Compatibility

### Compatibility Matrix

| Requested \ Held | S   | X   | IS  | IX  |
| ---------------- | --- | --- | --- | --- |
| S                | ✓   | ✗   | ✓   | ✗   |
| X                | ✗   | ✗   | ✗   | ✗   |
| IS               | ✓   | ✗   | ✓   | ✓   |
| IX               | ✗   | ✗   | ✓   | ✓   |

### Lock Acquisition Rules

- Stronger locks cannot be granted if weaker incompatible locks exist
- Upgrades must re-check compatibility

Lock upgrade is a frequent source of deadlocks.

### Multi-Granularity Locking

Transactions lock higher-level objects with intent locks before locking finer objects.

<div style={{textAlign: 'center'}}>

```mermaid
sequenceDiagram
    participant Tx as Transaction
    participant T as Table
    participant R as Row

    Tx->>T: Acquire IX
    Tx->>R: Acquire X
```

</div>

## Acquisition Strategies

### Two-Phase Locking (2PL)

Phases:

1. Growing – acquire locks
2. Shrinking – release locks

Guarantees serializability.

Strict 2PL releases locks only at commit.

### Three-Phase Locking (3PL)

Adds an intermediate phase to avoid blocking anomalies.

Rarely used in real systems due to complexity.

### Lock Escalation

Automatic promotion of many fine-grained locks into a coarser lock.

Trade-off:

- Reduced overhead
- Reduced concurrency

### Deadlock Prevention

Common strategies:

- Timeout-based abort
- Wait-die
- Wound-wait

Each balances fairness and throughput differently.

## Lock Management

### Acquisition and Release

Locks are:

- Acquired on demand
- Released at commit/rollback or earlier

Incorrect release timing breaks isolation.

### Lock Timeouts

Transactions waiting beyond a threshold are aborted.

Prevents infinite waits but may abort valid transactions.

### Lock Waiting Queues

Blocked transactions wait in queues per lock object.

<div style={{textAlign: 'center'}}>

```mermaid
graph TD
    L[Lock]
    T1[Tx1 Holding]
    T2[Tx2 Waiting]
    T3[Tx3 Waiting]

    T1 --> L
    T2 --> L
    T3 --> L
```

</div>

### Lock Monitoring Queries

Databases expose system views to inspect:

- Current locks
- Waiting transactions
- Blocking chains

Essential for debugging production issues.

## Problems and Solutions

### Blocking Transactions

Occurs when incompatible locks collide.

Mitigation:

- Short transactions
- Proper indexing

### Deadlocks (Detection/Resolution)

Circular wait condition.

<div style={{textAlign: 'center'}}>

```mermaid
graph LR
    T1 -->|waits| T2
    T2 -->|waits| T1
```

</div>

Resolved by aborting one participant.

### Livelocks

Transactions repeatedly abort and retry without progress.

Solved via backoff or priority adjustments.

### Starvation

Low-priority transactions never acquire locks.

Solved via fairness policies.

## PostgreSQL Implementation

### MVCC Integration

PostgreSQL uses MVCC, so:

- Reads do not block writes
- Writes still require locks

Locks coordinate visibility and structural safety.

### Lock Modes (AccessShare to AccessExclusive)

Ordered from weakest to strongest:

- AccessShare (SELECT)
- RowShare
- RowExclusive
- ShareUpdateExclusive
- Share
- ShareRowExclusive
- Exclusive
- AccessExclusive (DDL)

### pg_locks System View

Provides visibility into:

- Lock type
- Lock mode
- Granted vs waiting

Critical for diagnosing contention.

### Explicit Locking Commands

```sql
LOCK TABLE users IN ACCESS EXCLUSIVE MODE;
```

Used sparingly for critical sections.

## PostgreSQL Internals

### LockManager Architecture

Centralized lock manager per instance.

### Hash Table Storage

Locks stored in shared memory hash tables keyed by object ID.

### Lightweight Locks

Protect internal data structures.

- Very fast
- Not user-visible

### Advisory Locks

Application-defined locks.

- Not tied to table rows
- Used for coordination

### Wait Graph Analysis

Deadlock detector builds wait-for graphs periodically.

### Backend Lock Handling

Each backend process:

- Requests locks
- Sleeps when blocked
- Wakes on release

## Advanced Topics

### Predicate vs Key-Range Locks

Predicate locks protect logical conditions.
Key-range locks protect physical index ranges.

Serializable isolation relies on these.

### Lock-Free Alternatives

Optimistic concurrency control.

Used when conflicts are rare.

### Distributed Locks

Required in distributed systems.

Challenges:

- Clock skew
- Network partitions

Examples:

- ZooKeeper
- etcd
- Redis Redlock

### Performance Tuning

Best practices:

- Keep transactions short
- Index properly
- Avoid unnecessary explicit locks
- Monitor lock contention continuously
