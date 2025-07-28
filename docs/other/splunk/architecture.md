---
sidebar_position: 2
---

# Architecture

Splunk's architecture is designed to handle **large-scale ingestion, indexing, and querying of machine data in real-time**. It is **modular**, **distributed**, and **scalable**, making it suitable for small setups to massive enterprise deployments.

This architecture is composed of several **core components**, each responsible for a distinct role: data collection, indexing, searching, visualization, and management.

## Core Components of Splunk Architecture

### Forwarder

**Purpose:** Data collection and forwarding.

There are two types:

#### Universal Forwarder (UF)

- Lightweight agent installed on source machines (e.g., web servers, databases).
- Forwards raw data to the Indexer.
- Minimal CPU and memory footprint.
- No parsing or indexing.

#### Heavy Forwarder (HF)

- Full Splunk instance with parsing and filtering capabilities.
- Can route data, perform transformations, and selectively forward based on rules.
- Used when pre-processing is needed before indexing.

> **Note:** Forwarders are installed close to data sources to ensure reliable and efficient data collection.

### Indexer

**Purpose:** Parsing, indexing, and storing the incoming data.

Responsibilities:

- Receives data from forwarders.
- Parses the data into individual events.
- Extracts timestamps and metadata.
- Indexes the data for fast search retrieval.
- Stores raw data and corresponding index files on disk.

> Indexers are the workhorses of Splunk; their performance determines search speed and data availability.

### Search Head (SH)

**Purpose:** User interface for searching and visualization.

Responsibilities:

- Accepts search queries from users (via web UI, CLI, or REST API).
- Distributes the query to relevant indexers.
- Collects and aggregates results.
- Allows building dashboards, visualizations, and alerts.
- Supports apps and saved searches.

> In distributed setups, **search heads do not store any data** themselves. They only coordinate the search and display results.

### Deployment Server (Optional)

**Purpose:** Centralized configuration management of Splunk instances.

Responsibilities:

- Used to manage and configure multiple Universal Forwarders or lightweight Splunk instances.
- Pushes configuration updates, apps, and settings to clients.
- Acts like a **"puppet master"** in large deployments.

### License Manager

**Purpose:** Manages indexing volume and enforces license limits.

Responsibilities:

- Tracks the volume of indexed data per day.
- Ensures license violations are logged and notified.
- Centralized license control in large deployments.

### Cluster Master (for Indexer Clustering)

**Purpose:** Manages indexer clustering for high availability.

Responsibilities:

- Oversees peer (indexer) nodes.
- Manages replication of indexed data.
- Ensures data integrity, fault tolerance, and automatic recovery.

### Search Head Cluster Deployer (for SH Clustering)

**Purpose:** Manages configuration of Search Head Clusters.

Responsibilities:

- Used to push apps and configuration to all search heads in a cluster.
- Ensures consistency and easier management.

## Splunk Architecture: High-Level Workflow

```mermaid
flowchart LR
    A[Data Sources] --> B[Universal / Heavy Forwarders]
    B --> C[Indexers]
    C --> D[Search Head]
    D --> E[User Interface]
```

### Detailed Steps

1. **Data Ingestion**
   Logs and metrics are generated from sources like servers, containers, applications, etc.

2. **Forwarding**
   Forwarders installed on data source machines collect and transmit the data to Splunk indexers.

3. **Indexing**
   Indexers parse, process, and store the incoming data. They create index files for efficient querying.

4. **Searching and Visualization**
   Search heads send queries to indexers, retrieve results, and present them to the user via dashboards or reports.

## Splunk Deployment Types

### Standalone Deployment

- All components (Indexer, Search Head, etc.) run in a single instance.
- Suitable for small-scale deployments, dev/test environments.

### Distributed Deployment

- Components are separated across multiple machines:

  - Forwarders on source systems
  - Dedicated Indexers for performance
  - Dedicated Search Heads for user access

- Suitable for medium to large organizations.

### Clustered Deployment

Used for **high availability and scalability**.

- **Indexer Cluster**: Consists of multiple indexers with replicated data.
- **Search Head Cluster**: Multiple SHs for load balancing and redundancy.
- Used by enterprises requiring 24x7 uptime and data protection.

## Data Flow Summary

| Stage          | Component         | Responsibilities                               |
| -------------- | ----------------- | ---------------------------------------------- |
| **Input**      | Forwarders        | Collect and forward raw data                   |
| **Processing** | Indexers          | Parse, index, and store data                   |
| **Access**     | Search Heads      | Handle user searches, dashboards, alerts       |
| **Management** | Deployment Server | Configure and manage other Splunk components   |
| **Licensing**  | License Manager   | Monitor data usage and enforce licensing rules |

## Security and Access Control

- Splunk supports **role-based access control (RBAC)**.
- Secure data transmission via **SSL/TLS**.
- Integration with LDAP, SAML, and other authentication providers.
- Data masking and filtering possible at ingestion or search time.

## Splunk Cloud Architecture

Splunk also offers a fully-managed cloud platform, where:

- You don't manage infrastructure, upgrades, or scaling.
- Forwarders still send data, but to Splunk Cloud Indexers.
- Search Heads are provided through the web portal.
- Used by organizations preferring SaaS for log management.
