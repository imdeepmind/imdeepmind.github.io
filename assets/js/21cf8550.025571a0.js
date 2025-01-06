"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[7317],{39583:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"networking/protocols/internet-protocol","title":"Internet Protocol","description":"The Internet Protocol (IP) is a core protocol in the Internet protocol suite responsible for delivering data packets from a source to a destination across network boundaries. It operates at the Network Layer (Layer 3) of the OSI model and is designed to address, route, and transfer data efficiently in a packet-switched network.","source":"@site/docs/networking/protocols/internet-protocol.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/internet-protocol","permalink":"/docs/networking/protocols/internet-protocol","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/internet-protocol.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736059262000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"OSI Model","permalink":"/docs/networking/protocols/osi-model"},"next":{"title":"User Datagram Protocol (UDP)","permalink":"/docs/networking/protocols/udp"}}');var i=s(74848),t=s(28453);const d={sidebar_position:3},l="Internet Protocol",c={},o=[{value:"Features of IP",id:"features-of-ip",level:2},{value:"Versions of IP",id:"versions-of-ip",level:2},{value:"IPv4 (Internet Protocol Version 4)",id:"ipv4-internet-protocol-version-4",level:3},{value:"Overview:",id:"overview",level:4},{value:"Features:",id:"features",level:4},{value:"IPv6 (Internet Protocol Version 6)",id:"ipv6-internet-protocol-version-6",level:3},{value:"Overview:",id:"overview-1",level:4},{value:"Features:",id:"features-1",level:4},{value:"Key Differences Between IPv4 and IPv6:",id:"key-differences-between-ipv4-and-ipv6",level:4},{value:"IP Packets",id:"ip-packets",level:2},{value:"Structure of an IP Packet",id:"structure-of-an-ip-packet",level:3},{value:"IP Packet Header",id:"ip-packet-header",level:3},{value:"IPv4 Header Structure",id:"ipv4-header-structure",level:3},{value:"IPv6 Header Structure",id:"ipv6-header-structure",level:3},{value:"IP Packet Payload",id:"ip-packet-payload",level:3},{value:"Fragmentation in IP Packets",id:"fragmentation-in-ip-packets",level:3},{value:"Lifecycle of an IP Packet",id:"lifecycle-of-an-ip-packet",level:3},{value:"Challenges with IP Packets",id:"challenges-with-ip-packets",level:3},{value:"Importance of IP Packets",id:"importance-of-ip-packets",level:3},{value:"ICMP (Internet Control Message Protocol)",id:"icmp-internet-control-message-protocol",level:3},{value:"Key Features",id:"key-features",level:4},{value:"ICMP Packet Structure",id:"icmp-packet-structure",level:4},{value:"Common ICMP Message Types",id:"common-icmp-message-types",level:3},{value:"PING",id:"ping",level:3},{value:"How It Works",id:"how-it-works",level:4},{value:"Features",id:"features-2",level:4},{value:"Output Example",id:"output-example",level:4},{value:"TraceRoute",id:"traceroute",level:3},{value:"How It Works",id:"how-it-works-1",level:4},{value:"Key Features",id:"key-features-1",level:4},{value:"TraceRoute Command Example",id:"traceroute-command-example",level:4},{value:"Use Cases",id:"use-cases",level:4},{value:"Comparison of PING and TraceRoute",id:"comparison-of-ping-and-traceroute",level:3},{value:"ARP (Address Resolution Protocol)",id:"arp-address-resolution-protocol",level:3},{value:"ARP Functionality",id:"arp-functionality",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"internet-protocol",children:"Internet Protocol"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Internet Protocol (IP)"})," is a core protocol in the Internet protocol suite responsible for delivering data packets from a source to a destination across network boundaries. It operates at the ",(0,i.jsx)(n.strong,{children:"Network Layer (Layer 3)"})," of the OSI model and is designed to address, route, and transfer data efficiently in a packet-switched network."]}),"\n",(0,i.jsx)(n.h2,{id:"features-of-ip",children:"Features of IP"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connectionless Protocol"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP is a connectionless protocol, meaning it does not establish a dedicated connection between the sender and receiver before transmitting data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Packet Switching"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Data is divided into smaller units called ",(0,i.jsx)(n.strong,{children:"packets"}),", each transmitted independently and may take different routes to the destination."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Addressing"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each device on a network is identified by a unique ",(0,i.jsx)(n.strong,{children:"IP address"})," (logical address), enabling proper routing."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Best-Effort Delivery"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP does not guarantee the delivery of packets. It relies on higher-layer protocols (e.g., TCP) for reliability."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Routing"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Determines the best path for packets to travel through interconnected networks using routers."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fragmentation and Reassembly"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Large packets are broken into smaller fragments for transmission and reassembled at the destination."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP is designed to support networks of various sizes, from local networks to the global Internet."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protocol Independence"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP can work with a variety of transport-layer protocols like TCP, UDP, and ICMP."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"versions-of-ip",children:"Versions of IP"}),"\n",(0,i.jsxs)(n.p,{children:["The two primary versions of IP in use today are ",(0,i.jsx)(n.strong,{children:"IPv4"})," and ",(0,i.jsx)(n.strong,{children:"IPv6"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"ipv4-internet-protocol-version-4",children:"IPv4 (Internet Protocol Version 4)"}),"\n",(0,i.jsx)(n.h4,{id:"overview",children:"Overview:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IPv4 is the fourth version of IP and was the first widely deployed protocol for network communication."}),"\n",(0,i.jsxs)(n.li,{children:["It uses a ",(0,i.jsx)(n.strong,{children:"32-bit address"})," format."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"features",children:"Features:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Address Format"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IPv4 addresses are written in ",(0,i.jsx)(n.strong,{children:"dot-decimal notation"}),", e.g., ",(0,i.jsx)(n.code,{children:"192.168.1.1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Supports approximately ",(0,i.jsx)(n.strong,{children:"4.3 billion unique addresses"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Header"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains fields like source address, destination address, version, and time-to-live (TTL)."}),"\n",(0,i.jsx)(n.li,{children:"Header size: 20 bytes (minimum)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Protocol Support"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Works with protocols like TCP, UDP, and ICMP."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fragmentation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports packet fragmentation to fit smaller MTUs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Broadcasting"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports broadcast communication for sending packets to all devices in a network."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Address Exhaustion"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IPv4 addresses are nearly exhausted, leading to the development of IPv6."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ipv6-internet-protocol-version-6",children:"IPv6 (Internet Protocol Version 6)"}),"\n",(0,i.jsx)(n.h4,{id:"overview-1",children:"Overview:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IPv6 was developed to address the limitations of IPv4, particularly address exhaustion."}),"\n",(0,i.jsxs)(n.li,{children:["It uses a ",(0,i.jsx)(n.strong,{children:"128-bit address"})," format."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"features-1",children:"Features:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Address Format"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IPv6 addresses are written in ",(0,i.jsx)(n.strong,{children:"hexadecimal notation"}),", separated by colons, e.g., ",(0,i.jsx)(n.code,{children:"2001:0db8:85a3:0000:0000:8a2e:0370:7334"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Supports approximately ",(0,i.jsx)(n.strong,{children:"340 undecillion (3.4 \xd7 10\xb3\u2078)"})," unique addresses."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Header"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Simpler and more efficient compared to IPv4."}),"\n",(0,i.jsx)(n.li,{children:"Header size: 40 bytes (fixed)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"No Fragmentation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fragmentation is handled by the source device, not routers, improving efficiency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"No Broadcasting"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uses ",(0,i.jsx)(n.strong,{children:"multicast"})," and ",(0,i.jsx)(n.strong,{children:"anycast"})," instead of broadcasting, reducing unnecessary traffic."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Built-In Security"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Includes ",(0,i.jsx)(n.strong,{children:"IPSec"})," for authentication and encryption."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Auto-Configuration"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports automatic address configuration using stateless address autoconfiguration (SLAAC)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Improved QoS (Quality of Service)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Includes flow label fields for better handling of real-time traffic like video and voice."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"key-differences-between-ipv4-and-ipv6",children:"Key Differences Between IPv4 and IPv6:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Feature"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"IPv4"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"IPv6"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Address Size"})}),(0,i.jsx)(n.td,{children:"32-bit"}),(0,i.jsx)(n.td,{children:"128-bit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Address Format"})}),(0,i.jsx)(n.td,{children:"Dot-decimal (e.g., 192.168.1.1)"}),(0,i.jsx)(n.td,{children:"Hexadecimal (e.g., 2001:0db8::1)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Number of Addresses"})}),(0,i.jsx)(n.td,{children:"~4.3 billion"}),(0,i.jsx)(n.td,{children:"~340 undecillion"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Header Size"})}),(0,i.jsx)(n.td,{children:"Variable (20-60 bytes)"}),(0,i.jsx)(n.td,{children:"Fixed (40 bytes)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Security"})}),(0,i.jsx)(n.td,{children:"Optional (via IPSec)"}),(0,i.jsx)(n.td,{children:"Mandatory (IPSec included)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Broadcasting"})}),(0,i.jsx)(n.td,{children:"Supported"}),(0,i.jsx)(n.td,{children:"Not supported"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Fragmentation"})}),(0,i.jsx)(n.td,{children:"Supported at routers"}),(0,i.jsx)(n.td,{children:"Handled by the source device"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Deployment"})}),(0,i.jsx)(n.td,{children:"Widely used"}),(0,i.jsx)(n.td,{children:"Gradually replacing IPv4"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"ip-packets",children:"IP Packets"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.strong,{children:"IP Packet"})," is the fundamental unit of data that is transmitted across a network using the Internet Protocol (IP). It contains all the information required for routing and delivering data between devices across a network, including the source and destination IP addresses."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:"/img/ip-packets.png",alt:"OSI Model"})}),"\n",(0,i.jsx)(n.h3,{id:"structure-of-an-ip-packet",children:"Structure of an IP Packet"}),"\n",(0,i.jsx)(n.p,{children:"An IP packet consists of two main parts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Header"}),": Contains metadata about the packet, such as addressing and routing information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payload"}),": Contains the actual data being transmitted (e.g., part of a file, an email, or a web page)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ip-packet-header",children:"IP Packet Header"}),"\n",(0,i.jsx)(n.p,{children:"The header is crucial for ensuring that packets are routed correctly and arrive at their intended destination. Its structure varies between IPv4 and IPv6."}),"\n",(0,i.jsx)(n.h3,{id:"ipv4-header-structure",children:"IPv4 Header Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The IPv4 header is at least ",(0,i.jsx)(n.strong,{children:"20 bytes"})," long and can extend up to ",(0,i.jsx)(n.strong,{children:"60 bytes"})," if options are included."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Field"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Size"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Version"})}),(0,i.jsx)(n.td,{children:"4 bits"}),(0,i.jsxs)(n.td,{children:["IP version number (always ",(0,i.jsx)(n.code,{children:"4"})," for IPv4)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Header Length"})}),(0,i.jsx)(n.td,{children:"4 bits"}),(0,i.jsx)(n.td,{children:"Length of the header in 32-bit words."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Type of Service (TOS)"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Specifies priority and QoS requirements."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Total Length"})}),(0,i.jsx)(n.td,{children:"16 bits"}),(0,i.jsx)(n.td,{children:"Entire packet size (header + payload) in bytes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Identification"})}),(0,i.jsx)(n.td,{children:"16 bits"}),(0,i.jsx)(n.td,{children:"Identifies fragments of a single packet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsx)(n.td,{children:"3 bits"}),(0,i.jsx)(n.td,{children:"Controls fragmentation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Fragment Offset"})}),(0,i.jsx)(n.td,{children:"13 bits"}),(0,i.jsx)(n.td,{children:"Position of this fragment in the original packet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Time-to-Live (TTL)"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Limits the packet\u2019s lifespan (measured in hops)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Protocol"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Identifies the protocol used in the payload (e.g., TCP, UDP)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Header Checksum"})}),(0,i.jsx)(n.td,{children:"16 bits"}),(0,i.jsx)(n.td,{children:"Error-checking for the header."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Source Address"})}),(0,i.jsx)(n.td,{children:"32 bits"}),(0,i.jsx)(n.td,{children:"IP address of the sender."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Destination Address"})}),(0,i.jsx)(n.td,{children:"32 bits"}),(0,i.jsx)(n.td,{children:"IP address of the receiver."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Options (Optional)"})}),(0,i.jsx)(n.td,{children:"Variable"}),(0,i.jsx)(n.td,{children:"Additional information for specific purposes (e.g., security, routing)."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ipv6-header-structure",children:"IPv6 Header Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The IPv6 header is ",(0,i.jsx)(n.strong,{children:"fixed at 40 bytes"})," in length, making it simpler and more efficient than IPv4."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Field"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Size"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Version"})}),(0,i.jsx)(n.td,{children:"4 bits"}),(0,i.jsxs)(n.td,{children:["IP version number (always ",(0,i.jsx)(n.code,{children:"6"})," for IPv6)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Traffic Class"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Defines priority and QoS requirements."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Flow Label"})}),(0,i.jsx)(n.td,{children:"20 bits"}),(0,i.jsx)(n.td,{children:"Identifies flows for QoS management."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Payload Length"})}),(0,i.jsx)(n.td,{children:"16 bits"}),(0,i.jsx)(n.td,{children:"Length of the payload in bytes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Next Header"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Identifies the type of the next header (e.g., TCP, UDP, or extension headers)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Hop Limit"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Limits the packet\u2019s lifespan (like TTL in IPv4)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Source Address"})}),(0,i.jsx)(n.td,{children:"128 bits"}),(0,i.jsx)(n.td,{children:"IP address of the sender."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Destination Address"})}),(0,i.jsx)(n.td,{children:"128 bits"}),(0,i.jsx)(n.td,{children:"IP address of the receiver."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ip-packet-payload",children:"IP Packet Payload"}),"\n",(0,i.jsxs)(n.p,{children:["The payload contains the actual data being transmitted. The type of payload is determined by the ",(0,i.jsx)(n.strong,{children:"Protocol"})," or ",(0,i.jsx)(n.strong,{children:"Next Header"})," field in the IP header. Common payload types include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TCP segments"}),": For reliable communication (e.g., web pages, emails)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UDP datagrams"}),": For lightweight and fast communication (e.g., video streaming, DNS queries)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ICMP messages"}),": For network diagnostics (e.g., ping)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fragmentation-in-ip-packets",children:"Fragmentation in IP Packets"}),"\n",(0,i.jsxs)(n.p,{children:["When a packet is too large to fit the maximum transmission unit (MTU) of a network link, it is ",(0,i.jsx)(n.strong,{children:"fragmented"})," into smaller packets."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IPv4"}),": Routers can fragment packets, and the receiver reassembles them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IPv6"}),": Fragmentation is handled by the source device, not routers."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lifecycle-of-an-ip-packet",children:"Lifecycle of an IP Packet"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Creation"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generated by the source device with the appropriate header and payload."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transmission"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Routed through intermediate networks toward the destination."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Processing"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each router reads the header to determine the next hop."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delivery"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Arrives at the destination device, where the payload is extracted."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reassembly"})," (if fragmented):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fragments are reassembled into the original packet at the destination."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"challenges-with-ip-packets",children:"Challenges with IP Packets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Packet Loss"}),": Packets may be lost due to network congestion or errors."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Out-of-Order Delivery"}),": Packets may arrive in a different order than they were sent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security Risks"}),": Packets can be intercepted or tampered with during transmission."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Latency"}),": Delays in routing can affect real-time communication."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"importance-of-ip-packets",children:"Importance of IP Packets"}),"\n",(0,i.jsx)(n.p,{children:"IP packets are the backbone of modern networking. They ensure that data can traverse diverse networks, enabling services like the web, email, video streaming, and more. Understanding IP packets is essential for network troubleshooting, optimization, and security."}),"\n",(0,i.jsx)(n.h3,{id:"icmp-internet-control-message-protocol",children:"ICMP (Internet Control Message Protocol)"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Internet Control Message Protocol (ICMP)"})," is a supporting protocol used within IP networks for error reporting and diagnostic purposes. It operates at the ",(0,i.jsx)(n.strong,{children:"Network Layer (Layer 3)"})," and is primarily used to communicate issues related to the delivery of packets."]}),"\n",(0,i.jsx)(n.h4,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Reporting"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ICMP reports errors like unreachable destinations, time exceeded, or issues with packet fragmentation."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Diagnostics"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Commonly used in network diagnostic tools like ",(0,i.jsx)(n.strong,{children:"ping"})," and ",(0,i.jsx)(n.strong,{children:"traceroute"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connectionless"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Works without establishing a dedicated connection, like IP."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reliability"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Does not guarantee delivery of error messages."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Limited Use for Data"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ICMP is not used for transferring application data but solely for control messages."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"icmp-packet-structure",children:"ICMP Packet Structure"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Field"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Size"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Specifies the type of message (e.g., Echo Request, Destination Unreachable)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Code"})}),(0,i.jsx)(n.td,{children:"8 bits"}),(0,i.jsx)(n.td,{children:"Provides additional context for the message type."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Checksum"})}),(0,i.jsx)(n.td,{children:"16 bits"}),(0,i.jsx)(n.td,{children:"Ensures the integrity of the ICMP packet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Message-Specific Data"})}),(0,i.jsx)(n.td,{children:"Variable"}),(0,i.jsx)(n.td,{children:"Contains information specific to the message type."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"common-icmp-message-types",children:"Common ICMP Message Types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Code"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"0"})," (Echo Reply)"]}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Response to a ping request."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"3"})," (Destination Unreachable)"]}),(0,i.jsx)(n.td,{children:"0\u201315"}),(0,i.jsx)(n.td,{children:"Indicates the destination cannot be reached."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"8"})," (Echo Request)"]}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Used to test network connectivity (ping)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"11"})," (Time Exceeded)"]}),(0,i.jsx)(n.td,{children:"0 or 1"}),(0,i.jsx)(n.td,{children:"Indicates that the packet's TTL expired."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ping",children:"PING"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PING"})," (Packet Internet Groper) is a network diagnostic utility that uses ICMP to test the reachability of a host on a network and measure the round-trip time (RTT) for messages."]}),"\n",(0,i.jsx)(n.h4,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The source sends an ",(0,i.jsx)(n.strong,{children:"ICMP Echo Request"})," message to the destination."]}),"\n",(0,i.jsxs)(n.li,{children:["If the destination is reachable, it responds with an ",(0,i.jsx)(n.strong,{children:"ICMP Echo Reply"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The tool calculates:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RTT"}),": The time taken for a message to travel to the destination and back."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Packet Loss"}),": Percentage of packets lost during transmission."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"features-2",children:"Features"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connectivity Testing"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verifies if a host is reachable."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance Metrics"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Measures latency and packet loss."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simple Syntax"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"ping www.example.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"output-example",children:"Output Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"PING www.example.com (93.184.216.34): 56 data bytes\n64 bytes from 93.184.216.34: icmp_seq=0 ttl=56 time=12.3 ms\n64 bytes from 93.184.216.34: icmp_seq=1 ttl=56 time=11.8 ms\n--- www.example.com ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, time 1001ms\nrtt min/avg/max/mdev = 11.8/12.0/12.3/0.3 ms\n"})}),"\n",(0,i.jsx)(n.h3,{id:"traceroute",children:"TraceRoute"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TraceRoute"})," is a diagnostic tool that maps the route packets take from a source to a destination, identifying each hop along the way."]}),"\n",(0,i.jsx)(n.h4,{id:"how-it-works-1",children:"How It Works"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["TraceRoute sends a series of packets with incrementing ",(0,i.jsx)(n.strong,{children:"Time-To-Live (TTL)"})," values."]}),"\n",(0,i.jsxs)(n.li,{children:["Each router along the path decrements the TTL. When TTL reaches 0, the router sends an ",(0,i.jsx)(n.strong,{children:"ICMP Time Exceeded"})," message back to the source."]}),"\n",(0,i.jsx)(n.li,{children:"By analyzing these messages, TraceRoute determines the path and delay for each hop."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"key-features-1",children:"Key Features"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Path Discovery"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifies intermediate routers between the source and destination."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Latency Measurement"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Measures delay at each hop."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Diagnostic Information"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Helps identify bottlenecks or failed hops in the network."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"traceroute-command-example",children:"TraceRoute Command Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"traceroute www.example.com\n1  192.168.1.1 (192.168.1.1)  1.032 ms  0.895 ms  0.765 ms\n2  10.10.0.1 (10.10.0.1)      2.345 ms  2.213 ms  2.087 ms\n3  93.184.216.34 (93.184.216.34) 11.456 ms 11.312 ms 11.276 ms\n"})}),"\n",(0,i.jsx)(n.h4,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Detecting network routing issues."}),"\n",(0,i.jsx)(n.li,{children:"Identifying latency at specific hops."}),"\n",(0,i.jsx)(n.li,{children:"Diagnosing unreachable hosts."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"comparison-of-ping-and-traceroute",children:"Comparison of PING and TraceRoute"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Feature"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PING"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"TraceRoute"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Purpose"})}),(0,i.jsx)(n.td,{children:"Tests connectivity and measures RTT."}),(0,i.jsx)(n.td,{children:"Maps the path packets take to a destination."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Protocol Used"})}),(0,i.jsx)(n.td,{children:"ICMP Echo Request/Reply."}),(0,i.jsx)(n.td,{children:"ICMP Time Exceeded and optionally UDP/TCP."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Output"})}),(0,i.jsx)(n.td,{children:"Reachability and round-trip time."}),(0,i.jsx)(n.td,{children:"List of hops with latency information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Use Case"})}),(0,i.jsx)(n.td,{children:"Quick connectivity checks."}),(0,i.jsx)(n.td,{children:"Detailed network route analysis."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"arp-address-resolution-protocol",children:"ARP (Address Resolution Protocol)"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Address Resolution Protocol (ARP)"})," is a protocol used to map ",(0,i.jsx)(n.strong,{children:"IP addresses"})," (Network Layer addresses) to ",(0,i.jsx)(n.strong,{children:"MAC addresses"})," (Data Link Layer addresses) within a local network. This mapping is essential for devices to communicate over Ethernet-based networks (e.g., LANs) where communication occurs using MAC addresses, but IP addresses are used for routing."]}),"\n",(0,i.jsx)(n.p,{children:"ARP is crucial because, even though devices use IP addresses to send data packets, actual delivery is based on the MAC address of the device."}),"\n",(0,i.jsx)(n.h4,{id:"arp-functionality",children:"ARP Functionality"}),"\n",(0,i.jsx)(n.p,{children:"When a device on the network needs to send data to another device within the same local network, it must first determine the MAC address associated with the destination device\u2019s IP address."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ARP Request"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The device sends a ",(0,i.jsx)(n.strong,{children:"broadcast"})," message to all devices on the local network. This message contains the target IP address, asking for the corresponding MAC address."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ARP Reply"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The device with the matching IP address responds directly to the sender with its MAC address."}),"\n",(0,i.jsxs)(n.li,{children:["This reply is sent as a ",(0,i.jsx)(n.strong,{children:"unicast"})," message, so only the requesting device receives it."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cache"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After receiving the ARP reply, the requesting device stores the IP-to-MAC mapping in its ",(0,i.jsx)(n.strong,{children:"ARP cache"})," for future use."]}),"\n",(0,i.jsx)(n.li,{children:"The ARP cache stores this mapping for a specific period before it expires and needs to be refreshed."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);