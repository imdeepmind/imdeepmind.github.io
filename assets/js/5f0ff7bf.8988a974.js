"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[489],{14538:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"networking/communication-design-patterns/sse","title":"Server-Sent Events (SSE)","description":"Server-Sent Events (SSE) is a unidirectional, server-to-client communication technology that allows servers to push real-time updates to clients over a single, persistent HTTP connection. It is based on the HTML5 EventSource API, which is specifically designed for streaming updates from a server to a web browser.","source":"@site/docs/networking/communication-design-patterns/sse.md","sourceDirName":"networking/communication-design-patterns","slug":"/networking/communication-design-patterns/sse","permalink":"/docs/networking/communication-design-patterns/sse","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/communication-design-patterns/sse.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736356018000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Long Polling","permalink":"/docs/networking/communication-design-patterns/long-pooling"},"next":{"title":"Introduction","permalink":"/docs/system-design/introduction"}}');var r=s(74848),t=s(28453);const l={sidebar_position:6},c="Server-Sent Events (SSE)",o={},d=[{value:"How SSE Works",id:"how-sse-works",level:2},{value:"Key Characteristics of SSE",id:"key-characteristics-of-sse",level:2},{value:"SSE Message Format",id:"sse-message-format",level:2},{value:"Advantages of SSE",id:"advantages-of-sse",level:2},{value:"Disadvantages of SSE",id:"disadvantages-of-sse",level:2},{value:"When to Use SSE",id:"when-to-use-sse",level:2},{value:"Use Cases for SSE",id:"use-cases-for-sse",level:2},{value:"SSE vs Long Polling",id:"sse-vs-long-polling",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"server-sent-events-sse",children:"Server-Sent Events (SSE)"})}),"\n",(0,r.jsx)(n.p,{children:"Server-Sent Events (SSE) is a unidirectional, server-to-client communication technology that allows servers to push real-time updates to clients over a single, persistent HTTP connection. It is based on the HTML5 EventSource API, which is specifically designed for streaming updates from a server to a web browser."}),"\n",(0,r.jsx)(n.p,{children:"Unlike WebSockets, which provide full-duplex communication (both server-to-client and client-to-server), SSE is optimized for scenarios where updates flow only from the server to the client, such as live news feeds, notifications, or monitoring dashboards."}),"\n",(0,r.jsx)(n.h2,{id:"how-sse-works",children:"How SSE Works"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Client Opens a Connection:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The client initiates an HTTP request to the server using the ",(0,r.jsx)(n.code,{children:"EventSource"})," API."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Server Streams Updates:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The server responds with a persistent HTTP connection and streams updates as a sequence of text-based messages."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Messages in a Specific Format:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Each message sent by the server follows a specific format (",(0,r.jsx)(n.code,{children:"data"}),", ",(0,r.jsx)(n.code,{children:"event"}),", and ",(0,r.jsx)(n.code,{children:"id"})," fields), making it easy for the client to parse."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Automatic Reconnection:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the connection is interrupted (e.g., network issues), the browser automatically attempts to reconnect."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Client Processes Updates:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The client receives updates in real-time and processes them using JavaScript event listeners."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"key-characteristics-of-sse",children:"Key Characteristics of SSE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Unidirectional Communication:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data flows only from the server to the client, making it ideal for updates or notifications."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Text-Based Protocol:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE messages are text-based and encoded as UTF-8, which simplifies processing and debugging."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Persistent Connection:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The server keeps the connection open to stream updates, avoiding the need to repeatedly establish new connections."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Automatic Reconnection:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the connection is lost, the client (browser) automatically attempts to reconnect without requiring additional logic."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Event Identification:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE supports unique event IDs, which allow clients to resume updates from where they left off in case of reconnection."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Browser Support:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE is supported natively by most modern browsers (except Internet Explorer). For unsupported browsers, polyfills can be used."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sse-message-format",children:"SSE Message Format"}),"\n",(0,r.jsx)(n.p,{children:"SSE messages are sent in a specific plain-text format that includes the following fields:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"data"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The main content of the message (required)."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"data: Hello, World!"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"event"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The type of event (optional). Custom event types can be specified here."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"event: customEvent"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"id"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A unique identifier for the event (optional). Helps the client track messages for reconnection purposes."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"id: 123"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"retry"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The time (in milliseconds) the client should wait before attempting to reconnect after a disconnection (optional)."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"retry: 5000"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example SSE Message:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'id: 123\nevent: update\ndata: {"message": "This is a server-sent event"}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"advantages-of-sse",children:"Advantages of SSE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Simplicity:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Easy to implement with minimal client-side and server-side code compared to WebSockets."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Automatic Reconnection:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"EventSource"})," API handles reconnection automatically, simplifying error handling."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Built-In Support for Events:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE natively supports custom event types, making it flexible for different use cases."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Efficient for Unidirectional Data:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ideal for applications where data only needs to flow from the server to the client."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Uses Standard HTTP Protocols:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE works over standard HTTP/HTTPS, making it firewall and proxy-friendly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lightweight:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Compared to WebSockets, SSE has lower overhead for unidirectional communication."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"disadvantages-of-sse",children:"Disadvantages of SSE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Unidirectional Only:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data can only flow from the server to the client. If bidirectional communication is needed, WebSockets are a better choice."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Limited Browser Support:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"While supported by most modern browsers, Internet Explorer does not support SSE natively."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scalability:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE relies on HTTP/1.1 connections, which can lead to scalability issues for applications with a large number of clients."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Binary Data Not Supported:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE only supports UTF-8 text-based messages. Binary data must be encoded (e.g., Base64), which adds overhead."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Connection Limits:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Browsers limit the number of concurrent SSE connections to a single domain (typically 6)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use-sse",children:"When to Use SSE"}),"\n",(0,r.jsx)(n.p,{children:"SSE is ideal for scenarios where:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Unidirectional Communication is Sufficient:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Applications that only need server-to-client updates, such as live notifications or dashboards."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Low Complexity is Desired:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When you need a lightweight and simple solution for real-time updates."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Text-Based Data is Used:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Applications where messages are text-based, such as JSON updates or notifications."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fallback Mechanisms are Acceptable:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For older browsers or specific use cases, polyfills or alternative methods can be used."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-cases-for-sse",children:"Use Cases for SSE"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Real-Time Notifications:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sending notifications for social media, email, or messaging applications."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Live Dashboards:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Streaming updates for monitoring tools, analytics dashboards, or financial data."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"News Feeds:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Broadcasting live news updates or event streams."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"IoT Applications:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pushing updates from IoT devices to a client."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Event Monitoring:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tracking changes in real-time, such as server logs or application performance metrics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sse-vs-long-polling",children:"SSE vs Long Polling"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Feature"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"SSE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Long Polling"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Communication"})}),(0,r.jsx)(n.td,{children:"Unidirectional (server-to-client)."}),(0,r.jsx)(n.td,{children:"Simulates bidirectional communication by repeated requests."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Connection"})}),(0,r.jsx)(n.td,{children:"Persistent connection for streaming updates."}),(0,r.jsx)(n.td,{children:"Repeated HTTP requests after each response or timeout."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reconnection"})}),(0,r.jsxs)(n.td,{children:["Automatic reconnection handled by the ",(0,r.jsx)(n.code,{children:"EventSource"})," API."]}),(0,r.jsx)(n.td,{children:"Client must handle reconnection logic manually."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Efficiency"})}),(0,r.jsx)(n.td,{children:"More efficient for unidirectional real-time updates."}),(0,r.jsx)(n.td,{children:"Less efficient due to repeated connection establishment."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Message Format"})}),(0,r.jsx)(n.td,{children:"Uses a simple, text-based format (UTF-8)."}),(0,r.jsx)(n.td,{children:"Uses HTTP responses, which can include any type of data."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Latency"})}),(0,r.jsx)(n.td,{children:"Low latency (real-time updates)."}),(0,r.jsx)(n.td,{children:"Higher latency due to repeated requests."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Complexity"})}),(0,r.jsx)(n.td,{children:"Easy to implement with native browser support."}),(0,r.jsx)(n.td,{children:"Slightly more complex as reconnections need to be handled."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Scalability"})}),(0,r.jsx)(n.td,{children:"Limited by the number of concurrent HTTP connections."}),(0,r.jsx)(n.td,{children:"Puts more strain on the server due to frequent requests."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Use Case"})}),(0,r.jsx)(n.td,{children:"Suitable for real-time updates like notifications."}),(0,r.jsx)(n.td,{children:"Suitable for near real-time updates in moderate traffic."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);