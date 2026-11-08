---
sidebar_position: 11
---

# Cursors

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

A **cursor** in database management systems (DBMS) is a database object used to retrieve and traverse rows of a result set returned by a query. It provides a mechanism for processing query results incrementally, allowing an application or database procedure to access one or more rows at a time instead of retrieving and processing the entire result set at once.

Cursors are particularly useful when operations require sequential processing of individual records, such as applying complex business logic, processing records in batches, or performing operations that cannot easily be expressed using a single SQL statement. However, cursors introduce additional execution and resource-management overhead, so set-based SQL operations are generally preferred whenever possible.

## Types of Cursors

Cursors can be classified based on how they are created, how they interact with the underlying data, and how they allow navigation through the result set. The exact cursor types and supported behaviors vary across database systems.

### Implicit Cursors

- Implicit cursors are automatically managed by the database system when certain SQL statements are executed.
- The database internally manages the cursor's lifecycle, so users do not explicitly declare, open, fetch, or close it.
- They are commonly associated with procedural SQL environments such as Oracle PL/SQL, where implicit cursors are created for statements such as `INSERT`, `UPDATE`, `DELETE`, and single-row `SELECT INTO` operations.
- **Example**: In PL/SQL, executing an `UPDATE` statement automatically creates an implicit cursor that provides information about the operation, such as the number of affected rows.

### Explicit Cursors

- Explicit cursors are declared and controlled explicitly by the user.
- Users define the query, open the cursor, fetch rows, and close it when processing is complete.
- Explicit cursors provide greater control over how query results are retrieved and processed.
- They are commonly used in procedural SQL when individual rows need to be processed sequentially.
- **Examples**: `DECLARE CURSOR` in PostgreSQL, Oracle, and SQL Server, although their syntax and lifecycle behavior differ.

## Types of Cursors Based on Behavior

### Static Cursor

- A static cursor works with a snapshot of the result set established when the cursor is opened.
- Changes made to the underlying data after the cursor is opened are generally not reflected in the cursor's result set.
- The exact snapshot and storage behavior depends on the database implementation.
- **Use case**: Useful for reporting or processing operations that require a stable view of the data while the cursor is being traversed.

### Dynamic Cursor

- A dynamic cursor can reflect changes made to the underlying data while the cursor is being used.
- Depending on the database implementation, changes such as insertions, deletions, and updates may become visible as the cursor moves through the result set.
- The visibility of changes depends on transaction isolation, cursor configuration, and database-specific behavior.
- **Use case**: Useful when an application needs to observe certain changes to the underlying data during cursor processing.

### Forward-Only Cursor

- A forward-only cursor allows navigation through the result set in one direction, from the first row toward the last row.
- Once the cursor moves forward, previously fetched rows cannot normally be revisited.
- It generally requires fewer resources than scrollable cursors because the database does not need to support backward navigation.
- **Use case**: Suitable for sequential processing, data exports, and batch operations where records are processed once.

### Scroll Cursor

- A scrollable cursor allows movement both forward and backward through the result set.
- It can support operations such as fetching the next row, previous row, first row, last row, or a row at a specified position, depending on the database.
- **Use case**: Useful when an application needs to navigate through query results in different directions or revisit previously fetched rows.

### Read-Only Cursor

- A read-only cursor allows rows to be retrieved but does not permit modifications to the underlying records through the cursor.
- It is suitable for operations that only require reading and processing data.
- **Use case**: Used for reporting, data exports, and sequential processing where database records should not be modified through the cursor.

### Updatable Cursor

- An updatable cursor allows both retrieval and modification of records through the cursor.
- Depending on the database, modifications can be performed using cursor-specific operations such as `UPDATE ... WHERE CURRENT OF`.
- Not every query produces an updatable cursor. Joins, aggregations, and other complex query operations may prevent cursor-based updates.
- **Use case**: Useful when individual records need to be retrieved, evaluated, and modified as part of a sequential database operation.

## Cursors Based on Location (Server vs Client)

### Server Cursor

- A server cursor is maintained by the database server, which manages the cursor's execution state and the retrieval of rows.
- The client fetches rows incrementally from the server instead of necessarily retrieving the entire result set in one operation.
- The server maintains cursor-related resources for the duration of its lifecycle.

- **Advantages**:
  - Supports incremental retrieval of large result sets without requiring the client to load every row into memory at once.
  - Allows the database to maintain query execution state between fetch operations.
  - Useful when applications need to process database results gradually.

- **Disadvantages**:
  - Open cursors consume database resources.
  - Long-running cursors can retain server-side state and potentially hold locks or snapshots for extended periods, depending on the database and cursor configuration.
  - Frequent network round trips during fetching can introduce additional latency.

- **Examples**: PostgreSQL server-side cursors, Oracle cursors, and SQL Server cursors.

### Client Cursor

- A client-side cursor is managed by the application or database driver rather than maintaining the entire cursor state on the database server.
- Depending on the driver and configuration, the result set may be fetched into client memory in its entirety or retrieved incrementally using buffering and fetch operations.
- The application handles navigation and processing of the retrieved rows locally.

- **Advantages**:
  - Reduces the need to maintain an open server-side cursor for client navigation.
  - Allows the application to process already-fetched results without additional database round trips.
  - Provides greater control over result navigation and local processing.

- **Disadvantages**:
  - Fetching the entire result set can consume significant client memory.
  - Large result sets may require substantial network transfer before processing can begin.
  - Client-side buffering can increase application memory consumption.

- **Examples**: JDBC and ODBC database drivers can provide client-side result handling, depending on their cursor configuration and fetch behavior.

## Cursor Life Cycle

The lifecycle of an explicit cursor generally involves several stages. The exact syntax and resource-management behavior vary between database systems.

### Declare

- A cursor is declared with a SQL query that defines the result set.
- This step associates the cursor with a query but does not necessarily execute the query immediately.
- Example (PostgreSQL):

  ```sql
  DECLARE cursor_name CURSOR FOR
  SELECT column1, column2
  FROM table_name;
  ```

### Open

- The cursor is opened, making the associated query result available for fetching.
- Depending on the database, query execution and resource allocation may occur during this stage or as rows are fetched.
- After opening, the cursor is positioned before the first row of the result set.

- Example (SQL Server):

  ```sql
  OPEN cursor_name;
  ```

### Fetch

- The `FETCH` operation retrieves one or more rows from the cursor's result set.
- Each fetch advances the cursor according to its configured navigation behavior.
- A cursor can retrieve rows individually or in batches, depending on the database and cursor configuration.

- Example (PostgreSQL):

  ```sql
  FETCH NEXT FROM cursor_name;
  ```

### Close

- After all required operations are completed, the cursor is closed.
- Closing the cursor releases resources associated with its active execution state, although the cursor declaration itself may remain available depending on the database.

- Example:

  ```sql
  CLOSE cursor_name;
  ```

### Deallocate

- Some database systems provide a separate deallocation operation to completely remove the cursor definition and release its remaining resources.
- In SQL Server, a cursor can be deallocated after it has been closed.
- This operation is database-specific and is not required or supported in the same form by every DBMS.

- Example (SQL Server):

  ```sql
  DEALLOCATE cursor_name;
  ```

## Cursor Characteristics and Transaction Behavior

Cursor behavior is also affected by transaction management and isolation levels.

- **Transaction Scope**:
  - Some database systems associate cursors with the transaction in which they are declared.
  - For example, PostgreSQL cursors normally exist only within the current transaction unless special options are used.
  - Committing or rolling back a transaction can affect the cursor's availability.

- **Holdable Cursors**:
  - Some databases support holdable cursors that remain available after a transaction is committed.
  - In PostgreSQL, a cursor declared with `WITH HOLD` can remain usable after a successful commit.
  - This allows applications to continue fetching rows across transaction boundaries, subject to database-specific restrictions.

- **Cursor Lifetime**:
  - Cursors should be closed when they are no longer needed to release associated resources.
  - Long-lived cursors can retain server resources and, depending on their implementation, may interfere with vacuuming, cleanup, or other database maintenance operations.

- **Locking and Isolation**:
  - Cursor operations may interact with database locks and transaction snapshots.
  - Whether rows remain locked during cursor processing depends on the database, isolation level, and cursor configuration.
  - Long-running transactions that process rows while holding locks can increase contention and the risk of deadlocks.

## Use Cases for Cursors

### Row-by-Row Processing

- When each record requires individual processing that cannot easily be expressed through a set-based SQL operation.
- Examples include applying complex business rules or invoking procedural logic for each row.

### Data Migration

- Moving data from one database or table to another when records require individual transformations during migration.
- Cursors can be used to retrieve source records incrementally and process them in manageable batches.

### Batch Processing

- Processing large result sets in smaller groups instead of loading all records into application memory.
- Useful for background jobs that perform sequential processing or interact with external systems.

### Reporting

- Generating reports that require sequential processing or application-specific calculations for individual records.
- However, SQL aggregation and window functions should generally be preferred when they can perform the same calculations more efficiently.

### Complex Data Manipulations

- Performing operations where individual records need to be evaluated and modified based on application-specific conditions.
- Examples include auditing workflows or procedural operations that require sequential decisions.

## Alternatives to Cursors

Cursors are not always the most efficient way to process database records. Several alternatives can reduce row-by-row processing overhead.

### Set-Based SQL Operations

- Set-based operations perform actions on multiple rows in a single SQL statement rather than processing each row individually.
- SQL operations such as `UPDATE`, `INSERT ... SELECT`, `DELETE`, `JOIN`, and aggregation functions can often replace cursor-based processing.
- The database optimizer can choose efficient execution strategies for these operations.

Example:

```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 10;
```

Instead of fetching every employee individually and updating their salary through a cursor, a single SQL statement updates all matching records.

### Batch Processing

- Batch processing divides a large dataset into smaller groups and processes each group independently.
- It reduces memory consumption and allows applications to control transaction size.
- It is useful for background jobs, bulk updates, and data migration tasks.

### Pagination

- Pagination retrieves records in smaller groups rather than loading an entire result set at once.
- Offset-based pagination uses `LIMIT` and `OFFSET`, while keyset pagination uses indexed columns to continue from the last processed record.
- Keyset pagination is generally more efficient for processing large datasets because it avoids scanning and discarding an increasing number of rows.

Example:

```sql
SELECT id, name
FROM employees
WHERE id > 1000
ORDER BY id
LIMIT 500;
```

The next batch can continue from the last processed ID.

### Streaming Results

- Some database drivers support streaming query results, allowing applications to consume rows incrementally without loading the entire result set into memory.
- Streaming is particularly useful for large exports and data-processing pipelines.
- Unlike explicit SQL cursors, application-level streaming may be implemented internally by the database driver using incremental fetching.

## Pros and Cons of Using Cursors

### Pros

1. **Fine-Grained Control**:

   - Cursors provide control over how individual rows are retrieved and processed.
   - They are useful when sequential operations or row-specific business logic cannot easily be expressed through a single SQL statement.

2. **Incremental Processing**:

   - Cursors allow applications to retrieve records incrementally rather than loading an entire result set into memory.
   - This can be useful when processing large datasets in manageable groups.

3. **Flexibility**:

   - Explicit cursors allow developers to control fetching, navigation, and, where supported, updates to individual records.
   - Different cursor types support different navigation and modification requirements.

4. **Error Handling**:
   - Procedural cursor processing allows applications to handle errors and exceptions during individual processing steps.
   - This can be useful when records require different handling depending on their contents.

### Cons

1. **Performance Overhead**:
   - Cursors can be slower than set-based SQL operations because they often involve repeated row retrieval and processing.
   - Frequent database round trips and procedural execution can introduce additional overhead, especially for large result sets.

2. **Resource Consumption**:

   - Open cursors consume database resources such as memory, execution state, and transaction-related resources.
   - Long-running cursors can retain resources for extended periods, potentially affecting database performance and maintenance operations.

3. **Complexity**:

   - Using explicit cursors introduces additional lifecycle management, including declaration, opening, fetching, and closing.
   - Incorrect resource management can lead to unnecessary resource consumption and more complicated application code.

4. **Potential for Lock Contention and Deadlocks**:
   - Cursors do not inherently cause deadlocks, but long-running transactions that process records while holding locks can increase lock contention.
   - Keeping transactions open for extended periods can prevent other transactions from accessing or modifying affected records, depending on the isolation level and locking behavior.
