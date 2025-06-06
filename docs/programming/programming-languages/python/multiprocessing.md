---
sidebar_position: 14
---

# Multiprocessing

Multiprocessing is Python's solution to achieving true parallelism by running multiple processes simultaneously. Unlike threading (which shares memory but is limited by the GIL), multiprocessing creates separate Python processes, each with its own memory space and Python interpreter.

## Key Advantages

- **True parallel execution** (no GIL limitations)
- **Better CPU utilization** for computation-heavy tasks
- **Process isolation** prevents memory corruption
- **Crash resilience** (one process crashing doesn't affect others)

## Basic Example: Running Simple Processes

```python
from multiprocessing import Process
import os

def task(name):
    """A simple task that prints process info"""
    print(f"Task {name} running in process {os.getpid()}")

if __name__ == '__main__':
    # Create 3 processes
    processes = []
    for i in range(3):
        p = Process(target=task, args=(f"Job-{i}",))
        processes.append(p)
        p.start()  # Launch the process

    # Wait for all to complete
    for p in processes:
        p.join()

    print("All processes completed")
```

**Explanation:**

1. We define a `task()` function that each process will run
2. `Process()` creates a new process (but doesn't start it yet)
3. `start()` launches the process
4. `join()` makes the main program wait for child processes
5. Each process gets its own PID (process ID)

## Process Pools

Process pools create a fixed number of worker processes that can handle multiple tasks efficiently. They:

- Maintain reusable worker processes (avoid creation overhead)
- Automatically distribute tasks
- Collect results in order
- Are ideal for parallelizing CPU-bound operations

### Key Methods

1. `map()` - Parallel version of built-in `map()`
2. `apply()` - Run one task at a time
3. `map_async()` - Non-blocking `map()`
4. `apply_async()` - Non-blocking `apply()`

### Basic Example

```python
from multiprocessing import Pool
import time

def square(x):
    print(f"Processing {x}")
    time.sleep(1)  # Simulate work
    return x * x

if __name__ == '__main__':
    numbers = [1, 2, 3, 4, 5]

    # Create pool with 3 workers
    with Pool(3) as pool:
        results = pool.map(square, numbers)

    print(f"Squares: {results}")
    # Output after ~2 seconds (not 5):
    # [1, 4, 9, 16, 25]
```

### Async Example (Non-Blocking)

```python
from multiprocessing import Pool

def cube(x):
    return x ** 3

if __name__ == '__main__':
    with Pool() as pool:  # Defaults to CPU count
        async_result = pool.map_async(cube, [1, 2, 3])

        # Do other work here while processing...
        print("Main thread working...")

        # Get results when ready
        print(async_result.get())  # [1, 8, 27]
```

### Error Handling

```python
def safe_divide(x):
    try:
        return 100 / x
    except Exception as e:
        return f"Error: {e}"

with Pool(2) as pool:
    print(pool.map(safe_divide, [10, 0, 5]))
    # [10.0, 'Error: division by zero', 20.0]
```

### When to Use Process Pools?

- Batch processing similar operations
- CPU-bound tasks with independent data
- When you need ordered results
- For better resource management than manual processes

## Sharing Data Between Processes

Since processes don't share memory by default, we need special techniques:

### Using Queues for Communication

```python
from multiprocessing import Process, Queue

def producer(queue, items):
    """Adds items to a shared queue"""
    for item in items:
        print(f"Producing {item}")
        queue.put(item)

def consumer(queue):
    """Processes items from queue"""
    while True:
        item = queue.get()
        if item is None:  # Poison pill to stop
            break
        print(f"Consuming {item}")

if __name__ == '__main__':
    q = Queue()
    items = ['A', 'B', 'C', 'D']

    # Start producer and consumer
    p1 = Process(target=producer, args=(q, items))
    p2 = Process(target=consumer, args=(q,))

    p1.start()
    p2.start()

    p1.join()
    q.put(None)  # Signal consumer to stop
    p2.join()
```

**Explanation:**

- `Queue()` creates a process-safe FIFO queue
- Producer puts items in queue
- Consumer takes items out
- `None` acts as a "poison pill" to stop consumer

### Shared Memory with Value and Array

```python
from multiprocessing import Process, Value, Array

def increment_counter(counter):
    """Modifies a shared counter"""
    for _ in range(1000):
        counter.value += 1

def modify_array(arr):
    """Changes shared array elements"""
    for i in range(len(arr)):
        arr[i] *= 2

if __name__ == '__main__':
    # Shared integer
    counter = Value('i', 0)  # 'i' = signed integer

    # Shared array
    arr = Array('d', [1.0, 2.0, 3.0])  # 'd' = double

    # Create processes
    p1 = Process(target=increment_counter, args=(counter,))
    p2 = Process(target=modify_array, args=(arr,))

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print(f"Final counter: {counter.value}")
    print(f"Modified array: {list(arr)}")
```

**Note:** For shared variables, you should use locks to prevent race conditions.

## Synchronization Between Processes

### Using Locks for Safe Access

```python
from multiprocessing import Process, Lock, Value
import time

def safe_increment(lock, counter):
    """Thread-safe counter increment"""
    for _ in range(5):
        time.sleep(0.1)  # Simulate work
        with lock:
            counter.value += 1
            print(f"Process {os.getpid()} incremented to {counter.value}")

if __name__ == '__main__':
    lock = Lock()
    counter = Value('i', 0)

    processes = []
    for _ in range(3):
        p = Process(target=safe_increment, args=(lock, counter))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()

    print(f"Final counter value: {counter.value}")
```

**Key Concepts**:

- `Lock()` creates a process-safe lock
- `with lock:` creates a critical section
- Only one process can execute the locked code at a time

## When to Use Multiprocessing?

### Good Use Cases

- **Number crunching** (math, statistics)
- **Machine learning** model training
- **Data processing** (large datasets)
- **Image/video processing**

### When to Avoid

- **Simple scripts** (overhead isn't worth it)
- **I/O-bound tasks** (use threading or asyncio instead)
- **When sharing lots of data** (IPC has overhead)

## Best Practices

1. **Use `if __name__ == '__main__':`** to prevent infinite process spawning
2. **Prefer Pool for batch processing** when possible
3. **Minimize shared state** - processes work best when independent
4. **Use queues instead of shared memory** when possible
5. **Consider ProcessPoolExecutor** for future compatibility
