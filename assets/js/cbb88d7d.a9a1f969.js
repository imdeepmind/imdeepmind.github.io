"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[3887],{13944:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"system-design/fundamental-concepts/high-and-low-level-design","title":"High and Low Level Design","description":"Low-Level Design (LLD) and High-Level Design (HLD) are essential components of software development, specifically in the architecture and design phases of a project. Both serve distinct purposes and focus on different levels of abstraction in system design. Below is a detailed breakdown of both concepts.","source":"@site/docs/system-design/fundamental-concepts/high-and-low-level-design.md","sourceDirName":"system-design/fundamental-concepts","slug":"/system-design/fundamental-concepts/high-and-low-level-design","permalink":"/docs/system-design/fundamental-concepts/high-and-low-level-design","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/system-design/fundamental-concepts/high-and-low-level-design.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736677087000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/system-design/introduction"},"next":{"title":"CAP Theorem","permalink":"/docs/system-design/fundamental-concepts/cap-theorem"}}');var t=n(74848),r=n(28453);const l={sidebar_position:1},d="High and Low Level Design",o={},a=[{value:"High-Level Design (HLD)",id:"high-level-design-hld",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Example",id:"example",level:3},{value:"Low-Level Design (LLD)",id:"low-level-design-lld",level:2},{value:"Key Features",id:"key-features-1",level:3},{value:"Artifacts",id:"artifacts-1",level:3},{value:"Purpose",id:"purpose-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Key Differences Between HLD and LLD",id:"key-differences-between-hld-and-lld",level:2},{value:"Best Practices for HLD",id:"best-practices-for-hld",level:2},{value:"Best Practices for LLD",id:"best-practices-for-lld",level:2}];function c(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"high-and-low-level-design",children:"High and Low Level Design"})}),"\n",(0,t.jsx)(s.p,{children:"Low-Level Design (LLD) and High-Level Design (HLD) are essential components of software development, specifically in the architecture and design phases of a project. Both serve distinct purposes and focus on different levels of abstraction in system design. Below is a detailed breakdown of both concepts."}),"\n",(0,t.jsx)(s.h2,{id:"high-level-design-hld",children:"High-Level Design (HLD)"}),"\n",(0,t.jsx)(s.p,{children:"High-Level Design focuses on the architecture and overall structure of the system. It provides an abstract overview of the system's components and their interactions without delving into implementation details."}),"\n",(0,t.jsx)(s.h3,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Abstract Representation:"}),' Emphasizes the "what" rather than the "how" of the system.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"System Architecture:"})," Includes components such as servers, databases, APIs, user interfaces, and third-party integrations."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Technology Choices:"})," Identifies the technology stack, frameworks, and tools to be used."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Scalability and Reliability:"})," Plans for system scalability, fault tolerance, and high availability."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Communication Flows:"})," Describes how components communicate with one another (e.g., via REST, gRPC, or message queues)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Non-Functional Requirements:"})," Covers performance, security, and deployment considerations."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"artifacts",children:"Artifacts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Architectural diagrams (e.g., flowcharts, UML diagrams, system context diagrams)."}),"\n",(0,t.jsx)(s.li,{children:"Component diagrams showing system modules and their relationships."}),"\n",(0,t.jsx)(s.li,{children:"Documentation of APIs and external integrations."}),"\n",(0,t.jsx)(s.li,{children:"Outline of deployment and hosting plans."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Provide stakeholders, including developers and non-technical teams, with a clear understanding of the system\u2019s architecture."}),"\n",(0,t.jsx)(s.li,{children:"Serve as a guide for the detailed design and development phases."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"For an e-commerce application, the HLD might describe:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Frontend:"})," Web and mobile interfaces."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Backend:"})," Microservices architecture."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Database:"})," SQL or NoSQL database for product and user information."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"External Services:"})," Payment gateways, email services, and third-party analytics tools."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Deployment:"})," Hosted on AWS using Kubernetes for container orchestration."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"low-level-design-lld",children:"Low-Level Design (LLD)"}),"\n",(0,t.jsx)(s.p,{children:'Low-Level Design focuses on the implementation details of individual modules or components within the system. It defines the "how" of the system by providing specifications for coding, algorithms, and class-level designs.'}),"\n",(0,t.jsx)(s.h3,{id:"key-features-1",children:"Key Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Detailed Representation:"})," Breaks down high-level modules into smaller, concrete components."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Class Diagrams:"})," Specifies classes, their attributes, methods, and relationships."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Data Flow:"})," Explains how data is processed and stored within modules."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Algorithms:"})," Includes detailed logic, algorithms, and data structures for implementation."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Error Handling:"})," Specifies how errors and exceptions will be handled."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"State Management:"})," Details the internal state of components and how they change over time."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"artifacts-1",children:"Artifacts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Class and sequence diagrams (UML)."}),"\n",(0,t.jsx)(s.li,{children:"Pseudocode or flowcharts for critical algorithms."}),"\n",(0,t.jsx)(s.li,{children:"Database schema and table designs."}),"\n",(0,t.jsx)(s.li,{children:"Module-level specifications and API contracts."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"purpose-1",children:"Purpose"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Help developers implement the system as per the design specifications."}),"\n",(0,t.jsx)(s.li,{children:"Ensure that code adheres to architectural principles defined in HLD."}),"\n",(0,t.jsx)(s.li,{children:"Serve as a reference for unit testing and debugging."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:'For the e-commerce application, the LLD for the "Product Catalog" service might include:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Classes:"})," Product, Category, Inventory."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"APIs:"})," Endpoints to fetch product details, search by category, or update inventory."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Database Schema:"})," Tables for products, categories, and stock."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Algorithms:"})," Search and filter logic for product listings."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Error Handling:"})," Managing invalid product IDs or failed database operations."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"key-differences-between-hld-and-lld",children:"Key Differences Between HLD and LLD"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Aspect"}),(0,t.jsx)(s.th,{children:"High-Level Design (HLD)"}),(0,t.jsx)(s.th,{children:"Low-Level Design (LLD)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Abstraction Level"})}),(0,t.jsx)(s.td,{children:"High (overview of the system)"}),(0,t.jsx)(s.td,{children:"Low (details of modules and components)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Focus"})}),(0,t.jsx)(s.td,{children:"System architecture and component interactions"}),(0,t.jsx)(s.td,{children:"Implementation details and logic"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Artifacts"})}),(0,t.jsx)(s.td,{children:"Architectural diagrams, component diagrams"}),(0,t.jsx)(s.td,{children:"Class diagrams, flowcharts, pseudocode"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Audience"})}),(0,t.jsx)(s.td,{children:"Architects, stakeholders, senior developers"}),(0,t.jsx)(s.td,{children:"Developers, testers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Scope"})}),(0,t.jsx)(s.td,{children:"Entire system or subsystem"}),(0,t.jsx)(s.td,{children:"Specific modules or components"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Examples"})}),(0,t.jsx)(s.td,{children:"API interactions, system scaling strategies"}),(0,t.jsx)(s.td,{children:"Database schema, algorithms, module interfaces"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"best-practices-for-hld",children:"Best Practices for HLD"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Understand Requirements:"})," Gather and analyze functional and non-functional requirements."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Modular Design:"})," Ensure components are loosely coupled and highly cohesive."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Keep it Simple:"})," Avoid over-engineering; focus on clarity."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Iterative Refinement:"})," Iterate and improve based on feedback."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Include Non-Functional Aspects:"})," Address performance, security, and scalability upfront."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"best-practices-for-lld",children:"Best Practices for LLD"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Follow Coding Standards:"})," Ensure consistency across modules."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Use UML Diagrams:"})," Clearly represent classes and interactions."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Focus on Reusability:"})," Design for modularity and code reuse."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Document Thoroughly:"})," Provide detailed specifications for future reference."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Consider Edge Cases:"})," Handle potential errors and edge cases proactively."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var i=n(96540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);