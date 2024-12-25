---
sidebar_position: 3
---

# Mutation

Mutation refers to the process of altering the state or value of a variable, object, or data structure after it has been created. In Go, mutation is a common concept, especially in data structures like slices, maps, and structs. Go provides mechanisms to perform mutations while also emphasizing immutability in certain contexts (like strings).

## Mutable vs. Immutable Data in Go

- **Mutable Data:** Data that can be changed after it is created. Examples include slices, maps, structs, and pointers.
- **Immutable Data:** Data that cannot be changed once created. For example, strings and constants.

## Mutation of Slices

Slices are references to an underlying array. Mutating a slice affects the underlying array.

### Example: Mutating a Slice

```go
package main

import "fmt"

func main() {
    nums := []int{1, 2, 3}
    fmt.Println("Before mutation:", nums)

    nums[0] = 10 // Mutating the first element
    fmt.Println("After mutation:", nums)
}
```

Output:

```
Before mutation: [1 2 3]
After mutation: [10 2 3]
```

### Key Points:

- A slice's elements can be modified directly.
- Appending to a slice (`append`) may create a new underlying array if the capacity is exceeded, but mutations on existing elements will still affect the original data.

## Mutation of Maps

Maps are inherently mutable in Go. Adding, updating, or deleting keys changes the map in place.

### Example: Mutating a Map

```go
package main

import "fmt"

func main() {
    scores := map[string]int{"Alice": 90, "Bob": 85}
    fmt.Println("Before mutation:", scores)

    // Adding a new key-value pair
    scores["Charlie"] = 92

    // Updating an existing key
    scores["Alice"] = 95

    // Deleting a key
    delete(scores, "Bob")

    fmt.Println("After mutation:", scores)
}
```

Output:

```
Before mutation: map[Alice:90 Bob:85]
After mutation: map[Alice:95 Charlie:92]
```

### Key Points:

- Maps are always passed by reference.
- Mutating a map in one function affects the original map in the calling function.

## Mutation of Structs

Struct fields can be mutated if they are accessed directly, or through pointers.

### Example: Mutating Struct Fields

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "John", Age: 30}
    fmt.Println("Before mutation:", p)

    // Direct mutation
    p.Name = "Alice"

    // Pointer-based mutation
    mutateAge(&p, 35)

    fmt.Println("After mutation:", p)
}

func mutateAge(person *Person, newAge int) {
    person.Age = newAge
}
```

Output:

```
Before mutation: {John 30}
After mutation: {Alice 35}
```

### Key Points:

- Struct fields are mutable by default.
- Passing a pointer to a struct allows the function to mutate its fields.

## Strings in Go (Immutable)

Strings in Go are immutable. Any operation that seems to "change" a string actually creates a new string.

### Example: String Mutation (Incorrect)

```go
str := "Hello"
str[0] = 'h' // Compilation error: cannot assign to str[0]
```

### Example: Creating a New String

```go
package main

import "fmt"

func main() {
    str := "Hello"
    mutatedStr := "h" + str[1:] // Create a new string
    fmt.Println(mutatedStr)     // Output: "hello"
}
```

### Key Points:

- Strings cannot be modified in place.
- To "mutate" a string, create a new string using operations like concatenation or slicing.

## Mutation with Pointers

Pointers allow for direct mutation of variables by referencing their memory addresses.

### Example: Mutating a Value via Pointer

```go
package main

import "fmt"

func main() {
    x := 10
    fmt.Println("Before mutation:", x)

    mutate(&x)

    fmt.Println("After mutation:", x)
}

func mutate(num *int) {
    *num = 20 // Dereference pointer to mutate value
}
```

Output:

```
Before mutation: 10
After mutation: 20
```

### Key Points:

- Pointers enable mutation of variables outside their original scope.
- Care must be taken to avoid unintended side effects when sharing pointers.

## Mutation in Channels

Channels are used to communicate between goroutines, and the data sent through a channel is immutable (copies are sent). However, if you send a reference type (like a slice or a pointer), the referenced data can still be mutated.

### Example: Mutating Data Passed Through Channels

```go
package main

import "fmt"

func main() {
    ch := make(chan []int)
    nums := []int{1, 2, 3}

    go func() {
        nums[0] = 42 // Mutate the slice
        ch <- nums   // Send the mutated slice
    }()

    result := <-ch
    fmt.Println(result) // Output: [42 2 3]
}
```

### Key Points:

- Data passed through channels is immutable if it’s a value type (like integers or structs).
- If you pass a reference type (like slices or pointers), the data can still be mutated.

## Concurrent Mutation

Go provides synchronization primitives (like `sync.Mutex`) to handle concurrent mutation of shared data.

### Example: Protecting Shared Data

```go
package main

import (
    "fmt"
    "sync"
)

func main() {
    var count int
    var mu sync.Mutex
    var wg sync.WaitGroup

    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()
            count++ // Safely mutate shared variable
            mu.Unlock()
        }()
    }

    wg.Wait()
    fmt.Println("Final count:", count)
}
```

### Key Points:

- Use `sync.Mutex` to protect shared mutable data in concurrent programs.
- Avoid race conditions by synchronizing access to shared variables.

## Best Practices for Mutation in Go

1. **Minimize Mutation:** Prefer immutable data structures where possible to avoid unintended side effects.
2. **Use Pointers Wisely:** Only pass pointers when necessary, as they can introduce complexity and side effects.
3. **Document Mutations:** Clearly indicate functions or methods that perform mutations.
4. **Handle Concurrency Carefully:** Use synchronization mechanisms like `sync.Mutex` or atomic operations to avoid race conditions.
5. **Immutable Alternatives:** When working with strings or immutable data, prefer creating new instances rather than attempting mutations.
