---
sidebar_position: 2
---

# Relational Algebra

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

**Relational Algebra** is a formal system of query operations used on relational databases. It provides a mathematical foundation for understanding how database queries work and serves as the theoretical basis for SQL. Relational algebra operations allow us to manipulate relations (tables) and extract meaningful information from data.

## Basic Operations

Relational algebra defines six fundamental operations that form the foundation for all query processing:

### Selection (σ)

**Selection** filters tuples (rows) based on a condition. It returns a subset of rows that satisfy the specified predicate.

#### Syntax

```text
σ_condition(relation)
```

#### Example

```text
σ_salary > 50000(Employees)
```

This returns all employees with a salary greater than 50,000.

#### Properties

- Unary operation (operates on a single relation)
- Commutative: `σ_c1(σ_c2(R)) = σ_c2(σ_c1(R))`
- Condition can use comparison operators `(=, <, >, <=, >=, !=)` and logical operators (AND, OR, NOT)

### Projection (π)

**Projection** selects specific columns (attributes) from a relation. It removes unwanted columns and returns a vertical subset of the relation.

#### Syntax

```text
π_attributes(relation)
```

#### Example

```text
π_name, salary(Employees)
```

This returns only the name and salary columns from the Employees table.

#### Properties

- Unary operation
- Removes duplicate tuples from the result
- Useful for eliminating irrelevant attributes

### Cartesian Product (×)

**Cartesian Product** combines all tuples from two relations, creating a new relation with all possible combinations of rows.

#### Syntax

```text
relation1 × relation2
```

#### Example

```text
Employees × Departments
```

If Employees has 10 rows and Departments has 5 rows, the result has 50 rows.

#### Properties

- Binary operation
- Commutative: R1 × R2 = R2 × R1
- Associative: (R1 × R2) × R3 = R1 × (R2 × R3)

### Union (∪)

**Union** combines tuples from two relations, returning all tuples that appear in either relation.

#### Syntax

```text
relation1 ∪ relation2
```

#### Example

```text
Managers ∪ Directors
```

This returns all people who are either managers or directors.

#### Properties

- Binary operation
- Both relations must have the same schema (union-compatible)
- Commutative: R1 ∪ R2 = R2 ∪ R1
- Associative: (R1 ∪ R2) ∪ R3 = R1 ∪ (R2 ∪ R3)
- Removes duplicate tuples

### Set Difference (−)

**Set Difference** returns tuples that appear in the first relation but not in the second.

#### Syntax

```text
relation1 − relation2
```

#### Example

```text
Employees − Managers
```

This returns all employees who are not managers.

#### Properties

- Binary operation
- Both relations must have the same schema
- Not commutative: R1 − R2 ≠ R2 − R1
- Not associative

### Intersection (∩)

**Intersection** returns tuples that appear in both relations.

#### Syntax

```text
relation1 ∩ relation2
```

#### Example

```text
FullTimeEmployees ∩ DepartmentA
```

This returns employees who are both full-time and in Department A.

#### Properties

- Binary operation
- Both relations must have the same schema
- Commutative: R1 ∩ R2 = R2 ∩ R1
- Associative: (R1 ∩ R2) ∩ R3 = R1 ∩ (R2 ∩ R3)
- Can be expressed using other operations: R1 ∩ R2 = R1 − (R1 − R2)

## Derived Operations

Derived operations are built from combinations of basic operations and are essential for practical queries:

### Join (⋈)

**Join** combines tuples from two relations based on a join condition. It is one of the most important operations in relational algebra.

**Types of Joins:**

#### Natural Join

A **Natural Join** combines relations on their common attributes, automatically eliminating duplicate columns.

#### Syntax

```text
relation1 ⋈ relation2
```

#### Example

```text
Employees ⋈ Departments
```

This joins employees with departments based on matching department IDs.

#### Theta Join

A **Theta Join** combines tuples from two relations based on a specified condition using any comparison operator.

#### Syntax

```text
relation1 ⋈_condition relation2
```

#### Example

```text
Employees ⋈_(Employees.dept_id = Departments.id) Departments
```

#### Equi-Join

An **Equi-Join** is a theta join where the condition uses only equality.

#### Example

```text
Employees ⋈_(Employees.dept_id = Departments.id) Departments
```

#### Properties

- Binary operation
- Produces a Cartesian product filtered by the join condition
- Can be expressed as: `R1 ⋈_c R2 = σ_c(R1 × R2)`

### Outer Joins

**Outer Joins** preserve unmatched tuples from one or both relations:

#### Left Outer Join (⟕)

Retains all tuples from the left relation, padding with NULL values when no match exists in the right relation.

#### Example

```text
Employees ⟕ Departments
```

All employees are included, even those without assigned departments.

#### Right Outer Join (⟖)

Retains all tuples from the right relation, padding with NULL values when no match exists in the left relation.

#### Full Outer Join (⟛)

Retains all tuples from both relations, padding with NULL values where matches don't exist.

### Division (÷)

**Division** finds tuples in the first relation that are associated with all tuples in the second relation. It's useful for queries like "find all customers who have ordered every product."

#### Syntax

```text
relation1 ÷ relation2
```

#### Example

```text
Orders ÷ Products
```

This returns customers who have ordered every product.

#### Properties

- Binary operation
- Not commutative
- Complex operation, often decomposed into simpler operations

## Aggregate Functions

Relational algebra extends with aggregate functions for summarization:

### Aggregation (γ)

Computes a single value from a set of values.

**Common Aggregate Functions:**

- **COUNT**: Counts the number of tuples or non-null values
- **SUM**: Sums all values in a column
- **AVG**: Calculates the average of values
- **MIN**: Finds the minimum value
- **MAX**: Finds the maximum value

#### Syntax

```text
γ_aggregation_function(relation)
```

#### Example

```text
γ_COUNT(*), SUM(salary)(Employees)
```

### Grouping

Groups tuples based on specific attributes and applies aggregate functions to each group.

#### Syntax

```text
relation GROUP BY attributes AGGREGATION_FUNCTION
```

#### Example

```text
Employees GROUP BY department SUM(salary)
```

This calculates the total salary by department.

## Practical Examples

### Example 1: Find customers who live in "City A"

```text
σ_city="City A"(Customers)
```

This selection filters the `Customers` relation to only include rows where the `city` attribute equals "City A". It returns the full customer tuples (all columns) for those matching rows; equivalent SQL: `SELECT * FROM Customers WHERE city = 'City A'`.

### Example 2: Find names of customers and their orders

```text
Customers ⋈ Orders
```

This is an (inner) join between `Customers` and `Orders`. It pairs customer rows with their matching order rows (typically on `customer_id`), producing combined tuples that include fields from both relations. Equivalent SQL: `SELECT * FROM Customers JOIN Orders ON Customers.id = Orders.customer_id`.

### Example 3: Find names of customers who have placed orders for product "P1"

```text
π_name(Customers ⋈ (σ_product="P1"(Orders)))
```

Steps: 1) `σ_product="P1"(Orders)` filters orders for product P1. 2) Join with `Customers` to find matching customers. 3) `π_name(...)` projects only the customer `name`. Equivalent SQL: `SELECT DISTINCT c.name FROM Customers c JOIN Orders o ON c.id = o.customer_id WHERE o.product = 'P1'`.

### Example 4: Find customers who have ordered both Product A and Product B

```text
π_customer_id(σ_product="A"(Orders)) ∩ π_customer_id(σ_product="B"(Orders))
```

This computes two sets — customers who ordered product A and customers who ordered product B — and intersects them to produce customer IDs present in both sets: customers who ordered both A and B. Equivalent SQL: use `GROUP BY`+`HAVING` or two subqueries with `INTERSECT`.

### Example 5: Find total sales per month

```text
Sales GROUP BY month SUM(amount)
```

This groups the `Sales` relation by the `month` attribute and computes the sum of `amount` for each group. The result is one aggregated row per month with the total sales amount. Equivalent SQL: `SELECT month, SUM(amount) FROM Sales GROUP BY month`.

### Example 6: Find customers who have placed orders for all products

```text
π_customer_id, product_id(Orders) ÷ π_id(Products)
```

Division returns the set of customers who are associated with every value in the divisor relation (here, all product IDs). In other words, customers who have ordered every product. Equivalent SQL: `SELECT customer_id FROM Orders GROUP BY customer_id HAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM Products)`.

## Important Properties and Laws

### Commutative Operations

These operations produce the same result regardless of operand order:

- Union: R1 ∪ R2 = R2 ∪ R1
- Intersection: R1 ∩ R2 = R2 ∩ R2
- Cartesian Product: R1 × R2 = R2 × R1
- Join: R1 ⋈ R2 = R2 ⋈ R1

### Associative Operations

These operations can be grouped in any order:

- Union: (R1 ∪ R2) ∪ R3 = R1 ∪ (R2 ∪ R3)
- Intersection: (R1 ∩ R2) ∩ R3 = R1 ∩ (R2 ∩ R3)
- Cartesian Product: (R1 × R2) × R3 = R1 × (R2 × R3)
- Join: (R1 ⋈ R2) ⋈ R3 = R1 ⋈ (R2 ⋈ R3)

### Distributive Laws

Selection and projection distribute over some operations:

- Selection over Union: `σ_c(R1 ∪ R2) = σ_c(R1) ∪ σ_c(R2)`
- Selection over Intersection: `σ_c(R1 ∩ R2) = σ_c(R1) ∩ σ_c(R2)`
- Projection over Union: `π_a(R1 ∪ R2) = π_a(R1) ∪ π_a(R2)`

## Connection to SQL

Relational algebra is the theoretical foundation for SQL:

- **SELECT** clause corresponds to **Projection (π)**
- **WHERE** clause corresponds to **Selection (σ)**
- **FROM** clause with multiple tables corresponds to **Cartesian Product (×)**
- **JOIN** clause corresponds to **Join (⋈)**
- **UNION** clause corresponds to **Union (∪)**
- **GROUP BY** and aggregate functions correspond to **Aggregation and Grouping**

Understanding relational algebra helps in:

- Writing more efficient SQL queries
- Understanding how database optimizers work
- Designing better database schemas
- Analyzing query complexity and performance
