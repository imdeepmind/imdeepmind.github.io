---
sidebar_position: 6
---

# FTP

**File Transfer Protocol (FTP)** is a standard network protocol used to transfer files between a client and a server over a TCP/IP-based network, like the internet or an intranet. It operates on the client-server model, where the client initiates a connection to the server and requests files to be uploaded or downloaded.

## Key Features of FTP

1. **Client-Server Architecture**: FTP uses a client-server model where the client sends requests for file transfers, and the server handles these requests.
2. **Active and Passive Modes**: FTP supports two modes for establishing the connection between the client and the server:
   - **Active Mode**: The server opens a port and listens for incoming connections from the client. The client communicates with the server to initiate the data transfer.
   - **Passive Mode**: The client establishes both the control and data connections. This mode is often used when the client is behind a firewall or NAT (Network Address Translation).
3. **Data Transfer Types**: FTP supports different data transfer types:
   - **ASCII Mode**: Transfers text files, where line endings are converted to match the operating system conventions.
   - **Binary Mode**: Transfers binary files such as images or executables, where no conversion occurs, and the exact byte sequence is transferred.
4. **Port Numbers**:
   - FTP typically uses **port 21** for control commands (e.g., login, file operations).
   - Data transfer occurs on a dynamic port range, with the default being port 20 for active mode.

## FTP Command Structure

- **USER**: Specifies the username.
- **PASS**: Specifies the password.
- **LIST**: Lists the files in the current directory.
- **GET/RETR**: Downloads a file from the server.
- **PUT/STOR**: Uploads a file to the server.
- **QUIT**: Ends the FTP session.

## Workflow of FTP

1. **Connection Establishment**:

   - The client initiates a connection to the FTP server on port 21 (control connection).
   - The client sends authentication credentials (username and password) over this control connection.

2. **Command Communication**:

   - After authentication, the client sends commands (e.g., `LIST`, `RETR`, `STOR`) over the control connection to interact with the server.

3. **Data Transfer**:

   - When a file transfer command is issued, a separate **data connection** is established between the client and the server.
   - FTP can operate in two modes for data transfer:
     - **Active Mode**: The server initiates the data connection to the client.
     - **Passive Mode**: The client initiates the data connection to the server, often used when the client is behind a firewall.

4. **File Operations**:

   - Files are uploaded, downloaded, or listed based on the client’s commands.
   - Data is transmitted over the data connection in either ASCII or binary mode.

5. **Termination**:
   - The control and data connections are closed when the session ends.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client
        participant Server

        Client->>Server: Connect to port 21 (Control Connection)
        Server-->>Client: Request for Authentication
        Client->>Server: Send Username and Password
        Server-->>Client: Authentication Successful

        Client->>Server: LIST (Request File Listing)
        Server-->>Client: File List via Control Connection

        Client->>Server: STOR (Upload File) or RETR (Download File)
        Note right of Server: Establish Data Connection
        alt Active Mode
            Server->>Client: Connect to Client's Random Port
        else Passive Mode
            Client->>Server: Connect to Server's Random Port
        end
        Server-->>Client: Data Transfer (File Upload/Download)

        Client->>Server: QUIT (Close Connection)
        Server-->>Client: Connection Closed
    ```

</div>

### Key Components in the Diagram

1. **Control Connection**:

   - Persistent connection on port 21.
   - Used for sending commands and receiving responses.

2. **Data Connection**:

   - Temporary connection for transferring file data.
   - Uses port 20 (active mode) or a random port (passive mode).

3. **Commands**:
   - `USER` and `PASS` for authentication.
   - `LIST`, `RETR`, and `STOR` for file operations.
   - `QUIT` to terminate the session.

## Limitations

- **Lack of Encryption**: FTP does not encrypt its traffic, meaning credentials and data can be intercepted during transmission.
- **Security Risks**: As it transmits data, including usernames and passwords, in plaintext, FTP is vulnerable to attacks like eavesdropping and man-in-the-middle attacks.

## SFTP (Secure File Transfer Protocol)

**Secure File Transfer Protocol (SFTP)** is a secure version of FTP, often confused with **SSH File Transfer Protocol**, but it is based on the SSH (Secure Shell) protocol. SFTP adds encryption and security mechanisms to the traditional FTP to ensure the confidentiality, integrity, and authenticity of the transferred files.

### Key Features of SFTP

1. **Encryption**: SFTP encrypts both the command and data channels using SSH. This ensures that all sensitive information, such as login credentials and file contents, is transmitted securely.
2. **Authentication**: SFTP supports various forms of authentication, including:
   - **Password-based Authentication**: The user provides a password to authenticate.
   - **Key-based Authentication**: The user can authenticate using cryptographic key pairs, where the server holds the public key, and the client uses the corresponding private key.
3. **Single Connection**: Unlike FTP, which uses separate connections for commands and data transfer, SFTP uses a single encrypted connection for both.
4. **Port Number**: SFTP typically uses **port 22**, the same port as SSH. This simplifies firewall configuration and ensures encrypted communication.
5. **File Operations**: SFTP supports various file operations, including:
   - **get**: Download files from the server.
   - **put**: Upload files to the server.
   - **ls**: List files in a directory.
   - **mkdir**: Create directories.
   - **rm**: Remove files.

### SFTP vs FTP

- **Security**: The main difference is that SFTP is inherently secure due to the use of SSH encryption, unlike FTP, which transmits data in plaintext.
- **Connection Model**: FTP requires two connections (control and data), whereas SFTP uses a single connection, making it easier to configure through firewalls.
- **Port Usage**: FTP commonly uses ports 20 and 21, while SFTP operates on port 22 (SSH).
- **Efficiency**: SFTP is more efficient for transferring large files over unsecured networks, as it encrypts all data, providing protection against data interception.

## Use Cases

- **FTP**: It is used for simple file transfers, like transferring public files to a web server or accessing an FTP server to download software updates. However, due to its lack of security, FTP should not be used to transfer sensitive or confidential data over the internet.
- **SFTP**: It is widely used for secure file transfers, such as transferring financial data, sensitive documents, or any other type of confidential information. SFTP is often used by businesses and organizations that require secure, encrypted communication over the internet.
