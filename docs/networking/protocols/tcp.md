---
sidebar_position: 5
---

# Transmission Control Protocol (TCP)

## Overview

- **TCP** stands for **Transmission Control Protocol**.
- It is a connection-oriented protocol in the **Transport Layer** of the OSI and TCP/IP models.
- TCP provides **reliable, ordered, and error-checked** delivery of data between applications running on hosts in a network.
- It is one of the core protocols of the Internet Protocol Suite (IP).

## Key Features of TCP

- **Connection-Oriented:**

  - Before transmitting data, a connection must be established between the sender and receiver.
  - This is done using a process known as the **three-way handshake**.

- **Reliable Communication:**

  - TCP ensures data delivery by using acknowledgements (ACKs) and retransmissions if data packets are lost.

- **Ordered Delivery:**

  - Data is delivered to the receiving application in the same order in which it was sent.

- **Error Detection and Recovery:**

  - TCP uses a **checksum** to detect errors.
  - If errors are detected, TCP retransmits the affected data.

- **Full-Duplex Communication:**

  - TCP allows both sender and receiver to transmit data simultaneously.

## TCP Header Structure

A TCP segment consists of a header and data. The TCP header is **20 to 60 bytes** in size.

| **Field**                  | **Size (Bits)** | **Description**                                 |
| -------------------------- | --------------- | ----------------------------------------------- |
| **Source Port**            | 16              | Port number of the sender                       |
| **Destination Port**       | 16              | Port number of the receiver                     |
| **Sequence Number**        | 32              | Order of the first byte of data in the segment  |
| **Acknowledgement Number** | 32              | Next expected byte from the sender              |
| **Data Offset**            | 4               | Size of the TCP header (in 32-bit words)        |
| **Reserved**               | 3               | Reserved for future use (always 0)              |
| **Flags**                  | 9               | Control flags (e.g., SYN, ACK, FIN)             |
| **Window Size**            | 16              | Size of the receive window                      |
| **Checksum**               | 16              | Error-checking value                            |
| **Urgent Pointer**         | 16              | Points to urgent data (if URG flag is set)      |
| **Options**                | Variable        | Optional parameters (e.g., MSS, Window Scaling) |
| **Data**                   | Variable        | The actual application data                     |

**Flags in TCP Header:**

- **SYN**: Initiates a connection.
- **ACK**: Acknowledges receipt of data.
- **FIN**: Gracefully terminates a connection.
- **RST**: Resets an existing connection.
- **PSH**: Requests immediate delivery of data to the application.
- **URG**: Indicates urgent data.

## TCP Three-Way Handshake

The three-way handshake is used to establish a reliable connection between two devices.

1. **SYN (Synchronize):**

   - The client sends a SYN packet to the server to initiate a connection.
   - This packet contains a **sequence number**.

2. **SYN-ACK (Synchronize + Acknowledge):**

   - The server responds with a SYN-ACK packet to acknowledge the client’s request.
   - The packet contains the server's sequence number and an acknowledgment number.

3. **ACK (Acknowledge):**

   - The client sends an ACK packet to confirm the connection.

**Diagram:**

```
Client         Server
  | SYN      ->     |
  |          <-  SYN-ACK |
  | ACK      ->     |
Connection Established!
```

## TCP Connection Termination

To close a TCP connection, a **four-step process** is used:

1. **FIN Sent by Client:** The client sends a FIN packet to indicate it has finished sending data.
2. **ACK Sent by Server:** The server acknowledges the FIN.
3. **FIN Sent by Server:** The server sends its own FIN to indicate it has finished sending data.
4. **ACK Sent by Client:** The client acknowledges the server's FIN.

**Diagram:**

```
Client           Server
  | FIN     ->      |
  |         <-   ACK |
  |         <-   FIN |
  | ACK     ->      |
Connection Closed!
```

## Reliability in TCP

TCP ensures reliability through:

- **Acknowledgements (ACKs):** The receiver acknowledges the data it successfully receives.
- **Retransmissions:** If an acknowledgement is not received within a timeout period, the sender retransmits the data.
- **Checksum:** Used to detect errors in transmitted data.
- **Sliding Window Protocol:** Controls the amount of data that can be sent before receiving an ACK.

## Flow Control in TCP

TCP prevents the sender from overwhelming the receiver using **flow control** mechanisms:

- **Sliding Window Protocol:**

  - The sender keeps track of a "window" of data that can be sent without receiving further ACKs.
  - The receiver communicates the window size in its acknowledgements, ensuring that it never receives more data than it can process.

- **Dynamic Adjustment:**

  - TCP adjusts the window size dynamically based on the receiver’s advertised capacity.
  - If the receiver’s buffer fills up, it can reduce the window size to zero, pausing data transmission until it is ready to accept more data.

- **Stop-and-Wait Mechanism:**

  - In situations where fine-grained flow control is necessary, TCP can send one packet at a time, waiting for an acknowledgement before sending the next.

## Congestion Control in TCP

Congestion occurs when the network becomes overloaded. TCP uses these algorithms:

- **Slow Start:**

  - The sender starts with a small congestion window (cwnd) and increases it exponentially until packet loss occurs or a threshold is reached.

- **Congestion Avoidance:**

  - After reaching a threshold, TCP increases the window size linearly to avoid overwhelming the network.

- **Fast Retransmit:**

  - Upon receiving three duplicate ACKs, the sender retransmits the lost packet immediately without waiting for a timeout.

- **Fast Recovery:**

  - Instead of resetting to slow start, TCP reduces the congestion window size to half and enters congestion avoidance mode to recover from congestion quickly.

- **TCP Tahoe vs. TCP Reno:**

  - **TCP Tahoe:** Resets the congestion window to 1 and restarts slow start after detecting packet loss.
  - **TCP Reno:** Optimizes congestion recovery with fast retransmit and fast recovery, improving performance in certain scenarios.

## Advantages of TCP

- Reliable data delivery.
- Connection-oriented communication.
- Ordered data transmission.
- Handles flow and congestion control.

## Disadvantages of TCP

- Higher overhead due to acknowledgements and error-checking mechanisms.
- Slower compared to connectionless protocols like UDP.
- Inefficient for real-time applications where latency is critical.

## Use Cases of TCP

TCP is used where reliability is crucial. Examples:

- **Web Browsing:** HTTP/HTTPS uses TCP.
- **File Transfers:** FTP and SFTP rely on TCP.
- **Email:** SMTP, POP3, and IMAP use TCP.
- **Remote Access:** SSH and Telnet use TCP.
- **Streaming Services:** Some non-time-critical video and audio streaming services use TCP.

## Comparison: TCP vs. UDP

| **Feature**         | **TCP**                          | **UDP**               |
| ------------------- | -------------------------------- | --------------------- |
| **Connection Type** | Connection-oriented              | Connectionless        |
| **Reliability**     | Reliable (ACKs, retransmissions) | Unreliable            |
| **Data Order**      | Ordered                          | Unordered             |
| **Error Checking**  | Yes (Checksum)                   | Yes (Checksum)        |
| **Speed**           | Slower                           | Faster                |
| **Use Case**        | File transfers, web browsing     | VoIP, video streaming |
