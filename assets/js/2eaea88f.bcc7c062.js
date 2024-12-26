"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[3839],{4965:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"databases/sql/sql","title":"SQL","description":"SQL is a computer language used to communicate and manage data within a relational database. It is used to perform tasks such as retrieving, inserting, updating, and deleting data.","source":"@site/docs/databases/sql/sql.md","sourceDirName":"databases/sql","slug":"/databases/sql/","permalink":"/docs/databases/sql/","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/sql/sql.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734168488000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/databases/introduction"},"next":{"title":"Introduction","permalink":"/docs/databases/database-engineering/introduction"}}');var i=s(4848),l=s(8453);const a={sidebar_position:1},t="SQL",o={},d=[{value:"Types of SQL",id:"types-of-sql",level:2},{value:"DDL (Data Definition Language)",id:"ddl-data-definition-language",level:3},{value:"DML (Data Manipulation Language)",id:"dml-data-manipulation-language",level:3},{value:"DQL (Data Query Language)",id:"dql-data-query-language",level:3},{value:"DCL (Data Control Language)",id:"dcl-data-control-language",level:3},{value:"TCL (Transaction Control Language)",id:"tcl-transaction-control-language",level:3},{value:"Basic SQL statements:",id:"basic-sql-statements",level:2},{value:"Aggregation Functions in SQL",id:"aggregation-functions-in-sql",level:2},{value:"GROUP BY in SQL",id:"group-by-in-sql",level:2},{value:"String, Date, and Time Operations in SQL",id:"string-date-and-time-operations-in-sql",level:2},{value:"Output Control and Redirection in SQL",id:"output-control-and-redirection-in-sql",level:2},{value:"Window Functions in SQL",id:"window-functions-in-sql",level:2},{value:"Common Window Functions",id:"common-window-functions",level:3},{value:"Window Frame",id:"window-frame",level:3},{value:"Examples",id:"examples",level:3},{value:"Ranking and Ranking with Ties",id:"ranking-and-ranking-with-ties",level:4},{value:"Running Totals and Moving Averages",id:"running-totals-and-moving-averages",level:4},{value:"Lead and Lag",id:"lead-and-lag",level:4},{value:"Additional Considerations",id:"additional-considerations",level:3},{value:"Nested Queries in SQL",id:"nested-queries-in-sql",level:2},{value:"Lateral Joins in SQL",id:"lateral-joins-in-sql",level:2},{value:"Joins in SQL",id:"joins-in-sql",level:2},{value:"Inner Join",id:"inner-join",level:3},{value:"Left Join",id:"left-join",level:3},{value:"Right Join",id:"right-join",level:3},{value:"Full Outer Join",id:"full-outer-join",level:3},{value:"Self Join",id:"self-join",level:3},{value:"Natural Join",id:"natural-join",level:3},{value:"Cross Join",id:"cross-join",level:3},{value:"Common Table Expressions (CTEs) in SQL",id:"common-table-expressions-ctes-in-sql",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sql",children:"SQL"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL"})," is a computer language used to communicate and manage data within a relational database. It is used to perform tasks such as retrieving, inserting, updating, and deleting data."]}),"\n",(0,i.jsx)(n.h2,{id:"types-of-sql",children:"Types of SQL"}),"\n",(0,i.jsx)(n.p,{children:"It's categorized into different types based on their functions:"}),"\n",(0,i.jsx)(n.h3,{id:"ddl-data-definition-language",children:"DDL (Data Definition Language)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to define the structure of a database, including creating, modifying, and deleting tables, indexes, and other database objects."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE INDEX"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP INDEX"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dml-data-manipulation-language",children:"DML (Data Manipulation Language)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to manipulate the data stored in a database, including inserting, updating, and deleting data."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"INSERT INTO"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UPDATE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DELETE FROM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SELECT"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dql-data-query-language",children:"DQL (Data Query Language)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to retrieve data from a database."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SELECT"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dcl-data-control-language",children:"DCL (Data Control Language)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to control access to and permissions within a database."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GRANT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"REVOKE"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tcl-transaction-control-language",children:"TCL (Transaction Control Language)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to manage transactions within a database."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"COMMIT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ROLLBACK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SAVEPOINT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RELEASE SAVEPOINT"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These different types of SQL work together to provide a comprehensive set of commands for managing databases and their data."}),"\n",(0,i.jsx)(n.h2,{id:"basic-sql-statements",children:"Basic SQL statements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CREATE TABLE:"})," Creates a new table in a database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"INSERT INTO:"})," Inserts new data into a table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UPDATE:"})," Updates existing data in a table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DELETE FROM:"})," Deletes data from a table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT:"})," Retrieves data from a table."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SQL is a powerful and versatile language that can be used to perform a wide variety of tasks with a database."}),"\n",(0,i.jsx)(n.h2,{id:"aggregation-functions-in-sql",children:"Aggregation Functions in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Aggregate functions are used to compute a single value that's derived from a bag of tuples or multiple tuples."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Core Five Aggregation Functions:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AVG:"})," Calculates the average value of a numeric column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MIN:"})," Returns the minimum value of a column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MAX:"})," Returns the maximum value of a column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SUM:"})," Calculates the sum of the values in a numeric column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"COUNT:"})," Counts the number of rows in a table or the number of non-null values in a column."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT AVG(salary) FROM employees;"})," - Calculates the average salary of all employees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT MIN(age) FROM students;"})," - Returns the minimum age of all students."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT MAX(height) FROM athletes;"})," - Returns the maximum height of all athletes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT SUM(sales) FROM orders;"})," - Calculates the total sales for all orders."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SELECT COUNT(*) FROM customers;"})," - Counts the total number of customers in the database."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Aggregation functions are essential for summarizing data and extracting meaningful information from a database."}),"\n",(0,i.jsx)(n.h2,{id:"group-by-in-sql",children:"GROUP BY in SQL"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"GROUP BY"})," clause in SQL is used to group rows that have the same values in specified columns. It is often used in conjunction with aggregate functions like ",(0,i.jsx)(n.code,{children:"SUM"}),", ",(0,i.jsx)(n.code,{children:"AVG"}),", ",(0,i.jsx)(n.code,{children:"COUNT"}),", ",(0,i.jsx)(n.code,{children:"MIN"}),", and ",(0,i.jsx)(n.code,{children:"MAX"})," to perform calculations on grouped data."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT column1, column2, aggregate_function(column3)\nFROM table_name\nGROUP BY column1, column2;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key points:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You cannot use columns in the ",(0,i.jsx)(n.code,{children:"SELECT"})," clause that are not included in the ",(0,i.jsx)(n.code,{children:"GROUP BY"})," clause, unless they are used within an aggregate function."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"HAVING"})," clause can be used to filter the grouped results based on conditions applied to the aggregate functions."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Calculate the total sales for each product:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT product_id, SUM(sales) AS total_sales\nFROM orders\nGROUP BY product_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Find the average salary for each department:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT department_id, AVG(salary) AS average_salary\nFROM employees\nGROUP BY department_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Count the number of orders placed by each customer:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT customer_id, COUNT(*) AS total_orders\nFROM orders\nGROUP BY customer_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Use ",(0,i.jsx)(n.code,{children:"HAVING"})," to filter the results:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT department_id, AVG(salary) AS average_salary\nFROM employees\nGROUP BY department_id\nHAVING AVG(salary) > 50000;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Additional notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can use multiple columns in the ",(0,i.jsx)(n.code,{children:"GROUP BY"})," clause to group data based on multiple criteria."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"WITH ROLLUP"})," clause can be used to add summary rows to the result set."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"CUBE"})," and ",(0,i.jsx)(n.code,{children:"GROUPING SETS"})," clauses can be used to create more complex grouping structures."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"GROUP BY"})," clause is a powerful tool for analyzing and summarizing data in SQL. By understanding how to use it effectively, you can gain valuable insights from your data."]}),"\n",(0,i.jsx)(n.h2,{id:"string-date-and-time-operations-in-sql",children:"String, Date, and Time Operations in SQL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"String Operations:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CONCAT:"})," Combines two or more strings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SUBSTRING:"})," Extracts a substring from a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LENGTH:"})," Returns the length of a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UPPER:"})," Converts a string to uppercase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LOWER:"})," Converts a string to lowercase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TRIM:"})," Removes leading and trailing whitespace from a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"REPLACE:"})," Replaces all occurrences of one string with another."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LIKE:"})," Matches a string pattern."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Date and Time Operations:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DATEADD:"})," Adds or subtracts a specified interval from a date or time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DATEDIFF:"})," Calculates the difference between two dates or times."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"YEAR:"})," Extracts the year from a date."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MONTH:"})," Extracts the month from a date."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DAY:"})," Extracts the day of the month from a date."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"HOUR:"})," Extracts the hour from a time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MINUTE:"})," Extracts the minute from a time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SECOND:"})," Extracts the second from a time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NOW:"})," Returns the current date and time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DATEPART:"})," Extracts a specific part of a date or time."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- String Operations\nSELECT CONCAT(first_name, ' ', last_name) AS full_name\nFROM customers;\n\nSELECT SUBSTRING(email, CHARINDEX('@', email) + 1, LEN(email)) AS domain\nFROM customers;\n\nSELECT LENGTH(address) AS address_length\nFROM orders;\n\nSELECT UPPER(city) AS city_uppercase\nFROM customers;\n\nSELECT TRIM(state) AS state_trimmed\nFROM customers;\n\nSELECT REPLACE(product_name, 'old_name', 'new_name') AS product_name_replaced\nFROM products;\n\nSELECT *\nFROM orders\nWHERE order_date LIKE '2023%';\n\n-- Date and Time Operations\nSELECT DATEADD(DAY, 30, order_date) AS ship_date\nFROM orders;\n\nSELECT DATEDIFF(DAY, order_date, ship_date) AS days_to_ship\nFROM orders;\n\nSELECT YEAR(order_date) AS order_year\nFROM orders;\n\nSELECT MONTH(order_date) AS order_month\nFROM orders;\n\nSELECT DAY(order_date) AS order_day\nFROM orders;\n\nSELECT HOUR(order_time) AS order_hour\nFROM orders;\n\nSELECT MINUTE(order_time) AS order_minute\nFROM orders;\n\nSELECT SECOND(order_time) AS order_second\nFROM orders;\n\nSELECT NOW() AS current_datetime;\n\nSELECT DATEPART(WEEKDAY, order_date) AS order_weekday\nFROM orders;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"output-control-and-redirection-in-sql",children:"Output Control and Redirection in SQL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output Control:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Formatting:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"FORMAT"})," or similar functions to format numeric and date values."]}),"\n",(0,i.jsx)(n.li,{children:"Control the number of decimal places, date formats, etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Aliasing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"AS"})," to give columns or expressions aliases for better readability."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ordering:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"ORDER BY"})," to sort the result set based on specific columns."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Redirection:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File Output:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Redirect the output of a SQL query to a file using operating system-specific commands (e.g., ",(0,i.jsx)(n.code,{children:">"}),", ",(0,i.jsx)(n.code,{children:">>"})," in Windows/Linux)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Variable Assignment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In some programming languages or SQL tools, you can assign the output of a query to a variable."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- Formatting\nSELECT FORMAT(salary, \'C2\') AS formatted_salary\nFROM employees;\n\n-- Aliasing\nSELECT first_name || \' \' || last_name AS full_name\nFROM customers;\n\n-- Ordering\nSELECT *\nFROM orders\nORDER BY order_date DESC;\n\n-- File Output (Windows/Linux)\nsqlcmd -S your_server -Q "SELECT * FROM customers" > customers.csv\n\n-- Variable Assignment (Python example using pyodbc)\nimport pyodbc\n\nconn = pyodbc.connect("Driver={ODBC Driver 17 for SQL Server};"\n                      "Server=your_server;"\n                      "Database=your_database;"\n                      "Trusted_Connection=yes;")\n\ncursor = conn.cursor()\ncursor.execute("SELECT COUNT(*) FROM orders")\nresult = cursor.fetchone()\ntotal_orders = result[0]\nprint("Total orders:", total_orders)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"window-functions-in-sql",children:"Window Functions in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Window functions are a powerful tool in SQL that allow you to perform calculations across rows of a result set, creating a virtual group of rows based on a specified window frame. This provides a flexible way to analyze and aggregate data without the need for subqueries or self-joins."}),"\n",(0,i.jsx)(n.h3,{id:"common-window-functions",children:"Common Window Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RANK:"})," Assigns a rank to each row within a partition, starting from 1. Ranks are assigned based on the specified ordering, and ties are assigned the same rank."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DENSE_RANK:"})," Similar to RANK, but assigns consecutive ranks even if there are ties."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ROW_NUMBER:"})," Assigns a sequential number to each row within a partition, starting from 1."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PERCENT_RANK:"})," Calculates the percentile rank of a row within a partition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CUME_DIST:"})," Calculates the cumulative distribution of a row within a partition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NTILE:"})," Divides the rows within a partition into a specified number of groups and assigns a group number to each row."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"window-frame",children:"Window Frame"}),"\n",(0,i.jsx)(n.p,{children:"The window frame defines the set of rows that the window function operates on. You can specify the frame using the following clauses:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ROWS BETWEEN:"})," Specifies a fixed number of rows before and after the current row."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RANGE BETWEEN:"})," Specifies a range of values before and after the current row's value."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"ranking-and-ranking-with-ties",children:"Ranking and Ranking with Ties"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT employee_id, department, salary,\n       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank,\n       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_salary_rank\nFROM employees;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"running-totals-and-moving-averages",children:"Running Totals and Moving Averages"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT order_id, order_date, sales,\n       SUM(sales) OVER (ORDER BY order_date) AS running_total,\n       AVG(sales) OVER (ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING) AS moving_average\nFROM orders;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"lead-and-lag",children:"Lead and Lag"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LEAD:"})," Accesses a value from a row that follows the current row."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LAG:"})," Accesses a value from a row that precedes the current row."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT product_id, product_name, price,\n       LEAD(price) OVER (ORDER BY product_id) AS next_price,\n       LAG(price) OVER (ORDER BY product_id) AS prev_price\nFROM products;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PARTITION BY:"})," Divides the result set into partitions based on specified columns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ORDER BY:"})," Orders the rows within each partition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NULL Handling:"})," You can specify a default value to be used if there are no rows in the window frame."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Window functions are a powerful tool for data analysis and can be used to solve a wide range of problems, including calculating running totals, moving averages, ranking, and more. By understanding the different window functions and how to use them effectively, you can gain valuable insights from your data."}),"\n",(0,i.jsx)(n.h2,{id:"nested-queries-in-sql",children:"Nested Queries in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Nested queries, also known as subqueries, are queries that are embedded within another query. They can be used to perform complex data manipulation and analysis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Types of Nested Queries:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Single-row subqueries:"})," Return a single value, which can be used in comparison operators or arithmetic expressions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multiple-row subqueries:"})," Return multiple rows, which can be used in comparison operators, IN/NOT IN clauses, or EXISTS/NOT EXISTS clauses."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Correlated subqueries:"})," Reference a column from the outer query, making the subquery dependent on the outer query's results."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Single-row subquery:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT employee_id, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Multiple-row subquery"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT department_id, department_name\nFROM departments\nWHERE department_id IN (SELECT department_id FROM employees);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Correlated subquery"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT employee_id, first_name, last_name, department_id\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Common Use Cases:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filtering data:"})," Using subqueries to filter data based on specific conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Calculating derived values:"})," Using subqueries to calculate derived values, such as averages, sums, or counts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Joining tables:"})," Using subqueries to join tables based on conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditional logic:"})," Using EXISTS/NOT EXISTS clauses to check for the existence of data in subqueries."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Tips for Using Nested Queries:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep subqueries simple and efficient."}),"\n",(0,i.jsx)(n.li,{children:"Avoid correlated subqueries if possible, as they can be less performant."}),"\n",(0,i.jsx)(n.li,{children:"Use aliases for clarity when dealing with nested queries."}),"\n",(0,i.jsx)(n.li,{children:"Test your nested queries thoroughly to ensure they produce the correct results."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lateral-joins-in-sql",children:"Lateral Joins in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Lateral joins, also known as side-effect joins or derived table joins, are a powerful feature in SQL that allow you to join a subquery to the outer query based on the current row of the outer query. This is particularly useful when you need to perform calculations or lookups on a per-row basis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT ...\nFROM table_name AS t1\nJOIN LATERAL (subquery) AS t2 ON t1.column = t2.column;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key points:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The subquery is evaluated for each row of the outer query."}),"\n",(0,i.jsx)(n.li,{children:"The subquery can reference columns from the outer query."}),"\n",(0,i.jsx)(n.li,{children:"The join condition is evaluated between the outer query and the subquery."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Calculate the running total of sales for each order:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT order_id, order_date, sales,\n       SUM(sales) OVER (ORDER BY order_date) AS running_total\nFROM orders;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Equivalent using a lateral join:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT order_id, order_date, sales,\n       (SELECT SUM(o2.sales)\n        FROM orders o2\n        WHERE o2.order_date <= o1.order_date) AS running_total\nFROM orders AS o1;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Find the most recent order for each customer:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT customer_id,\n       (SELECT order_id\n        FROM orders o2\n        WHERE o2.customer_id = o1.customer_id\n        ORDER BY o2.order_date DESC\n        LIMIT 1) AS most_recent_order\nFROM customers AS o1;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Benefits of lateral joins:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved readability and maintainability."}),"\n",(0,i.jsx)(n.li,{children:"Can be more efficient than correlated subqueries in certain cases."}),"\n",(0,i.jsx)(n.li,{children:"Provide a flexible way to perform calculations and lookups on a per-row basis."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Limitations:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not supported in all SQL dialects."}),"\n",(0,i.jsx)(n.li,{children:"Can be less performant than other approaches in some scenarios."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lateral joins are a valuable tool for SQL developers, and understanding how to use them can help you write more efficient and expressive queries."}),"\n",(0,i.jsx)(n.h2,{id:"joins-in-sql",children:"Joins in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Joins are used to combine rows from two or more tables based on a related column between them. There are several types of joins in SQL:"}),"\n",(0,i.jsx)(n.h3,{id:"inner-join",children:"Inner Join"}),"\n",(0,i.jsx)(n.p,{children:"Returns rows that have matching values in both tables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nINNER JOIN table2 ON table1.column = table2.column;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"left-join",children:"Left Join"}),"\n",(0,i.jsx)(n.p,{children:"Returns all rows from the left table, even if there are no matches in the right table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nLEFT JOIN table2 ON table1.column = table2.column;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"right-join",children:"Right Join"}),"\n",(0,i.jsx)(n.p,{children:"Returns all rows from the right table, even if there are no matches in the left table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nRIGHT JOIN table2 ON table1.column = table2.column;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"full-outer-join",children:"Full Outer Join"}),"\n",(0,i.jsx)(n.p,{children:"Returns all rows when there is a match in either left or right table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nFULL OUTER JOIN table2 ON table1.column = table2.column;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"self-join",children:"Self Join"}),"\n",(0,i.jsx)(n.p,{children:"Joins a table with itself based on a common column."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT e1.employee_id, e1.manager_id, e2.first_name AS manager_name\nFROM employees e1\nJOIN employees e2 ON e1.manager_id = e2.employee_id;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"natural-join",children:"Natural Join"}),"\n",(0,i.jsx)(n.p,{children:"Automatically joins tables on columns with the same name and data type."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nNATURAL JOIN table2;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cross-join",children:"Cross Join"}),"\n",(0,i.jsx)(n.p,{children:"Returns the Cartesian product of all rows from both tables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM table1\nCROSS JOIN table2;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Choosing the right join:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"INNER JOIN"})," when you only want to return rows that have matching values in both tables."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"LEFT JOIN"})," or ",(0,i.jsx)(n.code,{children:"RIGHT JOIN"})," when you want to return all rows from one table, even if there are no matches in the other table."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"FULL OUTER JOIN"})," when you want to return all rows from both tables, regardless of whether there are matches."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"SELF JOIN"})," to join a table with itself based on a common column."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"NATURAL JOIN"})," as a shortcut for joining tables on columns with the same name and data type."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"CROSS JOIN"})," to create a Cartesian product of all rows from both tables."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-table-expressions-ctes-in-sql",children:"Common Table Expressions (CTEs) in SQL"}),"\n",(0,i.jsx)(n.p,{children:"Common Table Expressions (CTEs) are temporary result sets defined within a SQL statement. They provide a way to break down complex queries into smaller, more manageable parts, making them easier to read, write, and maintain."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"WITH cte_name AS (\n  SELECT ...\n  FROM ...\n  WHERE ...\n)\nSELECT ...\nFROM cte_name;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key points:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CTEs are defined using the ",(0,i.jsx)(n.code,{children:"WITH"})," clause."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"cte_name"})," is a temporary name given to the result set."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"SELECT"})," statement within the CTE defines the columns and data that will be included in the result set."]}),"\n",(0,i.jsx)(n.li,{children:"The CTE can be referenced multiple times in the main query."}),"\n",(0,i.jsx)(n.li,{children:"CTEs are recursive, meaning they can reference themselves."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Recursive CTE to calculate the factorial of a number:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"WITH RECURSIVE factorial AS (\n  SELECT 0 AS n, 1 AS factorial\n  UNION ALL\n  SELECT n + 1, (n + 1) * factorial\n  FROM factorial\n  WHERE n < 5\n)\nSELECT n, factorial\nFROM factorial;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CTE to find the hierarchical structure of employees:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"WITH RECURSIVE employees_hierarchy AS (\n  SELECT employee_id, manager_id, first_name, last_name, 0 AS level\n  FROM employees\n  WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.employee_id, e.manager_id, e.first_name, e.last_name, eh.level + 1\n  FROM employees e\n  JOIN employees_hierarchy eh ON e.manager_id = eh.employee_id\n)\nSELECT *\nFROM employees_hierarchy;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Benefits of using CTEs:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved readability and maintainability of complex queries."}),"\n",(0,i.jsx)(n.li,{children:"Simplified query writing by breaking down queries into smaller parts."}),"\n",(0,i.jsx)(n.li,{children:"Enhanced performance in some cases, especially when using recursive CTEs."}),"\n",(0,i.jsx)(n.li,{children:"Ability to reuse the same result set multiple times within a query."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CTEs are a valuable tool for SQL developers, and understanding how to use them can help you write more efficient and expressive queries."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var r=s(6540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);