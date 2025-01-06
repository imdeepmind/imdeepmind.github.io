"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[9510],{99474:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"databases/database-engineering/query-optimization","title":"Query Optimization","description":"Query optimization is crucial for improving the performance of database systems. Below are key techniques and how to analyze query performance using tools like EXPLAIN and EXPLAIN ANALYZE in PostgreSQL.","source":"@site/docs/databases/database-engineering/query-optimization.md","sourceDirName":"databases/database-engineering","slug":"/databases/database-engineering/query-optimization","permalink":"/docs/databases/database-engineering/query-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-engineering/query-optimization.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735294169000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Indexes","permalink":"/docs/databases/database-engineering/indexes"},"next":{"title":"Partitioning","permalink":"/docs/databases/database-engineering/partitioning"}}');var t=i(74848),l=i(28453);const r={sidebar_position:7},a="Query Optimization",d={},o=[{value:"General Query Optimization Techniques",id:"general-query-optimization-techniques",level:2},{value:"Use Indexes Effectively",id:"use-indexes-effectively",level:3},{value:"Avoid <code>SELECT *</code>",id:"avoid-select-",level:3},{value:"Optimize Joins",id:"optimize-joins",level:3},{value:"Use Proper Data Types",id:"use-proper-data-types",level:3},{value:"Limit Data Returned",id:"limit-data-returned",level:3},{value:"Use Query Caching and Materialized Views",id:"use-query-caching-and-materialized-views",level:3},{value:"Avoid Functions in WHERE Clauses",id:"avoid-functions-in-where-clauses",level:3},{value:"Using EXPLAIN and EXPLAIN ANALYZE",id:"using-explain-and-explain-analyze",level:2},{value:"EXPLAIN",id:"explain",level:3},{value:"Key Components in EXPLAIN Output:",id:"key-components-in-explain-output",level:4},{value:"EXPLAIN ANALYZE",id:"explain-analyze",level:3},{value:"Key Components in EXPLAIN ANALYZE Output:",id:"key-components-in-explain-analyze-output",level:4},{value:"Reading the Results",id:"reading-the-results",level:2},{value:"Practical Steps to Optimize with EXPLAIN and EXPLAIN ANALYZE",id:"practical-steps-to-optimize-with-explain-and-explain-analyze",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"query-optimization",children:"Query Optimization"})}),"\n",(0,t.jsxs)(n.p,{children:["Query optimization is crucial for improving the performance of database systems. Below are key techniques and how to analyze query performance using tools like ",(0,t.jsx)(n.code,{children:"EXPLAIN"})," and ",(0,t.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," in PostgreSQL."]}),"\n",(0,t.jsx)(n.h2,{id:"general-query-optimization-techniques",children:"General Query Optimization Techniques"}),"\n",(0,t.jsx)(n.h3,{id:"use-indexes-effectively",children:"Use Indexes Effectively"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add indexes on columns used in ",(0,t.jsx)(n.code,{children:"WHERE"}),", ",(0,t.jsx)(n.code,{children:"JOIN"}),", ",(0,t.jsx)(n.code,{children:"ORDER BY"}),", and ",(0,t.jsx)(n.code,{children:"GROUP BY"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Use composite indexes for multi-column filtering."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_employees_department ON employees(department_id);\nSELECT * FROM employees WHERE department_id = 3;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"avoid-select-",children:["Avoid ",(0,t.jsx)(n.code,{children:"SELECT *"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Query only the columns We need to reduce unnecessary data retrieval."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT first_name, last_name FROM employees WHERE department_id = 3;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"optimize-joins",children:"Optimize Joins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use proper indexes on join columns."}),"\n",(0,t.jsx)(n.li,{children:"Prefer smaller tables as the driving table in joins."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT e.first_name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-proper-data-types",children:"Use Proper Data Types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure columns are of the correct data type for efficient storage and faster comparisons."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"limit-data-returned",children:"Limit Data Returned"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"LIMIT"})," to reduce the number of rows returned if only a subset is needed."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM employees WHERE department_id = 3 LIMIT 10;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-query-caching-and-materialized-views",children:"Use Query Caching and Materialized Views"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cache results of complex queries or create materialized views to avoid repetitive computations."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW active_employees AS\nSELECT * FROM employees WHERE status = 'active';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"avoid-functions-in-where-clauses",children:"Avoid Functions in WHERE Clauses"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avoid using functions on indexed columns as it can prevent index usage."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Avoid:\nSELECT * FROM employees WHERE LOWER(last_name) = 'smith';\n\n-- Instead:\nCREATE INDEX idx_lower_lastname ON employees(LOWER(last_name));\nSELECT * FROM employees WHERE LOWER(last_name) = 'smith';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-explain-and-explain-analyze",children:"Using EXPLAIN and EXPLAIN ANALYZE"}),"\n",(0,t.jsxs)(n.p,{children:["PostgreSQL provides the ",(0,t.jsx)(n.code,{children:"EXPLAIN"})," and ",(0,t.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," commands to analyze query execution plans and understand how queries are processed by the database."]}),"\n",(0,t.jsx)(n.h3,{id:"explain",children:"EXPLAIN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),": Shows the execution plan the database plans to use for the query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Does Not Execute"}),": Only predicts what will happen, without running the query."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT * FROM employees WHERE department_id = 3;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Seq Scan on employees  (cost=0.00..35.50 rows=10 width=100)\n  Filter: (department_id = 3)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"key-components-in-explain-output",children:"Key Components in EXPLAIN Output:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Seq Scan"}),": A sequential scan, meaning the database reads every row in the table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cost"}),": Estimated cost of the operation, expressed as a range (",(0,t.jsx)(n.code,{children:"startup cost"})," to ",(0,t.jsx)(n.code,{children:"total cost"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rows"}),": Estimated number of rows the query will return."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Width"}),": Average size of rows in bytes."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"explain-analyze",children:"EXPLAIN ANALYZE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),": Executes the query and provides the actual execution plan with runtime statistics."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Useful for Real Performance"}),": Helps identify bottlenecks in query execution."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 3;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sample Output"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Seq Scan on employees  (cost=0.00..35.50 rows=10 width=100) (actual time=0.023..0.031 rows=3 loops=1)\n  Filter: (department_id = 3)\n  Rows Removed by Filter: 97\nPlanning Time: 0.124 ms\nExecution Time: 0.056 ms\n"})}),"\n",(0,t.jsx)(n.h4,{id:"key-components-in-explain-analyze-output",children:"Key Components in EXPLAIN ANALYZE Output:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Actual Time"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Time taken to process rows for the step (in milliseconds)."}),"\n",(0,t.jsxs)(n.li,{children:["E.g., ",(0,t.jsx)(n.code,{children:"actual time=0.023..0.031"})," means the step started at ",(0,t.jsx)(n.code,{children:"0.023ms"})," and ended at ",(0,t.jsx)(n.code,{children:"0.031ms"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rows"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated vs Actual"}),": Compare ",(0,t.jsx)(n.code,{children:"rows=10"})," (estimate) with ",(0,t.jsx)(n.code,{children:"rows=3"})," (actual)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rows Removed by Filter"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rows that did not satisfy the filter condition."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Planning Time"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Time spent planning the query."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Execution Time"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Total time taken to execute the query."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reading-the-results",children:"Reading the Results"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Look for Sequential Scans"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sequential scans (",(0,t.jsx)(n.code,{children:"Seq Scan"}),") can be expensive for large tables. Consider adding an index to replace them with an ",(0,t.jsx)(n.code,{children:"Index Scan"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compare Costs"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Analyze the cost and identify which operations are the most expensive. Look for high ",(0,t.jsx)(n.code,{children:"cost"})," ranges or high execution times."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Loops"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check how many times operations are repeated (e.g., in nested loops)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rows vs Estimates"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Large discrepancies between estimated and actual rows suggest the query planner needs better statistics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"practical-steps-to-optimize-with-explain-and-explain-analyze",children:"Practical Steps to Optimize with EXPLAIN and EXPLAIN ANALYZE"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"EXPLAIN"})," to understand the query execution plan."]}),"\n",(0,t.jsx)(n.li,{children:"If sequential scans dominate, consider adding or optimizing indexes."}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," to measure real-world performance."]}),"\n",(0,t.jsx)(n.li,{children:"Monitor for discrepancies between estimated and actual rows, as this indicates inaccurate database statistics."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);