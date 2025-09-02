---
sidebar_position: 12
---

# Interfaces and Generics

Go provides powerful features for abstraction and code reuse through **interfaces** and, since Go 1.18, **generics**. These concepts are essential for writing flexible, maintainable, and idiomatic Go code.

## Interfaces

An **interface** in Go is a type that specifies a set of method signatures. Any type that implements those methods implicitly satisfies the interface. This enables polymorphism and decouples code from concrete implementations.

### Defining and Using Interfaces

```go
// Define an interface
 type Shape interface {
     Area() float64
     Perimeter() float64
 }

// Implement the interface with a struct
 type Rectangle struct {
     Width, Height float64
 }

func (r Rectangle) Area() float64 {
     return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
     return 2 * (r.Width + r.Height)
}

// Use the interface
func printShapeInfo(s Shape) {
     fmt.Printf("Area: %f, Perimeter: %f\n", s.Area(), s.Perimeter())
}
```

### Multiple Implementations

```go
// Circle implements Shape
 type Circle struct {
     Radius float64
 }

func (c Circle) Area() float64 {
     return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
     return 2 * math.Pi * c.Radius
}

// Both Rectangle and Circle satisfy Shape
func main() {
    var s Shape
    s = Rectangle{Width: 3, Height: 4}
    printShapeInfo(s)
    s = Circle{Radius: 5}
    printShapeInfo(s)
}
```

### Embedded Interfaces

Go allows interfaces to embed other interfaces, enabling the creation of more complex and modular abstractions.

```go
 type Reader interface {
     Read(p []byte) (n int, err error)
 }

 type Writer interface {
     Write(p []byte) (n int, err error)
 }

 type ReadWriter interface {
     Reader
     Writer
 }

// Any type that implements both Read and Write methods satisfies ReadWriter
 type File struct {}

func (f File) Read(p []byte) (n int, err error) {
     // Implementation
     return 0, nil
}

func (f File) Write(p []byte) (n int, err error) {
     // Implementation
     return 0, nil
}
```

### Custom Interface Example: Sorting

```go
 type Sortable interface {
     Len() int
     Less(i, j int) bool
     Swap(i, j int)
 }

func Sort(data Sortable) {
     // Sorting logic using the interface
}
```

### Empty Interface

The `interface{}` type is the empty interface, which can hold values of any type.

```go
func describe(i interface{}) {
    fmt.Printf("Type = %T, Value = %v\n", i, i)
}
```

### Key Points

- Interfaces are satisfied implicitly (no explicit declaration required).
- Interfaces enable loose coupling and testability.
- Embedded interfaces promote modularity and code reuse.
- The empty interface allows for generic containers and APIs.

## Generics

**Generics** allow us to write functions, types, and data structures that work with any type, increasing code reuse and type safety. Generics were introduced in Go 1.18.

### Defining Generic Functions

```go
// A generic function to find the maximum of two values
func Max[T comparable](a, b T) T {
    if a > b {
        return a
    }
    return b
}
```

### Generic Types

```go
// A generic Stack type
 type Stack[T any] struct {
     items []T
 }

func (s *Stack[T]) Push(item T) {
     s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() T {
     n := len(s.items)
     item := s.items[n-1]
     s.items = s.items[:n-1]
     return item
}
```

### Generic Map Function

```go
// Map applies a function to each element of a slice
func Map[T any, U any](input []T, fn func(T) U) []U {
    result := make([]U, len(input))
    for i, v := range input {
        result[i] = fn(v)
    }
    return result
}

// Usage:
nums := []int{1, 2, 3}
squares := Map(nums, func(x int) int { return x * x })
```

### Generic Constraints

We can restrict type parameters using interfaces or built-in constraints.

```go
// Only types that implement Stringer can be used
func PrintAll[T fmt.Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}
```

### Combining Generics and Interfaces

```go
// A generic function that works with any type implementing an interface
func PrintAreas[T Shape](shapes []T) {
    for _, shape := range shapes {
        fmt.Println(shape.Area())
    }
}
```

### Key Points

- Generics use type parameters in square brackets: `[T any]`.
- Constraints (like `comparable`, `any`, or custom interfaces) restrict which types can be used.
- Generics improve code reuse and type safety, especially for data structures and algorithms.
- Generics and interfaces can be combined for maximum flexibility.
