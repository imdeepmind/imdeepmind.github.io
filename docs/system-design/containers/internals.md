---
sidebar_position: 2
---

# Docker Internals

Docker is a tool designed to make it easier to create, deploy, and run applications using containers. The internal working of Docker involves several components, each playing a specific role in the containerization process. Below, I will explain the key components and how they interact within Docker using diagrams in **Mermaid**.

## Docker Architecture Overview

The core components of Docker are:

- **Docker Client**: The interface used by users to interact with Docker (CLI or API).
- **Docker Daemon**: The background service that manages Docker containers, images, networks, etc.
- **Docker Images**: Pre-configured templates to create containers.
- **Docker Containers**: Running instances of Docker images.
- **Docker Registry**: A storage for Docker images, often Docker Hub.

Here’s a high-level architecture diagram:

```mermaid
graph LR
    A[Docker Client] -->|Command Line/API| B[Docker Daemon]
    B -->|Pull/Push Images| C[Docker Registry]
    B --> D[Containers]
    D --> E[Running Application]
    B --> F[Images]
    D -->|Runs from| F
```

## Docker Client and Daemon Interaction

The **Docker Client** sends commands to the **Docker Daemon** (server-side), which then executes those commands. For example, when you run `docker run`, the Docker Client sends this command to the Docker Daemon, which decides what to do based on the request (e.g., pull an image, create a container, etc.).

```mermaid
sequenceDiagram
    participant Client as Docker Client
    participant Daemon as Docker Daemon
    Client->>Daemon: docker run <image>
    Daemon->>Daemon: Check if image exists
    Daemon->>Client: Return running container ID
    Daemon->>Daemon: Start container with image
    Daemon->>Container: Execute application inside container
```

## Docker Images and Containers

A **Docker Image** is a lightweight, portable, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and environment variables. A **Container** is a running instance of a Docker Image.

The process of creating a container from an image looks like this:

```mermaid
sequenceDiagram
    participant Daemon as Docker Daemon
    participant Image as Docker Image
    participant Container as Docker Container
    Daemon->>Image: Fetch Image from Registry
    Image->>Daemon: Return Image Layers
    Daemon->>Container: Create Container from Image
    Container->>Daemon: Start Running
    Daemon->>Container: Execute Command
```

## Docker Container Internals

Internally, each **Docker container** is isolated using Linux kernel features such as:

- **Namespaces**: Provide isolation for resources (PID, Mount, Network, etc.).
- **Cgroups**: Control resource allocation (CPU, Memory, IO).
- **Union File System (UFS)**: Combines multiple layers of Docker images into a single filesystem.

Here’s a diagram showing the isolation:

```mermaid
graph LR
    A[Host OS] -->|Namespaces| B[Container 1]
    A[Host OS] -->|Namespaces| C[Container 2]
    B -->|Cgroups| D[Container 1 Resources]
    C -->|Cgroups| E[Container 2 Resources]
    A[Host OS] -->|Union FS| F[Shared Filesystem Layers]
```

## Docker Registry

Docker images are stored in a **Docker Registry** (like Docker Hub). The registry holds different versions of images, which can be pulled to create containers. This allows developers to manage and share images easily.

```mermaid
graph LR
    A[Docker Daemon] -->|Push| B[Docker Registry]
    A[Docker Daemon] -->|Pull| B[Docker Registry]
    B[Docker Registry] --> C[Docker Images]
    C -->|Store| D[Image Layers]
```

## Docker Network

Docker uses its own network driver to manage container communication. Containers can be connected to different networks (bridge, host, overlay). Here's a simple diagram showing containers in a Docker network:

```mermaid
graph LR
    A[Docker Host] -->|Bridge Network| B[Container 1]
    A[Docker Host] -->|Bridge Network| C[Container 2]
    B -->|Can communicate| C
```
