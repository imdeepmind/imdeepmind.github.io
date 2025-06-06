---
sidebar_position: 5
---

# Sliding Window

The **Sliding Window** technique involves using a window (a subset of elements) that slides over an array or string to solve problems involving subarrays, substrings, or ranges. The window can expand, contract, or move to maintain specific properties like size or sum.

This approach reduces the time complexity of problems that would otherwise require nested loops (O(n²)) to linear time (O(n)).

## Types of Sliding Windows

1.  **Fixed-Sized Window**:

    - The window size remains constant while sliding.
    - Example: Maximum sum of subarray of size `k`.

2.  **Dynamic-Sized Window**:

    - The window size changes based on conditions (e.g., constraints on the sum, distinct elements).
    - Example: Smallest subarray with a sum greater than `x`.

## Time Complexity

- **Efficient**: Sliding Window often processes each element once, resulting in O(n) time complexity.
- The space complexity depends on the problem (e.g., using additional data structures like hash maps or sets).

## Common Problems Solved Using Sliding Window

| Problem Type                    | Description                                                     | Example Problem                           |
| ------------------------------- | --------------------------------------------------------------- | ----------------------------------------- |
| Maximum or Minimum Subarray Sum | Find the subarray with the largest or smallest sum.             | Maximum sum subarray of size `k`          |
| Longest Substring               | Find the longest substring meeting specific constraints.        | Longest substring without repeating chars |
| Smallest or Largest Subarray    | Find the smallest or largest subarray meeting certain criteria. | Smallest subarray with sum ≥ `x`          |
| Frequency Analysis              | Count or track elements in a fixed or dynamic window.           | Count distinct elements in every subarray |

## Example Algorithms and Problems

### Fixed-Size Window

#### Maximum Sum of Subarray of Size `k`

**Problem**: Given an array, find the maximum sum of any subarray of size `k`.

```python
def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return -1

    # Compute the sum of the first window
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # Slide the window
    for i in range(k, n):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum

```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### Dynamic-Size Window

#### Smallest Subarray with Sum ≥ `x`

**Problem**: Find the length of the smallest subarray with a sum greater than or equal to `x`.

```python
def min_subarray_len(arr, x):
    n = len(arr)
    min_len = float('inf')
    current_sum = 0
    left = 0

    for right in range(n):
        current_sum += arr[right]

        # Shrink the window while the sum is ≥ x
        while current_sum >= x:
            min_len = min(min_len, right - left + 1)
            current_sum -= arr[left]
            left += 1

    return min_len if min_len != float('inf') else 0

```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### Longest Substring Without Repeating Characters

**Problem**: Find the longest substring without repeating characters.

```python
def longest_unique_substring(s):
    char_set = set()
    left = 0
    max_length = 0

    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)

    return max_length

```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### Count Distinct Elements in Every Subarray of Size `k`

**Problem**: Given an array and an integer `k`, count the number of distinct elements in every subarray of size `k`.

```python
from collections import defaultdict

def count_distinct_in_window(arr, k):
    freq_map = defaultdict(int)
    result = []

    # Initialize the first window
    for i in range(k):
        freq_map[arr[i]] += 1
    result.append(len(freq_map))

    # Slide the window
    for i in range(k, len(arr)):
        # Remove the leftmost element
        freq_map[arr[i - k]] -= 1
        if freq_map[arr[i - k]] == 0:
            del freq_map[arr[i - k]]

        # Add the new element
        freq_map[arr[i]] += 1

        # Add the count of distinct elements to the result
        result.append(len(freq_map))

    return result

```

**Time Complexity**: O(n)  
**Space Complexity**: O(k)

## Advantages of Sliding Window

- **Efficiency**: Reduces nested loops (O(n²)) to linear (O(n)) solutions.
- **Simplicity**: Often straightforward to implement for problems involving subarrays or substrings.
- **Scalability**: Performs well for large input sizes.

## When to Use Sliding Window

1.  **Subarray or Substring Problems**:
    - Finding ranges or subsequences with specific constraints.
2.  **Optimizations**:
    - Maximizing or minimizing a property within a range.
3.  **Frequency Tracking**:
    - Counting occurrences or distinct elements within a window.
