---
sidebar_position: 8
---

# Asynchronous Programming

Asynchronous programming in JavaScript allows you to perform tasks like I/O operations, network requests, and file reading without blocking the execution of the rest of the program. JavaScript uses **callbacks**, **promises**, and **async/await** to handle asynchronous code. Let’s explore each concept in detail:

## Callbacks

A **callback** is a function that is passed as an argument to another function and is executed once the operation completes. In asynchronous programming, callbacks are used to handle results or errors after an asynchronous operation finishes.

### How Callbacks Work

- The function performing an asynchronous operation takes a callback function as an argument.
- When the operation finishes, the callback is executed with the result or error passed to it.

### Example

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data from server";
    callback(null, data); // Call the callback with data
  }, 1000);
}

function handleData(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Received:", data);
  }
}

// Call the asynchronous function and pass the callback
fetchData(handleData);
```

**Explanation:**

- `fetchData` simulates an asynchronous task (using `setTimeout`).
- `handleData` is the callback function that processes the result after the operation completes.
- If the operation succeeds, the callback is called with `null` as the first argument (indicating no error) and the result (`data`) as the second argument.

### Callback Hell (Pyramid of Doom)

- A common issue with callbacks is **callback hell**, where multiple nested callbacks become hard to manage and read, often leading to deeply indented, unreadable code.

**Example of Callback Hell:**

```javascript
fs.readFile("file1.txt", "utf-8", (err, data1) => {
  if (err) throw err;
  fs.readFile("file2.txt", "utf-8", (err, data2) => {
    if (err) throw err;
    fs.readFile("file3.txt", "utf-8", (err, data3) => {
      if (err) throw err;
      console.log("Data from all files:", data1, data2, data3);
    });
  });
});
```

This is difficult to manage, so better solutions like **Promises** and **async/await** were introduced.

## Promises

A **promise** is an object representing the eventual completion or failure of an asynchronous operation. A promise allows you to associate handlers with asynchronous success (`.then()`) or failure (`.catch()`), which makes the code easier to read and manage compared to callbacks.

### How Promises Work

- A promise has three states:

  1. **Pending**: The initial state, before the asynchronous operation completes.
  2. **Resolved (Fulfilled)**: The asynchronous operation completed successfully.
  3. **Rejected**: The asynchronous operation failed.

- Promises are created using the `new Promise()` constructor. You can chain `.then()` to handle success and `.catch()` for error handling.

### Example

```javascript
let fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Data from server";
    const success = true; // Change this to false to simulate failure
    if (success) {
      resolve(data); // Resolve the promise with data
    } else {
      reject("Error fetching data"); // Reject the promise with an error
    }
  }, 1000);
});

fetchDataPromise
  .then((data) => {
    console.log("Received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

**Explanation:**

- The promise is created with a function that takes `resolve` and `reject` as arguments.
- If the operation is successful, the promise is resolved with `resolve()`, and if there is an error, it is rejected with `reject()`.
- The `.then()` method handles the success case, and `.catch()` handles the failure case.

### Promise Chaining

Promises allow chaining of multiple `.then()` handlers, which can be used to perform multiple asynchronous operations sequentially.

```javascript
fetchDataPromise
  .then((data) => {
    console.log("First step:", data);
    return "Step 2 completed";
  })
  .then((message) => {
    console.log("Second step:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Promise.all() and Promise.race():

- `Promise.all()` is used when you want to wait for multiple promises to resolve before continuing.

  ```javascript
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log(results); // Array of resolved values
    })
    .catch((error) => {
      console.error("Error in one of the promises:", error);
    });
  ```

- `Promise.race()` resolves or rejects as soon as the first promise resolves or rejects.

  ```javascript
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log("First resolved:", result);
    })
    .catch((error) => {
      console.error("First rejected:", error);
    });
  ```

## Async/Await

**`async`** and **`await`** are newer JavaScript keywords that simplify working with asynchronous code. They are built on top of promises and provide a more synchronous-like structure, making asynchronous code easier to read and maintain.

- **`async`**: Declares a function that always returns a promise. If a value is returned from an `async` function, it is automatically wrapped in a promise.
- **`await`**: Pauses the execution of the `async` function and waits for the promise to resolve (or reject) before continuing. It can only be used inside an `async` function.

### How Async/Await Works

- Use `async` to declare a function that handles asynchronous code.
- Inside the `async` function, use `await` to pause execution until the promise resolves.

### Example

```javascript
async function fetchData() {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data from server"), 1000);
    });
    console.log("Received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

**Explanation:**

- The function `fetchData` is declared as `async`, meaning it will always return a promise.
- Inside the `async` function, `await` is used to pause the execution of the function until the promise resolves.
- If the promise is resolved, the data is logged. If there is an error, it is caught by the `catch` block.

### Handling Multiple Asynchronous Operations with `async/await`:

You can use `async/await` for sequential and parallel asynchronous operations.

- **Sequential Execution:**

  ```javascript
  async function sequentialTasks() {
    let result1 = await fetchDataFromServer1();
    let result2 = await fetchDataFromServer2();
    console.log(result1, result2);
  }
  ```

- **Parallel Execution (Using `Promise.all`):**

  ```javascript
  async function parallelTasks() {
    let [result1, result2] = await Promise.all([
      fetchDataFromServer1(),
      fetchDataFromServer2(),
    ]);
    console.log(result1, result2);
  }
  ```
