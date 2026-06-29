---
sidebar_position: 1
---

# Introduction

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A search tree is a tree data structure that organizes data in a way that allows efficient searching, insertion, and deletion of elements.

Unlike a general tree, a search tree follows specific rules that determine where elements are stored. These rules enable algorithms to eliminate large portions of the tree during a search, making operations significantly faster than scanning every node.

For example, in a well-structured search tree, finding an element may require visiting only a small fraction of the nodes, resulting in a time complexity of **O(log n)** instead of **O(n)**.

Search trees are widely used in databases, file systems, compilers, search engines, caches, and many other software systems.

## Why Do We Need Search Trees?

Consider searching for a value in an unsorted collection of data:

```text
10, 50, 20, 70, 30, 40
```

In the worst case, every element must be examined.

```text
Search Complexity = O(n)
```

Search trees organize data according to defined rules, allowing searches to discard large portions of the structure at each step.

```text
Search Complexity = O(log n)  (for balanced search trees)
```

As the amount of data grows, this difference becomes significant.
