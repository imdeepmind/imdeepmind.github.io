"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[1663],{78126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"other/mitm-attack","title":"Man-in-the-Middle (MITM) Attack","description":"A Man-in-the-Middle (MITM) attack is a type of cyberattack where a malicious actor intercepts and potentially alters communications between two parties without their knowledge. The attacker essentially \\"sits in the middle\\" of the communication channel, acting as a proxy to capture or manipulate data.","source":"@site/docs/other/mitm-attack.md","sourceDirName":"other","slug":"/other/mitm-attack","permalink":"/docs/other/mitm-attack","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/other/mitm-attack.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736703761000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Regular Expressions (RegEx)","permalink":"/docs/other/regex"},"next":{"title":"Protocol Buffers","permalink":"/docs/other/protocolbuf"}}');var s=n(74848),r=n(28453);const a={sidebar_position:2},c="Man-in-the-Middle (MITM) Attack",o={},l=[{value:"How MITM Works",id:"how-mitm-works",level:2},{value:"Techniques Used in MITM Attacks",id:"techniques-used-in-mitm-attacks",level:2},{value:"Impact of MITM Attacks",id:"impact-of-mitm-attacks",level:2},{value:"Defense Mechanisms",id:"defense-mechanisms",level:2},{value:"Advanced Example: SSL Stripping",id:"advanced-example-ssl-stripping",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"man-in-the-middle-mitm-attack",children:"Man-in-the-Middle (MITM) Attack"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"Man-in-the-Middle (MITM)"}),' attack is a type of cyberattack where a malicious actor intercepts and potentially alters communications between two parties without their knowledge. The attacker essentially "sits in the middle" of the communication channel, acting as a proxy to capture or manipulate data.']}),"\n",(0,s.jsx)(t.h2,{id:"how-mitm-works",children:"How MITM Works"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interception"}),": The attacker intercepts the communication between the two parties (e.g., client and server) by gaining access to the communication channel."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Decryption (Optional)"}),": If the communication is encrypted, the attacker may attempt to decrypt it."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Relaying/Manipulation"}),": The attacker relays the intercepted communication to the intended recipient, potentially altering the message content."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"techniques-used-in-mitm-attacks",children:"Techniques Used in MITM Attacks"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Packet Sniffing"}),": Using tools to capture data packets traveling over a network."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"DNS Spoofing"}),": Redirecting requests for a legitimate website to a malicious site."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SSL Stripping"}),": Downgrading HTTPS connections to HTTP."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Wi-Fi Eavesdropping"}),": Exploiting unsecured public Wi-Fi networks."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ARP Spoofing"}),": Associating the attacker's MAC address with the IP address of a legitimate user."]}),"\n"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Victim\n    participant Attacker\n    participant Server\n\n    Victim->>Attacker: Request to Server\n    Attacker->>Server: Relayed Request\n    Server->>Attacker: Response\n    Attacker->>Victim: Altered Response"})}),"\n",(0,s.jsx)(t.h2,{id:"impact-of-mitm-attacks",children:"Impact of MITM Attacks"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data Theft"}),": Sensitive data, such as login credentials and financial information, can be stolen."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Identity Theft"}),": Personal information can be used for fraudulent purposes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Service Disruption"}),": Attacks can disrupt normal communication and services."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"defense-mechanisms",children:"Defense Mechanisms"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Encryption"}),": Always use HTTPS and enforce SSL/TLS for secure communication."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Certificate Pinning"}),": Ensure the client verifies the server\u2019s certificate."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Public Key Infrastructure (PKI)"}),": Use strong, trusted certificates."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Secure Wi-Fi"}),": Avoid using unsecured public Wi-Fi or use VPNs for encrypted communication."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Network Monitoring"}),": Employ intrusion detection systems to identify anomalies."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"advanced-example-ssl-stripping",children:"Advanced Example: SSL Stripping"}),"\n",(0,s.jsx)(t.p,{children:"In this technique, the attacker downgrades a secure HTTPS connection to an HTTP connection. Below is a sequence of events:"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Attacker\n    participant Website\n\n    Client->>Attacker: HTTPS Request\n    Attacker->>Website: HTTP Request\n    Website->>Attacker: HTTP Response\n    Attacker->>Client: Altered HTTP Response"})}),"\n",(0,s.jsx)(t.p,{children:"In this scenario, the attacker removes the encryption provided by HTTPS, exposing sensitive information to potential misuse."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);