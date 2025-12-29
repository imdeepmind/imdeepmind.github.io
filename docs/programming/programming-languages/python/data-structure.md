---
sidebar_position: 4
---

# Common Data Structures in Python

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Python provides several **built-in data structures** that are highly optimized and allow developers to efficiently manage and manipulate data. The key ones are `list`, `dict`, `set`, `tuple`, and `str` (string). Let’s explore these data structures, their implementations, and the common methods associated with each.

## List

A Python `list` is a **dynamic array** that can hold heterogeneous elements and allows operations like insertion, deletion, and slicing.

### Characteristic

- **Mutable**: We can modify its content.
- **Ordered**: Maintains the order of elements.
- **Heterogeneous**: Can store elements of different data types.

### Implementation

- Implemented as a **dynamic array** in C.
- Uses a **contiguous memory block**, so accessing elements by index is **O(1)**.
- When appending elements, the list grows dynamically, with Python overallocating memory to reduce frequent reallocations.

### Time Complexity

| Operation            | Complexity     |
| -------------------- | -------------- |
| Indexing (`list[i]`) | O(1)           |
| Appending            | Amortized O(1) |
| Insertion (at i)     | O(n)           |
| Deletion (at i)      | O(n)           |
| Searching            | O(n)           |

### Common Methods

| **Method**                      | **Description**                                          |
| ------------------------------- | -------------------------------------------------------- |
| `append(x)`                     | Adds an item to the end of the list.                     |
| `insert(i, x)`                  | Inserts an item at a specific index.                     |
| `remove(x)`                     | Removes the first occurrence of an item.                 |
| `pop([i])`                      | Removes and returns the item at the given index.         |
| `extend(iterable)`              | Extends the list by appending elements from an iterable. |
| `index(x[, start[, end]])`      | Returns the index of the first occurrence of an item.    |
| `count(x)`                      | Counts the number of occurrences of an item.             |
| `sort(key=None, reverse=False)` | Sorts the list in ascending or descending order.         |
| `reverse()`                     | Reverses the elements of the list in place.              |
| `copy()`                        | Returns a shallow copy of the list.                      |
| `clear()`                       | Removes all items from the list.                         |

### Example

```python
lst = [1, 2, 3]
lst.append(4)   # [1, 2, 3, 4]
lst.insert(1, 10)  # [1, 10, 2, 3, 4]
lst.remove(2)   # [1, 10, 3, 4]
lst.sort(reverse=True)  # [10, 4, 3, 1]
```

## Dictionary (`dict`)

A `dict` is Python’s implementation of a **hash table**, mapping keys to values for quick lookups.

### Characteristics

- **Mutable**: We can modify its content.
- **Key-value pairs**: Keys must be unique and hashable, while values can be of any type.
- **Ordered**: Maintains insertion order (starting from Python 3.7).

### Implementation

- Uses a **hash table** with open addressing for collision resolution.
- Keys are hashed using Python’s `hash()` function to determine their position in the table.

### Dictionary Keys

In Python, dictionary keys must be hashable objects. That means they must implement:

- a **hash**() method (returns a constant hash value during its lifetime),
- and an **eq**() method (to check equality),
- and be immutable (i.e., their contents can't change).

**Following are the valid key types:**

- strings
- numbers
- tuples
- boolean
- frozenset

**Following are invalid key types:**

- lists
- dictionaries
- sets
- User-defined mutable objects, unless we override **hash** and **eq** properly

### Time Complexity

| Operation              | Complexity |
| ---------------------- | ---------- |
| Insertion (`d[k] = v`) | O(1)       |
| Lookup (`d[k]`)        | O(1)       |
| Deletion (`del d[k]`)  | O(1)       |
| Iteration              | O(n)       |

### Common Methods

| **Method**                   | **Description**                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------- |
| `get(key[, default])`        | Returns the value for a key, or a default if the key is not found.               |
| `keys()`                     | Returns a view object of all keys in the dictionary.                             |
| `values()`                   | Returns a view object of all values in the dictionary.                           |
| `items()`                    | Returns a view object of all key-value pairs.                                    |
| `pop(key[, default])`        | Removes and returns the value of the specified key.                              |
| `popitem()`                  | Removes and returns a random key-value pair.                                     |
| `update([other])`            | Updates the dictionary with key-value pairs from another dictionary or iterable. |
| `setdefault(key[, default])` | Returns the value of a key, or sets it to a default if the key does not exist.   |
| `clear()`                    | Removes all items from the dictionary.                                           |
| `copy()`                     | Returns a shallow copy of the dictionary.                                        |

### Example

```python
d = {'a': 1, 'b': 2}
d['c'] = 3     # {'a': 1, 'b': 2, 'c': 3}
print(d.get('b'))  # 2
d.pop('a')     # {'b': 2, 'c': 3}
```

## Set

A `set` is an **unordered collection** of unique elements, implemented as a hash table with only keys.

### Characteristics

- **Mutable**: We can add or remove elements.
- **Unique elements**: Duplicates are not allowed.
- **Unordered**: Does not maintain insertion order.

### Time Complexity

| Operation                     | Complexity |
| ----------------------------- | ---------- |
| Membership testing (`x in s`) | O(1)       |
| Insertion (`s.add(x)`)        | O(1)       |
| Deletion (`s.remove(x)`)      | O(1)       |
| Iteration                     | O(n)       |

### Common Methods

| **Method**                    | **Description**                                           |
| ----------------------------- | --------------------------------------------------------- |
| `add(x)`                      | Adds an element to the set.                               |
| `remove(x)`                   | Removes an element. Raises `KeyError` if not found.       |
| `discard(x)`                  | Removes an element. Does not raise an error if not found. |
| `pop()`                       | Removes and returns an arbitrary element.                 |
| `clear()`                     | Removes all elements from the set.                        |
| `union(*sets)`                | Returns the union of sets.                                |
| `intersection(*sets)`         | Returns the intersection of sets.                         |
| `difference(*sets)`           | Returns the difference of sets.                           |
| `symmetric_difference(other)` | Returns elements not in both sets.                        |
| `copy()`                      | Returns a shallow copy of the set.                        |

### Example

```python
s = {1, 2, 3}
s.add(4)         # {1, 2, 3, 4}
s.remove(2)      # {1, 3, 4}
print(3 in s)    # True
```

## Tuple

A `tuple` is an **immutable sequence** type, meaning its content cannot be changed after creation.

### Characteristics

- **Immutable**: Once created, it cannot be modified.
- **Ordered**: Maintains the order of elements.
- **Heterogeneous**: Can store elements of different types.
- **Hashable**: Tuples can be used as dictionary keys or set elements if all their items are hashable.

### Time Complexity

| Operation          | Complexity                        |
| ------------------ | --------------------------------- |
| Indexing (`t[i]`)  | O(1)                              |
| Iteration          | O(n)                              |
| Slicing (`t[a:b]`) | O(k), where k is the slice length |

### Common Methods

| **Method**                 | **Description**                                       |
| -------------------------- | ----------------------------------------------------- |
| `count(x)`                 | Counts the number of occurrences of an item.          |
| `index(x[, start[, end]])` | Returns the index of the first occurrence of an item. |

### Example

```python
t = (1, 2, 3)
print(t[1])      # 2
print(t.count(2))  # 1
```

## String (`str`)

A `str` is an **immutable sequence** of characters used to represent text.

### Characteristics

- **Immutable**: We cannot change its content.
- **Ordered**: Maintains the order of characters.
- **Unicode support**: Fully supports Unicode, allowing multilingual text handling.

### Time Complexity

| Operation          | Complexity                                          |
| ------------------ | --------------------------------------------------- |
| Indexing (`s[i]`)  | O(1)                                                |
| Concatenation      | O(n), where n is the length of the resulting string |
| Slicing (`s[a:b]`) | O(k), where k is the slice length                   |
| Iteration          | O(n)                                                |

### Common Methods

| **Method**                   | **Description**                                               |
| ---------------------------- | ------------------------------------------------------------- |
| `upper()`                    | Converts all characters to uppercase.                         |
| `lower()`                    | Converts all characters to lowercase.                         |
| `strip([chars])`             | Removes leading and trailing characters.                      |
| `replace(old, new[, count])` | Replaces occurrences of a substring.                          |
| `split([sep])`               | Splits the string into a list based on a separator.           |
| `join(iterable)`             | Joins elements of an iterable with the string as a separator. |
| `find(sub[, start[, end]])`  | Returns the index of the first occurrence of a substring.     |
| `count(sub[, start[, end]])` | Counts the occurrences of a substring.                        |
| `startswith(prefix)`         | Checks if the string starts with a prefix.                    |
| `endswith(suffix)`           | Checks if the string ends with a suffix.                      |

### Example

```python
s = "hello world"
print(s.upper())      # HELLO WORLD
print(s.split())      # ['hello', 'world']
print(s.find('o'))    # 4
```

## Comparison Table

| **Data Structure** | **Ordered** | **Mutable** | **Unique Elements** | **Underlying Implementation** |
| ------------------ | ----------- | ----------- | ------------------- | ----------------------------- |
| `list`             | Yes         | Yes         | No                  | Dynamic array                 |
| `dict`             | Yes (3.7+)  | Yes         | Keys are unique     | Hash table                    |
| `set`              | No          | Yes         | Yes                 | Hash table                    |
| `tuple`            | Yes         | No          | No                  | Fixed-size array              |
| `str`              | Yes         | No          | N/A                 | Immutable sequence            |

This detailed breakdown provides insights into the use cases, methods, and underlying optimizations of Python's built-in data structures.
