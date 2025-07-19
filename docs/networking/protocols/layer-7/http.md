---
sidebar_position: 1
---

# HTTP

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It is an application layer protocol used to request and transfer hypertext data between a client (usually a web browser) and a server (hosting the website or service). HTTP is stateless, meaning each request and response are independent, with no stored state between requests. It follows a client-server architecture, where the client sends requests, and the server responds with the appropriate resource or status message.

Over time, several versions of HTTP have been released, each improving upon its predecessor. These versions—HTTP/0.9, HTTP/1.0, HTTP/1.1, HTTP/2, and HTTP/3—represent the evolution of the protocol from a simple, single-request mechanism to a highly complex, optimized framework for modern web communication.

## Major HTTP Versions

### HTTP/0.9 (First Version)

**Release Year**: 1991

**Overview**:
HTTP/0.9 was the first version of the protocol, characterized by simplicity. It lacked many of the features we associate with HTTP today, such as headers, status codes, or complex metadata.

**How it works**:

- **Request**: The client sends a simple text-based request with no headers:
  ```
  GET /index.html
  ```
- **Response**: The server responds with the raw body (HTML text):
  ```
  <HTML>...</HTML>
  ```

There are no status codes or headers, meaning the client has no information about the success or failure of a request.

**Pros**:

- Extremely simple.
- Very lightweight.

**Cons**:

- Lack of metadata (no headers).
- No support for multiple resource types (e.g., JSON, images).
- Stateless and not efficient for complex applications.

**Use Case**:
Used for simple, early web pages that only needed basic HTML content retrieval.

### HTTP/1.0

**Release Year**: 1996

**Overview**:
HTTP/1.0 introduced more features like headers and status codes, allowing more flexibility and better communication between the client and the server. However, HTTP/1.0 still had several limitations, such as the need to establish a new connection for every request.

**How it works**:

1. **Request**:
   The client sends a request to the server that includes both a method (e.g., `GET`), a target resource (e.g., `/index.html`), and headers:

   ```
   GET /index.html HTTP/1.0
   Host: www.example.com
   User-Agent: Mozilla/5.0...
   ```

   - **Request Line**: This includes the HTTP method (`GET`), the requested resource path (`/index.html`), and the HTTP version (`HTTP/1.0`).
   - **Headers**: Provide metadata about the request (e.g., `Host`, `User-Agent`, etc.).

2. **Response**:
   The server responds with a status line, headers, and the requested body:

   ```
   HTTP/1.0 200 OK
   Content-Type: text/html
   Content-Length: 134
   <HTML>...</HTML>
   ```

   - **Status Line**: The response begins with a status code (`200 OK`), indicating success.
   - **Headers**: Provide metadata such as the type of content (`Content-Type: text/html`) and the length of the content.
   - **Body**: The actual HTML content.

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client
        participant Server as Server
        Client->>Server: GET /index.html HTTP/1.0\nHost: www.example.com\nUser-Agent: Mozilla/5.0...
        Server->>Client: HTTP/1.0 200 OK\nContent-Type: text/html\nContent-Length: 134\n<HTML>...</HTML>
    ```
</div>

**Pros**:

- Introduced headers, allowing for more flexible and structured communication.
- Introduced status codes, enabling error reporting and communication about the success or failure of requests.

**Cons**:

- **One request per connection**: Every request opens a new TCP connection, leading to inefficiency (especially on pages with many resources).

**Use Case**:
Early websites and services that served simple HTML files or text-based content.

### HTTP/1.1

**Release Year**: 1997

**Overview**:
HTTP/1.1 improved upon HTTP/1.0 by introducing several new features, such as persistent connections, chunked transfer encoding, and better cache control. It aimed to address the inefficiencies in HTTP/1.0.

**How it works**:

- **Persistent Connections**: HTTP/1.1 allows for multiple requests and responses to be sent over a single TCP connection, significantly reducing connection overhead.
- **Chunked Transfer Encoding**: The server can send data in chunks, allowing the client to start processing data before the entire response is available.
- **Request**:
  ```
  GET /index.html HTTP/1.1
  Host: www.example.com
  Connection: keep-alive
  User-Agent: Mozilla/5.0...
  ```
  The connection is kept open for subsequent requests.
- **Response**:
  ```
  HTTP/1.1 200 OK
  Content-Type: text/html
  Content-Length: 134
  Transfer-Encoding: chunked
  <HTML>...</HTML>
  ```

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client
        participant Server as Server
        Client->>Server: GET /index.html HTTP/1.1\nHost: www.example.com\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\nTransfer-Encoding: chunked\n<HTML>...</HTML>
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/css\nContent-Length: 450\nTransfer-Encoding: chunked\n<style>...</style>
    ```
</div>

**Pros**:

- Persistent connections improve efficiency by reducing connection overhead.
- Chunked transfer allows for streaming data to the client.

**Cons**:

- **Head-of-Line Blocking**: If one request is delayed, all other requests queued on the same connection are delayed as well.
- Still uses plain text and lacks built-in encryption.

**Use Case**:
Websites with multiple assets like images, JavaScript, and CSS files that benefit from persistent connections and chunked responses.

### HTTP/2

**Release Year**: 2015

**Overview**:
HTTP/2 introduced significant improvements in performance, including multiplexing, binary framing, and header compression. It reduced many of the inefficiencies found in HTTP/1.x.

**How it works**:

- **Multiplexing**: HTTP/2 can send multiple requests and responses in parallel over a single connection, without blocking one another. This eliminates head-of-line blocking.
- **Binary Framing**: HTTP/2 uses binary encoding rather than text-based encoding, allowing for more efficient processing.
- **Header Compression**: HTTP/2 uses the HPACK algorithm to compress headers, reducing the size of requests and responses.

**Request/Response Example (HTTP/2)**:

1. **Request**:

   ```
   :method: GET
   :path: /index.html
   :scheme: https
   :host: www.example.com
   user-agent: Mozilla/5.0...
   ```

2. **Response**:
   ```
   :status: 200
   content-type: text/html
   content-length: 134
   <HTML>...</HTML>
   ```

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client
        participant Server as Server
        Client->>Server: :method: GET\n:path: /index.html\n:host: www.example.com
        Server->>Client: :status: 200\ncontent-type: text/html\ncontent-length: 134\n<HTML>...</HTML>
    ```
</div>

**Pros**:

- Multiplexing eliminates head-of-line blocking and allows parallel requests.
- Binary format is more efficient than plain text.
- Header compression reduces overhead.

**Cons**:

- Requires HTTP/2-compatible servers and clients.
- Complex implementation compared to HTTP/1.x.

**Use Case**:
Modern web applications where speed and reduced latency are critical, such as media-heavy websites, progressive web apps, and complex web applications.

### HTTP/3

**Release Year**: 2022

**Overview**:
HTTP/3 builds on HTTP/2 but uses the QUIC transport protocol, which is based on UDP instead of TCP. This provides faster connection establishment, improved handling of packet loss, and lower latency.

**How it works**:

- **QUIC**: QUIC operates over UDP instead of TCP, reducing connection setup time (with zero-round-trip time or 0-RTT) and handling packet loss better.
- **Multiplexing and Stream Prioritization**: Like HTTP/2, HTTP/3 supports multiplexing and prioritization, but with enhanced features due to QUIC's UDP-based architecture.
- **Built-in Encryption**: HTTP/3 mandates TLS 1.3, ensuring that all communications are encrypted.

**Request/Response Example (HTTP/3)**:

1. **Request**:

   ```
   :method: GET
   :path: /index.html
   :scheme: https
   :host: www.example.com
   user-agent: Mozilla/5.0...
   ```

2. **Response**:
   ```
   :status: 200
   content-type: text/html
   content-length: 134
   <HTML>...</HTML>
   ```

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client
        participant Server as Server
        Client->>Server: :method: GET\n:path: /index.html\n:host: www.example.com
        Server->>Client: :status: 200\ncontent-type: text/html\ncontent-length: 134\n<HTML>...</HTML>
    ```
</div>

**Pros**:

- Faster connection establishment (0-RTT) and better handling of network congestion.
- Built-in security with TLS 1.3, ensuring encrypted communication by default.

**Cons**:

- Limited adoption and compatibility with older systems.
- UDP-based transport is less mature than TCP.

**Use Case**:
Applications requiring low latency and fast loading times, such as real-time services (gaming, video streaming), mobile users, and resource-intensive web applications.

### Summary of HTTP Versions

| Version  | Key Features                                     | Pros                                          | Cons                                         | Use Cases                                 |
| -------- | ------------------------------------------------ | --------------------------------------------- | -------------------------------------------- | ----------------------------------------- |
| HTTP/0.9 | Simple, no headers                               | Simple, lightweight                           | No metadata, no status codes                 | Early web pages, basic resource retrieval |
| HTTP/1.0 | Request/response headers, status codes           | Basic flexibility, extensible                 | No persistent connections, inefficient       | Early websites with occasional updates    |
| HTTP/1.1 | Persistent connections, chunking                 | Performance improvements, better caching      | Head-of-line blocking, no encryption         | Static and dynamic websites, common today |
| HTTP/2   | Multiplexing, binary framing, header compression | Faster, reduces overhead, no blocking         | Requires more complex implementation         | Modern web apps, media-heavy websites     |
| HTTP/3   | QUIC, built-in encryption                        | Fast, secure, better for mobile/poor networks | New, limited support, complex infrastructure | Real-time apps, low-latency requirements  |

## How HTTP works

HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext (usually HTML documents) over the web. It works on a **request-response model** where the client sends a request to the server, and the server responds with data, typically in the form of a webpage or other resources.

### The Client Sends an HTTP Request

When you visit a website, the web browser (client) sends an HTTP request to the web server. This request contains various pieces of information, such as the method (GET, POST, etc.), the requested resource (like `/index.html`), headers (additional metadata like the user agent or cookies), and possibly a body (e.g., when sending data to the server).

The structure of an HTTP request looks like this:

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

- **Request Line**: Contains the HTTP method (`GET`), the resource path (`/index.html`), and the HTTP version (`HTTP/1.1`).
- **Headers**: Metadata such as `Host`, `User-Agent`, and `Accept`.
- **Body**: Optional part, used in POST or PUT requests to send data to the server.

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client (Browser)
        participant Server as Server (Web Server)

        Client->>Server: GET /index.html HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html
    ```

</div>

In this diagram, the **client** sends an HTTP request for the resource `/index.html` to the **server**.

### Server Processes the HTTP Request

When the server receives the HTTP request, it processes the request, typically doing the following:

- **Parse the request** to understand the HTTP method, headers, and requested resource.
- **Search for the resource** (e.g., HTML file, image, etc.).
- **Generate a response** based on the requested resource.
  - If the resource is available, the server prepares a **200 OK** response.
  - If the resource is not found, the server returns a **404 Not Found** response.
  - If there’s a server error, it may return a **500 Internal Server Error**.

### The Server Sends an HTTP Response

Once the server has processed the request, it sends an HTTP response back to the client. The response consists of:

- **Status Line**: Contains the HTTP version, a status code (e.g., 200), and a status message (e.g., OK).
- **Headers**: Metadata about the response (e.g., `Content-Type`, `Content-Length`).
- **Body**: The actual data, like the HTML content, an image, or a file.

Example of an HTTP Response:

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 134

<HTML>...</HTML>
```

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client (Browser)
        participant Server as Server (Web Server)

        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\n<HTML>...</HTML>
    ```

</div>

In this diagram, the **server** responds with a **200 OK** status code and sends the HTML content of the requested resource.

### Browser Renders the Response

After receiving the HTTP response, the **client** (browser) processes the data:

- The **HTML** is parsed and rendered to display the webpage.
- If the page includes external resources like images, CSS, or JavaScript, the browser sends additional HTTP requests to fetch those resources.

For example:

- The browser requests `style.css` and `script.js` files.
- Each of these requests results in another **HTTP request-response cycle**.

### Complete HTTP Request-Response Cycle Diagram

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client (Browser)
        participant Server as Server (Web Server)

        Client->>Server: GET /index.html HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\n<HTML>...</HTML>
        Client->>Server: GET /style.css HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/css
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/css\nContent-Length: 245\nbody { ... }
        Client->>Server: GET /script.js HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: application/javascript
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: application/javascript\nContent-Length: 500\nconsole.log('...')
    ```

</div>

In this diagram:

- **Client** (browser) initially sends a request for `index.html`.
- **Server** responds with the HTML content.
- The browser requests additional resources (`style.css` and `script.js`), and the server responds with those as well.

### Closing the Connection

Once the browser has received all the resources and rendered the webpage, the connection can be closed, or it can remain open for further requests if **HTTP/1.1**'s **persistent connections** are used. HTTP/2 and HTTP/3 improve this process even further by allowing multiple requests to share a single connection.

### Final HTTP/1.1 Request-Response with Persistent Connection

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client (Browser)
        participant Server as Server (Web Server)

        Client->>Server: GET /index.html HTTP/1.1\nHost: www.example.com\nConnection: keep-alive
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 134\n<HTML>...</HTML>
        Client->>Server: GET /style.css HTTP/1.1\nHost: www.example.com\nConnection: keep-alive
        Server->>Client: HTTP/1.1 200 OK\nContent-Type: text/css\nContent-Length: 245\nbody { ... }
    ```

</div>
