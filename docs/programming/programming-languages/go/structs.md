---
sidebar_position: 11
---

# Structs and Custom Types

Structs are Go's way of creating user-defined types that group together related data. They are similar to classes in other languages but without inheritance. Go also allows you to create custom types based on existing types, providing flexibility and type safety.

## Defining Structs

A struct is defined using the `type` keyword followed by the struct name and the `struct` keyword:

```go
type Person struct {
    Name    string
    Age     int
    Email   string
    Address string
}
```

## Creating Struct Instances

There are several ways to create instances of a struct:

### Using Struct Literals

```go
// Method 1: Specify all fields in order
p1 := Person{"John Doe", 30, "john@example.com", "123 Main St"}

// Method 2: Specify fields by name (preferred)
p2 := Person{
    Name:    "Jane Smith",
    Age:     25,
    Email:   "jane@example.com",
    Address: "456 Oak Ave",
}

// Method 3: Partial initialization (unspecified fields get zero values)
p3 := Person{
    Name: "Bob Johnson",
    Age:  35,
}
```

### Using the `new` Function

```go
p := new(Person)
p.Name = "Alice Brown"
p.Age = 28
```

### Using Pointer to Struct

```go
p := &Person{
    Name: "Charlie Wilson",
    Age:  40,
}
```

## Accessing Struct Fields

Use dot notation to access struct fields:

```go
fmt.Println(p.Name)
fmt.Println(p.Age)

// Modifying fields
p.Age = 31
p.Email = "newemail@example.com"
```

## Anonymous Structs

You can create structs without defining a named type:

```go
person := struct {
    Name string
    Age  int
}{
    Name: "Anonymous Person",
    Age:  25,
}
```

## Nested Structs

Structs can contain other structs as fields:

```go
type Address struct {
    Street   string
    City     string
    State    string
    ZipCode  string
}

type Person struct {
    Name    string
    Age     int
    Address Address
}

p := Person{
    Name: "John Doe",
    Age:  30,
    Address: Address{
        Street:  "123 Main St",
        City:    "Anytown",
        State:   "CA",
        ZipCode: "12345",
    },
}

// Accessing nested fields
fmt.Println(p.Address.City)
```

## Embedded Structs (Struct Composition)

Go supports struct embedding, which provides a form of composition:

```go
type Animal struct {
    Name    string
    Species string
}

type Dog struct {
    Animal  // Embedded struct
    Breed   string
    IsGood  bool
}

dog := Dog{
    Animal: Animal{
        Name:    "Buddy",
        Species: "Canine",
    },
    Breed:  "Golden Retriever",
    IsGood: true,
}

// Can access embedded fields directly
fmt.Println(dog.Name)    // Same as dog.Animal.Name
fmt.Println(dog.Species) // Same as dog.Animal.Species
```

## Methods on Structs

You can define methods on structs using receiver functions:

```go
type Rectangle struct {
    Width  float64
    Height float64
}

// Method with value receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Method with pointer receiver
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

// Usage
rect := Rectangle{Width: 10, Height: 5}
fmt.Println(rect.Area()) // 50

rect.Scale(2)
fmt.Println(rect.Width)  // 20
fmt.Println(rect.Height) // 10
```

## Custom Types

Go allows you to create custom types based on existing types:

```go
type UserID int
type Temperature float64
type StatusCode int

const (
    StatusOK StatusCode = 200
    StatusNotFound StatusCode = 404
    StatusInternalError StatusCode = 500
)
```

## Methods on Custom Types

You can define methods on custom types:

```go
type Temperature float64

func (t Temperature) Celsius() float64 {
    return float64(t)
}

func (t Temperature) Fahrenheit() float64 {
    return float64(t)*9/5 + 32
}

func (t Temperature) Kelvin() float64 {
    return float64(t) + 273.15
}

// Usage
temp := Temperature(25.0)
fmt.Printf("%.1f°C = %.1f°F = %.1fK\n",
    temp.Celsius(), temp.Fahrenheit(), temp.Kelvin())
```

## Struct Tags

Struct tags provide metadata about struct fields, commonly used for JSON serialization:

```go
type User struct {
    ID       int    `json:"id"`
    Name     string `json:"name"`
    Email    string `json:"email,omitempty"`
    Password string `json:"-"` // Excluded from JSON
}
```

## Struct Comparison

Structs are comparable if all their fields are comparable:

```go
type Point struct {
    X, Y int
}

p1 := Point{1, 2}
p2 := Point{1, 2}
p3 := Point{2, 3}

fmt.Println(p1 == p2) // true
fmt.Println(p1 == p3) // false
```

## Zero Values

Structs have zero values - all fields are set to their respective zero values:

```go
var p Person
// p.Name = ""
// p.Age = 0
// p.Email = ""
// p.Address = ""
```

## Exporting Structs from Packages

Go uses capitalization to determine visibility across packages. Structs and their fields that start with a capital letter are exported (public), while those starting with a lowercase letter are unexported (private to the package).

### Exported vs Unexported Structs

```go
// In package "models"
package models

// Exported struct - can be used by other packages
type User struct {
    ID       int    // Exported field
    Name     string // Exported field
    email    string // Unexported field - only accessible within this package
    password string // Unexported field - only accessible within this package
}

// Unexported struct - only accessible within this package
type userSession struct {
    UserID    int
    Token     string
    ExpiresAt time.Time
}

// Exported constructor function for creating User instances
func NewUser(id int, name, email, password string) *User {
    return &User{
        ID:       id,
        Name:     name,
        email:    email,
        password: password,
    }
}

// Exported method to get email (since email field is unexported)
func (u *User) Email() string {
    return u.email
}

// Exported method to validate password
func (u *User) ValidatePassword(password string) bool {
    return u.password == password
}
```

### Using Exported Structs in Another Package

```go
// In package "main"
package main

import (
    "fmt"
    "yourmodule/models" // Import the package containing the structs
)

func main() {
    // Create a new user using the exported constructor
    user := models.NewUser(1, "John Doe", "john@example.com", "secret123")

    // Access exported fields directly
    fmt.Println("User ID:", user.ID)
    fmt.Println("User Name:", user.Name)

    // Access unexported field through exported method
    fmt.Println("User Email:", user.Email())

    // Use exported method
    if user.ValidatePassword("secret123") {
        fmt.Println("Password is valid")
    }

    // This would cause a compile error (unexported field):
    // fmt.Println(user.email) // Error: cannot refer to unexported field
}
```

### Best Practices for Package Design

```go
// In package "api"
package api

import "time"

// Response represents an API response - exported for external use
type Response struct {
    Success bool        `json:"success"`
    Data    interface{} `json:"data,omitempty"`
    Error   string      `json:"error,omitempty"`
    Meta    *Metadata   `json:"meta,omitempty"`
}

// Metadata contains response metadata - exported
type Metadata struct {
    Timestamp time.Time `json:"timestamp"`
    Version   string    `json:"version"`
    RequestID string    `json:"request_id"`
}

// Internal configuration struct - unexported
type config struct {
    apiKey    string
    baseURL   string
    timeout   time.Duration
    retries   int
}

// NewResponse creates a new successful response - exported constructor
func NewResponse(data interface{}) *Response {
    return &Response{
        Success: true,
        Data:    data,
        Meta: &Metadata{
            Timestamp: time.Now(),
            Version:   "1.0",
        },
    }
}

// NewErrorResponse creates a new error response - exported constructor
func NewErrorResponse(err string) *Response {
    return &Response{
        Success: false,
        Error:   err,
        Meta: &Metadata{
            Timestamp: time.Now(),
            Version:   "1.0",
        },
    }
}
```

### Guidelines for Struct Visibility

- **Export structs** that other packages need to create, modify, or interact with
- **Keep internal implementation details unexported** to maintain encapsulation
- **Provide exported constructor functions** for complex initialization
- **Use exported methods** to access unexported fields when necessary
- **Export fields** that other packages legitimately need to read or modify
- **Keep configuration and internal state unexported** to prevent misuse
