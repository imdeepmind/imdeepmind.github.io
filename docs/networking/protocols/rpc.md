---
sidebar_position: 12
---

# RPC and gRPC

**RPC (Remote Procedure Call)** is a protocol that allows a program to execute functions on a remote server as if they were local. It abstracts the complexity of network communication, enabling developers to build distributed systems with ease. Traditional RPC frameworks may run over TCP, UDP, or other transport protocols, depending on the implementation.

## How RPC Works

1. **Client-Side Stub**:

   - The client calls a function using a local stub (proxy).
   - The stub serializes the request (marshalling) into a format suitable for network transmission.

2. **Transport Layer**:

   - The serialized request is sent over the network. Most implementations use TCP for reliability, but some may use UDP for lightweight or time-sensitive communication.

3. **Server-Side Stub**:

   - The server stub receives the request, deserializes it (unmarshalling), and invokes the corresponding method on the server.
   - The method executes and returns the result.

4. **Response**:
   - The server stub serializes the result and sends it back over the network.
   - The client stub deserializes the response and provides it to the client application.

## Key Components

- **Transport Protocol**: Most RPC implementations use **TCP** for reliable delivery, but some systems opt for **UDP** for low-latency scenarios.
- **Serialization**: Data is serialized into a structured format like JSON, XML, or custom binary formats.
- **Security**: Security in traditional RPC is implementation-specific and may include:
  - Authentication mechanisms (e.g., tokens, credentials).
  - Encrypted communication using SSL/TLS.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client
        participant Network (TCP/UDP)
        participant Server

        Client->>Network (TCP/UDP): Serialize and send request
        Network (TCP/UDP)->>Server: Deliver request
        Server->>Network (TCP/UDP): Serialize and return response
        Network (TCP/UDP)->>Client: Deliver response
        Client->>Client: Process result
    ```

</div>

## gRPC

**gRPC** is a modern, high-performance RPC framework developed by Google. It runs on top of **HTTP/2**, a protocol that uses **TCP** as its transport layer. It is designed for efficient, scalable, and secure communication in distributed systems.

### Features of gRPC

1. **Transport Protocol**:

   - gRPC uses **HTTP/2** for communication, which provides:
     - **Multiplexing**: Multiple streams over a single TCP connection.
     - **Flow Control**: Efficient bandwidth usage.
     - **Bidirectional Streaming**: Full-duplex communication.

2. **Serialization**:

   - gRPC uses **Protocol Buffers (Protobuf)**, a compact, language-neutral binary serialization format.

3. **Cross-Language Support**:

   - gRPC generates client and server code in multiple languages from a single `.proto` file.

4. **Streaming Models**:

   - **Unary RPC**: Single request and response.
   - **Server Streaming RPC**: One request, multiple responses.
   - **Client Streaming RPC**: Multiple requests, one response.
   - **Bidirectional Streaming RPC**: Both client and server exchange streams.

5. **Security**:
   - gRPC natively supports **TLS (Transport Layer Security)** for encryption and authentication.
   - Mutual TLS (mTLS) is supported for client-server authentication.
   - It can integrate with external authentication systems (e.g., OAuth2, JWT).

### How gRPC Works

1. **Service Definition**:

   - Define the service and messages using `.proto` files.
   - Compile `.proto` files to generate client and server code.

2. **Client-Side**:

   - The client creates a stub (proxy) from the generated code.
   - Invokes methods on the stub as local function calls.

3. **Server-Side**:

   - The server implements the interface generated from the `.proto` file.
   - The gRPC server listens for incoming requests.

4. **Communication**:
   - The client and server communicate using **HTTP/2**.
   - Protobuf messages are serialized and transmitted over a **TCP** connection.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client Stub
        participant HTTP/2 (TCP)
        participant gRPC Server

        Client Stub->>HTTP/2 (TCP): Serialize and send request
        HTTP/2 (TCP)->>gRPC Server: Deliver request
        gRPC Server->>HTTP/2 (TCP): Serialize and send response
        HTTP/2 (TCP)->>Client Stub: Deliver response
        Client Stub->>Application: Return result
    ```

</div>

## Key Comparisons Between RPC and gRPC

| Feature              | Traditional RPC         | gRPC                                   |
| -------------------- | ----------------------- | -------------------------------------- |
| **Transport Layer**  | TCP/UDP                 | HTTP/2 (over TCP)                      |
| **Serialization**    | JSON/XML or Custom      | Protocol Buffers (Protobuf)            |
| **Streaming**        | Limited or None         | Full streaming support                 |
| **Security**         | Implementation-specific | Built-in TLS, mTLS, OAuth2, etc.       |
| **Performance**      | Moderate                | High due to Protobuf and HTTP/2        |
| **Language Support** | Limited                 | Wide support across multiple languages |

## Example Use Cases

- **RPC**: Suitable for small-scale, simpler applications requiring basic remote execution capabilities.
- **gRPC**: Ideal for microservices architectures, streaming, and scenarios demanding high performance and strong security.

Let me know if you'd like examples or deeper dives into any specific topic!
