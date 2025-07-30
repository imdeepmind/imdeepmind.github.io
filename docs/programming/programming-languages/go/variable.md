---
sidebar_position: 3
---

# Variables and Scope

## Variables

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

### Constants in Go

In addition to variables, Go also supports **constants**, which are similar to variables but, once assigned, cannot be changed. Constants can be typed or untyped.

#### Declaring Constants

1. **Using `const` keyword:**

   ```go
   const pi = 3.14      // Untyped constant
   const radius = 10    // Untyped constant
   const isActive = true // Untyped constant
   ```

2. **Typed Constants:**

   ```go
   const daysInWeek int = 7
   ```

#### Advantages of Constants

- **Immutability** – constants cannot be changed
- **Performance** – evaluated at compile-time
- **Expressiveness** – improves code readability

#### Example of Constants in Go

```go
package main

import "fmt"

const Pi = 3.14159
const Greeting = "Hello, Go!"

func main() {
    fmt.Println("Pi:", Pi)
    fmt.Println(Greeting)
}
```

#### Constant Expressions

```go
const (
    x = 5
    y = 10
    sum = x + y // evaluated at compile time
)
```

## Data Types

Go is a statically typed language, meaning the type of a variable is known and checked at compile time.

### Basic Data Types

1. **Numeric Types**

   - Integer: `int`, `int8`, `int16`, `int32`, `int64`
   - Unsigned: `uint`, `uint8`, `uint16`, `uint32`, `uint64`
   - Floating-point: `float32`, `float64`
   - Complex: `complex64`, `complex128`

2. **Boolean**

   - `true` or `false`

3. **String**

   - Immutable UTF-8 character sequence

### Composite Data Types

1. **Array**

   - Fixed size and homogeneous

   ```go
   var arr [3]int = [3]int{1, 2, 3}
   ```

2. **Slice**

   - Dynamically sized

   ```go
   nums := []int{1, 2, 3}
   ```

3. **Map**

   - Key-value pairs

   ```go
   m := map[string]int{"A": 1}
   ```

4. **Struct**

   - Custom type grouping multiple fields

   ```go
   type Person struct {
       Name string
       Age  int
   }
   ```

5. **Pointer**

   - Stores memory address of a value

   ```go
   var ptr *int
   ```

### Special Types

1. **Interface**

   - Defines a set of method signatures

   ```go
   type Shape interface {
       Area() float64
   }
   ```

2. **Function Types**

   - Functions can be assigned to variables

   ```go
   var f func(int, int) int
   ```

## Type Casting

Go is strongly typed and does not support implicit type conversions. Type casting must be done explicitly.

### Syntax

```go
var a int = 42
var b float64 = float64(a)
```

### Common Conversions

- **Integer to Float**

  ```go
  var i int = 10
  var f float64 = float64(i)
  ```

- **Float to Integer** (truncates decimal part)

  ```go
  var f float64 = 3.14
  var i int = int(f) // i = 3
  ```

- **Integer to String**

  ```go
  import "strconv"
  s := strconv.Itoa(42) // "42"
  ```

- **String to Integer**

  ```go
  import "strconv"
  i, err := strconv.Atoi("42")
  ```

- **Rune to String**

  ```go
  var r rune = 'A'
  var s string = string(r) // "A"
  ```

- **Byte to String**

  ```go
  var b byte = 65
  s := string(b) // "A"
  ```

### Type Assertion (for interfaces)

```go
var i interface{} = "hello"
s := i.(string) // type assertion
```

Use the comma-ok idiom to avoid panic:

```go
s, ok := i.(string)
if ok {
    fmt.Println("Conversion successful:", s)
}
```

## Variable Scope

The scope of a variable defines where it can be accessed in a program.

### Local Scope

Variables declared inside a function or block are accessible only within that block.

```go
func main() {
    x := 10
    fmt.Println(x)
}
```

### Package Scope

Variables declared outside any function are accessible to all functions in the same package.

```go
var count int // package-scoped
```

### Exported Scope (Cross-Package Access)

A variable is **exported** (accessible from other packages) if it starts with an uppercase letter.

```go
var PublicVar = "Visible to other packages"
```

### Shadowing

A local variable can **shadow** a package-level variable with the same name.

```go
var x = 5

func main() {
    x := 10
    fmt.Println(x) // prints 10, not 5
}
```

## Example Code

```go
package main

import "fmt"

var packageVar = "I'm accessible within this package!"
const pi = 3.14159

func main() {
    var localVar int = 42
    shortVar := "I was declared using short syntax!"

    fmt.Println(packageVar)
    fmt.Println(localVar)
    fmt.Println(shortVar)
    fmt.Println("Pi constant:", pi)

    demonstrateScope()
    demonstrateCasting()
}

func demonstrateScope() {
    fmt.Println(packageVar)
}

func demonstrateCasting() {
    var i int = 42
    var f float64 = float64(i)
    fmt.Println("Int to Float:", f)

    s := fmt.Sprintf("%d", i)
    fmt.Println("Int to String:", s)
}
```
