"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[6549],{98925:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"networking/protocols/tcp","title":"TCP","description":"Overview","source":"@site/docs/networking/protocols/tcp.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/tcp","permalink":"/docs/networking/protocols/tcp","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/tcp.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736950153000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"UDP","permalink":"/docs/networking/protocols/udp"},"next":{"title":"QUIC","permalink":"/docs/networking/protocols/quic"}}');var r=s(74848),t=s(28453);const l={sidebar_position:6},d="TCP",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Key Features of TCP",id:"key-features-of-tcp",level:2},{value:"TCP Header Structure",id:"tcp-header-structure",level:2},{value:"TCP Three-Way Handshake",id:"tcp-three-way-handshake",level:2},{value:"TCP Connection Termination",id:"tcp-connection-termination",level:2},{value:"Reliability in TCP",id:"reliability-in-tcp",level:2},{value:"Flow Control in TCP",id:"flow-control-in-tcp",level:2},{value:"Congestion Control in TCP",id:"congestion-control-in-tcp",level:2},{value:"Advantages of TCP",id:"advantages-of-tcp",level:2},{value:"Disadvantages of TCP",id:"disadvantages-of-tcp",level:2},{value:"Use Cases of TCP",id:"use-cases-of-tcp",level:2},{value:"Comparison: TCP vs. UDP",id:"comparison-tcp-vs-udp",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tcp",children:"TCP"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TCP"})," stands for ",(0,r.jsx)(n.strong,{children:"Transmission Control Protocol"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["It is a connection-oriented protocol in the ",(0,r.jsx)(n.strong,{children:"Transport Layer"})," of the OSI and TCP/IP models."]}),"\n",(0,r.jsxs)(n.li,{children:["TCP provides ",(0,r.jsx)(n.strong,{children:"reliable, ordered, and error-checked"})," delivery of data between applications running on hosts in a network."]}),"\n",(0,r.jsx)(n.li,{children:"It is one of the core protocols of the Internet Protocol Suite (IP)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"key-features-of-tcp",children:"Key Features of TCP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Connection-Oriented:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Before transmitting data, a connection must be established between the sender and receiver."}),"\n",(0,r.jsxs)(n.li,{children:["This is done using a process known as the ",(0,r.jsx)(n.strong,{children:"three-way handshake"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reliable Communication:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TCP ensures data delivery by using acknowledgements (ACKs) and retransmissions if data packets are lost."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ordered Delivery:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data is delivered to the receiving application in the same order in which it was sent."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Error Detection and Recovery:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["TCP uses a ",(0,r.jsx)(n.strong,{children:"checksum"})," to detect errors."]}),"\n",(0,r.jsx)(n.li,{children:"If errors are detected, TCP retransmits the affected data."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Full-Duplex Communication:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TCP allows both sender and receiver to transmit data simultaneously."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tcp-header-structure",children:"TCP Header Structure"}),"\n",(0,r.jsxs)(n.p,{children:["A TCP segment consists of a header and data. The TCP header is ",(0,r.jsx)(n.strong,{children:"20 to 60 bytes"})," in size."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Field"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Size (Bits)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Source Port"})}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Port number of the sender"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Destination Port"})}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Port number of the receiver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Sequence Number"})}),(0,r.jsx)(n.td,{children:"32"}),(0,r.jsx)(n.td,{children:"Order of the first byte of data in the segment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Acknowledgement Number"})}),(0,r.jsx)(n.td,{children:"32"}),(0,r.jsx)(n.td,{children:"Next expected byte from the sender"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Data Offset"})}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Size of the TCP header (in 32-bit words)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reserved"})}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Reserved for future use (always 0)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"Control flags (e.g., SYN, ACK, FIN)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Window Size"})}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Size of the receive window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Checksum"})}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Error-checking value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Urgent Pointer"})}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Points to urgent data (if URG flag is set)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Options"})}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"Optional parameters (e.g., MSS, Window Scaling)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Data"})}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"The actual application data"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags in TCP Header:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SYN"}),": Initiates a connection."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ACK"}),": Acknowledges receipt of data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FIN"}),": Gracefully terminates a connection."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RST"}),": Resets an existing connection."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"PSH"}),": Requests immediate delivery of data to the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"URG"}),": Indicates urgent data."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tcp-three-way-handshake",children:"TCP Three-Way Handshake"}),"\n",(0,r.jsx)(n.p,{children:"The three-way handshake is used to establish a reliable connection between two devices."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SYN (Synchronize):"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The client sends a SYN packet to the server to initiate a connection."}),"\n",(0,r.jsxs)(n.li,{children:["This packet contains a ",(0,r.jsx)(n.strong,{children:"sequence number"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SYN-ACK (Synchronize + Acknowledge):"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The server responds with a SYN-ACK packet to acknowledge the client\u2019s request."}),"\n",(0,r.jsx)(n.li,{children:"The packet contains the server's sequence number and an acknowledgment number."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ACK (Acknowledge):"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The client sends an ACK packet to confirm the connection."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagram:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Client         Server\n  | SYN      ->     |\n  |          <-  SYN-ACK |\n  | ACK      ->     |\nConnection Established!\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tcp-connection-termination",children:"TCP Connection Termination"}),"\n",(0,r.jsxs)(n.p,{children:["To close a TCP connection, a ",(0,r.jsx)(n.strong,{children:"four-step process"})," is used:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FIN Sent by Client:"})," The client sends a FIN packet to indicate it has finished sending data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ACK Sent by Server:"})," The server acknowledges the FIN."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FIN Sent by Server:"})," The server sends its own FIN to indicate it has finished sending data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ACK Sent by Client:"})," The client acknowledges the server's FIN."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagram:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Client           Server\n  | FIN     ->      |\n  |         <-   ACK |\n  |         <-   FIN |\n  | ACK     ->      |\nConnection Closed!\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reliability-in-tcp",children:"Reliability in TCP"}),"\n",(0,r.jsx)(n.p,{children:"TCP ensures reliability through:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Acknowledgements (ACKs):"})," The receiver acknowledges the data it successfully receives."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retransmissions:"})," If an acknowledgement is not received within a timeout period, the sender retransmits the data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Checksum:"})," Used to detect errors in transmitted data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sliding Window Protocol:"})," Controls the amount of data that can be sent before receiving an ACK."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flow-control-in-tcp",children:"Flow Control in TCP"}),"\n",(0,r.jsxs)(n.p,{children:["TCP prevents the sender from overwhelming the receiver using ",(0,r.jsx)(n.strong,{children:"flow control"})," mechanisms:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sliding Window Protocol:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'The sender keeps track of a "window" of data that can be sent without receiving further ACKs.'}),"\n",(0,r.jsx)(n.li,{children:"The receiver communicates the window size in its acknowledgements, ensuring that it never receives more data than it can process."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dynamic Adjustment:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TCP adjusts the window size dynamically based on the receiver\u2019s advertised capacity."}),"\n",(0,r.jsx)(n.li,{children:"If the receiver\u2019s buffer fills up, it can reduce the window size to zero, pausing data transmission until it is ready to accept more data."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Stop-and-Wait Mechanism:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In situations where fine-grained flow control is necessary, TCP can send one packet at a time, waiting for an acknowledgement before sending the next."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"congestion-control-in-tcp",children:"Congestion Control in TCP"}),"\n",(0,r.jsx)(n.p,{children:"Congestion occurs when the network becomes overloaded. TCP uses these algorithms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Slow Start:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The sender starts with a small congestion window (cwnd) and increases it exponentially until packet loss occurs or a threshold is reached."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Congestion Avoidance:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After reaching a threshold, TCP increases the window size linearly to avoid overwhelming the network."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fast Retransmit:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Upon receiving three duplicate ACKs, the sender retransmits the lost packet immediately without waiting for a timeout."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fast Recovery:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Instead of resetting to slow start, TCP reduces the congestion window size to half and enters congestion avoidance mode to recover from congestion quickly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TCP Tahoe vs. TCP Reno:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TCP Tahoe:"})," Resets the congestion window to 1 and restarts slow start after detecting packet loss."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TCP Reno:"})," Optimizes congestion recovery with fast retransmit and fast recovery, improving performance in certain scenarios."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"advantages-of-tcp",children:"Advantages of TCP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reliable data delivery."}),"\n",(0,r.jsx)(n.li,{children:"Connection-oriented communication."}),"\n",(0,r.jsx)(n.li,{children:"Ordered data transmission."}),"\n",(0,r.jsx)(n.li,{children:"Handles flow and congestion control."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"disadvantages-of-tcp",children:"Disadvantages of TCP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Higher overhead due to acknowledgements and error-checking mechanisms."}),"\n",(0,r.jsx)(n.li,{children:"Slower compared to connectionless protocols like UDP."}),"\n",(0,r.jsx)(n.li,{children:"Inefficient for real-time applications where latency is critical."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-cases-of-tcp",children:"Use Cases of TCP"}),"\n",(0,r.jsx)(n.p,{children:"TCP is used where reliability is crucial. Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Web Browsing:"})," HTTP/HTTPS uses TCP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"File Transfers:"})," FTP and SFTP rely on TCP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Email:"})," SMTP, POP3, and IMAP use TCP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Remote Access:"})," SSH and Telnet use TCP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Streaming Services:"})," Some non-time-critical video and audio streaming services use TCP."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"comparison-tcp-vs-udp",children:"Comparison: TCP vs. UDP"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Feature"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"TCP"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"UDP"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Connection Type"})}),(0,r.jsx)(n.td,{children:"Connection-oriented"}),(0,r.jsx)(n.td,{children:"Connectionless"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reliability"})}),(0,r.jsx)(n.td,{children:"Reliable (ACKs, retransmissions)"}),(0,r.jsx)(n.td,{children:"Unreliable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Data Order"})}),(0,r.jsx)(n.td,{children:"Ordered"}),(0,r.jsx)(n.td,{children:"Unordered"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Error Checking"})}),(0,r.jsx)(n.td,{children:"Yes (Checksum)"}),(0,r.jsx)(n.td,{children:"Yes (Checksum)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Speed"})}),(0,r.jsx)(n.td,{children:"Slower"}),(0,r.jsx)(n.td,{children:"Faster"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Use Case"})}),(0,r.jsx)(n.td,{children:"File transfers, web browsing"}),(0,r.jsx)(n.td,{children:"VoIP, video streaming"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(96540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);