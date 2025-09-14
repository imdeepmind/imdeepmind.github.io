---
sidebar_position: 7
---

# Services

Kubernetes Services provide a stable network identity (DNS name and IP) to a dynamic set of Pods. Because Pods are ephemeral and can be rescheduled with different IPs, Services decouple the client-facing address from Pod lifecycle and enable load-balancing, discovery, and access control.

This note explains the common Service types (ClusterIP, NodePort, LoadBalancer, ExternalName), how Services are implemented, useful examples, and troubleshooting tips.

## Service fundamentals

- A Service defines a logical set of Pods using a label selector and a policy to access them.
- Services provide a stable DNS name via CoreDNS and a virtual IP (ClusterIP) inside the cluster.
- Backends for a Service are represented by Endpoints or EndpointSlices.

Services are declarative Kubernetes objects that allow predictable communication patterns for microservices.

## ClusterIP (default)

ClusterIP exposes the Service on an internal cluster IP. It's the default Service type and is only reachable from within the cluster.

Use cases:

- Internal microservice-to-microservice communication
- Headless services (when you set clusterIP: None) to expose Pod IPs directly for StatefulSets, DNS SRV records, or custom service discovery

Example:

```yaml
apiVersion: v1
kind: Service
metadata:
name: backend
spec:
selector:
    app: backend
ports:
    - port: 8080
    targetPort: 8080
type: ClusterIP
```

Access pattern: Pods within the cluster can reach the service as `http://backend` (within same namespace) or `backend.<namespace>.svc.cluster.local`.

Headless Service example (exposes Pod IPs directly):

```yaml
apiVersion: v1
kind: Service
metadata:
name: db-headless
spec:
clusterIP: None
selector:
    app: db
ports:
    - port: 5432
    targetPort: 5432
```

Headless services are commonly used by StatefulSets so DNS returns Pod IPs instead of a single ClusterIP.

## NodePort

NodePort opens a specific port on every Node (in a configured range, typically 30000-32767) and forwards traffic to the Service’s ClusterIP and then to Pods. NodePort is a simple way to expose a Service externally without cloud LB.

How it works:

- The Service still has a ClusterIP. kube-proxy programs rules so traffic arriving at any node's \<NodeIP>:\<NodePort> is forwarded to the ClusterIP and then to backends.

Example:

```yaml
apiVersion: v1
kind: Service
metadata:
name: web-nodeport
spec:
type: NodePort
selector:
    app: web
ports:
    - port: 80
    targetPort: 8080
    nodePort: 31080
```

Notes and constraints:

- NodePort exposes each node; to reach the service from outside, use any node IP and the nodePort.
- NodePort can be used together with a cloud load balancer or external proxy.
- Beware of NodePort collisions when many services require external exposure.

## LoadBalancer

LoadBalancer requests an external load balancer from the cloud provider. The cloud provider provisions an L4 (or L7 in some managed offerings) load balancer and forwards traffic to node ports or directly to Pods depending on the integration.

Example:

```yaml
apiVersion: v1
kind: Service
metadata:
name: web-lb
spec:
type: LoadBalancer
selector:
    app: web
ports:
    - port: 80
    targetPort: 8080
```

Behavior:

- The cloud provider creates a Load Balancer and assigns an external IP.
- The Service object gets a `status.loadBalancer.ingress` entry with the external IP or hostname.
- On bare-metal clusters without a cloud provider, LoadBalancer has no effect unless a MetalLB or similar controller is installed.

## ExternalName

ExternalName maps a Service to an external DNS name by returning a CNAME record. It does not create endpoints or proxy traffic; DNS resolves the name outside the cluster.

Example:

```yaml
apiVersion: v1
kind: Service
metadata:
name: redis-external
spec:
type: ExternalName
externalName: redis.example.com
```

Use ExternalName when you want to refer to an external service using the same service discovery patterns as cluster services.

## Implementation details

- Endpoints / EndpointSlices: The Endpoints API (and newer EndpointSlices) lists backend Pod IPs and ports for a Service.
- kube-proxy: Implements the Service forwarding rules on each node using iptables, ipvs, or userspace (less common). It watches Services and Endpoints and programs the kernel networking accordingly.
- Virtual IP (ClusterIP): Not a real interface on nodes; traffic to ClusterIP is handled by kernel-level rules.

kube-proxy modes:

- iptables: Uses iptables rules. Suitable for small-medium clusters.
- ipvs: Uses IPVS for higher throughput and better load balancing.

Modern CNIs and datapaths (e.g., Cilium with eBPF) can implement services with more efficient, kernel-assisted methods.

## Session affinity

Services support sessionAffinity (by default `None`). When set to `ClientIP`, kube-proxy attempts to route requests from the same client IP to the same backend.

Example:

```yaml
spec:
sessionAffinity: ClientIP
```

Note: ClientIP affinity has limitations in NATed or proxying environments.

## Health checks and readiness

- Kubernetes relies on Pod readiness probes to determine whether a Pod should be included in a Service’s endpoints. Ensure applications expose proper readiness probes so Services don't send traffic to unhealthy Pods.

## Troubleshooting and useful commands

- List Services:

```sh
kubectl get svc
```

- Describe a Service:

```sh
kubectl describe svc <service-name>
```

- Check Endpoints / EndpointSlices:

```sh
kubectl get endpoints
kubectl get endpointslices
kubectl describe endpoints <service-name>
```

- Test from inside cluster (DNS resolution):

```sh
kubectl run -it --rm dns-test --image=busybox --restart=Never -- nslookup <service-name>
```

- Test external access via NodePort (replace \<node-ip>):

```sh
curl http://<node-ip>:<nodePort>
```

- Check kube-proxy mode and pods:

```sh
kubectl -n kube-system get pods -l k8s-app=kube-proxy
kubectl -n kube-system describe daemonset kube-proxy
```

- Troubleshoot LoadBalancer: inspect the Service `status.loadBalancer`, cloud provider console, and the events on the Service object.

## Edge cases and best practices

- Prefer ClusterIP for internal-only services.
- Use Ingress or cloud LoadBalancers for HTTP(S) routing and TLS termination rather than exposing multiple NodePorts.
- For bare-metal, use MetalLB to support LoadBalancer semantics.
- Avoid using HostNetwork unless necessary; it bypasses the Service abstraction.
- Use readiness probes to ensure only healthy Pods receive traffic.
