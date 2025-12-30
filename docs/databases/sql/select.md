---
sidebar_position: 2
---

# SELECT Queries

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

The **`SELECT` statement** is the foundation of **Data Query Language (DQL)** in SQL. It is used to **retrieve data** from one or more tables in a relational database. We use `SELECT` more than any other SQL command, it's essential for data exploration, reporting, and building applications.

## Basic Syntax

```sql
SELECT column_list
FROM table_name
[WHERE condition]
[ORDER BY column_name [ASC|DESC]]
[LIMIT n / FETCH FIRST n ROWS ONLY];
```

**Explanation:**

- `SELECT` – specifies which columns to retrieve.
- `FROM` – specifies the table to query data from.
- `WHERE` – filters rows based on conditions.
- `ORDER BY` – sorts the result.
- `LIMIT` / `FETCH` – restricts the number of rows returned.

## Selecting All Columns

We can retrieve all columns from a table using the wildcard:

```sql
SELECT * FROM employees;
```

The `*` wildcard fetches every column from the table.
While convenient, we usually avoid it in production queries because it can:

- Retrieve unnecessary data,
- Increase network load,
- Break when schemas change.

## Selecting Specific Columns

To fetch only certain columns, we specify them explicitly:

```sql
SELECT name, department FROM employees;
```

This returns only the `name` and `department` columns.

## Using Column Aliases

We can use aliases to rename columns in the output - super useful for readability or when working with derived expressions.

```sql
SELECT name AS employee_name, department AS dept FROM employees;
```

The `AS` keyword is optional:

```sql
SELECT name employee_name, department dept FROM employees;
```

## Renaming Tables with Aliases

We use table aliases for convenience or to disambiguate tables in larger queries:

```sql
SELECT e.name, e.salary FROM employees AS e;
```

### Filtering Rows with WHERE

The `WHERE` clause lets us restrict which rows appear in the result set.

```sql
SELECT * FROM employees WHERE department = 'Sales';
```

Common operators:

| Operator     | Description                | Example                          |
| ------------ | -------------------------- | -------------------------------- |
| `=`          | Equal to                   | `salary = 50000`                 |
| `!=` or `<>` | Not equal to               | `department <> 'HR'`             |
| `>` / `<`    | Greater/Less than          | `salary > 60000`                 |
| `>=` / `<=`  | Greater/Less than or equal | `salary >= 45000`                |
| `BETWEEN`    | Within range               | `salary BETWEEN 40000 AND 60000` |
| `IN`         | Match any in a list        | `department IN ('HR', 'IT')`     |
| `LIKE`       | Pattern match              | `name LIKE 'A%'`                 |
| `IS NULL`    | Check for null values      | `manager_id IS NULL`             |

## Sorting Results

We can sort the results using `ORDER BY`.

```sql
SELECT name, salary FROM employees ORDER BY salary DESC;
```

- `ASC` – ascending order (default)
- `DESC` – descending order

Sorting by multiple columns:

```sql
SELECT name, department, salary
FROM employees
ORDER BY department ASC, salary DESC;
```

## Limiting the Number of Rows

Different databases provide different ways to limit results.

| Database                        | Syntax Example                                                |
| ------------------------------- | ------------------------------------------------------------- |
| **MySQL / PostgreSQL / SQLite** | `SELECT * FROM employees LIMIT 10;`                           |
| **SQL Server**                  | `SELECT TOP 10 * FROM employees;`                             |
| **Oracle (12c+)**               | `SELECT * FROM employees FETCH FIRST 10 ROWS ONLY;`           |
| **Older Oracle versions**       | `SELECT * FROM (SELECT * FROM employees) WHERE ROWNUM <= 10;` |

## Removing Duplicates with DISTINCT

We can use `DISTINCT` to eliminate duplicate rows in the output:

```sql
SELECT DISTINCT department FROM employees;
```

Important: `DISTINCT` applies to the **entire row** (all selected columns), not just one column.

## Using Expressions in SELECT

We can compute new columns using expressions:

```sql
SELECT name, salary * 1.1 AS new_salary FROM employees;
```

In this example, each employee's `salary` is increased by 10% and displayed as `new_salary`.

Expressions can use:

- Arithmetic operators (`+`, `-`, `*`, `/`)
- String concatenation
- Conditional expressions like `CASE`

Example:

```sql
SELECT name,
       CASE WHEN salary > 80000 THEN 'High'
            WHEN salary > 50000 THEN 'Medium'
            ELSE 'Low' END AS salary_level
FROM employees;
```

## Using SQL Functions (Non-Aggregate)

Even without aggregation, SQL provides **scalar functions** that operate on individual values - these are super handy:

| Function Type | Example              | Description                |
| ------------- | -------------------- | -------------------------- |
| String        | `UPPER(name)`        | Converts to uppercase      |
| Date          | `CURRENT_DATE`       | Returns current date       |
| Numeric       | `ROUND(salary, 2)`   | Rounds to 2 decimal places |
| Conditional   | `COALESCE(bonus, 0)` | Replaces `NULL` with 0     |

Example:

```sql
SELECT id, UPPER(name) AS name_caps, COALESCE(manager_id, 0) AS mgr
FROM employees;
```

## SQL SELECT Differences Across Databases

Even though SQL is standardized (ANSI SQL), different databases have subtle differences in **syntax**, **functions**, and **features**. This is something we need to keep in mind when switching between databases.

| Feature              | MySQL                       | PostgreSQL          | SQLite              | SQL Server                              | Oracle                                  |
| -------------------- | --------------------------- | ------------------- | ------------------- | --------------------------------------- | --------------------------------------- |
| Limit results        | `LIMIT 10`                  | `LIMIT 10`          | `LIMIT 10`          | `TOP 10`                                | `FETCH FIRST 10 ROWS ONLY`              |
| Current date         | `CURDATE()`                 | `CURRENT_DATE`      | `date('now')`       | `GETDATE()`                             | `SYSDATE`                               |
| Case sensitivity     | Case-insensitive by default | Case-sensitive      | Case-insensitive    | Case-insensitive                        | Case-insensitive                        |
| Aliases with AS      | Optional                    | Optional            | Optional            | Optional                                | Optional                                |
| Conditional function | `IF(condition, a, b)`       | `CASE WHEN ...`     | `CASE WHEN ...`     | `IIF(condition, a, b)`                  | `CASE WHEN ...`                         |
| Limit + Offset       | `LIMIT 10 OFFSET 5`         | `LIMIT 10 OFFSET 5` | `LIMIT 10 OFFSET 5` | `OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY` | `OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY` |

These differences are minor for basic `SELECT` queries but become more important when using advanced SQL features like **window functions**, **CTEs**, or **JSON handling**.

## Execution Order of a SELECT Query

Here's something important: even though we write SQL in a specific order, the **logical execution order** inside the database is actually different:

| Clause        | Logical Order | Description                    |
| ------------- | ------------- | ------------------------------ |
| `FROM`        | 1             | Identify tables and joins      |
| `WHERE`       | 2             | Filter rows                    |
| `SELECT`      | 3             | Choose columns and expressions |
| `DISTINCT`    | 4             | Remove duplicates              |
| `ORDER BY`    | 5             | Sort the result                |
| `LIMIT/FETCH` | 6             | Restrict output rows           |

So when we write this query:

```sql
SELECT name FROM employees WHERE department = 'IT' ORDER BY name LIMIT 5;
```

it's logically processed in the order shown above, not the order we wrote it.

## Pattern Matching with LIKE

The `LIKE` operator lets us search for patterns in text data using wildcards. It's super useful when we need to find rows that match a specific pattern rather than an exact value.

### Basic Syntax

```sql
SELECT column_list
FROM table_name
WHERE column_name LIKE pattern;
```

### Wildcards

`LIKE` uses two main wildcards:

| Wildcard | Description                    | Example                                                          |
| -------- | ------------------------------ | ---------------------------------------------------------------- |
| `%`      | Matches zero or more characters | `'John%'` matches "John", "Johnny", "Johnson"                     |
| `_`      | Matches exactly one character  | `'J_hn'` matches "John", "Jahn" but not "Jon"                     |

### Common LIKE Patterns

**Starts with:**

```sql
SELECT name FROM employees WHERE name LIKE 'A%';
-- Finds all names starting with 'A' (Alice, Andrew, etc.)
```

**Ends with:**

```sql
SELECT email FROM employees WHERE email LIKE '%@company.com';
-- Finds all emails ending with '@company.com'
```

**Contains:**

```sql
SELECT name FROM employees WHERE name LIKE '%son%';
-- Finds names containing "son" (Johnson, Jackson, etc.)
```

**Exact length:**

```sql
SELECT code FROM products WHERE code LIKE 'ABC___';
-- Finds codes starting with 'ABC' followed by exactly 3 characters
```

**Single character match:**

```sql
SELECT name FROM employees WHERE name LIKE 'J_n';
-- Matches "Jon", "Jan", "Jen" (3 characters, starts with J, ends with n)
```

### Combining Patterns

We can combine multiple wildcards for more complex searches:

```sql
-- Find names that start with 'A' and end with 'n'
SELECT name FROM employees WHERE name LIKE 'A%n';

-- Find email addresses with specific domain pattern
SELECT email FROM employees WHERE email LIKE '%@%.com';
```

### Escaping Special Characters

If we need to search for literal `%` or `_` characters, we need to escape them. The escape character varies by database:

**PostgreSQL:**

```sql
SELECT name FROM products WHERE name LIKE '50\% off';
-- Uses backslash as escape character
```

**MySQL:**

```sql
SELECT name FROM products WHERE name LIKE '50\% off' ESCAPE '\\';
-- Can specify custom escape character
```

**SQL Server:**

```sql
SELECT name FROM products WHERE name LIKE '50[%] off';
-- Uses square brackets to escape
```

### Case Sensitivity

The case sensitivity of `LIKE` depends on the database's collation settings:

| Database   | Default Behavior                                     |
| ---------- | ---------------------------------------------------- |
| MySQL      | Case-insensitive by default                         |
| PostgreSQL | Case-sensitive (use `ILIKE` for case-insensitive)   |
| SQLite     | Case-insensitive for ASCII characters                |
| SQL Server | Depends on collation (usually case-insensitive)      |
| Oracle     | Case-sensitive                                       |

**PostgreSQL case-insensitive example:**

```sql
SELECT name FROM employees WHERE name ILIKE 'john%';
-- ILIKE is PostgreSQL-specific for case-insensitive matching
```

**Other databases (using functions):**

```sql
-- MySQL, SQL Server, Oracle
SELECT name FROM employees WHERE UPPER(name) LIKE 'JOHN%';
-- or
SELECT name FROM employees WHERE LOWER(name) LIKE 'john%';
```

### NOT LIKE

We can use `NOT LIKE` to exclude patterns:

```sql
SELECT name FROM employees WHERE name NOT LIKE 'A%';
-- Finds all names that don't start with 'A'
```

### Performance Considerations

- `LIKE` with leading wildcards (`%pattern`) can be slow because it can't use indexes efficiently
- Patterns starting with a character (`pattern%`) can use indexes and are much faster
- For complex pattern matching, some databases support regular expressions (PostgreSQL `~`, MySQL `REGEXP`)

**Example of efficient vs inefficient:**

```sql
-- Fast: can use index
SELECT * FROM employees WHERE name LIKE 'John%';

-- Slow: can't use index effectively
SELECT * FROM employees WHERE name LIKE '%John';
```

### Database-Specific Extensions

Some databases offer additional pattern matching capabilities:

**PostgreSQL - Regular Expressions:**

```sql
SELECT name FROM employees WHERE name ~ '^J.*n$';
-- Uses POSIX regular expressions
```

**MySQL - REGEXP:**

```sql
SELECT name FROM employees WHERE name REGEXP '^J.*n$';
-- Uses MySQL regular expression syntax
```

**SQL Server - Full-text search:**

```sql
SELECT * FROM employees WHERE CONTAINS(name, 'John');
-- More powerful than LIKE for full-text scenarios
```
