---
sidebar_position: 5
---

# Conditions and Loops

Go provides concise and flexible syntax for implementing conditional statements and loops. These constructs are essential for controlling the flow of execution and iterating over data structures.

## Conditional Statements

Conditional statements allow decision-making in Go. The most common conditional constructs in Go are `if`, `if-else`, `if-else if`, and `switch`.

### `if` Statement

The `if` statement evaluates a condition, and if the condition is `true`, the code block inside the `if` statement is executed.

#### Syntax:

```go
if condition {
    // Code to execute if condition is true
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    x := 10
    if x > 5 {
        fmt.Println("x is greater than 5")
    }
}
```

### `if-else` Statement

The `if-else` statement provides an alternative code block to execute if the condition is `false`.

#### Syntax:

```go
if condition {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    x := 3
    if x > 5 {
        fmt.Println("x is greater than 5")
    } else {
        fmt.Println("x is not greater than 5")
    }
}
```

### `if-else if` Ladder

This construct allows multiple conditions to be checked sequentially.

#### Syntax:

```go
if condition1 {
    // Code to execute if condition1 is true
} else if condition2 {
    // Code to execute if condition2 is true
} else {
    // Code to execute if none of the conditions are true
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    x := 15
    if x < 10 {
        fmt.Println("x is less than 10")
    } else if x >= 10 && x <= 20 {
        fmt.Println("x is between 10 and 20")
    } else {
        fmt.Println("x is greater than 20")
    }
}
```

### `switch` Statement

The `switch` statement is used for multiple conditional branches, often cleaner than an `if-else if` ladder.

#### Syntax:

```go
switch variable {
case value1:
    // Code to execute if variable == value1
case value2:
    // Code to execute if variable == value2
default:
    // Code to execute if no cases match
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    day := "Tuesday"
    switch day {
    case "Monday":
        fmt.Println("Start of the work week")
    case "Friday":
        fmt.Println("Almost weekend!")
    default:
        fmt.Println("It's just another day")
    }
}
```

#### Key Points:

- You can use `switch` without a variable:
  ```go
  switch {
  case x < 10:
      fmt.Println("x is less than 10")
  case x >= 10 && x <= 20:
      fmt.Println("x is between 10 and 20")
  default:
      fmt.Println("x is greater than 20")
  }
  ```
- Cases don't require explicit `break` statements; Go automatically exits the `switch` after the matching case.

### `fallthrough` in `switch`

The `fallthrough` keyword forces the execution of the next case, even if it doesn’t match.

#### Example:

```go
package main

import "fmt"

func main() {
    num := 2
    switch num {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two")
        fallthrough
    case 3:
        fmt.Println("Three")
    default:
        fmt.Println("Default case")
    }
}
```

Output:

```
Two
Three
```

## Loops

Loops are used to repeat a block of code multiple times. Go only provides the `for` loop, but it can mimic `while` and `do-while` loops.

### Basic `for` Loop

The basic `for` loop iterates a specified number of times.

#### Syntax:

```go
for initialization; condition; post {
    // Code to execute in each iteration
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println("Iteration:", i)
    }
}
```

### `for` as a `while` Loop

If only the condition is specified, the `for` loop behaves like a `while` loop.

#### Syntax:

```go
for condition {
    // Code to execute while condition is true
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    x := 0
    for x < 5 {
        fmt.Println("x:", x)
        x++
    }
}
```

### Infinite Loop

A `for` loop without any condition creates an infinite loop.

#### Syntax:

```go
for {
    // Infinite loop
}
```

#### Example:

```go
package main

import "fmt"

func main() {
    i := 0
    for {
        if i >= 3 {
            break
        }
        fmt.Println("Infinite loop iteration:", i)
        i++
    }
}
```

### `for` Range Loop

The `range` keyword is used to iterate over elements of arrays, slices, maps, and strings.

#### Syntax:

```go
for index, value := range collection {
    // Use index and value
}
```

#### Examples:

1. **Iterating over a Slice:**

   ```go
   nums := []int{1, 2, 3}
   for index, value := range nums {
       fmt.Println("Index:", index, "Value:", value)
   }
   ```

2. **Iterating over a Map:**

   ```go
   scores := map[string]int{"Alice": 90, "Bob": 85}
   for key, value := range scores {
       fmt.Println("Key:", key, "Value:", value)
   }
   ```

3. **Iterating over a String:**
   ```go
   str := "Go"
   for index, char := range str {
       fmt.Println("Index:", index, "Char:", string(char))
   }
   ```

#### Key Points:

- Use `_` to ignore either the index or value:
  ```go
  for _, value := range nums {
      fmt.Println("Value:", value)
  }
  ```

### Loop Control Statements

1. **`break`:** Exits the loop immediately.

   ```go
   for i := 0; i < 10; i++ {
       if i == 5 {
           break
       }
       fmt.Println(i)
   }
   ```

2. **`continue`:** Skips the current iteration and proceeds to the next.

   ```go
   for i := 0; i < 10; i++ {
       if i%2 == 0 {
           continue
       }
       fmt.Println(i)
   }
   ```

3. **Labeled `break` and `continue`:** Used to control outer loops.
   ```go
   outer:
   for i := 0; i < 3; i++ {
       for j := 0; j < 3; j++ {
           if i == 1 && j == 1 {
               break outer
           }
           fmt.Println(i, j)
       }
   }
   ```

## Best Practices

1. Avoid infinite loops unless necessary (e.g., in servers).
2. Use `switch` for cleaner, more readable conditional branching.
3. Minimize deeply nested loops or conditions by refactoring logic.
4. Prefer `range` loops for iterating over collections.
5. Use labeled control statements sparingly to avoid confusing flow control.
