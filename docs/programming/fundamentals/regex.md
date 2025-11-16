---
sidebar_position: 1
---

# Regular Expressions (RegEx)

Regular Expressions (RegEx) are powerful tools used for pattern matching and text manipulation. They provide a way to search, match, and manipulate strings using specific patterns. RegEx is commonly used in programming, text processing, data validation, and web development.

## Key Concepts of RegEx

### Pattern

A RegEx pattern is a sequence of characters that defines a search pattern. Patterns are written using a combination of literal characters (e.g., `abc`) and special characters (known as metacharacters).

### Metacharacters

Metacharacters have special meanings in RegEx. Some commonly used metacharacters include:

| **Metacharacter** | **Description**                   |
| ----------------- | --------------------------------- |
| `.`               | Matches any single character.     |
| `^`               | Matches the start of a string.    |
| `$`               | Matches the end of a string.      |
| `*`               | Matches 0 or more occurrences.    |
| `+`               | Matches 1 or more occurrences.    |
| `?`               | Matches 0 or 1 occurrence.        |
| `[]`              | Matches any one character inside. |
| `()`              | Groups expressions.               |
| `\`               | Escapes special characters.       |

## Common Components of RegEx

### Character Classes

Character classes allow you to match specific sets of characters.

| **Class** | **Description**                                |
| --------- | ---------------------------------------------- |
| `[abc]`   | Matches `a`, `b`, or `c`.                      |
| `[^abc]`  | Matches any character except `a`, `b`, or `c`. |
| `[a-z]`   | Matches any lowercase letter from `a` to `z`.  |
| `[0-9]`   | Matches any digit.                             |
| `.`       | Matches any character except a newline.        |

### Predefined Character Classes

| **Class** | **Description**                                         |
| --------- | ------------------------------------------------------- |
| `\d`      | Matches any digit (`0-9`).                              |
| `\D`      | Matches any non-digit.                                  |
| `\w`      | Matches any word character (alphanumeric + underscore). |
| `\W`      | Matches any non-word character.                         |
| `\s`      | Matches any whitespace (space, tab, newline).           |
| `\S`      | Matches any non-whitespace character.                   |

### Quantifiers

Quantifiers specify the number of occurrences to match.

| **Quantifier** | **Description**                          |
| -------------- | ---------------------------------------- |
| `*`            | Matches 0 or more occurrences.           |
| `+`            | Matches 1 or more occurrences.           |
| `?`            | Matches 0 or 1 occurrence.               |
| `{n}`          | Matches exactly `n` occurrences.         |
| `{n,}`         | Matches `n` or more occurrences.         |
| `{n,m}`        | Matches between `n` and `m` occurrences. |

### Anchors

Anchors match positions within a string, rather than characters.

| **Anchor** | **Description**                    |
| ---------- | ---------------------------------- |
| `^`        | Matches the beginning of a string. |
| `$`        | Matches the end of a string.       |
| `\b`       | Matches a word boundary.           |
| `\B`       | Matches a non-word boundary.       |

### Groups and Capturing

Parentheses `()` are used for grouping and capturing parts of a pattern.

- **Grouping:** Allows you to group part of the pattern for applying quantifiers or alternation.  
  Example: `(abc)+` matches one or more occurrences of `abc`.

- **Capturing:** Saves the matched portion of the string for later use.
  Example: In `(\d+)-(\w+)`, the numbers and letters are captured as groups.

Non-capturing groups can be created using `(?:...)`.

### Alternation

The pipe `|` is used as a logical OR operator.  
Example: `cat|dog` matches `cat` or `dog`.

### Lookahead and Lookbehind

Lookaheads and lookbehinds are zero-width assertions—they match patterns without consuming characters.

- **Lookahead:**

  - Positive: `(?=...)` matches if `...` follows.  
    Example: `\d(?=kg)` matches digits followed by "kg".
  - Negative: `(?!...)` matches if `...` does not follow.  
    Example: `\d(?!kg)` matches digits not followed by "kg".

- **Lookbehind:**
  - Positive: `(?<=...)` matches if `...` precedes.  
    Example: `(?<=\$)\d+` matches digits preceded by "$".
  - Negative: `(?<!...)` matches if `...` does not precede.  
    Example: `(?<!\$)\d+` matches digits not preceded by "$".

## Applications of RegEx

1. **Validation:**

   - Email validation: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
   - Phone number validation: `^\+?[0-9]{10,15}$`

2. **Search and Replace:**

   - Replace all whitespace: `\s+` → ` ` (space)

3. **Data Extraction:**

   - Extract all numbers: `\d+`

4. **Text Parsing:**

   - Parse logs, configuration files, or user inputs.

5. **Web Scraping:**
   - Extract URLs: `https?://[^\s]+`

## RegEx in Programming Languages

### Python

Python's `re` module provides support for RegEx.

```python
import re

# Search for a pattern
result = re.search(r'\d+', 'Order 123')
print(result.group())  # Output: 123
```

### JavaScript/TypeScript

```typescript
const pattern = /\d+/;
const result = "Order 123".match(pattern);
console.log(result[0]); // Output: 123
```

### Go

```go
import (
    "fmt"
    "regexp"
)

func main() {
    re := regexp.MustCompile(`\d+`)
    result := re.FindString("Order 123")
    fmt.Println(result) // Output: 123
}
```

## Tips for Using RegEx

1. **Escape Metacharacters:**  
   Use `\` to escape special characters like `.`, `*`, `+`, etc.

2. **Use Raw Strings in Python:**  
   Prefix strings with `r` to avoid escaping backslashes.  
   Example: `r"\d+"` instead of `"\\d+"`.

3. **Test RegEx Patterns:**  
   Use tools like [regex101](https://regex101.com) or [RegExr](https://regexr.com) to test patterns interactively.

4. **Optimize for Readability:**  
   Use comments (`(?#comment)` in Python or `/x` mode) to explain complex patterns.

## Limitations of RegEx

1. **Complexity:**  
   Difficult to read or debug for complex patterns.
2. **Performance:**  
   Inefficient for large inputs or poorly written patterns.
3. **Context-Free Languages:**  
   Cannot parse context-sensitive grammars.

## RegEx Examples

### Email Validation

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

- **Explanation**:
  - `^[a-zA-Z0-9._%+-]+` → Matches the username part of the email.
  - `@` → Matches the "@" symbol.
  - `[a-zA-Z0-9.-]+` → Matches the domain name.
  - `\.[a-zA-Z]{2,}$` → Matches the top-level domain (e.g., `.com`, `.org`).

### URL Validation

```regex
^https?:\/\/[^\s/$.?#].[^\s]*$
```

- **Explanation**:
  - `^https?` → Matches `http` or `https`.
  - `:\/\/` → Matches the "://" part.
  - `[^\s/$.?#]` → Matches the first character of the domain (excluding invalid ones like whitespace).
  - `.[^\s]*$` → Matches the rest of the URL.

### Date Validation (YYYY-MM-DD)

```regex
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
```

- **Explanation**:
  - `^\d{4}` → Matches the year (4 digits).
  - `-(0[1-9]|1[0-2])` → Matches the month (01–12).
  - `-(0[1-9]|[12][0-9]|3[01])$` → Matches the day (01–31).

### Date-Time Validation (YYYY-MM-DD HH:MM:SS)

```regex
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
```

- **Explanation**:
  - `^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])` → Matches the date part (YYYY-MM-DD).
  - `([01][0-9]|2[0-3])` → Matches the hour in 24-hour format (00–23).
  - `:[0-5][0-9]:[0-5][0-9]$` → Matches minutes and seconds (00–59).

### Time Validation (HH:MM:SS)

```regex
^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
```

- **Explanation**:
  - `^([01][0-9]|2[0-3])` → Matches the hour in 24-hour format (00–23).
  - `:[0-5][0-9]:[0-5][0-9]$` → Matches minutes and seconds (00–59).

### IP Address (IPv4) Validation

```regex
^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$
```

- **Explanation**:
  - `25[0-5]` → Matches 250–255.
  - `2[0-4][0-9]` → Matches 200–249.
  - `1[0-9]{2}` → Matches 100–199.
  - `[1-9]?[0-9]` → Matches 0–99.
  - `\.` → Matches the dot separator.
  - `{3}` → Ensures there are 4 octets in total.

### Hexadecimal Color Code

```regex
^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$
```

- **Explanation**:
  - `^#` → Matches the hash `#` at the start.
  - `([a-fA-F0-9]{6}|[a-fA-F0-9]{3})` → Matches 6 or 3 hexadecimal characters.

### US Phone Number

```regex
^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$
```

- **Explanation**:
  - `^\(?\d{3}\)?` → Matches the area code, optionally enclosed in parentheses.
  - `[-.\s]?` → Matches a separator (hyphen, dot, or space).
  - `\d{3}[-.\s]?\d{4}$` → Matches the remaining 7 digits.

### Password Validation (At least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character)

```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```

- **Explanation**:
  - `(?=.*[a-z])` → At least one lowercase letter.
  - `(?=.*[A-Z])` → At least one uppercase letter.
  - `(?=.*\d)` → At least one digit.
  - `(?=.*[@$!%*?&])` → At least one special character.
  - `[A-Za-z\d@$!%*?&]{8,}` → At least 8 characters.

### Credit Card Number

```regex
^4[0-9]{12}(?:[0-9]{3})?$|^5[1-5][0-9]{14}$|^3[47][0-9]{13}$|^6(?:011|5[0-9]{2})[0-9]{12}$
```

- **Explanation**:
  - Matches Visa, MasterCard, American Express, and Discover card formats.

### Postal Code (US ZIP Code)

```regex
^\d{5}(-\d{4})?$
```

- **Explanation**:
  - `^\d{5}` → Matches the first 5 digits.
  - `(-\d{4})?` → Matches an optional 4-digit extension.

### Extracting Numbers from Text

```regex
\d+
```

- Matches one or more digits in the text.

### Extracting Words

```regex
\w+
```

- Matches one or more word characters (letters, digits, and underscores).

### Match HTML Tags

```regex
<([a-zA-Z]+)([^<]*)>(.*?)<\/\1>
```

- **Explanation**:
  - `<([a-zA-Z]+)` → Matches the opening tag name.
  - `([^<]*)` → Matches the tag's attributes.
  - `(.*?)<\/\1>` → Matches the closing tag for the same tag name.
