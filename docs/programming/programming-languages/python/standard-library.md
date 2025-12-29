---
sidebar_position: 7
---

# Standard Library

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Python's **Standard Library** is a collection of modules that are included with Python. These modules provide a wide variety of functionalities that help solve common programming tasks like working with files, handling data, and performing operations on collections, strings, etc. The great thing about the Python Standard Library is that it’s built-in and doesn’t require any external installation.

Below, we’ll cover some important modules from the standard library, focusing on `itertools`, `collections`, `functools`, and `os`.

## `itertools` Module

`itertools` provides a set of fast, memory-efficient tools that work on iterators to produce complex iterators. These are very useful for iterating over data in a functional way and for creating efficient looping constructs.

### `count(start=0, step=1)`

Returns an iterator that generates consecutive numbers, starting from `start` and incrementing by `step`.

```python
import itertools
for num in itertools.count(10, 2):
    if num > 20: break
    print(num)
```

Output:

```text
10
12
14
16
18
20
```

### `cycle(iterable)`

Cycles through an iterable endlessly.

```python
import itertools
counter = 0
for val in itertools.cycle([1, 2, 3]):
    if counter == 6: break
    print(val)
    counter += 1
```

Output:

```text
1
2
3
1
2
3
```

### `repeat(object, times=None)`

Repeats an object for a specified number of times.

```python
import itertools
for val in itertools.repeat("Hello", 3):
    print(val)
```

Output:

```text
Hello
Hello
Hello
```

### `permutations(iterable, r)`

Returns all possible permutations of length `r` from the iterable.

```python
import itertools
for perm in itertools.permutations([1, 2, 3]):
    print(perm)
```

Output:

```text
(1, 2, 3)
(1, 3, 2)
(2, 1, 3)
(2, 3, 1)
(3, 1, 2)
(3, 2, 1)
```

### `combinations(iterable, r)`

Returns all possible combinations of length `r` from the iterable.

```python
import itertools
for comb in itertools.combinations([1, 2, 3]):
    print(comb)
```

Output:

```text
(1,)
(2,)
(3,)
(1, 2)
(1, 3)
(2, 3)
```

### `product(*iterables, repeat=1)`

Returns the Cartesian product of input iterables. Equivalent to nested for-loops.

```python
import itertools
for prod in itertools.product([1, 2], repeat=2):
    print(prod)
```

Output:

```text
(1, 1)
(1, 2)
(2, 1)
(2, 2)
```

## `collections` Module

The `collections` module provides specialized container datatypes, beyond the built-in `list`, `dict`, `tuple`, and `set`.

### `namedtuple(typename, field_names)`

Creates a tuple-like object with named fields, making the code more readable.

```python
from collections import namedtuple
Person = namedtuple('Person', 'name age')
p1 = Person(name='Alice', age=30)
print(p1.name, p1.age)
```

Output:

```text
Alice 30
```

### `deque`

A list-like container optimized for appending and popping elements from both ends.

```python
from collections import deque
d = deque([1, 2, 3])
d.appendleft(0)
d.append(4)
print(d)
```

Output:

```text
deque([0, 1, 2, 3, 4])
```

### `Counter`

A subclass of `dict` designed to count hashable objects. It returns the count of each element in an iterable.

```python
from collections import Counter
text = "apple apple orange"
count = Counter(text.split())
print(count)
```

Output:

```text
Counter({'apple': 2, 'orange': 1})
```

### `defaultdict`

A subclass of `dict` that provides a default value for non-existent keys. Useful for handling missing dictionary keys gracefully.

```python
from collections import defaultdict
d = defaultdict(int)
d['a'] += 1
print(d)
```

Output:

```text
defaultdict(<class 'int'>, {'a': 1})
```

### `OrderedDict`

A dictionary that maintains the order of items as they are added.

```python
from collections import OrderedDict
d = OrderedDict([('a', 1), ('b', 2)])
d['c'] = 3
print(d)
```

Output:

```text
OrderedDict([('a', 1), ('b', 2), ('c', 3)])
```

## `functools` Module

The `functools` module provides higher-order functions that act on or return other functions. It includes tools for memoization, function composition, and partial function application.

### `partial(func, *args, **kwargs)`

Creates a new function with some arguments pre-filled.

```python
from functools import partial
def multiply(a, b):
    return a * b
double = partial(multiply, 2)
print(double(5))  # 2 * 5
```

Output:

```text
10
```

### `lru_cache(maxsize=128)`

A decorator that caches the results of function calls to speed up repeated calls with the same arguments.

```python
from functools import lru_cache
@lru_cache(maxsize=2)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5))  # 5
print(fibonacci(6))  # 8
```

Output:

```text
5
8
```

### `reduce(function, iterable, initializer=None)`

Applies a binary function to a sequence of elements, reducing the sequence to a single value.

```python
from functools import reduce
nums = [1, 2, 3, 4]
result = reduce(lambda x, y: x * y, nums)
print(result)
```

Output:

```text
24
```

## `os` Module

The `os` module provides a way to interact with the operating system, enabling tasks like file manipulation, directory traversal, and process management.

### `os.getcwd()`

Returns the current working directory.

```python
import os
print(os.getcwd())
```

### `os.listdir(path)`

Lists the contents of a directory.

```python
import os
print(os.listdir('.'))  # Lists files in the current directory
```

### `os.path.join(path, *paths)`

Joins one or more path components.

```python
import os
path = os.path.join('folder', 'subfolder', 'file.txt')
print(path)
```

Output:

```text
folder/subfolder/file.txt
```

### `os.mkdir(path)`

Creates a directory.

```python
import os
os.mkdir('new_folder')
```

### `os.remove(path)`

Removes a file.

```python
import os
os.remove('file.txt')
```

### `os.environ`

Provides access to environment variables.

```python
import os
print(os.environ.get('HOME'))  # Prints the user's home directory path
```

## `heapq` Module

The `heapq` module in Python provides an implementation of the **heap queue algorithm**, also known as the **priority queue algorithm**. Heaps are binary trees that satisfy the heap property: in a **min-heap**, for any given node, the value of the parent is less than or equal to the values of its children, and in a **max-heap**, the value of the parent is greater than or equal to the values of its children. Python’s `heapq` module implements a **min-heap** by default, where the smallest element is always at the root.

### `heapify(iterable)`

The `heapify()` function transforms a list into a heap, in-place, in linear time. It takes an iterable and rearranges the elements so that they satisfy the heap property.

```python
import heapq
nums = [10, 20, 15, 30, 40]
heapq.heapify(nums)
print(nums)
```

Output:

```text
[10, 20, 15, 30, 40]
```

After applying `heapify()`, the list `nums` is transformed into a heap where the smallest element is at the root.

### `heappush(heap, item)`

The `heappush()` function pushes an element onto the heap, maintaining the heap property. The element is inserted in the correct position, so that the heap property is still valid after the insertion.

```python
import heapq
heap = [10, 20, 15]
heapq.heappush(heap, 5)
print(heap)
```

Output:

```text
[5, 10, 15, 20]
```

The element `5` is inserted into the heap and the heap property is maintained.

### `heappop(heap)`

The `heappop()` function removes and returns the smallest element from the heap, maintaining the heap property. After the smallest element is removed, the heap is restructured to ensure the next smallest element is at the root.

```python
import heapq
heap = [5, 10, 15, 20]
smallest = heapq.heappop(heap)
print(smallest)  # 5
print(heap)      # [10, 20, 15]
```

Output:

```text
5
[10, 20, 15]
```

The smallest element `5` is removed, and the heap property is maintained.

### `heappushpop(heap, item)`

The `heappushpop()` function first pushes an element onto the heap and then pops and returns the smallest element. This operation is more efficient than doing a separate `heappush()` followed by a `heappop()`, because it only requires one heap rearrangement.

```python
import heapq
heap = [10, 20, 30]
result = heapq.heappushpop(heap, 15)
print(result)  # 10
print(heap)    # [15, 20, 30]
```

Output:

```text
10
[15, 20, 30]
```

The element `15` is added to the heap, and the smallest element (`10`) is popped and returned.

### `heapreplace(heap, item)`

The `heapreplace()` function pops the smallest element from the heap and then pushes a new element onto the heap. This is similar to performing a `heappop()` followed by a `heappush()`, but it's more efficient as it only requires one rearrangement of the heap.

```python
import heapq
heap = [10, 20, 30]
result = heapq.heapreplace(heap, 5)
print(result)  # 10
print(heap)    # [5, 20, 30]
```

Output:

```text
10
[5, 20, 30]
```

The smallest element (`10`) is removed, and the new element (`5`) is added to the heap.

### `nlargest(n, iterable, key=None)`

The `nlargest()` function returns the `n` largest elements from an iterable, based on the natural order or a specified `key` function. This function uses a heap internally for efficient selection.

```python
import heapq
nums = [10, 20, 15, 30, 5]
largest = heapq.nlargest(3, nums)
print(largest)
```

Output:

```text
[30, 20, 15]
```

The three largest numbers from the list are returned.

### `nsmallest(n, iterable, key=None)`

The `nsmallest()` function returns the `n` smallest elements from an iterable, based on the natural order or a specified `key` function. This function also uses a heap internally.

```python
import heapq
nums = [10, 20, 15, 30, 5]
smallest = heapq.nsmallest(3, nums)
print(smallest)
```

Output:

```text
[5, 10, 15]
```

The three smallest numbers from the list are returned.
