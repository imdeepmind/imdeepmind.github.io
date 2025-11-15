---
sidebar_position: 11
---

# Skip List

A **Skip List** is a probabilistic data structure that allows fast search, insertion, and deletion operations in an ordered sequence of elements. It is used to improve the performance of traditional linked lists by adding additional layers of links, which "skip" over some elements, hence the name "Skip List". This makes it possible to perform search, insertion, and deletion in **O(log n)** average time, which is more efficient than a regular linked list (O(n)) but less complex than balanced trees (e.g., AVL, Red-Black trees).

1. **Probabilistic Nature**:
   - Skip lists are probabilistic in nature because the level structure is determined by randomization.
2. **Layered Structure**:
   - Skip lists have multiple levels of linked lists, with each level skipping over elements to speed up operations.
3. **Dynamic Growth**:
   - The structure adapts to the number of elements, growing the levels as needed to maintain the efficiency of searches.

## How a Skip List Works

A skip list consists of multiple layers of linked lists. The **bottom layer** (level 0) is a simple sorted linked list of all the elements. Higher levels act as "express lanes" that skip over elements in the list, allowing faster traversal.

1. **Initialization**:

   - Start with the base level (level 0) containing all the elements in sorted order.
   - Higher levels are empty initially and are populated probabilistically as elements are added.

2. **Insertion**:

   - When inserting an element, the list chooses a level for the element, and it’s inserted into the appropriate position at each level.
   - A random coin flip determines whether the element will be added to higher levels.
   - If the coin flip results in a “head,” the element is inserted into the next higher level; otherwise, it remains in the current level.

3. **Searching**:

   - Searching begins from the topmost level and proceeds to lower levels as needed.
   - At each level, the search moves horizontally to find the correct element or the closest smaller element, and then it drops down to the next level.

4. **Deletion**:
   - To delete an element, search for the element at all levels where it appears and remove it from those levels.

## Skip List Operations

### **Skip List Structure**

Consider a sorted list of elements: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

Initially, the skip list has a base level (level 0) with all the elements:

```
Level 2:  [1] -> [4] -> [7] -> [10]
Level 1:  [1] -> [3] -> [5] -> [7] -> [9]
Level 0:  [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8] -> [9] -> [10]
```

This represents a skip list where:

- Level 0 is the bottom-most level, containing all the elements.
- Level 1 skips some elements (e.g., it skips `2` and `6`).
- Level 2 skips even more elements (e.g., it skips `2`, `5`, and `8`).

### **Step 1: Insert Element `5`**

When we insert the element `5`, we determine which levels it will appear in by performing coin flips. Let's say the coin flips decide it will appear at level 1 and level 0.

At level 1, we insert `5` between `3` and `7`.

After inserting `5`, the skip list looks like this:

```
Level 2:  [1] -> [4] -> [7] -> [10]
Level 1:  [1] -> [3] -> [5] -> [7] -> [9]
Level 0:  [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8] -> [9] -> [10]
```

The `5` is added at level 1 and level 0.

### **Step 2: Search for Element `7`**

To search for element `7`, we begin at the topmost level and work our way down.

1. **At Level 2**:
   - Start at `[1]`. Move to `[4]`, then to `[7]`.
   - We find `7` at this level, so we can stop here (the search is successful).

**Search path**: `[1] -> [4] -> [7]`  
Result: Found `7`.

### **Step 3: Search for Element `5`**

Let's search for element `5`:

1. **At Level 2**:
   - Start at `[1]`. Move to `[4]`, then to `[7]`.
   - `5` is not found at level 2, so we drop down to level 1.
2. **At Level 1**:
   - Start at `[1]`. Move to `[3]`, then to `[5]`.
   - We find `5` at this level, so we can stop here.

**Search path**: `[1] -> [4] -> [7]` (level 2) → `[1] -> [3] -> [5]` (level 1)  
Result: Found `5`.

### **Step 4: Search for Element `8`**

Now, let's search for element `8`:

1. **At Level 2**:

   - Start at `[1]`. Move to `[4]`, then to `[7]`.
   - `8` is not found at this level, so we drop down to level 1.

2. **At Level 1**:

   - Start at `[1]`. Move to `[3]`, then to `[5]`, and then to `[7]`.
   - `8` is not found at this level, so we drop down to level 0.

3. **At Level 0**:
   - Start at `[1]`. Move to `[2]`, then to `[3]`, then to `[4]`, then to `[5]`, then to `[6]`, then to `[7]`, then to `[8]`.
   - We find `8` at level 0.

**Search path**: `[1] -> [4] -> [7]` (level 2) → `[1] -> [3] -> [5] -> [7]` (level 1) → `[1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8]` (level 0)  
Result: Found `8`.

### **Step 5: Delete Element `5`**

To delete element `5`, we need to remove it from all levels where it appears. In our case, `5` appears in levels 1 and 0.

1. **At Level 2**:

   - `5` does not appear at level 2, so we move to the next level.

2. **At Level 1**:

   - We find `5` between `3` and `7`. We remove `5` by adjusting the links: `[3] -> [7]`.

3. **At Level 0**:
   - We find `5` between `4` and `6`. We remove `5` by adjusting the links: `[4] -> [6]`.

After deleting `5`, the skip list looks like this:

```
Level 2:  [1] -> [4] -> [7] -> [10]
Level 1:  [1] -> [3] -> [7] -> [9]
Level 0:  [1] -> [2] -> [3] -> [4] -> [6] -> [7] -> [8] -> [9] -> [10]
```

### **Step 6: Search for Element `5` After Deletion**

Finally, let's search for element `5` after it has been deleted:

1. **At Level 2**:

   - Start at `[1]`. Move to `[4]`, then to `[7]`.
   - `5` is not found at this level, so we drop down to level 1.

2. **At Level 1**:

   - Start at `[1]`. Move to `[3]`, then to `[7]`.
   - `5` is not found at this level, so we drop down to level 0.

3. **At Level 0**:
   - Start at `[1]`. Move to `[2]`, then to `[3]`, then to `[4]`, then to `[6]`, then to `[7]`.
   - `5` is not found at level 0.

Since we have traversed all levels and did not find `5`, we can conclude that `5` is **not present** in the skip list.

**Search path**: `[1] -> [4] -> [7]` (level 2) → `[1] -> [3] -> [7]` (level 1) → `[1] -> [2] -> [3] -> [4] -> [6] -> [7]` (level 0)  
Result: Not Found.

## Impact of the Level Structure

1. **Level Structure**:

   - The **height** of the skip list (i.e., the number of levels) depends on the number of elements. With `n` elements, the expected height is approximately **log₂(n)**, assuming random distribution.
   - **Fewer levels**: If the number of levels is small, the skip list behaves more like a linked list, resulting in slower operations.
   - **More levels**: If the skip list has too many levels, it wastes memory and increases insertion complexity.

2. **Insertion and Deletion**:
   - **Insertion**: On average, each insertion involves a logarithmic number of operations, as you only need to traverse up to **log n** levels.
   - **Deletion**: Similarly, deletions require adjusting the links at each level where the element appears.

## Variations of Skip Lists

1. **Multi-Level Skip List**:

   - In a **multi-level skip list**, multiple elements may be inserted into the higher levels, which allows faster access at the expense of slightly higher complexity in insertion and deletion operations.

2. **Skip List with Locking**:

   - In **concurrent applications**, a lock-free or lock-based mechanism is used to handle concurrent insertions and deletions without affecting the integrity of the structure.

3. **Balanced Skip List**:
   - A **balanced skip list** maintains a uniform distribution of elements across different levels, improving search performance by minimizing the variance in height distribution.

## Real-World Applications

1. **Databases**:
   - **Memcached** and **Redis** use skip lists as the underlying data structure for maintaining sorted sets, allowing fast access to elements by rank.
2. **Search Engines**:
   - Skip lists are used to index search results, allowing for faster retrieval of results with ranking.
3. **Distributed Systems**:

   - In systems like **Google’s LevelDB** and **Apache Cassandra**, skip lists help manage ordered data and support fast lookup and insertion.

4. **Load Balancers**:
   - Skip lists can be used in distributed load balancers to store and search for servers based on dynamic load data.

## Advantages of Skip Lists

1. **Fast Search**:
   - Skip lists offer **O(log n)** search time on average, which is faster than linear search (O(n)) and more intuitive than other tree-based structures.
2. **Simple to Implement**:

   - Skip lists are easier to implement than balanced trees (e.g., AVL trees or Red-Black trees) and do not require balancing or rotation.

3. **Probabilistic and Space Efficient**:
   - They achieve logarithmic complexity by leveraging randomness, meaning they are space-efficient compared to fully balanced trees.
4. **Dynamic**:
   - Skip lists adapt dynamically to the number of elements and don't require rebalancing like binary search trees.

## Disadvantages

1. **Probabilistic**:

   - Being a probabilistic structure, the performance can vary, especially if the randomization does not work well.

2. **Memory Overhead**:

   - Skip lists consume more memory than simple linked lists due to the additional levels and links.

3. **Not Deterministic**:
   - The performance and height of the list depend on random coin flips, which can lead to variations in execution time.
