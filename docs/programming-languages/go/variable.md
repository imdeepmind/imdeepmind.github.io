---
sidebar_position: 2
---

# Variables and Scope

## Variables in Go

A variable in Go is a storage location with a name, associated with a type, that holds a value. Variables can be declared using the `var` keyword or short declaration syntax.

### Variable Declaration

Go supports three ways to declare variables:

1. **Using `var` keyword (explicit type):**

   ```go
   var name string
   name = "John"
   ```

2. **Using `var` keyword (implicit type inference):**

   ```go
   var age = 30
   ```

3. **Short variable declaration (only inside functions):**
   ```go
   name := "Alice"
   ```

### Multiple Variable Declarations

You can declare and initialize multiple variables at once:

```go
var x, y int = 10, 20
a, b := 3.14, "Hello"
```

### Default Values

If a variable is declared but not initialized, it gets a default value based on its type:

- Numeric types: `0`
- Strings: `""`
- Booleans: `false`
- Pointers, slices, maps, channels, interfaces: `nil`

## Data Types in Go

Go is a statically typed language, meaning the type of a variable is determined at compile time.

### Basic Data Types

1. **Numeric Types:**

   - Integer: `int`, `int8`, `int16`, `int32`, `int64` (and their unsigned counterparts `uint`, etc.)
   - Floating-point: `float32`, `float64`
   - Complex numbers: `complex64`, `complex128`

2. **String:**

   - UTF-8 encoded sequence of characters.
   - Immutable.

3. **Boolean:**
   - Represented as `true` or `false`.

### Composite Data Types

#### Array

Fixed-size, homogeneous collection of elements.

```go
var arr [5]int
arr[0] = 10
```

#### Slice

Dynamic-sized, more powerful abstraction over arrays.

```go
nums := []int{1, 2, 3, 4}
```

#### Map

Key-value pairs.

```go
scores := map[string]int{"Alice": 90, "Bob": 85}
```

#### Struct

Custom data structure grouping multiple fields.

```go
type Person struct {
    Name string
    Age  int
}
```

#### Pointer

Holds the memory address of a variable.

```go
var p *int
```

### Special Types

#### Interface

Defines a set of methods that a type must implement.

```go
type Shape interface {
    Area() float64
}
```

#### Function Type

Functions are first-class citizens and can be assigned to variables.

```go
var add func(int, int) int
```

## Variable Scope in Go

The scope of a variable defines where it can be accessed in a program.

### Local Scope

Variables declared inside a function or block are accessible only within that block.

```go
func main() {
    x := 10 // Local to main
    fmt.Println(x)
}
```

### Package Scope

Variables declared outside functions (at the package level) are accessible across the same package.

```go
var count int // Accessible by all functions in the package
```

### Global Scope

Go doesn't have true "global variables" because all variables are bound to a package. However, public variables (starting with an uppercase letter) can be accessed by other packages if exported.

```go
var PublicVar int // Accessible from other packages
```

### Shadowing

A local variable can shadow a package-level or global variable with the same name.

```go
var x = 5

func main() {
    x := 10 // Shadows the package-level variable
    fmt.Println(x) // Prints 10
}
```

## Best Practices

1. Always initialize variables when possible to avoid confusion with default values.
2. Use short declarations (`:=`) for concise code, but only within functions.
3. Use descriptive variable names to make the code readable.
4. Keep variable scope as narrow as possible to reduce side effects.

**Example Code**

```go
package main

import "fmt"

// Package-level variable
var packageVar = "I'm accessible within this package!"

func main() {
    // Local variables
    var localVar int = 42
    shortVar := "I was declared using short syntax!"

    fmt.Println(packageVar)
    fmt.Println(localVar)
    fmt.Println(shortVar)

    demonstrateScope()
}

func demonstrateScope() {
    // Access package-level variable
    fmt.Println(packageVar)

    // localVar is not accessible here, so the following line would cause an error:
    // fmt.Println(localVar)
}
```
