---
sidebar_position: 5
---

# String, Date, and Time Operations

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

In SQL, **string**, **date**, and **time** functions are essential for transforming, comparing, and formatting data. While the SQL standard defines common operations, each database introduces its own **variations and extensions**.

These functions can generally be grouped into:

- **String operations** – manipulation and formatting of textual data.
- **Date & time operations** – extraction, comparison, and transformation of temporal values.

## String Operations

String operations let us manipulate and query textual data stored in columns like `CHAR`, `VARCHAR`, `TEXT`, etc. - super useful for data cleaning and formatting!

### Common String Functions

| Operation     | Example                                               | Description                                    |
| ------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Concatenation | `'Hello' \|\| 'World'`                                | Joins two strings. (`\|\|` is standard SQL operator) |
| Length        | `CHAR_LENGTH('Hello')`                                | Returns length of string                       |
| Uppercase     | `UPPER('sql')` → `'SQL'`                              | Converts to uppercase                          |
| Lowercase     | `LOWER('SQL')` → `'sql'`                              | Converts to lowercase                          |
| Substring     | `SUBSTRING('Database' FROM 5)` → `'base'`             | Extracts substring                             |
| Position      | `POSITION('b' IN 'Database')` → `5`                   | Finds index of substring                       |
| Trim          | `TRIM(BOTH 'x' FROM 'xxxabcxxx')` → `'abc'`           | Removes characters from sides                  |
| Replace       | `REPLACE('cat', 'c', 'b')` → `'bat'`                  | Replaces substring                             |
| Overlay       | `OVERLAY('abcdef' PLACING 'xyz' FROM 3)` → `'abxyzf'` | Replaces part of string (PostgreSQL)          |

### Case Sensitivity of Strings

| Database       | Case Sensitivity                                            | Explanation                                                                                                                                                                                |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **MySQL**      | **Case-insensitive by default** for most string comparisons | MySQL uses a **case-insensitive collation** (e.g., `utf8_general_ci`, where `ci` means "case-insensitive"). We can make it case-sensitive by using a binary collation (e.g., `utf8_bin`). |
| **PostgreSQL** | **Case-sensitive** by default                               | `'abc' = 'ABC'` returns `false`. To perform case-insensitive comparisons, use functions like `ILIKE` or convert both strings using `LOWER()` or `UPPER()`.                                 |
| **SQLite**     | **Case-insensitive by default for ASCII characters**        | `'abc' = 'ABC'` is `true`. However, case-insensitivity for non-ASCII characters depends on the collation.                                                                                  |
| **Oracle**     | **Case-sensitive**                                          | `'abc' = 'ABC'` is `false` unless we use functions like `UPPER()` or case-insensitive collations.                                                                                         |
| **SQL Server** | **Depends on the collation setting**                        | The default collation (`SQL_Latin1_General_CP1_CI_AS`) is case-insensitive. We can change it using a case-sensitive collation.                                                            |

### Quoting Strings

| Database       | String Quoting                                                                  | Notes                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MySQL**      | **Both single `'` and double `"` quotes are allowed** (by default in ANSI mode) | `'abc'` and `"abc"` are equivalent, but it’s recommended to use single quotes for strings and double quotes for identifiers in ANSI-compliant SQL. |
| **PostgreSQL** | **Only single quotes `'` for strings**                                          | Double quotes `"` are used **only** for identifiers (e.g., column or table names).                                                                 |
| **SQLite**     | **Single quotes `'` for strings**                                               | Double quotes are for identifiers.                                                                                                                 |
| **Oracle**     | **Single quotes `'` for strings**                                               | Double quotes for identifiers.                                                                                                                     |
| **SQL Server** | **Single quotes `'` for strings**                                               | Double quotes can be used for identifiers if `QUOTED_IDENTIFIER` is ON.                                                                            |

### Example comparison

**MySQL:**

```sql
SELECT 'Hello' = "hello";  -- true (case-insensitive by default)
```

**PostgreSQL:**

```sql
SELECT 'Hello' = 'hello';  -- false
SELECT LOWER('Hello') = LOWER('hello');  -- true
```

### Concatenation Differences Across Databases

| Database         | Operator   | Function | Example                   |
| ---------------- | ---------- | -------- | ------------------------- |
| **Standard SQL** | `\|\|`     | No       | `'A' \|\| 'B' → 'AB'`     |
| **MySQL**        | `\|\|`     | `CONCAT()` | `CONCAT('A', 'B') → 'AB'` or `'A' \|\| 'B'` |
| **PostgreSQL**   | `\|\|`     | `CONCAT()` | `'A' \|\| 'B'` or `CONCAT('A', 'B')` |
| **SQL Server**   | `+`        | `CONCAT()` | `'A' + 'B' → 'AB'` or `CONCAT('A', 'B')` |
| **Oracle**       | `\|\|`     | `CONCAT()` | `'A' \|\| 'B'` or `CONCAT('A', 'B')` |

> **Note:**
> SQL Server treats `||` as bitwise OR, not concatenation.
> MySQL’s `CONCAT()` returns `NULL` if any argument is `NULL`; `CONCAT_WS()` (with separator) ignores `NULL`s.

### String Extraction and Search

**Examples:**

```sql
-- Get first 3 characters
SELECT SUBSTRING('Database', 1, 3); -- MySQL, SQL Server
SELECT SUBSTRING('Database' FROM 1 FOR 3); -- PostgreSQL, Oracle

-- Find position
SELECT POSITION('a' IN 'Database'); -- All major databases

-- Replace substring
SELECT REPLACE('Data Science', 'Data', 'Computer'); -- 'Computer Science'
```

### Case Conversion

```sql
SELECT UPPER('sql'); -- 'SQL'
SELECT LOWER('SQL'); -- 'sql'
```

All databases support these, but Oracle also provides `INITCAP('hello world') → 'Hello World'`.

### Trimming and Padding

```sql
SELECT TRIM('   SQL   '); -- 'SQL'
SELECT LTRIM('   SQL');   -- 'SQL'
SELECT RTRIM('SQL   ');   -- 'SQL'

SELECT LPAD('5', 3, '0'); -- '005' (MySQL, Oracle, PostgreSQL)
SELECT RPAD('5', 3, '0'); -- '500'
```

| Function        | MySQL | PostgreSQL | SQL Server                    | Oracle |
| --------------- | ----- | ---------- | ----------------------------- | ------ |
| `TRIM`          | ✓     | ✓          | ✓                             | ✓      |
| `LPAD` / `RPAD` | ✓     | ✓          | ✗ (use `RIGHT('000'+col, n)`) | ✓      |
| `INITCAP`       | ✗     | ✓          | ✗                             | ✓      |

## Date and Time Operations

SQL provides rich functionality for working with **date** and **time** values. These operations are essential for reporting, analytics, and data transformation.

### Common Date/Time Data Types

| Database         | Date Type              | Time Type        | DateTime/Timestamp Type                  |
| ---------------- | ---------------------- | ---------------- | ---------------------------------------- |
| **Standard SQL** | `DATE`                 | `TIME`           | `TIMESTAMP`                              |
| **PostgreSQL**   | `DATE`                 | `TIME`, `TIMETZ` | `TIMESTAMP`, `TIMESTAMPTZ`               |
| **MySQL**        | `DATE`                 | `TIME`           | `DATETIME`, `TIMESTAMP`                  |
| **SQL Server**   | `DATE`                 | `TIME`           | `DATETIME`, `DATETIME2`, `SMALLDATETIME` |
| **Oracle**       | `DATE` (includes time) | `TIMESTAMP`      | `TIMESTAMP WITH TIME ZONE`               |

### Extracting Date Parts

**Standard SQL:**

```sql
EXTRACT(YEAR FROM order_date);
EXTRACT(MONTH FROM order_date);
EXTRACT(DAY FROM order_date);
```

**Differences:**

| Database   | Function                                                         | Example                                  |
| ---------- | ---------------------------------------------------------------- | ---------------------------------------- |
| PostgreSQL | `EXTRACT()`                                                      | `EXTRACT(DOW FROM order_date)` → weekday |
| MySQL      | `YEAR(order_date)`, `MONTH(order_date)`                          | `YEAR('2025-10-11') → 2025`              |
| SQL Server | `DATEPART(year, order_date)`                                     | `DATEPART(month, order_date)`            |
| Oracle     | `EXTRACT(YEAR FROM order_date)` or `TO_CHAR(order_date, 'YYYY')` |                                          |

### Current Date/Time

| Function            | Description                       | Example                 |
| ------------------- | --------------------------------- | ----------------------- |
| `CURRENT_DATE`      | Returns current date              | `'2025-10-11'`          |
| `CURRENT_TIME`      | Returns current time              | `'14:30:00'`            |
| `CURRENT_TIMESTAMP` | Returns current date & time       | `'2025-10-11 14:30:00'` |
| `NOW()`             | Non-standard but widely supported | `'2025-10-11 14:30:00'` |

**Differences:**

| Database   | Function                     | Notes                           |
| ---------- | ---------------------------- | ------------------------------- |
| PostgreSQL | `CURRENT_DATE`, `NOW()`      | Both supported                  |
| MySQL      | `NOW()`, `CURRENT_TIMESTAMP` | Synonyms                        |
| SQL Server | `GETDATE()`, `SYSDATETIME()` | `SYSDATETIME()` more precise    |
| Oracle     | `SYSDATE`, `SYSTIMESTAMP`    | Equivalent to current date/time |

### Date Arithmetic

**Add or Subtract Intervals:**

| Operation     | Example                         | Result                              |
| ------------- | ------------------------------- | ----------------------------------- |
| Add days      | `order_date + INTERVAL '7 DAY'` | Adds 7 days                         |
| Subtract days | `order_date - INTERVAL '2 DAY'` | Subtracts 2 days                    |
| Difference    | `end_date - start_date`         | Number of days (PostgreSQL, Oracle) |

**Database Differences:**

| Operation    | PostgreSQL                | MySQL                  | SQL Server                  | Oracle                    |
| ------------ | ------------------------- | ---------------------- | --------------------------- | ------------------------- |
| Add interval | `+ INTERVAL '1 day'`      | `+ INTERVAL 1 DAY`     | `DATEADD(day, 1, date)`     | `date + 1`                |
| Difference   | `end - start`             | `DATEDIFF(end, start)` | `DATEDIFF(day, start, end)` | `end - start`             |
| Extract part | `EXTRACT(YEAR FROM date)` | `YEAR(date)`           | `DATEPART(year, date)`      | `EXTRACT(YEAR FROM date)` |

### Formatting Dates

| Operation              | Example                               | Result         |
| ---------------------- | ------------------------------------- | -------------- |
| Format date            | `TO_CHAR(order_date, 'YYYY-MM-DD')`   | `'2025-10-11'` |
| Convert string to date | `TO_DATE('2025-10-11', 'YYYY-MM-DD')` | `2025-10-11`   |

**Differences:**

| Database   | Function                        | Example                           |
| ---------- | ------------------------------- | --------------------------------- |
| PostgreSQL | `TO_CHAR()`, `TO_DATE()`        | `TO_CHAR(NOW(), 'DD Mon YYYY')`   |
| MySQL      | `DATE_FORMAT(date, '%d %b %Y')` | `DATE_FORMAT(NOW(), '%Y-%m-%d')`  |
| SQL Server | `FORMAT(date, 'dd MMM yyyy')`   | `FORMAT(GETDATE(), 'yyyy-MM-dd')` |
| Oracle     | `TO_CHAR()`, `TO_DATE()`        | `TO_CHAR(SYSDATE, 'DD-MON-YYYY')` |

### Extracting Weekday, Week, or Quarter

| Operation   | PostgreSQL                          | MySQL                        | SQL Server                | Oracle                |
| ----------- | ----------------------------------- | ---------------------------- | ------------------------- | --------------------- |
| Weekday     | `EXTRACT(DOW FROM date)` (0=Sunday) | `DAYOFWEEK(date)` (1=Sunday) | `DATEPART(WEEKDAY, date)` | `TO_CHAR(date, 'D')`  |
| Week number | `EXTRACT(WEEK FROM date)`           | `WEEK(date)`                 | `DATEPART(WEEK, date)`    | `TO_CHAR(date, 'WW')` |
| Quarter     | `EXTRACT(QUARTER FROM date)`        | `QUARTER(date)`              | `DATEPART(QUARTER, date)` | `TO_CHAR(date, 'Q')`  |

## Time Operations

**Extracting Time Components:**

| Operation                       | Example          |
| ------------------------------- | ---------------- |
| `EXTRACT(HOUR FROM time_col)`   | Extracts hour    |
| `EXTRACT(MINUTE FROM time_col)` | Extracts minute  |
| `EXTRACT(SECOND FROM time_col)` | Extracts seconds |

**Differences:**

- MySQL: `HOUR(time_col)`, `MINUTE(time_col)`, `SECOND(time_col)`
- SQL Server: `DATEPART(hour, time_col)`
- Oracle: use `TO_CHAR(time_col, 'HH24:MI:SS')`

### Time Arithmetic

| Operation  | PostgreSQL                 | MySQL                       | SQL Server                     | Oracle          |
| ---------- | -------------------------- | --------------------------- | ------------------------------ | --------------- |
| Add hours  | `time + INTERVAL '2 HOUR'` | `ADDTIME(time, '02:00:00')` | `DATEADD(hour, 2, time)`       | `time + (2/24)` |
| Difference | `end - start`              | `TIMEDIFF(end, start)`      | `DATEDIFF(second, start, end)` | `end - start`   |

## Summary Table

| Category          | Standard SQL     | PostgreSQL      | MySQL           | SQL Server      | Oracle      |
| ----------------- | ---------------- | --------------- | --------------- | --------------- | ----------- |
| **String concat** | `CONCAT()`       | `CONCAT()`      | `CONCAT()`      | `CONCAT()`, `+` | `CONCAT()`  |
| **Substring**     | `SUBSTRING()`    | `SUBSTRING()`   | `SUBSTRING()`   | `SUBSTRING()`   | `SUBSTR()`  |
| **Length**        | `CHAR_LENGTH()`  | `CHAR_LENGTH()` | `CHAR_LENGTH()` | `LEN()`         | `LENGTH()`  |
| **Date add**      | `+ INTERVAL`     | `+ INTERVAL`    | `+ INTERVAL`    | `DATEADD()`     | `+ N`       |
| **Date diff**     | `-`              | `-`             | `DATEDIFF()`    | `DATEDIFF()`    | `-`         |
| **Current date**  | `CURRENT_DATE`   | `CURRENT_DATE`  | `CURDATE()`     | `GETDATE()`     | `SYSDATE`   |
| **Date format**   | `CAST`/`TO_CHAR` | `TO_CHAR()`     | `DATE_FORMAT()` | `FORMAT()`      | `TO_CHAR()` |

## Key Takeaways

1. **String functions** are largely standardized but have differences in syntax (`||` vs `+` vs `CONCAT()`).
2. **Date arithmetic** differs widely. SQL Server and MySQL use special functions (`DATEADD`, `DATEDIFF`), while PostgreSQL and Oracle support arithmetic directly.
3. **Formatting** (`TO_CHAR`, `DATE_FORMAT`, `FORMAT`) is highly database-specific.
4. **Timezone-aware types** (`TIMESTAMPTZ`, `DATETIMEOFFSET`) are handled differently:

   - PostgreSQL: `TIMESTAMPTZ`
   - SQL Server: `DATETIMEOFFSET`
   - Oracle: `TIMESTAMP WITH TIME ZONE`

5. Always consult documentation when migrating SQL logic across databases — especially for **string concatenation, date formatting, and interval arithmetic**.
