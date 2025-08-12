---
sidebar_position: 13
---

# Arrays, Slices and, Maps

In Go, **arrays**, **slices**, and **maps** are built-in types used for storing and working with collections of data. Each of these data structures serves a different purpose and has its own unique characteristics and use cases. Understanding how they work helps me write more efficient and effective Go code.

## Arrays in Go

An **array** in Go is a fixed-size, ordered collection of elements of the same type. The length of an array is part of its type, meaning that arrays with different lengths are considered different types.

### Key Characteristics of Arrays

- **Fixed Size:** The size of an array is defined at the time of its declaration and cannot be changed.
- **Homogeneous:** All elements in an array must be of the same type (e.g., all integers, all strings).
- **Memory Allocation:** Arrays are stored in contiguous blocks of memory.

### Declaring an Array

To declare an array in Go, we specify the type of the elements followed by the length of the array.

```go
var arr [5]int // An array of 5 integers
```

We can also initialize the array at the time of declaration:

```go
var arr = [3]int{1, 2, 3}
```

Alternatively, Go allows us to omit the size and let the compiler infer it:

```go
arr := [...]int{1, 2, 3} // The compiler infers the size (3)
```

### Accessing Elements

We can access elements of an array using an index (starting from 0):

```go
arr[0] = 10  // Set the first element to 10
fmt.Println(arr[0]) // Get the first element
```

### Arrays and Memory

When we pass an array to a function, Go passes the **entire array** by value (copying the array), so modifying the array inside the function will not affect the original array outside the function. To modify an array inside a function, we would need to pass a pointer to the array.

Example:

```go
func modifyArray(arr [3]int) {
    arr[0] = 99
}

func main() {
    arr := [3]int{1, 2, 3}
    modifyArray(arr)
    fmt.Println(arr) // Output: [1 2 3]
}
```

### Array Length

We can get the length of an array using the built-in `len()` function.

```go
fmt.Println(len(arr)) // Output: 3
```

## Slices in Go

A **slice** is a more flexible, dynamic view into an array. Unlike arrays, slices can grow and shrink in size as needed. Slices are a more common data structure in Go, and they provide powerful capabilities to work with sequences of data.

### Key Characteristics of Slices

- **Dynamic Size:** Unlike arrays, slices do not have a fixed size. We can append elements, and their size can grow or shrink.
- **Reference Type:** Slices are reference types, meaning they point to an underlying array. When we pass a slice to a function, the function can modify the contents of the slice.
- **Literals:** A slice is created using a range of elements from an existing array or using the `make()` function.

### Declaring a Slice

Slices are typically declared in one of two ways:

1. **Using an array literal:**

   ```go
   slice := []int{1, 2, 3, 4} // Slice with initial elements
   ```

2. **Using `make()` function:**

   ```go
   slice := make([]int, 5) // Creates a slice of length 5 with default values (zeros)
   ```

We can also create a slice with a specific capacity:

```go
slice := make([]int, 5, 10) // Slice with length 5 and capacity 10
```

### Accessing and Modifying Elements

Just like arrays, we access and modify elements in a slice using indices:

```go
slice[0] = 10  // Modify the first element
fmt.Println(slice[0]) // Get the first element
```

### Slicing a Slice

We can create a sub-slice by specifying a range:

```go
s := []int{1, 2, 3, 4, 5}
subSlice := s[1:4] // Slice from index 1 to 3 (not including 4)
fmt.Println(subSlice) // Output: [2 3 4]
```

### Appending to a Slice

The `append()` function is used to add elements to a slice. This function returns a new slice with the added elements.

```go
s := []int{1, 2, 3}
s = append(s, 4) // Adds 4 to the slice
fmt.Println(s)   // Output: [1 2 3 4]
```

If the slice's underlying array is full (i.e., the slice has reached its capacity), Go automatically allocates a new, larger array to accommodate the new elements.

### Passing Slices to Functions

Slices are reference types, so when passed to a function, the function can modify the underlying array directly.

```go
func modifySlice(s []int) {
    s[0] = 99
}

func main() {
    slice := []int{1, 2, 3}
    modifySlice(slice)
    fmt.Println(slice) // Output: [99 2 3]
}
```

### Length and Capacity

- **Length:** The number of elements in the slice (`len()`).
- **Capacity:** The number of elements the slice can accommodate before it needs to be resized (`cap()`).

```go
fmt.Println(len(slice))  // Length
fmt.Println(cap(slice))  // Capacity
```

## Maps in Go

A **map** is an unordered collection of key-value pairs. Maps are similar to dictionaries in Python or hash tables in other languages. The keys in a map must be of a type that is comparable (e.g., primitive types, strings, etc.).

### Key Characteristics of Maps

- **Unordered:** Maps do not maintain the order of elements.
- **Dynamic Size:** We can add or remove key-value pairs from a map at runtime.
- **Key Lookup:** I can quickly retrieve values associated with keys using a hash table-like mechanism.

### Declaring a Map

Maps are declared using the `make()` function or map literals.

1. **Using `make()` function:**

   ```go
   m := make(map[string]int) // A map from strings to integers
   ```

2. **Using map literal:**

   ```go
   m := map[string]int{
       "Alice": 30,
       "Bob":   25,
   }
   ```

### Adding and Accessing Elements

I can add key-value pairs to a map by using the key as the index.

```go
m["Charlie"] = 35 // Add a key-value pair to the map
fmt.Println(m["Alice"]) // Output: 30
```

If I attempt to access a key that doesn't exist, it will return the zero value for the map's value type.

```go
value := m["NonExistentKey"] // Will return the zero value (0 in this case)
fmt.Println(value)            // Output: 0
```

### Checking if a Key Exists

To check if a key exists in a map, I can use the "comma ok" idiom:

```go
value, exists := m["Bob"]
if exists {
    fmt.Println("Bob's age is", value)
} else {
    fmt.Println("Bob not found")
}
```

### Deleting Elements

I can remove key-value pairs from a map using the `delete()` function.

```go
delete(m, "Bob") // Removes the key "Bob" and its associated value
```

### Iterating Over Maps

I can use a `for` loop with the `range` keyword to iterate over the keys and values of a map.

```go
for key, value := range m {
    fmt.Println(key, value)
}
```

### Maps and Functions

Maps are reference types, so when I pass a map to a function, the function can modify the map's contents.

```go
func modifyMap(m map[string]int) {
    m["Alice"] = 40
}

func main() {
    m := map[string]int{"Alice": 30, "Bob": 25}
    modifyMap(m)
    fmt.Println(m["Alice"]) // Output: 40
}
```
