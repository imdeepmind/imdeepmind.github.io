---
sidebar_position: 6
---

# Proxies

A **proxy** is an intermediary server that sits between a client and a server to facilitate communication, enforce security, or enhance performance. Depending on its position and purpose, a proxy can be categorized as:

1. **Forward Proxy**
2. **Reverse Proxy**

## Forward Proxy

A forward proxy acts on behalf of the client. It is placed between the client and the internet. When the client makes a request, it goes through the forward proxy, which then forwards the request to the destination server.

### Use Cases of Forward Proxy

1. **Anonymity**: Clients use forward proxies to hide their IP addresses.
2. **Access Control**: Organizations use forward proxies to restrict access to specific websites.
3. **Caching**: Forward proxies can cache responses to reduce latency and save bandwidth.
4. **Content Filtering**: Schools or workplaces use forward proxies to block certain types of content.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client
        participant ForwardProxy
        participant Server

        Client->>ForwardProxy: Request (e.g., HTTP GET)
        ForwardProxy->>Server: Request on behalf of Client
        Server->>ForwardProxy: Response
        ForwardProxy->>Client: Response
    ```

</div>

## Reverse Proxy

A reverse proxy acts on behalf of the server. It is placed between the client and the server, and it intercepts client requests before they reach the actual server. The client may not even be aware of the reverse proxy's presence.

### Use Cases of Reverse Proxy

1. **Load Balancing**: Distributes incoming requests across multiple servers.
2. **SSL Termination**: Handles SSL encryption and decryption, offloading this task from the servers.
3. **Caching**: Caches responses to improve performance and reduce the load on backend servers.
4. **Security**: Masks the identity of backend servers to protect them from direct attacks.
5. **Compression**: Compresses responses before sending them to the client.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client
        participant ReverseProxy
        participant Server

        Client->>ReverseProxy: Request (e.g., HTTP GET)
        ReverseProxy->>Server: Request on behalf of Client
        Server->>ReverseProxy: Response
        ReverseProxy->>Client: Response
    ```

</div>

## Comparison Between Forward and Reverse Proxy

| Feature           | Forward Proxy                       | Reverse Proxy                         |
| ----------------- | ----------------------------------- | ------------------------------------- |
| Acts on behalf of | Client                              | Server                                |
| Primary purpose   | Client anonymity, content filtering | Load balancing, security, performance |
| Typical user      | Individuals, organizations          | Websites, services                    |
| Placement         | Between client and server           | Between client and backend servers    |

## Detailed Example

### Forward Proxy Example

- A corporate network uses a forward proxy to block access to social media sites for its employees. When an employee tries to visit `facebook.com`, the request is intercepted by the proxy, which denies the request.

### Reverse Proxy Example

- A website uses a reverse proxy to distribute traffic across multiple application servers. The client sends a request to `www.example.com`, and the reverse proxy forwards the request to one of the backend servers (`app1.example.com`, `app2.example.com`, etc.).
