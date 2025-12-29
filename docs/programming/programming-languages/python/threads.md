---
sidebar_position: 13
---

# Threading

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Threading is a technique that allows a program to perform multiple operations concurrently within the same process. In Python, the `threading` module provides a way to create and manage threads, enabling developers to write programs that can execute multiple tasks seemingly simultaneously.

## What is a Thread?

A thread is the smallest unit of execution within a process. Key characteristics:

- All threads within a process share the same memory space
- Each thread has its own call stack
- Threads are lighter weight than processes (faster to create/destroy)
- Ideal for I/O-bound tasks where the program spends time waiting for external resources

## The Global Interpreter Lock (GIL)

The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. While this simplifies memory management and prevents race conditions at the interpreter level, it significantly limits the performance of multithreaded Python programs for CPU-bound tasks.

If your workload is I/O-bound, Python threading can still be quite effective. For CPU-bound tasks, the multiprocessing module is a better fit.

## Python's Threading Module

Python's `threading` module builds on the lower-level `_thread` module, providing more convenient abstractions:

```python
import threading
```

## Creating Threads in Python

### Method 1: Using the `Thread` class

```python
import threading

def print_numbers():
    """Function to print numbers from 1 to 5"""
    for i in range(1, 6):
        print(i)

# Create a thread that will execute print_numbers function
thread = threading.Thread(target=print_numbers)

# Start the thread's execution
thread.start()

# Main thread continues execution while the other thread runs
print("Main thread continues...")

# Wait for the thread to complete before proceeding
thread.join()
print("Thread completed")
```

### Method 2: Extending the `Thread` class

```python
import threading

class MyThread(threading.Thread):
    """Custom thread class that prints numbers"""
    def run(self):
        """Method that runs when thread starts"""
        for i in range(1, 6):
            print(f"From thread: {i}")

# Create and start the custom thread
thread = MyThread()
thread.start()

# Main thread continues execution
print("Main thread executing")

# Wait for custom thread to complete
thread.join()
print("Done")
```

### Method 3: Using ThreadPoolExecutor (Python 3.2+)

```python
from concurrent.futures import ThreadPoolExecutor
import time

def task(name):
    """Simulated task that takes some time"""
    print(f"Task {name} started")
    time.sleep(2)  # Simulate work
    print(f"Task {name} completed")

# Create a thread pool with maximum 3 workers
with ThreadPoolExecutor(max_workers=3) as executor:
    # Submit tasks to the pool
    executor.map(task, range(1, 4))
```

## Synchronization Primitives in Python Threading

Python provides several synchronization primitives in the `threading` module to coordinate access to shared resources. These include:

- `Lock`
- `RLock` (Reentrant Lock)
- `Semaphore` / `BoundedSemaphore`
- `Event`
- `Condition`

These are critical for avoiding race conditions, deadlocks, and maintaining consistent program state in multithreaded applications.

### Lock (`threading.Lock`)

A `Lock` is the most basic synchronization primitive. It allows **only one thread** to enter a critical section at a time.

#### Behavior

- Initially unlocked.
- A thread must acquire it before entering the critical section and release it when done.
- If a second thread tries to acquire it while it’s locked, it will block until the lock is available.

#### Use Case

Protecting shared data (counters, file handles, database connections) from concurrent modification.

#### Example

```python
import threading

lock = threading.Lock()
shared_counter = 0

def increment():
    global shared_counter
    for _ in range(100000):
        with lock:  # Equivalent to: lock.acquire(); try/finally block; lock.release()
            shared_counter += 1

threads = [threading.Thread(target=increment) for _ in range(5)]
[t.start() for t in threads]
[t.join() for t in threads]

print("Final counter value:", shared_counter)
```

### RLock (`threading.RLock`)

An `RLock` (Reentrant Lock) is similar to `Lock` but can be **acquired multiple times** by the same thread without blocking itself.

#### Behavior

- Maintains a count of acquisitions/releases.
- Only fully releases when the count drops to zero.

#### Use Case

When a function that acquires a lock calls another function that also tries to acquire the same lock (e.g., nested locking).

#### Example

```python
import threading

rlock = threading.RLock()

def outer():
    with rlock:
        print("Outer lock acquired")
        inner()

def inner():
    with rlock:
        print("Inner lock acquired")

thread = threading.Thread(target=outer)
thread.start()
thread.join()
```

Without `RLock`, this would deadlock because `Lock` is not reentrant.

### Semaphore (`threading.Semaphore`)

A `Semaphore` is a counter-based lock. It allows up to **N threads** to enter a critical section at once. When the counter reaches zero, additional threads block.

#### Behavior

- Useful to limit concurrent access to a resource (e.g., a database connection pool).

#### Use Case

Rate-limiting or controlling the number of concurrent threads accessing a shared resource.

#### Example

```python
import threading
import time

semaphore = threading.Semaphore(3)  # Max 3 concurrent threads

def access_resource(i):
    with semaphore:
        print(f"Thread-{i} acquired semaphore")
        time.sleep(1)
        print(f"Thread-{i} released semaphore")

threads = [threading.Thread(target=access_resource, args=(i,)) for i in range(6)]
[t.start() for t in threads]
[t.join() for t in threads]
```

Only 3 threads run concurrently; the others wait until a slot becomes available.

### Event (`threading.Event`)

#### Overview

An `Event` is a simple flag used for communication between threads. One thread signals an event, and others wait for it.

#### Behavior

- `set()`: Marks the event as signaled.
- `clear()`: Resets the flag.
- `wait()`: Blocks until the event is set.

#### Use Case

One thread must wait until another completes some task or reaches a specific state.

#### Example

```python
import threading
import time

event = threading.Event()

def worker():
    print("Worker waiting for signal")
    event.wait()
    print("Worker received signal and continues")

def controller():
    time.sleep(2)
    print("Controller sending signal")
    event.set()

threading.Thread(target=worker).start()
threading.Thread(target=controller).start()
```

### Condition (`threading.Condition`)

#### Overview

A `Condition` variable allows **complex communication** between threads. It combines a lock with a signaling mechanism.

#### Behavior

- Threads can `wait()` for a certain condition.
- Another thread calls `notify()` (or `notify_all()`) to wake up waiting threads.
- Must acquire the lock before calling `wait()` or `notify()`.

#### Use Case

Useful for producer-consumer problems or when a thread must wait until a specific condition is true.

#### Example

```python
import threading
import time

condition = threading.Condition()
queue = []

def producer():
    with condition:
        print("Producer adding item")
        queue.append(1)
        condition.notify()

def consumer():
    with condition:
        while not queue:
            print("Consumer waiting")
            condition.wait()
        item = queue.pop()
        print("Consumer consumed item:", item)

threading.Thread(target=consumer).start()
time.sleep(1)
threading.Thread(target=producer).start()
```

#### Comparison Table

| Primitive   | Blocks?         | Use Case                       | Reentrant | Allows Multiple Threads |
| ----------- | --------------- | ------------------------------ | --------- | ----------------------- |
| `Lock`      | Yes             | Mutual exclusion               | No        | No                      |
| `RLock`     | Yes             | Nested locking by same thread  | Yes       | No                      |
| `Semaphore` | Yes (after N)   | Limit concurrency (e.g., pool) | N/A       | Yes (up to count)       |
| `Event`     | No (state flag) | Thread signaling               | N/A       | Yes (broadcast)         |
| `Condition` | Yes (waiters)   | Complex thread coordination    | Yes       | Yes                     |

## Thread Communication with Queues

Queues are thread-safe data structures that are perfect for passing messages or data between threads. They handle all the locking internally, making them safer than using shared variables with manual locks.

Key benefits:

- Thread-safe by design
- Blocking operations when queue is empty/full
- First-In-First-Out (FIFO) behavior by default
- Supports priority queues and LIFO queues

```python
import threading
import queue
import time

def producer(q):
    """Thread that produces items for the queue"""
    for i in range(5):
        print(f"Producing item {i}")
        q.put(i)  # Add item to queue
        time.sleep(1)  # Simulate production time

    # Signal completion with a sentinel value
    q.put(None)

def consumer(q):
    """Thread that consumes items from the queue"""
    while True:
        item = q.get()  # Get item from queue (blocks if empty)

        # Check for sentinel value
        if item is None:
            break

        print(f"Consumed item {item}")
        q.task_done()  # Mark task as complete

# Create a queue
q = queue.Queue()

# Create and start threads
producer_thread = threading.Thread(target=producer, args=(q,))
consumer_thread = threading.Thread(target=consumer, args=(q,))

producer_thread.start()
consumer_thread.start()

# Wait for threads to complete
producer_thread.join()
consumer_thread.join()
print("All done")
```

## Thread-Local Data

Thread-local data is data that is unique to each thread. While threads share the same memory space, sometimes you need data that should not be shared between threads. The `threading.local()` class creates an object that maintains separate values for each thread that accesses it.

Use cases:

- Database connections per thread
- Request-specific data in web servers
- Thread-specific configuration
- Any data that shouldn't be shared between threads

```python
import threading

# Create thread-local storage
thread_local = threading.local()

def show_value():
    """Display the thread-specific value"""
    try:
        val = thread_local.value
    except AttributeError:
        print("No value for this thread")
    else:
        print(f"Value for this thread: {val}")

def worker(value):
    """Thread worker that sets and shows a thread-specific value"""
    # Set thread-specific value
    thread_local.value = value

    # Display the value
    show_value()

# Create and start threads with different values
thread1 = threading.Thread(target=worker, args=("Thread 1",))
thread2 = threading.Thread(target=worker, args=("Thread 2",))

thread1.start()
thread2.start()

# Wait for threads to complete
thread1.join()
thread2.join()
```

## Common Use Cases for Threading

1. **I/O-bound operations**: Network requests, file operations, database queries
2. **GUI applications**: Keeping the interface responsive while performing background tasks
3. **Web servers**: Handling multiple client connections simultaneously
4. **Data processing**: Parallel processing of independent data chunks
5. **Monitoring systems**: Concurrently monitoring multiple resources

## Pros and Cons of Threading

### Pros

1. **Improved performance** for I/O-bound applications by overlapping waiting times
2. **Responsive applications** that don't freeze during long operations
3. **Efficient resource utilization** compared to multiprocessing (shared memory)
4. **Simpler than multiprocessing** for many concurrent tasks
5. **Lightweight** compared to spawning new processes

### Cons

1. **Global Interpreter Lock (GIL)**: Python's GIL prevents true parallel execution of threads for CPU-bound tasks
2. **Complexity**: Threaded programs can be harder to debug due to race conditions and deadlocks
3. **Shared state issues**: Requires careful synchronization to avoid data corruption
4. **Not suitable for CPU-bound tasks**: For these, multiprocessing is often better
5. **Thread overhead**: Creating too many threads can degrade performance

## Best Practices for Threading in Python

1. **Avoid shared state** when possible - use thread-local data or queues
2. **Use locks judiciously** - too much locking can serialize your threads
3. **Keep it simple** - complex threading leads to hard-to-debug issues
4. **Use thread pools** for managing worker threads
5. **Prefer queues** for thread communication over shared variables
6. **Consider alternatives** like asyncio for I/O-bound tasks
7. **Use multiprocessing** for CPU-bound tasks
