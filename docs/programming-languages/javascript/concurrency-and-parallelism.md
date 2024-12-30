---
sidebar_position: 21
---

# Concurrency and Parallelism

In modern JavaScript, handling multiple tasks simultaneously is crucial for building fast, responsive applications. However, understanding the difference between **concurrency** and **parallelism** is important for developers to design systems that can efficiently manage multiple tasks. JavaScript is single-threaded but can still handle multiple operations concurrently without blocking the main thread.

## Concurrency vs Parallelism

Before diving into JavaScript's concurrency model, it is important to distinguish between **concurrency** and **parallelism**.

- **Concurrency**: Refers to the ability of a system to handle multiple tasks at the same time, but not necessarily executing them simultaneously. Concurrency allows tasks to make progress by switching between them in a time-sharing manner. In a single-threaded environment like JavaScript, concurrency is achieved by the event loop and asynchronous processing.
- **Parallelism**: Refers to performing multiple tasks simultaneously, typically on multiple CPU cores. In a multi-core system, parallelism can achieve true simultaneous execution of multiple tasks.

JavaScript, due to its **single-threaded** nature, is primarily concerned with concurrency, not parallelism. However, it can still achieve parallelism using **Web Workers** or other APIs, which we'll discuss later.

## The Concurrency Model in JavaScript (Single-threaded with Non-blocking I/O)

JavaScript operates in a **single-threaded** environment. This means that JavaScript has only one main thread that executes the code sequentially. However, JavaScript uses an **event-driven** model with **non-blocking I/O** operations, which allows it to handle multiple tasks concurrently.

### Event Loop

The **event loop** is at the heart of JavaScript's concurrency model. It allows JavaScript to execute asynchronous code without blocking the main thread, enabling the handling of multiple I/O operations (like network requests, file reading, etc.) concurrently.

Here’s how the event loop works:

1. **Call Stack**: The call stack keeps track of all the function calls that need to be executed. JavaScript executes functions on the stack one by one.
2. **Callback Queue**: When asynchronous code (such as `setTimeout`, `fetch`, etc.) is encountered, the callback function is placed in the **callback queue**.
3. **Event Loop**: The event loop continuously checks the call stack. If the stack is empty, it pulls the oldest task from the callback queue and pushes it onto the call stack.

This allows JavaScript to handle asynchronous operations concurrently while executing tasks in a non-blocking manner.

### Non-blocking I/O

JavaScript relies heavily on non-blocking I/O operations to avoid halting the execution of the code. When I/O operations (like fetching data or reading files) are performed, JavaScript doesn't wait for the operation to complete before moving on to the next task. Instead, it continues executing the remaining synchronous code and processes the I/O result later through callbacks, promises, or `async/await`.

**Example:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This is asynchronous");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
This is asynchronous
```

In this example, despite `setTimeout` introducing a delay, the script does not block and continues with "End" before logging "This is asynchronous."

## Web Workers and Service Workers

Although JavaScript is single-threaded, the **Web Workers API** and **Service Workers API** allow JavaScript to perform operations in parallel by using additional threads.

### Web Workers

**Web Workers** provide a way to run JavaScript in background threads, separate from the main thread. This allows parallel processing and offloading expensive computations or I/O operations without freezing the user interface.

- **Main Thread vs Worker Thread**: The main thread runs the UI and the event loop, while workers run tasks independently.
- **Communication**: Workers communicate with the main thread through a messaging system (using `postMessage` and event listeners).
- **No Direct DOM Access**: Workers cannot access the DOM directly, ensuring that the main thread remains responsible for UI rendering.

**Example:**

```javascript
// main.js
const worker = new Worker("worker.js");

worker.postMessage("Start computation");

worker.onmessage = function (event) {
  console.log("Received result from worker:", event.data);
};

// worker.js
onmessage = function (event) {
  if (event.data === "Start computation") {
    let result = heavyComputation();
    postMessage(result);
  }
};

function heavyComputation() {
  // Simulate a long-running task
  return "Computation complete!";
}
```

**Pros of Web Workers:**

- Improves performance by parallelizing computation-heavy tasks.
- Does not block the UI thread.

### Service Workers

**Service Workers** are a type of Web Worker that act as an intermediary between the browser and the network, enabling offline capabilities, caching, and background data sync. Service Workers are primarily used for building Progressive Web Apps (PWAs).

- They operate separately from the main thread.
- Service Workers can intercept network requests and cache responses for offline access.

## Shared Memory Model and Atomics API for Parallelism

JavaScript's **Shared Memory Model** allows multiple threads (main thread and Web Workers) to access the same memory space. To safely share memory between threads, JavaScript uses the **Atomics API** for atomic operations, ensuring data consistency and avoiding race conditions.

### Shared Memory

Shared memory allows Web Workers to access the same `ArrayBuffer`, which can be used for complex data types such as large arrays or objects. By sharing memory, workers can exchange large amounts of data more efficiently than by using message-passing.

**Example:**

```javascript
const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

const worker = new Worker("worker.js");
worker.postMessage(sharedBuffer);

worker.onmessage = function () {
  console.log(sharedArray[0]); // Access shared data
};

// worker.js
onmessage = function (event) {
  const sharedArray = new Int32Array(event.data);
  sharedArray[0] = 42; // Modify shared data
  postMessage("Data updated");
};
```

### Atomics API

The **Atomics API** provides atomic operations, such as `Atomics.add()`, `Atomics.store()`, and `Atomics.load()`, to safely read and modify shared memory in a multi-threaded environment. These operations ensure that changes to shared memory are performed atomically, avoiding race conditions.

**Example:**

```javascript
const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

Atomics.store(sharedArray, 0, 42);
console.log(Atomics.load(sharedArray, 0)); // Output: 42
```

## Event-driven Concurrency: How JavaScript Handles I/O Operations

JavaScript's concurrency model is built around **event-driven** programming. The event loop continuously listens for events (like user actions, network responses, etc.) and handles them asynchronously.

### Asynchronous I/O Operations

JavaScript handles I/O tasks asynchronously to avoid blocking the main thread. When an I/O operation is initiated (such as reading a file or making a network request), the event loop schedules the operation, allowing other tasks to run while the I/O task completes in the background.

- **Callbacks**: Traditional asynchronous mechanism where a callback function is executed once the I/O task completes.
- **Promises**: A more modern approach to handling asynchronous operations, providing better readability and chaining of asynchronous tasks.
- **Async/Await**: Introduced in ES2017, `async/await` simplifies working with promises and makes asynchronous code look synchronous.

**Example with `async/await`:**

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
fetchData();
```

In this example, JavaScript doesn't block while waiting for the data from the API. The event loop can continue processing other tasks, and the `fetchData()` function will resume when the data is ready.
