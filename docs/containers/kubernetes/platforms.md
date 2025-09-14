---
sidebar_position: 3
---

# Kubernetes Platforms

<!-- markdownlint-disable MD024 -->

Kubernetes can be set up in multiple ways depending on the goal, whether it is for learning, experimenting, local development, testing, or running production workloads. Each approach has its own strengths and limitations, and understanding them helps us pick the right tool for the situation.

## Docker Desktop with Kubernetes enabled

Docker Desktop is one of the easiest ways to experiment with Kubernetes locally. It is primarily a desktop application that bundles Docker Engine, Docker CLI, Docker Compose, and Kubernetes into a single package. Kubernetes can be enabled directly from the Docker Desktop settings. Once enabled, a single-node Kubernetes cluster runs locally, tightly integrated with Docker.

This approach is very developer-friendly because it reduces the friction of setting up a Kubernetes environment. Developers who are already familiar with Docker containers can immediately run Kubernetes workloads without learning complex cluster setup steps. The integration allows us to build, test, and deploy applications using the same workflow as regular Docker development.

### Pros

- Extremely simple to set up, requiring only enabling a checkbox in Docker Desktop
- Provides a single environment where containers and Kubernetes workloads can coexist
- Integrated with Docker tools like Docker CLI and Docker Compose
- Works seamlessly across macOS, Windows, and Linux
- Good for quickly validating workloads and testing deployments locally

### Cons

- Runs only as a single-node cluster, so it cannot mimic multi-node production setups
- Very resource intensive, especially on macOS and Windows where Kubernetes runs inside a virtual machine
- Limited in terms of simulating production networking, scaling, and cluster-level behavior
- May not support advanced Kubernetes features in the same way as production-grade clusters

### Use cases

- Local learning and experimentation with Kubernetes basics
- Developers who want to test workloads quickly without provisioning external clusters
- Teams building containerized applications who want to validate deployments before pushing to shared clusters

## Minikube

Minikube is a popular tool that creates a lightweight Kubernetes cluster locally. Unlike Docker Desktop, Minikube is specifically designed for Kubernetes experimentation and learning. It can run a single-node cluster inside a virtual machine or container on a local machine using drivers such as VirtualBox, Docker, or KVM. Minikube provides more flexibility than Docker Desktop because it exposes a broader range of Kubernetes features and allows customization of the cluster setup.

Minikube also supports multiple Kubernetes versions, add-ons (such as Ingress controllers, metrics server, or dashboard), and even multi-node configurations for testing scenarios that need to mimic real production topologies. It provides a CLI tool (`minikube`) that makes managing the cluster very straightforward, such as starting, stopping, deleting, or enabling features.

### Pros

- Lightweight, fast to set up, and widely used for learning and local development
- Provides support for many Kubernetes features, including networking and storage add-ons
- Flexible in terms of drivers (Docker, VirtualBox, KVM, etc.) and cluster versions
- Can run multiple profiles (separate clusters) on the same machine
- Supports multi-node mode for testing distributed scenarios

### Cons

- Still primarily for local development, not intended for production
- Performance can be slower depending on the driver (especially VM-based ones)
- Limited ability to replicate the scale and complexity of large production systems
- Managing multiple nodes locally can consume significant system resources

### Use cases

- Learning Kubernetes concepts and commands in a sandbox environment
- Local testing of applications that require more Kubernetes features than Docker Desktop provides
- Simulating multi-node setups for educational or testing purposes
- Running integration tests for containerized workloads before moving to staging or cloud environments

## Kubeadm

Kubeadm is a tool that helps bootstrap Kubernetes clusters on virtual machines or physical servers. Unlike Docker Desktop or Minikube, which abstract away the complexity of cluster setup, kubeadm exposes the underlying mechanics of setting up the control plane and worker nodes. It does not provision infrastructure but provides the commands and steps to configure a fully functional cluster once the machines are ready.

This approach is closer to production because it mirrors how clusters are managed in real-world environments. With kubeadm, we can control cluster configuration, networking, and component versions in a more granular way. However, it requires us to manage the lifecycle of nodes, networking, and upgrades manually.

### Pros

- Provides fine-grained control over how the cluster is set up
- Suitable for both learning and running production if managed properly
- Flexible and works across cloud providers, VMs, or bare-metal servers
- A good way to understand Kubernetes internals and administration

### Cons

- Requires more operational knowledge than managed services or local tools
- Networking and node lifecycle must be handled manually
- Upgrades, patches, and scaling require dedicated effort
- Not ideal for beginners or developers who only need lightweight clusters

### Use cases

- On-premises Kubernetes clusters
- Learning cluster administration at a deeper level
- Testing custom networking or runtime configurations
- Production clusters where organizations prefer not to rely on cloud-managed services

## Amazon Elastic Kubernetes Service (EKS)

EKS is a managed Kubernetes service provided by AWS. AWS manages the control plane, ensuring high availability, scalability, and automatic upgrades, while we are responsible for managing worker nodes (either on EC2 or using AWS Fargate).

EKS integrates deeply with AWS services such as IAM for authentication, CloudWatch for monitoring, and Elastic Load Balancers for ingress. This makes it a strong choice for teams already invested in AWS infrastructure.

### Pros

- Fully managed and highly available control plane
- Tight integration with AWS services for security, monitoring, and networking
- Scalable to large workloads with minimal manual intervention
- Provides options for running nodes on EC2 or serverless with Fargate

### Cons

- Can become costly, especially with large-scale workloads
- Networking and IAM configuration can be complex
- Vendor lock-in with AWS ecosystem
- Worker node management is still partly our responsibility unless using Fargate

### Use cases

- Large-scale production workloads on AWS
- Teams requiring strong integration with AWS infrastructure
- Applications needing compliance, reliability, and enterprise-level support

## Azure Kubernetes Service (AKS)

AKS is Microsoft Azure’s managed Kubernetes service. Like EKS, Azure manages the control plane, while worker nodes are deployed using Azure VMs or VM Scale Sets.

AKS is tightly integrated with Azure services such as Active Directory for identity management, Azure Monitor for observability, and Azure Load Balancer for traffic handling. It also has the advantage of a free control plane, which reduces costs compared to some alternatives.

### Pros

- Fully managed control plane with automated upgrades and patches
- Free control plane, only pay for worker nodes
- Easy integration with Azure’s identity and monitoring services
- Autoscaling capabilities for both nodes and pods

### Cons

- Vendor lock-in within the Azure ecosystem
- Some advanced Kubernetes features may take time to appear compared to upstream releases
- Cluster management flexibility is limited compared to kubeadm setups

### Use cases

- Production workloads for organizations using Azure
- Enterprises needing integration with Microsoft services and tools
- Teams seeking cost efficiency in managed clusters

## Google Kubernetes Engine (GKE)

GKE is Google Cloud’s managed Kubernetes platform and one of the most mature offerings, given Google’s role in creating Kubernetes. It offers a highly reliable control plane, early access to new Kubernetes features, and options for both standard clusters and autopilot clusters where nodes are fully managed by Google.

GKE integrates well with Google’s ecosystem, including Stackdriver for logging, Cloud Load Balancing, and advanced networking features.

### Pros

- Mature and feature-rich managed platform
- Early access to Kubernetes features from upstream development
- Options for standard mode (more control) or autopilot mode (fully managed)
- Highly reliable, scalable, and optimized for Google Cloud infrastructure

### Cons

- Costs can be high compared to self-managed or smaller setups
- Vendor lock-in within Google Cloud
- Multi-cloud or hybrid use cases require additional complexity

### Use cases

- Production workloads requiring advanced Kubernetes features
- Organizations adopting a Kubernetes-first strategy
- Teams leveraging Google’s AI/ML or networking ecosystem
