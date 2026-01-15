---
sidebar_position: 4
---

# Hashing

Hashing is a technique used to map data of arbitrary size to fixed-size values (hashes). In programming, hash tables (or dictionaries in Python) store key-value pairs for fast lookups.

## Hash Table Operations and Time Complexities

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Search    | O(1)         | O(n)       |
| Insert    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |

_\* Worst-case arises due to hash collisions, which can degrade performance._

## Common Use Cases

1. **Counting Frequencies**:
    - Example: Counting the occurrences of elements in a list.
2. **Finding Duplicates**:
    - Example: Checking if an array contains duplicate elements.
3. **Mapping Relationships**:
    - Example: Implementing graphs, adjacency lists.
4. **Efficient Lookups**:
    - Example: Checking membership in O(1).

## Common Problems and Algorithms

1. **Two Sum Problem**:
    - Use hash maps for efficient index lookups in O(n).
2. **Longest Substring Without Repeating Characters**:
    - Use hash maps to track character positions for O(n) sliding window implementation.
3. **Group Anagrams**:
    - Use hash maps with keys based on sorted characters or frequency counts.

## Code Examples

### Two Sum with Hashing

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

### Longest Substring Without Repeating Characters

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

### Group Anagrams

```python
from collections import defaultdict

def group_anagrams(strs):
    anagrams = defaultdict(list)

    for s in strs:
        key = tuple(sorted(s))  # Or use frequency count as key
        anagrams[key].append(s)

    return list(anagrams.values())
```

## Comparison of Arrays and Hashing

| Feature                | Array                       | Hash Table              |
| ---------------------- | --------------------------- | ----------------------- |
| Data Organization      | Sequential, index-based     | Key-value pairs         |
| Lookup Time Complexity | O(n) or O(log n) (sorted)   | O(1) (average case)     |
| Use Cases              | Ordered data, numerical ops | Quick lookups, counting |
| Space Complexity       | O(n)                        | O(n)                    |
