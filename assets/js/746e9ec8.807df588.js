"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[9226],{9673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"databases/database-engineering/acid","title":"ACID","description":"The ACID properties are a set of four key principles that ensure reliable processing of database transactions. ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties guarantee that database transactions are processed reliably and safely, even in situations like system failures, crashes, or concurrent access by multiple users. Below is a breakdown of each property with practical examples.","source":"@site/docs/databases/database-engineering/acid.md","sourceDirName":"databases/database-engineering","slug":"/databases/database-engineering/acid","permalink":"/docs/databases/database-engineering/acid","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-engineering/acid.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735227237000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Transactions","permalink":"/docs/databases/database-engineering/transactions"},"next":{"title":"Database Locking","permalink":"/docs/databases/database-engineering/locks"}}');var a=n(74848),i=n(28453);const r={sidebar_position:4},o="ACID",l={},c=[{value:"Atomicity",id:"atomicity",level:2},{value:"Consistency",id:"consistency",level:2},{value:"Isolation",id:"isolation",level:2},{value:"Durability",id:"durability",level:2},{value:"Summary of ACID Properties",id:"summary-of-acid-properties",level:2},{value:"Importance of ACID",id:"importance-of-acid",level:2},{value:"Eventual Consistency",id:"eventual-consistency",level:2},{value:"Key Characteristics of Eventual Consistency",id:"key-characteristics-of-eventual-consistency",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"acid",children:"ACID"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"ACID"})," properties are a set of four key principles that ensure reliable processing of database transactions. ACID stands for ",(0,a.jsx)(t.strong,{children:"Atomicity"}),", ",(0,a.jsx)(t.strong,{children:"Consistency"}),", ",(0,a.jsx)(t.strong,{children:"Isolation"}),", and ",(0,a.jsx)(t.strong,{children:"Durability"}),". These properties guarantee that database transactions are processed reliably and safely, even in situations like system failures, crashes, or concurrent access by multiple users. Below is a breakdown of each property with practical examples."]}),"\n",(0,a.jsx)(t.h2,{id:"atomicity",children:"Atomicity"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Atomicity"})," means that a transaction is treated as a single unit of work, where either all operations within the transaction are successfully completed, or none of them are. If an error occurs or something goes wrong, the transaction must be ",(0,a.jsx)(t.strong,{children:"rolled back"})," to ensure the database does not remain in an inconsistent state."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If any operation in the transaction fails (e.g., a ",(0,a.jsx)(t.code,{children:"UPDATE"})," fails), the entire transaction will be rolled back, and no changes will be applied to the database."]}),"\n",(0,a.jsx)(t.li,{children:"A rollback ensures the database is restored to its state before the transaction started."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example:"})}),"\n",(0,a.jsx)(t.p,{children:"Consider a transaction that involves transferring money from one account to another. If any step fails, both operations (debit and credit) should be rolled back."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"BEGIN;\n\n-- Debit from account 1\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\n\n-- If an error occurs, roll back the transaction\n-- Let's assume the credit operation fails, and We roll back\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\n\n-- If something goes wrong, rollback the transaction\nROLLBACK;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, if the ",(0,a.jsx)(t.code,{children:"UPDATE"})," statement for the second account fails, the ",(0,a.jsx)(t.code,{children:"ROLLBACK"})," command undoes both operations, ensuring that no money is debited or credited and the database stays in a consistent state."]}),"\n",(0,a.jsx)(t.h2,{id:"consistency",children:"Consistency"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Consistency"})," ensures that a transaction takes the database from one ",(0,a.jsx)(t.strong,{children:"valid state"})," to another. All the rules, constraints, and triggers in the database (such as foreign keys, unique constraints, etc.) must be preserved during the transaction."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If any transaction operation violates the database rules (e.g., attempting to insert duplicate values into a column with a unique constraint), the transaction will be rolled back, and the database will return to its consistent state."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example:"})}),"\n",(0,a.jsx)(t.p,{children:"Imagine a constraint that ensures an account balance cannot go negative. If a transaction attempts to withdraw more than the available balance, the transaction will violate this rule and be rolled back."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\n-- This will fail if the balance goes below zero, and the transaction will be rolled back\nCOMMIT;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"isolation",children:"Isolation"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Isolation"})," refers to the level at which the operations of one transaction are isolated from the operations of other concurrent transactions. Different ",(0,a.jsx)(t.strong,{children:"isolation levels"})," control the visibility of intermediate transaction states to other transactions. PostgreSQL provides several isolation levels that determine how transactions interact with one another."]}),"\n",(0,a.jsx)(t.p,{children:"The four isolation levels are:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Read Uncommitted:"})," Allows dirty reads. Transactions can see uncommitted changes made by other transactions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Read Committed:"})," A transaction sees only committed data at the time it is read. It prevents dirty reads but still allows non-repeatable reads."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Repeatable Read:"})," Ensures that once a transaction reads a value, it will see the same value throughout the transaction, preventing dirty and non-repeatable reads. Phantom reads are still possible."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Serializable:"})," The highest isolation level, which ensures that transactions execute as if they Oure serialized (one after the other). This level prevents dirty reads, non-repeatable reads, and phantom reads."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We can set the isolation level for a transaction in PostgreSQL using the ",(0,a.jsx)(t.code,{children:"SET TRANSACTION ISOLATION LEVEL"})," command."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example of setting isolation levels in PostgreSQL:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"-- Start transaction with Read Committed isolation level (default)\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n-- Our queries here\nCOMMIT;\n\n-- Start transaction with Repeatable Read isolation level\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n-- Our queries here\nCOMMIT;\n\n-- Start transaction with Serializable isolation level\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n-- Our queries here\nCOMMIT;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In each of these cases, PostgreSQL guarantees the level of isolation defined by the transaction's isolation level. For example, with ",(0,a.jsx)(t.code,{children:"READ COMMITTED"}),", a transaction will see the latest committed data and avoid dirty reads, but non-repeatable reads are alloWed."]}),"\n",(0,a.jsx)(t.h2,{id:"durability",children:"Durability"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Durability"})," ensures that once a transaction is committed, its effects are ",(0,a.jsx)(t.strong,{children:"permanent"})," and survive any system crashes, poOur failures, or other interruptions."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["After a transaction commits, all changes made to the database are written to ",(0,a.jsx)(t.strong,{children:"persistent storage"})," (e.g., disk), ensuring that the data is not lost even if the system crashes shortly after the commit."]}),"\n",(0,a.jsx)(t.li,{children:"Durability ensures that once a transaction has been committed, it cannot be undone (except by explicitly using a rollback mechanism in a new transaction)."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Example:"}),"\nIf a transaction has been committed to transfer money from one account to another, the changes (debiting one account and crediting another) will persist even if the database system crashes right after the commit."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;  -- Debit\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;  -- Credit\nCOMMIT;  -- Once this commit happens, the changes are permanent\n-- A crash after this point won't undo the changes\n"})}),"\n",(0,a.jsx)(t.h2,{id:"summary-of-acid-properties",children:"Summary of ACID Properties"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Atomicity:"})," Ensures that all operations in a transaction are treated as a single unit. If one operation fails, the entire transaction is rolled back."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Consistency:"})," Ensures that a transaction brings the database from one valid state to another, adhering to all rules and constraints."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Isolation:"})," Controls how operations in one transaction are isolated from others, preventing interference. Different isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) provide different degrees of isolation."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Durability:"})," Guarantees that once a transaction is committed, the changes are permanent and will survive crashes."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"importance-of-acid",children:"Importance of ACID"}),"\n",(0,a.jsxs)(t.p,{children:["ACID properties are essential for ensuring ",(0,a.jsx)(t.strong,{children:"data integrity"})," and ",(0,a.jsx)(t.strong,{children:"reliability"})," in database systems. They help maintain ",(0,a.jsx)(t.strong,{children:"consistent"})," data, handle ",(0,a.jsx)(t.strong,{children:"concurrent transactions"})," safely, and ensure that once data is committed, it is ",(0,a.jsx)(t.strong,{children:"permanent"}),". These properties are especially important in systems that require high reliability, such as ",(0,a.jsx)(t.strong,{children:"financial applications"}),", ",(0,a.jsx)(t.strong,{children:"e-commerce platforms"}),", and ",(0,a.jsx)(t.strong,{children:"inventory management systems"}),", where data accuracy and consistency are critical."]}),"\n",(0,a.jsx)(t.h2,{id:"eventual-consistency",children:"Eventual Consistency"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Eventual Consistency"})," is a consistency model used in distributed databases and systems where it is acceptable for data to be temporarily inconsistent, but the system guarantees that, given enough time, all nodes in the system will eventually converge to a consistent state. This model is primarily associated with ",(0,a.jsx)(t.strong,{children:"NoSQL"})," databases and distributed systems that prioritize availability and partition tolerance over strict consistency, as defined by the ",(0,a.jsx)(t.strong,{children:"CAP theorem"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In an ",(0,a.jsx)(t.strong,{children:"eventually consistent"})," system, updates to the data are made available to all replicas, but they may not be immediately reflected across all replicas. The system will eventually propagate these changes to all nodes, ensuring that, over time, every replica will have the same data."]}),"\n",(0,a.jsx)(t.h3,{id:"key-characteristics-of-eventual-consistency",children:"Key Characteristics of Eventual Consistency"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Temporary Inconsistency"}),":\nAt any point in time, different replicas of the data might have slightly different versions of the data. This can lead to situations where a read operation on different nodes may return different results, but eventually, all replicas will become consistent."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Eventual Convergence"}),':\nOver time, the system ensures that all updates are propagated across all nodes. Eventually, all replicas will become consistent, hence the term "eventual consistency."']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"High Availability"}),":\nEventual consistency allows the system to prioritize availability and continue operating even when some parts of the system are temporarily unavailable or partitioned. This is particularly useful for systems with high availability requirements, like global-scale Web applications."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Concurrent Writes"}),":\nEventual consistency allows for concurrent updates to the same data from different locations or users. Conflicts might arise, but conflict resolution mechanisms (such as last-write-wins or custom conflict resolution logic) ensure that the system can converge to a consistent state."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);