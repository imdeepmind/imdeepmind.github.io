---
sidebar_position: 2
---

# Wait Groups

A wait group is an object that tracks the number of goroutines to wait for. We increment its counter when starting a goroutine and decrement it when a goroutine finishes. The main goroutine can then block until the counter drops to zero.

- Provided by the `sync` package: `sync.WaitGroup`
- Tracks active goroutines
- Blocks until all goroutines signal completion

## Basic Usage

- `Add(n)`: Increment the counter by `n` (usually 1 per goroutine)
- `Done()`: Decrement the counter by 1 (called by each goroutine when finished)
- `Wait()`: Block until the counter is zero

## Example: Waiting for Multiple Goroutines

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done() // Signal completion
    fmt.Printf("Worker %d starting\n", id)
    // Simulate work
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait() // Wait for all workers to finish
    fmt.Println("All workers done!")
}
```

## Why Use Wait Groups?

- Ensure all goroutines complete before continuing
- Avoid race conditions and premature exits
- Useful for parallel processing, web scraping, batch jobs, etc.

## Common Patterns

### Example: Parallel Data Processing

```go
package main

import (
    "fmt"
    "sync"
)

func process(data int, wg *sync.WaitGroup, results chan<- int) {
    defer wg.Done()
    results <- data * 2 // Simulate processing
}

func main() {
    var wg sync.WaitGroup
    results := make(chan int, 5)
    data := []int{1, 2, 3, 4, 5}
    for _, d := range data {
        wg.Add(1)
        go process(d, &wg, results)
    }
    wg.Wait()
    close(results)
    for r := range results {
        fmt.Println(r)
    }
}
```

### Example: Web Scraping (Simplified)

```go
package main

import (
    "fmt"
    "sync"
)

func scrape(url string, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Scraping %s\n", url)
    // Simulate scraping
}

func main() {
    var wg sync.WaitGroup
    urls := []string{"https://site1.com", "https://site2.com", "https://site3.com"}
    for _, url := range urls {
        wg.Add(1)
        go scrape(url, &wg)
    }
    wg.Wait()
    fmt.Println("All scraping done!")
}
```

## Best Practices

- Always call `Done()` in a deferred statement to ensure it's executed
- Match every `Add(1)` with a corresponding `Done()`
- Never copy a `WaitGroup` (always pass by pointer)
- Use with channels for collecting results

## Limitations & Pitfalls

- Calling `Add()` after `Wait()` has started can cause a panic
- Forgetting to call `Done()` leads to deadlocks
- Not thread-safe for copying
