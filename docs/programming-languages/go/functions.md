---
sidebar_position: 7
---

# Functions

Functions are fundamental building blocks in Go, allowing you to write reusable, modular, and maintainable code. A function is a group of statements that perform a specific task and can optionally return a result.

## What Are Functions?

- A function in Go is a reusable block of code that can be called with arguments.
- Functions can accept parameters, perform operations, and return results.
- They are first-class citizens in Go, meaning they can be assigned to variables, passed as arguments, and returned by other functions.

## Defining and Calling Functions

### Defining a Function

The `func` keyword is used to define a function.

#### Syntax:

```go
func functionName(parameters) returnType {
    // Function body
}
```

#### Example:

```go
package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name
}

func main() {
    message := greet("Abhishek")
    fmt.Println(message)
}
```

### Calling a Function

To execute a function, simply call it by its name and pass the required arguments.

#### Example:

```go
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    sum := add(5, 7)
    fmt.Println("Sum:", sum)
}
```

## Function Parameters

### Single Parameter

A function can take a single parameter.

#### Example:

```go
func square(num int) int {
    return num * num
}
```

### Multiple Parameters

A function can take multiple parameters.

#### Example:

```go
func multiply(a int, b int) int {
    return a * b
}
```

### Shortened Syntax for Same Type Parameters

If multiple consecutive parameters share the same type, you can omit the type for all but the last parameter.

#### Example:

```go
func subtract(a, b int) int {
    return a - b
}
```

### Variadic Functions

A variadic function accepts a variable number of arguments of the same type, denoted by `...`.

#### Syntax:

```go
func functionName(args ...type) returnType {
    // Function body
}
```

#### Example:

```go
package main

import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

func main() {
    result := sum(1, 2, 3, 4)
    fmt.Println("Sum:", result)
}
```

## Return Values

### Single Return Value

A function can return a single value.

#### Example:

```go
func add(a, b int) int {
    return a + b
}
```

### Multiple Return Values

Functions in Go can return multiple values, making it easy to return results and errors.

#### Example:

```go
package main

import "fmt"

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

### Named Return Values

You can name return values in the function signature, which acts like declaring variables.

#### Example:

```go
func calculate(a, b int) (sum, product int) {
    sum = a + b
    product = a * b
    return
}
```

## Anonymous Functions

Functions in Go can be defined without a name, known as anonymous functions. These are often used for short-lived purposes or as arguments to higher-order functions.

#### Example:

```go
package main

import "fmt"

func main() {
    // Anonymous function assigned to a variable
    square := func(x int) int {
        return x * x
    }
    fmt.Println("Square:", square(5))

    // Immediately Invoked Function Expression (IIFE)
    func(msg string) {
        fmt.Println(msg)
    }("Hello, Go!")
}
```

## Closures

A closure is a function value that captures variables from its surrounding scope. These variables remain accessible even after the scope in which they were declared ends.

#### Example:

```go
package main

import "fmt"

func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    increment := counter()
    fmt.Println(increment()) // 1
    fmt.Println(increment()) // 2
    fmt.Println(increment()) // 3
}
```

## Defer, Panic, and Recover in Functions

### Defer

The `defer` keyword postpones the execution of a statement until the surrounding function completes.

#### Example:

```go
package main

import "fmt"

func main() {
    defer fmt.Println("This is deferred")
    fmt.Println("This is executed first")
}
```

Output:

```
This is executed first
This is deferred
```

### Panic

The `panic` function stops the normal execution of a program and begins the process of unwinding the stack.

#### Example:

```go
package main

import "fmt"

func main() {
    fmt.Println("Start")
    panic("Something went wrong")
    fmt.Println("End") // This won't execute
}
```

### Recover

The `recover` function is used to regain control of a panicking program. It is typically used inside a `defer` block.

#### Example:

```go
package main

import "fmt"

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    fmt.Println("Before panic")
    panic("Something went wrong")
    fmt.Println("After panic") // This won't execute
}
```

Output:

```
Before panic
Recovered from panic: Something went wrong
```

## Function as First-Class Citizens

In Go, functions are first-class citizens, meaning they can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.

#### Example:

```go
package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func operate(a, b int, op func(int, int) int) int {
    return op(a, b)
}

func main() {
    result := operate(5, 3, add)
    fmt.Println("Result:", result)
}
```

## Methods

In Go, functions can be associated with types, making them methods. A method is simply a function with a receiver.

#### Example:

```go
package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

// Method with a receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func main() {
    rect := Rectangle{Width: 5, Height: 10}
    fmt.Println("Area:", rect.Area())
}
```

## Best Practices for Functions

1. **Keep Functions Small:** Each function should perform one task.
2. **Use Descriptive Names:** Function names should clearly indicate their purpose.
3. **Avoid Side Effects:** Minimize unexpected changes to global or shared variables.
4. **Use Errors Effectively:** Return and handle errors appropriately.
5. **Use Variadic Functions Sparingly:** Use them only when necessary, as they can reduce clarity.
