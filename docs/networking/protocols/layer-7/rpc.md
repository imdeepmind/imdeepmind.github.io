---
sidebar_position: 5
---

# RPC and gRPC

:::tip[Status]

This note is complete, reviewed, and considered stable.

:::

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

## Mutual TLS (mTLS)

Mutual TLS (mTLS) is an extension of TLS where both the client and server authenticate each other using X.509 certificates. In standard TLS, only the server presents a certificate and proves its identity to the client. With mTLS, the client also presents a certificate, allowing the server to verify the client's identity.

### How mTLS Works

1. Client initiates a connection to the server.
2. Server presents its certificate.
3. Client validates the server certificate against a trusted Certificate Authority (CA).
4. Client presents its own certificate.
5. Server validates the client certificate against a trusted Certificate Authority (CA).
6. A secure encrypted channel is established.
7. gRPC requests and responses are exchanged over the authenticated connection.

### Benefits of mTLS

* Encrypts all communication between client and server.
* Authenticates both parties before any application data is exchanged.
* Eliminates the need to transmit credentials such as API keys between trusted services.
* Commonly used for service-to-service communication in microservice architectures.
* Provides strong identity verification in zero-trust environments.

### Common Use Cases

* Communication between microservices.
* Internal APIs within Kubernetes clusters.
* Service mesh implementations such as Istio and Linkerd.
* Highly regulated environments requiring strong authentication and encryption.

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
