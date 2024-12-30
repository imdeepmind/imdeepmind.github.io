---
sidebar_position: 11
---

# Microtask Queue, Macrotask Queue, and Rendering Queue

JavaScript uses **queues** to manage the execution of asynchronous tasks and UI updates, ensuring that tasks are executed in the right order and at the right time. The **Microtask Queue**, **Macrotask Queue**, and **Rendering Queue** are critical components that work together to maintain performance and responsiveness in JavaScript applications. Understanding these concepts is essential for optimizing task scheduling and avoiding common pitfalls like UI jank or delayed task execution.

## Microtask Queue

### What is the Microtask Queue?

The **Microtask Queue** is a queue that holds **microtasks**, which are tasks that need to be executed immediately after the current task finishes but before any macrotasks or rendering tasks are processed. Microtasks have the highest priority in JavaScript's task scheduling system.

### Characteristics of Microtask Queue

1. **Execution Timing:**

   - Microtasks are executed right after the current synchronous code (Call Stack) finishes, before any macrotasks are processed.

2. **Higher Priority:**

   - Microtasks have a higher priority than macrotasks, meaning they are always processed first.

3. **Examples of Microtasks:**

   - **Promise callbacks** (`.then()`, `.catch()`, `.finally()`)
   - **`queueMicrotask()`** function
   - **MutationObserver** callbacks

4. **Execution Order:**
   - The Event Loop processes all pending microtasks in the Microtask Queue before moving on to macrotasks or rendering tasks.

### Example Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: Timeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Microtask: Promise 1");
  })
  .then(() => {
    console.log("Microtask: Promise 2");
  });

console.log("End");
```

### Execution Flow

1. Synchronous tasks (`console.log`) are executed first: `Start` and `End`.
2. The promise is resolved, and its `.then()` handlers are added to the Microtask Queue.
3. The `setTimeout` callback is added to the Macrotask Queue.
4. Microtasks are processed:
   - `Microtask: Promise 1` is logged.
   - `Microtask: Promise 2` is logged.
5. Finally, the macrotask from `setTimeout` is executed: `Macrotask: Timeout`.

### Output

```
Start
End
Microtask: Promise 1
Microtask: Promise 2
Macrotask: Timeout
```

## Macrotask Queue

### What is the Macrotask Queue?

The **Macrotask Queue** (or Event Queue) is a queue that holds **macrotasks**, which are tasks that are executed after all microtasks from the Microtask Queue are completed. Macrotasks include operations that are scheduled to run at a later time.

### Characteristics of Macrotask Queue

1. **Execution Timing:**

   - Macrotasks are executed after the current Call Stack and all pending microtasks have been processed.

2. **Lower Priority:**

   - Macrotasks have lower priority than microtasks, meaning they are executed only after all microtasks are completed.

3. **Examples of Macrotasks:**

   - **Timers** (`setTimeout()`, `setInterval()`)
   - **I/O events** (like network requests or file operations)
   - **UI events** (e.g., clicks, scrolls, etc.)
   - **MessageChannel** tasks

4. **Execution Order:**
   - The Event Loop processes macrotasks one at a time. After executing one macrotask, it checks the Microtask Queue again before moving to the next macrotask.

### Example Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1: Timeout");
}, 0);

setTimeout(() => {
  console.log("Macrotask 2: Timeout");
}, 0);

console.log("End");
```

### Execution Flow

1. Synchronous tasks (`console.log`) are executed first: `Start` and `End`.
2. Both `setTimeout` callbacks are added to the Macrotask Queue.
3. Macrotasks are executed in the order they were added:
   - `Macrotask 1: Timeout` is logged.
   - `Macrotask 2: Timeout` is logged.

### Output

```
Start
End
Macrotask 1: Timeout
Macrotask 2: Timeout
```

## Rendering Queue

### What is the Rendering Queue?

The **Rendering Queue** is responsible for managing tasks that involve **rendering** updates to the user interface (UI). This includes tasks like recalculating layouts, painting elements, and compositing layers in the browser.

### Characteristics of Rendering Queue

1. **UI Updates:**

   - Tasks in the Rendering Queue are triggered by changes to the DOM or CSS that require visual updates.

2. **Execution Timing:**

   - The Rendering Queue is processed after the current task, all pending microtasks, and macrotasks have been executed.

3. **Frame Rate and Rendering Cycle:**

   - The browser typically processes the Rendering Queue during the **rendering phase** of the Event Loop, aiming for a frame rate of 60 FPS (frames per second). This gives approximately 16.67 milliseconds for each frame to execute tasks and render updates.

4. **`requestAnimationFrame`:**

   - The **`requestAnimationFrame()`** function is used to schedule tasks in sync with the browser's rendering cycle. It allows developers to create smooth animations and perform tasks just before the next frame is rendered.

5. **Avoiding UI Jank:**
   - If the Rendering Queue is delayed due to long-running tasks or excessive microtasks/macrotasks, it can result in UI jank, where the interface becomes unresponsive or animations stutter.

### Example Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

requestAnimationFrame(() => {
  console.log("Rendering Task: Animation Frame");
});

console.log("End");
```

### Execution Flow

1. Synchronous tasks (`console.log`) are executed first: `Start` and `End`.
2. The promise is resolved, and its `.then()` handler is added to the Microtask Queue.
3. The `setTimeout` callback is added to the Macrotask Queue.
4. Microtasks are processed:
   - `Microtask: Promise` is logged.
5. The macrotask from `setTimeout` is executed:
   - `Macrotask: Timeout` is logged.
6. Finally, the rendering task from `requestAnimationFrame` is executed:
   - `Rendering Task: Animation Frame` is logged.

### Output:

```
Start
End
Microtask: Promise
Macrotask: Timeout
Rendering Task: Animation Frame
```

## Interaction Between the Queues

The **Microtask Queue**, **Macrotask Queue**, and **Rendering Queue** work together with the Event Loop to manage task execution and rendering in a JavaScript application. Here’s how they interact:

1. **Call Stack Execution:**

   - The Event Loop starts by executing all synchronous tasks in the Call Stack.

2. **Microtask Queue:**

   - After the Call Stack is empty, the Event Loop processes all pending microtasks from the Microtask Queue.

3. **Rendering Queue:**

   - If there are DOM or CSS changes, the Rendering Queue is processed during the rendering phase of the Event Loop (just before rendering the next frame).

4. **Macrotask Queue:**
   - Finally, the Event Loop processes one macrotask from the Macrotask Queue before checking the Microtask Queue again.

## Key Takeaways

- **Microtask Queue:**

  - Handles high-priority tasks like promises and `queueMicrotask()`.
  - Always processed before macrotasks.

- **Macrotask Queue:**

  - Handles tasks like timers, I/O events, and UI interactions.
  - Processed after microtasks but before rendering.

- **Rendering Queue:**

  - Handles DOM and CSS changes that require reflows or repaints.
  - Processed after microtasks and macrotasks, during the rendering phase of the Event Loop.

- **Optimizing Performance:**
  - Minimize DOM and CSS updates to avoid overloading the Rendering Queue.
  - Use `requestAnimationFrame()` for animations to sync with the rendering cycle.
  - Avoid blocking the Event Loop with long-running synchronous code.
