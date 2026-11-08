---
sidebar_position: 7
---

# Query Optimization

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Query optimization is the process of improving SQL queries to reduce execution time, memory consumption, disk I/O, and unnecessary database operations. Efficient queries are particularly important in backend applications, where database operations can become a significant performance bottleneck as data volume and application traffic increase.

Query optimization involves writing efficient SQL, choosing appropriate indexes, minimizing unnecessary data retrieval, optimizing joins, and analyzing query execution plans. PostgreSQL provides tools like `EXPLAIN` and `EXPLAIN ANALYZE` to understand query execution and identify performance bottlenecks.

## General Query Optimization Techniques

### Use Indexes Effectively

Indexes help databases locate rows without scanning the entire table. They are particularly useful for columns frequently used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY` clauses.

- Create indexes on columns frequently used for filtering and joining.
- Use composite indexes when queries frequently filter or sort using multiple columns.
- Consider the order of columns in composite indexes because it affects which queries can efficiently use them.
- Avoid creating unnecessary indexes because they consume storage and introduce additional overhead during `INSERT`, `UPDATE`, and `DELETE` operations.
- Choose an appropriate index type based on the query pattern and data structure.

Example:

```sql
CREATE INDEX idx_employees_department
ON employees(department_id);

SELECT *
FROM employees
WHERE department_id = 3;
```

For queries that frequently filter using multiple columns, a composite index can be more effective.

```sql
CREATE INDEX idx_employees_department_status
ON employees(department_id, status);

SELECT *
FROM employees
WHERE department_id = 3
AND status = 'active';
```

The order of columns matters. An index on `(department_id, status)` is generally useful for queries filtering by `department_id` alone or by both columns, but it is not equally effective for queries filtering only by `status`.

### Avoid `SELECT *`

Retrieve only the columns required by the application instead of selecting every column.

- Reduces the amount of data transferred between the database and application.
- Reduces memory consumption when processing query results.
- Can allow PostgreSQL to use an index-only scan when all required columns are available in the index and visibility conditions permit it.
- Makes queries less dependent on changes to the table schema.

Example:

```sql
-- Avoid:
SELECT *
FROM employees
WHERE department_id = 3;

-- Instead:
SELECT first_name, last_name
FROM employees
WHERE department_id = 3;
```

### Optimize Joins

Joins combine rows from multiple tables based on related columns. Poorly optimized joins can become expensive, particularly when working with large datasets.

- Ensure appropriate indexes exist on columns used in join conditions.
- Retrieve only the columns required from each table.
- Filter unnecessary rows before joining whenever doing so reduces the amount of data processed.
- Avoid joining tables when the required information can be obtained without the join.
- Understand the impact of join cardinality and the number of matching rows.

Example:

```sql
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d
    ON e.department_id = d.department_id
WHERE e.status = 'active';
```

PostgreSQL chooses an appropriate join strategy based on factors such as table sizes, available indexes, statistics, and estimated costs. Common strategies include Nested Loop Join, Hash Join, and Merge Join.

The most appropriate join strategy depends on the query and the characteristics of the underlying data. A smaller table is not automatically the best driving table in every situation.

### Use Proper Data Types

Choosing appropriate data types improves storage efficiency, comparison operations, and data integrity.

- Use `INTEGER` or `BIGINT` for integer values instead of unnecessarily large or generic data types.
- Use `BOOLEAN` for true/false values.
- Use `DATE` or `TIMESTAMP` for date and time values instead of storing them as strings.
- Use appropriate numeric types for monetary and decimal values.
- Ensure columns used in comparisons and joins have compatible data types to avoid unnecessary conversions.

Example:

```sql
CREATE TABLE employees (
    id BIGINT PRIMARY KEY,
    first_name VARCHAR(100),
    salary NUMERIC(10, 2),
    joining_date DATE,
    is_active BOOLEAN
);
```

Using matching data types in join conditions and comparison operations also helps avoid implicit conversions that can interfere with efficient index usage.

### Limit Data Returned

Retrieve only the number of rows required by the application.

- Use `LIMIT` when only a subset of query results is needed.
- Combine `LIMIT` with `ORDER BY` when a specific ordering is required.
- Use pagination to retrieve large result sets in smaller batches.
- Prefer keyset pagination over large `OFFSET` values when working with large datasets.

Example:

```sql
SELECT id, first_name, last_name
FROM employees
WHERE department_id = 3
ORDER BY id
LIMIT 10;
```

For pagination using `OFFSET`:

```sql
SELECT id, first_name, last_name
FROM employees
ORDER BY id
LIMIT 10 OFFSET 1000;
```

Large `OFFSET` values can be inefficient because PostgreSQL still needs to identify and skip the preceding rows.

Keyset pagination can avoid this overhead by using the last retrieved row as the starting point for the next query.

```sql
SELECT id, first_name, last_name
FROM employees
WHERE id > 1000
ORDER BY id
LIMIT 10;
```

This example assumes `id` is a unique, monotonically increasing identifier.

### Use Query Caching and Materialized Views

Repeatedly executing expensive queries can increase database load. Caching and materialized views can reduce unnecessary computation when the underlying data does not need to be reflected immediately.

- Cache frequently requested query results when they can be reused.
- Use application-level caching or an external cache such as Redis for frequently accessed data.
- Use materialized views for expensive aggregations and reporting queries that do not require real-time results.
- Refresh materialized views periodically or when the underlying data changes, depending on the application's consistency requirements.

Example:

```sql
CREATE MATERIALIZED VIEW active_employees AS
SELECT id, first_name, last_name, department_id
FROM employees
WHERE status = 'active';
```

To refresh the materialized view:

```sql
REFRESH MATERIALIZED VIEW active_employees;
```

Unlike a regular database view, a materialized view stores the results of its query. Consequently, its contents can become stale until refreshed.

### Avoid Functions and Expressions on Indexed Columns

Applying functions or expressions to indexed columns can prevent PostgreSQL from using a regular index efficiently because the query is no longer directly filtering on the indexed column.

Example:

```sql
-- Potentially inefficient with a regular index:
SELECT *
FROM employees
WHERE LOWER(last_name) = 'smith';
```

One solution is to create an expression index:

```sql
CREATE INDEX idx_lower_lastname
ON employees(LOWER(last_name));
```

The original query can now use the expression index when PostgreSQL determines that doing so is beneficial.

Alternatively, rewrite the query to filter directly on the indexed column when the application logic allows it.

```sql
SELECT *
FROM employees
WHERE last_name = 'Smith';
```

Expression indexes are useful when queries frequently apply the same function or expression to a column.

### Use Partial Indexes When Appropriate

A partial index indexes only rows satisfying a specified condition instead of indexing every row in the table.

This is useful when queries frequently access a small subset of records, such as active users, pending orders, or unprocessed events.

Example:

```sql
CREATE INDEX idx_active_employees
ON employees(department_id)
WHERE status = 'active';
```

A query filtering on the same condition can potentially use this index:

```sql
SELECT id, first_name
FROM employees
WHERE department_id = 3
AND status = 'active';
```

Partial indexes can reduce index size and maintenance overhead when only a subset of table rows is relevant to common queries.

### Use Composite and Covering Indexes Appropriately

A composite index contains multiple columns, allowing PostgreSQL to efficiently access data using combinations of those columns.

A covering index goes a step further by including additional columns needed by a query, potentially allowing PostgreSQL to retrieve the required information directly from the index.

Example:

```sql
CREATE INDEX idx_employees_department
ON employees(department_id)
INCLUDE (first_name, last_name);
```

The following query may benefit from an index-only scan:

```sql
SELECT first_name, last_name
FROM employees
WHERE department_id = 3;
```

An index-only scan is possible when the index contains all required columns and PostgreSQL's visibility map allows it to avoid checking the underlying table pages.

Covering indexes are particularly useful for frequently executed queries that retrieve a small set of columns.

## Using EXPLAIN and EXPLAIN ANALYZE

PostgreSQL provides the `EXPLAIN` and `EXPLAIN ANALYZE` commands to inspect query execution plans and understand how queries are processed by the database.

These tools help identify inefficient scans, expensive joins, unnecessary sorting, inaccurate row estimates, and other performance bottlenecks.

### EXPLAIN

- **Purpose**: Displays the execution plan PostgreSQL estimates it will use for a query.
- **Does Not Execute the Query**: Regular `EXPLAIN` does not execute the query itself.
- **Estimated Statistics**: Displays estimated costs, row counts, and other information used by the query planner.

Example:

```sql
EXPLAIN
SELECT *
FROM employees
WHERE department_id = 3;
```

Output:

```text
Seq Scan on employees
    (cost=0.00..35.50 rows=10 width=100)
    Filter: (department_id = 3)
```

#### Key Components in EXPLAIN Output

- **Scan Type**: Describes how PostgreSQL accesses table data. Common scan types include `Seq Scan`, `Index Scan`, `Index Only Scan`, and `Bitmap Heap Scan`.
- **Cost**: Estimated cost of the operation, expressed as a range consisting of startup cost and total cost.
- **Rows**: Estimated number of rows returned by the operation.
- **Width**: Estimated average size of each returned row in bytes.

The cost values are internal estimates based on PostgreSQL's cost model. They are not execution times in milliseconds.

### EXPLAIN ANALYZE

- **Purpose**: Executes the query and provides the actual execution plan along with runtime statistics.
- **Actual Performance**: Reports the time taken, actual rows processed, and number of times each operation was executed.
- **Estimated vs Actual Statistics**: Allows comparison between the planner's estimates and the actual execution results.

Example:

```sql
EXPLAIN ANALYZE
SELECT *
FROM employees
WHERE department_id = 3;
```

Sample Output:

```text
Seq Scan on employees
    (cost=0.00..35.50 rows=10 width=100)
    (actual time=0.023..0.031 rows=3 loops=1)
    Filter: (department_id = 3)
    Rows Removed by Filter: 97

Planning Time: 0.124 ms
Execution Time: 0.056 ms
```

#### Key Components in EXPLAIN ANALYZE Output

1. **Actual Time**:

   - Reports the time taken to produce the first row and the time taken to complete the operation, in milliseconds.
   - For example, `actual time=0.023..0.031` means the operation produced its first row at approximately `0.023 ms` and completed at approximately `0.031 ms`.
   - For operations executed multiple times, these timing values are averages per loop.

2. **Rows**:

   - **Estimated vs Actual**: Compare the estimated row count (`rows=10`) with the actual row count (`rows=3`).
   - Significant differences can indicate inaccurate statistics or estimation difficulties.

3. **Loops**:

   - Indicates how many times an operation was executed.
   - This is particularly important when analyzing Nested Loop Joins, where an inner operation may execute repeatedly.

4. **Rows Removed by Filter**:

   - Indicates how many rows were examined but did not satisfy the filter condition.
   - A large number can suggest that a filter is eliminating many rows after they have already been retrieved.

5. **Planning Time**:

   - Time spent generating the query execution plan.

6. **Execution Time**:

   - Total time taken to execute the query, including executor startup and shutdown, but excluding planning time.

### EXPLAIN ANALYZE with BUFFERS

PostgreSQL also provides the `BUFFERS` option to show how query execution interacts with shared buffers and disk reads.

This is useful when investigating queries that perform excessive I/O or repeatedly access large amounts of data.

Example:

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT *
FROM employees
WHERE department_id = 3;
```

Important buffer statistics include:

- **Shared Hit Blocks**: Number of blocks found in PostgreSQL's shared buffers, meaning the requested data was already available in memory.
- **Shared Read Blocks**: Number of blocks PostgreSQL had to read into shared buffers from the underlying storage.
- **Shared Dirtied Blocks**: Number of shared buffer blocks modified during query execution.
- **Shared Written Blocks**: Number of shared buffer blocks written out during query execution.

A high number of shared reads can indicate substantial storage I/O, while a high number of shared hits indicates repeated access to cached database pages.

However, a shared read does not necessarily mean a physical disk read because the operating system may have cached the data.

### Reading the Results

1. **Look for Sequential Scans**:

   - Sequential scans (`Seq Scan`) read the table's rows to evaluate the query.
   - They can become expensive when a query needs only a small fraction of a large table.
   - Consider whether an appropriate index could improve performance.
   - However, sequential scans are not inherently inefficient. PostgreSQL may prefer them when a large proportion of the table needs to be accessed.

2. **Compare Costs**:

   - Analyze startup cost and total cost to understand the estimated expense of operations.
   - Remember that PostgreSQL cost values are estimates, not actual execution times.
   - Use actual execution time and buffer statistics to evaluate real query performance.

3. **Check Join Operations**:

   - Identify the join strategy selected by PostgreSQL.
   - Nested Loop Joins can be efficient for small datasets or when the inner side has an appropriate index.
   - Hash Joins are useful for joining larger datasets using equality conditions.
   - Merge Joins can be efficient when both inputs are already sorted or can be sorted efficiently.

4. **Analyze Loops**:

   - Check how many times individual operations are executed.
   - A high loop count can indicate repeated work, especially in Nested Loop Joins.
   - Consider whether indexing or restructuring the query could reduce repeated operations.

5. **Compare Estimated and Actual Rows**:

   - Large discrepancies between estimated and actual row counts can lead PostgreSQL to select inefficient execution plans.
   - These discrepancies may indicate outdated statistics, data distribution skew, or estimation limitations.

6. **Inspect Buffer Usage**:

   - Use `EXPLAIN (ANALYZE, BUFFERS)` to understand memory and storage access patterns.
   - Look for operations that repeatedly read large numbers of blocks.
   - Determine whether the query is limited by storage I/O or other operations.

7. **Look for Expensive Sorting and Aggregation**:

   - Sorting and aggregation operations can consume substantial memory.
   - Large sorts may spill to disk when they exceed available memory.
   - Consider whether an appropriate index or query restructuring can reduce sorting overhead.

## Practical Steps to Optimize Queries Using EXPLAIN and EXPLAIN ANALYZE

1. Start by identifying the slow query using application monitoring or database performance metrics.
2. Run `EXPLAIN` to understand the execution plan PostgreSQL estimates for the query.
3. Run `EXPLAIN ANALYZE` to compare estimated execution behavior with actual runtime statistics.
4. Use `BUFFERS` to investigate memory and storage access patterns.
5. Identify expensive scans, joins, sorting operations, and repeated execution of query plan nodes.
6. Check whether appropriate indexes exist and whether PostgreSQL is able to use them effectively.
7. Investigate large discrepancies between estimated and actual row counts. Run `ANALYZE` when table statistics may be outdated.
8. Make one optimization at a time and compare the execution plans and performance before and after the change.
9. Validate improvements using representative data volumes and realistic application workloads.

**Important:** `EXPLAIN ANALYZE` actually executes the query. Be careful when analyzing `INSERT`, `UPDATE`, or `DELETE` statements because they can modify data. Use an appropriate transaction and roll it back when testing changes that should not be persisted.
