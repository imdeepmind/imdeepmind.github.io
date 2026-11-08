---
sidebar_position: 10
---

# Replication

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

Database replication is the process of maintaining copies of database data across multiple database servers or nodes. Changes made to one database are propagated to other nodes to keep their data synchronized. Replication helps improve data availability, fault tolerance, read scalability, and disaster recovery capabilities.

Replication is widely used in distributed systems, cloud environments, and applications that require high availability or need to serve large volumes of read requests. Depending on the replication architecture, nodes can operate as primary and secondary servers, multiple writable nodes, or peers in a distributed network.

## Key Concepts of Database Replication

### Replication Types

- **Primary-Replica Replication (Master-Slave Replication)**

  - In this model, one database server (the primary) handles write operations, and changes are propagated to one or more secondary servers (replicas).
  - Replicas are commonly used to serve read requests, reducing the workload on the primary database.
  - If the primary fails, an eligible replica can be promoted to become the new primary through a manual or automated failover mechanism.

  - Benefits:
    - Simplified write operations because writes are generally handled by a single primary.
    - Improved read scalability by distributing read requests across replicas.
    - Easier consistency management compared to architectures with multiple writable nodes.

  - Drawbacks:
    - The primary can become a write bottleneck.
    - Replication lag can cause replicas to return outdated data.
    - The primary can become a single point of failure if appropriate failover mechanisms are not configured.

- **Multi-Primary Replication (Master-Master Replication)**

  - In this setup, multiple database servers can independently accept write operations, and changes are propagated among the participating nodes.
  - This architecture allows applications to write to different database nodes, which can be useful in geographically distributed environments.
  - However, concurrent modifications to the same records can create conflicts that require coordination or conflict-resolution mechanisms.

  - Benefits:
    - Multiple nodes can accept write operations.
    - Can improve write availability in distributed environments.
    - Supports geographically distributed applications that need local write access.

  - Drawbacks:
    - Conflict resolution becomes complex when multiple nodes modify the same data.
    - Synchronization and coordination introduce additional overhead.
    - Network partitions can cause nodes to accept conflicting writes, potentially resulting in split-brain scenarios.

- **Cascading Replication**

  - A hierarchical replication model where data flows from a primary database to intermediate replicas, which further propagate changes to their downstream replicas.
  - Instead of every replica communicating directly with the primary, intermediate replicas forward changes to other replicas.

  - Benefits:
    - Reduces the replication workload and network traffic directly handled by the primary.
    - Useful for distributing data across multiple regions or large database deployments.
    - Allows replication hierarchies to be organized according to geographical or infrastructure requirements.

  - Drawbacks:
    - Replication lag can accumulate across multiple levels.
    - Failure of an intermediate replica can affect its downstream replicas.
    - Monitoring and troubleshooting become more complicated.

- **Peer-to-Peer Replication**

  - In this architecture, nodes operate as peers rather than relying on one permanently designated primary.
  - Nodes can exchange data changes with other nodes, and some implementations allow multiple nodes to accept writes.
  - The exact read and write behavior depends on the database's consistency model and coordination mechanisms.

  - Benefits:
    - Avoids dependence on a single permanently designated primary.
    - Supports distributed data access across multiple nodes.
    - Suitable for geographically distributed systems.

  - Drawbacks:
    - Conflict resolution can become complex when concurrent writes occur.
    - Maintaining consistency across nodes requires coordination.
    - Network partitions and node failures can affect data synchronization.

### Replication Modes

- **Synchronous Replication**

  - In synchronous replication, the primary waits for acknowledgments from the configured synchronous replica or replicas before considering a transaction committed under the configured acknowledgment policy.
  - Depending on the database implementation, acknowledgment may indicate that a transaction has been received, written to a log, or applied on the replica.

  - Benefits:
    - Provides stronger durability guarantees because the primary waits for acknowledgment from one or more replicas.
    - Reduces the risk of losing recently committed transactions during primary failure.
    - Useful for applications that require stronger consistency and recovery guarantees.

  - Drawbacks:
    - Increased write latency because transactions depend on communication with replicas.
    - Network failures or unavailable replicas can delay or block write operations.
    - Performance can be affected by the latency of the participating replicas.

- **Asynchronous Replication**

  - In asynchronous replication, the primary commits transactions without waiting for replicas to acknowledge the changes.
  - Changes are propagated to replicas in the background, allowing the primary to continue processing transactions independently.

  - Benefits:
    - Faster write operations because the primary does not wait for replica acknowledgments.
    - Better tolerance of network latency between database nodes.
    - Suitable for read scaling and geographically distributed deployments.

  - Drawbacks:
    - Replication lag can cause replicas to return stale data.
    - Recently committed transactions may be lost if the primary fails before changes reach a replica.
    - Applications may need to handle read-after-write consistency issues.

- **Semi-Synchronous Replication**

  - A compromise between synchronous and asynchronous replication.
  - The primary waits for acknowledgment from at least one configured replica before completing the commit operation under the configured policy.
  - The exact acknowledgment semantics depend on the database implementation. For example, MySQL semi-synchronous replication acknowledges receipt of transaction events in a replica's relay log, not necessarily their application to the replica's database.

  - Benefits:
    - Reduces the risk of losing transactions compared to purely asynchronous replication.
    - Avoids waiting for every replica to fully apply each transaction.
    - Balances write performance and durability requirements.

  - Drawbacks:
    - Introduces additional latency compared to asynchronous replication.
    - Does not provide the same guarantees as fully synchronous replication.
    - Behavior during replica failures depends on the database's timeout and fallback configuration.

### Replication Strategies

- **Full Replication**

  - All replicas contain a complete copy of the replicated database data.
  - Changes made to the primary are propagated to the replicas so that each maintains the same logical dataset, subject to replication lag.

  - Benefits:
    - High data redundancy.
    - Replicas can serve read requests for the complete replicated dataset.
    - Provides additional copies of data for recovery when a database node fails.

  - Drawbacks:
    - High storage requirements because every replica maintains a complete copy.
    - Replication consumes network bandwidth and processing resources.
    - Changes need to be propagated to all participating replicas.

- **Partial Replication**

  - Each replica contains only a selected subset of the database data.
  - Replication can be configured for specific tables, rows, or other supported data subsets depending on the database implementation.

  - Benefits:
    - Optimized storage usage because replicas do not need to maintain the entire dataset.
    - Reduced synchronization overhead when only selected data needs to be replicated.
    - Useful for regional deployments or systems with specialized read workloads.

  - Drawbacks:
    - A replica cannot serve queries requiring data that it does not contain.
    - Data availability depends on which subsets are replicated.
    - Managing relationships and queries across partially replicated datasets can become complicated.

### Physical vs Logical Replication

Database systems can replicate changes using different mechanisms. Two important approaches are physical replication and logical replication.

- **Physical Replication**

  - Physical replication copies database changes at the storage or transaction-log level rather than interpreting individual SQL operations.
  - The replica maintains a physical copy of the primary database's state by replaying the corresponding database changes.
  - It is commonly used for maintaining standby database servers and supporting high availability.

  - Characteristics:
    - Replicates changes at a low level, such as database pages or write-ahead log records.
    - Typically maintains a close physical representation of the primary database.
    - Usually replicates the database as a whole rather than selecting individual tables.
    - Generally requires compatible database versions and configurations, depending on the database implementation.

- **Logical Replication**

  - Logical replication propagates database changes as logical operations, such as inserts, updates, and deletes.
  - Instead of copying physical database changes, the replication mechanism identifies changes to database records and applies them to the target database.
  - It allows more selective replication, such as replicating specific tables rather than the entire database.

  - Characteristics:
    - Supports selective replication of tables or supported database objects.
    - Can support replication between different database versions or configurations, depending on compatibility.
    - Allows more flexibility when integrating data between different database systems.
    - Schema changes generally need to be managed separately because they are not automatically replicated in every implementation.

  - Example: PostgreSQL supports both physical streaming replication and logical replication.

### Replication Lag and Consistency

Replication lag refers to the delay between a change being committed on the primary database and that change becoming available on a replica.

In asynchronous replication, the primary does not wait for replicas to receive or apply changes. As a result, replicas may temporarily contain outdated data.

For example:

1. A user updates their profile on the primary database.
2. The transaction commits successfully on the primary.
3. The application immediately reads the profile from a replica.
4. The replica has not yet received or applied the update.
5. The application returns the previous profile information.

This behavior can create consistency issues in applications that expect recently written data to be immediately visible.

Two important concepts related to replication lag are:

- **Stale Reads:** A replica returns older data because it has not yet applied the latest changes from the primary.
- **Read-After-Write Consistency:** A user should be able to read their own most recent write, even when read requests are routed to replicas.

Applications can handle these situations by routing critical reads to the primary, waiting until a replica has applied a particular transaction, or using database-specific consistency mechanisms.

### Replication Factor and Quorum

Replication factor and quorum are important concepts in distributed databases that maintain multiple copies of data.

- **Replication Factor:**
  - The replication factor represents the number of copies of a particular piece of data maintained across different database nodes.
  - A higher replication factor provides more redundancy but also increases storage requirements and replication overhead.
  - For example, a replication factor of 3 means that each piece of data is maintained on three different replicas.

- **Quorum:**
  - A quorum represents the minimum number of replicas that must respond successfully for a read or write operation to satisfy a configured consistency requirement.
  - It helps coordinate operations across multiple replicas and provides a mechanism for balancing consistency and availability.

  For a simple majority-based quorum:

  ```python
  quorum = (replication_factor // 2) + 1
  ```

  For example, with a replication factor of 3, a majority quorum requires responses from at least 2 replicas.

  The exact consistency guarantees depend on the database implementation, replication strategy, and configured read and write consistency levels.

  In systems that use quorum-based reads and writes, the read and write quorum sizes can be configured to overlap, helping ensure that reads can observe acknowledged writes. However, quorum alone does not guarantee linearizability or strong consistency in every distributed database.

### Failover and Recovery

Failover is the process of switching database operations from a failed primary node to another eligible replica.

In a primary-replica architecture, failover allows the system to continue accepting writes when the primary becomes unavailable.

A typical failover process involves:

1. **Failure Detection:**
   - A monitoring or orchestration mechanism detects that the primary database is unavailable or unhealthy.

2. **Replica Selection:**
   - The system identifies an eligible replica that has sufficiently up-to-date data and can safely become the new primary.

3. **Promotion:**
   - The selected replica is promoted to become the new primary and begins accepting write operations.

4. **Traffic Redirection:**
   - Applications, proxies, or database routers redirect database connections to the new primary.

5. **Recovery and Rejoining:**
   - When the previous primary becomes available again, it must be reconciled with the current primary before safely rejoining the replication topology.

Failover can be performed manually or automatically depending on the database and infrastructure.

An important problem during failover is **split brain**, which occurs when multiple nodes independently believe they are the primary and accept write operations simultaneously. This can result in conflicting data changes and inconsistent database states.

Database systems use mechanisms such as leader election, fencing, and quorum-based coordination to prevent or reduce the risk of split brain.

## Benefits of Database Replication

1. **High Availability**
   - Replication provides additional copies of data that can be used when a database node fails.
   - Combined with monitoring and failover mechanisms, replicas can be promoted to maintain service availability.

2. **Improved Read Performance**

   - By distributing read requests among replicas, replication reduces the workload on the primary database.
   - This is particularly useful for read-heavy applications where many requests access the same dataset.

3. **Data Redundancy**

   - Maintaining multiple copies of data across different nodes reduces dependence on a single database server.
   - Replication provides additional copies that can help recover from individual node failures.

4. **Disaster Recovery**

   - Replicas can be maintained in different availability zones or geographic regions to support recovery when a primary database or an entire region becomes unavailable.
   - Depending on the replication mode, recovery may involve some data loss or replication lag.

5. **Geographical Distribution**

   - Replicas can be placed closer to users in different regions to reduce network latency for read operations.
   - This is useful for applications that serve users across multiple geographic locations.

6. **Load Balancing**
   - Read workloads can be distributed across multiple replicas to prevent the primary database from handling every read request.
   - Appropriate read routing and connection management help distribute traffic across available replicas.

## Challenges of Database Replication

1. **Data Consistency**

   - Ensuring that replicas maintain consistent data can be challenging, particularly in asynchronous and multi-primary replication architectures.
   - Applications may need to account for stale reads, conflicting writes, and different consistency guarantees.

2. **Replication Lag**

   - There might be a delay between a change being committed on the primary and becoming available on replicas.
   - Replication lag can cause applications to return outdated data or violate read-after-write expectations.

3. **Conflict Resolution**

   - In multi-primary or peer-to-peer replication, multiple nodes may modify the same records independently.
   - Conflicting changes require resolution strategies, such as application-defined rules, timestamps, versioning, or database-specific conflict-resolution mechanisms.

4. **Increased Storage Requirements**

   - Full replication requires additional storage because each replica maintains a complete copy of the replicated dataset.
   - Increasing the number of replicas also increases the storage and synchronization overhead.

5. **Network Overhead**
   - Synchronizing replicas consumes network bandwidth and introduces communication overhead.
   - Geographically distributed replicas may experience higher latency due to network distance.

6. **Failover Complexity**

   - Promoting a replica to become the new primary requires careful coordination to prevent conflicting writes.
   - Applications and infrastructure must also redirect connections and handle transactions interrupted during failover.

## Replication vs Backup

Replication and backups both help protect database data, but they solve different problems.

| **Aspect**              | **Replication**                                                     | **Backup**                                                                          |
| ----------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Purpose**             | Data redundancy, availability, and read scalability.                | Recovery from data loss, corruption, and accidental changes.                        |
| **Data Updates**        | Changes are continuously propagated to replicas.                    | Data is captured at specific points or intervals, depending on the backup strategy. |
| **Accidental Deletion** | Deletions can propagate to replicas.                                | Earlier backups can restore data from before the deletion.                          |
| **Hardware Failure**    | Another replica can help maintain availability or support recovery. | Data can be restored to replacement infrastructure.                                 |
| **Recovery**            | Can support faster failover to another database node.               | Usually requires a restore process or point-in-time recovery.                       |
| **Data Retention**      | Generally reflects the current replicated state.                    | Can retain historical database states according to the backup retention policy.     |

Replication does not replace backups because unwanted changes, accidental deletions, and logical corruption can also propagate to replicas.

A reliable database architecture should use replication for availability and redundancy while maintaining independent backups for data recovery.

## Use Cases for Database Replication

1. **High-Availability Systems**

   - Applications that cannot tolerate significant downtime, such as e-commerce websites and financial services, use replication to maintain additional database copies.
   - Combined with automated failover, replicas can help maintain availability when a database node fails.

2. **Read-Intensive Applications**

   - Social media platforms, news websites, and content management systems often have significantly more read operations than writes.
   - Read replicas allow applications to distribute read traffic and reduce the workload on the primary database.

3. **Distributed Systems**

   - Applications that serve users across multiple geographic locations can maintain replicas closer to their users.
   - This improves regional read performance and provides additional copies of data across locations.

4. **Disaster Recovery**

   - Replicas maintained in separate availability zones or geographic regions can support recovery when infrastructure failures affect the primary database.
   - Independent backups should also be maintained to protect against logical data loss and corruption.

5. **Scalable Architectures**
   - Applications requiring increased read throughput can add replicas and distribute read requests across them.
   - Replication can improve read scalability, although it does not independently increase the primary database's write capacity.

## Tools and Technologies for Database Replication

1. **MySQL Replication**
   - Supports primary-replica replication, multi-source replication, and semi-synchronous replication.
   - Uses binary logs to record database changes and propagate them to replicas.
   - Supports different replication configurations depending on the required consistency and availability guarantees.

2. **PostgreSQL Replication**
   - Supports physical streaming replication for maintaining standby database servers.
   - Supports logical replication for selectively replicating database changes, such as changes to specific tables.
   - Physical replication is commonly used for high availability, while logical replication is useful for selective data distribution and integration.

3. **MongoDB Replica Sets**

   - Provides primary-secondary replication through replica sets.
   - The primary accepts write operations, while secondary members replicate changes from the primary.
   - Supports automatic primary election and failover when the current primary becomes unavailable, subject to replica-set configuration and election requirements.

4. **Cassandra**

   - Uses a peer-to-peer architecture where data is replicated across multiple nodes.
   - Supports configurable replication factors and consistency levels.
   - Uses quorum-based consistency options to balance availability and consistency requirements.

5. **Oracle GoldenGate**

   - A replication and data integration platform that supports change data capture and data synchronization.
   - Can replicate data between heterogeneous database systems.
   - Commonly used for database migration, data integration, and high-availability architectures.

6. **AWS RDS Read Replicas**
   - Provides managed read replicas for supported database engines to improve read scalability.
   - Replication is generally asynchronous, so replicas may experience replication lag.
   - Read replicas can also be promoted to standalone databases for certain recovery scenarios.

7. **AWS RDS Multi-AZ**
   - Provides managed high availability by maintaining standby database infrastructure in another availability zone.
   - Supports automatic failover when the primary database becomes unavailable.
   - Unlike read replicas, Multi-AZ deployments are primarily designed for availability rather than distributing read traffic.

## Best Practices for Database Replication

1. **Monitor Replication Lag**

   - Monitor the delay between changes committed on the primary and changes received or applied by replicas.
   - Set appropriate alerts when replication lag exceeds acceptable thresholds for the application.

2. **Optimize Network Bandwidth**

   - Ensure sufficient network capacity between database nodes to handle continuous replication traffic.
   - Compression can reduce bandwidth consumption where supported, although it introduces additional processing overhead.

3. **Implement Conflict Resolution Policies**

   - Define clear rules for handling conflicting writes in multi-primary or peer-to-peer replication architectures.
   - Use application-level coordination or database-specific conflict-resolution mechanisms where appropriate.

4. **Use Connection Pooling**

   - Efficiently manage database connections when routing read requests across multiple replicas.
   - Distribute read traffic across healthy replicas while considering replication lag and consistency requirements.

5. **Test Failover Mechanisms**

   - Regularly test failover processes to ensure that replicas can be promoted and applications can reconnect successfully.
   - Verify that the system prevents split-brain scenarios and handles interrupted transactions correctly.

6. **Maintain Independent Backups**

   - Maintain regular database backups independently of replication.
   - Use point-in-time recovery where supported to recover from accidental deletions, corruption, or unwanted database changes.
   - Periodically test backup restoration to verify that recovery procedures work as expected.

7. **Secure Communication**
   - Use encryption to secure data transfer between database nodes.
   - Apply appropriate authentication and access controls to prevent unauthorized nodes from participating in replication.

8. **Plan Replica Placement**

   - Place replicas across appropriate availability zones or geographic regions based on availability and latency requirements.
   - Consider network latency, replication lag, data residency requirements, and recovery objectives when selecting replica locations.
