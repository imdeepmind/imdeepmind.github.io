---
sidebar_position: 15
---

# Asynchronous Programming

<!-- markdownlint-disable MD024 -->

Python's `asyncio` is a library introduced in Python 3.4 to enable asynchronous programming, allowing developers to write concurrent code that can handle I/O-bound operations efficiently. It’s particularly useful for tasks like network programming, web scraping, or any scenario where operations spend significant time waiting (e.g., for network responses or file I/O). Below is a detailed exploration of `asyncio` and its core components: **Event Loop**, **Coroutines**, **Tasks**, **Futures**, and **Synchronization**.

## What is `asyncio`?

`asyncio` is a Python standard library module that provides a framework for writing single-threaded concurrent code using coroutines, multiplexing I/O operations over sockets and other resources, and managing an event loop. It’s designed for asynchronous I/O (async I/O), where operations can pause and resume without blocking the execution of other code.

### When to Use

- **I/O-bound tasks**: Ideal for network requests, file operations, or database queries where the program waits for external resources.
- **High-concurrency applications**: Useful in web servers, chat applications, or APIs handling many simultaneous connections.
- **Not for CPU-bound tasks**: Tasks requiring heavy computation (e.g., image processing) are better suited for multiprocessing or threading, as `asyncio` runs in a single thread and relies on cooperative multitasking.

### Pros

- **Efficient resource usage**: Runs in a single thread, reducing memory and context-switching overhead compared to threads.
- **Scalability**: Handles thousands of concurrent connections (e.g., in web servers like `aiohttp`).
- **Clear syntax**: With Python 3.5+ (`async/await`), code is readable and resembles synchronous code.

### Cons

- **Learning curve**: Requires understanding asynchronous concepts like coroutines and event loops.
- **Limited ecosystem**: Not all libraries support async I/O (e.g., some database drivers are synchronous).
- **Debugging complexity**: Stack traces in async code can be harder to interpret.
- **Single-threaded**: No parallelism for CPU-bound tasks without additional tools like `ProcessPoolExecutor`.

### Example

```python
import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)  # Simulate I/O wait
    print("World")

async def main():
    await asyncio.gather(say_hello(), say_hello())  # Run concurrently

asyncio.run(main())
```

**Output** (prints with a 1-second delay between "Hello" and "World" for each coroutine):

```text
Hello
Hello
World
World
```

## Event Loop

The **event loop** is the core of `asyncio`, responsible for scheduling and running asynchronous tasks, handling I/O events, and managing coroutines. It’s like a coordinator that keeps track of all pending tasks and decides what to run next when resources (e.g., network data) become available.

### How It Works

- The event loop maintains a queue of tasks (coroutines, callbacks, or I/O operations).
- It continuously checks for completed I/O operations or tasks ready to resume.
- When a coroutine `await`s an operation (e.g., `await asyncio.sleep(1)`), it yields control back to the event loop, which can then run another task.
- The loop uses OS-level mechanisms (e.g., `select` or `epoll`) to monitor I/O events efficiently.

### When to Use

- **Always required**: Any `asyncio` program needs an event loop to execute coroutines.
- **Custom scheduling**: Use when you need fine-grained control over task execution or need to integrate with external event loops (e.g., `uvloop` for performance).
- **I/O multiplexing**: Essential for handling multiple network connections concurrently.

### Pros

- **Efficient**: Single-threaded, non-blocking I/O handling scales well for many connections.
- **Customizable**: Supports replacing the default loop with high-performance alternatives like `uvloop`.
- **Centralized control**: Simplifies managing many tasks in one place.

### Cons

- **Single-threaded**: No parallelism for CPU-bound tasks.
- **Error handling**: Errors in one task can affect the loop if not properly managed.
- **Manual management**: Requires explicit handling (e.g., closing the loop in some cases).

### Example

```python
import asyncio

async def task1():
    print("Task 1 started")
    await asyncio.sleep(2)
    print("Task 1 finished")

async def task2():
    print("Task 2 started")
    await asyncio.sleep(1)
    print("Task 2 finished")

loop = asyncio.get_event_loop()  # Get the default event loop
try:
    loop.run_until_complete(asyncio.gather(task1(), task2()))  # Run tasks
finally:
    loop.close()  # Clean up
```

**Output**:

```text
Task 1 started
Task 2 started
Task 2 finished
Task 1 finished
```

### Notes

- Use `asyncio.run()` in Python 3.7+ for simpler loop management (it handles creation and cleanup).
- Avoid blocking calls (e.g., `time.sleep`) in the event loop, as they halt all tasks.

## Coroutines

A **coroutine** is a special function defined with `async def` that can pause its execution (via `await`) and yield control back to the event loop, allowing other tasks to run. Coroutines are the building blocks of `asyncio` programs.

### When to Use

- **Async operations**: Use for any function involving I/O operations (e.g., HTTP requests, reading files asynchronously).
- **Composing tasks**: Combine multiple coroutines to build complex workflows.
- **Non-blocking code**: When you want to avoid blocking the event loop during long-running operations.

### Pros

- **Readable**: With `async/await`, coroutines resemble synchronous code but run concurrently.
- **Flexible**: Can be awaited, scheduled as tasks, or grouped with `asyncio.gather`.
- **Lightweight**: Low memory overhead compared to threads.

### Cons

- **Must be awaited**: Forgetting to `await` a coroutine results in no execution (returns a coroutine object).
- **Library compatibility**: Only works with async-compatible libraries (e.g., `aiohttp`, not `requests`).
- **Error handling**: Requires careful use of `try/except` to avoid unhandled exceptions breaking the loop.

### Example

```python
import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(1)  # Simulate network delay
    return {"data": 42}

async def process_data():
    print("Processing data...")
    await asyncio.sleep(0.5)
    return "Processed"

async def main():
    result1 = await fetch_data()  # Wait for coroutine to complete
    result2 = await process_data()
    print(f"Results: {result1}, {result2}")

asyncio.run(main())
```

**Output**:

```text
Fetching data...
Processing data...
Results: {'data': 42}, Processed
```

### Notes

- Coroutines are not executed until awaited or scheduled (e.g., as tasks).
- Use `asyncio.gather(*coroutines)` to run multiple coroutines concurrently.

Below is a revised, detailed note focusing exclusively on **Tasks** in Python’s `asyncio`, incorporating `asyncio.gather` and `asyncio.TaskGroup` as requested, while covering what tasks are, their use cases, pros, cons, and examples. The introduction to `asyncio` has been removed, and the focus is narrowed to tasks only.

## Tasks

A **Task** in Python’s `asyncio` is an object that schedules and manages the execution of a coroutine in the event loop. It acts as a wrapper, allowing a coroutine to run concurrently without needing to be awaited immediately. Tasks are created primarily using `asyncio.create_task()`, and they enable non-blocking, parallel execution of asynchronous operations.

**Key characteristics**:

- A Task is tied to a single coroutine and runs it in the event loop.
- It has a lifecycle: **pending** (scheduled), **running**, **done** (completed or failed), or **cancelled**.
- Tasks provide methods to monitor status (`task.done()`), retrieve results (`task.result()`), or cancel execution (`task.cancel()`).

**Tasks are distinct from raw coroutines**:

- A coroutine (defined with `async def`) is a suspendable function.
- A Task schedules that coroutine to run concurrently, managing its execution.

In addition to `asyncio.create_task()`, tasks can be grouped and managed using `asyncio.gather()` for collecting results or `asyncio.TaskGroup` (introduced in Python 3.11) for structured concurrency.

### Use Cases for Tasks

Tasks are ideal for scenarios requiring concurrent or background execution, such as:

1. **Concurrent operations**: Running multiple I/O-bound coroutines simultaneously, like fetching data from multiple APIs.
2. **Background processing**: Executing periodic tasks (e.g., logging, monitoring) while the main program continues.
3. **Long-running jobs**: Scheduling tasks like file downloads or data processing without blocking other operations.
4. **Workflow coordination**: Managing interdependent asynchronous tasks, such as fetching, processing, and saving data.
5. **Asynchronous servers**: Handling multiple client connections concurrently in applications like chat systems or WebSocket servers.

Real-world examples:

- **Web scraping**: Fetching multiple web pages in parallel.
- **API clients**: Sending requests to multiple endpoints concurrently.
- **Real-time systems**: Managing streaming data or client connections.
- **Task queues**: Processing background jobs, like sending emails or generating reports.

### Pros of Tasks

1. **Concurrency**: Enables multiple coroutines to run in parallel within a single thread, maximizing efficiency for I/O-bound operations.
2. **Control**: Offers methods to check status, cancel tasks, or retrieve results, providing flexibility in managing execution.
3. **Non-blocking**: Allows other tasks to proceed while waiting for I/O, improving responsiveness.
4. **Scalability**: Supports thousands of concurrent tasks (e.g., client connections) with low memory overhead compared to threads.
5. **Structured management**: Tools like `asyncio.gather` and `asyncio.TaskGroup` simplify coordinating multiple tasks.
6. **Error handling**: Tasks can propagate exceptions, which can be caught and managed explicitly.

### Cons of Tasks

1. **Complexity**: Managing task lifecycles, cancellations, or dependencies adds code complexity compared to sequential programming.
2. **Error handling**: Unhandled exceptions in tasks can fail silently unless explicitly checked, risking subtle bugs.
3. **Not for CPU-bound work**: Tasks are suited for I/O-bound operations, not heavy computations (use `multiprocessing` for those).
4. **Cancellation issues**: Cancelling tasks requires careful cleanup to avoid resource leaks (e.g., open connections).
5. **Learning curve**: Understanding task scheduling, results, and tools like `TaskGroup` requires familiarity with async concepts.
6. **Resource risks**: Unawaited or forgotten tasks can lead to dangling resources, consuming memory or connections.

### Key Task-Related Tools

- **`asyncio.create_task(coroutine)`**: Schedules a coroutine to run concurrently, returning a Task object.
- **`asyncio.gather(*aws, return_exceptions=False)`**: Runs multiple tasks (or coroutines) concurrently and collects their results in order. If `return_exceptions=True`, exceptions are returned as results instead of raising them.
- **`asyncio.TaskGroup` (Python 3.11+)**: A context manager for creating and managing a group of tasks with structured concurrency. Ensures all tasks complete (or are cancelled) when the group exits, simplifying error handling and cleanup.

### Examples of Tasks

#### Example 1: Using `asyncio.create_task` for Concurrent Execution

This example runs multiple tasks concurrently to simulate fetching data from servers with different delays.

```python
import asyncio
import time

async def fetch_data(server_id: int) -> str:
    print(f"Fetching data from server {server_id}")
    await asyncio.sleep(server_id)  # Simulate network delay
    return f"Data from server {server_id}"

async def main():
    # Create tasks
    task1 = asyncio.create_task(fetch_data(1))
    task2 = asyncio.create_task(fetch_data(2))
    task3 = asyncio.create_task(fetch_data(3))

    # Wait for tasks to complete
    results = await asyncio.wait_for(asyncio.gather(task1, task2, task3), timeout=4)
    print("Results:", results)

start_time = time.time()
asyncio.run(main())
print(f"Total time: {time.time() - start_time:.2f} seconds")
```

**Output**:

```text
Fetching data from server 1
Fetching data from server 2
Fetching data from server 3
Results: ['Data from server 1', 'Data from server 2', 'Data from server 3']
Total time: 3.01 seconds
```

**Explanation**:

- Three tasks are created with `asyncio.create_task` to fetch data with delays of 1, 2, and 3 seconds.
- `asyncio.gather` waits for all tasks to complete and returns their results in order.
- The total time is ~3 seconds (not 6), as tasks run concurrently.
- A 4-second timeout ensures the program doesn’t hang indefinitely.

#### Example 2: Using `asyncio.gather` for Error Handling

This example uses `asyncio.gather` to run tasks and handle exceptions gracefully.

```python
import asyncio

async def risky_operation(id: int):
    print(f"Starting operation {id}")
    await asyncio.sleep(1)
    if id == 2:
        raise ValueError(f"Error in operation {id}")
    return f"Result {id}"

async def main():
    # Create tasks
    tasks = [asyncio.create_task(risky_operation(i)) for i in range(3)]

    # Use gather to collect results, handling exceptions
    results = await asyncio.gather(*tasks, return_exceptions=True)
    for result in results:
        print(f"Result: {result}")

asyncio.run(main())
```

**Output**:

```text
Starting operation 0
Starting operation 1
Starting operation 2
Result: Result 0
Result: Result 1
Result: ValueError('Error in operation 2')
```

**Explanation**:

- Three tasks run `risky_operation`, with `id == 2` raising an exception.
- `asyncio.gather` with `return_exceptions=True` collects all results, including exceptions, preventing the program from crashing.
- This ensures all tasks complete, and errors are reported as results.

#### Example 3: Using `asyncio.TaskGroup` for Structured Concurrency

This example uses `asyncio.TaskGroup` to manage tasks with automatic cleanup and error propagation.

```python
import asyncio

async def process_item(item: int):
    print(f"Processing item {item}")
    await asyncio.sleep(item)
    if item == 3:
        raise ValueError(f"Failed to process item {item}")
    return f"Processed {item}"

async def main():
    async with asyncio.TaskGroup() as tg:
        # Create tasks within the task group
        tasks = [tg.create_task(process_item(i)) for i in range(1, 5)]

    # Results are available after the group exits
    for task in tasks:
        if task.done() and not task.cancelled():
            try:
                print(f"Result: {task.result()}")
            except Exception as e:
                print(f"Error: {e}")

try:
    asyncio.run(main())
except Exception as e:
    print(f"TaskGroup caught: {e}")
```

**Output**:

```text
Processing item 1
Processing item 2
Processing item 3
Processing item 4
TaskGroup caught: Failed to process item 3
```

**Explanation**:

- `asyncio.TaskGroup` creates a context where tasks are grouped.
- Each task processes an item, with `item == 3` raising an exception.
- If any task fails, `TaskGroup` propagates the exception, cancelling other tasks automatically.
- The `async with` block ensures all tasks complete or are cleaned up, simplifying error handling.

#### Example 4: Background Task with Cancellation

This example runs a background task and cancels it after the main work completes.

```python
import asyncio

async def background_monitor():
    while True:
        print("Monitoring...")
        await asyncio.sleep(2)

async def main():
    # Start background task
    task = asyncio.create_task(background_monitor())

    # Main work
    for i in range(3):
        print(f"Main step {i}")
        await asyncio.sleep(1)

    # Cancel background task
    task.cancel()
    try:
        await task
    except asyncio.CancelledError:
        print("Background task cancelled")

asyncio.run(main())
```

**Output**:

```text
Main step 0
Monitoring...
Main step 1
Main step 2
Monitoring...
Background task cancelled
```

**Explanation**:

- A background task (`background_monitor`) runs every 2 seconds.
- `asyncio.create_task` schedules it concurrently with the main coroutine.
- After 3 seconds of main work, the task is cancelled with `task.cancel()`.
- `CancelledError` is caught to confirm graceful cancellation.

#### Example 5: Timeout with `TaskGroup`

This example enforces a timeout on a group of tasks using `asyncio.wait_for` and `TaskGroup`.

```python
import asyncio

async def long_task(id: int):
    print(f"Task {id} started")
    await asyncio.sleep(id * 2)
    print(f"Task {id} completed")
    return f"Result {id}"

async def main():
    try:
        async with asyncio.TaskGroup() as tg:
            tasks = [tg.create_task(long_task(i)) for i in range(1, 4)]
            # Wrap TaskGroup in a timeout
            results = await asyncio.wait_for(
                asyncio.gather(*tasks, return_exceptions=True),
                timeout=3
            )
            print("Results:", results)
    except asyncio.TimeoutError:
        print("Timeout! Tasks were cancelled by TaskGroup")
    except Exception as e:
        print(f"Error: {e}")

asyncio.run(main())
```

**Output**:

```text
Task 1 started
Task 2 started
Task 3 started
Task 1 completed
Timeout! Tasks were cancelled by TaskGroup
```

**Explanation**:

- A `TaskGroup` manages three tasks with delays of 2, 4, and 6 seconds.
- `asyncio.wait_for` enforces a 3-second timeout.
- When the timeout occurs, `TaskGroup` ensures all tasks are cancelled, preventing resource leaks.
- `return_exceptions=True` in `gather` allows partial results to be collected if needed.

### Best Practices for Tasks

1. **Await tasks eventually**: Use `asyncio.gather`, `asyncio.wait`, or `TaskGroup` to ensure tasks complete and their results are collected.
2. **Handle exceptions**: Check `task.result()` or use `return_exceptions=True` in `gather`. With `TaskGroup`, exceptions are automatically propagated.
3. **Use `TaskGroup` for structure**: Prefer `TaskGroup` (Python 3.11+) for grouped tasks to ensure cleanup and simplify error handling.
4. **Cancel cleanly**: Handle `CancelledError` when cancelling tasks to close resources like files or connections.
5. **Enforce timeouts**: Use `asyncio.wait_for` to prevent tasks from running indefinitely.
6. **Limit concurrency**: Use `asyncio.Semaphore` for resource-intensive tasks to avoid overwhelming the event loop.
7. **Monitor tasks**: Use `task.done()` or `task.add_done_callback` to track completion, especially for background tasks.

### Common Pitfalls

- **Unawaited tasks**: Tasks created with `asyncio.create_task` run in the background but may be garbage-collected if not awaited.

  ```python
  async def main():
      task = asyncio.create_task(some_coroutine())  # Task may be lost
  ```

  **Fix**: Use `await task`, `await asyncio.gather(task)`, or `TaskGroup`.

- **Silent exceptions**: Tasks with unhandled exceptions won’t crash the program but can fail unnoticed.
  **Fix**: Use `task.result()`, `gather` with `return_exceptions=True`, or `TaskGroup`.

- **Overusing tasks**: Creating too many tasks without limits can overload the event loop.
  **Fix**: Use `asyncio.Semaphore` or `TaskGroup` to manage concurrency.

- **Improper `gather` usage**: Forgetting `return_exceptions=True` can crash the program if one task fails.
  **Fix**: Set `return_exceptions=True` for robustness.

- **Ignoring `TaskGroup` benefits**: Manually managing tasks instead of using `TaskGroup` can lead to messy cleanup.
  **Fix**: Use `TaskGroup` for structured concurrency in Python 3.11+.

## Futures

A **future** is a low-level object representing the eventual result of an asynchronous operation. It’s a placeholder for a value that will be available later. While coroutines and tasks are higher-level abstractions, futures are used internally by `asyncio` or when integrating with external systems.

### When to Use

- **Low-level control**: When you need to interface with callback-based libraries or custom event loops.
- **External integration**: For bridging `asyncio` with other async frameworks or systems.
- **Rare in typical use**: Most `asyncio` programs use tasks or coroutines instead, as they’re more convenient.

### Pros

- **Flexible**: Allows manual control over result setting or exception handling.
- **Interoperable**: Useful for integrating with non-`asyncio` async code (e.g., Twisted, Tornado).
- **Cancelable**: Like tasks, futures can be canceled.

### Cons

- **Complex**: Requires manual management of state (e.g., setting results or exceptions).
- **Error-prone**: Incorrect usage (e.g., not resolving a future) can lead to hanging tasks.
- **Rarely needed**: Higher-level abstractions like tasks usually suffice.

### Example

```python
import asyncio

async def set_future_result(future):
    await asyncio.sleep(1)
    future.set_result("Future resolved!")

async def main():
    loop = asyncio.get_running_loop()
    future = loop.create_future()  # Create a future
    asyncio.create_task(set_future_result(future))  # Schedule task to set result
    result = await future  # Wait for future to resolve
    print(result)

asyncio.run(main())
```

**Output**:

```text
Future resolved!
```

### Notes

- Futures are rarely used directly in modern `asyncio` code due to `async/await`.
- Use `loop.create_future()` to create a future tied to the current event loop.
- Ensure futures are resolved (via `set_result` or `set_exception`) to avoid hangs.

## Synchronization in Python `asyncio`

**Synchronization** in `asyncio` refers to mechanisms that coordinate the execution of coroutines to prevent conflicts when accessing shared resources or to manage the order of operations in a concurrent environment. Since `asyncio` operates in a single-threaded event loop, it avoids traditional race conditions associated with multi-threading for CPU-bound tasks. However, I/O-bound operations may still require synchronization to prevent issues like data corruption, overlapping operations, or to enforce specific execution patterns. `asyncio` provides several synchronization primitives: **Lock**, **Event**, **Condition**, **Semaphore**, and **BoundedSemaphore**. Below is a detailed exploration of each, including their definitions, use cases, pros, cons, and examples.

### Lock

An `asyncio.Lock` ensures that only one coroutine can access a critical section of code or a shared resource at a time. When a coroutine acquires the lock, others attempting to acquire it must wait until it is released.

#### Use Cases

- **Protecting shared resources**: Use when multiple coroutines modify a shared object (e.g., an in-memory counter or a file).
- **Preventing interleaved output**: Ensure that console or file output from multiple coroutines doesn’t mix chaotically.
- **Exclusive access**: When a resource (e.g., a database connection) can only be used by one coroutine at a time.

#### When to Use

- When you need mutual exclusion to avoid data corruption or inconsistent states.
- For short critical sections to minimize contention.

#### Pros

- **Simple**: Easy to understand and use for basic mutual exclusion.
- **Safe**: Prevents multiple coroutines from accessing a resource simultaneously.
- **Context manager support**: Using `async with lock` ensures proper acquisition and release, even if exceptions occur.

#### Cons

- **Deadlock risk**: Improper nesting of locks can cause deadlocks.
- **Performance overhead**: Holding a lock during long operations (e.g., I/O) can block other coroutines, reducing concurrency.
- **Limited flexibility**: Only allows one coroutine at a time, which may be too restrictive for some scenarios.

#### Example

```python
import asyncio

async def increment_counter(lock, counter, name):
    async with lock:  # Acquire lock safely
        current = counter[0]
        print(f"{name} read counter: {current}")
        await asyncio.sleep(0.1)  # Simulate work
        counter[0] = current + 1
        print(f"{name} set counter: {counter[0]}")

async def main():
    counter = [0]  # Shared resource
    lock = asyncio.Lock()
    tasks = [increment_counter(lock, counter, f"Task {i}") for i in range(3)]
    await asyncio.gather(*tasks)
    print(f"Final counter: {counter[0]}")

asyncio.run(main())
```

**Output**:

```text
Task 0 read counter: 0
Task 0 set counter: 1
Task 1 read counter: 1
Task 1 set counter: 2
Task 2 read counter: 2
Task 2 set counter: 3
Final counter: 3
```

**Explanation**: The `Lock` ensures that only one coroutine modifies the counter at a time, preventing race conditions that could lead to incorrect increments.

#### Notes

- Use `async with lock` to avoid manual `acquire()` and `release()` calls, which can be error-prone.
- Avoid holding locks during long `await` operations to maintain concurrency.

### Event

An `asyncio.Event` is a signaling mechanism that allows one or more coroutines to wait until a specific condition is met (the event is “set”). It’s useful for coordinating coroutines without necessarily protecting a shared resource.

#### Use Cases

- **Startup coordination**: Signal when a server or resource is ready (e.g., a web server waiting for a database connection).
- **One-time triggers**: Notify multiple coroutines to proceed after an initial task completes.
- **State changes**: Indicate when a system transitions to a new state (e.g., “shutdown initiated”).

#### When to Use

- When coroutines need to wait for a single, non-repeating condition without modifying shared data.
- For broadcasting a signal to multiple waiting coroutines.

#### Pros

- **Lightweight**: Simple way to coordinate coroutines without resource contention.
- **Broadcast capability**: Multiple coroutines can wait on the same event and proceed when it’s set.
- **Reusable**: Can be cleared and set multiple times.

#### Cons

- **No data passing**: Only signals a state change; no mechanism to share data.
- **Manual management**: Requires explicit `set()` and `clear()` calls, which can be forgotten.
- **Limited use cases**: Less versatile than other primitives like `Condition` for complex coordination.

#### Example

```python
import asyncio

async def waiter(event, name):
    print(f"{name} waiting for event")
    await event.wait()  # Wait until event is set
    print(f"{name} proceeding after event")

async def trigger(event):
    print("Trigger task started")
    await asyncio.sleep(1)  # Simulate setup work
    print("Setting event")
    event.set()  # Signal waiting coroutines

async def main():
    event = asyncio.Event()
    tasks = [
        waiter(event, f"Waiter {i}") for i in range(3)
    ] + [trigger(event)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

**Output**:

```text
Waiter 0 waiting for event
Waiter 1 waiting for event
Waiter 2 waiting for event
Trigger task started
Setting event
Waiter 0 proceeding after event
Waiter 1 proceeding after event
Waiter 2 proceeding after event
```

**Explanation**: The `Event` allows multiple `waiter` coroutines to pause until the `trigger` coroutine sets the event, enabling coordinated startup.

#### Notes

- Use `event.clear()` to reset the event for reuse.
- Ensure `set()` is called, or waiting coroutines will hang indefinitely.

### Condition

An `asyncio.Condition` is a more advanced synchronization primitive that allows coroutines to wait for a specific condition to be met, often in conjunction with a `Lock`. It’s used to notify waiting coroutines when a shared resource’s state changes.

#### Use Cases

- **Producer-consumer patterns**: Coordinate coroutines that produce and consume items from a shared queue.
- **State-based coordination**: Wait for a resource to reach a specific state (e.g., a buffer reaching a threshold).
- **Dynamic notifications**: Notify one or more coroutines when a condition changes, unlike the one-time nature of `Event`.

#### When to Use

- When coroutines need to wait for complex or dynamic conditions involving shared state.
- For scenarios requiring selective notification (e.g., notify one or all waiting coroutines).

#### Pros

- **Flexible**: Supports complex conditions by integrating with a `Lock`.
- **Selective notification**: Can notify one (`notify()`) or all (`notify_all()`) waiting coroutines.
- **Safe**: Built-in lock ensures thread-safe state checks.

#### Cons

- **Complex**: More intricate than `Lock` or `Event`, requiring careful state management.
- **Overhead**: Slightly heavier due to lock integration.
- **Deadlock risk**: Misuse of the underlying lock can cause issues.

#### Example

```python
import asyncio

async def producer(condition, buffer):
    for i in range(3):
        async with condition:
            buffer.append(i)
            print(f"Produced {i}, buffer: {buffer}")
            condition.notify()  # Notify one consumer
        await asyncio.sleep(0.5)

async def consumer(condition, buffer, name):
    async with condition:
        while not buffer:  # Wait for items
            print(f"{name} waiting for items")
            await condition.wait()
        item = buffer.pop(0)
        print(f"{name} consumed {item}, buffer: {buffer}")

async def main():
    buffer = []
    condition = asyncio.Condition()
    tasks = [
        producer(condition, buffer),
        consumer(condition, buffer, "Consumer 1"),
        consumer(condition, buffer, "Consumer 2"),
    ]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

**Output** (order may vary slightly due to scheduling):

```text
Consumer 1 waiting for items
Consumer 2 waiting for items
Produced 0, buffer: [0]
Consumer 1 consumed 0, buffer: []
Consumer 2 waiting for items
Produced 1, buffer: [1]
Consumer 2 consumed 1, buffer: []
Consumer 2 waiting for items
Produced 2, buffer: [2]
Consumer 2 consumed 2, buffer: []
```

**Explanation**: The `Condition` coordinates producers and consumers, ensuring consumers only proceed when the buffer has items, with safe access via the condition’s lock.

#### Notes

- Always check the condition after `wait()` to avoid spurious wakeups.
- Use `async with condition` for safe lock management.

### Semaphore

An `asyncio.Semaphore` limits the number of coroutines that can access a resource concurrently. It maintains a counter that coroutines acquire and release, allowing up to a specified number of simultaneous accesses.

#### Use Cases

- **Rate limiting**: Restrict the number of concurrent API requests or database queries.
- **Resource pooling**: Manage a fixed number of resources (e.g., connections in a connection pool).
- **Throttling I/O**: Prevent overwhelming a server or disk with too many operations.

#### When to Use

- When you want to allow multiple coroutines to access a resource simultaneously, but with a cap.
- For scenarios where full mutual exclusion (like `Lock`) is too restrictive.

#### Pros

- **Controlled concurrency**: Allows multiple coroutines to proceed, unlike `Lock`.
- **Flexible**: Adjustable limit suits various use cases.
- **Safe**: Context manager (`async with`) ensures proper acquisition and release.

#### Cons

- **No exclusivity**: Doesn’t prevent race conditions within the allowed coroutines (may need a `Lock` for shared state).
- **Counter management**: Misuse (e.g., releasing more than acquired) can lead to errors (mitigated by `BoundedSemaphore`).
- **Complexity**: Requires tuning the limit for optimal performance.

#### Example

```python
import asyncio

async def access_api(semaphore, name):
    async with semaphore:  # Limit concurrent access
        print(f"{name} making API call")
        await asyncio.sleep(1)  # Simulate API delay
        print(f"{name} finished API call")

async def main():
    semaphore = asyncio.Semaphore(2)  # Allow 2 concurrent calls
    tasks = [access_api(semaphore, f"Task {i}") for i in range(5)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

**Output**:

```text
Task 0 making API call
Task 1 making API call
Task 0 finished API call
Task 1 finished API call
Task 2 making API call
Task 3 making API call
Task 2 finished API call
Task 3 finished API call
Task 4 making API call
Task 4 finished API call
```

**Explanation**: The `Semaphore` ensures only two coroutines make API calls at a time, preventing server overload while allowing some concurrency.

#### Notes

- Choose the semaphore limit based on resource constraints (e.g., server capacity).
- Combine with a `Lock` if the resource itself needs exclusive access within the semaphore’s limit.

### BoundedSemaphore

An `asyncio.BoundedSemaphore` is a variant of `Semaphore` that enforces stricter rules: it raises an error if a coroutine attempts to release the semaphore more times than it was acquired. This prevents bugs where the counter becomes artificially inflated.

#### Use Cases

- **Same as Semaphore**: Rate limiting, resource pooling, or throttling I/O operations.
- **Safety-critical systems**: When you need to ensure the semaphore’s counter remains accurate (e.g., managing a fixed number of licenses or connections).
- **Debugging**: Helps catch programming errors during development.

#### When to Use

- When you want the same functionality as `Semaphore` but with added protection against over-releasing.
- In production code where reliability is critical.

#### Pros

- **Safer**: Prevents accidental over-release, which could allow too many coroutines to proceed.
- **Same benefits as Semaphore**: Controlled concurrency with flexible limits.
- **Error detection**: Raises `ValueError` for invalid releases, aiding debugging.

#### Cons

- **Slightly stricter**: May catch legitimate use cases if releases are intentionally unbalanced (rare).
- **Same limitations as Semaphore**: Doesn’t prevent race conditions within the limit and requires tuning.
- **Overhead**: Minimal additional checks compared to `Semaphore`.

#### Example

```python
import asyncio

async def access_resource(semaphore, name):
    async with semaphore:
        print(f"{name} acquired resource")
        await asyncio.sleep(0.5)
        print(f"{name} released resource")

async def main():
    semaphore = asyncio.BoundedSemaphore(2)  # Allow 2 concurrent accesses
    tasks = [access_resource(semaphore, f"Task {i}") for i in range(4)]
    await asyncio.gather(*tasks)
    # Attempting to release again would raise ValueError
    try:
        semaphore.release()
    except ValueError as e:
        print(f"Error: {e}")

asyncio.run(main())
```

**Output**:

```text
Task 0 acquired resource
Task 1 acquired resource
Task 0 released resource
Task 1 released resource
Task 2 acquired resource
Task 3 acquired resource
Task 2 released resource
Task 3 released resource
Error: BoundedSemaphore released too many times
```

**Explanation**: The `BoundedSemaphore` limits concurrent access to two coroutines, and attempting an extra `release()` raises an error, ensuring the counter’s integrity.

#### Notes

- Use `BoundedSemaphore` over `Semaphore` in most cases unless you specifically need to allow unbalanced releases (rare).
- The error on over-release helps catch bugs early during testing.

### General Notes on Synchronization

- **Use `async with`**: For `Lock`, `Semaphore`, `BoundedSemaphore`, and `Condition`, the `async with` syntax ensures proper acquisition and release, even if exceptions occur.
- **Minimize contention**: Avoid holding synchronization primitives during long `await` operations (e.g., network calls) to maintain concurrency.
- **Combine primitives when needed**: For example, use a `Lock` within a `Semaphore`-protected section if the resource requires both limited concurrency and exclusive access.
- **Test thoroughly**: Asynchronous code with synchronization can be tricky to debug, so use logging or tracing to verify correct behavior.
- **Single-threaded context**: Since `asyncio` is single-threaded, synchronization is only needed for coordinating I/O-bound operations or shared state, not for CPU-bound race conditions (which require multiprocessing or threading).
