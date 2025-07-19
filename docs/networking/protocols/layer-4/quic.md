---
sidebar_position: 3
---

# QUIC

QUIC (Quick UDP Internet Connections) is a modern transport layer protocol developed by Google to address the limitations of older protocols like TCP (Transmission Control Protocol) and improve web performance, especially in high-latency and unreliable network conditions. QUIC runs on top of UDP (User Datagram Protocol), which is a connectionless protocol, and provides features typically associated with TCP, such as reliability, flow control, and congestion control, but with lower latency and better performance.

### Key Features of QUIC

### Connection Establishment Speed

- Traditional protocols like TCP require a handshake process that can take multiple round-trip times (RTTs) before data can be transferred. QUIC reduces this by combining the handshake for both the transport and encryption layers.
- QUIC achieves 0-RTT (zero round-trip time) connection setup, meaning that data can start flowing as soon as the initial handshake completes.

### Multiplexing Without Head-of-Line Blocking

- In protocols like HTTP/2 over TCP, multiple streams share a single connection. If one stream experiences packet loss, it causes head-of-line blocking, which delays the delivery of packets in other streams.
- QUIC allows multiplexing multiple streams in parallel, where each stream has its own independent flow. This prevents head-of-line blocking, improving performance.

### Built-in Encryption

- QUIC integrates encryption (TLS 1.3) directly into the protocol, which means that all QUIC connections are encrypted by default. This eliminates the need for separate encryption protocols like TLS over TCP, resulting in improved security and reduced latency.

### Forward Error Correction

- QUIC can use forward error correction (FEC) to recover from packet loss more efficiently. It enables faster recovery without needing a full retransmission, improving performance in lossy networks.

### Congestion Control

- QUIC implements modern congestion control algorithms like BBR (Bottleneck Bandwidth and Round-trip propagation time) that are better suited for high-speed networks than traditional algorithms like TCP Reno.

### Migration Support

- QUIC connections are not tied to a specific IP address or port. This allows the protocol to seamlessly handle network changes (e.g., switching from Wi-Fi to cellular networks) without disconnecting or re-establishing the connection.

## QUIC Packet Structure

QUIC packets consist of several components that work together to manage connections, streams, and encryption. The packet structure is more complex than TCP or UDP but is designed for optimized performance.

Here's a basic representation of the QUIC packet structure:

<div class="mermaid-container">
    ```mermaid
    graph TB
        A[QUIC Packet] --> B[Header]
        B --> C[Connection ID]
        B --> D[Packet Number]
        B --> E[Payload]
        E --> F[Stream Frame]
        E --> G[Acknowledgment Frame]
        E --> H[Padding]
    ```
</div>

- **Connection ID**: A unique identifier used to identify the connection.
- **Packet Number**: The number that helps to identify the order of the packet and ensures that the receiver can detect lost packets.
- **Payload**: The data being transmitted, which can include stream data (for application data), acknowledgment frames (for confirming received packets), and padding (to align the packet sizes).

## QUIC Handshake and Connection Establishment

In traditional protocols like TCP, the handshake involves three steps: SYN, SYN-ACK, and ACK. QUIC combines transport and cryptographic handshakes, making it faster. Here’s a simplified version of the QUIC handshake:

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client
        participant Server

        Client->>Server: Initial Packet (0-RTT)
        Server->>Client: Handshake Response
        Client->>Server: Confirm Handshake
        Server->>Client: Confirm Encryption and Session Established
        Client->>Server: Application Data
    ```

</div>

1. **Initial Packet (0-RTT)**: The client sends the first packet with a previously used encryption key for faster reconnection.

2. **Handshake Response**: The server responds with its own public key and other details for encryption.

3. **Confirm Handshake**: The client sends confirmation back to the server.

4. **Session Established**: Once the handshake completes, encryption is confirmed, and both parties can send application data.

This reduces the connection setup time compared to traditional TCP handshakes, especially when using the 0-RTT mechanism.

## QUIC Stream Management

QUIC allows multiple independent streams to be established between the client and server over a single connection. Streams are identified by stream numbers and can be independently sent, acknowledged, and reset. This prevents head-of-line blocking since the loss of one stream doesn’t impact others.

<div class="mermaid-container">
    ```mermaid
    graph TB
        A[QUIC Connection]
        A --> B[Stream 1]
        A --> C[Stream 2]
        A --> D[Stream 3]
        B --> E[Stream Frame 1]
        C --> F[Stream Frame 2]
        D --> G[Stream Frame 3]
    ```
</div>

- **Streams**: Independent channels through which data is transmitted.
- **Stream Frames**: Data segments transmitted within each stream.

Each stream can be used for different parts of a web request, such as loading text, images, and JavaScript files simultaneously without affecting each other.

## How QUIC Works Internally

To understand how QUIC functions internally, we need to look at how the protocol handles communication between the client and server, as well as its management of connections, data transfer, and error handling.

### Connection Establishment and Encryption

- QUIC starts with a connection request. If the client has a cached connection ID from a previous session, it sends an initial packet encrypted with that information, enabling a 0-RTT handshake.
- Both the client and server exchange cryptographic keys during the handshake, with QUIC leveraging TLS 1.3 to secure the data. This happens faster than TCP because QUIC merges the transport and encryption handshakes.

### Stream Multiplexing

- After the connection is established, QUIC uses streams to transfer data. These streams are independent, meaning that packet loss in one stream does not block the transfer of data in other streams.
- QUIC uses stream IDs to identify each stream, and it maintains separate state for each stream to handle data independently.

### Congestion Control and Flow Management

- QUIC incorporates modern congestion control mechanisms like BBR (Bottleneck Bandwidth and RTT) to optimize data transmission based on real-time measurements of network conditions. BBR focuses on maximizing throughput without causing excessive delays, unlike traditional TCP congestion algorithms like Reno.
- QUIC also manages flow control on a per-stream basis. This ensures that each stream gets the appropriate share of network resources without overwhelming the connection.

### Reliability and Error Recovery

- QUIC ensures reliability by using packet acknowledgment and retransmissions. If packets are lost, the receiver sends an acknowledgment frame to request the retransmission of the lost packet.
- Forward error correction (FEC) is used in QUIC to allow the recovery of lost packets without waiting for retransmissions. This reduces latency in scenarios where packet loss is common.

### Connection Migration

- QUIC supports connection migration, meaning that if a client switches from one network to another (e.g., from Wi-Fi to cellular), the connection can continue without needing to be re-established. This is possible because QUIC uses connection IDs instead of IP addresses or ports to track active connections.

## QUIC vs TCP

QUIC has several advantages over TCP in terms of performance and efficiency, especially for modern web applications:

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client
        participant Server

        %% TCP Connection Establishment (With TLS)
        rect rgba(0, 255, 0, 0.1)
            Client->>Server: SYN
            Server->>Client: SYN-ACK
            Client->>Server: ACK
        end
        rect rgba(0, 255, 0, 0.1)
            Note over Client, Server: TCP requires 3-way handshake (SYN, SYN-ACK, ACK)
        end
        rect rgba(255, 255, 0, 0.1)
            Client->>Server: TLS ClientHello
            Server->>Client: TLS ServerHello
            Server->>Client: TLS Certificate
            Client->>Server: TLS Finished
            Server->>Client: TLS Finished
        end
        rect rgba(255, 255, 0, 0.1)
            Note over Client, Server: TLS handshake adds additional RTTs before data transfer.
        end

        %% QUIC Connection Establishment
        rect rgba(0, 0, 255, 0.1)
            Client->>Server: Initial Packet (0-RTT)
            Server->>Client: Handshake Response (Encrypted)
            Client->>Server: Confirm Handshake
            Server->>Client: Confirm Encryption and Session Established
        end
        rect rgba(0, 0, 255, 0.1)
            Note over Client, Server: QUIC combines transport and encryption handshake, reducing RTT.
        end
    ```

</div>

1. **Connection Setup**: QUIC requires fewer RTTs for connection setup (0-RTT in many cases), while TCP requires 1-3 RTTs.

1. **Multiplexing**: QUIC avoids head-of-line blocking, while TCP suffers from it.

1. **Encryption**: QUIC has built-in encryption, whereas TCP requires additional layers like TLS/SSL.

1. **Congestion Control**: QUIC uses advanced congestion control algorithms like BBR, which outperform TCP’s traditional congestion control methods.

## QUIC Deployment

QUIC is primarily used by Google, YouTube, and other services that require low-latency connections. It's also the foundation of HTTP/3, the latest version of the HTTP protocol, which runs over QUIC instead of TCP.
