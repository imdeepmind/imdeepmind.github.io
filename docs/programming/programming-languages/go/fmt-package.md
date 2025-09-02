---
sidebar_position: 5
---

# `fmt` Package

The `fmt` package in Go provides **formatted I/O functions** similar to C’s `printf` family. It is one of the most commonly used standard libraries in Go and supports:

- Printing to the console (`Print`, `Printf`, `Println`)
- Formatting strings (`Sprintf`)
- Reading input (`Scan`, `Scanf`)
- Formatting values with verbs (`%d`, `%s`, `%v`, etc.)

## Basic Output Functions

| Function        | Description                                        |
| --------------- | -------------------------------------------------- |
| `fmt.Print()`   | Prints values to standard output without a newline |
| `fmt.Println()` | Prints values followed by a newline                |
| `fmt.Printf()`  | Prints formatted text using verbs                  |

### Examples

```go
fmt.Print("Hello")           // Output: Hello
fmt.Println("Hello", "Go")   // Output: Hello Go\n
fmt.Printf("Age: %d", 25)    // Output: Age: 25
```

## `Printf` and Formatting Verbs

`Printf` is used to format strings before printing them. It accepts a format string followed by variables.

```go
name := "Alice"
age := 30
fmt.Printf("Name: %s, Age: %d\n", name, age)
```

### Common Formatting Verbs

#### General

| Verb  | Description              |
| ----- | ------------------------ |
| `%v`  | Default format           |
| `%#v` | Go syntax representation |
| `%T`  | Type of the value        |
| `%%`  | A literal percent sign   |

#### Integer

| Verb | Description     |
| ---- | --------------- |
| `%d` | Decimal         |
| `%b` | Binary          |
| `%o` | Octal           |
| `%x` | Hex (lowercase) |
| `%X` | Hex (uppercase) |

#### Float

| Verb   | Description             |
| ------ | ----------------------- |
| `%f`   | Decimal point           |
| `%e`   | Scientific notation (e) |
| `%E`   | Scientific notation (E) |
| `%.2f` | Precision: 2 decimals   |

#### String and Byte

| Verb | Description                    |
| ---- | ------------------------------ |
| `%s` | Plain string                   |
| `%q` | Double-quoted string (escaped) |
| `%x` | Hex dump of bytes              |

#### Pointer

| Verb | Description            |
| ---- | ---------------------- |
| `%p` | Pointer address in hex |

## `Sprintf` – Format Without Printing

`Sprintf` works like `Printf` but returns the formatted string instead of printing it.

### Examples

```go
greeting := fmt.Sprintf("Hello, %s!", "Bob")
fmt.Println(greeting) // Output: Hello, Bob!
```

Useful for constructing strings dynamically or logging.

## Formatting Width and Alignment

We can control **width**, **padding**, and **alignment** with formatting directives.

### Examples

```go
fmt.Printf("|%10s|\n", "Go")     // Right-aligned
fmt.Printf("|%-10s|\n", "Go")    // Left-aligned
fmt.Printf("|%6d|\n", 42)        // Right-aligned int
fmt.Printf("|%06d|\n", 42)       // Zero-padded
```

**Output:**

```bash
|        Go|
|Go        |
|    42|
|000042|
```

## Formatting Numbers with Precision

```go
f := 3.141592
fmt.Printf("%.2f\n", f)  // Output: 3.14
fmt.Printf("%6.2f\n", f) // Output: "  3.14" (width 6, precision 2)
```

## Using `%#v` and `%T` for Debugging

```go
type Person struct {
    Name string
    Age  int
}

p := Person{"Alice", 30}
fmt.Printf("%v\n", p)    // {Alice 30}
fmt.Printf("%+v\n", p)   // {Name:Alice Age:30}
fmt.Printf("%#v\n", p)   // main.Person{Name:"Alice", Age:30}
fmt.Printf("%T\n", p)    // main.Person
```

## Multiline Formatting with `Sprintf`

```go
msg := fmt.Sprintf(`
Name: %s
Age: %d
`, "Alice", 30)
fmt.Println(msg)
```
