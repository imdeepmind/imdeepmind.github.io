---
sidebar_position: 3
---

# Variable Scoping

Variable scoping in Python determines the accessibility of variables within different parts of the code. It defines where a variable can be read or modified. Python follows specific scoping rules, which are influenced by the **LEGB rule** (Local, Enclosing, Global, Built-in). Understanding scoping is crucial to avoid conflicts and unexpected behavior in Our programs.

## Scope of Variables

1. **Local Scope**

   - Variables defined inside a function are said to have a **local scope**.
   - These variables are accessible only within the function where they are declared.

   Example:

   ```python
   def my_function():
       x = 10  # Local variable
       print(x)

   my_function()
   # print(x)  # Error: x is not accessible outside the function
   ```

2. **Enclosing Scope**

   - This refers to variables in the **scope of enclosing (outer) functions** in a nested function structure.
   - These variables are neither local nor global to the inner function but are in its **enclosing scope**.

   Example:

   ```python
   def outer_function():
       x = "Outer variable"

       def inner_function():
           print(x)  # Accessing enclosing variable

       inner_function()

   outer_function()
   ```

3. **Global Scope**

   - Variables defined at the top level of a script or module have a **global scope**.
   - They can be accessed and modified throughout the module unless shadowed by a local variable.

   Example:

   ```python
   x = "Global variable"

   def my_function():
       print(x)  # Accessing global variable

   my_function()
   ```

4. **Built-in Scope**

   - This refers to Python’s **built-in functions and names** (e.g., `print`, `len`, `type`).
   - These names are always accessible unless overridden.

   Example:

   ```python
   print(len([1, 2, 3]))  # Built-in function
   ```

## The LEGB Rule

Python resolves variable names using the **LEGB** rule:

1. **L**ocal: Checks the innermost scope (inside the current function).
2. **E**nclosing: Checks the scope of any enclosing functions.
3. **G**lobal: Checks the global (module-level) scope.
4. **B**uilt-in: Checks Python’s built-in namespace.

Example:

```python
x = "Global"

def outer_function():
    x = "Enclosing"

    def inner_function():
        x = "Local"
        print(x)  # Prints "Local"

    inner_function()

outer_function()
```

## Modifying Variables in Different Scopes

### 1. Using `global` Keyword

- If we want to modify a **global variable** inside a function, use the `global` keyword.

Example:

```python
x = 10

def modify_global():
    global x
    x = 20  # Modifies the global variable

modify_global()
print(x)  # Output: 20
```

### 2. Using `nonlocal` Keyword

- To modify a variable in an **enclosing scope**, use the `nonlocal` keyword.

Example:

```python
def outer_function():
    x = "Enclosing"

    def inner_function():
        nonlocal x
        x = "Modified Enclosing"

    inner_function()
    print(x)  # Output: Modified Enclosing

outer_function()
```

## Shadowing of Variables

- A variable in a local scope can **shadow** (override) variables in an outer or global scope with the same name.

Example:

```python
x = "Global"

def my_function():
    x = "Local"  # Shadows the global variable
    print(x)

my_function()  # Output: Local
print(x)       # Output: Global
```

## Dynamic Nature of Python Scoping

1. Python allows the declaration of variables dynamically at runtime.  
   Example:

   ```python
   def dynamic_example():
       if True:
           x = 100  # x exists only within the function
       print(x)  # Output: 100

   dynamic_example()
   ```

2. Variables declared in `if`, `for`, and `while` blocks are still accessible within the function (unlike some languages like C++ or Java).

## Best Practices for Variable Scoping

1. **Avoid Overusing `global` and `nonlocal`:**

   - Use `global` and `nonlocal` sparingly as they make code harder to read and debug.

2. **Use Descriptive Names:**

   - Use meaningful variable names to reduce the risk of unintended shadowing.

3. **Minimize Global Variables:**

   - Restrict the use of global variables as they can lead to unexpected behavior in larger programs.

4. **Encapsulate Logic in Functions:**
   - Encapsulation promotes the use of local scope and reduces conflicts.
