---
sidebar_position: 2
---

# Channels

A channel is a typed conduit through which we can send and receive values between goroutines. Channels are first-class objects in Go and are managed by the Go runtime.

- Channels are created using the `make` function.
- They are strongly typed (e.g., `chan int`, `chan string`).
- Channels can be buffered or unbuffered.

## Why Use Channels?

Channels help coordinate work between goroutines, allowing them to communicate safely without explicit locks or shared memory. This makes concurrent code easier to reason about and less prone to race conditions.

## Basic Channel Operations

- **Send:** `ch <- value` sends a value to the channel.
- **Receive:** `value := <-ch` receives a value from the channel.
- **Close:** `close(ch)` closes the channel, signaling no more values will be sent.

## Example: Basic Channel Usage

```go
package main

import "fmt"

func main() {
    ch := make(chan int)
    go func() {
        ch <- 42 // send value
    }()
    val := <-ch // receive value
    fmt.Println(val) // Output: 42
}
```

## Buffered vs Unbuffered Channels

Channels in Go can be either buffered or unbuffered, and understanding their behavior is crucial for designing correct concurrent programs.

### Unbuffered Channels

- **Definition:** An unbuffered channel has no capacity to store values. Every send (`ch <- value`) will block until another goroutine is ready to receive (`<-ch`), and vice versa.
- **Use Case:** Synchronization between goroutines. Ensures that both sender and receiver are ready at the same time.

#### Example: Unbuffered Channel for Synchronization

```go
package main

import (
    "fmt"
    "time"
)

func worker(done chan bool) {
    fmt.Println("Working...")
    time.Sleep(time.Second)
    fmt.Println("Done")
    done <- true // signal completion
}

func main() {
    done := make(chan bool) // unbuffered channel
    go worker(done)
    <-done // wait for worker to finish
    fmt.Println("Main exits")
}
```

**Explanation:**

- The main goroutine waits for the worker to signal completion. The send and receive must happen at the same time, ensuring synchronization.

### Buffered Channels

- **Definition:** A buffered channel has a fixed capacity. Sends to the channel only block when the buffer is full; receives only block when the buffer is empty.
- **Use Case:** Decoupling sender and receiver, rate limiting, producer-consumer patterns.

#### Example: Buffered Channel for Producer-Consumer

```go
package main

import (
    "fmt"
    "time"
)

func producer(ch chan int) {
    for i := 1; i <= 5; i++ {
        fmt.Printf("Producing %d\n", i)
        ch <- i // will block only if buffer is full
        time.Sleep(200 * time.Millisecond)
    }
    close(ch)
}

func consumer(ch chan int) {
    for v := range ch {
        fmt.Printf("Consuming %d\n", v)
        time.Sleep(500 * time.Millisecond)
    }
}

func main() {
    ch := make(chan int, 2) // buffered channel with capacity 2
    go producer(ch)
    consumer(ch)
    fmt.Println("All done!")
}
```

**Explanation:**

- The producer can send up to 2 values before blocking, even if the consumer is not ready. This allows for some decoupling between producer and consumer speeds.

### When to Use Each

- **Unbuffered channels** are best for direct handoff and synchronization between goroutines.
- **Buffered channels** are useful when we want to decouple sender and receiver, smooth out bursts, or implement queues.

### Real-World Use Cases

- **Unbuffered:** Signaling completion, handshakes, strict step-by-step coordination.
- **Buffered:** Logging systems, job queues, rate limiting, batching, producer-consumer pipelines.

## Use Cases for Channels

- **Worker pools:** Distribute tasks among multiple goroutines.
- **Fan-out/fan-in:** Send data to multiple goroutines and collect results.
- **Synchronization:** Signal completion or coordinate steps between goroutines.
- **Pipelines:** Chain stages of processing using channels.

## Key Characteristics

- **Type safety:** Channels enforce the type of data sent/received.
- **Blocking behavior:** Operations block until they can proceed, simplifying synchronization.
- **Directionality:** Channels can be directional (`chan<-` for send-only, `<-chan` for receive-only).
- **Closing:** Closing a channel signals receivers that no more data will be sent.

## Common Patterns

### Worker Pool Example

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for job := range jobs {
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)
    var wg sync.WaitGroup

    for w := 1; w <= 3; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }

    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    wg.Wait()
    close(results)

    for r := range results {
        fmt.Println(r)
    }
}
```

## Advantages

- Simplifies concurrent programming
- Reduces risk of race conditions
- Makes code easier to read and maintain
- Integrates naturally with Go’s select statement for multiplexing

## Limitations & Pitfalls

- Can lead to deadlocks if not managed carefully
- Buffered channels can fill up and block senders
- Closing a channel twice causes a panic
- Reading from a closed channel yields zero value

## Best Practices

- Always close channels when no more values will be sent
- Use directional channels to clarify intent
- Avoid sharing channels between unrelated goroutines
- Use `select` for handling multiple channels or timeouts
