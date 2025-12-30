---
sidebar_position: 9
---

# Window Functions

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Window functions perform calculations across a **set of rows related to the current row** without collapsing the result set into a single row. Unlike aggregate functions that return **one row per group**, window functions return a **value for each row** while still allowing access to individual row details.

Window functions are also called **analytic functions** - they're super powerful for advanced SQL analysis!

## Syntax

```sql
<window_function>() OVER (
    [PARTITION BY partition_expression]
    [ORDER BY order_expression]
    [ROWS or RANGE frame_specification]
)
```

**Components:**

- **`<window_function>`**: The function applied (SUM, AVG, ROW_NUMBER, RANK, etc.).
- **`PARTITION BY`**: Divides the result set into partitions (similar to GROUP BY but does not collapse rows).
- **`ORDER BY`**: Defines the order of rows within each partition.
- **`ROWS` / `RANGE`**: Defines a frame over which the function operates (optional).

## Common Window Functions

### ROW_NUMBER()

Assigns a unique sequential number to each row within a partition.

```sql
SELECT employee_id, department_id, salary,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num
FROM employees;
```

**Output (example):**

| employee_id | department_id | salary | row_num |
| ----------- | ------------- | ------ | ------- |
| 1           | 101           | 70000  | 1       |
| 3           | 101           | 60000  | 2       |
| 2           | 102           | 80000  | 1       |

**Explanation:**
Rows are numbered per department ordered by salary descending - each department gets its own numbering sequence starting from 1.

### RANK()

Assigns a rank to rows in a partition; ties receive the same rank, but gaps appear in sequence.

```sql
SELECT employee_id, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
FROM employees;
```

**Output:**

| employee_id | department_id | salary | rnk |
| ----------- | ------------- | ------ | --- |
| 1           | 101           | 70000  | 1   |
| 3           | 101           | 60000  | 2   |
| 2           | 102           | 80000  | 1   |

### DENSE_RANK()

Similar to `RANK()`, but **does not skip ranks** when ties occur.

```sql
SELECT employee_id, department_id, salary,
       DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rnk
FROM employees;
```

**Output:**

| employee_id | department_id | salary | dense_rnk |
| ----------- | ------------- | ------ | --------- |
| 1           | 101           | 70000  | 1         |
| 3           | 101           | 60000  | 2         |
| 2           | 102           | 80000  | 1         |

### NTILE(n)

Divides rows in a partition into **n roughly equal groups** and assigns a bucket number.

```sql
SELECT employee_id, salary,
       NTILE(2) OVER (ORDER BY salary DESC) AS bucket
FROM employees;
```

**Output:**

| employee_id | salary | bucket |
| ----------- | ------ | ------ |
| 2           | 80000  | 1      |
| 1           | 70000  | 1      |
| 3           | 60000  | 2      |

### LEAD() / LAG()

Access subsequent (`LEAD`) or preceding (`LAG`) row value in the partition.

```sql
SELECT employee_id, salary,
       LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary) AS prev_salary,
       LEAD(salary, 1) OVER (PARTITION BY department_id ORDER BY salary) AS next_salary
FROM employees;
```

**Output:**

| employee_id | salary | prev_salary | next_salary |
| ----------- | ------ | ----------- | ----------- |
| 3           | 60000  | NULL        | 70000       |
| 1           | 70000  | 60000       | NULL        |
| 2           | 80000  | NULL        | NULL        |

**Explanation:**

- `prev_salary` is the previous row in the department order (NULL for the first row).
- `next_salary` is the next row (NULL for the last row).

### SUM(), AVG(), MIN(), MAX() as Window Functions

Aggregate functions can be applied as window functions without collapsing rows.

```sql
SELECT employee_id, department_id, salary,
       SUM(salary) OVER (PARTITION BY department_id) AS total_salary,
       AVG(salary) OVER (PARTITION BY department_id) AS avg_salary
FROM employees;
```

**Output:**

| employee_id | department_id | salary | total_salary | avg_salary |
| ----------- | ------------- | ------ | ------------ | ---------- |
| 1           | 101           | 70000  | 130000       | 65000      |
| 3           | 101           | 60000  | 130000       | 65000      |
| 2           | 102           | 80000  | 80000        | 80000      |

## Key Features of Window Functions

- **Do not collapse rows** – each row retains its identity.
- **Can combine with `PARTITION BY`** – similar to GROUP BY but preserves all rows.
- **Supports ordering and frames** – e.g., cumulative sums, moving averages.

## Example: Running Total

```sql
SELECT employee_id, salary,
       SUM(salary) OVER (ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM employees;
```

**Output:**

| employee_id | salary | running_total |
| ----------- | ------ | ------------- |
| 3           | 60000  | 60000         |
| 1           | 70000  | 130000        |
| 2           | 80000  | 210000        |

**Explanation:**

- Calculates cumulative sum ordered by salary - each row shows the running total up to that point.

## Database Support

| Function                     | PostgreSQL | MySQL     | SQL Server | Oracle |
| ---------------------------- | ---------- | --------- | ---------- | ------ |
| ROW_NUMBER, RANK, DENSE_RANK | ✓          | ✓         | ✓          | ✓      |
| NTILE                        | ✓          | ✓         | ✓          | ✓      |
| LEAD / LAG                   | ✓          | ✓ (8.0+)  | ✓          | ✓      |
| SUM/AVG as window            | ✓          | ✓ (8.0+)  | ✓          | ✓      |
| Frames (ROWS/RANGE)          | ✓          | ✓         | ✓          | ✓      |

## Use Cases

- **Ranking** – Top-N per category (`ROW_NUMBER`, `RANK`)
- **Comparing rows** – Previous/next values (`LAG`, `LEAD`)
- **Cumulative calculations** – Running totals, moving averages
- **Percentile calculations** – Using `NTILE` or `PERCENT_RANK`
- **Aggregates without collapsing rows** – `SUM`, `AVG` as window functions

## Key Takeaways

1. Window functions allow **row-level computations** over a defined window of rows.
2. They are more powerful than traditional aggregates for **ranking, running totals, and comparisons**.
3. Unlike GROUP BY, **no rows are lost**, making them ideal for detailed analytics.
4. Modern databases optimize window functions efficiently; **partitioning and ordering are key to performance**.
