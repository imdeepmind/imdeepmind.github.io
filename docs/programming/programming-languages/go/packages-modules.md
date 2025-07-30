---
sidebar_position: 2
---

# Packages and Modules

<!-- markdownlint-disable MD024 -->

## Go Modules

Go Modules are the official dependency management system introduced in Go 1.11 and became the default in Go 1.16+. They provide a way to manage versioned dependencies and project structure.

### Key Concepts

- A **module** is a collection of Go packages stored in a file tree with a `go.mod` file at its root.
- Each module defines:

  - Its own module path (usually a repository URL like `github.com/user/project`)
  - Its dependencies (along with their versions)

### Important Files

- `go.mod`: Defines the module and its dependencies
- `go.sum`: Records checksums of modules to verify integrity

### Commands

- `go mod init <module-path>`: Initializes a new module
- `go mod tidy`: Adds missing and removes unused dependencies
- `go get <package>@version`: Adds or upgrades a dependency
- `go build`, `go run`, etc., will automatically download necessary modules

### Example

```bash
go mod init github.com/abhishek/myapp
```

This creates:

```go
module github.com/abhishek/myapp

go 1.21
```

## `package main`

In Go, every file must declare a `package`. The `main` package is special. It tells the Go compiler that this package is **executable**, not a shared library.

### Rules

- Only the `main` package can produce an executable binary.
- The `main` package must contain a function called `main()`.

### Usage

Typical for programs meant to be run (e.g., CLI apps, web servers, etc.)

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

If you change `package main` to something else (like `package utils`), Go will not generate an executable for it. It will be a reusable library.

## `func main()`

### Purpose

The `main()` function is the **entry point** of a Go application.

### Rules

- It **must** have the signature `func main()`
- It **cannot** take arguments or return values
- You can define other functions and call them from `main()`
- There can only be **one `main()` function** per `main` package

### Behavior

- When you run `go run .` or build and execute the binary, Go looks for `main.main()` to start execution.

### Example

```go
package main

import "fmt"

func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

func main() {
    greet("Abhishek")
}
```
