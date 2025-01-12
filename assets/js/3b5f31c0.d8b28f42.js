"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[328],{62859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"networking/protocols/ssh","title":"Secure Shell","description":"SSH (Secure Shell) is a cryptographic network protocol used to securely access remote systems over an unsecured network. It ensures confidentiality, integrity, and authentication for data communication between a client and a server. SSH is widely used for remote login, file transfers, and secure command execution.","source":"@site/docs/networking/protocols/ssh.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/ssh","permalink":"/docs/networking/protocols/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/ssh.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736704595000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Hypertext Transfer Protocol","permalink":"/docs/networking/protocols/http"},"next":{"title":"File Transfer Protocol","permalink":"/docs/networking/protocols/ftp"}}');var t=i(74848),r=i(28453);const o={sidebar_position:10},l="Secure Shell",c={},a=[{value:"Key Features of SSH",id:"key-features-of-ssh",level:2},{value:"How SSH Works",id:"how-ssh-works",level:2},{value:"Key Components of SSH",id:"key-components-of-ssh",level:3},{value:"Steps in SSH Communication",id:"steps-in-ssh-communication",level:3},{value:"Step 1: Establishing the TCP Connection",id:"step-1-establishing-the-tcp-connection",level:4},{value:"Step 2: Negotiating Protocol Version",id:"step-2-negotiating-protocol-version",level:4},{value:"Step 3: Key Exchange",id:"step-3-key-exchange",level:4},{value:"Step 4: Server Authentication",id:"step-4-server-authentication",level:4},{value:"Step 5: Client Authentication",id:"step-5-client-authentication",level:4},{value:"Step 6: Secure Communication",id:"step-6-secure-communication",level:4},{value:"Types of Authentication in SSH",id:"types-of-authentication-in-ssh",level:3},{value:"Encryption and Security",id:"encryption-and-security",level:2},{value:"Advantages of SSH",id:"advantages-of-ssh",level:2},{value:"Common SSH Tools",id:"common-ssh-tools",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"secure-shell",children:"Secure Shell"})}),"\n",(0,t.jsxs)(n.p,{children:["SSH (Secure Shell) is a cryptographic network protocol used to securely access remote systems over an unsecured network. It ensures ",(0,t.jsx)(n.strong,{children:"confidentiality"}),", ",(0,t.jsx)(n.strong,{children:"integrity"}),", and ",(0,t.jsx)(n.strong,{children:"authentication"})," for data communication between a client and a server. SSH is widely used for remote login, file transfers, and secure command execution."]}),"\n",(0,t.jsx)(n.h2,{id:"key-features-of-ssh",children:"Key Features of SSH"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Encryption"}),": Ensures that the communication between the client and server is encrypted, preventing eavesdropping."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication"}),": Verifies the identity of the client and the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Integrity"}),": Ensures that the data transmitted is not tampered with during transit."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port Forwarding"}),": Supports tunneling other protocols through SSH."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"File Transfer"}),": Provides secure file transfer mechanisms (e.g., SCP, SFTP)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-ssh-works",children:"How SSH Works"}),"\n",(0,t.jsx)(n.h3,{id:"key-components-of-ssh",children:"Key Components of SSH"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client"}),": The machine initiating the SSH connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Server"}),": The machine hosting the service and listening for incoming SSH connections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port"}),": SSH uses port ",(0,t.jsx)(n.strong,{children:"22"})," by default."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication Keys"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Public Key"}),": Shared with the server for authentication."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Private Key"}),": Kept secret by the client for decryption."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("div",{class:"mermaid-container",children:(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as SSH Client\n    participant Server as SSH Server\n\n    Client->>Server: TCP Connection Request\n    Server--\x3e>Client: TCP Connection Established\n\n    Client->>Server: SSH Protocol Version Exchange\n    Server--\x3e>Client: SSH Protocol Version Exchange\n\n    Client->>Server: Key Exchange (e.g., Diffie-Hellman)\n    Server--\x3e>Client: Key Exchange (e.g., Diffie-Hellman)\n\n    Server->>Client: Server Authentication (Server's Public Key)\n    Client->>Server: Client Authentication (Password/Public Key)\n\n    Client->>Server: Encrypted Session Established\n    Server--\x3e>Client: Encrypted Session Established"})}),"\n",(0,t.jsx)(n.h3,{id:"steps-in-ssh-communication",children:"Steps in SSH Communication"}),"\n",(0,t.jsx)(n.h4,{id:"step-1-establishing-the-tcp-connection",children:"Step 1: Establishing the TCP Connection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The client sends a request to the SSH server over TCP (default port 22)."}),"\n",(0,t.jsx)(n.li,{children:"The server responds and establishes a connection."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-2-negotiating-protocol-version",children:"Step 2: Negotiating Protocol Version"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The client and server exchange their SSH protocol versions."}),"\n",(0,t.jsx)(n.li,{children:"The server sends its supported cryptographic algorithms (e.g., encryption, hashing)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-3-key-exchange",children:"Step 3: Key Exchange"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Diffie-Hellman Key Exchange (or similar algorithm)"})," is used to securely agree on a shared symmetric key for encryption."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The client and server exchange public parameters required for the Diffie-Hellman algorithm."}),"\n",(0,t.jsx)(n.li,{children:"Both sides compute a shared secret key using their private parameters."}),"\n",(0,t.jsx)(n.li,{children:"The resulting shared secret key is used for symmetric encryption."}),"\n"]}),"\n",(0,t.jsx)("div",{class:"mermaid-container",children:(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client as Client\n    participant Server as Server\n\n    Client->>Server: Sends A = g^a mod p\n    Server->>Client: Sends B = g^b mod p\n\n    Client->>Client: Computes Shared Key = (B^a mod p)\n    Server->>Server: Computes Shared Key = (A^b mod p)"})}),"\n",(0,t.jsx)(n.p,{children:"Here:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"p"})," is a prime number."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"g"})," is a generator."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"a"})," and ",(0,t.jsx)(n.code,{children:"b"})," are private keys of the client and server, respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-4-server-authentication",children:"Step 4: Server Authentication"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The server sends its public key to the client."}),"\n",(0,t.jsx)(n.li,{children:"The client verifies the server's identity by comparing the server's public key with its known hosts."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-5-client-authentication",children:"Step 5: Client Authentication"}),"\n",(0,t.jsx)(n.p,{children:"The client authenticates itself using one of the following methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Password-Based Authentication"}),": The client provides a username and password."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Public Key Authentication"}),": The client signs a challenge using its private key, and the server verifies it using the client's public key."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-6-secure-communication",children:"Step 6: Secure Communication"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Once authentication is successful, a secure, encrypted session is established."}),"\n",(0,t.jsx)(n.li,{children:"All further communication between the client and server is encrypted using the shared symmetric key."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"types-of-authentication-in-ssh",children:"Types of Authentication in SSH"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Password Authentication"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The user enters a password, which is sent securely over the encrypted session."}),"\n",(0,t.jsx)(n.li,{children:"Simple but less secure than public key authentication."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Public Key Authentication"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The client and server exchange cryptographic keys for authentication."}),"\n",(0,t.jsx)(n.li,{children:"More secure because it eliminates the need to send passwords over the network."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"encryption-and-security",children:"Encryption and Security"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Symmetric Encryption"}),": After the handshake, symmetric encryption (e.g., AES, ChaCha20) is used for faster communication."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HMAC (Hash-based Message Authentication Code)"}),": Ensures data integrity."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-ssh",children:"Advantages of SSH"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Strong encryption and authentication."}),"\n",(0,t.jsx)(n.li,{children:"Protects against man-in-the-middle attacks."}),"\n",(0,t.jsx)(n.li,{children:"Supports tunneling other protocols."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-ssh-tools",children:"Common SSH Tools"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenSSH"}),": Widely used SSH implementation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PuTTY"}),": A popular SSH client for Windows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WinSCP"}),": SSH-based file transfer tool."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);