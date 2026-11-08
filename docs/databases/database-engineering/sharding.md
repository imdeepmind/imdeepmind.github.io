---
sidebar_position: 9
---

# Sharding

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases or nodes, often referred to as **shards**. Each shard contains a subset of the total data, and collectively, all shards represent the complete dataset. Unlike traditional partitioning, where data is divided within a single database, sharding distributes data across multiple database instances or machines.

Sharding is particularly useful for handling very large datasets and high-throughput applications that have outgrown the storage capacity or processing capabilities of a single database server. By distributing data and workloads across multiple nodes, applications can scale horizontally rather than relying entirely on more powerful hardware.

## Why Sharding is Needed?

1. **Scalability**:

   - Single database systems have limitations in terms of storage capacity, memory, CPU, and throughput. Sharding allows horizontal scaling by distributing data and workloads across multiple database nodes.
   - Additional shards can be introduced as the application's data volume and traffic increase, subject to the database's rebalancing and scaling capabilities.

2. **Performance**:

   - Queries targeting specific shards can process smaller subsets of the overall dataset, reducing the amount of data each database node needs to handle.
   - Queries involving multiple shards can potentially execute in parallel, although network communication and result-merging overhead may affect the overall performance.

3. **Workload Distribution**:

   - Reads and writes can be distributed across multiple database nodes instead of placing the entire workload on a single server.
   - Proper shard-key selection helps distribute workloads evenly and prevents individual shards from becoming performance bottlenecks.

4. **Data Isolation**:
   - Data can be logically separated based on application requirements, such as users, regions, or tenants.
   - This can simplify data management and allow certain operations to target specific subsets of the overall dataset.

## How Sharding Works

In sharding, data is distributed across multiple database nodes based on a **shard key**. The shard key determines how records are assigned to individual shards and plays an important role in query routing, data distribution, and workload balancing.

### Steps in Sharding

1. **Select Shard Key**:

   - A column or a combination of columns is chosen as the shard key. The shard key should provide reasonably even data distribution and align with the application's query patterns.
   - Common examples include `user_id`, `tenant_id`, `region`, or `order_id`.

   A good shard key should consider:
   - **Cardinality:** The key should have enough distinct values to distribute records across multiple shards.
   - **Data Distribution:** Values should be distributed relatively evenly to avoid some shards storing significantly more data than others.
   - **Query Patterns:** Frequently executed queries should ideally include the shard key so that they can be routed to specific shards.
   - **Write Distribution:** The key should avoid concentrating writes on a single shard.
   - **Stability:** Frequently changing shard-key values can require moving records between shards, increasing operational complexity.

2. **Distribute Data**:

   - Data is distributed across shards using a mapping function that determines where each record should be stored.
   - Common methods include range-based, hash-based, and directory-based sharding.
   - The distribution strategy affects how evenly data is distributed and how efficiently queries can locate records.

3. **Query Routing**:

   - A query router or routing layer determines which shard should receive a query based on the shard key.
   - Queries containing the shard key can often be directed to a specific shard, avoiding unnecessary communication with other nodes.
   - Queries without the shard key may need to be sent to multiple shards, after which their results are collected and merged.

## Sharding Strategies

### Range-Based Sharding

- Data is divided into shards based on value ranges of the shard key.
- Each shard is responsible for a specific range of values.
- Example: User data partitioned by `user_id` ranges.

Example:

- Shard 1: Users with `user_id` between 1 and 1,000,000.
- Shard 2: Users with `user_id` between 1,000,001 and 2,000,000.

**Pros**:

- Easy to implement and understand.
- Good for queries targeting specific ranges because the database can identify which shard contains the requested data.
- Useful when application queries frequently retrieve records within a particular range.

**Cons**:

- Risk of uneven data distribution if data growth is not uniform.
- Can create hotspots when certain ranges receive significantly more traffic than others.
- Monotonically increasing keys, such as timestamps or auto-incrementing IDs, can concentrate new writes on the shard responsible for the latest range.

### Hash-Based Sharding

- A hash function is applied to the shard key to determine the shard for each row of data.
- The hash function distributes records across shards based on the resulting hash value.
- Example:

  ```python
  shard_number = stable_hash(user_id) % total_shards
  ```

**Pros**:

- Generally provides more even data distribution when the shard key has sufficient cardinality.
- Reduces the risk of hotspots caused by sequential or naturally ordered shard-key values.
- Does not depend on the original ordering of shard-key values.

**Cons**:

- Difficult to perform range queries because records with nearby shard-key values may be stored on different shards.
- Queries that do not include the shard key may require scanning multiple shards.
- Adding or removing shards can require significant data redistribution when using modulo-based hashing.

**Consistent Hashing**:

- Consistent hashing is a technique used to reduce the amount of data that needs to be redistributed when shards are added or removed.
- Instead of directly mapping hash values to a fixed number of shards, both shard keys and shards are mapped onto a logical hash space.
- When a shard is added or removed, only a portion of the existing keys need to be reassigned rather than redistributing the entire dataset.
- Some implementations use virtual shards or virtual nodes to improve load distribution and make rebalancing easier.

### Directory-Based Sharding

- A lookup table or directory is maintained to map shard keys to specific shards.
- Instead of calculating the shard directly from the key, the routing layer consults the directory to determine where the record is stored.
- Example:
  - Shard 1: Data for `region = 'US'`
  - Shard 2: Data for `region = 'EU'`
  - Shard 3: Data for `region = 'APAC'`

**Pros**:

- Flexible and customizable because shard assignments can be changed without modifying the shard-key mapping function.
- Useful for applications that require predefined data placement, such as geographic or tenant-based separation.
- Supports more flexible distribution strategies than fixed range or hash mappings.

**Cons**:

- The lookup table can become a bottleneck if it receives a large number of requests.
- The directory itself needs to be highly available and scalable because routing depends on it.
- Maintaining accurate mappings during data migration and rebalancing introduces additional complexity.

## Advantages of Sharding

1. **Horizontal Scalability**:

   - Sharding allows the addition of new database nodes to handle increased data volumes and workloads.
   - Instead of continuously upgrading a single database server, storage and processing capacity can be expanded across multiple machines.

2. **Parallel Query Processing**:

   - Queries targeting multiple shards can potentially execute in parallel, allowing different database nodes to process their respective portions of the data.
   - This can reduce execution time for certain workloads, although coordination and result-merging overhead can affect performance.

3. **Workload Distribution**:

   - Reads and writes can be distributed across multiple database nodes, reducing the load on individual servers.
   - Proper shard-key selection helps prevent uneven workload distribution.

4. **Data Locality**:

   - Shards can be located geographically close to the users or applications they serve, reducing network latency for region-specific workloads.
   - This is particularly useful for applications operating across multiple geographic regions, although cross-region queries and coordination can introduce additional latency.

5. **Storage Capacity**:

   - The total storage capacity of a sharded database can grow by adding more database nodes.
   - Each node only needs to store a subset of the overall dataset.

6. **Cost Efficiency**:
   - Sharding can allow applications to scale using multiple moderately sized machines instead of relying entirely on expensive high-capacity servers.
   - However, additional infrastructure, networking, replication, and operational complexity can offset these savings.

## Disadvantages of Sharding

1. **Complexity**:

   - Sharding increases system complexity because data distribution, query routing, and database management need to account for multiple database nodes.
   - Application logic and infrastructure may need to handle shard discovery, routing, and failure scenarios.

2. **Data Rebalancing**:

   - Adding or removing shards may require redistributing existing data to maintain an even distribution.
   - This process can be expensive and time-consuming, especially when dealing with large datasets.

   **Rebalancing** involves redistributing data across existing shards to maintain balanced storage and workloads, while **resharding** involves changing the shard distribution or shard-key strategy, potentially requiring more substantial data movement.

3. **Cross-Shard Queries**:

   - Queries that span multiple shards can be slow because they may require communication with several database nodes.
   - The results from individual shards need to be collected, merged, and potentially sorted by the query router.
   - Queries without the shard key may require a scatter-gather operation, where the query is sent to multiple or all shards.

4. **Consistency**:

   - Maintaining consistency across multiple shards can be difficult, particularly when transactions involve records stored on different nodes.
   - Distributed transactions require coordination between database nodes, introducing additional latency and complexity.
   - Replication within individual shards can also introduce replication lag, depending on the replication architecture.

5. **Operational Overhead**:

   - Monitoring, backup, recovery, deployment, and maintenance of multiple database nodes are more complex than managing a single database instance.
   - Each shard needs appropriate resource monitoring and failure-handling mechanisms.

6. **Hotspots and Data Skew**:

   - Uneven data distribution can cause certain shards to store more records or receive significantly more traffic than others.
   - A shard receiving disproportionately high read or write traffic becomes a hotspot and can limit the performance of the entire system.
   - Even hash-based sharding cannot completely prevent hotspots when some shard-key values receive significantly more traffic than others.

7. **Application Complexity**:

   - Applications may need to understand shard-key mappings and route queries appropriately.
   - Operations such as joins, aggregations, unique constraints, and transactions become more complicated when related records are stored on different shards.

## Sharding vs Partitioning

| **Aspect**         | **Sharding**                                         | **Partitioning**                                             |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| **Scope**          | Data split across multiple databases/nodes.          | Data split within a single database.                         |
| **Use Case**       | Horizontal scaling across multiple nodes.            | Query optimization and data management.                      |
| **Query Routing**  | Requires routing to the appropriate shard or shards. | Typically handled internally by the database.                |
| **Complexity**     | Higher due to distributed architecture.              | Generally lower because data is managed within one database. |
| **Infrastructure** | Requires multiple database nodes or instances.       | Can operate within a single database instance.               |

## Sharding vs Replication

| **Aspect**            | **Sharding**                                                                                   | **Replication**                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Data Distribution** | Different subsets of data stored on each shard.                                                | Copies of the same data maintained across multiple nodes.                  |
| **Purpose**           | Horizontal scalability for large datasets and workloads.                                       | High availability, redundancy, and potentially read scalability.           |
| **Query Routing**     | Queries routed to the shard containing the required data.                                      | Reads may be routed to replicas depending on the replication architecture. |
| **Data Availability** | Failure of a shard can make its data unavailable unless replication or failover is configured. | Replicas can provide access to copied data when another node fails.        |
| **Consistency**       | Cross-shard operations may require distributed coordination.                                   | Replication lag can cause replicas to return stale data.                   |

**Sharding and replication are often used together rather than as competing approaches.**

For example, a database cluster can contain multiple shards, with each shard maintaining its own primary and replica nodes.

- Sharding distributes different subsets of the overall dataset across multiple shards.
- Replication maintains copies of the data within each shard.
- Sharding primarily helps with horizontal scalability.
- Replication primarily helps with availability, redundancy, and read scalability.

## Use Cases of Sharding

1. **Large-Scale Applications**:

   - Social media platforms with millions of users can distribute user profiles, posts, and related data across multiple shards.
   - Applications with large datasets and high request volumes can distribute their workloads across multiple database nodes.

2. **Time-Series Data**:

   - IoT applications, monitoring platforms, and logging systems generate large volumes of continuously growing data.
   - Time-based partitioning may be sufficient when a single database can handle the workload, but sharding becomes useful when storage or throughput exceeds the capacity of an individual database node.

3. **Geographic Distribution**:

   - Applications with users spread across multiple geographic regions can distribute data across region-specific database nodes.
   - This can improve data locality and help satisfy regional data placement requirements.

4. **High-Write Workloads**:

   - Applications with heavy insert and update operations, such as e-commerce platforms, can distribute write workloads across multiple database nodes.
   - Appropriate shard-key selection is important to avoid concentrating writes on a single shard.

5. **Multi-Tenant Applications**:

   - SaaS applications can distribute tenant data across multiple shards based on `tenant_id`.
   - This can help isolate workloads and distribute storage and traffic as the number of tenants grows.

## Sharding in Practice

1. **MongoDB**:

   - Provides native support for sharding across multiple database nodes.
   - Uses shard keys to determine how documents are distributed across shards.
   - Provides a query router (`mongos`) that routes operations to the appropriate shards.
   - Supports balancing mechanisms to redistribute data when the cluster changes.
   - Each shard can use replica sets to provide redundancy and high availability.

2. **MySQL**:

   - Does not provide the same built-in transparent sharding architecture as MongoDB.
   - Sharding is commonly implemented through application-level routing or external infrastructure.
   - Tools such as **Vitess** provide distributed MySQL infrastructure with sharding, query routing, and resharding capabilities.

3. **PostgreSQL**:

   - Provides native table partitioning, which divides data within a PostgreSQL database instance but is not itself distributed sharding.
   - Distributed sharding can be implemented using extensions and distributed database solutions such as **Citus**.
   - Citus distributes PostgreSQL data across multiple nodes and provides distributed query execution and data placement based on distribution keys.
