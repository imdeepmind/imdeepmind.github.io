---
sidebar_position: 5
---

# Channels

In Go, a channel is a typed conduit for sending and receiving values between goroutines. Channels are a core concurrency primitive managed by the Go runtime.

**Channels:**

- Remove the need for explicit locks in many cases
- Ensure safe data sharing between goroutines without race conditions
- Are type-safe

## Creating Channels

We create channels with the `make` function:

```go
ch := make(chan int)       // Unbuffered channel
chBuf := make(chan string, 5) // Buffered channel (capacity = 5)
```

The type of a channel is defined as `chan T` where `T` is the type of data it carries.

## Why Use Channels?

- To **coordinate** work between goroutines.
- To **pass data** without manual synchronization.
- To build **concurrent pipelines**.
- To implement **producer-consumer** or **fan-out/fan-in** patterns.

Go’s philosophy: Don’t communicate by sharing memory; share memory by communicating.

> **Don’t communicate by sharing memory; share memory by communicating.**

## Basic Operations

Channels support three main operations:

1. **Send**

   ```go
   ch <- value
   ```

   Sends `value` into `ch`. Blocks until a receiver is ready (for unbuffered channels).

2. **Receive**

   ```go
   val := <-ch
   ```

   Receives a value from `ch`. Blocks until there’s a value to receive.

3. **Close**

   ```go
   close(ch)
   ```

   Signals that **no more values** will be sent on `ch`.

## Buffered vs Unbuffered Channels

### Unbuffered Channels

- **Capacity** = 0.
- Every send must wait for a corresponding receive, and vice versa.
- Used for **synchronization** and **direct handoff** between goroutines.

**Example: Synchronization:**

```go
done := make(chan bool)
go func() {
    fmt.Println("Task started")
    time.Sleep(time.Second)
    fmt.Println("Task finished")
    done <- true
}()
<-done // Waits until goroutine sends
```

### Buffered Channels

- Have a **fixed capacity**.
- **Send** only blocks when the buffer is full.
- **Receive** only blocks when the buffer is empty.
- Useful for **decoupling** sender and receiver speeds.

Why Buffered Channels are Important

- **Decoupling**: The sender and receiver don’t have to be in perfect sync — the buffer allows temporary storage.
- **Throughput**: In high-throughput systems, buffering can smooth out bursts of work.
- **Producer-Consumer**: Allows the producer to work ahead without blocking if the consumer is slower.
- **Rate Limiting**: Control how many items are processed at once.

**Example: Producer-Consumer with Buffer:**

```go
func producer(ch chan int) {
    for i := 1; i <= 5; i++ {
        fmt.Printf("Producing %d\n", i)
        ch <- i // Blocks only if buffer is full
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
    ch := make(chan int, 2) // Capacity 2
    go producer(ch)
    consumer(ch)
}
```

**Behavior:**

- Producer can produce up to 2 values before blocking.
- Consumer processes at its own pace.
- The buffer smooths the speed difference between them.

## Directional Channels

We can make channels **send-only** or **receive-only** in function parameters to enforce correct usage:

```go
func sendData(ch chan<- int) { ch <- 42 }   // Send-only
func receiveData(ch <-chan int) { fmt.Println(<-ch) } // Receive-only
```

This helps prevent accidental misuse of a channel in large systems.

## select Statement — Multiplexing Channels

`select` allows us to **wait on multiple channel operations** simultaneously:

- Picks the first case where a channel is ready.
- If multiple are ready, chooses one randomly.
- If none are ready, blocks unless a `default` case exists.

**Example: Multiplexing:**

```go
select {
case msg := <-ch1:
    fmt.Println("From ch1:", msg)
case msg := <-ch2:
    fmt.Println("From ch2:", msg)
default:
    fmt.Println("No data yet")
}
```

Timeout with select

```go
select {
case msg := <-ch:
    fmt.Println("Received:", msg)
case <-time.After(2 * time.Second):
    fmt.Println("Timeout!")
}
```

## Closing Channels & Cleanup

- Only the sender should close a channel.
- Closing a channel signals **no more data will be sent**.
- Receivers can still read any buffered data before closure.
- Reading from a closed channel returns the **zero value** and `ok = false`.

**Example:**

```go
val, ok := <-ch
if !ok {
    fmt.Println("Channel closed")
}
```

**Best Practice:**

```go
func producer(ch chan<- int) {
    defer close(ch) // Always close when done
    for i := 0; i < 5; i++ {
        ch <- i
    }
}
```

## Common Patterns

### Worker Pool

```go
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

### Fan-out / Fan-in

- Fan-out: Multiple goroutines consume from the same channel
- Fan-in: Multiple goroutines send into the same channel to aggregate results

### Pipelines

**Chaining goroutines:**

```go
func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

func sq(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}
```

## Pitfalls

- Deadlocks if sender/receiver counts don’t match
- Closing a channel twice causes panic
- Buffered channels can fill up and block senders unexpectedly
- Zero value reads from closed channels can mask logic errors

## Best Practices

- Close channels only from the sending side
- Use defer close() in producer goroutines
- Use directional channels for clarity
- Use select for multiple channels or timeouts
- Avoid very large buffer sizes unless justified — large buffers can hide backpressure problems
