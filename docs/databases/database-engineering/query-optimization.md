---
sidebar_position: 7
---

# Query Optimization

Query optimization is crucial for improving the performance of database systems. Below are key techniques and how to analyze query performance using tools like `EXPLAIN` and `EXPLAIN ANALYZE` in PostgreSQL.

## General Query Optimization Techniques

### Use Indexes Effectively

- Add indexes on columns used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY`.
- Use composite indexes for multi-column filtering.

Example:

```sql
CREATE INDEX idx_employees_department ON employees(department_id);
SELECT * FROM employees WHERE department_id = 3;
```

### Avoid `SELECT *`

- Query only the columns We need to reduce unnecessary data retrieval.

Example:

```sql
SELECT first_name, last_name FROM employees WHERE department_id = 3;
```

### Optimize Joins

- Use proper indexes on join columns.
- Prefer smaller tables as the driving table in joins.

Example:

```sql
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;
```

### Use Proper Data Types

- Ensure columns are of the correct data type for efficient storage and faster comparisons.

### Limit Data Returned

- Use `LIMIT` to reduce the number of rows returned if only a subset is needed.

Example:

```sql
SELECT * FROM employees WHERE department_id = 3 LIMIT 10;
```

### Use Query Caching and Materialized Views

- Cache results of complex queries or create materialized views to avoid repetitive computations.

Example:

```sql
CREATE MATERIALIZED VIEW active_employees AS
SELECT * FROM employees WHERE status = 'active';
```

### Avoid Functions in WHERE Clauses

- Avoid using functions on indexed columns as it can prevent index usage.

Example:

```sql
-- Avoid:
SELECT * FROM employees WHERE LOWER(last_name) = 'smith';

-- Instead:
CREATE INDEX idx_lower_lastname ON employees(LOWER(last_name));
SELECT * FROM employees WHERE LOWER(last_name) = 'smith';
```

## Using EXPLAIN and EXPLAIN ANALYZE

PostgreSQL provides the `EXPLAIN` and `EXPLAIN ANALYZE` commands to analyze query execution plans and understand how queries are processed by the database.

### EXPLAIN

- **Purpose**: Shows the execution plan the database plans to use for the query.
- **Does Not Execute**: Only predicts what will happen, without running the query.

**Example**:

```sql
EXPLAIN SELECT * FROM employees WHERE department_id = 3;
```

**Output**:

```
Seq Scan on employees  (cost=0.00..35.50 rows=10 width=100)
  Filter: (department_id = 3)
```

#### Key Components in EXPLAIN Output:

- **Seq Scan**: A sequential scan, meaning the database reads every row in the table.
- **Cost**: Estimated cost of the operation, expressed as a range (`startup cost` to `total cost`).
- **Rows**: Estimated number of rows the query will return.
- **Width**: Average size of rows in bytes.

### EXPLAIN ANALYZE

- **Purpose**: Executes the query and provides the actual execution plan with runtime statistics.
- **Useful for Real Performance**: Helps identify bottlenecks in query execution.

**Example**:

```sql
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 3;
```

**Sample Output**:

```
Seq Scan on employees  (cost=0.00..35.50 rows=10 width=100) (actual time=0.023..0.031 rows=3 loops=1)
  Filter: (department_id = 3)
  Rows Removed by Filter: 97
Planning Time: 0.124 ms
Execution Time: 0.056 ms
```

#### Key Components in EXPLAIN ANALYZE Output:

1. **Actual Time**:

   - Time taken to process rows for the step (in milliseconds).
   - E.g., `actual time=0.023..0.031` means the step started at `0.023ms` and ended at `0.031ms`.

2. **Rows**:

   - **Estimated vs Actual**: Compare `rows=10` (estimate) with `rows=3` (actual).

3. **Rows Removed by Filter**:

   - Rows that did not satisfy the filter condition.

4. **Planning Time**:

   - Time spent planning the query.

5. **Execution Time**:
   - Total time taken to execute the query.

## Reading the Results

1. **Look for Sequential Scans**:

   - Sequential scans (`Seq Scan`) can be expensive for large tables. Consider adding an index to replace them with an `Index Scan`.

2. **Compare Costs**:

   - Analyze the cost and identify which operations are the most expensive. Look for high `cost` ranges or high execution times.

3. **Loops**:

   - Check how many times operations are repeated (e.g., in nested loops).

4. **Rows vs Estimates**:
   - Large discrepancies between estimated and actual rows suggest the query planner needs better statistics.

## Practical Steps to Optimize with EXPLAIN and EXPLAIN ANALYZE

1. Use `EXPLAIN` to understand the query execution plan.
2. If sequential scans dominate, consider adding or optimizing indexes.
3. Use `EXPLAIN ANALYZE` to measure real-world performance.
4. Monitor for discrepancies between estimated and actual rows, as this indicates inaccurate database statistics.
