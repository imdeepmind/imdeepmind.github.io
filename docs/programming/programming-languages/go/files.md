---
sidebar_position: 9
---

# File Handling

File operations are a core part of many Go applications. Go provides a rich set of APIs in the `os`, `io`, and `io/fs` packages for file and directory management. This note covers file creation, reading, writing, permissions, metadata, directory operations, and best practices.

## File Creation and Opening

Go offers several ways to create and open files, each suited for different scenarios:

- **Create a new file (or truncate if exists):**

  ```go
  file, err := os.Create("example.txt") // O_WRONLY|O_CREATE|O_TRUNC
  if err != nil { log.Fatal(err) }
  defer file.Close()
  ```

- **Open an existing file for reading:**

  ```go
  file, err := os.Open("example.txt") // O_RDONLY
  if err != nil { log.Fatal(err) }
  defer file.Close()
  ```

- **Open a file with custom flags and permissions:**

  ```go
  file, err := os.OpenFile("example.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0644)
  if err != nil { log.Fatal(err) }
  defer file.Close()
  ```

### File Flags

- `os.O_RDONLY`: read-only
- `os.O_WRONLY`: write-only
- `os.O_RDWR`: read-write
- `os.O_CREATE`: create if not exists
- `os.O_APPEND`: append to file
- `os.O_TRUNC`: truncate file when opening

### File Permissions

Permissions are specified as an octal number (e.g., `0644`). They control who can read, write, or execute the file:

- `0400`: read-only (owner)
- `0600`: read/write (owner)
- `0644`: owner read/write, others read
- `0755`: owner all, others read/execute

## Writing to Files

You can write to files using several methods:

- **Write bytes:**

  ```go
  _, err := file.Write([]byte("Hello, World!\n"))
  ```

- **Write strings:**

  ```go
  _, err := file.WriteString("Another line\n")
  ```

- **Formatted output:**

  ```go
  fmt.Fprintf(file, "Number: %d\n", 42)
  ```

For simple cases, use `os.WriteFile` (Go 1.16+):

```go
err := os.WriteFile("output.txt", []byte("Quick write!"), 0644)
```

## Reading from Files

There are multiple ways to read files in Go:

- **Read bytes:**

  ```go
  data := make([]byte, 100)
  n, err := file.Read(data)
  fmt.Println(string(data[:n]))
  ```

- **Buffered reading (for large files):**

  ```go
  reader := bufio.NewReader(file)
  line, err := reader.ReadString('\n')
  fmt.Println(line)
  ```

- **Read entire file (small files):**

  ```go
  content, err := os.ReadFile("example.txt")
  if err != nil { log.Fatal(err) }
  fmt.Println(string(content))
  ```

## Closing Files

Always close files after use to free resources. The idiomatic way is:

```go
defer file.Close()
```

## File Metadata and Existence

Use `os.Stat` to get file info and check existence:

```go
info, err := os.Stat("example.txt")
if os.IsNotExist(err) {
    fmt.Println("File does not exist")
} else {
    fmt.Println("Size:", info.Size())
    fmt.Println("Permissions:", info.Mode())
    fmt.Println("IsDir:", info.IsDir())
    fmt.Println("ModTime:", info.ModTime())
}
```

## Deleting, Renaming, and Moving Files

- **Delete a file:**

  ```go
  err := os.Remove("example.txt")
  ```

- **Rename or move a file:**

  ```go
  err := os.Rename("old.txt", "new.txt")
  ```

## Working with Directories

- **Create a single directory:**

  ```go
  err := os.Mkdir("mydir", 0755)
  ```

  - Fails if parent does not exist.

- **Create nested directories:**

  ```go
  err := os.MkdirAll("parent/child/grandchild", 0755)
  ```

  - Creates all missing parents in the path.

**Difference:** `os.Mkdir` creates only one directory and fails if the parent is missing. `os.MkdirAll` creates all necessary parent directories.

- **List files in a directory:**

  ```go
  files, err := os.ReadDir(".")
  for _, f := range files {
      fmt.Println(f.Name())
  }
  ```

## File and Directory Permissions

Permissions are crucial for security. Always set the minimum required permissions. Use `os.Chmod` to change permissions:

```go
err := os.Chmod("example.txt", 0600)
```
