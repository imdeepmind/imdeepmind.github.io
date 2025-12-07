---
sidebar_position: 10
---

# Deployment & Production Setup

Deploying FastAPI in production requires **performance tuning, security, and scalability**. Below is a **detailed breakdown** of deployment strategies, Dockerization, cloud platforms, HTTPS, and monitoring.

## Deploying with Uvicorn + Gunicorn (Production)

FastAPI runs on **ASGI** servers. For production:

- **Uvicorn** (ASGI server for FastAPI)
- **Gunicorn** (process manager for Uvicorn workers)

### Installation

```bash
pip install uvicorn gunicorn
```

### Run FastAPI with Gunicorn

```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
```

| Flag                               | Description                               |
| ---------------------------------- | ----------------------------------------- |
| `-w 4`                             | 4 worker processes (adjust per CPU cores) |
| `-k uvicorn.workers.UvicornWorker` | Use Uvicorn workers                       |

### Recommended Settings

```bash
gunicorn \
  --workers 4 \
  --worker-class uvicorn.workers.UvicornWorker \
  --bind 0.0.0.0:80 \
  --timeout 120 \
  --log-level info \
  main:app
```

**Best Practices**:

- Use **2x CPU cores + 1** for worker count.
- Set `--timeout` > FastAPI’s expected response time.

## Dockerizing FastAPI Apps (`Dockerfile`, `docker-compose`)

### (A) Basic `Dockerfile`

```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "-k", "uvicorn.workers.UvicornWorker", "main:app", "--bind", "0.0.0.0:80"]
```

### (B) Optimized Multi-Stage `Dockerfile`

```dockerfile
# Build stage
FROM python:3.9 as builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Runtime stage
FROM python:3.9-slim

WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .

ENV PATH=/root/.local/bin:$PATH
CMD ["gunicorn", "-k", "uvicorn.workers.UvicornWorker", "main:app"]
```

### (C) `docker-compose.yml` (with PostgreSQL)

```yaml
version: "3.8"

services:
  app:
    build: .
    ports:
      - "80:80"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb

  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Deploying to Cloud Platforms

### (A) AWS (EC2, ECS, EKS)

- **EC2**: Manual deployment (Gunicorn + Nginx)
- **ECS**: Dockerized deployment (Fargate)
- **EKS**: Kubernetes for scaling

### (B) GCP (Compute Engine, Cloud Run)

- **Compute Engine**: Similar to AWS EC2
- **Cloud Run**: Serverless containers (auto-scaling)

### (C) Azure (App Service, AKS)

- **App Service**: Managed containers
- **AKS**: Kubernetes on Azure

## Serverless Deployment (AWS Lambda, Cloud Run)

### (A) AWS Lambda (Mangum Adapter)

```python
from mangum import Mangum
from fastapi import FastAPI

app = FastAPI()
handler = Mangum(app)
```

**Deploy with**:

- AWS SAM
- Serverless Framework

### (B) Google Cloud Run

```bash
gcloud builds submit --tag gcr.io/my-project/fastapi-app
gcloud run deploy --image gcr.io/my-project/fastapi-app --platform managed
```

## VPS Deployment (DigitalOcean, Linode)

### Steps

1. Create a **Droplet** (Ubuntu 20.04)
2. Install:

   ```bash
   sudo apt update && sudo apt install -y docker-compose nginx
   ```

3. Deploy with `docker-compose up -d`
4. Configure Nginx as reverse proxy:

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:8000;
       }
   }
   ```

## HTTPS & Security Headers

### (A) HTTPS with Let’s Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### (B) Security Headers in FastAPI

```python
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app.add_middleware(HTTPSRedirectMiddleware)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=["yourdomain.com"])
```

## Monitoring & Logging

### (A) Prometheus + Grafana

```python
from prometheus_fastapi_instrumentator import Instrumentator

Instrumentator().instrument(app).expose(app)
```

- **Grafana Dashboard**: Visualize metrics

### (B) ELK Stack (Logging)

- **Elasticsearch**: Log storage
- **Logstash**: Log processing
- **Kibana**: Log visualization

### (C) Sentry (Error Tracking)

```python
import sentry_sdk

sentry_sdk.init(dsn="your-dsn")
```

## Summary Table

| Deployment Method      | Best For                  | Scalability  |
| ---------------------- | ------------------------- | ------------ |
| **Gunicorn + Uvicorn** | Dedicated servers         | Vertical     |
| **Docker**             | Consistent environments   | Horizontal   |
| **AWS Lambda**         | Event-driven apps         | Auto-scaling |
| **Cloud Run**          | Serverless containers     | Auto-scaling |
| **Kubernetes**         | Large-scale microservices | High         |

## Best Practices Checklist

1. **Always use HTTPS** (Let’s Encrypt)
2. **Set security headers** (CSP, HSTS)
3. **Monitor metrics** (Prometheus)
4. **Centralize logs** (ELK)
5. **Automate deployments** (CI/CD)
