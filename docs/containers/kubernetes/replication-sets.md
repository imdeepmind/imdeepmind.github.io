---
sidebar_position: 5
---

# ReplicationController and ReplicaSet

## ReplicationController (RC)

<!-- markdownlint-disable MD024 -->

A **ReplicationController (RC)** is a legacy Kubernetes resource that ensures a specified number of Pod replicas are running at any given time. If a Pod fails or is deleted, the RC automatically creates a replacement.

### Key Features

- Ensures **high availability** of Pods.
- Supports **scaling** Pods up or down.
- Performs **self-healing** of failed Pods.
- Works only with **equality-based selectors** (e.g., `app=nginx`).

> **Note:** ReplicaSet has largely replaced ReplicationController, but RC is still supported for backward compatibility.

### Example: ReplicationController YAML

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: nginx-rc
spec:
  replicas: 3
  selector:
    app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

## ReplicaSet (RS)

A **ReplicaSet (RS)** is the next-generation controller that replaces ReplicationController. It provides the same functionality but supports **set-based selectors**, making it more flexible.

### Key Features

- Ensures **desired number of Pods** are running.
- Supports both **equality-based** and **set-based selectors** (e.g., `app in (frontend, backend)`).
- Typically **used by Deployments**, rather than being created directly.

### Example: ReplicaSet YAML

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  replicas: 3
  selector:
    matchExpressions:
      - key: app
        operator: In
        values:
          - nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

## kubectl Commands for RC and RS

### Create

```bash
kubectl apply -f nginx-rc.yaml
kubectl apply -f nginx-rs.yaml
```

### Get

```bash
kubectl get rc
kubectl get rs
kubectl get pods
```

### Describe

```bash
kubectl describe rc nginx-rc
kubectl describe rs nginx-rs
```

### Scale

```bash
# Scale ReplicationController
kubectl scale rc nginx-rc --replicas=5

# Scale ReplicaSet
kubectl scale rs nginx-rs --replicas=5
```

### Update

```bash
kubectl edit rc nginx-rc
kubectl edit rs nginx-rs
```

### Delete

```bash
kubectl delete rc nginx-rc
kubectl delete rs nginx-rs
```

### Debugging Pods under RC/RS

```bash
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- /bin/sh
```

## Difference Between RC and RS

| Feature       | ReplicationController | ReplicaSet                       |
| ------------- | --------------------- | -------------------------------- |
| Status        | Legacy                | Modern, preferred                |
| Selector Type | Equality-based only   | Equality + Set-based             |
| Usage         | Rarely used today     | Typically managed by Deployments |
| Scalability   | Supported             | Supported                        |
| Self-Healing  | Supported             | Supported                        |
