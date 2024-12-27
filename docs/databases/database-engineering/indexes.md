---
sidebar_position: 6
---

# Indexes

Database indexes are fundamental to database performance optimization. They allow for quick data retrieval by minimizing the amount of data the database system has to scan. Without indexes, databases would need to perform a full table scan for every query, which is inefficient for large datasets. Indexes are widely used in relational databases such as PostgreSQL, MySQL, and Oracle to enhance the performance of queries involving search, filtering, sorting, and joins.

## What Is a Database Index?

A database index is a separate data structure that stores a mapping of column values to the physical location of rows in the table. It acts like a "lookup table" for the database, enabling it to quickly locate rows matching specific criteria.

Indexes are typically implemented using **B-Trees**, **hash tables**, or other optimized data structures. When a query references a column that has an index, the database uses the index to quickly identify the rows of interest instead of scanning the entire table.

## How Indexes Work (Brief Overview)

1. When an index is created on a column, the database builds a data structure (like a B-Tree or a hash table) that maps column values to the physical locations of rows in the table.
2. The index stores sorted values of the indexed column(s) along with pointers to the rows where the values are found.
3. For queries involving indexed columns, the database uses the index to efficiently locate rows, rather than scanning the entire table.
4. For multi-column indexes (composite indexes), the order of columns in the index affects performance based on the query patterns.

## B-Tree vs Hash Table

Indexes are crucial for optimizing database queries, and the two widely used index structures are **B-Tree** and **Hash Table**. Here's a concise comparison:

### B-Tree Index

- **Structure**: Balanced tree with sorted data.
- **Best For**: Range queries (`BETWEEN`, `<`, `>`, etc.) and ordered results.
- **Features**:
  - Supports both equality (`=`) and range queries.
  - Allows ordered traversal and efficient sorting.
  - Logarithmic (`O(log n)`) performance for lookups.
- **Example**:
  ```sql
  CREATE INDEX idx_btree_salary ON employees(salary);
  SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
  ```

### Hash Table Index

- **Structure**: Hash function maps keys to slots.
- **Best For**: Exact-match lookups (`=`).
- **Features**:
  - Optimized for equality queries.
  - Faster constant-time (`O(1)`) lookups but no range support.
  - Cannot handle sorting or ordering.
- **Example**:
  ```sql
  CREATE INDEX idx_hash_username ON employees USING hash(username);
  SELECT * FROM employees WHERE username = 'abhishek123';
  ```

### Comparison Table

| **Aspect**           | **B-Tree Index**                            | **Hash Table Index**              |
| -------------------- | ------------------------------------------- | --------------------------------- |
| **Query Support**    | Equality + Range (`=`, `<`, `>`, `BETWEEN`) | Equality only (`=`)               |
| **Sorting**          | Supports ordered traversal                  | No sorting                        |
| **Performance**      | `O(log n)` for lookups                      | `O(1)` for exact matches          |
| **Use Case**         | General-purpose indexing                    | Optimized for exact-match lookups |
| **Range Queries**    | Supported                                   | Not supported                     |
| **Space Efficiency** | Higher due to tree structure                | Compact                           |
| **Collisions**       | Not applicable                              | Possible hash collisions          |

## Index Types

Indexes in databases are specialized data structures that optimize query performance by enabling fast data retrieval. They can be broadly categorized based on their structure, functionality, and use cases. Below are the most common types of database indexes:

### Single-Column Index

- **Description**: An index created on a single column of a table.
- **Use Case**: Speeds up queries that filter or sort by a single column.
- **Example (PostgreSQL)**:
  ```sql
  CREATE INDEX idx_employee_id ON employees(employee_id);
  ```

### Composite Index

- **Description**: An index created on multiple columns of a table.
- **Use Case**: Improves performance for queries that involve filtering or sorting on multiple columns.
- **Example**:
  ```sql
  CREATE INDEX idx_name_dept ON employees(last_name, department_id);
  ```
- **Note**: The order of columns in a composite index matters. For example, the above index is useful for queries that filter by `last_name` or by both `last_name` and `department_id`, but not for filtering solely by `department_id`.

### Unique Index

- **Description**: Ensures that all values in the indexed column(s) are unique.
- **Use Case**: Used to enforce uniqueness constraints (e.g., on primary keys or email addresses).
- **Example**:
  ```sql
  CREATE UNIQUE INDEX idx_unique_email ON employees(email);
  ```

### Primary Key Index

- **Description**: Automatically created when a `PRIMARY KEY` constraint is defined. It is a unique index.
- **Use Case**: Enforces the uniqueness and non-nullability of the primary key column(s).
- **Example**:
  ```sql
  ALTER TABLE employees ADD PRIMARY KEY (employee_id);
  ```

### Clustered Index

- **Description**: Determines the physical order of data in the table. A table can have only one clustered index.
- **Use Case**: Optimizes range queries and queries requiring ordered results.
- **Example** (PostgreSQL uses `PRIMARY KEY` or `UNIQUE` constraints to create clustered indexes):
  ```sql
  CREATE INDEX idx_ordered_employees ON employees(employee_id);
  ```

### Non-Clustered Index

- **Description**: Does not affect the physical order of data in the table. Stores pointers to the rows in a separate data structure.
- **Use Case**: Useful for columns frequently queried but not requiring data to be stored in order.
- **Example**:
  ```sql
  CREATE INDEX idx_lastname ON employees(last_name);
  ```

### Full-Text Index

- **Description**: Optimized for searching large text fields.
- **Use Case**: Used for full-text search in applications like search engines.
- **Example**:
  ```sql
  CREATE INDEX idx_fulltext_description ON products USING gin(to_tsvector('english', description));
  ```

### Partial Index

- **Description**: Indexes only a subset of rows based on a condition.
- **Use Case**: Reduces index size and improves performance by indexing only frequently queried rows.
- **Example**:
  ```sql
  CREATE INDEX idx_active_employees ON employees(employee_id) WHERE status = 'active';
  ```

### Hash Index

- **Description**: Uses a hash table for indexing. Only supports equality comparisons (`=`).
- **Use Case**: Efficient for equality searches but not for range queries.
- **Example**:
  ```sql
  CREATE INDEX idx_hash_username ON users USING hash(username);
  ```

### Bitmap Index

- **Description**: Uses bitmaps to represent data. Often used in data warehouses.
- **Use Case**: Efficient for queries with low cardinality columns (e.g., `gender` with values `M` and `F`).
- **Example**: PostgreSQL does not support creating bitmap indexes directly, but bitmap scans are used internally for certain queries.

### Other Niche Indexes

#### Expression Index

- **Description**: Indexes the result of an expression or function.
- **Use Case**: Optimizes queries involving calculated or derived values.
- **Example**:
  ```sql
  CREATE INDEX idx_lowercase_email ON employees(LOWER(email));
  ```

#### GiST (Generalized Search Tree) Index

- **Description**: Supports complex queries like range searches, proximity searches, and custom data types.
- **Use Case**: Often used for spatial and full-text search.
- **Example**:
  ```sql
  CREATE INDEX idx_gist_location ON locations USING gist(geom);
  ```

#### SP-GiST (Space-Partitioned GiST) Index

- **Description**: A variant of GiST optimized for partitioned or hierarchical data.
- **Use Case**: Suitable for range queries on data with natural partitions.
- **Example**:
  ```sql
  CREATE INDEX idx_spgist_coordinates ON locations USING spgist(coordinates);
  ```

#### BRIN (Block Range INdex)

- **Description**: Stores summaries of ranges of physical blocks. Designed for large datasets where the data is naturally ordered.
- **Use Case**: Optimizes queries for large, sequentially stored data, such as time-series data.
- **Example**:
  ```sql
  CREATE INDEX idx_brin_timestamp ON logs USING brin(timestamp);
  ```

#### Covering Index (Included Columns)

- **Description**: Stores additional non-indexed columns in the index for faster retrieval.
- **Use Case**: Avoids accessing the table when retrieving indexed and additional columns.
- **Example** (PostgreSQL doesn’t support included columns directly, but it can be emulated with composite indexes):
  ```sql
  CREATE INDEX idx_employee_id_name ON employees(employee_id, first_name);
  ```

#### Function-Based Index

- **Description**: Similar to expression indexes, but focuses on the results of database functions.
- **Use Case**: Optimizes queries where a function is applied to a column.
- **Example**:
  ```sql
  CREATE INDEX idx_monthly_salary ON employees(salary * 12);
  ```

### How to Choose the Right Index

1. Use single-column indexes for simple equality or range queries.
2. Use composite indexes for queries involving multiple columns.
3. Use partial indexes for queries on a subset of rows.
4. Use full-text indexes for large text searches.
5. Avoid indexing columns with low cardinality unless necessary.
6. Regularly monitor and maintain indexes to prevent fragmentation.

## How to Add Indexes (PostgreSQL)

**Basic Syntax**:

```sql
CREATE INDEX index_name ON table_name(column_name);
```

**Examples**:

1. **Single-Column Index**:

   ```sql
   CREATE INDEX idx_employee_id ON employees(employee_id);
   ```

   This index speeds up queries filtering by `employee_id`.

2. **Composite Index**:

   ```sql
   CREATE INDEX idx_name_dept ON employees(last_name, department_id);
   ```

   Useful for queries filtering on both `last_name` and `department_id`.

3. **Unique Index**:

   ```sql
   CREATE UNIQUE INDEX idx_unique_email ON employees(email);
   ```

   Ensures that no duplicate emails exist in the `employees` table.

4. **Partial Index**:

   ```sql
   CREATE INDEX idx_active_employees ON employees(employee_id) WHERE status = 'active';
   ```

   Only indexes rows where `status` is 'active', saving space and improving performance for specific queries.

5. **Full-Text Index**:

   ```sql
   CREATE INDEX idx_fulltext_description ON products USING gin(to_tsvector('english', description));
   ```

   Optimizes full-text search on the `description` column.

6. **Hash Index**:
   ```sql
   CREATE INDEX idx_hash_username ON users USING hash(username);
   ```
   Useful for equality comparisons but not for range queries.

## Types of Index Scans in PostgreSQL

When a query is executed, the database query planner decides how to use the indexes and scans the data. The most common types of scans are:

### Sequential Scan (Seq Scan)

- The database reads every row of the table sequentially.
- Used when no relevant index exists or for very small tables.
- **Example**:
  ```sql
  EXPLAIN SELECT * FROM employees WHERE department_id = 10;
  ```
  If no index exists on `department_id`, a sequential scan is performed.

### Index Scan

- The database uses an index to directly find the rows that satisfy the query.
- It retrieves rows from the index and accesses the table for additional data.
- **Example**:
  ```sql
  EXPLAIN SELECT * FROM employees WHERE employee_id = 123;
  ```
  If an index exists on `employee_id`, an index scan is performed.

### Bitmap Index Scan

- Combines results from multiple indexes and retrieves rows in batches for efficiency.
- Used when multiple conditions in a query reference different indexes.
- **Example**:
  ```sql
  EXPLAIN SELECT * FROM employees WHERE department_id = 10 AND last_name = 'Smith';
  ```
  If indexes exist on both `department_id` and `last_name`, a bitmap index scan may be used.

### Table Scan (Heap Scan)

- Occurs when the database reads the data from the table directly without using any index.
- This happens when retrieving all rows or when the query planner determines it is more efficient than using an index.

### Index Only Scan

- The database retrieves all the required data directly from the index, without accessing the table.
- This is possible when the index contains all the columns referenced in the query.

## Advantages of Indexes

1. **Improved Query Performance**:

   - Significantly speeds up queries, especially those with `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY`.

2. **Efficient Sorting and Filtering**:

   - Optimizes operations involving sorting and filtering of data.

3. **Reduced Query Execution Time**:

   - For large datasets, indexes eliminate the need for full table scans.

4. **Support for Constraints**:
   - Automatically created for `PRIMARY KEY` and `UNIQUE` constraints to enforce data integrity.

## Disadvantages of Indexes

1. **Storage Overhead**:

   - Indexes require additional disk space, which can be substantial for large tables.

2. **Slower Write Operations**:

   - Insert, update, and delete operations become slower because the indexes must be updated along with the table.

3. **Index Maintenance**:

   - Indexes need to be maintained and rebuilt periodically, especially for heavily updated tables.

4. **Over-Indexing**:
   - Creating too many indexes can lead to high storage and maintenance costs.

## How to View Index Usage (PostgreSQL)

PostgreSQL provides tools to analyze whether indexes are being used by queries. Use the `EXPLAIN` or `EXPLAIN ANALYZE` command to inspect query execution plans.

**Example**:

```sql
EXPLAIN ANALYZE SELECT * FROM employees WHERE employee_id = 123;
```

If an index exists on `employee_id`, the output will show whether the query uses an **Index Scan**, **Bitmap Index Scan**, or **Seq Scan**.

## Maintaining Indexes

1. **Rebuilding Indexes**:

   - Over time, indexes can become fragmented, reducing performance. Use `REINDEX` to rebuild them.
   - Example:
     ```sql
     REINDEX INDEX idx_employee_id;
     ```

2. **Dropping Unused Indexes**:
   - Unused indexes consume space and slow down write operations.
   - Example:
     ```sql
     DROP INDEX idx_employee_id;
     ```
