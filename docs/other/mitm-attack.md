---
sidebar_position: 2
---

# Man-in-the-Middle (MITM) Attack

A **Man-in-the-Middle (MITM)** attack is a type of cyberattack where a malicious actor intercepts and potentially alters communications between two parties without their knowledge. The attacker essentially "sits in the middle" of the communication channel, acting as a proxy to capture or manipulate data.

## How MITM Works

1. **Interception**: The attacker intercepts the communication between the two parties (e.g., client and server) by gaining access to the communication channel.
2. **Decryption (Optional)**: If the communication is encrypted, the attacker may attempt to decrypt it.
3. **Relaying/Manipulation**: The attacker relays the intercepted communication to the intended recipient, potentially altering the message content.

## Techniques Used in MITM Attacks

1. **Packet Sniffing**: Using tools to capture data packets traveling over a network.
2. **DNS Spoofing**: Redirecting requests for a legitimate website to a malicious site.
3. **SSL Stripping**: Downgrading HTTPS connections to HTTP.
4. **Wi-Fi Eavesdropping**: Exploiting unsecured public Wi-Fi networks.
5. **ARP Spoofing**: Associating the attacker's MAC address with the IP address of a legitimate user.

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Victim
        participant Attacker
        participant Server

        Victim->>Attacker: Request to Server
        Attacker->>Server: Relayed Request
        Server->>Attacker: Response
        Attacker->>Victim: Altered Response
    ```

</div>

## Impact of MITM Attacks

- **Data Theft**: Sensitive data, such as login credentials and financial information, can be stolen.
- **Identity Theft**: Personal information can be used for fraudulent purposes.
- **Service Disruption**: Attacks can disrupt normal communication and services.

## Defense Mechanisms

1. **Encryption**: Always use HTTPS and enforce SSL/TLS for secure communication.
2. **Certificate Pinning**: Ensure the client verifies the server’s certificate.
3. **Public Key Infrastructure (PKI)**: Use strong, trusted certificates.
4. **Secure Wi-Fi**: Avoid using unsecured public Wi-Fi or use VPNs for encrypted communication.
5. **Network Monitoring**: Employ intrusion detection systems to identify anomalies.

## Advanced Example: SSL Stripping

In this technique, the attacker downgrades a secure HTTPS connection to an HTTP connection. Below is a sequence of events:

<div style={{textAlign: 'center'}}>
    ```mermaid
    sequenceDiagram
        participant Client
        participant Attacker
        participant Website

        Client->>Attacker: HTTPS Request
        Attacker->>Website: HTTP Request
        Website->>Attacker: HTTP Response
        Attacker->>Client: Altered HTTP Response
    ```

</div>

In this scenario, the attacker removes the encryption provided by HTTPS, exposing sensitive information to potential misuse.
