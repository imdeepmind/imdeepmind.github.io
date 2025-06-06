<!--
sidebar_position: 1
--- -->

# Aurora

> Income note

Amazon Aurora is a fully managed, high-performance relational database engine compatible with MySQL and PostgreSQL. It is part of Amazon Web Services (AWS) and is designed to combine the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.

Aurora is built for the cloud, providing superior performance, scalability, and availability while reducing administrative overhead. It is optimized for workloads requiring high throughput, low latency, and enterprise-grade reliability.

## Key Features of Amazon Aurora

### High Performance

- 5x Faster than MySQL: Aurora delivers up to five times the throughput of standard MySQL running on the same hardware.
- 3x Faster than PostgreSQL: It provides up to three times the performance of standard PostgreSQL.
- Low-Latency Read Replicas: Aurora supports low-latency read replicas for scaling read-heavy workloads.

### Scalability

- Auto-Scaling Storage: Aurora automatically scales storage from 10 GiB up to 128 TiB without downtime.
- Compute Scaling: Database instances can be scaled up or down with minimal downtime.
- Read Replicas: Supports up to 15 read replicas (compared to MySQL’s 5) for horizontal read scaling.

### High Availability & Durability

- Multi-AZ Deployments: Aurora replicates data across multiple Availability Zones (AZs) for fault tolerance.
- Self-Healing Storage: Automatically detects and repairs disk failures.
- Continuous Backups: Point-in-time recovery and automated backups with no performance impact.

### Fully Managed

- Automated Patching & Updates: AWS handles database patching and minor version upgrades.
- Backup & Restore: Automated backups with retention periods up to 35 days.
- Monitoring & Alerts: Integrated with Amazon CloudWatch for performance metrics and alarms.

### Security & Compliance

- Encryption at Rest & in Transit: Supports AES-256 encryption for data at rest and SSL/TLS for data in transit.
- Network Isolation: Works with Amazon VPC for secure network configurations.
- IAM Integration: Fine-grained access control using AWS Identity and Access Management (IAM).
- Compliance Certifications: Compliant with SOC, PCI-DSS, HIPAA, ISO, and GDPR.

### Cost-Effective

- Pay-as-You-Go Pricing: No upfront costs; pay only for the compute and storage used.
- No License Fees: Unlike traditional enterprise databases, Aurora has no licensing costs.
- Serverless Option: Aurora Serverless automatically adjusts capacity based on demand, reducing costs for intermittent workloads.

## Aurora Architecture Internals

Amazon Aurora reimagines traditional database architecture by decoupling storage and compute while leveraging a distributed, fault-tolerant design. Below is a detailed breakdown of Aurora’s internal architecture, replication model, durability mechanisms, and engine-level differences compared to standard MySQL and PostgreSQL.

### Aurora’s Distributed & Decoupled Storage-Compute Architecture

#### Separation of Compute and Storage

- Unlike traditional databases where storage is tightly coupled with compute (local disks or attached EBS volumes), Aurora **decouples storage from compute**.
- **Compute Layer**: Handles query processing, transactions, and caching (using DB instances).
- **Storage Layer**: A distributed, auto-scaling, fault-tolerant storage system that spans **multiple Availability Zones (AZs)**.

#### Key Benefits of Decoupled Architecture

- **Independent Scaling**: Compute (CPU/RAM) and storage can scale independently.
- **High Availability**: Storage is replicated across AZs, so compute failures do not affect data durability.
- **Faster Recovery**: Since storage is separate, a failed DB instance can be quickly replaced without data movement.

### Quorum-Based Replication (4 out of 6 Replicas)

#### How Aurora Ensures Durability

- Aurora’s storage is distributed across **6 storage nodes** (2 per AZ in a 3-AZ setup).
- Data is written using a **quorum model**: **4 out of 6 replicas must acknowledge writes** before a transaction is considered durable.
  - This ensures **tolerance for up to 2 storage node failures** without data loss.
  - Reads require **3 out of 6 replicas** to maintain consistency.

#### Advantages Over Traditional Replication

| Feature                | Aurora (Quorum Model)             | Traditional MySQL/PostgreSQL (Synchronous Replication) |
| ---------------------- | --------------------------------- | ------------------------------------------------------ |
| **Write Durability**   | 4/6 replicas (strong consistency) | Typically 2 replicas (primary + standby)               |
| **Failure Tolerance**  | Survives 2 storage node failures  | Usually fails if primary & standby both crash          |
| **Performance Impact** | Lower latency (parallel writes)   | Higher latency (sequential replication)                |

#### Redo Log Buffering & Durability Guarantees

### **3.1 Log-Structured Storage**

- Aurora **does not write data pages directly** to disk. Instead, it **only ships redo logs** to storage nodes.
- The storage layer **reconstructs data pages** from logs in the background, reducing I/O overhead.

### **3.2 Redo Log Optimization**

- **Minimizes Write Amplification**: Only log records are sent over the network, not entire pages.
- **Asynchronous Page Materialization**: Storage nodes apply logs in the background to reconstruct pages.
- **Durability Without fsync() Delays**: Aurora avoids waiting for disk flushes (`fsync`) by relying on quorum commits.

### **3.3 Comparison with Traditional Databases**

| Mechanism                   | Aurora                                | Standard MySQL/PostgreSQL        |
| --------------------------- | ------------------------------------- | -------------------------------- |
| **Primary Write Mechanism** | Ships redo logs only                  | Writes full data pages + logs    |
| **Durability Latency**      | Faster (quorum-based)                 | Slower (depends on disk sync)    |
| **Recovery Time**           | Near-instant (logs reconstruct state) | Slower (requires replaying logs) |

## **4. Aurora MySQL vs. Aurora PostgreSQL Internals**

### **4.1 Aurora MySQL**

- **Based on MySQL 5.7/8.0** but with significant optimizations:
  - **No InnoDB Double-Write Buffer**: Aurora’s storage layer eliminates the need for this by ensuring crash-safe page writes.
  - **Parallel Query Execution**: Improves analytical query performance.
  - **Optimized Buffer Pool Management**: Reduced contention for memory access.

### **4.2 Aurora PostgreSQL**

- **Based on PostgreSQL 11+** with AWS enhancements:
  - **Native PostgreSQL Replication Replaced**: Uses Aurora’s distributed storage instead of PostgreSQL’s WAL shipping.
  - **Optimized Vacuuming**: Reduced bloat impact due to Aurora’s storage layer.
  - **Better Read Scalability**: Supports up to 15 read replicas (vs PostgreSQL’s ~10).

### **4.3 Key Differences Between Aurora MySQL & PostgreSQL**

| Feature               | Aurora MySQL                            | Aurora PostgreSQL                         |
| --------------------- | --------------------------------------- | ----------------------------------------- |
| **Underlying Engine** | MySQL 5.7/8.0                           | PostgreSQL 11+                            |
| **Replication Model** | Aurora storage layer (not MySQL binlog) | Aurora storage layer (not PostgreSQL WAL) |
| **Buffer Pool**       | Optimized InnoDB buffer pool            | Shared buffers + Aurora optimizations     |
| **Parallel Query**    | Supported                               | Supported (but different implementation)  |

## **5. How Aurora Differs from Standard MySQL/PostgreSQL at the Engine Level**

### **5.1 Storage Engine Modifications**

- **No Direct Disk Writes**: Aurora bypasses the local filesystem and sends logs directly to the distributed storage layer.
- **No Double-Write Buffer (MySQL)**: Not needed due to Aurora’s crash-safe storage.
- **No WAL Archiving (PostgreSQL)**: Aurora handles log shipping internally.

### **5.2 Networking & I/O Optimizations**

- **Bypasses OS Page Cache**: Aurora uses a **user-space network stack** for lower-latency log shipping.
- **Zero-Copy Log Shipping**: Reduces CPU overhead by avoiding unnecessary data copies.

### **5.3 Recovery & Crash Consistency**

- **Instant Crash Recovery**: Since storage nodes have quorum-committed logs, recovery is near-instant.
- **No Need for Crash Recovery (PostgreSQL)**: Unlike standard PostgreSQL, Aurora does not require lengthy `pg_wal` replay.

### **5.4 Performance Enhancements**

- **Read Scaling**: Up to 15 low-lag replicas (vs MySQL’s 5, PostgreSQL’s ~10).
- **Write Scaling (Multi-Master)**: Aurora PostgreSQL supports multi-master clustering for high write throughput.
