---
sidebar_position: 6
---

# Queue

A **queue** is a linear data structure that follows the **First In First Out (FIFO)** principle. Elements are added at one end (called the **rear**) and removed from the other end (called the **front**).

## Main Data Structure Implementation in Python

### Using List

```python
# Initialize a queue
queue = []

# Enqueue operation
queue.append(10)
queue.append(20)

# Dequeue operation
if queue:
    element = queue.pop(0)  # Removes the first element
    print("Dequeued element:", element)

# Check if queue is empty
print("Is the queue empty?", len(queue) == 0)
```

**Drawback:** Removing elements from the front (pop(0)) has O(n) time complexity because it requires shifting all elements.

### Using `collections.deque`

```python
from collections import deque

# Initialize a queue
queue = deque()

# Enqueue operation
queue.append(10)
queue.append(20)

# Dequeue operation
if queue:
    element = queue.popleft()  # O(1) operation
    print("Dequeued element:", element)

# Check if queue is empty
print("Is the queue empty?", len(queue) == 0)
```

**Advantage:** Efficient O(1) time complexity for both enqueue and dequeue operations.

### Using `queue.Queue` from Standard Library

```python
from queue import Queue

# Initialize a queue
q = Queue()

# Enqueue operation
q.put(10)
q.put(20)

# Dequeue operation
if not q.empty():
    element = q.get()  # O(1) operation
    print("Dequeued element:", element)

# Check if queue is empty
print("Is the queue empty?", q.empty())
```

**Advantage:** Thread-safe implementation for multithreading environments.

## Common Algorithms with Queues

### Level Order Traversal in Binary Trees

```python
from collections import deque

def level_order_traversal(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result
```

### Breadth-First Search (BFS) in Graphs

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []

    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            result.append(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append(neighbor)
    return result
```

### Generate Binary Numbers

```python
from collections import deque

def generate_binary_numbers(n):
    result = []
    queue = deque(["1"])

    for _ in range(n):
        binary = queue.popleft()
        result.append(binary)
        queue.append(binary + "0")
        queue.append(binary + "1")

    return result
```

## Time Complexity

| Operation   | List | `deque` | `queue.Queue` |
| ----------- | ---- | ------- | ------------- |
| Enqueue     | O(1) | O(1)    | O(1)          |
| Dequeue     | O(n) | O(1)    | O(1)          |
| Access/Peek | O(1) | O(1)    | O(1)          |

## Use Cases

1. **Scheduling**: Used in task scheduling algorithms like Round Robin.
2. **Breadth-First Search (BFS)**: Exploring nodes layer by layer in graphs or trees.
3. **Data Buffers**: For managing data streams in IO operations.
4. **Print Queue**: Managing a sequence of print jobs.
5. **Order Processing**: Handling orders in the sequence they arrive.
6. **Producer-Consumer Problem**: Queue is used to synchronize producer and consumer threads.

## Variations of Queue

### Circular Queue

- A queue where the last position is connected to the first to make it circular.
- Efficient use of space.

```python
class CircularQueue:
    def __init__(self, capacity):
        self.queue = [None] * capacity
        self.front = 0
        self.rear = 0
        self.capacity = capacity
        self.size = 0

    def enqueue(self, item):
        if self.size == self.capacity:
            raise OverflowError("Queue is full")
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1

    def dequeue(self):
        if self.size == 0:
            raise IndexError("Queue is empty")
        item = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity
```

### Priority Queue

- Elements are dequeued based on priority rather than FIFO order.

```python
import heapq

class PriorityQueue:
    def __init__(self):
        self.queue = []

    def enqueue(self, priority, item):
        heapq.heappush(self.queue, (priority, item))

    def dequeue(self):
        if not self.queue:
            raise IndexError("Queue is empty")
        return heapq.heappop(self.queue)[1]
```

### Double-Ended Queue (Deque)

- Allows insertion and deletion from both ends.

```python
from collections import deque

deque_example = deque()
deque_example.append(10)       # Add to rear
deque_example.appendleft(20)  # Add to front
deque_example.pop()           # Remove from rear
deque_example.popleft()       # Remove from front
```
