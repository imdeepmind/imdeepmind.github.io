---
sidebar_position: 6
---

# Networking

Kubernetes networking is a broad topic that covers how Pods, Services, and external clients communicate within and outside a cluster. Kubernetes intentionally leaves many implementation details to network plugins (CNI) and cloud providers, while defining a small set of strong primitives and expectations that make the model consistent across environments.

This note covers core concepts, common service types, the role of kube-proxy and CNI, DNS and service discovery, NetworkPolicies, Ingress, service meshes, and practical troubleshooting commands.

## Core network model

Kubernetes networking defines a few simple yet powerful expectations:

- Every Pod gets its own IP address. Containers inside the Pod share the network namespace and can communicate over localhost.
- Pods can communicate with other Pods using their IP addresses without NAT.
- Agents on a node (like kube-proxy) can implement Services without exposing nodes unnecessarily.

Because Pods are ephemeral, higher-level abstractions (Services, Endpoints) provide stable identities.

## Pod networking and CNI

Container Network Interface (CNI) is the plugin model Kubernetes uses for networking. A CNI plugin is responsible for allocating IPs to Pods, programming routes, and handling connectivity between nodes.

Popular CNI implementations:

- Calico — Network policies + routing, BGP support
- Flannel — Simple overlay network (VXLAN)
- Weave Net — Mesh networking with encryption options
- Cilium — eBPF-based networking and observability
- Canal — Calico + Flannel combination

How a CNI integrates:

1. When the kubelet creates a Pod, it calls the configured CNI to allocate an IP and set up interfaces.
2. The CNI configures the node networking (veth pairs, routes, VXLAN tunnels, BPF programs, etc.).
3. The clusterwide routing allows Pod-to-Pod communication across nodes.

## Services and Service Types

Services provide a stable DNS name and virtual IP (ClusterIP) to reach a set of Pods (Endpoints). The main service types are:

- ClusterIP (default): Exposes the Service on a cluster-internal IP. Only reachable from within the cluster.
- NodePort: Exposes the Service on the same port on each Node’s IP. Good for simple external access or testing.
- LoadBalancer: Requests a cloud provider load balancer and exposes the Service externally.
- ExternalName: Maps a Service to an external DNS name.

Example Service (ClusterIP):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: ClusterIP
```

Explanation: This Service selects Pods with label `app: web` and forwards traffic from port 80 on the ClusterIP to port 8080 on the Pods.

## How Services are implemented (kube-proxy)

kube-proxy implements Services on nodes. There are two main modes historically:

- iptables mode: kube-proxy programs iptables rules to DNAT traffic from the Service IP to backend Pod IPs.
- ipvs mode: kube-proxy programs the Linux IPVS kernel subsystem for higher performance and better load balancing.

Newer CNI and kernel-based solutions (like eBPF with Cilium) can bypass kube-proxy for more efficient datapaths.

## DNS and Service Discovery

Kubernetes runs a DNS server (CoreDNS by default) that watches Services and creates DNS records for them. Service discovery patterns:

- Service name resolution: `http://my-service` (in the same namespace) or `http://my-service.my-namespace`.
- Fully qualified domain name (FQDN): `my-service.my-namespace.svc.cluster.local`.

Example: a Pod can curl another service by name:

```sh
kubectl exec -it pod-a -- curl -sS http://web-service
```

## Endpoints vs EndpointSlices

- Endpoints: older API that lists IPs/ports for a Service.
- EndpointSlices: scalable replacement that shards endpoint information across multiple objects.

Kubernetes controllers keep EndpointSlices up to date as Pods scale and move.

## Ingress and Ingress Controller

Ingress defines HTTP(S) routing rules from outside the cluster to Services inside the cluster. Ingress is only a routing spec — a separate Ingress Controller implements it (NGINX Ingress Controller, Traefik, HAProxy, cloud-managed controllers).

Example Ingress:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
spec:
  rules:
    - host: example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-service
                port:
                  number: 80
```

Note: For TLS, add a `tls` section and a Secret with TLS certs.

## NetworkPolicy: controlling traffic

NetworkPolicy is a Kubernetes resource for allowing or denying traffic to Pods. By default, most clusters allow all traffic (depending on CNI behavior). Once any NetworkPolicy selects a Pod, that Pod becomes isolated and only the allowed traffic is permitted.

Example: allow only traffic from the same namespace and a specific port

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-same-namespace
  namespace: default
spec:
  podSelector: {}
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector: {}
      ports:
        - protocol: TCP
          port: 80
```

Important notes:

- NetworkPolicies are implemented by the CNI plugin; not all CNIs support them equally.
- NetworkPolicies can be used to implement zero-trust or micro-segmentation inside the cluster.

## Services vs Ingress vs External access

- Use Services (ClusterIP/NodePort/LoadBalancer) to expose applications. ClusterIP for internal traffic, LoadBalancer/NodePort for external.
- Use Ingress for rich HTTP routing (virtual hosts, TLS termination, path-based routing). Ingress sits in front of Services.

## Service Meshes

Service meshes (Istio, Linkerd, Consul Connect) provide finer-grained control over traffic (mTLS, retries, circuit breaking, observability). They typically inject sidecar proxies into Pods and introduce control planes to manage traffic policies.

When to use a service mesh:

- You need mutual TLS between services.
- You want traffic observability (tracing, metrics) without changing application code.
- You need advanced routing (canary releases, traffic shifting).

Trade-offs: increased complexity, resource overhead, and operational surface area.

## Multicluster and ExternalName

- `ExternalName` Services map a Service to an external DNS name and are useful to reference external services without handling IPs.
- Multicluster networking is an advanced topic — solutions include service meshes with multi-cluster support, DNS federation, or VPN-based networking between clusters.

## Troubleshooting and useful kubectl commands

- List Services:

```sh
kubectl get svc
```

- Describe a Service:

```sh
kubectl describe svc web-service
```

- List Endpoints / EndpointSlices:

```sh
kubectl get endpoints
kubectl get endpointslices
```

- Check DNS resolution inside a Pod:

```sh
kubectl run -it --rm dns-test --image=busybox --restart=Never -- nslookup web-service
```

- Test connectivity between Pods (exec into a debug pod):

```sh
kubectl run -it --rm -n default debug --image=nicolaka/netshoot --restart=Never -- bash
# inside container: curl web-service:80
```

- View kube-proxy mode and pods:

```sh
kubectl -n kube-system get pods -l k8s-app=kube-proxy
kubectl -n kube-system describe daemonset kube-proxy
```

- Check NetworkPolicy effects (deny/allow):

Create a policy and test connectivity from allowed and denied Pods.

## Edge cases and gotchas

- Pod IP address ranges must not overlap with node network or cloud provider routes.
- Some CNIs use overlays which can affect MTU; tune MTU to avoid fragmented packets.
- HostPort and HostNetwork bypass the CNI and can cause port conflicts on nodes.
- IPv6 and dual-stack clusters require additional CNI and cloud-provider support.

## Quick reference

- Pod networking: CNI plugins allocate Pod IPs and program node-level networking.
- Services: ClusterIP, NodePort, LoadBalancer, ExternalName.
- Ingress: HTTP routing; requires an Ingress Controller to function.
- NetworkPolicy: API to define allowed traffic to Pods; enforced by CNI.
- kube-proxy: implements Service routing using iptables/ipvs or newer datapaths.
