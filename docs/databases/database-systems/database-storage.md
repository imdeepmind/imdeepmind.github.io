---
sidebar_position: 3
---

# Database Storage

**Database storage** is the physical representation of data within a database system. It's typically organized into **files** and **pages**.

## Storage Hierarchy

A storage hierarchy is a systematic arrangement of storage devices based on their speed, capacity, and cost. This hierarchy is essential for optimizing data access and storage costs in computer systems.

**Common Levels of Storage Hierarchy:**

1. **Primary Storage (Main Memory):**

- Fastest storage device.
- Directly accessible by the CPU.
- Volatile (loses data when power is off).
- Used for active programs and data.

2. **Secondary Storage:**

- Slower than primary storage but larger capacity.
- Non-volatile (retains data when power is off).
- Examples: Hard Disk Drives (HDDs), Solid-State Drives (SSDs).

3. **Tertiary Storage:**

- Slowest storage device but has the largest capacity.
- Used for long-term data storage and archiving.
- Examples: Magnetic tapes, optical discs.

### Storage Hierarchy Access Speed

Storage hierarchy refers to the various types of data storage systems arranged by speed and cost. Here's a breakdown of access speeds for different types of storage:

1. **Registers**:

   - **Access Time**: Nanoseconds (ns)
   - Fastest storage, used for immediate data manipulation by the CPU.

2. **Cache Memory** (L1, L2, L3):

   - **Access Time**: Typically 1-10 ns
   - Very fast, located close to the CPU to speed up access to frequently used data.

3. **RAM (Random Access Memory)**:

   - **Access Time**: Approximately 10-100 ns
   - Primary volatile storage used for active processes and data.

4. **SSD (Solid State Drive)**:

   - **Access Time**: Around 100-500 µs (microseconds)
   - Much faster than traditional hard drives, using flash memory to store data.

5. **HDD (Hard Disk Drive)**:

   - **Access Time**: Generally 5-15 ms (milliseconds)
   - Slower due to mechanical parts; access times vary depending on seek time and rotational speed.

6. **Optical Discs** (e.g., CDs, DVDs):

   - **Access Time**: 150-300 ms
   - Slower than HDDs; uses lasers to read data.

7. **Magnetic Tape**:
   - **Access Time**: Seconds to minutes
   - Primarily used for archival storage; very slow access due to sequential reading.

**Why is Storage Hierarchy Important?**

- **Performance Optimization:** Data is stored at the appropriate level based on its usage frequency. Frequently accessed data is kept in faster storage, while less frequently accessed data is stored in slower, cheaper storage.
- **Cost Optimization:** By using a hierarchy, organizations can balance performance and cost by storing data at the most suitable level.
- **Data Availability:** Critical data can be replicated across multiple storage levels to ensure high availability and redundancy.

**Example of Storage Hierarchy in a Database System:**

- **Primary Storage:** Active database buffers, query results, and frequently accessed data.
- **Secondary Storage:** Main database files, indexes, and temporary data.
- **Tertiary Storage:** Historical data, backups, and archived data.

**Key Factors Influencing Storage Hierarchy:**

- **Access Frequency:** How often data is accessed.
- **Data Size:** The amount of data to be stored.
- **Data Retention Requirements:** How long data needs to be retained.
- **Cost Constraints:** Budgetary limitations.

**Emerging Trends:**

- **Cloud Storage:** Leveraging external storage providers for scalable and flexible storage solutions.
- **Hybrid Cloud Storage:** Combining on-premises and cloud storage for optimal performance and cost.
- **Object Storage:** Designed for storing large amounts of unstructured data.

Understanding the storage hierarchy is crucial for designing efficient and cost-effective storage systems in various applications, including databases, cloud computing, and data centers.

## Sequential vs. Random Access

**Sequential Access:**

- Data is accessed in a linear order, starting from the beginning of a file.
- Typically used for tapes and older storage devices.
- Requires reading all preceding data to access a specific data item.
- **Example:** Reading a book from the beginning to reach a specific page.

**Random Access:**

- Data can be accessed directly without reading intermediate data.
- Typically used for modern storage devices like hard disk drives (HDDs) and solid-state drives (SSDs).
- Allows for efficient data retrieval and modification.
- **Example:** Jumping directly to a specific page in a book using the table of contents.

> Random access on **non-volatile** storage is almost always **much slower** than sequential access.  
> DBMS will want to maximize sequential access.

## Storage Manager

The Storage Manager is a critical component of a Database Management System (DBMS) responsible for managing the physical storage and retrieval of data. It acts as an interface between the DBMS and the underlying storage devices, such as hard disk drives (HDDs) or solid-state drives (SSDs).

**Key Functions of the Storage Manager:**

- **Data Storage:** Allocates physical storage space for data and indexes.
- **Data Retrieval:** Retrieves data from storage based on user queries or application requests.
- **Data Modification:** Updates, inserts, and deletes data within the storage system.
- **Concurrency Control:** Ensures that multiple transactions can access and modify data simultaneously without conflicts.
- **Recovery Management:** Recovers the database to a consistent state in case of failures or errors.

**Components of the Storage Manager:**

- **Buffer Manager:** Manages a cache of data pages in memory to improve performance.
- **File Manager:** Organizes data into files and manages file structures.
- **Page Manager:** Handles the allocation and deallocation of pages within files.
- **Access Methods:** Provides mechanisms for efficiently accessing data, such as B-trees, hash indexes, and sequential scans.
- **Concurrency Control Manager:** Implements techniques like locking or timestamping to prevent conflicts.
- **Recovery Manager:** Maintains a log of transactions and uses it to undo or redo operations in case of failures.

## Database Pages

<div style={{textAlign: 'center'}}>
<img src="/img/DatabasePage.png" alt="Client Server" />
</div>

**Database pages** are the fundamental units of data storage within a database system. They are fixed-size blocks of data that are read from and written to disk. Pages provide a structured and efficient way to organize and manage data.

**Key Characteristics of Database Pages:**

- **Fixed Size:** Pages have a predetermined size, typically measured in bytes. This ensures consistent data access and storage management.
- **Header:** The header section of a page contains metadata information, such as the page number, transaction ID, and flags indicating the page's status (e.g., dirty, free).
- **Data Area:** The data area stores the actual data, which can be organized in various ways depending on the database system and data structure.
- **Free Space:** Pages often include a free space area to accommodate insertions and updates without requiring the entire page to be rewritten.

> Oracle and some other databases can have different page sizes for each table.

**Page Management Techniques:**

- **Page Allocation:** Determining which page to use for storing new data. This can be done using techniques like sequential allocation, linked allocation, or indexed allocation.
- **Page Replacement:** Deciding which page to remove from the buffer pool (in-memory cache) when a new page needs to be loaded. Common algorithms include LRU (Least Recently Used), FIFO (First-In-First-Out), and LFU (Least Frequently Used).
- **Page Splitting and Merging:** Handling situations where a page becomes full or nearly empty. Splitting a page creates two new pages, while merging combines two pages into one.

**Page Types:**

- **Data Pages:** Store the actual data records.
- **Index Pages:** Store index entries that point to data pages, enabling efficient data retrieval.
- **Metadata Pages:** Store information about the database structure, such as table definitions, indexes, and constraints.

**Page-Based Storage Advantages:**

- **Efficiency:** Pages provide a convenient size for reading and writing data to disk.
- **Simplicity:** They offer a uniform way to manage data storage.
- **Performance:** Page-based storage can improve performance by reducing the number of I/O operations required.

**Considerations:**

- **Page Size:** The choice of page size can impact performance and storage efficiency. Larger pages may reduce the number of I/O operations but can also lead to wasted space if pages are not fully utilized. Also write operations can be slow if the page size is too large.
- **Page Organization:** The way data is organized within a page can affect retrieval efficiency. Techniques like B-trees, hash tables, and heap files are commonly used.
- **Page Compression:** Compressing data within pages can reduce storage requirements and improve I/O performance.

### Default Page Sizes in Different Databases

The default page size varies among different database systems. Here are some common default page sizes:

**Relational Databases:**

- **MySQL:** 16KB
- **PostgreSQL:** 8KB
- **Oracle Database:** 8KB
- **SQL Server:** 8KB
- **DB2:** 4KB

**NoSQL Databases:**

- **MongoDB:** 16KB
- **Cassandra:** 64KB
- **Couchbase:** 16KB
- **Redis:** 4KB
- **Riak:** 16KB

### Page Heap

<img src="/img/DatabaseHeap.png" alt="Client Server" style={{width: '100%'}} />

A **page heap** is a data structure used in database systems to manage the allocation and deallocation of storage pages. It's essentially a collection of free and used pages within a database file.

The DBMS can locate a page on disk given a page id by using a linked list of pages or a page directory.

- **Linked List:** Header page holds pointers to a list of free pages and a list of data pages. However, if the DBMS is looking for a specific page, it has to do a sequential scan on the data page list until it finds the page it is looking for.
- **Page Directory:** DBMS maintains special pages, called page directory, to track locations of data pages, the amount of free space on each page, a list of free/empty pages and the page type. These special pages have one entry for each database object.

**Page Heap Algorithms:**

Different database systems use various algorithms to manage the page heap:

1. **First-Fit:** The first free page that is large enough to accommodate the new data object is allocated.
2. **Best-Fit:** The smallest free page that is large enough is allocated.
3. **Worst-Fit:** The largest free page is allocated.

The choice of algorithm can impact the performance and efficiency of the database system. For example, first-fit is often a good choice for simplicity and speed, but it can lead to fragmentation over time. Best-fit can reduce fragmentation but may require more overhead to find the best-fit page.

**Page Heap Fragmentation:**

Fragmentation occurs when free space is scattered across the page heap, resulting in small, non-contiguous free blocks. Fragmentation can reduce storage utilization and performance.

To mitigate fragmentation, database systems may employ techniques like:

- **Coalescing:** Combining adjacent free pages into larger free blocks.
- **Defragmentation:** Reorganizing the data to consolidate free space and improve performance.
- **Page Splitting and Merging:** Splitting large pages or merging small pages to optimize storage utilization.

### Page Layout in Database Storage

A **page** is a fixed-size block of data that is the fundamental unit of storage in a database system. The layout of a page defines how data is organized within the page, including the header, data area, and free space.

**Header Structure:**

- **Page ID:** A unique identifier for the page.
- **Page Type:** Indicates the type of page (e.g., data page, index page, metadata page).
- **Free Space:** The amount of free space available on the page.
- **Transaction ID:** The transaction that last modified the page.
- **Checksum:** A value used to verify data integrity.

### Tuple Oriented Storage - Slotted Pages

<img src="/img/DatabasePageWithSlots.png" alt="Client Server" style={{width: '100%'}} />

A **slotted page** is a type of page layout commonly used in database systems to efficiently store variable-length records. In a slotted page, a fixed-size header is followed by a variable-length data area. The header contains information about the number of slots and the offset of each slot within the data area.

**Key Components of a Slotted Page:**

1. **Header:**
   - **Number of Slots:** The total number of slots in the page.
   - **Slot Directory:** An array of slot descriptors, each containing the offset of the corresponding record and its length.
2. **Data Area:**
   - Stores the actual data records.
   - Records can be of varying lengths and are stored contiguously.

**Advantages of Slotted Pages:**

- **Efficient Storage:** Slotted pages allow for efficient storage of variable-length records.
- **Flexible Record Insertion:** New records can be inserted into free space within the page, reducing the need for page splits.
- **Efficient Record Deletion:** Deleted records can be marked as deleted without physically removing them from the page, allowing for potential reuse of the space.

**Disadvantages of Slotted Pages:**

- **Fragmentation:** Over time, as records are inserted and deleted, fragmentation can occur, reducing storage utilization.
- **Complexity:** Slotted pages require more complex management compared to fixed-width record pages.

**Slotted Page Management:**

- **Slot Allocation:** When a new record is inserted, the system selects a free slot and updates the slot directory.
- **Slot Deallocation:** When a record is deleted, the slot is marked as free, but the data may remain on the page until it is overwritten by a new record.
- **Fragmentation Management:** To minimize fragmentation, database systems may employ techniques like coalescing adjacent free slots or defragmenting the page.

## Record IDs in Databases

**Record IDs (RIDs)** are unique identifiers assigned to tuples (rows) in a database. They help pinpoint the exact location of data in storage, which is essential for efficient data retrieval and manipulation. RIDs typically consist of two components:

- **Page Number**: Indicates the specific page in storage where the tuple resides.
- **Tuple Offset**: Specifies the position of the tuple within that page.

This structure allows database management systems to quickly access records without scanning the entire dataset.

### Record IDs in Different Databases

1. **Relational Databases (e.g., MySQL, PostgreSQL, Oracle)**:

   - **Implementation**: In relational databases, RIDs usually represent a combination of a page number and a tuple offset. For example, MySQL's InnoDB storage engine uses RIDs to locate rows within clustered indexes.
   - **Usage**: RIDs facilitate efficient data retrieval and support operations like updates and deletes by referencing specific tuples directly.

2. **NoSQL Databases (e.g., MongoDB)**:

   - **Implementation**: MongoDB utilizes **ObjectIDs** as unique identifiers for its documents. While not traditional RIDs, ObjectIDs serve a similar function by providing unique access points for documents.
   - **Usage**: These IDs enable quick document retrieval and ensure that each document is uniquely identifiable across collections.

3. **Key-Value Stores (e.g., Redis, Amazon DynamoDB)**:

   - **Implementation**: In key-value databases, the key acts as a unique identifier for records. Although not RIDs in the classic sense, the keys function similarly by providing direct access to values.
   - **Usage**: Keys allow for rapid data access without the need for additional indexing, making operations very efficient.

4. **Column-Family Stores (e.g., Apache Cassandra)**:

   - **Implementation**: Cassandra uses a unique primary key for each row, which can be considered a form of RID. This key is crucial for directly accessing data within the distributed architecture.
   - **Usage**: The primary key structure allows for efficient data retrieval and supports horizontal scalability, ensuring that data can be accessed quickly even in large datasets.

5. **Graph Databases (e.g., Neo4j)**:
   - **Implementation**: In Neo4j, every node and relationship has a unique internal identifier, functioning similarly to RIDs. These IDs allow for efficient traversal and querying of the graph structure.
   - **Usage**: Unique identifiers facilitate quick access to nodes and relationships, which is essential for graph-based queries.

## Tuple Layout

<div style={{textAlign: 'center'}}>
<img src="/img/TupleLayout.png" alt="Client Server"  />
</div>

A tuple is essentially a sequence of bytes (these bytes do not have to be contiguous). It is the DBMS’s job to interpret those bytes into attribute types and values.

- **Tuple Header:** Contains meta-data about the tuple.
  - Visibility information for the DBMS’s concurrency control protocol (i.e., information about which transaction created/modified that tuple).
  - Bit Map for NULL values.
  - Note that the DBMS does not need to store meta-data about the schema of the database here.
- **Tuple Data:** Actual data for attributes.
  - Attributes are typically stored in the order that you specify them when you create the table.
  - Most DBMSs do not allow a tuple to exceed the size of a page.
- **Unique Identifier:**
  - Each tuple in the database is assigned a unique identifier.
  - Most common: page id + (offset or slot).
  - An application cannot rely on these ids to mean anything.

**Denormalized Tuple Data**: If two tables are related, the DBMS can “pre-join” them, so the tables end up on the same page. This makes reads faster since the DBMS only has to load in one page rather than two separate pages. However, it makes updates more expensive since the DBMS needs more space for each tuple.
