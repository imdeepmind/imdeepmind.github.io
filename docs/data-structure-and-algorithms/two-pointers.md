---
sidebar_position: 3
---

# Two Pointers

## Definition

The **Two Pointers** technique involves using two pointers (or indices) to traverse or manipulate a data structure, typically an array or string. These pointers can move in the same direction, opposite directions, or with one pointer lagging behind the other.

This technique is particularly useful for problems involving searching, sorting, or comparing elements in arrays.


## Key Scenarios for Two Pointers

1.  **Opposite Direction (Start and End)**:
    -   Used when the problem involves comparisons or operations on both ends of the array.
    -   Example: Checking if an array is a palindrome.
2.  **Same Direction (Sliding)**:
    -   Both pointers move in the same direction to explore different ranges or maintain a dynamic window.
    -   Example: Sliding window problems like finding the smallest subarray with a given sum.
3.  **Fixed vs Moving**:
    -   One pointer is fixed, while the other traverses the array to find a solution.
    -   Example: Finding pairs with a specific sum.


## Time Complexity

-   **Efficient**: Most Two Pointers algorithms run in O(n) because each pointer usually traverses the array only once.
-   Some problems may require preprocessing like sorting, which adds an additional O(n log n).

## Common Problems Solved Using Two Pointers

| Problem Type                          | Description                                                                 | Example Problem                             |
|---------------------------------------|-----------------------------------------------------------------------------|--------------------------------------------|
| Finding Pairs with a Target Sum       | Check if there are two elements in an array that add up to a target value.  | Two Sum (sorted array)                     |
| Sorting-related Comparisons           | Merge two sorted arrays, remove duplicates, etc.                           | Merging sorted arrays                      |
| Palindrome Check                      | Determine if a string or array is a palindrome.                            | Check Palindrome                           |
| Removing Elements                     | Filter elements or modify an array in-place.                               | Remove duplicates from sorted array        |
| Window-based Optimization             | Find subarrays or windows meeting specific criteria.                       | Longest substring without repeating chars  |


## Example Algorithms and Problems

### A. Finding Pairs with a Target Sum

Two pointers approach is ideal for sorted arrays.  
**Problem**: Find if a pair in the array sums to a given target.

```python
def two_sum_sorted(arr, target):
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

**Time Complexity**:

-   Sorting: O(n log n) (if not sorted already)
-   Two Pointers: O(n)
-   Overall: O(n log n)

### Check if a String is a Palindrome

Use two pointers to compare characters from both ends.

```python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    
    return True
```

**Time Complexity**: O(n)

### Remove Duplicates from Sorted Array

Modify the array in-place to remove duplicates.

```python
def remove_duplicates(nums):
    if not nums:
        return 0
    
    write_pointer = 1
    for read_pointer in range(1, len(nums)):
        if nums[read_pointer] != nums[read_pointer - 1]:
            nums[write_pointer] = nums[read_pointer]
            write_pointer += 1
    
    return write_pointer
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)



## Advantages of Two Pointers

-   **Efficiency**: Often reduces O(n²) solutions to O(n).
-   **Space-Saving**: Typically requires O(1) additional space.
-   **Simplicity**: Straightforward to implement for many problems.


## When to Use Two Pointers

1.  **Array or String Problems**: Involve ranges, pairs, or comparisons.
2.  **Sorted Data**: Exploit order for quick navigation.
3.  **Optimization Problems**: Maximize/minimize a value within constraints.

## Summary

The **Two Pointers** technique is a versatile and efficient approach for solving a variety of problems in arrays and strings. By carefully managing the movement of pointers, you can achieve significant performance improvements, especially for sorted or linear data structures.