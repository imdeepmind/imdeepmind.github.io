---
sidebar_position: 1
---

# Introduction

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A Self-Balancing Binary Search Tree (Self-Balancing BST) is a Binary Search Tree that automatically maintains a balanced structure after insertions and deletions.

A standard Binary Search Tree can become unbalanced over time. For example, inserting values in sorted order can produce a skewed tree:

```text
10
 \
  20
    \
     30
       \
        40
```

Although the tree still satisfies the Binary Search Tree property, its height becomes **O(n)**, causing search, insertion, and deletion operations to degrade from **O(log n)** to **O(n)**.

Self-balancing BSTs solve this problem by automatically reorganizing the tree whenever it becomes too unbalanced. This keeps the height of the tree proportional to **log n**, ensuring efficient performance.

## Benefits

* Guarantees a height of **O(log n)**
* Provides efficient search, insertion, and deletion operations
* Prevents performance degradation caused by skewed trees
* Suitable for large and frequently updated datasets
