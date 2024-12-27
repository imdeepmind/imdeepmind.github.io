---
sidebar_position: 9
---

# Database Sharding

Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases or nodes, often referred to as **shards**. Each shard contains a subset of the total data, making the overall system more scalable and resilient. It is particularly useful for handling very large datasets and high-throughput applications.

## Why Sharding is Needed?

1. **Scalability**:

   - Single database systems have limitations in terms of storage capacity and throughput. Sharding allows for horizontal scaling by distributing data across multiple nodes.

2. **Performance**:

   - Queries can be processed in parallel on multiple shards, reducing response times for large datasets.

3. **High Availability**:

   - In case of a failure on one shard, the others can continue to operate, improving overall system availability.

4. **Data Isolation**:
   - Data can be logically separated based on application needs, making it easier to manage and query specific subsets.

## How Sharding Works

In sharding, data is distributed across shards based on a **shard key**. The shard key determines how the data is split and placed into shards.

### Steps in Sharding

1. **Select Shard Key**:

   - A column or a combination of columns is chosen as the shard key. The key must provide even distribution of data across shards.

   Example: `user_id`, `region`, or `order_id`.

2. **Distribute Data**:

   - Data is distributed across shards based on a mapping function. Common methods include range-based, hash-based, or directory-based sharding.

3. **Query Routing**:
   - A query router is used to route queries to the correct shard(s) based on the shard key.

## Sharding Strategies

### Range-Based Sharding

- Data is divided into shards based on value ranges of the shard key.
- Example: User data partitioned by age range or time range.

Example:

- Shard 1: Users with `user_id` between 1 and 1,000,000.
- Shard 2: Users with `user_id` between 1,000,001 and 2,000,000.

**Pros**:

- Easy to implement and understand.
- Good for queries targeting specific ranges.

**Cons**:

- Risk of uneven data distribution if data growth is not uniform (hotspots).

### Hash-Based Sharding

- A hash function is applied to the shard key to determine the shard for each row of data.
- Example:
  ```python
  shard_number = hash(user_id) % total_shards
  ```

**Pros**:

- Ensures even distribution of data across shards.
- Avoids data hotspots.

**Cons**:

- Difficult to perform range queries.
- Adding or removing shards requires rehashing (data migration).

### Directory-Based Sharding

- A lookup table is maintained to map shard keys to specific shards.
- Example:
  - Shard 1: Data for `region = 'US'`
  - Shard 2: Data for `region = 'EU'`

**Pros**:

- Flexible and customizable.
- Good for specific use cases with pre-defined keys.

**Cons**:

- The lookup table can become a bottleneck.
- Maintenance overhead.

## Advantages of Sharding

1. **Horizontal Scalability**:

   - Sharding allows for the addition of new nodes to handle increased data volumes or throughput.

2. **Parallel Query Processing**:

   - Queries are processed in parallel across shards, reducing query execution time.

3. **Fault Tolerance**:

   - If one shard goes down, the other shards can continue to serve requests.

4. **Data Locality**:

   - Shards can be located geographically close to the users they serve, reducing latency.

5. **Cost Efficiency**:
   - Instead of scaling vertically (e.g., adding expensive hardware), horizontal scaling with commodity servers reduces cost.

## Disadvantages of Sharding

1. **Complexity**:

   - Sharding increases system complexity. Query routing, data distribution, and maintenance require additional effort.

2. **Data Rebalancing**:

   - Adding or removing shards involves redistributing data, which can be costly and time-consuming.

3. **Cross-Shard Queries**:

   - Queries that span multiple shards can be slow and require additional logic for merging results.

4. **Consistency**:

   - Maintaining strong consistency across shards is difficult, especially in distributed systems.

5. **Operational Overhead**:
   - Monitoring, backup, and recovery of multiple shards is more complex than a single database.

## Sharding vs Partitioning

| **Aspect**        | **Sharding**                                | **Partitioning**                     |
| ----------------- | ------------------------------------------- | ------------------------------------ |
| **Scope**         | Data split across multiple databases/nodes. | Data split within a single database. |
| **Use Case**      | Large-scale horizontal scaling.             | Optimizing queries and maintenance.  |
| **Query Routing** | Requires a query router.                    | Queries are handled by the database. |
| **Complexity**    | Higher due to distributed nature.           | Lower as it resides in one database. |

## Sharding vs Replication

| **Aspect**            | **Sharding**                           | **Replication**                    |
| --------------------- | -------------------------------------- | ---------------------------------- |
| **Data Distribution** | Different data stored on each shard.   | Same data replicated across nodes. |
| **Purpose**           | Horizontal scaling for large datasets. | High availability and redundancy.  |
| **Query Routing**     | Queries routed to specific shards.     | Queries served by any replica.     |

## Use Cases of Sharding

1. **Large-Scale Applications**:

   - Social media platforms with millions of users (e.g., Twitter, Facebook).

2. **Time-Series Data**:

   - IoT or log data where new data grows indefinitely.

3. **Geographic Distribution**:

   - Applications with users spread across different regions.

4. **High-Write Workloads**:
   - Applications with heavy insert/update operations (e.g., e-commerce platforms).

## Sharding in Practice

1. **MongoDB**:

   - Native support for sharding with automatic query routing.
   - Sharding based on shard keys.

2. **MySQL**:

   - Requires external tools (e.g., Vitess) or custom logic for sharding.

3. **PostgreSQL**:
   - Uses partitioning or external tools like Citus for sharding.
