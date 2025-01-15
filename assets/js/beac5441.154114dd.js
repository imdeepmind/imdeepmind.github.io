"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[7694],{53412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"networking/protocols/ftp","title":"FTP","description":"File Transfer Protocol (FTP) is a standard network protocol used to transfer files between a client and a server over a TCP/IP-based network, like the internet or an intranet. It operates on the client-server model, where the client initiates a connection to the server and requests files to be uploaded or downloaded.","source":"@site/docs/networking/protocols/ftp.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/ftp","permalink":"/docs/networking/protocols/ftp","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/ftp.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736950153000,"sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"DNS","permalink":"/docs/networking/protocols/dns"},"next":{"title":"MQTT and AMQP","permalink":"/docs/networking/protocols/mqtt-amqp"}}');var r=s(74848),t=s(28453);const o={sidebar_position:15},l="FTP",c={},d=[{value:"Key Features of FTP",id:"key-features-of-ftp",level:2},{value:"FTP Command Structure",id:"ftp-command-structure",level:2},{value:"Workflow of FTP",id:"workflow-of-ftp",level:2},{value:"Key Components in the Diagram",id:"key-components-in-the-diagram",level:3},{value:"Limitations",id:"limitations",level:2},{value:"SFTP (Secure File Transfer Protocol)",id:"sftp-secure-file-transfer-protocol",level:2},{value:"Key Features of SFTP",id:"key-features-of-sftp",level:3},{value:"SFTP vs FTP",id:"sftp-vs-ftp",level:3},{value:"Use Cases",id:"use-cases",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ftp",children:"FTP"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"File Transfer Protocol (FTP)"})," is a standard network protocol used to transfer files between a client and a server over a TCP/IP-based network, like the internet or an intranet. It operates on the client-server model, where the client initiates a connection to the server and requests files to be uploaded or downloaded."]}),"\n",(0,r.jsx)(n.h2,{id:"key-features-of-ftp",children:"Key Features of FTP"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Client-Server Architecture"}),": FTP uses a client-server model where the client sends requests for file transfers, and the server handles these requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active and Passive Modes"}),": FTP supports two modes for establishing the connection between the client and the server:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active Mode"}),": The server opens a port and listens for incoming connections from the client. The client communicates with the server to initiate the data transfer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Passive Mode"}),": The client establishes both the control and data connections. This mode is often used when the client is behind a firewall or NAT (Network Address Translation)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Transfer Types"}),": FTP supports different data transfer types:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ASCII Mode"}),": Transfers text files, where line endings are converted to match the operating system conventions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Binary Mode"}),": Transfers binary files such as images or executables, where no conversion occurs, and the exact byte sequence is transferred."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Port Numbers"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["FTP typically uses ",(0,r.jsx)(n.strong,{children:"port 21"})," for control commands (e.g., login, file operations)."]}),"\n",(0,r.jsx)(n.li,{children:"Data transfer occurs on a dynamic port range, with the default being port 20 for active mode."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ftp-command-structure",children:"FTP Command Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"USER"}),": Specifies the username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"PASS"}),": Specifies the password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"LIST"}),": Lists the files in the current directory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GET/RETR"}),": Downloads a file from the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"PUT/STOR"}),": Uploads a file to the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"QUIT"}),": Ends the FTP session."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"workflow-of-ftp",children:"Workflow of FTP"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Connection Establishment"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The client initiates a connection to the FTP server on port 21 (control connection)."}),"\n",(0,r.jsx)(n.li,{children:"The client sends authentication credentials (username and password) over this control connection."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Command Communication"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["After authentication, the client sends commands (e.g., ",(0,r.jsx)(n.code,{children:"LIST"}),", ",(0,r.jsx)(n.code,{children:"RETR"}),", ",(0,r.jsx)(n.code,{children:"STOR"}),") over the control connection to interact with the server."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Transfer"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When a file transfer command is issued, a separate ",(0,r.jsx)(n.strong,{children:"data connection"})," is established between the client and the server."]}),"\n",(0,r.jsxs)(n.li,{children:["FTP can operate in two modes for data transfer:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active Mode"}),": The server initiates the data connection to the client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Passive Mode"}),": The client initiates the data connection to the server, often used when the client is behind a firewall."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"File Operations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Files are uploaded, downloaded, or listed based on the client\u2019s commands."}),"\n",(0,r.jsx)(n.li,{children:"Data is transmitted over the data connection in either ASCII or binary mode."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Termination"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The control and data connections are closed when the session ends."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Server\n\n    Client->>Server: Connect to port 21 (Control Connection)\n    Server--\x3e>Client: Request for Authentication\n    Client->>Server: Send Username and Password\n    Server--\x3e>Client: Authentication Successful\n\n    Client->>Server: LIST (Request File Listing)\n    Server--\x3e>Client: File List via Control Connection\n\n    Client->>Server: STOR (Upload File) or RETR (Download File)\n    Note right of Server: Establish Data Connection\n    alt Active Mode\n        Server->>Client: Connect to Client's Random Port\n    else Passive Mode\n        Client->>Server: Connect to Server's Random Port\n    end\n    Server--\x3e>Client: Data Transfer (File Upload/Download)\n\n    Client->>Server: QUIT (Close Connection)\n    Server--\x3e>Client: Connection Closed"})}),"\n",(0,r.jsx)(n.h3,{id:"key-components-in-the-diagram",children:"Key Components in the Diagram"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Control Connection"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Persistent connection on port 21."}),"\n",(0,r.jsx)(n.li,{children:"Used for sending commands and receiving responses."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Connection"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temporary connection for transferring file data."}),"\n",(0,r.jsx)(n.li,{children:"Uses port 20 (active mode) or a random port (passive mode)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Commands"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"USER"})," and ",(0,r.jsx)(n.code,{children:"PASS"})," for authentication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LIST"}),", ",(0,r.jsx)(n.code,{children:"RETR"}),", and ",(0,r.jsx)(n.code,{children:"STOR"})," for file operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QUIT"})," to terminate the session."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Lack of Encryption"}),": FTP does not encrypt its traffic, meaning credentials and data can be intercepted during transmission."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security Risks"}),": As it transmits data, including usernames and passwords, in plaintext, FTP is vulnerable to attacks like eavesdropping and man-in-the-middle attacks."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sftp-secure-file-transfer-protocol",children:"SFTP (Secure File Transfer Protocol)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Secure File Transfer Protocol (SFTP)"})," is a secure version of FTP, often confused with ",(0,r.jsx)(n.strong,{children:"SSH File Transfer Protocol"}),", but it is based on the SSH (Secure Shell) protocol. SFTP adds encryption and security mechanisms to the traditional FTP to ensure the confidentiality, integrity, and authenticity of the transferred files."]}),"\n",(0,r.jsx)(n.h3,{id:"key-features-of-sftp",children:"Key Features of SFTP"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Encryption"}),": SFTP encrypts both the command and data channels using SSH. This ensures that all sensitive information, such as login credentials and file contents, is transmitted securely."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),": SFTP supports various forms of authentication, including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Password-based Authentication"}),": The user provides a password to authenticate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key-based Authentication"}),": The user can authenticate using cryptographic key pairs, where the server holds the public key, and the client uses the corresponding private key."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Single Connection"}),": Unlike FTP, which uses separate connections for commands and data transfer, SFTP uses a single encrypted connection for both."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Port Number"}),": SFTP typically uses ",(0,r.jsx)(n.strong,{children:"port 22"}),", the same port as SSH. This simplifies firewall configuration and ensures encrypted communication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"File Operations"}),": SFTP supports various file operations, including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"get"}),": Download files from the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"put"}),": Upload files to the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ls"}),": List files in a directory."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mkdir"}),": Create directories."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rm"}),": Remove files."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sftp-vs-ftp",children:"SFTP vs FTP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security"}),": The main difference is that SFTP is inherently secure due to the use of SSH encryption, unlike FTP, which transmits data in plaintext."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Connection Model"}),": FTP requires two connections (control and data), whereas SFTP uses a single connection, making it easier to configure through firewalls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Port Usage"}),": FTP commonly uses ports 20 and 21, while SFTP operates on port 22 (SSH)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Efficiency"}),": SFTP is more efficient for transferring large files over unsecured networks, as it encrypts all data, providing protection against data interception."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FTP"}),": It is used for simple file transfers, like transferring public files to a web server or accessing an FTP server to download software updates. However, due to its lack of security, FTP should not be used to transfer sensitive or confidential data over the internet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SFTP"}),": It is widely used for secure file transfers, such as transferring financial data, sensitive documents, or any other type of confidential information. SFTP is often used by businesses and organizations that require secure, encrypted communication over the internet."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);