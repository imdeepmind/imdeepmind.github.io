---
sidebar_position: 8
---

# Error Handling

Error handling in Go (Golang) is a fundamental part of writing robust and reliable programs. Unlike many other languages that use exceptions, Go uses a simple, explicit, and lightweight approach based on returning error values.

## The `error` Type

In Go, errors are represented by the built-in `error` type, which is an interface:

```go
type error interface {
    Error() string
}
```

Any type that implements the `Error()` method with the signature `Error() string` satisfies the `error` interface.

## Returning and Checking Errors

Functions that can fail typically return an error as the last return value. The caller is responsible for checking this value:

```go
func readFile(filename string) ([]byte, error) {
    // ...
}

data, err := readFile("data.txt")
if err != nil {
    // handle the error
    log.Fatal(err)
}
// use data
```

## Creating Errors

You can create errors using the `errors.New` function or `fmt.Errorf` for formatted errors:

```go
import (
    "errors"
    "fmt"
)

err1 := errors.New("something went wrong")
err2 := fmt.Errorf("failed to open file: %s", filename)
```

## Custom Error Types

For more context, you can define custom error types:

```go
type MyError struct {
    Code int
    Message string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}

// Usage
return &MyError{Code: 404, Message: "Not Found"}
```

## Error Wrapping and Unwrapping

Go 1.13 introduced error wrapping with `%w` in `fmt.Errorf` and the `errors.Is` and `errors.As` functions for error inspection:

```go
wrappedErr := fmt.Errorf("operation failed: %w", err)
if errors.Is(wrappedErr, err) {
    // err is in the error chain
}
```

## Sentinel Errors

Sometimes, you define package-level variables for common errors (sentinel errors):

```go
var ErrNotFound = errors.New("not found")

func findItem(id int) error {
    if id == 0 {
        return ErrNotFound
    }
    return nil
}

if err == ErrNotFound {
    // handle not found
}
```

## Panic and Recover

Go does have a panic/recover mechanism, but it is reserved for truly exceptional situations (e.g., unrecoverable errors):

```go
func mayPanic() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    panic("something bad happened")
}
```
