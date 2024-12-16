"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[9391],{5406:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"system-design/fundamental-concepts/scalability","title":"Scalability","description":"Scaling in computing refers to the ability to handle increasing workloads by expanding resources. There are two primary types of scaling: horizontal scaling and vertical scaling. Below is a detailed breakdown of both approaches, including their definitions, benefits, challenges, and use cases.","source":"@site/docs/system-design/fundamental-concepts/scalability.md","sourceDirName":"system-design/fundamental-concepts","slug":"/system-design/fundamental-concepts/scalability","permalink":"/docs/system-design/fundamental-concepts/scalability","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/system-design/fundamental-concepts/scalability.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734191566000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"High and Low Level Design","permalink":"/docs/system-design/fundamental-concepts/high-and-low-level-design"},"next":{"title":"Availability","permalink":"/docs/system-design/fundamental-concepts/availability"}}');var r=s(4848),t=s(8453);const l={sidebar_position:2},a="Scalability",c={},d=[{value:"Vertical Scaling",id:"vertical-scaling",level:2},{value:"Key Characteristics:",id:"key-characteristics",level:3},{value:"Benefits:",id:"benefits",level:3},{value:"Challenges:",id:"challenges",level:3},{value:"Use Cases:",id:"use-cases",level:3},{value:"Horizontal Scaling",id:"horizontal-scaling",level:3},{value:"Key Characteristics:",id:"key-characteristics-1",level:3},{value:"Benefits:",id:"benefits-1",level:3},{value:"Challenges:",id:"challenges-1",level:3},{value:"Use Cases:",id:"use-cases-1",level:3},{value:"Comparison Table",id:"comparison-table",level:2},{value:"Choosing Between Horizontal and Vertical Scaling",id:"choosing-between-horizontal-and-vertical-scaling",level:2}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"scalability",children:"Scalability"})}),"\n",(0,r.jsx)(n.p,{children:"Scaling in computing refers to the ability to handle increasing workloads by expanding resources. There are two primary types of scaling: horizontal scaling and vertical scaling. Below is a detailed breakdown of both approaches, including their definitions, benefits, challenges, and use cases."}),"\n",(0,r.jsx)(n.h2,{id:"vertical-scaling",children:"Vertical Scaling"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Definition:"})," Vertical scaling, also known as scaling up, involves adding more resources (e.g., CPU, memory, or storage) to an existing server. Instead of adding more servers, the capacity of a single machine is enhanced."]}),"\n",(0,r.jsx)(n.h3,{id:"key-characteristics",children:"Key Characteristics:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resource Augmentation:"})," Upgrades a single machine with better hardware."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Centralized Architecture:"})," Focuses on improving the performance of one node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Easier Management:"})," Fewer nodes to manage compared to horizontal scaling."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"benefits",children:"Benefits:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simplified Architecture:"})," No need for load balancers or distributed systems."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ease of Implementation:"})," Easier to upgrade an existing server than to manage a cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Consistency:"})," Single-node systems do not face distributed consistency issues."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optimized Resource Utilization:"})," Makes full use of hardware capabilities."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"challenges",children:"Challenges:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hardware Limits:"})," Physical hardware imposes a ceiling on how much you can scale."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Downtime:"})," Upgrading a server often requires downtime."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cost:"})," High-performance servers are more expensive."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Single Point of Failure:"})," If the server fails, the entire system is affected."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases",children:"Use Cases:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Legacy Systems:"})," Applications not designed for distributed architecture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Databases:"})," High-performance databases that require more memory or CPU."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enterprise Applications:"})," Systems with predictable workloads."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quick Fixes:"})," Temporary solutions where horizontal scaling is not immediately feasible."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"horizontal-scaling",children:"Horizontal Scaling"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Definition:"})," Horizontal scaling, also known as scaling out, involves adding more machines or nodes to a system. Instead of increasing the power of a single server, additional servers are introduced to distribute the workload."]}),"\n",(0,r.jsx)(n.h3,{id:"key-characteristics-1",children:"Key Characteristics:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Node Addition:"})," Increases capacity by adding more servers to the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Redundancy:"})," Multiple nodes improve fault tolerance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Distribution:"})," Requires load balancing to distribute traffic among the nodes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Decentralized Architecture:"})," Often associated with distributed systems like microservices."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"benefits-1",children:"Benefits:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Improved Fault Tolerance:"})," If one server fails, others can take over the workload."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cost-Effective Scaling:"})," Commodity hardware can be used instead of investing in high-end servers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Infinite Scalability:"})," There is theoretically no limit to how many nodes you can add."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Geographic Distribution:"})," Nodes can be deployed across different regions for better latency and user experience."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"challenges-1",children:"Challenges:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Complexity:"})," Managing and orchestrating multiple nodes can be complex."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Consistency Issues:"})," Data consistency can be harder to maintain in distributed databases."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Load Balancing:"})," Requires robust mechanisms to evenly distribute traffic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inter-node Communication:"})," High latency between nodes can affect performance."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases-1",children:"Use Cases:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Web Applications:"})," High-traffic websites like e-commerce platforms."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cloud Services:"})," Systems like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Big Data Systems:"})," Distributed data processing systems such as Hadoop and Apache Spark."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content Delivery Networks (CDNs):"})," Distributing content closer to users for faster delivery."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"comparison-table",children:"Comparison Table"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Aspect"}),(0,r.jsx)(n.th,{children:"Horizontal Scaling"}),(0,r.jsx)(n.th,{children:"Vertical Scaling"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Definition"})}),(0,r.jsx)(n.td,{children:"Adding more servers to the system."}),(0,r.jsx)(n.td,{children:"Adding more resources to a server."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Architecture"})}),(0,r.jsx)(n.td,{children:"Decentralized and distributed."}),(0,r.jsx)(n.td,{children:"Centralized."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Scalability"})}),(0,r.jsx)(n.td,{children:"Theoretically infinite."}),(0,r.jsx)(n.td,{children:"Limited by hardware constraints."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Complexity"})}),(0,r.jsx)(n.td,{children:"High due to orchestration needs."}),(0,r.jsx)(n.td,{children:"Low, as fewer nodes are involved."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Fault Tolerance"})}),(0,r.jsx)(n.td,{children:"High, as failure of one node is manageable."}),(0,r.jsx)(n.td,{children:"Low, as a single point of failure exists."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Cost"})}),(0,r.jsx)(n.td,{children:"Incremental cost with commodity hardware."}),(0,r.jsx)(n.td,{children:"High, due to expensive upgrades."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Implementation Time"})}),(0,r.jsx)(n.td,{children:"Longer, requires planning and orchestration."}),(0,r.jsx)(n.td,{children:"Faster, as it involves upgrading one machine."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Use Case Examples"})}),(0,r.jsx)(n.td,{children:"Web apps, big data, cloud systems."}),(0,r.jsx)(n.td,{children:"Legacy systems, databases, enterprise apps."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"choosing-between-horizontal-and-vertical-scaling",children:"Choosing Between Horizontal and Vertical Scaling"}),"\n",(0,r.jsx)(n.p,{children:"The choice between horizontal and vertical scaling depends on various factors:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Workload Characteristics:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Horizontal scaling is ideal for unpredictable workloads with spikes."}),"\n",(0,r.jsx)(n.li,{children:"Vertical scaling works for steady workloads that demand high resource usage."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Budget:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Horizontal scaling can be more cost-effective with commodity hardware."}),"\n",(0,r.jsx)(n.li,{children:"Vertical scaling may incur higher initial costs for hardware upgrades."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fault Tolerance Needs:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If high availability is crucial, horizontal scaling is preferable."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Legacy Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Applications not designed for distributed environments may require vertical scaling."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Future Growth:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Horizontal scaling offers more flexibility for long-term growth."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);