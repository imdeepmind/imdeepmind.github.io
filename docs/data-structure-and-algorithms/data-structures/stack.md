---
sidebar_position: 5
---

# Stack

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the element added most recently to the stack is the first to be removed.

Stacks can be visualized as a collection of elements piled one on top of another, much like a stack of plates.

## Key Operations

| Operation   | Description                                     | Time Complexity |
| ----------- | ----------------------------------------------- | --------------- |
| `push(x)`   | Add an element `x` to the top of the stack.     | O(1)            |
| `pop()`     | Remove and return the top element of the stack. | O(1)            |
| `peek()`    | Return (but do not remove) the top element.     | O(1)            |
| `isEmpty()` | Check if the stack is empty.                    | O(1)            |

## Implementation

Stacks can be implemented using:

1. **Arrays or Lists**: Most commonly used in high-level programming languages like Python.
2. **Linked Lists**: Useful for dynamic memory allocation.
3. **Built-in Libraries**: Many languages have built-in stack implementations (e.g., Python's `deque`).

## Use Cases

| Use Case                  | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| **Undo Operations**       | Useful for tracking actions in text editors or browsers.            |
| **Function Calls**        | Used in recursion and managing function call stacks in programming. |
| **Balancing Symbols**     | Check for balanced parentheses, brackets, or braces.                |
| **Backtracking**          | Used in algorithms like maze solving or N-Queens problem.           |
| **Expression Evaluation** | Evaluate postfix/prefix expressions.                                |
| **Sorting and Searching** | Used in algorithms like DFS or iterative quicksort.                 |

## Example Algorithms and Problems

### Check for Balanced Parentheses

**Problem**: Verify if a string containing `()` `{}` `[]` is balanced.

```python
def is_balanced(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)

    return not stack

```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### Min Stack

**Problem**: Design a stack that supports retrieving the minimum element in O(1) time.

```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, x):
        self.stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self):
        if self.stack.pop() == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def get_min(self):
        return self.min_stack[-1]

```

**Time Complexity**: O(1) for all operations.  
**Space Complexity**: O(n) for the `min_stack`.

### Evaluate Postfix Expression

**Problem**: Evaluate a postfix (Reverse Polish Notation) expression like `2 3 + 5 *`.

```python
def evaluate_postfix(expression):
    stack = []
    for char in expression.split():
        if char.isdigit():
            stack.append(int(char))
        else:
            b = stack.pop()
            a = stack.pop()
            if char == '+':
                stack.append(a + b)
            elif char == '-':
                stack.append(a - b)
            elif char == '*':
                stack.append(a * b)
            elif char == '/':
                stack.append(int(a / b))  # Integer division
    return stack.pop()

```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### Next Greater Element

**Problem**: For each element in an array, find the next greater element to its right.

```python
def next_greater_elements(nums):
    stack = []
    result = [-1] * len(nums)

    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()
        result[i] = stack[-1] if stack else -1
        stack.append(nums[i])

    return result

```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

## Advantages of Using Stacks

1. **Simple to Use**: Offers a straightforward way to manage LIFO behavior.
2. **Efficient**: Push and pop operations are O(1).
3. **Versatile**: Useful in diverse algorithms like DFS, backtracking, and expression evaluation.

## Limitations of Stacks

- **Fixed Size in Some Implementations**: If implemented using arrays, resizing might be required.
- **Limited Operations**: Only top elements can be accessed directly.
- **Linear Space Usage**: Stacks require O(n) space in recursive algorithms or problems.

## When to Use Stacks

1. **Reversible Processes**: Undo/redo operations, tracking states.
2. **Nested Structures**: Parentheses matching, XML/HTML tag validation.
3. **Recursion**: Mimicking recursion with an explicit stack (e.g., DFS).
4. **Order Preservation**: Storing elements temporarily for reversal.
