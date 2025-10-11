---
sidebar_position: 3
---

# Aggregations Queries

**Aggregation** in SQL refers to the process of performing **calculations on multiple rows** of a table and returning a **single summarized value**. It is a key part of analytical queries — used for reporting, summarizing trends, and data insights.

For example:

- Finding total sales per month
- Counting employees per department
- Calculating average salary, etc.

Aggregation functions operate **vertically** (across rows), as opposed to scalar functions which operate **horizontally** (on individual rows).

## Common Aggregate Functions

| Function  | Description                                    | Example                                                            |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `COUNT()` | Counts rows (optionally filtered by condition) | `COUNT(*)` counts all rows; `COUNT(column)` counts non-null values |
| `SUM()`   | Adds up all numeric values in a column         | `SUM(salary)`                                                      |
| `AVG()`   | Computes the average of numeric values         | `AVG(salary)`                                                      |
| `MIN()`   | Returns the smallest value in a column         | `MIN(salary)`                                                      |
| `MAX()`   | Returns the largest value in a column          | `MAX(salary)`                                                      |

## Basic Aggregation Example

```sql
SELECT COUNT(*) AS total_employees,
       AVG(salary) AS avg_salary,
       MAX(salary) AS max_salary,
       MIN(salary) AS min_salary
FROM employees;
```

**Explanation:**

- This computes total count, average, maximum, and minimum salary across all employees.
- Without a `GROUP BY` clause, aggregate functions compute results **for the entire table**.

## COUNT() Function

The `COUNT()` function is special because it has variants:

```sql
SELECT COUNT(*) FROM employees;          -- Counts all rows (including NULLs)
SELECT COUNT(salary) FROM employees;     -- Counts only rows where salary is not NULL
SELECT COUNT(DISTINCT department) FROM employees;  -- Counts unique departments
```

**Differences across databases:**

| Database   | `COUNT(DISTINCT col1, col2)` (multiple columns)               |     |         |
| ---------- | ------------------------------------------------------------- | --- | ------- |
| MySQL      | Supported since 5.7                                           |     |         |
| PostgreSQL | Supported                                                     |     |         |
| SQLite     | Not supported directly (workaround using `COUNT(DISTINCT col1 |     | col2)`) |
| SQL Server | Not supported directly                                        |     |         |
| Oracle     | Not supported directly                                        |     |         |

## SUM(), AVG(), MIN(), MAX() Functions

All these operate only on numeric or comparable columns.

Example:

```sql
SELECT SUM(salary) AS total_salary,
       AVG(salary) AS average_salary,
       MIN(salary) AS lowest_salary,
       MAX(salary) AS highest_salary
FROM employees;
```

**Notes:**

- `SUM()` and `AVG()` ignore `NULL` values.
- `MIN()` and `MAX()` can operate on numeric, text, and date columns.

Example with dates:

```sql
SELECT MIN(hire_date) AS first_hired, MAX(hire_date) AS last_hired
FROM employees;
```

## DISTINCT with Aggregate Functions

We can apply `DISTINCT` inside aggregate functions to ensure uniqueness before aggregation.

Example:

```sql
SELECT COUNT(DISTINCT department) AS unique_departments FROM employees;
SELECT SUM(DISTINCT salary) AS unique_salary_sum FROM employees;
```

**Behavior differences:**

| Database   | Notes                                                 |
| ---------- | ----------------------------------------------------- |
| MySQL      | Supports `DISTINCT` in all aggregate functions        |
| PostgreSQL | Supports `DISTINCT` in all aggregates                 |
| SQLite     | Supports only for `COUNT`, `AVG`, `SUM`, `MIN`, `MAX` |
| SQL Server | Supports for `COUNT`, `SUM`, `AVG`                    |
| Oracle     | Supports `DISTINCT` for most aggregates               |

## Using WHERE with Aggregates

The `WHERE` clause filters rows **before aggregation**:

```sql
SELECT AVG(salary) AS avg_it_salary
FROM employees
WHERE department = 'IT';
```

This computes the average salary only for IT employees.

## Handling NULLs in Aggregations

Aggregate functions **ignore NULLs**, except `COUNT(*)`, which counts all rows regardless of NULL values.

Example:

| salary |
| ------ |
| 1000   |
| NULL   |
| 2000   |

| Function        | Result |
| --------------- | ------ |
| `COUNT(*)`      | 3      |
| `COUNT(salary)` | 2      |
| `SUM(salary)`   | 3000   |
| `AVG(salary)`   | 1500   |

To handle NULLs explicitly, we can use `COALESCE()`:

```sql
SELECT SUM(COALESCE(bonus, 0)) FROM employees;
```

## Filtering Aggregates with HAVING

The `HAVING` clause filters results **after aggregation**.

Example:

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```

`WHERE` filters rows **before** aggregation, while `HAVING` filters groups **after** aggregation.

## Combining Aggregates with ORDER BY

We can order results based on computed aggregates:

```sql
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
ORDER BY emp_count DESC;
```

## Database-Specific Differences in Aggregation Behavior

| Feature                              | MySQL                     | PostgreSQL                      | SQLite                     | SQL Server        | Oracle          |
| ------------------------------------ | ------------------------- | ------------------------------- | -------------------------- | ----------------- | --------------- |
| `COUNT(DISTINCT col1, col2)`         | ✅ (from 5.7)             | ✅                              | ❌ (use concat workaround) | ❌                | ❌              |
| `GROUP_CONCAT()` (aggregate strings) | ✅ `GROUP_CONCAT()`       | ✅ as `STRING_AGG()`            | ✅ `GROUP_CONCAT()`        | ✅ `STRING_AGG()` | ✅ `LISTAGG()`  |
| `FILTER (WHERE ...)` syntax          | ❌ (use `SUM(CASE...)`)   | ✅                              | ✅ (from 3.30.0)           | ❌                | ❌ (use `CASE`) |
| Handling of NULL in `COUNT()`        | Ignores `NULL` (standard) | Ignores `NULL`                  | Ignores `NULL`             | Ignores `NULL`    | Ignores `NULL`  |
| Boolean aggregates                   | `SUM(condition)` works    | `BOOL_OR`, `BOOL_AND` available | `SUM(condition)`           | `SUM(CAST(...))`  | `SUM(CASE...)`  |

**Examples of database-specific syntax:**

_PostgreSQL_ supports direct filtering in aggregates:

```sql
SELECT
  COUNT(*) AS total,
  COUNT(*) FILTER (WHERE department = 'IT') AS it_count
FROM employees;
```

_MySQL_ and _SQL Server_ require conditional aggregation instead:

```sql
SELECT
  COUNT(*) AS total,
  SUM(CASE WHEN department = 'IT' THEN 1 ELSE 0 END) AS it_count
FROM employees;
```
