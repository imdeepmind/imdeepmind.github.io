---
sidebar_position: 4
---

# Common Data Structures in Python

An overview of common data structures in Python, including properties, pros, cons, and mutability.

## Lists

- **Definition**: Ordered, mutable collection of items.
- **Syntax**: `my_list = [1, 2, 3]`
- **Mutability**: Mutable
- **Pros**:
  - Dynamic: Can grow and shrink as needed.
  - Supports heterogeneous data (elements of different types).
  - Supports indexing and slicing.
- **Cons**:
  - Slower in search operations compared to sets.
  - More memory usage compared to arrays in other languages.
- **Use Cases**: Managing ordered collections where you may need to add, modify, or remove elements frequently.

## Tuples

- **Definition**: Ordered, immutable collection of items.
- **Syntax**: `my_tuple = (1, 2, 3)`
- **Mutability**: Immutable
- **Pros**:
  - Faster than lists due to immutability.
  - Hashable (can be used as keys in dictionaries if they contain only hashable types).
- **Cons**: Cannot be modified (added to, removed from, or updated).
- **Use Cases**: Storing fixed collections of items, like coordinates or configurations that should not change.

## Sets

- **Definition**: Unordered collection of unique items.
- **Syntax**: `my_set = {1, 2, 3}`
- **Mutability**: Mutable (also an immutable variant `frozenset`)
- **Pros**:
  - Fast membership testing and duplicates are automatically removed.
  - Useful for mathematical set operations like union, intersection, and difference.
- **Cons**: Unordered, so elements cannot be accessed by index.
- **Use Cases**: Removing duplicates, mathematical set operations, or efficient membership testing.

## Dictionaries

- **Definition**: Collection of key-value pairs, unordered until Python 3.7.
- **Syntax**: `my_dict = {'a': 1, 'b': 2}`
- **Mutability**: Mutable
- **Pros**:
  - Provides fast lookups and updates using keys.
  - Flexible for storing complex data with relationships.
- **Cons**:
  - Uses more memory due to hashing.
  - Keys must be unique and hashable (immutable types like strings, numbers, or tuples).
- **Use Cases**: Mapping relationships between data, configuration settings, counting occurrences, or creating indexable objects.

## Strings

- **Definition**: Sequence of Unicode characters.
- **Syntax**: `my_string = "Hello"`
- **Mutability**: Immutable
- **Pros**:
  - Efficient memory management with rich functionality for string operations.
  - Supports indexing and slicing.
- **Cons**: Immutability requires creating a new string for modifications.
- **Use Cases**: Text processing, storing fixed data that doesn’t change, creating dictionary keys.

## Byte Arrays and Bytes

- **Definition**: Byte-based data structures; `bytes` is immutable, `bytearray` is mutable.
- **Syntax**: `my_bytes = b"hello"` and `my_bytearray = bytearray(b"hello")`
- **Mutability**: `bytes` is immutable; `bytearray` is mutable.
- **Pros**: Efficient for handling binary data.
- **Cons**: Limited operations compared to strings.
- **Use Cases**: Handling data in binary format, image processing, file I/O, networking protocols.

## Arrays

- **Definition**: Homogeneous, efficient sequence of numbers.
- **Syntax**: `import array; my_array = array.array('i', [1, 2, 3])`
- **Mutability**: Mutable
- **Pros**: More memory-efficient than lists for large numeric data.
- **Cons**: Limited to storing only numbers of a single type.
- **Use Cases**: High-performance applications where memory optimization for numeric data is critical.

## Deque

- **Definition**: Double-ended queue with fast appends and pops from both ends.
- **Syntax**: `from collections import deque; my_deque = deque([1, 2, 3])`
- **Mutability**: Mutable
- **Pros**: Optimized for adding/removing elements from both ends, unlike lists.
- **Cons**: Slower random access compared to lists.
- **Use Cases**: Implementing queues or stacks efficiently where both ends need frequent updates.

## Heaps

- **Definition**: Min-heap, where the smallest element is always at the root.
- **Syntax**: `import heapq; my_heap = []; heapq.heappush(my_heap, 3)`
- **Mutability**: Mutable
- **Pros**: Provides a priority queue implementation and efficient access to the smallest element.
- **Cons**: Limited to min-heap by default; requires customization for max-heaps.
- **Use Cases**: Priority queues, scheduling tasks, or finding the smallest/largest `k` elements.

## Named Tuples

- **Definition**: Tuple-like data structure with named fields.
- **Syntax**: `from collections import namedtuple; Point = namedtuple('Point', ['x', 'y']); p = Point(1, 2)`
- **Mutability**: Immutable
- **Pros**: Readable, self-documenting code without using dictionaries.
- **Cons**: Immutable, so elements cannot be modified.
- **Use Cases**: Representing simple data structures where fields are fixed, like a coordinate point (x, y).

## Summary Table of Common Python

| Data Structure | Ordered        | Mutable | Unique Elements | Access Time | Use Case Examples                 |
| -------------- | -------------- | ------- | --------------- | ----------- | --------------------------------- |
| List           | Yes            | Yes     | No              | O(1) index  | Dynamic, ordered collections      |
| Tuple          | Yes            | No      | No              | O(1) index  | Immutable, ordered collections    |
| Set            | No             | Yes     | Yes             | O(1)        | Unique elements, set operations   |
| Dictionary     | No (until 3.7) | Yes     | Keys unique     | O(1) key    | Key-value pairs, fast lookup      |
| String         | Yes            | No      | N/A             | O(1) index  | Text processing, fixed data       |
| Bytearray      | Yes            | Yes     | N/A             | O(1) index  | Binary data manipulation          |
| Deque          | Yes            | Yes     | N/A             | O(1) ends   | Queues, stacks                    |
| Heap (heapq)   | No             | Yes     | No              | O(log n)    | Priority queues, top `k` elements |
| Named Tuple    | Yes            | No      | No              | O(1) index  | Readable tuple-like structures    |
