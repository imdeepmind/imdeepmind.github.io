---
sidebar_position: 1
---

# Introduction

A **goroutine** is a lightweight, independently executing function managed by the Go runtime. Goroutines are Go’s built-in way of handling concurrency, allowing functions to run **asynchronously** and enabling many tasks to execute seemingly at the same time.

## What is a Goroutine?

A goroutine is a function that runs concurrently with other goroutines in the same program.

- They are much **cheaper** than operating system threads.
- We create them by prefixing a function call with the `go` keyword.
- Once started, a goroutine is scheduled and managed by the Go runtime, not by the operating system.

**Example:**

```go
package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from goroutine!")
}

func main() {
    go sayHello() // start goroutine
    fmt.Println("Hello from main!")
    time.Sleep(time.Second) // allow goroutine to finish
}
```

## Why Goroutines Exist

Before goroutines, developers often had to manage OS threads directly, which is:

- Resource-heavy
- Complex to coordinate
- Difficult to scale to thousands or millions of concurrent tasks

Goroutines solve this by being:

- **Lightweight** (few KB initial stack, grows dynamically)
- **Cheap to create** (can have millions in a program)
- **Scheduled in user space** (no costly kernel context switches for every scheduling decision)

## How Goroutines Work Under the Hood

Go uses its own scheduler to manage goroutines efficiently. This is based on the **G–M–P model**:

<div style={{textAlign: 'center'}}>
    ```mermaid
    graph LR
        subgraph M1["M1 (OS Thread)"]
            P1["P1 (Processor)"] -->|Runs| G1["G1 (Goroutine)"]
            P1 -->|Runs| G2["G2 (Goroutine)"]
        end
        subgraph M2["M2 (OS Thread)"]
            P2["P2 (Processor)"] -->|Runs| G3["G3 (Goroutine)"]
            P2 -->|Runs| G4["G4 (Goroutine)"]
        end
        subgraph M3["M3 (OS Thread)"]
            P3["P3 (Processor)"] -->|Runs| G5["G5 (Goroutine)"]
            P3 -->|Runs| G6["G6 (Goroutine)"]
        end
        classDef goroutine fill:#f4f4f4,stroke:#333,stroke-width:1px;
        class G1,G2,G3,G4,G5,G6 goroutine;
    ```
</div>

- **G**: Goroutine (the task)
- **M**: Machine (OS thread running goroutines)
- **P**: Processor (manages the execution context and run queue)

The scheduler maps many goroutines (`G`) to a limited number of OS threads (`M`) through processors (`P`).
By default, the number of processors is equal to the number of CPU cores (`GOMAXPROCS`).

## Lifecycle of a Goroutine

1. **Creation** — Starts when we call a function with the `go` keyword.
2. **Execution** — Runs independently, sharing the program’s memory space with other goroutines.
3. **Termination** — Ends when the function returns.
4. **Program Exit** — If `main()` finishes, all goroutines are stopped immediately.

## Key Characteristics

- **Extremely lightweight** compared to threads
- **Not tied** to any specific OS thread
- **Managed by Go runtime**, not the OS directly
- **Stacks grow and shrink** as needed
- **Can run millions** in one program without exhausting resources
