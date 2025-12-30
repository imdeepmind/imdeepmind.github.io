---
sidebar_position: 4
---

# GROUP BY Queries

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

The `GROUP BY` clause in SQL groups rows that have the same values in one or more columns. We mainly use it along with **aggregate functions** (like `SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()`) to compute summary statistics for each group.

It helps us transform **row-level data** into **aggregated insights**, like "total sales per region" or "average salary per department".

Without `GROUP BY`, aggregate functions treat the entire dataset as one group. With it, we can compute aggregates for each unique value or combination of values.

## Basic Syntax

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

**Key points:**

- Every column in the `SELECT` clause must either appear in the `GROUP BY` clause or be used inside an aggregate function.
- The `GROUP BY` clause always appears **after WHERE** but **before HAVING and ORDER BY**.

## Basic Example

Let's say we have a table `sales`:

| region | product | amount |
| ------ | ------- | ------ |
| East   | Apple   | 100    |
| West   | Orange  | 200    |
| East   | Apple   | 150    |
| West   | Banana  | 50     |

**Query:**

```sql
SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region;
```

**Output:**

| region | total_sales |
| ------ | ----------- |
| East   | 250         |
| West   | 250         |

The `GROUP BY region` clause combines rows with the same region and applies `SUM()` on the `amount` column for each group. Pretty straightforward!

## GROUP BY with Multiple Columns

We can group by multiple columns to create **nested** or **hierarchical groupings** - this is super useful for more complex analysis.

```sql
SELECT region, product, SUM(amount) AS total_sales
FROM sales
GROUP BY region, product;
```

**Output:**

| region | product | total_sales |
| ------ | ------- | ----------- |
| East   | Apple   | 250         |
| West   | Banana  | 50          |
| West   | Orange  | 200         |

Here, grouping happens for each `(region, product)` pair - so we get totals for each unique combination.

## GROUP BY with WHERE and HAVING

Both `WHERE` and `HAVING` are used for filtering, but they act at **different stages**:

| Clause | Filters                 | Stage           |
| ------ | ----------------------- | --------------- |
| WHERE  | Rows (before grouping)  | Before grouping |
| HAVING | Groups (after grouping) | After grouping  |

**Example:**

```sql
SELECT region, SUM(amount) AS total_sales
FROM sales
WHERE amount > 50
GROUP BY region
HAVING SUM(amount) > 200;
```

**Explanation:**

- `WHERE` filters out rows where `amount <= 50` (happens before grouping).
- Then rows are grouped by `region`.
- Finally, `HAVING` filters out groups whose `SUM(amount)` is not greater than 200 (happens after grouping).

## GROUP BY with ORDER BY

We can sort aggregated results using `ORDER BY`.

```sql
SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region
ORDER BY total_sales DESC;
```

This sorts the groups by total sales in descending order - useful for finding top performers.

## GROUP BY with Aliases and Expressions

We can also group by computed or derived values - not just raw columns.

```sql
SELECT UPPER(region) AS region_upper, SUM(amount)
FROM sales
GROUP BY UPPER(region);
```

Here, grouping is done based on the uppercase form of region names - this normalizes the data before grouping.

## GROUP BY with Column Position

Some databases let us group by the **position** of the column in the `SELECT` list - though this isn't always recommended for readability.

```sql
SELECT region, product, SUM(amount)
FROM sales
GROUP BY 1, 2;
```

This groups by the first and second selected columns (`region` and `product`).

**Note:**

- MySQL, PostgreSQL, and Oracle support this.
- SQL Server discourages it and recommends explicit column names (which is generally better practice anyway).

## GROUPING SETS, ROLLUP, and CUBE

When we need multiple groupings in a single query, instead of using multiple `UNION` queries, we can use **GROUPING SETS**, **ROLLUP**, or **CUBE**.
These are part of the SQL:1999 standard and make our lives much easier!

### GROUPING SETS

`GROUPING SETS` allows explicit specification of multiple independent grouping combinations in a single query.

```sql
SELECT region, product, SUM(amount) AS total_sales
FROM sales
GROUP BY GROUPING SETS ((region), (product), ());
```

**Result:**

| region | product | total_sales |
| ------ | ------- | ----------- |
| East   | NULL    | 250         |
| West   | NULL    | 250         |
| NULL   | Apple   | 250         |
| NULL   | Orange  | 200         |
| NULL   | Banana  | 50          |
| NULL   | NULL    | 550         |

**Explanation:**

- `(region)` → groups by region.
- `(product)` → groups by product.
- `()` → represents a grand total (no grouping).

This is equivalent to doing:

```sql
SELECT region, NULL AS product, SUM(amount) FROM sales GROUP BY region
UNION ALL
SELECT NULL AS region, product, SUM(amount) FROM sales GROUP BY product
UNION ALL
SELECT NULL, NULL, SUM(amount) FROM sales;
```

but in a single, efficient query - way cleaner!

### ROLLUP

`ROLLUP` is used for **hierarchical subtotals** — it performs a **top-down** aggregation from detailed to summary levels.

```sql
SELECT region, product, SUM(amount) AS total_sales
FROM sales
GROUP BY ROLLUP(region, product);
```

**Result:**

| region | product | total_sales |
| ------ | ------- | ----------- |
| East   | Apple   | 250         |
| East   | NULL    | 250         |
| West   | Banana  | 50          |
| West   | Orange  | 200         |
| West   | NULL    | 250         |
| NULL   | NULL    | 500         |

**Explanation:**

- `(region, product)` → specific combinations.
- `(region)` → subtotal per region.
- `()` → grand total.

Thus, `ROLLUP` gives cumulative totals up the hierarchy.

### CUBE

`CUBE` creates **all possible grouping combinations**, producing a **multidimensional aggregation** (cross-tabulated summary).

```sql
SELECT region, product, SUM(amount) AS total_sales
FROM sales
GROUP BY CUBE(region, product);
```

**Result:**

| region | product | total_sales |
| ------ | ------- | ----------- |
| East   | Apple   | 250         |
| East   | NULL    | 250         |
| West   | Banana  | 50          |
| West   | Orange  | 200         |
| West   | NULL    | 250         |
| NULL   | Apple   | 250         |
| NULL   | Banana  | 50          |
| NULL   | Orange  | 200         |
| NULL   | NULL    | 550         |

**Explanation:**

- Includes all group combinations:

  - `(region, product)` — detailed
  - `(region)` — subtotal per region
  - `(product)` — subtotal per product
  - `()` — grand total

`CUBE` is ideal for multidimensional analytics (like pivot tables) - it gives us all possible combinations.

### GROUPING() and GROUPING_ID()

In `ROLLUP` and `CUBE`, `NULL` values may appear for subtotals. To differentiate between a real `NULL` and an aggregated subtotal, SQL provides the `GROUPING()` function.

```sql
SELECT region, product,
       SUM(amount) AS total_sales,
       GROUPING(region) AS g_region,
       GROUPING(product) AS g_product
FROM sales
GROUP BY CUBE(region, product);
```

**Output:**

| region | product | total_sales | g_region | g_product |
| ------ | ------- | ----------- | -------- | --------- |
| East   | Apple   | 250         | 0        | 0         |
| East   | NULL    | 250         | 0        | 1         |
| NULL   | Apple   | 250         | 1        | 0         |
| NULL   | NULL    | 550         | 1        | 1         |

If `GROUPING(column)` = 1, that column's value is the result of aggregation (not a real data value) - this helps us distinguish between actual NULLs and aggregated subtotals.

`GROUPING_ID()` (supported in SQL Server, Oracle, and PostgreSQL) combines multiple grouping flags into a single integer bitmask for complex analysis.

## Differences Across Databases

| Feature                      | PostgreSQL                         | MySQL                    | SQL Server      | Oracle          |
| ---------------------------- | ---------------------------------- | ------------------------ | --------------- | --------------- |
| **Basic GROUP BY**           | Fully supported                    | Fully supported          | Fully supported | Fully supported |
| **GROUPING SETS**            | Supported                          | Supported (since 8.0.18) | Supported       | Supported       |
| **ROLLUP**                   | Supported                          | Supported                | Supported       | Supported       |
| **CUBE**                     | Supported                          | Supported (since 8.0.18) | Supported       | Supported       |
| **GROUPING()**               | Supported                          | Supported                | Supported       | Supported       |
| **GROUPING_ID()**            | Supported                          | Not supported            | Supported       | Supported       |
| **HAVING without GROUP BY**  | Supported                          | Supported                | Supported       | Supported       |
| **Alias in GROUP BY**        | Not allowed (must use column name) | Allowed                  | Allowed         | Allowed         |
| **Column position grouping** | Supported                          | Supported                | Discouraged     | Supported       |

**Notes:**

- MySQL < 8.0 didn’t support `ROLLUP`, `CUBE`, or `GROUPING SETS`.
- PostgreSQL adheres closely to the SQL standard and is strict about alias usage.
- Oracle and SQL Server provide additional analytic extensions like `GROUPING_ID()` and better optimizer handling for rollups.
