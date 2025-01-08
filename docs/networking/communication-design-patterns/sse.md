---
sidebar_position: 6
---

# Server-Sent Events (SSE)

Server-Sent Events (SSE) is a unidirectional, server-to-client communication technology that allows servers to push real-time updates to clients over a single, persistent HTTP connection. It is based on the HTML5 EventSource API, which is specifically designed for streaming updates from a server to a web browser.

Unlike WebSockets, which provide full-duplex communication (both server-to-client and client-to-server), SSE is optimized for scenarios where updates flow only from the server to the client, such as live news feeds, notifications, or monitoring dashboards.

## How SSE Works

1. **Client Opens a Connection:**

   - The client initiates an HTTP request to the server using the `EventSource` API.

2. **Server Streams Updates:**

   - The server responds with a persistent HTTP connection and streams updates as a sequence of text-based messages.

3. **Messages in a Specific Format:**

   - Each message sent by the server follows a specific format (`data`, `event`, and `id` fields), making it easy for the client to parse.

4. **Automatic Reconnection:**

   - If the connection is interrupted (e.g., network issues), the browser automatically attempts to reconnect.

5. **Client Processes Updates:**
   - The client receives updates in real-time and processes them using JavaScript event listeners.

## Key Characteristics of SSE

1. **Unidirectional Communication:**

   - Data flows only from the server to the client, making it ideal for updates or notifications.

2. **Text-Based Protocol:**

   - SSE messages are text-based and encoded as UTF-8, which simplifies processing and debugging.

3. **Persistent Connection:**

   - The server keeps the connection open to stream updates, avoiding the need to repeatedly establish new connections.

4. **Automatic Reconnection:**

   - If the connection is lost, the client (browser) automatically attempts to reconnect without requiring additional logic.

5. **Event Identification:**

   - SSE supports unique event IDs, which allow clients to resume updates from where they left off in case of reconnection.

6. **Browser Support:**
   - SSE is supported natively by most modern browsers (except Internet Explorer). For unsupported browsers, polyfills can be used.

## SSE Message Format

SSE messages are sent in a specific plain-text format that includes the following fields:

1. **`data`:**

   - The main content of the message (required).
   - Example: `data: Hello, World!`

2. **`event`:**

   - The type of event (optional). Custom event types can be specified here.
   - Example: `event: customEvent`

3. **`id`:**

   - A unique identifier for the event (optional). Helps the client track messages for reconnection purposes.
   - Example: `id: 123`

4. **`retry`:**
   - The time (in milliseconds) the client should wait before attempting to reconnect after a disconnection (optional).
   - Example: `retry: 5000`

**Example SSE Message:**

```
id: 123
event: update
data: {"message": "This is a server-sent event"}
```

## Advantages of SSE

1. **Simplicity:**

   - Easy to implement with minimal client-side and server-side code compared to WebSockets.

2. **Automatic Reconnection:**

   - The `EventSource` API handles reconnection automatically, simplifying error handling.

3. **Built-In Support for Events:**

   - SSE natively supports custom event types, making it flexible for different use cases.

4. **Efficient for Unidirectional Data:**

   - Ideal for applications where data only needs to flow from the server to the client.

5. **Uses Standard HTTP Protocols:**

   - SSE works over standard HTTP/HTTPS, making it firewall and proxy-friendly.

6. **Lightweight:**
   - Compared to WebSockets, SSE has lower overhead for unidirectional communication.

## Disadvantages of SSE

1. **Unidirectional Only:**

   - Data can only flow from the server to the client. If bidirectional communication is needed, WebSockets are a better choice.

2. **Limited Browser Support:**

   - While supported by most modern browsers, Internet Explorer does not support SSE natively.

3. **Scalability:**

   - SSE relies on HTTP/1.1 connections, which can lead to scalability issues for applications with a large number of clients.

4. **Binary Data Not Supported:**

   - SSE only supports UTF-8 text-based messages. Binary data must be encoded (e.g., Base64), which adds overhead.

5. **Connection Limits:**
   - Browsers limit the number of concurrent SSE connections to a single domain (typically 6).

## When to Use SSE

SSE is ideal for scenarios where:

1. **Unidirectional Communication is Sufficient:**

   - Applications that only need server-to-client updates, such as live notifications or dashboards.

2. **Low Complexity is Desired:**

   - When you need a lightweight and simple solution for real-time updates.

3. **Text-Based Data is Used:**

   - Applications where messages are text-based, such as JSON updates or notifications.

4. **Fallback Mechanisms are Acceptable:**
   - For older browsers or specific use cases, polyfills or alternative methods can be used.

## Use Cases for SSE

1. **Real-Time Notifications:**

   - Sending notifications for social media, email, or messaging applications.

2. **Live Dashboards:**

   - Streaming updates for monitoring tools, analytics dashboards, or financial data.

3. **News Feeds:**

   - Broadcasting live news updates or event streams.

4. **IoT Applications:**

   - Pushing updates from IoT devices to a client.

5. **Event Monitoring:**
   - Tracking changes in real-time, such as server logs or application performance metrics.

## SSE vs Long Polling

| **Feature**        | **SSE**                                                  | **Long Polling**                                            |
| ------------------ | -------------------------------------------------------- | ----------------------------------------------------------- |
| **Communication**  | Unidirectional (server-to-client).                       | Simulates bidirectional communication by repeated requests. |
| **Connection**     | Persistent connection for streaming updates.             | Repeated HTTP requests after each response or timeout.      |
| **Reconnection**   | Automatic reconnection handled by the `EventSource` API. | Client must handle reconnection logic manually.             |
| **Efficiency**     | More efficient for unidirectional real-time updates.     | Less efficient due to repeated connection establishment.    |
| **Message Format** | Uses a simple, text-based format (UTF-8).                | Uses HTTP responses, which can include any type of data.    |
| **Latency**        | Low latency (real-time updates).                         | Higher latency due to repeated requests.                    |
| **Complexity**     | Easy to implement with native browser support.           | Slightly more complex as reconnections need to be handled.  |
| **Scalability**    | Limited by the number of concurrent HTTP connections.    | Puts more strain on the server due to frequent requests.    |
| **Use Case**       | Suitable for real-time updates like notifications.       | Suitable for near real-time updates in moderate traffic.    |
