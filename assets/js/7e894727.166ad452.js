"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[9356],{77935:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"databases/database-engineering/locks","title":"Database Locking","description":"Database locking is a mechanism that ensures data consistency and integrity when multiple transactions access the database concurrently. Locks prevent conflicting operations from being executed simultaneously, ensuring that operations comply with ACID (Atomicity, Consistency, Isolation, Durability) principles.","source":"@site/docs/databases/database-engineering/locks.md","sourceDirName":"databases/database-engineering","slug":"/databases/database-engineering/locks","permalink":"/docs/databases/database-engineering/locks","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-engineering/locks.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735227237000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"ACID","permalink":"/docs/databases/database-engineering/acid"},"next":{"title":"Indexes","permalink":"/docs/databases/database-engineering/indexes"}}');var l=s(74848),a=s(28453);const o={sidebar_position:5},r="Database Locking",t={},c=[{value:"What Do Shared and Exclusive Locks Mean?",id:"what-do-shared-and-exclusive-locks-mean",level:2},{value:"Shared Lock (S-Lock)",id:"shared-lock-s-lock",level:3},{value:"Exclusive Lock (X-Lock)",id:"exclusive-lock-x-lock",level:3},{value:"Lock Types in PostgreSQL",id:"lock-types-in-postgresql",level:2},{value:"Row-Level Locks",id:"row-level-locks",level:3},{value:"Table-Level Locks",id:"table-level-locks",level:3},{value:"Advisory Locks",id:"advisory-locks",level:3},{value:"Deadlocks",id:"deadlocks",level:2},{value:"How Databases Handle Locked Rows",id:"how-databases-handle-locked-rows",level:2},{value:"Blocking Until the Lock Is Released",id:"blocking-until-the-lock-is-released",level:3},{value:"NOWAIT",id:"nowait",level:3},{value:"SKIP LOCKED",id:"skip-locked",level:3},{value:"Transaction Isolation Levels and Locking",id:"transaction-isolation-levels-and-locking",level:2},{value:"Read Uncommitted",id:"read-uncommitted",level:3},{value:"Read Committed",id:"read-committed",level:3},{value:"Repeatable Read",id:"repeatable-read",level:3},{value:"Serializable",id:"serializable",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Keep Transactions Short",id:"keep-transactions-short",level:3},{value:"Use Appropriate Isolation Levels",id:"use-appropriate-isolation-levels",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Handle Deadlocks Gracefully",id:"handle-deadlocks-gracefully",level:3},{value:"Monitor Locks",id:"monitor-locks",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"database-locking",children:"Database Locking"})}),"\n",(0,l.jsxs)(n.p,{children:["Database locking is a mechanism that ensures ",(0,l.jsx)(n.strong,{children:"data consistency"})," and ",(0,l.jsx)(n.strong,{children:"integrity"})," when multiple transactions access the database concurrently. Locks prevent conflicting operations from being executed simultaneously, ensuring that operations comply with ACID (Atomicity, Consistency, Isolation, Durability) principles."]}),"\n",(0,l.jsx)(n.h2,{id:"what-do-shared-and-exclusive-locks-mean",children:"What Do Shared and Exclusive Locks Mean?"}),"\n",(0,l.jsx)(n.h3,{id:"shared-lock-s-lock",children:"Shared Lock (S-Lock)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A shared lock allows ",(0,l.jsx)(n.strong,{children:"multiple transactions to read"})," the same data concurrently but prevents any transaction from ",(0,l.jsx)(n.strong,{children:"modifying"})," the data until all shared locks are released."]}),"\n",(0,l.jsxs)(n.li,{children:["Shared locks ensure ",(0,l.jsx)(n.strong,{children:"read consistency"})," but block write operations."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSELECT * FROM employees WHERE id = 1 FOR SHARE;\n-- This transaction can read the row, but no other transaction can modify it.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"exclusive-lock-x-lock",children:"Exclusive Lock (X-Lock)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["An exclusive lock allows ",(0,l.jsx)(n.strong,{children:"only one transaction to modify"})," the data."]}),"\n",(0,l.jsxs)(n.li,{children:["It blocks all other transactions, including both ",(0,l.jsx)(n.strong,{children:"read"})," and ",(0,l.jsx)(n.strong,{children:"write"}),", until the lock is released."]}),"\n",(0,l.jsx)(n.li,{children:"Exclusive locks are critical for maintaining data integrity during update operations."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nUPDATE employees SET salary = salary + 500 WHERE id = 1;\n-- This transaction locks the row, preventing any other transaction from reading or writing to it.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"lock-types-in-postgresql",children:"Lock Types in PostgreSQL"}),"\n",(0,l.jsx)(n.p,{children:"PostgreSQL provides various locks to handle concurrent access effectively. Key lock types include:"}),"\n",(0,l.jsx)(n.h3,{id:"row-level-locks",children:"Row-Level Locks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Lock individual rows to reduce contention and maximize concurrency."}),"\n",(0,l.jsxs)(n.li,{children:["Used in operations like ",(0,l.jsx)(n.code,{children:"SELECT ... FOR SHARE"})," or ",(0,l.jsx)(n.code,{children:"SELECT ... FOR UPDATE"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FOR SHARE"})," is a shared lock, so reads are alloWed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FOR UPDATE"})," is exclusive lock, so reads and write are ",(0,l.jsx)(n.strong,{children:"NOT"})," alloWed."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSELECT * FROM employees WHERE id = 1 FOR UPDATE;\n-- Locks only the row with id = 1, allowing other rows to be accessed concurrently.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"table-level-locks",children:"Table-Level Locks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Lock the entire table for operations affecting all rows or for schema modifications."}),"\n",(0,l.jsxs)(n.li,{children:["Example: Acquired during ",(0,l.jsx)(n.code,{children:"TRUNCATE"})," or ",(0,l.jsx)(n.code,{children:"ALTER TABLE"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nLOCK TABLE employees IN ACCESS EXCLUSIVE MODE;\n-- Blocks all access to the table until the transaction is complete.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"advisory-locks",children:"Advisory Locks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Custom, application-controlled locks that allow developers to implement business-specific locking logic."}),"\n",(0,l.jsx)(n.li,{children:"Advisory locks are not enforced by the database engine."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example: Complete Usage of Advisory Locks:"})}),"\n",(0,l.jsxs)(n.p,{children:["Imagine a scenario where multiple workers process tasks from a shared ",(0,l.jsx)(n.code,{children:"tasks"})," table. Each worker should only process a task that is not being handled by another worker."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Worker 1\nBEGIN;\n\n-- Try to acquire an advisory lock on the task ID (e.g., ID = 101)\nSELECT pg_try_advisory_lock(101) AS lock_acquired;\n\n-- Check if the lock was acquired\n-- If lock_acquired is true, process the task\nUPDATE tasks\nSET status = 'in_progress'\nWHERE id = 101 AND status = 'pending';\n\n-- Task processing logic here...\n\n-- Release the advisory lock after processing\nSELECT pg_advisory_unlock(101);\n\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pg_try_advisory_lock"})," tries to acquire a lock without blocking. If the lock is already held, it does not wait."]}),"\n",(0,l.jsx)(n.li,{children:"Once the lock is acquired, the worker updates the task's status and begins processing."}),"\n",(0,l.jsxs)(n.li,{children:["After completing the task, the worker releases the advisory lock with ",(0,l.jsx)(n.code,{children:"pg_advisory_unlock"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This ensures that no two workers process the same task simultaneously."}),"\n",(0,l.jsx)(n.h2,{id:"deadlocks",children:"Deadlocks"}),"\n",(0,l.jsxs)(n.p,{children:["A ",(0,l.jsx)(n.strong,{children:"deadlock"})," occurs when two or more transactions block each other by holding locks and waiting for resources locked by the other transactions. PostgreSQL automatically detects deadlocks and resolves them by aborting one of the transactions."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Transaction 1\nBEGIN;\nUPDATE employees SET salary = salary + 500 WHERE id = 1;\n\n-- Transaction 2\nBEGIN;\nUPDATE employees SET salary = salary + 500 WHERE id = 2;\n\n-- Transaction 1 tries to lock row 2\nUPDATE employees SET salary = salary + 500 WHERE id = 2;\n\n-- Transaction 2 tries to lock row 1, causing a deadlock\nUPDATE employees SET salary = salary + 500 WHERE id = 1;\n"})}),"\n",(0,l.jsx)(n.p,{children:"In this case, PostgreSQL will abort one of the transactions to resolve the deadlock."}),"\n",(0,l.jsx)(n.h2,{id:"how-databases-handle-locked-rows",children:"How Databases Handle Locked Rows"}),"\n",(0,l.jsx)(n.p,{children:"When a transaction attempts to access a row that is already locked by another transaction, databases use different strategies to handle the conflict:"}),"\n",(0,l.jsx)(n.h3,{id:"blocking-until-the-lock-is-released",children:"Blocking Until the Lock Is Released"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"By default, PostgreSQL waits for the lock to be released."}),"\n",(0,l.jsx)(n.li,{children:"The waiting transaction is blocked but remains in the queue to acquire the lock."}),"\n",(0,l.jsx)(n.li,{children:"We can also have a timeout to fail the transaction after a certain period."}),"\n",(0,l.jsxs)(n.li,{children:["For timeout, We can use the ",(0,l.jsx)(n.code,{children:"lock_timeout"})," to set timeout."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSET lock_timeout = '5s';  -- Set the lock acquisition timeout to 5 seconds.\n\nSELECT * FROM employees WHERE id = 1 FOR UPDATE;\n-- Another transaction attempting the same lock will wait until this transaction is committed or rolled back.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"nowait",children:"NOWAIT"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If the row is locked, the transaction ",(0,l.jsx)(n.strong,{children:"fails immediately"})," with an error instead of waiting for the lock to be released."]}),"\n",(0,l.jsx)(n.li,{children:"Useful for applications where blocking is unacceptable."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSELECT * FROM employees WHERE id = 1 FOR UPDATE NOWAIT;\n-- If the row is already locked, this query fails with an error.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"skip-locked",children:"SKIP LOCKED"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If a row is locked, the query ",(0,l.jsx)(n.strong,{children:"skips the locked rows"})," and processes only the unlocked rows."]}),"\n",(0,l.jsx)(n.li,{children:"Useful for task queues where workers can skip locked tasks and process available ones."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSELECT * FROM tasks WHERE status = 'pending' FOR UPDATE SKIP LOCKED;\n-- Processes only unlocked rows, ignoring locked rows.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"transaction-isolation-levels-and-locking",children:"Transaction Isolation Levels and Locking"}),"\n",(0,l.jsx)(n.p,{children:"PostgreSQL supports four standard isolation levels that define how transactions interact with locks:"}),"\n",(0,l.jsx)(n.h3,{id:"read-uncommitted",children:"Read Uncommitted"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"No locking; allows dirty reads."}),"\n",(0,l.jsx)(n.li,{children:"Rarely used in PostgreSQL."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"read-committed",children:"Read Committed"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ensures no dirty reads by acquiring shared or exclusive locks as needed."}),"\n",(0,l.jsx)(n.li,{children:"Default isolation level in PostgreSQL."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nUPDATE employees SET salary = salary + 500 WHERE id = 1;\n-- Other transactions cannot read or modify the locked row until committed.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"repeatable-read",children:"Repeatable Read"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Prevents non-repeatable reads by locking all rows read during a transaction."}),"\n",(0,l.jsx)(n.li,{children:"Ensures consistent results for all queries within the transaction."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN ISOLATION LEVEL REPEATABLE READ;\nSELECT * FROM employees WHERE department = 'Sales';\n-- Ensures no other transaction can modify these rows until committed.\nCOMMIT;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"serializable",children:"Serializable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The strictest isolation level, ensuring transactions appear to execute serially."}),"\n",(0,l.jsx)(n.li,{children:"May block or fail transactions to maintain serializability."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(n.h3,{id:"keep-transactions-short",children:"Keep Transactions Short"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimize transaction duration to reduce lock contention."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"use-appropriate-isolation-levels",children:"Use Appropriate Isolation Levels"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Choose the least restrictive isolation level that satisfies Our requirements."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"indexing",children:"Indexing"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Proper indexing reduces the number of rows locked during queries, improving concurrency."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"handle-deadlocks-gracefully",children:"Handle Deadlocks Gracefully"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Design transactions to access resources in a consistent order to avoid deadlocks."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"monitor-locks",children:"Monitor Locks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Use PostgreSQL system views like ",(0,l.jsx)(n.code,{children:"pg_locks"})," to monitor and troubleshoot locks."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM pg_locks;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const l={},a=i.createContext(l);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);