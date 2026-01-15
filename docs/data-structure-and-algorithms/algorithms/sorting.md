---
sidebar_position: 5
---

# Sorting Algorithms

Sorting is the process of arranging data in a specific order, often ascending or descending. Sorting is fundamental in computer science as it makes data more manageable, improves the performance of search operations, and forms the foundation of various algorithms.

## Classification of Sorting Algorithms

Sorting algorithms can be classified based on various factors:

## By Comparison

- **Comparison-Based Sorting**: Elements are compared with each other to decide their order (e.g., Bubble Sort, Merge Sort).
- **Non-Comparison Sorting**: Sorting is done without direct comparison of elements (e.g., Counting Sort, Radix Sort).

### By Stability

- **Stable Sort**: Maintains the relative order of records with equal keys (e.g., Merge Sort).
- **Unstable Sort**: Does not guarantee relative order (e.g., Quick Sort).

### By Time Complexity

- **O(n²) Algorithms**: Bubble Sort, Insertion Sort, Selection Sort.
- **O(n log n) Algorithms**: Merge Sort, Quick Sort, Heap Sort.
- **Linear Time**: Counting Sort, Radix Sort, Bucket Sort (for specific scenarios).

### By Recursion

- **Recursive Algorithms**: Merge Sort, Quick Sort.
- **Iterative Algorithms**: Bubble Sort, Selection Sort.

## Common Sorting Algorithms

### Bubble Sort

- **Description**: Repeatedly swaps adjacent elements if they are in the wrong order.
- **Time Complexity**:
  - Best Case: \(O(n)\) (when the list is already sorted).
  - Worst Case: \(O(n^2)\).
- **Space Complexity**: \(O(1)\).

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Example
print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Selection Sort

- **Description**: Finds the minimum element and places it at the correct position in each iteration.
- **Time Complexity**: \(O(n^2)\) for all cases.
- **Space Complexity**: \(O(1)\).

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

# Example
print(selection_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Insertion Sort

- **Description**: Builds the sorted array one element at a time by inserting elements into their correct position.
- **Time Complexity**:
  - Best Case: \(O(n)\) (already sorted).
  - Worst Case: \(O(n^2)\).
- **Space Complexity**: \(O(1)\).

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Example
print(insertion_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Merge Sort

- **Description**: Divides the array into halves, sorts each half, and merges them.
- **Time Complexity**: \(O(n \log n)\) for all cases.
- **Space Complexity**: \(O(n)\).

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

# Example
print(merge_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Quick Sort

- **Description**: Picks a pivot and partitions the array around it, recursively sorting subarrays.
- **Time Complexity**:
  - Best and Average Case: \(O(n \log n)\).
  - Worst Case: \(O(n^2)\) (occurs when pivot selection is poor, e.g., sorted array with last element as pivot).
- **Space Complexity**: \(O(\log n)\) (due to recursion).

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Example
print(quick_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Heap Sort

- **Description**: Builds a max-heap and repeatedly extracts the maximum element.
- **Time Complexity**: \(O(n \log n)\) for all cases.
- **Space Complexity**: \(O(1)\).

```python
def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[i] < arr[l]:
        largest = l

    if r < n and arr[largest] < arr[r]:
        largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

# Example
print(heap_sort([64, 34, 25, 12, 22, 11, 90]))
```

### Counting Sort (Non-Comparison)

- **Description**: Counts the occurrence of elements and sorts based on their frequency.
- **Time Complexity**: \(O(n + k)\), where \(k\) is the range of input values.
- **Space Complexity**: \(O(k)\).

```python
def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    for num in arr:
        count[num] += 1
    sorted_arr = []
    for i in range(len(count)):
        sorted_arr.extend([i] * count[i])
    return sorted_arr

# Example
print(counting_sort([4, 2, 2, 8, 3, 3, 1]))
```

## Comparison of Sorting Algorithms

| Algorithm      | Time Complexity (Best) | Time Complexity (Worst) | Time Complexity (Average) | Space Complexity | Stable |
| -------------- | ---------------------- | ----------------------- | ------------------------- | ---------------- | ------ |
| Bubble Sort    | \(O(n)\)               | \(O(n^2)\)              | \(O(n^2)\)                | \(O(1)\)         | Yes    |
| Selection Sort | \(O(n^2)\)             | \(O(n^2)\)              | \(O(n^2)\)                | \(O(1)\)         | No     |
| Insertion Sort | \(O(n)\)               | \(O(n^2)\)              | \(O(n^2)\)                | \(O(1)\)         | Yes    |
| Merge Sort     | \(O(n \log n)\)        | \(O(n \log n)\)         | \(O(n \log n)\)           | \(O(n)\)         | Yes    |
| Quick Sort     | \(O(n \log n)\)        | \(O(n^2)\)              | \(O(n \log n)\)           | \(O(\log n)\)    | No     |
| Heap Sort      | \(O(n \log n)\)        | \(O(n \log n)\)         | \(O(n \log n)\)           | \(O(1)\)         | No     |
| Counting Sort  | \(O(n + k)\)           | \(O(n + k)\)            | \(O(n + k)\)              | \(O(k)\)         | Yes    |
