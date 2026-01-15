---
sidebar_position: 2
---

# Connection Pooling

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A database connection is a **persistent communication channel** between an application and a database server.

Establishing a connection involves:

* TCP handshake
* Authentication (credentials, certificates, SSL)
* Allocating memory and worker resources on the database
* Registering a session in the database’s internal state

This makes connection creation **significantly more expensive** than executing most queries.

## Naive ways to connect to a database (and why they fail)

### One connection per request

```text
Request arrives
→ Open database connection
→ Execute query
→ Close connection
→ Send response
```

<div style={{textAlign: 'center'}}>

```mermaid
sequenceDiagram
    participant Client
    participant App
    participant DB

    Client->>App: HTTP Request
    App->>DB: Open Connection
    App->>DB: Execute Query
    App->>DB: Close Connection
    App->>Client: Response
```

</div>

#### Why this approach fails

* Connection setup dominates request latency
* High CPU and memory usage on the database
* Connection storms during traffic spikes
* Poor scalability beyond low traffic

This model is acceptable only for scripts or extremely low-load systems.

### Single shared global connection

```text
Create one DB connection
Reuse it for all requests
```

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    R1[Request 1]
    R2[Request 2]
    R3[Request 3]
    Conn[(Single DB Connection)]
    DB[(Database)]

    R1 --> Conn
    R2 --> Conn
    R3 --> Conn
    Conn --> DB
```

</div>

#### Why this approach fails

* No real concurrency
* Thread safety issues
* One broken connection breaks the entire system

## Core idea of connection pooling

**Connection pooling** means:

> Maintain a fixed number of pre-opened database connections and reuse them across requests.

Connections are **borrowed**, not created or destroyed per request.

## How connection pooling works internally

### Pool initialization

At application startup:

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    App[Application Start]
    Pool[Connection Pool]
    C1[(Conn 1)]
    C2[(Conn 2)]
    C3[(Conn 3)]
    DB[(Database)]

    App --> Pool
    Pool --> C1 --> DB
    Pool --> C2 --> DB
    Pool --> C3 --> DB
```

</div>

* Connections are created once
* Stored in an idle state
* Kept alive for reuse

### Request lifecycle with pooling

<div style={{textAlign: 'center'}}>

```mermaid
sequenceDiagram
    participant Client
    participant App
    participant Pool
    participant DB

    Client->>App: Request
    App->>Pool: Borrow connection
    Pool-->>App: Connection
    App->>DB: Execute query
    DB->>App: Query Response
    App->>Pool: Return connection
    App->>Client: Response
```

</div>

Key rule:

* **Connections must always be returned to the pool**

### Pool exhaustion and waiting

When all connections are busy:

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Req[Incoming Request]
    Pool["Connection Pool\n(All Busy)"]
    Wait[Wait / Queue]
    DB[(Database)]

    Req --> Pool
    Pool --> Wait
    Wait --> Pool
    Pool --> DB
```

</div>

This introduces **backpressure**, protecting the database.

## Key characteristics of a connection pool

### Pool size

The pool enforces a maximum number of concurrent database connections.

* Small pool → higher wait times
* Large pool → database overload

The pool size is a **control knob**, not a performance booster.

### Connection reuse

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Req1[Request A]
    Req2[Request B]
    Req3[Request C]
    Conn[(Reusable Connection)]

    Req1 --> Conn
    Req2 --> Conn
    Req3 --> Conn
```

</div>

The same connection serves many requests over time, amortizing setup costs.

## Advantages of connection pooling over other approaches

### Performance advantage

Compared to per-request connections:

<div style={{textAlign: 'center'}}>

```mermaid
flowchart TB
    A[Per-request connections]
    B[Connection pooling]

    A -->|Repeated setup| Slow[High Latency]
    B -->|Reuse connections| Fast[Low Latency]
```

</div>

Pooling removes repeated connection overhead from the critical path.

### Scalability advantage

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Threads[Many App Threads]
    Pool[Few DB Connections]
    DB[(Database)]

    Threads --> Pool --> DB
```

</div>

* Application concurrency ≠ database concurrency
* Pool acts as a **gatekeeper**

### Database protection

From the database’s perspective:

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    App[Application]
    Pool[Connection Pool]
    DB[(Database)]

    App --> Pool
    Pool -->|Limited| DB
```

</div>

The pool:

* Prevents connection floods
* Keeps resource usage stable
* Improves predictability under load

### Resource efficiency

Without pooling:

* Constant connection creation/destruction
* High CPU and memory churn

With pooling:

* Long-lived connections
* Better cache and worker reuse

### Fault tolerance

Pools can:

* Detect broken connections
* Replace them automatically
* Retry safely

This logic is centralized instead of duplicated across application code.

## Connection pooling vs concurrency (important distinction)

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Threads[100 Threads]
    Pool[10 DB Connections]
    DB[(Database)]

    Threads --> Pool --> DB
```

</div>

* Many threads can exist
* Only limited DB access is allowed
* Excess work waits instead of crashing the database

This is **intentional system design**, not a bottleneck.

## Common production failure modes

### Connection leaks

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Pool[Connection Pool]
    Leak[Borrowed and Not Returned]
    Exhausted[Pool Exhausted]

    Pool --> Leak --> Exhausted
```

</div>

Result:

* Requests hang
* System degrades over time

### Oversized pools

<div style={{textAlign: 'center'}}>

```mermaid
flowchart LR
    Pool[Huge Pool]
    DB[(Database)]
    Slow[High Latency]

    Pool --> DB --> Slow
```

</div>

More connections increase contention and reduce performance.

### Long-running transactions

Connections held too long reduce pool availability and cause cascading delays.

## Real-world implementations

Connection pooling is built into most ecosystems:

* Java → HikariCP
* Python → SQLAlchemy / Django
* Go → `database/sql`
* Node.js → driver-level pools

Different APIs, same underlying model.
