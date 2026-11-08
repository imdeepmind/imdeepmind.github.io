---
sidebar_position: 8
---

# Partitioning

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Database partitioning is a technique used to divide a large table into smaller, more manageable pieces called **partitions**. Each partition stores a subset of the table's data based on a partitioning strategy, while the database exposes the partitions through a single logical parent table.

Partitioning helps improve query performance, data management, and maintenance, particularly when working with large datasets. It allows databases to eliminate irrelevant partitions during query execution, manage historical data efficiently, and perform maintenance operations on smaller portions of a table.

PostgreSQL supports declarative partitioning through three primary strategies: Range, List, and Hash partitioning.

## Why Use Database Partitioning?

1. **Improved Query Performance**:

   - Partitioning can improve query performance by allowing the database to access only the relevant partitions instead of scanning the entire table.
   - PostgreSQL uses a technique called partition pruning to eliminate partitions that cannot contain the requested data.

2. **Efficient Data Management**:

   - Managing smaller partitions can be easier than managing a single extremely large table.
   - Historical data can be archived or removed by detaching or dropping individual partitions instead of deleting millions of rows.

3. **Scalability**:

   - Partitioning helps organize large datasets as they grow over time.
   - It allows database maintenance and data lifecycle operations to be performed on individual partitions.
   - However, PostgreSQL partitioning does not automatically distribute data across multiple database servers.

4. **Data Locality**:

   - Related data can be grouped into partitions based on attributes such as dates, regions, or customer identifiers.
   - Queries that filter using the partition key can benefit from partition pruning.

5. **Improved Maintenance**:

   - Maintenance operations such as `VACUUM`, `ANALYZE`, and `REINDEX` can be performed on individual partitions.
   - Old partitions can be detached, archived, or dropped without deleting individual rows.
   - Smaller partitions can make certain maintenance operations easier to manage.

## Types of Database Partitioning

### Range Partitioning

- Divides data based on a range of values in a column, such as dates, timestamps, or numeric identifiers.
- Each partition is responsible for a specific range of values.
- Range boundaries use inclusive lower bounds and exclusive upper bounds.

Example:

```sql
CREATE TABLE sales (
    id SERIAL,
    sale_date DATE,
    amount NUMERIC
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2022
PARTITION OF sales
FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');

CREATE TABLE sales_2023
PARTITION OF sales
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
```

In this example, `sales_2022` stores records from January 1, 2022, up to but excluding January 1, 2023. Similarly, `sales_2023` stores records for the year 2023.

Range partitioning is commonly used for time-series data, logs, transactions, and other datasets where queries frequently filter by date or numeric ranges.

### List Partitioning

- Divides data based on a predefined list of values in a column.
- Each partition stores rows matching one or more specified values.
- Useful when data naturally belongs to a fixed set of categories.

Example:

```sql
CREATE TABLE employees (
    id SERIAL,
    department TEXT,
    name TEXT
) PARTITION BY LIST (department);

CREATE TABLE employees_sales
PARTITION OF employees
FOR VALUES IN ('Sales');

CREATE TABLE employees_hr
PARTITION OF employees
FOR VALUES IN ('HR');
```

In this example, employees belonging to the Sales department are stored in `employees_sales`, while employees belonging to HR are stored in `employees_hr`.

### Hash Partitioning

- Distributes data across partitions using a hash function applied to the partition key.
- PostgreSQL calculates a hash value and uses it to determine the destination partition.
- Useful when data needs to be distributed relatively evenly across partitions without relying on a range or predefined list of values.

Example:

```sql
CREATE TABLE orders (
    id SERIAL,
    customer_id INT,
    amount NUMERIC
) PARTITION BY HASH (customer_id);

CREATE TABLE orders_p1
PARTITION OF orders
FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE orders_p2
PARTITION OF orders
FOR VALUES WITH (MODULUS 4, REMAINDER 1);

CREATE TABLE orders_p3
PARTITION OF orders
FOR VALUES WITH (MODULUS 4, REMAINDER 2);

CREATE TABLE orders_p4
PARTITION OF orders
FOR VALUES WITH (MODULUS 4, REMAINDER 3);
```

Here, `MODULUS 4` indicates that the table is divided into four hash partitions. The `REMAINDER` identifies which hash results belong to each partition.

### Composite Partitioning

- Combines multiple partitioning strategies to organize data using more than one partitioning key.
- In PostgreSQL, this is implemented using multi-level partitioning, where individual partitions can themselves be partitioned using another strategy.
- Useful when a single partitioning strategy is insufficient for managing large datasets.

Example:

```sql
CREATE TABLE metrics (
    id SERIAL,
    metric_date DATE,
    region TEXT,
    value NUMERIC
) PARTITION BY RANGE (metric_date);

CREATE TABLE metrics_2023
PARTITION OF metrics
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01')
PARTITION BY LIST (region);

CREATE TABLE metrics_2023_us
PARTITION OF metrics_2023
FOR VALUES IN ('US');

CREATE TABLE metrics_2023_eu
PARTITION OF metrics_2023
FOR VALUES IN ('EU');
```

In this example:

- The top-level table partitions data by date range.
- Each yearly partition is further divided by region.
- The resulting leaf partitions contain data for a specific year and region.

### Sub-Partitioning

- Sub-partitioning is the process of further dividing an existing partition into smaller partitions.
- It is implemented through multi-level partitioning.
- Each partition level can use a different partitioning strategy.

For example, a large events table can first be partitioned by year using Range partitioning and then each yearly partition can be divided by region using List partitioning.

Sub-partitioning is useful when datasets are extremely large and queries frequently filter using multiple partitioning dimensions. However, excessive partitioning can increase planning overhead and maintenance complexity.

## How Partitioning Works in PostgreSQL

### Partition Table Creation

- The parent table is defined with a partitioning key and a partitioning strategy.
- Child tables, called partitions, inherit the column definitions and constraints from the parent table.
- Each partition stores only the rows that satisfy its partition boundaries.
- Applications can query or insert data through the parent table without explicitly identifying individual partitions.

Example:

```sql
CREATE TABLE sales (
    id SERIAL,
    sale_date DATE,
    amount NUMERIC
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2023
PARTITION OF sales
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE sales_2024
PARTITION OF sales
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

When data is inserted into the parent table, PostgreSQL automatically routes each row to the appropriate partition based on its partition key.

### Partition Pruning

- Partition pruning is an optimization technique where PostgreSQL eliminates partitions that cannot contain the rows required by a query.
- Instead of scanning every partition, PostgreSQL accesses only the relevant partitions based on the partition key and query conditions.
- Partition pruning can happen during query planning or during query execution, depending on when the partition constraints become known.

Example:

```sql
SELECT *
FROM sales
WHERE sale_date >= '2023-01-01'
AND sale_date < '2024-01-01';
```

In this example, PostgreSQL can eliminate `sales_2024` and access only `sales_2023`.

Partition pruning is most effective when queries explicitly filter using the partition key.

### Indexes on Partitions

- PostgreSQL supports indexes on individual partitions as well as partitioned indexes defined on the parent table.
- Creating an index on a partitioned parent table creates a partitioned index whose corresponding indexes are maintained on the individual partitions.
- Queries can use these indexes after PostgreSQL identifies the relevant partitions.
- Indexes should be designed based on the actual query patterns within each partition.

Example:

```sql
CREATE INDEX idx_sales_sale_date
ON sales(sale_date);
```

This creates a partitioned index on the parent table, with corresponding indexes on its partitions.

Indexes can also be created directly on individual partitions when different partitions require different indexing strategies.

Partitioning and indexing solve different problems:

- Partitioning reduces the amount of table data that needs to be considered.
- Indexing helps locate specific rows efficiently within the relevant data.

### Constraints

- Partitions have constraints that define which values they can contain.
- PostgreSQL automatically enforces partition boundaries when inserting rows through the parent table.
- Range and List partitioning use their respective partition bounds to determine which partition can contain a row.
- Primary keys and unique constraints on a partitioned table have an important restriction: they must include all columns used in the partition key.

For example, consider a sales table partitioned by `sale_date`. A unique constraint on `id` alone cannot be created on the parent table unless the partition key is also included.

```sql
CREATE TABLE sales (
    id BIGINT,
    sale_date DATE,
    amount NUMERIC,
    PRIMARY KEY (id, sale_date)
) PARTITION BY RANGE (sale_date);
```

This restriction exists because PostgreSQL enforces unique constraints through the individual partitions and cannot guarantee global uniqueness of a column that is not part of the partition key.

### Default Partitions

- A default partition stores rows that do not match any explicitly defined partition.
- It is useful when new partition values may appear before the corresponding partitions have been created.
- Only one default partition can exist for a given partitioned table.

Example:

```sql
CREATE TABLE sales (
    id SERIAL,
    sale_date DATE,
    amount NUMERIC
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2023
PARTITION OF sales
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE sales_default
PARTITION OF sales DEFAULT;
```

In this example, rows that do not fall within the `sales_2023` range are routed to `sales_default`.

Default partitions require additional maintenance when new partitions are introduced because their existing rows may overlap with the new partition's boundaries.

## Partition Maintenance

Partition maintenance involves creating, attaching, detaching, and removing partitions as the dataset grows or its retention requirements change.

### Creating New Partitions

- New partitions must be created when incoming data falls outside the ranges or values covered by existing partitions.
- For time-series datasets, partitions are commonly created in advance to avoid insertion failures when a new period begins.

Example:

```sql
CREATE TABLE sales_2025
PARTITION OF sales
FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
```

### Attaching Existing Tables as Partitions

- PostgreSQL allows an existing table to be attached as a partition of a partitioned table.
- This is useful when migrating existing data into a partitioned structure or preparing partitions independently.

Example:

```sql
CREATE TABLE sales_2026 (
    id BIGINT,
    sale_date DATE,
    amount NUMERIC
);

ALTER TABLE sales
ATTACH PARTITION sales_2026
FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');
```

The existing table must satisfy the partition's schema and partition-bound requirements. PostgreSQL may scan the table to validate its contents unless a suitable validated constraint already proves that all rows satisfy the partition bounds.

### Detaching Partitions

- A partition can be detached from its parent table while remaining available as a standalone table.
- This is useful when archiving old data or moving it to a separate storage location.
- PostgreSQL supports regular detachment and concurrent detachment, with different locking and transaction requirements.

Example:

```sql
ALTER TABLE sales
DETACH PARTITION sales_2023;
```

After detachment, `sales_2023` becomes an independent table and is no longer accessible through queries against the `sales` parent table.

### Dropping Old Partitions

- Old partitions can be dropped when the data is no longer required.
- Dropping a partition is generally much more efficient than deleting millions of individual rows because it removes the entire table rather than processing each row separately.
- This is particularly useful for time-series data and retention policies.

Example:

```sql
DROP TABLE sales_2023;
```

Alternatively, a partition can be detached first if the data needs to be archived before deletion.

## Query Optimization with Partitioning

### Partition-Wise Joins

- Partition-wise joins allow PostgreSQL to join corresponding partitions independently instead of joining the entire partitioned tables as a single operation.
- This can reduce the amount of data processed by individual join operations.
- It is particularly useful when both tables are partitioned compatibly using the same partition key and corresponding partition boundaries.
- PostgreSQL can use partition-wise joins when the relevant planner setting is enabled and the query satisfies the necessary conditions.

Example:

```sql
CREATE TABLE orders (
    id BIGINT,
    order_date DATE,
    customer_id BIGINT
) PARTITION BY RANGE (order_date);

CREATE TABLE payments (
    id BIGINT,
    payment_date DATE,
    order_id BIGINT
) PARTITION BY RANGE (payment_date);
```

If both tables use compatible date-based partition boundaries and the join condition aligns their partitioning keys, PostgreSQL may be able to perform partition-wise joins.

```sql
SET enable_partitionwise_join = on;
```

Partition-wise joins can improve performance by allowing smaller corresponding partitions to be processed independently.

### Partition-Wise Aggregation

- Partition-wise aggregation allows PostgreSQL to perform aggregation operations separately within individual partitions before combining the partial results.
- This can reduce the amount of data that needs to be processed together during aggregation.
- It is useful for analytical queries involving large partitioned tables.
- PostgreSQL supports this optimization through the `enable_partitionwise_aggregate` planner setting.

Example:

```sql
SET enable_partitionwise_aggregate = on;

SELECT sale_date, SUM(amount)
FROM sales
GROUP BY sale_date;
```

The effectiveness of partition-wise aggregation depends on the partitioning strategy, grouping columns, and query execution plan.

### Parallel Execution

- PostgreSQL can execute certain queries using multiple parallel workers.
- Queries involving partitioned tables may benefit from parallel execution when the query plan and available resources allow it.
- Parallel scans and other parallel plan operations can reduce execution time by distributing work across multiple workers.
- However, partitioning does not automatically guarantee parallel execution.

Parallel execution depends on factors such as table size, query complexity, available workers, and PostgreSQL's cost estimates.

## Partitioning Use Cases

1. **Time-Series Data**:

   - Logs, events, metrics, and transactions stored by date or time range.
   - Example: A logging table partitioned by month or year.
   - Old partitions can be removed according to data retention policies.

2. **Archiving**:

   - Older data can be stored in separate partitions for easier archiving.
   - Partitions can be detached and moved to separate storage or retained as standalone tables.

3. **Geographic Data**:

   - Data can be divided by geographic regions when queries frequently filter by region.
   - Example: Customer or transaction data partitioned by country or region.

4. **Large Tables with Frequent Queries**:

   - Partitioning can help manage tables containing millions or billions of rows.
   - Queries filtering on the partition key can benefit from partition pruning.
   - The actual performance improvement depends on the query patterns and partitioning strategy.

5. **Data Retention and Cleanup**:

   - Applications that retain data for a limited period can use partitions to simplify cleanup operations.
   - Instead of deleting individual expired records, entire partitions can be dropped.

## Advantages of Partitioning

1. **Improved Query Performance**:

   - Partition pruning ensures that irrelevant partitions can be eliminated when queries filter on the partition key.
   - This can reduce the amount of data scanned and processed.

2. **Easier Data Management**:

   - Individual partitions can be archived, detached, or dropped without deleting records one by one.
   - This simplifies managing historical data and retention policies.

3. **Better Maintenance**:

   - Maintenance operations can be performed on individual partitions.
   - Smaller partitions can make vacuuming, indexing, and statistics management easier to organize.

4. **Supports Parallelism**:

   - PostgreSQL can execute eligible operations using parallel workers.
   - Partitioned tables can participate in parallel query execution when the planner determines that it is beneficial.

5. **Improved Data Organization**:

   - Data can be logically organized by time, region, category, or other partitioning keys.
   - This makes large datasets easier to manage and maintain.

## Disadvantages of Partitioning

1. **Increased Complexity**:

   - Requires careful planning to select partitioning keys and define partition boundaries.
   - Applications may need automated partition creation and maintenance.
   - Managing many partitions can increase operational complexity.

2. **Storage and Metadata Overhead**:

   - Each partition is a separate table with its own metadata and potentially its own indexes.
   - A large number of partitions can increase planning overhead and memory consumption.

3. **Partition Key Limitation**:

   - Queries that do not filter using the partition key may need to scan multiple or all partitions.
   - Partitioning provides limited query performance benefits when queries cannot take advantage of partition pruning.

4. **Unique Constraint Limitations**:

   - PostgreSQL requires primary keys and unique constraints defined on a partitioned table to include all partition key columns.
   - This can affect schema design when global uniqueness is required for a column that is not part of the partition key.

5. **Not a Replacement for Indexing**:

   - Partitioning does not eliminate the need for indexes.
   - Queries may still require indexes within individual partitions to efficiently locate rows.

## Querying Partitioned Tables in PostgreSQL

1. **Insert Data**:

   - Data inserted into the parent table is automatically routed to the appropriate partition based on the partition key.
   - If no matching partition or default partition exists, PostgreSQL rejects the insertion.

   ```sql
   INSERT INTO sales (sale_date, amount)
   VALUES ('2023-05-01', 500);
   ```

2. **Query with Partition Pruning**:

   - Queries filtering on the partition key can eliminate irrelevant partitions.
   - This allows PostgreSQL to access only the partitions that may contain matching rows.

   ```sql
   SELECT *
   FROM sales
   WHERE sale_date >= '2023-01-01'
   AND sale_date < '2023-02-01';
   ```

3. **Manual Partition Targeting**:

   - Individual partitions can be queried directly when a specific partition is known.
   - This bypasses the need to query through the parent table.

   ```sql
   SELECT *
   FROM sales_2023
   WHERE amount > 1000;
   ```

   Directly querying a partition can be useful for maintenance or specialized operations, but applications should generally query the parent table to avoid coupling application logic to individual partition names.

## Partitioning vs Sharding

| **Aspect**        | **Partitioning**                                                                              | **Sharding**                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Definition**    | Divides a large table into smaller partitions.                                                | Distributes data across multiple databases or servers.                                                |
| **Use Case**      | Improving data organization, query performance, and maintenance within a database.            | Horizontal scaling across multiple database nodes.                                                    |
| **Data Location** | Partitions are managed within the same PostgreSQL database and instance in a typical setup.   | Data is distributed across multiple database instances or servers.                                    |
| **Data Routing**  | PostgreSQL automatically routes rows to partitions based on the partition key.                | Applications or a distributed database system determine which shard contains the required data.       |
| **Complexity**    | Generally easier to manage because PostgreSQL handles partition routing and query execution.  | More complex because it involves distributed data management, routing, consistency, and coordination. |
| **Scaling**       | Primarily improves the management and performance of large tables within a database instance. | Allows data and workload to be distributed across multiple servers to increase capacity.              |

Partitioning and sharding solve related but different problems. Partitioning organizes data within a database, while sharding distributes data across multiple database nodes. A system can also use both techniques together when its scale and workload require them.
