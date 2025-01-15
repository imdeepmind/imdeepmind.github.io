"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[3842],{14787:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"databases/database-engineering/sharding","title":"Sharding","description":"Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases or nodes, often referred to as shards. Each shard contains a subset of the total data, making the overall system more scalable and resilient. It is particularly useful for handling very large datasets and high-throughput applications.","source":"@site/docs/databases/database-engineering/sharding.md","sourceDirName":"databases/database-engineering","slug":"/databases/database-engineering/sharding","permalink":"/docs/databases/database-engineering/sharding","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/databases/database-engineering/sharding.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735558067000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Partitioning","permalink":"/docs/databases/database-engineering/partitioning"},"next":{"title":"Replication","permalink":"/docs/databases/database-engineering/replication"}}');var r=s(74848),d=s(28453);const a={sidebar_position:9},l="Sharding",t={},h=[{value:"Why Sharding is Needed?",id:"why-sharding-is-needed",level:2},{value:"How Sharding Works",id:"how-sharding-works",level:2},{value:"Steps in Sharding",id:"steps-in-sharding",level:3},{value:"Sharding Strategies",id:"sharding-strategies",level:2},{value:"Range-Based Sharding",id:"range-based-sharding",level:3},{value:"Hash-Based Sharding",id:"hash-based-sharding",level:3},{value:"Directory-Based Sharding",id:"directory-based-sharding",level:3},{value:"Advantages of Sharding",id:"advantages-of-sharding",level:2},{value:"Disadvantages of Sharding",id:"disadvantages-of-sharding",level:2},{value:"Sharding vs Partitioning",id:"sharding-vs-partitioning",level:2},{value:"Sharding vs Replication",id:"sharding-vs-replication",level:2},{value:"Use Cases of Sharding",id:"use-cases-of-sharding",level:2},{value:"Sharding in Practice",id:"sharding-in-practice",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"sharding",children:"Sharding"})}),"\n",(0,r.jsxs)(e.p,{children:["Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases or nodes, often referred to as ",(0,r.jsx)(e.strong,{children:"shards"}),". Each shard contains a subset of the total data, making the overall system more scalable and resilient. It is particularly useful for handling very large datasets and high-throughput applications."]}),"\n",(0,r.jsx)(e.h2,{id:"why-sharding-is-needed",children:"Why Sharding is Needed?"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Scalability"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Single database systems have limitations in terms of storage capacity and throughput. Sharding allows for horizontal scaling by distributing data across multiple nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Performance"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Queries can be processed in parallel on multiple shards, reducing response times for large datasets."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"High Availability"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"In case of a failure on one shard, the others can continue to operate, improving overall system availability."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Data Isolation"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Data can be logically separated based on application needs, making it easier to manage and query specific subsets."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"how-sharding-works",children:"How Sharding Works"}),"\n",(0,r.jsxs)(e.p,{children:["In sharding, data is distributed across shards based on a ",(0,r.jsx)(e.strong,{children:"shard key"}),". The shard key determines how the data is split and placed into shards."]}),"\n",(0,r.jsx)(e.h3,{id:"steps-in-sharding",children:"Steps in Sharding"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Select Shard Key"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A column or a combination of columns is chosen as the shard key. The key must provide even distribution of data across shards."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Example: ",(0,r.jsx)(e.code,{children:"user_id"}),", ",(0,r.jsx)(e.code,{children:"region"}),", or ",(0,r.jsx)(e.code,{children:"order_id"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Distribute Data"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Data is distributed across shards based on a mapping function. Common methods include range-based, hash-based, or directory-based sharding."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Query Routing"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A query router is used to route queries to the correct shard(s) based on the shard key."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"sharding-strategies",children:"Sharding Strategies"}),"\n",(0,r.jsx)(e.h3,{id:"range-based-sharding",children:"Range-Based Sharding"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Data is divided into shards based on value ranges of the shard key."}),"\n",(0,r.jsx)(e.li,{children:"Example: User data partitioned by age range or time range."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Shard 1: Users with ",(0,r.jsx)(e.code,{children:"user_id"})," between 1 and 1,000,000."]}),"\n",(0,r.jsxs)(e.li,{children:["Shard 2: Users with ",(0,r.jsx)(e.code,{children:"user_id"})," between 1,000,001 and 2,000,000."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Easy to implement and understand."}),"\n",(0,r.jsx)(e.li,{children:"Good for queries targeting specific ranges."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Risk of uneven data distribution if data growth is not uniform (hotspots)."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"hash-based-sharding",children:"Hash-Based Sharding"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A hash function is applied to the shard key to determine the shard for each row of data."}),"\n",(0,r.jsxs)(e.li,{children:["Example:","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"shard_number = hash(user_id) % total_shards\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Ensures even distribution of data across shards."}),"\n",(0,r.jsx)(e.li,{children:"Avoids data hotspots."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Difficult to perform range queries."}),"\n",(0,r.jsx)(e.li,{children:"Adding or removing shards requires rehashing (data migration)."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"directory-based-sharding",children:"Directory-Based Sharding"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A lookup table is maintained to map shard keys to specific shards."}),"\n",(0,r.jsxs)(e.li,{children:["Example:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Shard 1: Data for ",(0,r.jsx)(e.code,{children:"region = 'US'"})]}),"\n",(0,r.jsxs)(e.li,{children:["Shard 2: Data for ",(0,r.jsx)(e.code,{children:"region = 'EU'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Flexible and customizable."}),"\n",(0,r.jsx)(e.li,{children:"Good for specific use cases with pre-defined keys."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"The lookup table can become a bottleneck."}),"\n",(0,r.jsx)(e.li,{children:"Maintenance overhead."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"advantages-of-sharding",children:"Advantages of Sharding"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Horizontal Scalability"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sharding allows for the addition of new nodes to handle increased data volumes or throughput."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Parallel Query Processing"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Queries are processed in parallel across shards, reducing query execution time."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Fault Tolerance"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If one shard goes down, the other shards can continue to serve requests."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Data Locality"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Shards can be located geographically close to the users they serve, reducing latency."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cost Efficiency"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Instead of scaling vertically (e.g., adding expensive hardware), horizontal scaling with commodity servers reduces cost."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"disadvantages-of-sharding",children:"Disadvantages of Sharding"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Complexity"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sharding increases system complexity. Query routing, data distribution, and maintenance require additional effort."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Data Rebalancing"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Adding or removing shards involves redistributing data, which can be costly and time-consuming."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cross-Shard Queries"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Queries that span multiple shards can be slow and require additional logic for merging results."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Consistency"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Maintaining strong consistency across shards is difficult, especially in distributed systems."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Operational Overhead"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Monitoring, backup, and recovery of multiple shards is more complex than a single database."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"sharding-vs-partitioning",children:"Sharding vs Partitioning"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Aspect"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Sharding"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Partitioning"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Scope"})}),(0,r.jsx)(e.td,{children:"Data split across multiple databases/nodes."}),(0,r.jsx)(e.td,{children:"Data split within a single database."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Use Case"})}),(0,r.jsx)(e.td,{children:"Large-scale horizontal scaling."}),(0,r.jsx)(e.td,{children:"Optimizing queries and maintenance."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Query Routing"})}),(0,r.jsx)(e.td,{children:"Requires a query router."}),(0,r.jsx)(e.td,{children:"Queries are handled by the database."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Complexity"})}),(0,r.jsx)(e.td,{children:"Higher due to distributed nature."}),(0,r.jsx)(e.td,{children:"Lower as it resides in one database."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"sharding-vs-replication",children:"Sharding vs Replication"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Aspect"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Sharding"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Replication"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Data Distribution"})}),(0,r.jsx)(e.td,{children:"Different data stored on each shard."}),(0,r.jsx)(e.td,{children:"Same data replicated across nodes."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Purpose"})}),(0,r.jsx)(e.td,{children:"Horizontal scaling for large datasets."}),(0,r.jsx)(e.td,{children:"High availability and redundancy."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Query Routing"})}),(0,r.jsx)(e.td,{children:"Queries routed to specific shards."}),(0,r.jsx)(e.td,{children:"Queries served by any replica."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"use-cases-of-sharding",children:"Use Cases of Sharding"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Large-Scale Applications"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Social media platforms with millions of users (e.g., Twitter, Facebook)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Time-Series Data"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"IoT or log data where new data grows indefinitely."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Geographic Distribution"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Applications with users spread across different regions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"High-Write Workloads"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Applications with heavy insert/update operations (e.g., e-commerce platforms)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"sharding-in-practice",children:"Sharding in Practice"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"MongoDB"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Native support for sharding with automatic query routing."}),"\n",(0,r.jsx)(e.li,{children:"Sharding based on shard keys."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"MySQL"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Requires external tools (e.g., Vitess) or custom logic for sharding."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"PostgreSQL"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Uses partitioning or external tools like Citus for sharding."}),"\n"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>l});var i=s(96540);const r={},d=i.createContext(r);function a(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);