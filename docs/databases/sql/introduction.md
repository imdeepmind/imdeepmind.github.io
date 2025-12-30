---
sidebar_position: 1
---

# Introduction

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

**SQL (Structured Query Language)** is the standard language used to communicate with and manage data in **relational databases**. It allows us to **store, retrieve, manipulate, and manage** data effectively through structured commands. SQL is declarative, that means we need specify _what_ we want, not _how_ to get it.

## Brief History of SQL

The origins of SQL go back to the early 1970s at **IBM**:

- **1970** – Dr. **E. F. Codd**, an IBM researcher, published a paper titled _“A Relational Model of Data for Large Shared Data Banks”_, introducing the **relational model** of data.
- **1973** – IBM began developing a system called **System R**, a prototype relational database that used a language called **SEQUEL (Structured English Query Language)**.
- **1979** – Oracle (then called Relational Software Inc.) released the **first commercial SQL-based database system**.
- **1986** – **ANSI** (American National Standards Institute) standardized SQL, officially naming it **SQL** (the name “SEQUEL” was changed due to a trademark issue).
- Since then, SQL has evolved with several revisions: **SQL-89**, **SQL-92**, **SQL:1999**, **SQL:2003**, **SQL:2011**, **SQL:2016**, etc.

Today, nearly all major relational databases (MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite) support SQL, often with proprietary extensions.

## SQL Characteristics

- **Declarative language** – we describe _what_ data we want, not how to retrieve it.
- **Schema-based** – data is organized in tables with defined columns and types.
- **Standardized** – governed by ANSI/ISO standards.
- **Set-based operations** – operates on sets of data (rows) rather than one row at a time.

## Types of SQL Queries

SQL is broadly divided into **five main categories**, based on what aspect of the database they manipulate or query.

### Data Definition Language (DDL)

Used to **define or modify** the structure of the database schema — tables, views, indexes, etc.

**Common DDL commands:**

- `CREATE` – creates objects like databases, tables, indexes, or views.
- `ALTER` – modifies existing database objects.
- `DROP` – deletes objects.
- `TRUNCATE` – removes all data from a table (faster than `DELETE`).
- `RENAME` – renames a database object.

**Example:**

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50)
);

ALTER TABLE employees ADD COLUMN salary DECIMAL(10, 2);
```

### Data Query Language (DQL)

Used to **query** the database and **fetch data** based on conditions.

**Main command:**

- `SELECT` – retrieves data from one or more tables.

**Example:**

```sql
SELECT name, department FROM employees WHERE salary > 50000;
```

DQL is the most commonly used category and lies at the core of SQL usage.

### Data Manipulation Language (DML)

Used to **manipulate or modify** data inside tables.

**Common DML commands:**

- `INSERT` – adds new records.
- `UPDATE` – modifies existing records.
- `DELETE` – removes records.

**Example:**

```sql
INSERT INTO employees (id, name, department, salary)
VALUES (1, 'Alice', 'Engineering', 75000);

UPDATE employees SET salary = 80000 WHERE id = 1;

DELETE FROM employees WHERE id = 1;
```

### Data Control Language (DCL)

Used to **control access** and **permissions** in the database.

**Common DCL commands:**

- `GRANT` – gives user access privileges.
- `REVOKE` – removes access privileges.

**Example:**

```sql
GRANT SELECT, INSERT ON employees TO analyst_user;
REVOKE INSERT ON employees FROM analyst_user;
```

### Transaction Control Language (TCL)

Used to **manage transactions**, ensuring **data consistency and integrity**.

**Common TCL commands:**

- `COMMIT` – permanently saves the changes made by a transaction.
- `ROLLBACK` – undoes changes if an error occurs.
- `SAVEPOINT` – creates intermediate points within a transaction for partial rollback.
- `SET TRANSACTION` – defines properties of a transaction.

**Example:**

```sql
BEGIN TRANSACTION;
UPDATE employees SET salary = salary + 5000 WHERE department = 'HR';
COMMIT;
```

## Summary Table

| Category | Purpose                   | Key Commands                                    |
| -------- | ------------------------- | ----------------------------------------------- |
| DDL      | Define database structure | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` |
| DQL      | Query or read data        | `SELECT`                                        |
| DML      | Manipulate data           | `INSERT`, `UPDATE`, `DELETE`                    |
| DCL      | Manage permissions        | `GRANT`, `REVOKE`                               |
| TCL      | Manage transactions       | `COMMIT`, `ROLLBACK`, `SAVEPOINT`               |
