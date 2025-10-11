---
sidebar_position: 2
---

# SELECT Queries

The **`SELECT` statement** is the foundation of **Data Query Language (DQL)** in SQL. It is used to **retrieve data** from one or more tables in a relational database. `SELECT` is declarative — we describe _what_ data we want to fetch, not _how_ to fetch it.

Every database user, from beginner to expert, uses `SELECT` more than any other SQL command. It is essential for data exploration, reporting, and building applications.

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

To retrieve all columns from a table:

```sql
SELECT * FROM employees;
```

The `*` wildcard fetches every column from the table.
While convenient, it’s not recommended in production queries because it can:

- Retrieve unnecessary data,
- Increase network load,
- Break when schemas change.

## Selecting Specific Columns

To fetch only certain columns:

```sql
SELECT name, department FROM employees;
```

This returns only the `name` and `department` columns.

## Using Column Aliases

Aliases rename columns in the output (useful for readability or derived expressions).

```sql
SELECT name AS employee_name, department AS dept FROM employees;
```

The `AS` keyword is optional:

```sql
SELECT name employee_name, department dept FROM employees;
```

## Renaming Tables with Aliases

Table aliases are used for convenience or to disambiguate tables in larger queries:

```sql
SELECT e.name, e.salary FROM employees AS e;
```

### Filtering Rows with WHERE

The `WHERE` clause restricts rows that appear in the result set.

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

`DISTINCT` eliminates duplicate rows in the output.

```sql
SELECT DISTINCT department FROM employees;
```

It applies to the **entire row** (all selected columns), not just one column.

## Using Expressions in SELECT

We can compute new columns using expressions:

```sql
SELECT name, salary * 1.1 AS new_salary FROM employees;
```

Here, each employee’s `salary` is increased by 10% and displayed as `new_salary`.

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

Even without aggregation, SQL provides **scalar functions** that operate on individual values:

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

Although SQL is standardized (ANSI SQL), databases have subtle differences in **syntax**, **functions**, and **features**.

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

Though we write SQL in a specific order, the **logical execution order** inside the database is different:

| Clause        | Logical Order | Description                    |
| ------------- | ------------- | ------------------------------ |
| `FROM`        | 1             | Identify tables and joins      |
| `WHERE`       | 2             | Filter rows                    |
| `SELECT`      | 3             | Choose columns and expressions |
| `DISTINCT`    | 4             | Remove duplicates              |
| `ORDER BY`    | 5             | Sort the result                |
| `LIMIT/FETCH` | 6             | Restrict output rows           |

So this query:

```sql
SELECT name FROM employees WHERE department = 'IT' ORDER BY name LIMIT 5;
```

is logically processed in the above order.
