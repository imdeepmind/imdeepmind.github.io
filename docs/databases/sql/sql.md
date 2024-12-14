---
sidebar_position: 1
---


# SQL

**SQL** is a computer language used to communicate and manage data within a relational database. It is used to perform tasks such as retrieving, inserting, updating, and deleting data.

## Types of SQL

It's categorized into different types based on their functions:

### DDL (Data Definition Language)
* Used to define the structure of a database, including creating, modifying, and deleting tables, indexes, and other database objects.
* **Examples:**
  * `CREATE TABLE`
  * `ALTER TABLE`
  * `DROP TABLE`
  * `CREATE INDEX`
  * `DROP INDEX`

### DML (Data Manipulation Language)
* Used to manipulate the data stored in a database, including inserting, updating, and deleting data.
* **Examples:**
  * `INSERT INTO`
  * `UPDATE`
  * `DELETE FROM`
  * `SELECT`

### DQL (Data Query Language)
* Used to retrieve data from a database.
* **Examples:**
  * `SELECT`

### DCL (Data Control Language)
* Used to control access to and permissions within a database.
* **Examples:**
  * `GRANT`
  * `REVOKE`

### TCL (Transaction Control Language)
* Used to manage transactions within a database.
* **Examples:**
  * `COMMIT`
  * `ROLLBACK`
  * `SAVEPOINT`
  * `RELEASE SAVEPOINT`

These different types of SQL work together to provide a comprehensive set of commands for managing databases and their data.

## Basic SQL statements:

* **CREATE TABLE:** Creates a new table in a database.
* **INSERT INTO:** Inserts new data into a table.
* **UPDATE:** Updates existing data in a table.
* **DELETE FROM:** Deletes data from a table.
* **SELECT:** Retrieves data from a table.

SQL is a powerful and versatile language that can be used to perform a wide variety of tasks with a database.

## Aggregation Functions in SQL

Aggregate functions are used to compute a single value that's derived from a bag of tuples or multiple tuples.

**Core Five Aggregation Functions:**

* **AVG:** Calculates the average value of a numeric column.
* **MIN:** Returns the minimum value of a column.
* **MAX:** Returns the maximum value of a column.
* **SUM:** Calculates the sum of the values in a numeric column.
* **COUNT:** Counts the number of rows in a table or the number of non-null values in a column.

**Examples:**

* **SELECT AVG(salary) FROM employees;** - Calculates the average salary of all employees.
* **SELECT MIN(age) FROM students;** - Returns the minimum age of all students.
* **SELECT MAX(height) FROM athletes;** - Returns the maximum height of all athletes.
* **SELECT SUM(sales) FROM orders;** - Calculates the total sales for all orders.
* **SELECT COUNT(*) FROM customers;** - Counts the total number of customers in the database.

Aggregation functions are essential for summarizing data and extracting meaningful information from a database.

## GROUP BY in SQL

The `GROUP BY` clause in SQL is used to group rows that have the same values in specified columns. It is often used in conjunction with aggregate functions like `SUM`, `AVG`, `COUNT`, `MIN`, and `MAX` to perform calculations on grouped data.

**Syntax:**

```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
GROUP BY column1, column2;
```

**Key points:**

-   You cannot use columns in the `SELECT` clause that are not included in the `GROUP BY` clause, unless they are used within an aggregate function.
-   The `HAVING` clause can be used to filter the grouped results based on conditions applied to the aggregate functions.

**Examples:**

**Calculate the total sales for each product:**
```sql
SELECT product_id, SUM(sales) AS total_sales
FROM orders
GROUP BY product_id;
```
**Find the average salary for each department:**
```sql
SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;
```
**Count the number of orders placed by each customer:**
```sql
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id;
```

**Use `HAVING` to filter the results:**
```sql
SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;
```
**Additional notes:**

-   You can use multiple columns in the `GROUP BY` clause to group data based on multiple criteria.
-   The `WITH ROLLUP` clause can be used to add summary rows to the result set.
-   The `CUBE` and `GROUPING SETS` clauses can be used to create more complex grouping structures.

The `GROUP BY` clause is a powerful tool for analyzing and summarizing data in SQL. By understanding how to use it effectively, you can gain valuable insights from your data.

## String, Date, and Time Operations in SQL

**String Operations:**

* **CONCAT:** Combines two or more strings.
* **SUBSTRING:** Extracts a substring from a string.
* **LENGTH:** Returns the length of a string.
* **UPPER:** Converts a string to uppercase.
* **LOWER:** Converts a string to lowercase.
* **TRIM:** Removes leading and trailing whitespace from a string.
* **REPLACE:** Replaces all occurrences of one string with another.
* **LIKE:** Matches a string pattern.

**Date and Time Operations:**

* **DATEADD:** Adds or subtracts a specified interval from a date or time.
* **DATEDIFF:** Calculates the difference between two dates or times.
* **YEAR:** Extracts the year from a date.
* **MONTH:** Extracts the month from a date.
* **DAY:** Extracts the day of the month from a date.
* **HOUR:** Extracts the hour from a time.
* **MINUTE:** Extracts the minute from a time.
* **SECOND:** Extracts the second from a time.
* **NOW:** Returns the current date and time.
* **DATEPART:** Extracts a specific part of a date or time.

**Examples:**

```sql
-- String Operations
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customers;

SELECT SUBSTRING(email, CHARINDEX('@', email) + 1, LEN(email)) AS domain
FROM customers;

SELECT LENGTH(address) AS address_length
FROM orders;

SELECT UPPER(city) AS city_uppercase
FROM customers;

SELECT TRIM(state) AS state_trimmed
FROM customers;

SELECT REPLACE(product_name, 'old_name', 'new_name') AS product_name_replaced
FROM products;

SELECT *
FROM orders
WHERE order_date LIKE '2023%';

-- Date and Time Operations
SELECT DATEADD(DAY, 30, order_date) AS ship_date
FROM orders;

SELECT DATEDIFF(DAY, order_date, ship_date) AS days_to_ship
FROM orders;

SELECT YEAR(order_date) AS order_year
FROM orders;

SELECT MONTH(order_date) AS order_month
FROM orders;

SELECT DAY(order_date) AS order_day
FROM orders;

SELECT HOUR(order_time) AS order_hour
FROM orders;

SELECT MINUTE(order_time) AS order_minute
FROM orders;

SELECT SECOND(order_time) AS order_second
FROM orders;

SELECT NOW() AS current_datetime;

SELECT DATEPART(WEEKDAY, order_date) AS order_weekday
FROM orders;
```

## Output Control and Redirection in SQL

**Output Control:**

* **Formatting:**
  * Use `FORMAT` or similar functions to format numeric and date values.
  * Control the number of decimal places, date formats, etc.
* **Aliasing:**
  * Use `AS` to give columns or expressions aliases for better readability.
* **Ordering:**
  * Use `ORDER BY` to sort the result set based on specific columns.

**Redirection:**

* **File Output:**
  * Redirect the output of a SQL query to a file using operating system-specific commands (e.g., `>`, `>>` in Windows/Linux).
* **Variable Assignment:**
  * In some programming languages or SQL tools, you can assign the output of a query to a variable.

**Examples:**

```sql
-- Formatting
SELECT FORMAT(salary, 'C2') AS formatted_salary
FROM employees;

-- Aliasing
SELECT first_name || ' ' || last_name AS full_name
FROM customers;

-- Ordering
SELECT *
FROM orders
ORDER BY order_date DESC;

-- File Output (Windows/Linux)
sqlcmd -S your_server -Q "SELECT * FROM customers" > customers.csv

-- Variable Assignment (Python example using pyodbc)
import pyodbc

conn = pyodbc.connect("Driver={ODBC Driver 17 for SQL Server};"
                      "Server=your_server;"
                      "Database=your_database;"
                      "Trusted_Connection=yes;")

cursor = conn.cursor()
cursor.execute("SELECT COUNT(*) FROM orders")
result = cursor.fetchone()
total_orders = result[0]
print("Total orders:", total_orders)
```

## Window Functions in SQL

Window functions are a powerful tool in SQL that allow you to perform calculations across rows of a result set, creating a virtual group of rows based on a specified window frame. This provides a flexible way to analyze and aggregate data without the need for subqueries or self-joins.

### Common Window Functions

* **RANK:** Assigns a rank to each row within a partition, starting from 1. Ranks are assigned based on the specified ordering, and ties are assigned the same rank.
* **DENSE_RANK:** Similar to RANK, but assigns consecutive ranks even if there are ties.
* **ROW_NUMBER:** Assigns a sequential number to each row within a partition, starting from 1.
* **PERCENT_RANK:** Calculates the percentile rank of a row within a partition.
* **CUME_DIST:** Calculates the cumulative distribution of a row within a partition.
* **NTILE:** Divides the rows within a partition into a specified number of groups and assigns a group number to each row.

### Window Frame

The window frame defines the set of rows that the window function operates on. You can specify the frame using the following clauses:

* **ROWS BETWEEN:** Specifies a fixed number of rows before and after the current row.
* **RANGE BETWEEN:** Specifies a range of values before and after the current row's value.

### Examples

#### Ranking and Ranking with Ties

```sql
SELECT employee_id, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank,
       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_salary_rank
FROM employees;
```

#### Running Totals and Moving Averages
```sql
SELECT order_id, order_date, sales,
       SUM(sales) OVER (ORDER BY order_date) AS running_total,
       AVG(sales) OVER (ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING) AS moving_average
FROM orders;
```

#### Lead and Lag

-   **LEAD:** Accesses a value from a row that follows the current row.
-   **LAG:** Accesses a value from a row that precedes the current row.

```sql
SELECT product_id, product_name, price,
       LEAD(price) OVER (ORDER BY product_id) AS next_price,
       LAG(price) OVER (ORDER BY product_id) AS prev_price
FROM products;
```

### Additional Considerations

-   **PARTITION BY:** Divides the result set into partitions based on specified columns.
-   **ORDER BY:** Orders the rows within each partition.
-   **NULL Handling:** You can specify a default value to be used if there are no rows in the window frame.

Window functions are a powerful tool for data analysis and can be used to solve a wide range of problems, including calculating running totals, moving averages, ranking, and more. By understanding the different window functions and how to use them effectively, you can gain valuable insights from your data.


## Nested Queries in SQL

Nested queries, also known as subqueries, are queries that are embedded within another query. They can be used to perform complex data manipulation and analysis.

**Types of Nested Queries:**

1. **Single-row subqueries:** Return a single value, which can be used in comparison operators or arithmetic expressions.
2. **Multiple-row subqueries:** Return multiple rows, which can be used in comparison operators, IN/NOT IN clauses, or EXISTS/NOT EXISTS clauses.
3. **Correlated subqueries:** Reference a column from the outer query, making the subquery dependent on the outer query's results.

**Examples:**

**Single-row subquery:**

```sql
SELECT employee_id, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

**Multiple-row subquery**:
```sql
SELECT department_id, department_name
FROM departments
WHERE department_id IN (SELECT department_id FROM employees);
```

**Correlated subquery**:
```sql
SELECT employee_id, first_name, last_name, department_id
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);
```

**Common Use Cases:**

-   **Filtering data:** Using subqueries to filter data based on specific conditions.
-   **Calculating derived values:** Using subqueries to calculate derived values, such as averages, sums, or counts.
-   **Joining tables:** Using subqueries to join tables based on conditions.
-   **Conditional logic:** Using EXISTS/NOT EXISTS clauses to check for the existence of data in subqueries.

**Tips for Using Nested Queries:**

-   Keep subqueries simple and efficient.
-   Avoid correlated subqueries if possible, as they can be less performant.
-   Use aliases for clarity when dealing with nested queries.
-   Test your nested queries thoroughly to ensure they produce the correct results.

## Lateral Joins in SQL

Lateral joins, also known as side-effect joins or derived table joins, are a powerful feature in SQL that allow you to join a subquery to the outer query based on the current row of the outer query. This is particularly useful when you need to perform calculations or lookups on a per-row basis.

**Syntax:**

```sql
SELECT ...
FROM table_name AS t1
JOIN LATERAL (subquery) AS t2 ON t1.column = t2.column;
```

**Key points:**

-   The subquery is evaluated for each row of the outer query.
-   The subquery can reference columns from the outer query.
-   The join condition is evaluated between the outer query and the subquery.

**Examples:**

**Calculate the running total of sales for each order:**

```sql
SELECT order_id, order_date, sales,
       SUM(sales) OVER (ORDER BY order_date) AS running_total
FROM orders;
```

**Equivalent using a lateral join:**

```sql
SELECT order_id, order_date, sales,
       (SELECT SUM(o2.sales)
        FROM orders o2
        WHERE o2.order_date <= o1.order_date) AS running_total
FROM orders AS o1;
```

**Find the most recent order for each customer:**
```sql
SELECT customer_id,
       (SELECT order_id
        FROM orders o2
        WHERE o2.customer_id = o1.customer_id
        ORDER BY o2.order_date DESC
        LIMIT 1) AS most_recent_order
FROM customers AS o1;
```
**Benefits of lateral joins:**

-   Improved readability and maintainability.
-   Can be more efficient than correlated subqueries in certain cases.
-   Provide a flexible way to perform calculations and lookups on a per-row basis.

**Limitations:**

-   Not supported in all SQL dialects.
-   Can be less performant than other approaches in some scenarios.

Lateral joins are a valuable tool for SQL developers, and understanding how to use them can help you write more efficient and expressive queries.

## Joins in SQL

Joins are used to combine rows from two or more tables based on a related column between them. There are several types of joins in SQL:

### Inner Join

Returns rows that have matching values in both tables.

```sql
SELECT *
FROM table1
INNER JOIN table2 ON table1.column = table2.column;
```

### Left Join

Returns all rows from the left table, even if there are no matches in the right table.
```sql
SELECT *
FROM table1
LEFT JOIN table2 ON table1.column = table2.column;
```

### Right Join

Returns all rows from the right table, even if there are no matches in the left table.

```sql
SELECT *
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column;
```

### Full Outer Join

Returns all rows when there is a match in either left or right table.

```sql
SELECT *
FROM table1
FULL OUTER JOIN table2 ON table1.column = table2.column;
```

### Self Join

Joins a table with itself based on a common column.

```sql
SELECT e1.employee_id, e1.manager_id, e2.first_name AS manager_name
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.employee_id;
```

### Natural Join

Automatically joins tables on columns with the same name and data type.

```sql
SELECT *
FROM table1
NATURAL JOIN table2;
```

### Cross Join

Returns the Cartesian product of all rows from both tables.

```sql
SELECT *
FROM table1
CROSS JOIN table2;
```

**Choosing the right join:**

-   Use `INNER JOIN` when you only want to return rows that have matching values in both tables.
-   Use `LEFT JOIN` or `RIGHT JOIN` when you want to return all rows from one table, even if there are no matches in the other table.
-   Use `FULL OUTER JOIN` when you want to return all rows from both tables, regardless of whether there are matches.
-   Use `SELF JOIN` to join a table with itself based on a common column.
-   Use `NATURAL JOIN` as a shortcut for joining tables on columns with the same name and data type.
-   Use `CROSS JOIN` to create a Cartesian product of all rows from both tables.

## Common Table Expressions (CTEs) in SQL

Common Table Expressions (CTEs) are temporary result sets defined within a SQL statement. They provide a way to break down complex queries into smaller, more manageable parts, making them easier to read, write, and maintain.

**Syntax:**

```sql
WITH cte_name AS (
  SELECT ...
  FROM ...
  WHERE ...
)
SELECT ...
FROM cte_name;
```

**Key points:**

-   CTEs are defined using the `WITH` clause.
-   The `cte_name` is a temporary name given to the result set.
-   The `SELECT` statement within the CTE defines the columns and data that will be included in the result set.
-   The CTE can be referenced multiple times in the main query.
-   CTEs are recursive, meaning they can reference themselves.

**Examples:**

**Recursive CTE to calculate the factorial of a number:**
```sql
WITH RECURSIVE factorial AS (
  SELECT 0 AS n, 1 AS factorial
  UNION ALL
  SELECT n + 1, (n + 1) * factorial
  FROM factorial
  WHERE n < 5
)
SELECT n, factorial
FROM factorial;
```

**CTE to find the hierarchical structure of employees:**
```sql
WITH RECURSIVE employees_hierarchy AS (
  SELECT employee_id, manager_id, first_name, last_name, 0 AS level
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.employee_id, e.manager_id, e.first_name, e.last_name, eh.level + 1
  FROM employees e
  JOIN employees_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT *
FROM employees_hierarchy;
```

**Benefits of using CTEs:**

-   Improved readability and maintainability of complex queries.
-   Simplified query writing by breaking down queries into smaller parts.
-   Enhanced performance in some cases, especially when using recursive CTEs.
-   Ability to reuse the same result set multiple times within a query.

CTEs are a valuable tool for SQL developers, and understanding how to use them can help you write more efficient and expressive queries.