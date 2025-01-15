"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[1992],{92294:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"networking/protocols/http","title":"HTTP","description":"HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It is an application layer protocol used to request and transfer hypertext data between a client (usually a web browser) and a server (hosting the website or service). HTTP is stateless, meaning each request and response are independent, with no stored state between requests. It follows a client-server architecture, where the client sends requests, and the server responds with the appropriate resource or status message.","source":"@site/docs/networking/protocols/http.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/http","permalink":"/docs/networking/protocols/http","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/http.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736950153000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"TLS","permalink":"/docs/networking/protocols/tls"},"next":{"title":"WebSocket","permalink":"/docs/networking/protocols/websocket"}}');var r=s(74848),i=s(28453);const l={sidebar_position:9},o="HTTP",c={},d=[{value:"Major HTTP Versions",id:"major-http-versions",level:2},{value:"HTTP/0.9 (First Version)",id:"http09-first-version",level:3},{value:"HTTP/1.0",id:"http10",level:3},{value:"HTTP/1.1",id:"http11",level:3},{value:"HTTP/2",id:"http2",level:3},{value:"HTTP/3",id:"http3",level:3},{value:"Summary of HTTP Versions",id:"summary-of-http-versions",level:3},{value:"How HTTP works",id:"how-http-works",level:2},{value:"The Client Sends an HTTP Request",id:"the-client-sends-an-http-request",level:3},{value:"Server Processes the HTTP Request",id:"server-processes-the-http-request",level:3},{value:"The Server Sends an HTTP Response",id:"the-server-sends-an-http-response",level:3},{value:"Browser Renders the Response",id:"browser-renders-the-response",level:3},{value:"Complete HTTP Request-Response Cycle Diagram",id:"complete-http-request-response-cycle-diagram",level:3},{value:"Closing the Connection",id:"closing-the-connection",level:3},{value:"Final HTTP/1.1 Request-Response with Persistent Connection",id:"final-http11-request-response-with-persistent-connection",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"http",children:"HTTP"})}),"\n",(0,r.jsx)(n.p,{children:"HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It is an application layer protocol used to request and transfer hypertext data between a client (usually a web browser) and a server (hosting the website or service). HTTP is stateless, meaning each request and response are independent, with no stored state between requests. It follows a client-server architecture, where the client sends requests, and the server responds with the appropriate resource or status message."}),"\n",(0,r.jsx)(n.p,{children:"Over time, several versions of HTTP have been released, each improving upon its predecessor. These versions\u2014HTTP/0.9, HTTP/1.0, HTTP/1.1, HTTP/2, and HTTP/3\u2014represent the evolution of the protocol from a simple, single-request mechanism to a highly complex, optimized framework for modern web communication."}),"\n",(0,r.jsx)(n.h2,{id:"major-http-versions",children:"Major HTTP Versions"}),"\n",(0,r.jsx)(n.h3,{id:"http09-first-version",children:"HTTP/0.9 (First Version)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Release Year"}),": 1991"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Overview"}),":\nHTTP/0.9 was the first version of the protocol, characterized by simplicity. It lacked many of the features we associate with HTTP today, such as headers, status codes, or complex metadata."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Request"}),": The client sends a simple text-based request with no headers:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /index.html\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Response"}),": The server responds with the raw body (HTML text):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<HTML>...</HTML>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are no status codes or headers, meaning the client has no information about the success or failure of a request."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extremely simple."}),"\n",(0,r.jsx)(n.li,{children:"Very lightweight."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lack of metadata (no headers)."}),"\n",(0,r.jsx)(n.li,{children:"No support for multiple resource types (e.g., JSON, images)."}),"\n",(0,r.jsx)(n.li,{children:"Stateless and not efficient for complex applications."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),":\nUsed for simple, early web pages that only needed basic HTML content retrieval."]}),"\n",(0,r.jsx)(n.h3,{id:"http10",children:"HTTP/1.0"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Release Year"}),": 1996"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Overview"}),":\nHTTP/1.0 introduced more features like headers and status codes, allowing more flexibility and better communication between the client and the server. However, HTTP/1.0 still had several limitations, such as the need to establish a new connection for every request."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request"}),":\nThe client sends a request to the server that includes both a method (e.g., ",(0,r.jsx)(n.code,{children:"GET"}),"), a target resource (e.g., ",(0,r.jsx)(n.code,{children:"/index.html"}),"), and headers:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /index.html HTTP/1.0\nHost: www.example.com\nUser-Agent: Mozilla/5.0...\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Request Line"}),": This includes the HTTP method (",(0,r.jsx)(n.code,{children:"GET"}),"), the requested resource path (",(0,r.jsx)(n.code,{children:"/index.html"}),"), and the HTTP version (",(0,r.jsx)(n.code,{children:"HTTP/1.0"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Headers"}),": Provide metadata about the request (e.g., ",(0,r.jsx)(n.code,{children:"Host"}),", ",(0,r.jsx)(n.code,{children:"User-Agent"}),", etc.)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":\nThe server responds with a status line, headers, and the requested body:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"HTTP/1.0 200 OK\nContent-Type: text/html\nContent-Length: 134\n<HTML>...</HTML>\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Status Line"}),": The response begins with a status code (",(0,r.jsx)(n.code,{children:"200 OK"}),"), indicating success."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Headers"}),": Provide metadata such as the type of content (",(0,r.jsx)(n.code,{children:"Content-Type: text/html"}),") and the length of the content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Body"}),": The actual HTML content."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client\n    participant Server as Server\n    Client->>Server: GET /index.html HTTP/1.0\\nHost: www.example.com\\nUser-Agent: Mozilla/5.0...\n    Server->>Client: HTTP/1.0 200 OK\\nContent-Type: text/html\\nContent-Length: 134\\n<HTML>...</HTML>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Introduced headers, allowing for more flexible and structured communication."}),"\n",(0,r.jsx)(n.li,{children:"Introduced status codes, enabling error reporting and communication about the success or failure of requests."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"One request per connection"}),": Every request opens a new TCP connection, leading to inefficiency (especially on pages with many resources)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),":\nEarly websites and services that served simple HTML files or text-based content."]}),"\n",(0,r.jsx)(n.h3,{id:"http11",children:"HTTP/1.1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Release Year"}),": 1997"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Overview"}),":\nHTTP/1.1 improved upon HTTP/1.0 by introducing several new features, such as persistent connections, chunked transfer encoding, and better cache control. It aimed to address the inefficiencies in HTTP/1.0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Persistent Connections"}),": HTTP/1.1 allows for multiple requests and responses to be sent over a single TCP connection, significantly reducing connection overhead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chunked Transfer Encoding"}),": The server can send data in chunks, allowing the client to start processing data before the entire response is available."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Request"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /index.html HTTP/1.1\nHost: www.example.com\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n"})}),"\n","The connection is kept open for subsequent requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\nTransfer-Encoding: chunked\n<HTML>...</HTML>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client\n    participant Server as Server\n    Client->>Server: GET /index.html HTTP/1.1\\nHost: www.example.com\\nConnection: keep-alive\\nUser-Agent: Mozilla/5.0...\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/html\\nContent-Length: 134\\nTransfer-Encoding: chunked\\n<HTML>...</HTML>\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/css\\nContent-Length: 450\\nTransfer-Encoding: chunked\\n<style>...</style>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Persistent connections improve efficiency by reducing connection overhead."}),"\n",(0,r.jsx)(n.li,{children:"Chunked transfer allows for streaming data to the client."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Head-of-Line Blocking"}),": If one request is delayed, all other requests queued on the same connection are delayed as well."]}),"\n",(0,r.jsx)(n.li,{children:"Still uses plain text and lacks built-in encryption."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),":\nWebsites with multiple assets like images, JavaScript, and CSS files that benefit from persistent connections and chunked responses."]}),"\n",(0,r.jsx)(n.h3,{id:"http2",children:"HTTP/2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Release Year"}),": 2015"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Overview"}),":\nHTTP/2 introduced significant improvements in performance, including multiplexing, binary framing, and header compression. It reduced many of the inefficiencies found in HTTP/1.x."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multiplexing"}),": HTTP/2 can send multiple requests and responses in parallel over a single connection, without blocking one another. This eliminates head-of-line blocking."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Binary Framing"}),": HTTP/2 uses binary encoding rather than text-based encoding, allowing for more efficient processing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Header Compression"}),": HTTP/2 uses the HPACK algorithm to compress headers, reducing the size of requests and responses."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request/Response Example (HTTP/2)"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:":method: GET\n:path: /index.html\n:scheme: https\n:host: www.example.com\nuser-agent: Mozilla/5.0...\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:":status: 200\ncontent-type: text/html\ncontent-length: 134\n<HTML>...</HTML>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client\n    participant Server as Server\n    Client->>Server: :method: GET\\n:path: /index.html\\n:host: www.example.com\n    Server->>Client: :status: 200\\ncontent-type: text/html\\ncontent-length: 134\\n<HTML>...</HTML>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Multiplexing eliminates head-of-line blocking and allows parallel requests."}),"\n",(0,r.jsx)(n.li,{children:"Binary format is more efficient than plain text."}),"\n",(0,r.jsx)(n.li,{children:"Header compression reduces overhead."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Requires HTTP/2-compatible servers and clients."}),"\n",(0,r.jsx)(n.li,{children:"Complex implementation compared to HTTP/1.x."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),":\nModern web applications where speed and reduced latency are critical, such as media-heavy websites, progressive web apps, and complex web applications."]}),"\n",(0,r.jsx)(n.h3,{id:"http3",children:"HTTP/3"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Release Year"}),": 2022"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Overview"}),":\nHTTP/3 builds on HTTP/2 but uses the QUIC transport protocol, which is based on UDP instead of TCP. This provides faster connection establishment, improved handling of packet loss, and lower latency."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"QUIC"}),": QUIC operates over UDP instead of TCP, reducing connection setup time (with zero-round-trip time or 0-RTT) and handling packet loss better."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multiplexing and Stream Prioritization"}),": Like HTTP/2, HTTP/3 supports multiplexing and prioritization, but with enhanced features due to QUIC's UDP-based architecture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Built-in Encryption"}),": HTTP/3 mandates TLS 1.3, ensuring that all communications are encrypted."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request/Response Example (HTTP/3)"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:":method: GET\n:path: /index.html\n:scheme: https\n:host: www.example.com\nuser-agent: Mozilla/5.0...\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:":status: 200\ncontent-type: text/html\ncontent-length: 134\n<HTML>...</HTML>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client\n    participant Server as Server\n    Client->>Server: :method: GET\\n:path: /index.html\\n:host: www.example.com\n    Server->>Client: :status: 200\\ncontent-type: text/html\\ncontent-length: 134\\n<HTML>...</HTML>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Faster connection establishment (0-RTT) and better handling of network congestion."}),"\n",(0,r.jsx)(n.li,{children:"Built-in security with TLS 1.3, ensuring encrypted communication by default."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Limited adoption and compatibility with older systems."}),"\n",(0,r.jsx)(n.li,{children:"UDP-based transport is less mature than TCP."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),":\nApplications requiring low latency and fast loading times, such as real-time services (gaming, video streaming), mobile users, and resource-intensive web applications."]}),"\n",(0,r.jsx)(n.h3,{id:"summary-of-http-versions",children:"Summary of HTTP Versions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Key Features"}),(0,r.jsx)(n.th,{children:"Pros"}),(0,r.jsx)(n.th,{children:"Cons"}),(0,r.jsx)(n.th,{children:"Use Cases"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP/0.9"}),(0,r.jsx)(n.td,{children:"Simple, no headers"}),(0,r.jsx)(n.td,{children:"Simple, lightweight"}),(0,r.jsx)(n.td,{children:"No metadata, no status codes"}),(0,r.jsx)(n.td,{children:"Early web pages, basic resource retrieval"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP/1.0"}),(0,r.jsx)(n.td,{children:"Request/response headers, status codes"}),(0,r.jsx)(n.td,{children:"Basic flexibility, extensible"}),(0,r.jsx)(n.td,{children:"No persistent connections, inefficient"}),(0,r.jsx)(n.td,{children:"Early websites with occasional updates"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP/1.1"}),(0,r.jsx)(n.td,{children:"Persistent connections, chunking"}),(0,r.jsx)(n.td,{children:"Performance improvements, better caching"}),(0,r.jsx)(n.td,{children:"Head-of-line blocking, no encryption"}),(0,r.jsx)(n.td,{children:"Static and dynamic websites, common today"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP/2"}),(0,r.jsx)(n.td,{children:"Multiplexing, binary framing, header compression"}),(0,r.jsx)(n.td,{children:"Faster, reduces overhead, no blocking"}),(0,r.jsx)(n.td,{children:"Requires more complex implementation"}),(0,r.jsx)(n.td,{children:"Modern web apps, media-heavy websites"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP/3"}),(0,r.jsx)(n.td,{children:"QUIC, built-in encryption"}),(0,r.jsx)(n.td,{children:"Fast, secure, better for mobile/poor networks"}),(0,r.jsx)(n.td,{children:"New, limited support, complex infrastructure"}),(0,r.jsx)(n.td,{children:"Real-time apps, low-latency requirements"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"how-http-works",children:"How HTTP works"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext (usually HTML documents) over the web. It works on a ",(0,r.jsx)(n.strong,{children:"request-response model"})," where the client sends a request to the server, and the server responds with data, typically in the form of a webpage or other resources."]}),"\n",(0,r.jsx)(n.h3,{id:"the-client-sends-an-http-request",children:"The Client Sends an HTTP Request"}),"\n",(0,r.jsxs)(n.p,{children:["When you visit a website, the web browser (client) sends an HTTP request to the web server. This request contains various pieces of information, such as the method (GET, POST, etc.), the requested resource (like ",(0,r.jsx)(n.code,{children:"/index.html"}),"), headers (additional metadata like the user agent or cookies), and possibly a body (e.g., when sending data to the server)."]}),"\n",(0,r.jsx)(n.p,{children:"The structure of an HTTP request looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /index.html HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Request Line"}),": Contains the HTTP method (",(0,r.jsx)(n.code,{children:"GET"}),"), the resource path (",(0,r.jsx)(n.code,{children:"/index.html"}),"), and the HTTP version (",(0,r.jsx)(n.code,{children:"HTTP/1.1"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Headers"}),": Metadata such as ",(0,r.jsx)(n.code,{children:"Host"}),", ",(0,r.jsx)(n.code,{children:"User-Agent"}),", and ",(0,r.jsx)(n.code,{children:"Accept"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Body"}),": Optional part, used in POST or PUT requests to send data to the server."]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client (Browser)\n    participant Server as Server (Web Server)\n\n    Client->>Server: GET /index.html HTTP/1.1\\nHost: www.example.com\\nUser-Agent: Mozilla/5.0\\nAccept: text/html"})}),"\n",(0,r.jsxs)(n.p,{children:["In this diagram, the ",(0,r.jsx)(n.strong,{children:"client"})," sends an HTTP request for the resource ",(0,r.jsx)(n.code,{children:"/index.html"})," to the ",(0,r.jsx)(n.strong,{children:"server"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"server-processes-the-http-request",children:"Server Processes the HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:"When the server receives the HTTP request, it processes the request, typically doing the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parse the request"})," to understand the HTTP method, headers, and requested resource."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Search for the resource"})," (e.g., HTML file, image, etc.)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Generate a response"})," based on the requested resource.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the resource is available, the server prepares a ",(0,r.jsx)(n.strong,{children:"200 OK"})," response."]}),"\n",(0,r.jsxs)(n.li,{children:["If the resource is not found, the server returns a ",(0,r.jsx)(n.strong,{children:"404 Not Found"})," response."]}),"\n",(0,r.jsxs)(n.li,{children:["If there\u2019s a server error, it may return a ",(0,r.jsx)(n.strong,{children:"500 Internal Server Error"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"the-server-sends-an-http-response",children:"The Server Sends an HTTP Response"}),"\n",(0,r.jsx)(n.p,{children:"Once the server has processed the request, it sends an HTTP response back to the client. The response consists of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Status Line"}),": Contains the HTTP version, a status code (e.g., 200), and a status message (e.g., OK)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Headers"}),": Metadata about the response (e.g., ",(0,r.jsx)(n.code,{children:"Content-Type"}),", ",(0,r.jsx)(n.code,{children:"Content-Length"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Body"}),": The actual data, like the HTML content, an image, or a file."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example of an HTTP Response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\n\n<HTML>...</HTML>\n"})}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client (Browser)\n    participant Server as Server (Web Server)\n\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/html\\nContent-Length: 134\\n<HTML>...</HTML>"})}),"\n",(0,r.jsxs)(n.p,{children:["In this diagram, the ",(0,r.jsx)(n.strong,{children:"server"})," responds with a ",(0,r.jsx)(n.strong,{children:"200 OK"})," status code and sends the HTML content of the requested resource."]}),"\n",(0,r.jsx)(n.h3,{id:"browser-renders-the-response",children:"Browser Renders the Response"}),"\n",(0,r.jsxs)(n.p,{children:["After receiving the HTTP response, the ",(0,r.jsx)(n.strong,{children:"client"})," (browser) processes the data:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"HTML"})," is parsed and rendered to display the webpage."]}),"\n",(0,r.jsx)(n.li,{children:"If the page includes external resources like images, CSS, or JavaScript, the browser sends additional HTTP requests to fetch those resources."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The browser requests ",(0,r.jsx)(n.code,{children:"style.css"})," and ",(0,r.jsx)(n.code,{children:"script.js"})," files."]}),"\n",(0,r.jsxs)(n.li,{children:["Each of these requests results in another ",(0,r.jsx)(n.strong,{children:"HTTP request-response cycle"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"complete-http-request-response-cycle-diagram",children:"Complete HTTP Request-Response Cycle Diagram"}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client (Browser)\n    participant Server as Server (Web Server)\n\n    Client->>Server: GET /index.html HTTP/1.1\\nHost: www.example.com\\nUser-Agent: Mozilla/5.0\\nAccept: text/html\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/html\\nContent-Length: 134\\n<HTML>...</HTML>\n    Client->>Server: GET /style.css HTTP/1.1\\nHost: www.example.com\\nUser-Agent: Mozilla/5.0\\nAccept: text/css\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/css\\nContent-Length: 245\\nbody { ... }\n    Client->>Server: GET /script.js HTTP/1.1\\nHost: www.example.com\\nUser-Agent: Mozilla/5.0\\nAccept: application/javascript\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: application/javascript\\nContent-Length: 500\\nconsole.log('...')"})}),"\n",(0,r.jsx)(n.p,{children:"In this diagram:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Client"})," (browser) initially sends a request for ",(0,r.jsx)(n.code,{children:"index.html"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server"})," responds with the HTML content."]}),"\n",(0,r.jsxs)(n.li,{children:["The browser requests additional resources (",(0,r.jsx)(n.code,{children:"style.css"})," and ",(0,r.jsx)(n.code,{children:"script.js"}),"), and the server responds with those as well."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"closing-the-connection",children:"Closing the Connection"}),"\n",(0,r.jsxs)(n.p,{children:["Once the browser has received all the resources and rendered the webpage, the connection can be closed, or it can remain open for further requests if ",(0,r.jsx)(n.strong,{children:"HTTP/1.1"}),"'s ",(0,r.jsx)(n.strong,{children:"persistent connections"})," are used. HTTP/2 and HTTP/3 improve this process even further by allowing multiple requests to share a single connection."]}),"\n",(0,r.jsx)(n.h3,{id:"final-http11-request-response-with-persistent-connection",children:"Final HTTP/1.1 Request-Response with Persistent Connection"}),"\n",(0,r.jsx)("div",{class:"mermaid-container",children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client (Browser)\n    participant Server as Server (Web Server)\n\n    Client->>Server: GET /index.html HTTP/1.1\\nHost: www.example.com\\nConnection: keep-alive\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/html\\nContent-Length: 134\\n<HTML>...</HTML>\n    Client->>Server: GET /style.css HTTP/1.1\\nHost: www.example.com\\nConnection: keep-alive\n    Server->>Client: HTTP/1.1 200 OK\\nContent-Type: text/css\\nContent-Length: 245\\nbody { ... }"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);