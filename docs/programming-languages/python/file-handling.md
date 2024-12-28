---
sidebar_position: 12
---

# File Handling

File handling is an essential part of Python programming. It allows We to perform various operations such as reading, writing, and manipulating files stored on Our system. Python provides built-in functions and modules to work with files in a simple and efficient manner.

## Key Concepts in File Handling

1. **Files**: A file is a named location on a storage device used to store data. File handling refers to the process of opening, reading, writing, and closing files.

2. **File Modes**: When working with files, Python allows We to specify the mode in which a file is opened:

   - **`'r'` (Read)**: Opens the file for reading (default mode). The file must exist.
   - **`'w'` (Write)**: Opens the file for writing. If the file exists, its contents are erased; if it doesn’t exist, a new file is created.
   - **`'x'` (Exclusive Creation)**: Creates a new file. If the file exists, an exception (`FileExistsError`) is raised.
   - **`'a'` (Append)**: Opens the file for appending. Data is added to the end of the file without deleting its existing content.
   - **`'b'` (Binary)**: Opens the file in binary mode (used for non-text files like images).
   - **`'t'` (Text)**: Opens the file in text mode (default mode, used for plain text files).
   - **`'+'` (Read and Write)**: Opens the file for both reading and writing.

3. **File Paths**:
   - **Absolute Path**: Specifies the complete path to the file from the root directory (e.g., `/home/user/file.txt`).
   - **Relative Path**: Specifies the path relative to the current working directory (e.g., `file.txt`).

## Common Operations in File Handling

### Opening a File

We can open a file using the `open()` function.

Syntax:

```python
file_object = open(file_path, mode)
```

Example:

```python
file = open("example.txt", "r")  # Opens the file in read mode
```

### Reading from a File

Python provides several methods for reading files:

- **`read()`**: Reads the entire content of the file as a string.
- **`readline()`**: Reads a single line from the file.
- **`readlines()`**: Reads all lines of the file into a list.

Example:

```python
file = open("example.txt", "r")  # Open file in read mode

# Read the entire file content
content = file.read()
print(content)

# Read a single line
file.seek(0)  # Move cursor to the beginning of the file
line = file.readline()
print(line)

# Read all lines into a list
file.seek(0)  # Move cursor to the beginning of the file
lines = file.readlines()
print(lines)

file.close()  # Close the file
```

### Writing to a File

We can write data to a file using the `write()` or `writelines()` methods:

- **`write()`**: Writes a single string to the file.
- **`writelines()`**: Writes a list of strings to the file.

Example:

```python
file = open("example.txt", "w")  # Open file in write mode

# Write a single string
file.write("This is the first line.\n")

# Write multiple lines
lines = ["This is the second line.\n", "This is the third line.\n"]
file.writelines(lines)

file.close()  # Close the file
```

### Appending to a File

To append data to an existing file, open it in append mode (`'a'`).

Example:

```python
file = open("example.txt", "a")  # Open file in append mode

file.write("This line is appended.\n")

file.close()  # Close the file
```

### Closing a File

Files should always be closed after use to free up system resources. Use the `close()` method to close a file.

Example:

```python
file = open("example.txt", "r")
# Perform operations
file.close()
```

## Using the `with` Statement

Python provides a more concise and safer way to handle files using the `with` statement. It automatically closes the file after its block is executed, even if an exception occurs.

Example:

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed here
```

## Handling File Exceptions

Always handle exceptions when dealing with files to ensure robustness.

Example:

```python
try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found.")
except IOError:
    print("An error occurred while accessing the file.")
```

## Working with Binary Files

Binary files, such as images, videos, or audio files, can be handled using binary mode (`'b'`).

Example:

```python
# Reading a binary file
with open("image.jpg", "rb") as file:
    data = file.read()
    print(data)

# Writing to a binary file
with open("copy.jpg", "wb") as file:
    file.write(data)
```

## File Methods

| **Method**         | **Description**                                                  |
| ------------------ | ---------------------------------------------------------------- |
| `close()`          | Closes the file.                                                 |
| `read(size)`       | Reads `size` bytes from the file.                                |
| `readline()`       | Reads a single line from the file.                               |
| `readlines()`      | Reads all lines into a list.                                     |
| `write(string)`    | Writes a string to the file.                                     |
| `writelines(list)` | Writes a list of strings to the file.                            |
| `seek(offset)`     | Moves the file cursor to the specified offset.                   |
| `tell()`           | Returns the current position of the file cursor.                 |
| `flush()`          | Flushes the file buffer, forcing the write of any buffered data. |

## Example: File Copy Program

This example demonstrates reading from one file and writing to another.

```python
def copy_file(source, destination):
    try:
        with open(source, "r") as src, open(destination, "w") as dest:
            for line in src:
                dest.write(line)
        print(f"File copied from {source} to {destination}.")
    except FileNotFoundError:
        print("Source file not found.")
    except IOError:
        print("An error occurred while copying the file.")

# Usage
copy_file("example.txt", "copy_example.txt")
```

## Best Practices for File Handling

1. **Use the `with` Statement**: Always use `with` to ensure files are properly closed.
2. **Handle Exceptions**: Always handle potential exceptions like `FileNotFoundError` and `IOError`.
3. **Avoid Overwriting Files**: Use caution when opening files in `'w'` mode to avoid unintentional data loss.
4. **Use Absolute Paths**: Prefer absolute paths for clarity and to avoid issues with relative paths.
