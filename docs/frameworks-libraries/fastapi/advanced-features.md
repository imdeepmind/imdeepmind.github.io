---
sidebar_position: 7
---

# Advanced FastAPI Features

FastAPI offers powerful features beyond basic CRUD APIs, including **background tasks, file handling, WebSockets, middleware, cookies/headers, and custom responses**. Below is a **detailed breakdown** of each.

## Background Tasks (`BackgroundTasks`)

**Use Case**: Run non-blocking operations **after** sending a response (e.g., sending emails, processing data).

### How It Works

- Tasks run **after the response is sent**.
- Ideal for **non-critical** operations (don’t block the request).

### Example: Sending an Email in Background

```python
from fastapi import BackgroundTasks, FastAPI

app = FastAPI()

def send_email(email: str, message: str):
    print(f"Sending email to {email}: {message}")  # Simulate email send

@app.post("/notify")
async def notify_user(
    email: str,
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_email, email, "Hello, user!")
    return {"message": "Notification sent in background"}
```

**Key Points**:

- Use `BackgroundTasks` as a **dependency**.
- Tasks run **even if the request fails** (unless the server crashes).

## Static Files & File Uploads (`File`, `UploadFile`)

### (A) Serving Static Files

```python
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
```

- Files in `./static/` are served at `/static/`.

### (B) Handling File Uploads

```python
from fastapi import UploadFile, File

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    return {
        "filename": file.filename,
        "size": len(contents),
    }
```

**Features**:

- `UploadFile` uses **async I/O** (better for large files).
- Automatically handles **multipart/form-data**.

## WebSockets (`@app.websocket("/ws")`)

**Use Case**: Real-time communication (chat, live updates).

### Basic WebSocket Example

```python
from fastapi import WebSocket

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Echo: {data}")
```

**Workflow**:

1. Client connects via `ws://localhost:8000/ws`.
2. Server **accepts** the connection.
3. Messages are **sent/received** asynchronously.

### Handling Multiple Clients

```python
from fastapi import WebSocket, WebSocketDisconnect

class ConnectionManager:
    def __init__(self):
        self.connections = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.append(websocket)

    async def broadcast(self, message: str):
        for connection in self.connections:
            await connection.send_text(message)

manager = ConnectionManager()

@app.websocket("/chat")
async def chat(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(f"User said: {data}")
    except WebSocketDisconnect:
        manager.connections.remove(websocket)
```

## Middleware (`app.add_middleware`)

**Middleware** intercepts **requests/responses** (e.g., logging, CORS, auth).

### Built-in Middleware Example (CORS)

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains (adjust in production!)
    allow_methods=["GET", "POST"],
)
```

### Custom Middleware (Logging)

```python
from fastapi import Request

@app.middleware("http")
async def log_requests(request: Request, call_next):
    print(f"Incoming request: {request.url}")
    response = await call_next(request)
    print(f"Response status: {response.status_code}")
    return response
```

## Custom Middleware (Logging, Error Handling)

### (A) Logging Middleware

```python
import time

@app.middleware("http")
async def add_process_time(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```

### (B) Error Handling Middleware

```python
from fastapi.responses import JSONResponse

@app.middleware("http")
async def handle_errors(request: Request, call_next):
    try:
        return await call_next(request)
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)},
        )
```

## Handling Cookies & Headers

### (A) Setting Cookies

```python
from fastapi import Response

@app.get("/set-cookie")
def set_cookie(response: Response):
    response.set_cookie(key="user", value="fake-user")
    return {"message": "Cookie set"}
```

### (B) Reading Headers

```python
from fastapi import Header

@app.get("/headers")
def read_headers(user_agent: str = Header(None)):
    return {"User-Agent": user_agent}
```

## Response Headers & Custom Responses

### (A) Custom Headers

```python
from fastapi.responses import JSONResponse

@app.get("/custom-headers")
def custom_headers():
    content = {"message": "Hello"}
    headers = {"X-Custom-Header": "FastAPI"}
    return JSONResponse(content=content, headers=headers)
```

### (B) Redirect Responses

```python
from fastapi.responses import RedirectResponse

@app.get("/redirect")
def redirect():
    return RedirectResponse(url="https://fastapi.tiangolo.com")
```

### (C) File Responses

```python
from fastapi.responses import FileResponse

@app.get("/download")
def download_file():
    return FileResponse("large_file.zip", filename="downloaded.zip")
```

## Summary Table

| Feature              | Use Case                         | Key Functionality                   |
| -------------------- | -------------------------------- | ----------------------------------- |
| **Background Tasks** | Async post-response ops          | `BackgroundTasks.add_task()`        |
| **Static Files**     | Serve CSS/JS/images              | `StaticFiles(directory="static")`   |
| **File Uploads**     | Handle user uploads              | `UploadFile`, `File(...)`           |
| **WebSockets**       | Real-time communication          | `@app.websocket`, `WebSocket`       |
| **Middleware**       | Global request/response handling | `app.add_middleware()`              |
| **Cookies/Headers**  | Read/write HTTP metadata         | `Response.set_cookie()`, `Header()` |
| **Custom Responses** | Non-JSON responses               | `JSONResponse`, `RedirectResponse`  |
