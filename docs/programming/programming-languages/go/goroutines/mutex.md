---
sidebar_position: 4
---

# Mutex

Mutexes are synchronization primitives from the `sync` package that prevent race conditions when multiple goroutines access shared data. Only one goroutine can hold the lock at a time, ensuring safe access.

## Basic Usage

Wrap shared data access in a critical section:

```go
mu.Lock()
// critical section
mu.Unlock()
```

## Example: Protecting Shared Data

### Without Mutex (race condition)

```go
package main

import (
    "fmt"
    "time"
)

var counter int

func increment() {
    counter++
}

func main() {
    for i := 0; i < 1000; i++ {
        go increment()
    }
    time.Sleep(time.Second)
    fmt.Println("Final Counter:", counter)
}

// Final counter will likely be less than 1000 due to race conditions.
```

### With Mutex (no race condition)

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

var counter int
var mu sync.Mutex

func increment() {
    mu.Lock()
    counter++
    mu.Unlock()
}

func main() {
    for i := 0; i < 1000; i++ {
        go increment()
    }
    time.Sleep(time.Second)
    fmt.Println("Final Counter:", counter)
}

// Output will always be Final Counter: 1000
```

## Best Practices

### Example: Using `defer` to Unlock

```go
func increment() {
    mu.Lock()
    defer mu.Unlock()
    counter++
}

// Ensures mutex is always unlocked, even on panic
```

## Multiple Mutexes & Deadlocks

Always lock multiple mutexes in the same order to avoid deadlocks.

```go
var mu1 sync.Mutex
var mu2 sync.Mutex

func routine1() {
    mu1.Lock()
    time.Sleep(100 * time.Millisecond)
    mu2.Lock()
    fmt.Println("Routine 1 finished")
    mu2.Unlock()
    mu1.Unlock()
}

func routine2() {
    mu2.Lock()
    time.Sleep(100 * time.Millisecond)
    mu1.Lock()
    fmt.Println("Routine 2 finished")
    mu1.Unlock()
    mu2.Unlock()
}

func main() {
    go routine1()
    go routine2()
    time.Sleep(time.Second)
}

// routine1 locks mu1 then mu2, routine2 locks mu2 then mu1: causes deadlock
```

## Mutex vs RWMutex

### Example

```go
var rw sync.RWMutex

func readData() {
    rw.RLock()
    fmt.Println("Reading data...")
    time.Sleep(100 * time.Millisecond)
    rw.RUnlock()
}

func writeData() {
    rw.Lock()
    fmt.Println("Writing data...")
    time.Sleep(100 * time.Millisecond)
    rw.Unlock()
}
```

## When to Use Mutex

We should use a Mutex when:

- We have **shared memory** accessed by multiple goroutines.
- We need to **protect data integrity**.
- Performance is more important than waiting for safe access (mutexes introduce some blocking).

We should **not** use a Mutex when:

- Each goroutine works on independent data.
- Channels or message passing fits better into the design (channels often simplify concurrency).
