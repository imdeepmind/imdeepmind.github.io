"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2471],{5993:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"databases/database-systems/database-storage","title":"Database Storage","description":"Database storage is the physical representation of data within a database system. It\'s typically organized into files and pages.","source":"@site/docs/databases/database-systems/database-storage.md","sourceDirName":"databases/database-systems","slug":"/databases/database-systems/database-storage","permalink":"/docs/databases/database-systems/database-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-systems/database-storage.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734363969000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/databases/database-systems/introduction"},"next":{"title":"Hash Tables","permalink":"/docs/databases/database-systems/hash-tables"}}');var i=n(4848),t=n(8453);const r={sidebar_position:2},l="Database Storage",o={},d=[{value:"Storage Hierarchy",id:"storage-hierarchy",level:2},{value:"Storage Hierarchy Access Speed",id:"storage-hierarchy-access-speed",level:3},{value:"Sequential vs. Random Access",id:"sequential-vs-random-access",level:2},{value:"Storage Manager",id:"storage-manager",level:2},{value:"Database Pages",id:"database-pages",level:2},{value:"Default Page Sizes in Different Databases",id:"default-page-sizes-in-different-databases",level:3},{value:"Page Heap",id:"page-heap",level:3},{value:"Page Layout in Database Storage",id:"page-layout-in-database-storage",level:3},{value:"Tuple Oriented Storage - Slotted Pages",id:"tuple-oriented-storage---slotted-pages",level:3},{value:"Record IDs in Databases",id:"record-ids-in-databases",level:2},{value:"Record IDs in Different Databases",id:"record-ids-in-different-databases",level:3},{value:"Tuple Layout",id:"tuple-layout",level:2}];function c(e){const s={blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"database-storage",children:"Database Storage"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Database storage"})," is the physical representation of data within a database system. It's typically organized into ",(0,i.jsx)(s.strong,{children:"files"})," and ",(0,i.jsx)(s.strong,{children:"pages"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"storage-hierarchy",children:"Storage Hierarchy"}),"\n",(0,i.jsx)(s.p,{children:"A storage hierarchy is a systematic arrangement of storage devices based on their speed, capacity, and cost. This hierarchy is essential for optimizing data access and storage costs in computer systems."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Common Levels of Storage Hierarchy:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Primary Storage (Main Memory):"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Fastest storage device."}),"\n",(0,i.jsx)(s.li,{children:"Directly accessible by the CPU."}),"\n",(0,i.jsx)(s.li,{children:"Volatile (loses data when power is off)."}),"\n",(0,i.jsx)(s.li,{children:"Used for active programs and data."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Secondary Storage:"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Slower than primary storage but larger capacity."}),"\n",(0,i.jsx)(s.li,{children:"Non-volatile (retains data when power is off)."}),"\n",(0,i.jsx)(s.li,{children:"Examples: Hard Disk Drives (HDDs), Solid-State Drives (SSDs)."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Tertiary Storage:"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Slowest storage device but has the largest capacity."}),"\n",(0,i.jsx)(s.li,{children:"Used for long-term data storage and archiving."}),"\n",(0,i.jsx)(s.li,{children:"Examples: Magnetic tapes, optical discs."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"storage-hierarchy-access-speed",children:"Storage Hierarchy Access Speed"}),"\n",(0,i.jsx)(s.p,{children:"Storage hierarchy refers to the various types of data storage systems arranged by speed and cost. Here's a breakdown of access speeds for different types of storage:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Registers"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Nanoseconds (ns)"]}),"\n",(0,i.jsx)(s.li,{children:"Fastest storage, used for immediate data manipulation by the CPU."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Cache Memory"})," (L1, L2, L3):"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Typically 1-10 ns"]}),"\n",(0,i.jsx)(s.li,{children:"Very fast, located close to the CPU to speed up access to frequently used data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"RAM (Random Access Memory)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Approximately 10-100 ns"]}),"\n",(0,i.jsx)(s.li,{children:"Primary volatile storage used for active processes and data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SSD (Solid State Drive)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Around 100-500 \xb5s (microseconds)"]}),"\n",(0,i.jsx)(s.li,{children:"Much faster than traditional hard drives, using flash memory to store data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"HDD (Hard Disk Drive)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Generally 5-15 ms (milliseconds)"]}),"\n",(0,i.jsx)(s.li,{children:"Slower due to mechanical parts; access times vary depending on seek time and rotational speed."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Optical Discs"})," (e.g., CDs, DVDs):"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": 150-300 ms"]}),"\n",(0,i.jsx)(s.li,{children:"Slower than HDDs; uses lasers to read data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Magnetic Tape"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Time"}),": Seconds to minutes"]}),"\n",(0,i.jsx)(s.li,{children:"Primarily used for archival storage; very slow access due to sequential reading."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Why is Storage Hierarchy Important?"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Performance Optimization:"})," Data is stored at the appropriate level based on its usage frequency. Frequently accessed data is kept in faster storage, while less frequently accessed data is stored in slower, cheaper storage."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Cost Optimization:"})," By using a hierarchy, organizations can balance performance and cost by storing data at the most suitable level."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Availability:"})," Critical data can be replicated across multiple storage levels to ensure high availability and redundancy."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example of Storage Hierarchy in a Database System:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Primary Storage:"})," Active database buffers, query results, and frequently accessed data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Secondary Storage:"})," Main database files, indexes, and temporary data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tertiary Storage:"})," Historical data, backups, and archived data."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Factors Influencing Storage Hierarchy:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Frequency:"})," How often data is accessed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Size:"})," The amount of data to be stored."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Retention Requirements:"})," How long data needs to be retained."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Cost Constraints:"})," Budgetary limitations."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Emerging Trends:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Cloud Storage:"})," Leveraging external storage providers for scalable and flexible storage solutions."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hybrid Cloud Storage:"})," Combining on-premises and cloud storage for optimal performance and cost."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Object Storage:"})," Designed for storing large amounts of unstructured data."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Understanding the storage hierarchy is crucial for designing efficient and cost-effective storage systems in various applications, including databases, cloud computing, and data centers."}),"\n",(0,i.jsx)(s.h2,{id:"sequential-vs-random-access",children:"Sequential vs. Random Access"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Sequential Access:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Data is accessed in a linear order, starting from the beginning of a file."}),"\n",(0,i.jsx)(s.li,{children:"Typically used for tapes and older storage devices."}),"\n",(0,i.jsx)(s.li,{children:"Requires reading all preceding data to access a specific data item."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"})," Reading a book from the beginning to reach a specific page."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Random Access:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Data can be accessed directly without reading intermediate data."}),"\n",(0,i.jsx)(s.li,{children:"Typically used for modern storage devices like hard disk drives (HDDs) and solid-state drives (SSDs)."}),"\n",(0,i.jsx)(s.li,{children:"Allows for efficient data retrieval and modification."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"})," Jumping directly to a specific page in a book using the table of contents."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Random access on ",(0,i.jsx)(s.strong,{children:"non-volatile"})," storage is almost always ",(0,i.jsx)(s.strong,{children:"much slower"})," than sequential access.",(0,i.jsx)(s.br,{}),"\n","DBMS will want to maximize sequential access."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"storage-manager",children:"Storage Manager"}),"\n",(0,i.jsx)(s.p,{children:"The Storage Manager is a critical component of a Database Management System (DBMS) responsible for managing the physical storage and retrieval of data. It acts as an interface between the DBMS and the underlying storage devices, such as hard disk drives (HDDs) or solid-state drives (SSDs)."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Functions of the Storage Manager:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Storage:"})," Allocates physical storage space for data and indexes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Retrieval:"})," Retrieves data from storage based on user queries or application requests."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Modification:"})," Updates, inserts, and deletes data within the storage system."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Concurrency Control:"})," Ensures that multiple transactions can access and modify data simultaneously without conflicts."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Recovery Management:"})," Recovers the database to a consistent state in case of failures or errors."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Components of the Storage Manager:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Buffer Manager:"})," Manages a cache of data pages in memory to improve performance."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"File Manager:"})," Organizes data into files and manages file structures."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Manager:"})," Handles the allocation and deallocation of pages within files."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Access Methods:"})," Provides mechanisms for efficiently accessing data, such as B-trees, hash indexes, and sequential scans."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Concurrency Control Manager:"})," Implements techniques like locking or timestamping to prevent conflicts."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Recovery Manager:"})," Maintains a log of transactions and uses it to undo or redo operations in case of failures."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"database-pages",children:"Database Pages"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:"/img/DatabasePage.png",alt:"Client Server"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Database pages"})," are the fundamental units of data storage within a database system. They are fixed-size blocks of data that are read from and written to disk. Pages provide a structured and efficient way to organize and manage data."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Characteristics of Database Pages:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Fixed Size:"})," Pages have a predetermined size, typically measured in bytes. This ensures consistent data access and storage management."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Header:"})," The header section of a page contains metadata information, such as the page number, transaction ID, and flags indicating the page's status (e.g., dirty, free)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Area:"})," The data area stores the actual data, which can be organized in various ways depending on the database system and data structure."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Free Space:"})," Pages often include a free space area to accommodate insertions and updates without requiring the entire page to be rewritten."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Oracle and some other databases can have different page sizes for each table."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Page Management Techniques:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Allocation:"})," Determining which page to use for storing new data. This can be done using techniques like sequential allocation, linked allocation, or indexed allocation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Replacement:"})," Deciding which page to remove from the buffer pool (in-memory cache) when a new page needs to be loaded. Common algorithms include LRU (Least Recently Used), FIFO (First-In-First-Out), and LFU (Least Frequently Used)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Splitting and Merging:"})," Handling situations where a page becomes full or nearly empty. Splitting a page creates two new pages, while merging combines two pages into one."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Page Types:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Pages:"})," Store the actual data records."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Index Pages:"})," Store index entries that point to data pages, enabling efficient data retrieval."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Metadata Pages:"})," Store information about the database structure, such as table definitions, indexes, and constraints."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Page-Based Storage Advantages:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Efficiency:"})," Pages provide a convenient size for reading and writing data to disk."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Simplicity:"})," They offer a uniform way to manage data storage."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Performance:"})," Page-based storage can improve performance by reducing the number of I/O operations required."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Considerations:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Size:"})," The choice of page size can impact performance and storage efficiency. Larger pages may reduce the number of I/O operations but can also lead to wasted space if pages are not fully utilized. Also write operations can be slow if the page size is too large."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Organization:"})," The way data is organized within a page can affect retrieval efficiency. Techniques like B-trees, hash tables, and heap files are commonly used."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Compression:"})," Compressing data within pages can reduce storage requirements and improve I/O performance."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"default-page-sizes-in-different-databases",children:"Default Page Sizes in Different Databases"}),"\n",(0,i.jsx)(s.p,{children:"The default page size varies among different database systems. Here are some common default page sizes:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Relational Databases:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"MySQL:"})," 16KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"PostgreSQL:"})," 8KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Oracle Database:"})," 8KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SQL Server:"})," 8KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"DB2:"})," 4KB"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"NoSQL Databases:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"MongoDB:"})," 16KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Cassandra:"})," 64KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Couchbase:"})," 16KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Redis:"})," 4KB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Riak:"})," 16KB"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"page-heap",children:"Page Heap"}),"\n",(0,i.jsx)("img",{src:"/img/DatabaseHeap.png",alt:"Client Server",style:{width:"100%"}}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"page heap"})," is a data structure used in database systems to manage the allocation and deallocation of storage pages. It's essentially a collection of free and used pages within a database file."]}),"\n",(0,i.jsx)(s.p,{children:"The DBMS can locate a page on disk given a page id by using a linked list of pages or a page directory."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Linked List:"})," Header page holds pointers to a list of free pages and a list of data pages. However, if the DBMS is looking for a specific page, it has to do a sequential scan on the data page list until it finds the page it is looking for."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Directory:"})," DBMS maintains special pages, called page directory, to track locations of data pages, the amount of free space on each page, a list of free/empty pages and the page type. These special pages have one entry for each database object."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Page Heap Algorithms:"})}),"\n",(0,i.jsx)(s.p,{children:"Different database systems use various algorithms to manage the page heap:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"First-Fit:"})," The first free page that is large enough to accommodate the new data object is allocated."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Best-Fit:"})," The smallest free page that is large enough is allocated."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Worst-Fit:"})," The largest free page is allocated."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The choice of algorithm can impact the performance and efficiency of the database system. For example, first-fit is often a good choice for simplicity and speed, but it can lead to fragmentation over time. Best-fit can reduce fragmentation but may require more overhead to find the best-fit page."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Page Heap Fragmentation:"})}),"\n",(0,i.jsx)(s.p,{children:"Fragmentation occurs when free space is scattered across the page heap, resulting in small, non-contiguous free blocks. Fragmentation can reduce storage utilization and performance."}),"\n",(0,i.jsx)(s.p,{children:"To mitigate fragmentation, database systems may employ techniques like:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Coalescing:"})," Combining adjacent free pages into larger free blocks."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Defragmentation:"})," Reorganizing the data to consolidate free space and improve performance."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Splitting and Merging:"})," Splitting large pages or merging small pages to optimize storage utilization."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"page-layout-in-database-storage",children:"Page Layout in Database Storage"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"page"})," is a fixed-size block of data that is the fundamental unit of storage in a database system. The layout of a page defines how data is organized within the page, including the header, data area, and free space."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Header Structure:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page ID:"})," A unique identifier for the page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Type:"})," Indicates the type of page (e.g., data page, index page, metadata page)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Free Space:"})," The amount of free space available on the page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Transaction ID:"})," The transaction that last modified the page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Checksum:"})," A value used to verify data integrity."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"tuple-oriented-storage---slotted-pages",children:"Tuple Oriented Storage - Slotted Pages"}),"\n",(0,i.jsx)("img",{src:"/img/DatabasePageWithSlots.png",alt:"Client Server",style:{width:"100%"}}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"slotted page"})," is a type of page layout commonly used in database systems to efficiently store variable-length records. In a slotted page, a fixed-size header is followed by a variable-length data area. The header contains information about the number of slots and the offset of each slot within the data area."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Components of a Slotted Page:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Header:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Number of Slots:"})," The total number of slots in the page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Slot Directory:"})," An array of slot descriptors, each containing the offset of the corresponding record and its length."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Data Area:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stores the actual data records."}),"\n",(0,i.jsx)(s.li,{children:"Records can be of varying lengths and are stored contiguously."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Advantages of Slotted Pages:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Efficient Storage:"})," Slotted pages allow for efficient storage of variable-length records."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Flexible Record Insertion:"})," New records can be inserted into free space within the page, reducing the need for page splits."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Efficient Record Deletion:"})," Deleted records can be marked as deleted without physically removing them from the page, allowing for potential reuse of the space."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Disadvantages of Slotted Pages:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Fragmentation:"})," Over time, as records are inserted and deleted, fragmentation can occur, reducing storage utilization."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Complexity:"})," Slotted pages require more complex management compared to fixed-width record pages."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Slotted Page Management:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Slot Allocation:"})," When a new record is inserted, the system selects a free slot and updates the slot directory."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Slot Deallocation:"})," When a record is deleted, the slot is marked as free, but the data may remain on the page until it is overwritten by a new record."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Fragmentation Management:"})," To minimize fragmentation, database systems may employ techniques like coalescing adjacent free slots or defragmenting the page."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"record-ids-in-databases",children:"Record IDs in Databases"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Record IDs (RIDs)"})," are unique identifiers assigned to tuples (rows) in a database. They help pinpoint the exact location of data in storage, which is essential for efficient data retrieval and manipulation. RIDs typically consist of two components:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Page Number"}),": Indicates the specific page in storage where the tuple resides."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tuple Offset"}),": Specifies the position of the tuple within that page."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This structure allows database management systems to quickly access records without scanning the entire dataset."}),"\n",(0,i.jsx)(s.h3,{id:"record-ids-in-different-databases",children:"Record IDs in Different Databases"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Relational Databases (e.g., MySQL, PostgreSQL, Oracle)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Implementation"}),": In relational databases, RIDs usually represent a combination of a page number and a tuple offset. For example, MySQL's InnoDB storage engine uses RIDs to locate rows within clustered indexes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage"}),": RIDs facilitate efficient data retrieval and support operations like updates and deletes by referencing specific tuples directly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NoSQL Databases (e.g., MongoDB)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Implementation"}),": MongoDB utilizes ",(0,i.jsx)(s.strong,{children:"ObjectIDs"})," as unique identifiers for its documents. While not traditional RIDs, ObjectIDs serve a similar function by providing unique access points for documents."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage"}),": These IDs enable quick document retrieval and ensure that each document is uniquely identifiable across collections."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Key-Value Stores (e.g., Redis, Amazon DynamoDB)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Implementation"}),": In key-value databases, the key acts as a unique identifier for records. Although not RIDs in the classic sense, the keys function similarly by providing direct access to values."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage"}),": Keys allow for rapid data access without the need for additional indexing, making operations very efficient."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Column-Family Stores (e.g., Apache Cassandra)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Implementation"}),": Cassandra uses a unique primary key for each row, which can be considered a form of RID. This key is crucial for directly accessing data within the distributed architecture."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage"}),": The primary key structure allows for efficient data retrieval and supports horizontal scalability, ensuring that data can be accessed quickly even in large datasets."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Graph Databases (e.g., Neo4j)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Implementation"}),": In Neo4j, every node and relationship has a unique internal identifier, functioning similarly to RIDs. These IDs allow for efficient traversal and querying of the graph structure."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Usage"}),": Unique identifiers facilitate quick access to nodes and relationships, which is essential for graph-based queries."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"tuple-layout",children:"Tuple Layout"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:"/img/TupleLayout.png",alt:"Client Server"})}),"\n",(0,i.jsx)(s.p,{children:"A tuple is essentially a sequence of bytes (these bytes do not have to be contiguous). It is the DBMS\u2019s job to interpret those bytes into attribute types and values."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tuple Header:"})," Contains meta-data about the tuple.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Visibility information for the DBMS\u2019s concurrency control protocol (i.e., information about which transaction created/modified that tuple)."}),"\n",(0,i.jsx)(s.li,{children:"Bit Map for NULL values."}),"\n",(0,i.jsx)(s.li,{children:"Note that the DBMS does not need to store meta-data about the schema of the database here."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tuple Data:"})," Actual data for attributes.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Attributes are typically stored in the order that you specify them when you create the table."}),"\n",(0,i.jsx)(s.li,{children:"Most DBMSs do not allow a tuple to exceed the size of a page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Unique Identifier:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Each tuple in the database is assigned a unique identifier."}),"\n",(0,i.jsx)(s.li,{children:"Most common: page id + (offset or slot)."}),"\n",(0,i.jsx)(s.li,{children:"An application cannot rely on these ids to mean anything."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Denormalized Tuple Data"}),": If two tables are related, the DBMS can \u201cpre-join\u201d them, so the tables end up on the same page. This makes reads faster since the DBMS only has to load in one page rather than two separate pages. However, it makes updates more expensive since the DBMS needs more space for each tuple."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(6540);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);