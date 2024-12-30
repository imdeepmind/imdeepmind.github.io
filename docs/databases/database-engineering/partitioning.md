---
sidebar_position: 8
---

# Partitioning

Database partitioning is a technique used to divide a large table or database into smaller, more manageable pieces, called **partitions**. It helps improve performance, manageability, and scalability of the database system by reducing the amount of data a query must process and allowing for efficient data access patterns.

## Why Use Database Partitioning?

1. **Improved Query Performance**:

   - By dividing the table into smaller partitions, queries can target only the relevant subset of data, reducing query execution time.

2. **Efficient Data Management**:

   - Easier to manage smaller partitions than a single large table, especially for maintenance tasks like backups or archiving.

3. **Scalability**:

   - Allows horizontal scaling by spreading data across multiple partitions or servers.

4. **Data Locality**:

   - Queries can benefit from partition pruning (only accessing relevant partitions) and parallel execution.

5. **Improved Maintenance**:
   - Maintenance tasks (e.g., VACUUM, ANALYZE, REINDEX) can be performed on individual partitions rather than the entire table.

## Types of Database Partitioning

### Range Partitioning

- Divides data based on a range of values in a column (e.g., date, number).
- Example:

  ```sql
  CREATE TABLE sales (
      id SERIAL,
      sale_date DATE,
      amount NUMERIC
  ) PARTITION BY RANGE (sale_date);

  CREATE TABLE sales_2023 PARTITION OF sales FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
  CREATE TABLE sales_2022 PARTITION OF sales FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');
  ```

### List Partitioning

- Divides data based on a predefined list of values in a column.
- Example:

  ```sql
  CREATE TABLE employees (
      id SERIAL,
      department TEXT,
      name TEXT
  ) PARTITION BY LIST (department);

  CREATE TABLE employees_sales PARTITION OF employees FOR VALUES IN ('Sales');
  CREATE TABLE employees_hr PARTITION OF employees FOR VALUES IN ('HR');
  ```

### Hash Partitioning

- Data is distributed using a hash function on the column value, typically for even distribution across partitions.
- Example:

  ```sql
  CREATE TABLE orders (
      id SERIAL,
      customer_id INT,
      amount NUMERIC
  ) PARTITION BY HASH (customer_id);

  CREATE TABLE orders_p1 PARTITION OF orders FOR VALUES WITH (MODULUS 4, REMAINDER 0);
  CREATE TABLE orders_p2 PARTITION OF orders FOR VALUES WITH (MODULUS 4, REMAINDER 1);
  ```

### Composite Partitioning

- Combines two or more partitioning strategies (e.g., range + hash).
- Example:
  ```sql
  CREATE TABLE metrics (
      id SERIAL,
      metric_date DATE,
      region TEXT
  ) PARTITION BY RANGE (metric_date) SUBPARTITION BY LIST (region);
  ```

### Sub-Partitioning

- Further divides individual partitions into subpartitions.

## How Partitioning Works in PostgreSQL

### Partition Table Creation

- The parent table is defined with a partitioning key.
- Child tables (partitions) inherit the schema from the parent and store subsets of the data.

### Partition Pruning

- PostgreSQL optimizes queries by accessing only the relevant partitions based on the partition key.

Example:

```sql
SELECT * FROM sales WHERE sale_date BETWEEN '2023-01-01' AND '2023-12-31';
```

- The query will scan only the `sales_2023` partition.

### Indexes on Partitions

- Indexes can be created individually on each partition for faster lookups.

### Constraints

- Partitions can have constraints to enforce data integrity and prevent overlapping ranges or lists.

## Partitioning Use Cases

1. **Time-Series Data**:

   - Logs, events, or metrics data stored by date or time range.
   - Example: A log table partitioned by month.

2. **Archiving**:

   - Older data can be stored in separate partitions for easier management and archiving.

3. **Geographic Data**:

   - Data divided by geographic regions for better data locality.

4. **Large Tables with Frequent Queries**:
   - Partitioning helps reduce query execution time for tables with millions or billions of rows.

## Advantages of Partitioning

1. **Improved Query Performance**:

   - Partition pruning ensures only relevant partitions are scanned, reducing I/O overhead.

2. **Easier Data Management**:

   - Individual partitions can be archived, backed up, or dropped without affecting the entire table.

3. **Better Maintenance**:

   - Maintenance tasks can be done at the partition level, reducing locking and downtime.

4. **Supports Parallelism**:
   - Queries can execute in parallel across partitions for faster results.

## Disadvantages of Partitioning

1. **Increased Complexity**:

   - Requires careful planning to define partitioning strategy and maintain partitions.

2. **Storage Overhead**:

   - Each partition may have its own metadata and indexes, increasing storage requirements.

3. **Partition Key Limitation**:
   - Queries that don’t use the partition key may scan all partitions, negating the benefits.

## Querying Partitioned Tables in PostgreSQL

1. **Insert Data**:

   - Data is automatically routed to the appropriate partition based on the partition key.

   ```sql
   INSERT INTO sales (sale_date, amount) VALUES ('2023-05-01', 500);
   ```

2. **Query with Partition Pruning**:

   - Queries with filters on the partition key will scan only relevant partitions.

   ```sql
   SELECT * FROM sales WHERE sale_date >= '2023-01-01' AND sale_date < '2023-02-01';
   ```

3. **Manual Partition Targeting**:
   - You can directly query a specific partition if needed.
   ```sql
   SELECT * FROM sales_2023 WHERE amount > 1000;
   ```

## Partitioning vs Sharding

| **Aspect**        | **Partitioning**                             | **Sharding**                                          |
| ----------------- | -------------------------------------------- | ----------------------------------------------------- |
| **Definition**    | Divides data within a single database.       | Divides data across multiple databases/servers.       |
| **Use Case**      | Optimizing queries within a single database. | Horizontal scaling for large-scale systems.           |
| **Data Location** | All partitions reside in the same database.  | Data is distributed across multiple nodes.            |
| **Complexity**    | Less complex to set up and manage.           | More complex, requires distributed system management. |
