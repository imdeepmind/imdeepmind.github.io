---
sidebar_position: 13
---

# SSH

SSH (Secure Shell) is a cryptographic network protocol used to securely access remote systems over an unsecured network. It ensures **confidentiality**, **integrity**, and **authentication** for data communication between a client and a server. SSH is widely used for remote login, file transfers, and secure command execution.

## Key Features of SSH

1. **Encryption**: Ensures that the communication between the client and server is encrypted, preventing eavesdropping.
2. **Authentication**: Verifies the identity of the client and the server.
3. **Data Integrity**: Ensures that the data transmitted is not tampered with during transit.
4. **Port Forwarding**: Supports tunneling other protocols through SSH.
5. **File Transfer**: Provides secure file transfer mechanisms (e.g., SCP, SFTP).

## How SSH Works

### Key Components of SSH

- **Client**: The machine initiating the SSH connection.
- **Server**: The machine hosting the service and listening for incoming SSH connections.
- **Port**: SSH uses port **22** by default.
- **Authentication Keys**:
  - **Public Key**: Shared with the server for authentication.
  - **Private Key**: Kept secret by the client for decryption.

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as SSH Client
        participant Server as SSH Server

        Client->>Server: TCP Connection Request
        Server-->>Client: TCP Connection Established

        Client->>Server: SSH Protocol Version Exchange
        Server-->>Client: SSH Protocol Version Exchange

        Client->>Server: Key Exchange (e.g., Diffie-Hellman)
        Server-->>Client: Key Exchange (e.g., Diffie-Hellman)

        Server->>Client: Server Authentication (Server's Public Key)
        Client->>Server: Client Authentication (Password/Public Key)

        Client->>Server: Encrypted Session Established
        Server-->>Client: Encrypted Session Established
    ```

</div>

### Steps in SSH Communication

#### Step 1: Establishing the TCP Connection

- The client sends a request to the SSH server over TCP (default port 22).
- The server responds and establishes a connection.

#### Step 2: Negotiating Protocol Version

- The client and server exchange their SSH protocol versions.
- The server sends its supported cryptographic algorithms (e.g., encryption, hashing).

#### Step 3: Key Exchange

The **Diffie-Hellman Key Exchange (or similar algorithm)** is used to securely agree on a shared symmetric key for encryption.

1. The client and server exchange public parameters required for the Diffie-Hellman algorithm.
2. Both sides compute a shared secret key using their private parameters.
3. The resulting shared secret key is used for symmetric encryption.

<div class="mermaid-container">
    ```mermaid
    sequenceDiagram
        participant Client as Client
        participant Server as Server

        Client->>Server: Sends A = g^a mod p
        Server->>Client: Sends B = g^b mod p

        Client->>Client: Computes Shared Key = (B^a mod p)
        Server->>Server: Computes Shared Key = (A^b mod p)
    ```

</div>

Here:

- `p` is a prime number.
- `g` is a generator.
- `a` and `b` are private keys of the client and server, respectively.

#### Step 4: Server Authentication

- The server sends its public key to the client.
- The client verifies the server's identity by comparing the server's public key with its known hosts.

#### Step 5: Client Authentication

The client authenticates itself using one of the following methods:

- **Password-Based Authentication**: The client provides a username and password.
- **Public Key Authentication**: The client signs a challenge using its private key, and the server verifies it using the client's public key.

#### Step 6: Secure Communication

- Once authentication is successful, a secure, encrypted session is established.
- All further communication between the client and server is encrypted using the shared symmetric key.

### Types of Authentication in SSH

1. **Password Authentication**:
   - The user enters a password, which is sent securely over the encrypted session.
   - Simple but less secure than public key authentication.
2. **Public Key Authentication**:
   - The client and server exchange cryptographic keys for authentication.
   - More secure because it eliminates the need to send passwords over the network.

## Encryption and Security

- **Symmetric Encryption**: After the handshake, symmetric encryption (e.g., AES, ChaCha20) is used for faster communication.
- **HMAC (Hash-based Message Authentication Code)**: Ensures data integrity.

## Advantages of SSH

1. Strong encryption and authentication.
2. Protects against man-in-the-middle attacks.
3. Supports tunneling other protocols.

## Common SSH Tools

1. **OpenSSH**: Widely used SSH implementation.
2. **PuTTY**: A popular SSH client for Windows.
3. **WinSCP**: SSH-based file transfer tool.
