---
sidebar_position: 1
---

# Introduction to Databases

## What is a database? 
A database is an organized collection of data that is related in some way and is meant to model some aspect of the real world.

**Examples of databases**:
-   Dictionary
-   Contact manager
-   IMDb

## Database management system (DBMS): 
A database management system is a software system that is used to manage a database.

## Why do we need database management systems? 
Database management systems are needed to manage databases because they can be large and complex. They also need to be able to be accessed by multiple users at the same time.

## Types of Databases
**1. Relational Databases:**

-   Based on the relational model, which represents data as a collection of tables with rows and columns.
-   Each table has a primary key, which uniquely identifies each row.
-   Data is stored in a structured format, making it easy to query and manage.
-   Examples: MySQL, PostgreSQL, Oracle, SQL Server

**2. Key-Value Stores:**

-   Store data as key-value pairs.
-   The key is a unique identifier for the data, and the value is the data itself.
-   Simple and efficient for storing large amounts of unstructured data.
-   Examples: Redis, Memcached, DynamoDB

**3. Graph Databases:**

-   Represent data as a graph, with nodes representing entities and edges representing relationships between entities.
-   Ideal for storing complex, interconnected data.
-   Examples: Neo4j, ArangoDB, OrientDB

**4. Document Databases:**

-   Store data as documents, which are JSON or XML files.
-   Documents can contain nested structures, making them flexible for storing complex data.
-   Well-suited for storing semi-structured or unstructured data.
-   Examples: MongoDB, CouchDB, Elasticsearch

## Relational model: 
The relational model is a data model that is used to represent data as a collection of tables. Each table has a set of columns, which are called attributes. Each row in a table is called a tuple.

The relational model was first proposed by Edgar F. Codd in 1970. It is based on the mathematical concept of a relation, which is a set of ordered pairs.

The relational model is used by most modern database management systems (DBMS). It is a very flexible model that can be used to represent a wide variety of data.

-   The relational model is a way to represent data in a database.
-   It uses tables to store data.
-   Each table has rows and columns.
-   Rows are called tuples.
-   Columns are called attributes.
-   The primary key is a unique identifier for each tuple.
-   The foreign key is a reference to the primary key of another table.
-   Constraints are rules that must be followed by the data in the table.

**The relational model has the following components**:
-   Structure: The structure of a relational database is defined by a schema. A schema is a set of tables, columns, and constraints.
-   Data: The data in a relational database is stored in tuples. Tuples are ordered sets of values.
-   Integrity constraints: Integrity constraints are rules that must be followed by the data in a relational database. There are several types of integrity constraints, including primary key constraints, foreign key constraints, and not null constraints.
-   Operations: The operations that can be performed on a relational database include selection, projection, join, union, intersection, and difference.

**Primary Keys**

-   The primary key is a unique identifier for each tuple.
-   It must be unique for each row in the table.
-   It can be a single attribute or a combination of attributes.
-   It is often used to join tables together.

**Foreign Keys**

-   The foreign key is a reference to the primary key of another table.
-   It allows you to create relationships between tables.
-   It must match the data type of the primary key it references.
-   It can be null if the relationship is optional.

**Constraints**

-   Constraints are rules that must be followed by the data in the table.
-   They can be used to ensure data integrity.
-   Common constraints include:
    -   NOT NULL: The attribute cannot be null.
    -   UNIQUE: The attribute must be unique for each row in the table.
    -   CHECK: The attribute must meet a certain condition.
    -   DEFAULT: The attribute will have a default value if it is not specified.

## Relational Algebra

**Basic Operations**

* **Selection (σ):** 
  * Selects tuples based on a condition.
  * Syntax: `σ_condition(relation)`
* **Projection (π):** 
  * Projects columns.
  * Syntax: `π_attributes(relation)`
* **Cartesian Product (×):**
  * Combines all tuples from two relations.
  * Syntax: `relation1 × relation2`
* **Union (∪):**
  * Combines tuples from two relations with the same attributes.
  * Syntax: `relation1 ∪ relation2`
* **Difference (−):** 
  * Returns tuples in relation1 that are not in relation2.
  * Syntax: `relation1 − relation2`
* **Intersection (∩):**
  * Returns tuples that are in both relation1 and relation2.
  * Syntax: `relation1 ∩ relation2`

**Derived Operations**

* **Join (⋈):** 
  * Combines tuples based on a join condition.
  * **Types:**
    * **Natural Join:** Joins on common attributes with the same name.
    * **Theta Join:** Joins on a specified condition.
* **Division (÷):**
  * Divides a relation by another relation to find tuples in the first relation that are related to all tuples in the second relation.

**Examples**

* **Find the names of customers who live in "City A":**
```σ_city="City A"(Customers)```
* **Find the names of customers and their orders:**
```Customers ⋈ Orders```
* **Find the names of customers who have placed orders for product "P1":**
```π_name(Customers ⋈ σ_product="P1"(Orders))```

**Additional Notes** 
* Relational algebra is used as a theoretical foundation for database query languages like SQL. 
* It provides a formal way to analyze and optimize queries. 
* Understanding relational algebra can help in writing efficient and effective database queries.

## Additional Operations in Relational Algebra

### Set Operations

* **Outer Join:** Combines tuples from two relations, including unmatched tuples from either or both relations.
  * **Left Outer Join (⟕):** Retains all tuples from the left relation, even if there's no match in the right relation.
  * **Right Outer Join (⟖):** Retains all tuples from the right relation, even if there's no match in the left relation.
  * **Full Outer Join (⟛):** Retains all tuples from both relations, regardless of whether there's a match.

### Aggregate Functions

* **Aggregation:** Computes a single value from a set of values.
  * **Common functions:** SUM, AVG, COUNT, MIN, MAX
* **Grouping:** Groups tuples based on specific attributes and applies aggregate functions to each group.

### Specialized Operations

* **Renaming (ρ):** Changes the name of an attribute or relation.
  * Syntax: `ρ_new_name(relation)`
* **Extended Projection (π'):** Projects columns and applies expressions to them.
* **Extended Selection (σ'):** Selects tuples based on expressions involving arithmetic, logical, and comparison operators.
* **Quantified Expressions:** Uses quantifiers (∀, ∃) to express conditions over multiple tuples.

### Examples

* **Find the names of customers who have placed orders, along with the total quantity of orders they've placed:**
```π_name, SUM(quantity)(Customers ⋈ Orders)```
* **Find the names of customers who have placed orders for all products:**
```Customers ÷ Products```
* **Rename the "quantity" attribute in the "Orders" relation to "units_sold":**
```ρ_units_sold(Orders)```

## Vector Databases

**Types of Vector Databases**

* **Exact Search Vector Databases:** Guarantee exact nearest neighbor. Examples: Faiss, Annoy.
* **Approximate Search Vector Databases:** Use approximate search for speed. Examples: Milvus, Pinecone.
* **Hybrid Vector Databases:** Combine exact and approximate search for balance.

**Use Cases**

* Recommendation Systems
* Image and Video Search
* Natural Language Processing
* Anomaly Detection
* Drug Discovery
* Fraud Detection
* Customer Segmentation
* Search Engine Optimization

**Advantages**

* Efficient Similarity Search
* Scalability
* Versatility
* Accuracy (Exact Search)
* Speed (Approximate Search)

**Disadvantages**

* Specialized Indexing Techniques
* Computational Overhead
* Storage Requirements

**Choosing the Right Vector Database**

* Consider dataset size, data type, and application requirements.

**Conclusion**

Vector Databases are powerful tools for similarity search applications. Choose the right one based on your needs to build innovative solutions.