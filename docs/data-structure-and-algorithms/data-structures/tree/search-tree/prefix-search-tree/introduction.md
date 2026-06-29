---
sidebar_position: 1
---

# Introduction

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A Prefix Search Tree is a tree data structure designed for storing and searching strings based on their prefixes.

Unlike Binary Search Trees, which organize data using value comparisons, Prefix Search Trees organize data character by character. This allows strings that share a common prefix to share the same path in the tree.

For example, the words:

```text
cat
car
can
```

share the prefix `"ca"` and therefore share part of the same path in the tree.

Prefix Search Trees are commonly used in:

* Autocomplete systems
* Spell checkers
* Dictionaries
* Prefix-based searches

The most common Prefix Search Tree is the **Trie**.
