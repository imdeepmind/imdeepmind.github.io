---
sidebar_position: 2
---

# Key Operations

A **Binary Search Tree** supports a variety of operations to insert, find, delete, and construct the tree from traversal data while maintaining the BST property.

## Search in BST

**Concept**:

- Start from the root.
- If the target value is **equal** to the root, return the node.
- If the target value is **less**, search in the left subtree.
- If the target value is **greater**, search in the right subtree.

**Diagram example** (searching for 40 in the given tree):

<div style={{textAlign: 'center'}}>
```mermaid
graph TD
    A(50):::highlight --> B(30):::highlight
    A --> C(70)
    B --> D(20)
    B --> E(40):::highlight
    C --> F(60)
    C --> G(80)
classDef highlight fill:#f9f,stroke:#333,stroke-width:2px;
```
</div>

**Python code**:

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

def search(root, key):
    if root is None or root.key == key:
        return root
    if key < root.key:
        return search(root.left, key)
    return search(root.right, key)

# Example usage
root = Node(50)
root.left = Node(30)
root.right = Node(70)
root.left.left = Node(20)
root.left.right = Node(40)
root.right.left = Node(60)
root.right.right = Node(80)

result = search(root, 40)
print("Found" if result else "Not found")
```

## Insert in BST

**Concept**:

- Start from the root and compare the new value.
- If smaller → go left.
- If larger → go right.
- Insert when a `None` spot is found.

**Diagram example** (inserting 35):

<div style={{textAlign: 'center'}}>
```mermaid
graph TD
    A(50) --> B(30):::highlight
    A --> C(70)
    B --> D(20)
    B --> E(40):::highlight
    C --> F(60)
    C --> G(80)
    E --> H(35):::highlight
classDef highlight fill:#f9f,stroke:#333,stroke-width:2px;
```
</div>

**Python code**:

```python
def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)
    return root

root = insert(root, 35)
```

## Delete in BST

**Concept**:

- **Case 1**: Node has no children → delete it.
- **Case 2**: Node has one child → replace with the child.
- **Case 3**: Node has two children → replace with **inorder successor** (minimum in right subtree) and delete the successor.

**Diagram example** (deleting 30):

<div style={{textAlign: 'center'}}>
```mermaid
graph TD
    A(50) --> B(35):::highlight
    A --> C(70)
    B --> D(20)
    B --> E(40)
    C --> F(60)
    C --> G(80)
classDef highlight fill:#f9f,stroke:#333,stroke-width:2px;
```
</div>

(Here 30 is replaced by its inorder successor 35.)

**Python code**:

```python
def min_value_node(node):
    current = node
    while current.left:
        current = current.left
    return current

def delete_node(root, key):
    if root is None:
        return root
    if key < root.key:
        root.left = delete_node(root.left, key)
    elif key > root.key:
        root.right = delete_node(root.right, key)
    else:
        # Node with only one child or no child
        if root.left is None:
            return root.right
        elif root.right is None:
            return root.left
        # Node with two children
        temp = min_value_node(root.right)
        root.key = temp.key
        root.right = delete_node(root.right, temp.key)
    return root

root = delete_node(root, 30)
```

## BST Construction from Preorder Traversal

**Concept**:

- First element in preorder is root.
- All values smaller than root form the left subtree, rest form the right subtree.
- Recursively build left and right subtrees.

**Diagram example** (Preorder: \[50, 30, 20, 40, 70, 60, 80]):

<div style={{textAlign: 'center'}}>
```mermaid
graph TD
    A(50) --> B(30)
    A --> C(70)
    B --> D(20)
    B --> E(40)
    C --> F(60)
    C --> G(80)
```
</div>

**Python code**:

```python
import sys
sys.setrecursionlimit(10**6)

def construct_bst_preorder(preorder):
    index = [0]
    def build(bound):
        if index[0] == len(preorder) or preorder[index[0]] > bound:
            return None
        root_val = preorder[index[0]]
        index[0] += 1
        root = Node(root_val)
        root.left = build(root_val)
        root.right = build(bound)
        return root
    return build(float('inf'))

preorder = [50, 30, 20, 40, 70, 60, 80]
root = construct_bst_preorder(preorder)
```

## BST Construction from Inorder Traversal

**Important Note**:

- **A BST cannot be uniquely constructed from inorder traversal alone** because many BSTs can have the same inorder sequence.
- If the inorder is **sorted array**, and we want a **balanced BST**, we pick the middle element as root, recursively build left and right.

**Diagram example** (Inorder: \[20, 30, 40, 50, 60, 70, 80]):

<div style={{textAlign: 'center'}}>
```mermaid
graph TD
    A(50) --> B(30)
    A --> C(70)
    B --> D(20)
    B --> E(40)
    C --> F(60)
    C --> G(80)
```
</div>

**Python code** (balanced BST from sorted inorder list):

```python
def sorted_array_to_bst(arr):
    if not arr:
        return None
    mid = len(arr) // 2
    root = Node(arr[mid])
    root.left = sorted_array_to_bst(arr[:mid])
    root.right = sorted_array_to_bst(arr[mid+1:])
    return root

inorder = [20, 30, 40, 50, 60, 70, 80]
root = sorted_array_to_bst(inorder)
```

## Summary

Here’s the **time and space complexity table** for the BST operations we discussed.
Assuming **n** nodes in the BST:

| Operation                      | Average Time Complexity | Worst-Case Time Complexity | Space Complexity                |
| ------------------------------ | ----------------------- | -------------------------- | ------------------------------- |
| Search                         | O(log n)                | O(n)                       | O(1) iterative / O(h) recursive |
| Insert                         | O(log n)                | O(n)                       | O(1) iterative / O(h) recursive |
| Delete                         | O(log n)                | O(n)                       | O(1) iterative / O(h) recursive |
| BST Construction from Preorder | O(n)                    | O(n)                       | O(n)                            |
| BST Construction from Inorder  | O(n)                    | O(n)                       | O(log n) recursive              |
