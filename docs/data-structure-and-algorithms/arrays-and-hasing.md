---
sidebar_position: 2
---

# Arrays and Hashing

## Arrays

### Definition

An array is a contiguous block of memory containing elements of the same data type. It is one of the most fundamental data structures in computer science.

### Key Operations and Time Complexities

| Operation             | Average Case | Worst Case |
|------------------------|--------------|------------|
| Access (by index)      | O(1)         | O(1)       |
| Search (unsorted)      | O(n)         | O(n)       |
| Search (sorted)        | O(log n)*    | O(log n)*  |
| Insert (end)**         | O(1)         | O(1)       |
| Insert (middle)        | O(n)         | O(n)       |
| Deletion               | O(n)         | O(n)       |

_* Binary search on sorted arrays_  
_** Amortized O(1) for dynamic arrays_


### Common Algorithms with Arrays

1.  **Two Pointer Technique**:
    -   **Use Case**: Solving problems like finding pairs, reversing arrays, or merging sorted arrays.
    -   **Time Complexity**: O(n).
2.  **Sliding Window**:
    -   **Use Case**: Problems requiring subarray calculations (e.g., maximum sum subarray).
    -   **Time Complexity**: O(n).
3.  **Sorting**:
    -   **Use Case**: Preprocessing array for binary search, removing duplicates, or meeting specific order requirements.
    -   **Time Complexity**: O(n log n).
4.  **Prefix Sum**:
    -   **Use Case**: Efficiently computing sums or finding subarray sums.
    -   **Time Complexity**: O(n).
5.  **Kadane's Algorithm**:
    -   **Use Case**: Maximum subarray sum.
    -   **Time Complexity**: O(n).

### Code Examples

#### Two Pointer Technique: Find a Pair with Target Sum

```python
def two_sum(arr, target):
    arr.sort()  # O(n log n)
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (arr[left], arr[right])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None
```

#### Sliding Window: Maximum Sum Subarray of Size K

```python
def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return -1

    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, n):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```


## Hashing

### Definition

Hashing is a technique used to map data of arbitrary size to fixed-size values (hashes). In programming, hash tables (or dictionaries in Python) store key-value pairs for fast lookups.

### Hash Table Operations and Time Complexities


| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search    | O(1)         | O(n)       |
| Insert    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |

_* Worst-case arises due to hash collisions, which can degrade performance._


### Common Use Cases

1.  **Counting Frequencies**:
    -   Example: Counting the occurrences of elements in a list.
2.  **Finding Duplicates**:
    -   Example: Checking if an array contains duplicate elements.
3.  **Mapping Relationships**:
    -   Example: Implementing graphs, adjacency lists.
4.  **Efficient Lookups**:
    -   Example: Checking membership in O(1).

### Common Problems and Algorithms

1.  **Two Sum Problem**:
    -   Use hash maps for efficient index lookups in O(n).
2.  **Longest Substring Without Repeating Characters**:
    -   Use hash maps to track character positions for O(n) sliding window implementation.
3.  **Group Anagrams**:
    -   Use hash maps with keys based on sorted characters or frequency counts.

### Code Examples

#### Two Sum with Hashing

```python
def two_sum_hashing(arr, target):
    hash_map = {}  # Stores {value: index}
    
    for i, num in enumerate(arr):
        complement = target - num
        if complement in hash_map:
            return (hash_map[complement], i)
        hash_map[num] = i
    return None

```

#### Longest Substring Without Repeating Characters

```python
def longest_unique_substring(s):
    char_map = {}
    left = 0
    max_length = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

#### Group Anagrams

```python
from collections import defaultdict

def group_anagrams(strs):
    anagrams = defaultdict(list)
    
    for s in strs:
        key = tuple(sorted(s))  # Or use frequency count as key
        anagrams[key].append(s)
    
    return list(anagrams.values())
```


## **Comparison of Arrays and Hashing**

| Feature                 | Array                         | Hash Table                    |
|-------------------------|-------------------------------|--------------------------------|
| Data Organization       | Sequential, index-based       | Key-value pairs               |
| Lookup Time Complexity  | O(n) or O(log n) (sorted)     | O(1) (average case)           |
| Use Cases               | Ordered data, numerical ops   | Quick lookups, counting       |
| Space Complexity        | O(n)                          | O(n)                          |


## Conclusion

-   Arrays are optimal for indexed access and maintaining order.
-   Hash tables are ideal for quick lookups, duplicates, and frequency-related operations.
-   Many problems combine these data structures, such as using hash maps for preprocessing and arrays for iteration.