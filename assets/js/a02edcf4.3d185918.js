"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[270],{1820:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"system-design/fundamental-concepts/cap-theorem","title":"CAP Theorem","description":"The CAP Theorem, also known as Brewer\'s Theorem, is a fundamental principle in distributed systems. It was introduced by Eric Brewer in 2000 and formally proven by Seth Gilbert and Nancy Lynch in 2002. The theorem states that in a distributed system, it is impossible to simultaneously guarantee all three of the following properties:","source":"@site/docs/system-design/fundamental-concepts/cap-theorem.md","sourceDirName":"system-design/fundamental-concepts","slug":"/system-design/fundamental-concepts/cap-theorem","permalink":"/docs/system-design/fundamental-concepts/cap-theorem","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/system-design/fundamental-concepts/cap-theorem.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Latency and Throughput","permalink":"/docs/system-design/fundamental-concepts/latency-and-throughput"},"next":{"title":"Introduction","permalink":"/docs/data-structure-and-algorithms/introduction"}}');var t=i(4848),r=i(8453);const o={sidebar_position:3},a="CAP Theorem",l={},c=[{value:"Trade-offs in CAP",id:"trade-offs-in-cap",level:2},{value:"Google Spanner and the CAP Theorem",id:"google-spanner-and-the-cap-theorem",level:2},{value:"Key Features of Google Spanner",id:"key-features-of-google-spanner",level:3},{value:"How Spanner &quot;Breaks&quot; CAP",id:"how-spanner-breaks-cap",level:3},{value:"Limitations and Practical Considerations",id:"limitations-and-practical-considerations",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cap-theorem",children:"CAP Theorem"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"CAP Theorem"}),", also known as Brewer's Theorem, is a fundamental principle in distributed systems. It was introduced by Eric Brewer in 2000 and formally proven by Seth Gilbert and Nancy Lynch in 2002. The theorem states that in a distributed system, it is impossible to simultaneously guarantee all three of the following properties:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consistency (C):"})," Every read receives the most recent write or an error. In other words, all nodes in the system see the same data at the same time."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Availability (A):"})," Every request (read or write) receives a response, even if some nodes in the system are down."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Partition Tolerance (P):"})," The system continues to operate despite arbitrary partitioning due to network failures."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the presence of a network partition, a distributed system must choose between ",(0,t.jsx)(n.strong,{children:"consistency"})," and ",(0,t.jsx)(n.strong,{children:"availability"}),", as achieving both is theoretically impossible."]}),"\n",(0,t.jsx)(n.h2,{id:"trade-offs-in-cap",children:"Trade-offs in CAP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CP Systems:"})," Prioritize consistency over availability during network partitions. For example, databases like HBase and MongoDB in certain configurations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AP Systems:"})," Prioritize availability over consistency, ensuring the system remains operational but might serve stale or inconsistent data. Examples include DynamoDB and Cassandra."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CA Systems:"})," These are achievable only in systems without partitions, which is impractical in real-world distributed systems due to the inevitability of network failures."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"google-spanner-and-the-cap-theorem",children:"Google Spanner and the CAP Theorem"}),"\n",(0,t.jsxs)(n.p,{children:["Google Spanner is a globally distributed database that appears to challenge the CAP theorem by offering ",(0,t.jsx)(n.strong,{children:"strong consistency"}),", ",(0,t.jsx)(n.strong,{children:"high availability"}),", and ",(0,t.jsx)(n.strong,{children:"partition tolerance"}),". It achieves this through innovative architectural and algorithmic designs. Here's how Spanner addresses CAP:"]}),"\n",(0,t.jsx)(n.h3,{id:"key-features-of-google-spanner",children:"Key Features of Google Spanner"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"TrueTime API:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Spanner leverages Google's TrueTime API, a globally synchronized clock with bounded uncertainty. This allows Spanner to timestamp transactions with confidence, ensuring strong consistency."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TrueTime's API enables linearizable consistency by defining precise time intervals during which events occur, avoiding ambiguity."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Synchronous Replication:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Spanner uses Paxos-based consensus protocols for synchronous replication across multiple nodes. This ensures that all replicas agree on the order of transactions, maintaining consistency."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Partition Tolerance:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"By design, Spanner ensures that partitions do not compromise the integrity of the system. While partitions might delay operations, Spanner's synchronous replication and distributed consensus allow it to resume consistent operations once connectivity is restored."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"High Availability:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Spanner's architecture is designed to mitigate the impact of network partitions. It replicates data across geographically dispersed nodes, ensuring availability even during localized failures."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-spanner-breaks-cap",children:'How Spanner "Breaks" CAP'}),"\n",(0,t.jsx)(n.p,{children:"Spanner operates in the CP space of the CAP theorem, prioritizing consistency and partition tolerance. It avoids the typical trade-offs by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Minimizing Partition Effects:"})," Spanner's reliance on Google's highly reliable and low-latency network infrastructure significantly reduces the likelihood and impact of network partitions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Bounded Delays:"})," Spanner introduces controlled delays using TrueTime to maintain strong consistency without sacrificing availability significantly. These delays are often imperceptible to users."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limitations-and-practical-considerations",children:"Limitations and Practical Considerations"}),"\n",(0,t.jsx)(n.p,{children:"While Spanner's design is groundbreaking, it doesn't completely escape the CAP theorem. Instead, it mitigates the trade-offs by operating in a controlled environment with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Strict infrastructure requirements (e.g., Google's custom network and TrueTime)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Higher operational costs due to its reliance on synchronous replication and global clock synchronization."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);