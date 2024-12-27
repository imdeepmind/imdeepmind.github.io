"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[4967],{9678:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"databases/database-systems/introduction","title":"Introduction","description":"What is a database?","source":"@site/docs/databases/database-systems/introduction.md","sourceDirName":"databases/database-systems","slug":"/databases/database-systems/introduction","permalink":"/docs/databases/database-systems/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-systems/introduction.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734168488000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Database Sharding","permalink":"/docs/databases/database-engineering/sharding"},"next":{"title":"Database Storage","permalink":"/docs/databases/database-systems/database-storage"}}');var t=s(4848),a=s(8453);const l={sidebar_position:1},r="Introduction",o={},d=[{value:"What is a database?",id:"what-is-a-database",level:2},{value:"Database management system (DBMS):",id:"database-management-system-dbms",level:2},{value:"Why do we need database management systems?",id:"why-do-we-need-database-management-systems",level:2},{value:"Types of Databases",id:"types-of-databases",level:2},{value:"Relational model:",id:"relational-model",level:2},{value:"Relational Algebra",id:"relational-algebra",level:2},{value:"Additional Operations in Relational Algebra",id:"additional-operations-in-relational-algebra",level:2},{value:"Set Operations",id:"set-operations",level:3},{value:"Aggregate Functions",id:"aggregate-functions",level:3},{value:"Specialized Operations",id:"specialized-operations",level:3},{value:"Examples",id:"examples",level:3},{value:"Vector Databases",id:"vector-databases",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-database",children:"What is a database?"}),"\n",(0,t.jsx)(n.p,{children:"A database is an organized collection of data that is related in some way and is meant to model some aspect of the real world."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples of databases"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dictionary"}),"\n",(0,t.jsx)(n.li,{children:"Contact manager"}),"\n",(0,t.jsx)(n.li,{children:"IMDb"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"database-management-system-dbms",children:"Database management system (DBMS):"}),"\n",(0,t.jsx)(n.p,{children:"A database management system is a software system that is used to manage a database."}),"\n",(0,t.jsx)(n.h2,{id:"why-do-we-need-database-management-systems",children:"Why do we need database management systems?"}),"\n",(0,t.jsx)(n.p,{children:"Database management systems are needed to manage databases because they can be large and complex. They also need to be able to be accessed by multiple users at the same time."}),"\n",(0,t.jsx)(n.h2,{id:"types-of-databases",children:"Types of Databases"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"1. Relational Databases:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Based on the relational model, which represents data as a collection of tables with rows and columns."}),"\n",(0,t.jsx)(n.li,{children:"Each table has a primary key, which uniquely identifies each row."}),"\n",(0,t.jsx)(n.li,{children:"Data is stored in a structured format, making it easy to query and manage."}),"\n",(0,t.jsx)(n.li,{children:"Examples: MySQL, PostgreSQL, Oracle, SQL Server"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2. Key-Value Stores:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Store data as key-value pairs."}),"\n",(0,t.jsx)(n.li,{children:"The key is a unique identifier for the data, and the value is the data itself."}),"\n",(0,t.jsx)(n.li,{children:"Simple and efficient for storing large amounts of unstructured data."}),"\n",(0,t.jsx)(n.li,{children:"Examples: Redis, Memcached, DynamoDB"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3. Graph Databases:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represent data as a graph, with nodes representing entities and edges representing relationships between entities."}),"\n",(0,t.jsx)(n.li,{children:"Ideal for storing complex, interconnected data."}),"\n",(0,t.jsx)(n.li,{children:"Examples: Neo4j, ArangoDB, OrientDB"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"4. Document Databases:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Store data as documents, which are JSON or XML files."}),"\n",(0,t.jsx)(n.li,{children:"Documents can contain nested structures, making them flexible for storing complex data."}),"\n",(0,t.jsx)(n.li,{children:"Well-suited for storing semi-structured or unstructured data."}),"\n",(0,t.jsx)(n.li,{children:"Examples: MongoDB, CouchDB, Elasticsearch"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"relational-model",children:"Relational model:"}),"\n",(0,t.jsx)(n.p,{children:"The relational model is a data model that is used to represent data as a collection of tables. Each table has a set of columns, which are called attributes. Each row in a table is called a tuple."}),"\n",(0,t.jsx)(n.p,{children:"The relational model was first proposed by Edgar F. Codd in 1970. It is based on the mathematical concept of a relation, which is a set of ordered pairs."}),"\n",(0,t.jsx)(n.p,{children:"The relational model is used by most modern database management systems (DBMS). It is a very flexible model that can be used to represent a wide variety of data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The relational model is a way to represent data in a database."}),"\n",(0,t.jsx)(n.li,{children:"It uses tables to store data."}),"\n",(0,t.jsx)(n.li,{children:"Each table has rows and columns."}),"\n",(0,t.jsx)(n.li,{children:"Rows are called tuples."}),"\n",(0,t.jsx)(n.li,{children:"Columns are called attributes."}),"\n",(0,t.jsx)(n.li,{children:"The primary key is a unique identifier for each tuple."}),"\n",(0,t.jsx)(n.li,{children:"The foreign key is a reference to the primary key of another table."}),"\n",(0,t.jsx)(n.li,{children:"Constraints are rules that must be followed by the data in the table."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"The relational model has the following components"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Structure: The structure of a relational database is defined by a schema. A schema is a set of tables, columns, and constraints."}),"\n",(0,t.jsx)(n.li,{children:"Data: The data in a relational database is stored in tuples. Tuples are ordered sets of values."}),"\n",(0,t.jsx)(n.li,{children:"Integrity constraints: Integrity constraints are rules that must be followed by the data in a relational database. There are several types of integrity constraints, including primary key constraints, foreign key constraints, and not null constraints."}),"\n",(0,t.jsx)(n.li,{children:"Operations: The operations that can be performed on a relational database include selection, projection, join, union, intersection, and difference."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Primary Keys"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The primary key is a unique identifier for each tuple."}),"\n",(0,t.jsx)(n.li,{children:"It must be unique for each row in the table."}),"\n",(0,t.jsx)(n.li,{children:"It can be a single attribute or a combination of attributes."}),"\n",(0,t.jsx)(n.li,{children:"It is often used to join tables together."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Foreign Keys"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The foreign key is a reference to the primary key of another table."}),"\n",(0,t.jsx)(n.li,{children:"It allows you to create relationships between tables."}),"\n",(0,t.jsx)(n.li,{children:"It must match the data type of the primary key it references."}),"\n",(0,t.jsx)(n.li,{children:"It can be null if the relationship is optional."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Constraints are rules that must be followed by the data in the table."}),"\n",(0,t.jsx)(n.li,{children:"They can be used to ensure data integrity."}),"\n",(0,t.jsxs)(n.li,{children:["Common constraints include:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NOT NULL: The attribute cannot be null."}),"\n",(0,t.jsx)(n.li,{children:"UNIQUE: The attribute must be unique for each row in the table."}),"\n",(0,t.jsx)(n.li,{children:"CHECK: The attribute must meet a certain condition."}),"\n",(0,t.jsx)(n.li,{children:"DEFAULT: The attribute will have a default value if it is not specified."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"relational-algebra",children:"Relational Algebra"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Basic Operations"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Selection (\u03c3):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Selects tuples based on a condition."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"\u03c3_condition(relation)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Projection (\u03c0):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Projects columns."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"\u03c0_attributes(relation)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cartesian Product (\xd7):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Combines all tuples from two relations."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"relation1 \xd7 relation2"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Union (\u222a):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Combines tuples from two relations with the same attributes."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"relation1 \u222a relation2"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Difference (\u2212):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Returns tuples in relation1 that are not in relation2."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"relation1 \u2212 relation2"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Intersection (\u2229):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Returns tuples that are in both relation1 and relation2."}),"\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"relation1 \u2229 relation2"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Derived Operations"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Join (\u22c8):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Combines tuples based on a join condition."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Natural Join:"})," Joins on common attributes with the same name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Theta Join:"})," Joins on a specified condition."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Division (\xf7):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Divides a relation by another relation to find tuples in the first relation that are related to all tuples in the second relation."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'Find the names of customers who live in "City A":'}),"\n",(0,t.jsx)(n.code,{children:'\u03c3_city="City A"(Customers)'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find the names of customers and their orders:"}),"\n",(0,t.jsx)(n.code,{children:"Customers \u22c8 Orders"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'Find the names of customers who have placed orders for product "P1":'}),"\n",(0,t.jsx)(n.code,{children:'\u03c0_name(Customers \u22c8 \u03c3_product="P1"(Orders))'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Additional Notes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Relational algebra is used as a theoretical foundation for database query languages like SQL."}),"\n",(0,t.jsx)(n.li,{children:"It provides a formal way to analyze and optimize queries."}),"\n",(0,t.jsx)(n.li,{children:"Understanding relational algebra can help in writing efficient and effective database queries."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-operations-in-relational-algebra",children:"Additional Operations in Relational Algebra"}),"\n",(0,t.jsx)(n.h3,{id:"set-operations",children:"Set Operations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Outer Join:"})," Combines tuples from two relations, including unmatched tuples from either or both relations.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Left Outer Join (\u27d5):"})," Retains all tuples from the left relation, even if there's no match in the right relation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Right Outer Join (\u27d6):"})," Retains all tuples from the right relation, even if there's no match in the left relation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full Outer Join (\u27db):"})," Retains all tuples from both relations, regardless of whether there's a match."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"aggregate-functions",children:"Aggregate Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Aggregation:"})," Computes a single value from a set of values.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Common functions:"})," SUM, AVG, COUNT, MIN, MAX"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grouping:"})," Groups tuples based on specific attributes and applies aggregate functions to each group."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"specialized-operations",children:"Specialized Operations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Renaming (\u03c1):"})," Changes the name of an attribute or relation.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Syntax: ",(0,t.jsx)(n.code,{children:"\u03c1_new_name(relation)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extended Projection (\u03c0'):"})," Projects columns and applies expressions to them."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extended Selection (\u03c3'):"})," Selects tuples based on expressions involving arithmetic, logical, and comparison operators."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quantified Expressions:"})," Uses quantifiers (\u2200, \u2203) to express conditions over multiple tuples."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find the names of customers who have placed orders, along with the total quantity of orders they've placed:"}),"\n",(0,t.jsx)(n.code,{children:"\u03c0_name, SUM(quantity)(Customers \u22c8 Orders)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find the names of customers who have placed orders for all products:"}),"\n",(0,t.jsx)(n.code,{children:"Customers \xf7 Products"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'Rename the "quantity" attribute in the "Orders" relation to "units_sold":'}),"\n",(0,t.jsx)(n.code,{children:"\u03c1_units_sold(Orders)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vector-databases",children:"Vector Databases"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Types of Vector Databases"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Exact Search Vector Databases:"})," Guarantee exact nearest neighbor. Examples: Faiss, Annoy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Approximate Search Vector Databases:"})," Use approximate search for speed. Examples: Milvus, Pinecone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hybrid Vector Databases:"})," Combine exact and approximate search for balance."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use Cases"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Recommendation Systems"}),"\n",(0,t.jsx)(n.li,{children:"Image and Video Search"}),"\n",(0,t.jsx)(n.li,{children:"Natural Language Processing"}),"\n",(0,t.jsx)(n.li,{children:"Anomaly Detection"}),"\n",(0,t.jsx)(n.li,{children:"Drug Discovery"}),"\n",(0,t.jsx)(n.li,{children:"Fraud Detection"}),"\n",(0,t.jsx)(n.li,{children:"Customer Segmentation"}),"\n",(0,t.jsx)(n.li,{children:"Search Engine Optimization"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Advantages"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Efficient Similarity Search"}),"\n",(0,t.jsx)(n.li,{children:"Scalability"}),"\n",(0,t.jsx)(n.li,{children:"Versatility"}),"\n",(0,t.jsx)(n.li,{children:"Accuracy (Exact Search)"}),"\n",(0,t.jsx)(n.li,{children:"Speed (Approximate Search)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Disadvantages"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Specialized Indexing Techniques"}),"\n",(0,t.jsx)(n.li,{children:"Computational Overhead"}),"\n",(0,t.jsx)(n.li,{children:"Storage Requirements"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Choosing the Right Vector Database"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Consider dataset size, data type, and application requirements."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,t.jsx)(n.p,{children:"Vector Databases are powerful tools for similarity search applications. Choose the right one based on your needs to build innovative solutions."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);