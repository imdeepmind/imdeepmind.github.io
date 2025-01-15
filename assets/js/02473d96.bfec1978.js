"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[6026],{32319:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"programming-languages/javascript/concurrency-and-parallelism","title":"Concurrency and Parallelism","description":"In modern JavaScript, handling multiple tasks simultaneously is crucial for building fast, responsive applications. However, understanding the difference between concurrency and parallelism is important for developers to design systems that can efficiently manage multiple tasks. JavaScript is single-threaded but can still handle multiple operations concurrently without blocking the main thread.","source":"@site/docs/programming-languages/javascript/concurrency-and-parallelism.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/concurrency-and-parallelism","permalink":"/docs/programming-languages/javascript/concurrency-and-parallelism","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/concurrency-and-parallelism.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735631262000,"sidebarPosition":22,"frontMatter":{"sidebar_position":22},"sidebar":"tutorialSidebar","previous":{"title":"ES6 and Beyond","permalink":"/docs/programming-languages/javascript/es6"},"next":{"title":"Introduction","permalink":"/docs/programming-languages/go/introduction"}}');var a=r(74848),i=r(28453);const o={sidebar_position:22},t="Concurrency and Parallelism",c={},l=[{value:"Concurrency vs Parallelism",id:"concurrency-vs-parallelism",level:2},{value:"The Concurrency Model in JavaScript (Single-threaded with Non-blocking I/O)",id:"the-concurrency-model-in-javascript-single-threaded-with-non-blocking-io",level:2},{value:"Event Loop",id:"event-loop",level:3},{value:"Non-blocking I/O",id:"non-blocking-io",level:3},{value:"Web Workers and Service Workers",id:"web-workers-and-service-workers",level:2},{value:"Web Workers",id:"web-workers",level:3},{value:"Service Workers",id:"service-workers",level:3},{value:"Shared Memory Model and Atomics API for Parallelism",id:"shared-memory-model-and-atomics-api-for-parallelism",level:2},{value:"Shared Memory",id:"shared-memory",level:3},{value:"Atomics API",id:"atomics-api",level:3},{value:"Event-driven Concurrency: How JavaScript Handles I/O Operations",id:"event-driven-concurrency-how-javascript-handles-io-operations",level:2},{value:"Asynchronous I/O Operations",id:"asynchronous-io-operations",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"concurrency-and-parallelism",children:"Concurrency and Parallelism"})}),"\n",(0,a.jsxs)(n.p,{children:["In modern JavaScript, handling multiple tasks simultaneously is crucial for building fast, responsive applications. However, understanding the difference between ",(0,a.jsx)(n.strong,{children:"concurrency"})," and ",(0,a.jsx)(n.strong,{children:"parallelism"})," is important for developers to design systems that can efficiently manage multiple tasks. JavaScript is single-threaded but can still handle multiple operations concurrently without blocking the main thread."]}),"\n",(0,a.jsx)(n.h2,{id:"concurrency-vs-parallelism",children:"Concurrency vs Parallelism"}),"\n",(0,a.jsxs)(n.p,{children:["Before diving into JavaScript's concurrency model, it is important to distinguish between ",(0,a.jsx)(n.strong,{children:"concurrency"})," and ",(0,a.jsx)(n.strong,{children:"parallelism"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Concurrency"}),": Refers to the ability of a system to handle multiple tasks at the same time, but not necessarily executing them simultaneously. Concurrency allows tasks to make progress by switching between them in a time-sharing manner. In a single-threaded environment like JavaScript, concurrency is achieved by the event loop and asynchronous processing."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Parallelism"}),": Refers to performing multiple tasks simultaneously, typically on multiple CPU cores. In a multi-core system, parallelism can achieve true simultaneous execution of multiple tasks."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["JavaScript, due to its ",(0,a.jsx)(n.strong,{children:"single-threaded"})," nature, is primarily concerned with concurrency, not parallelism. However, it can still achieve parallelism using ",(0,a.jsx)(n.strong,{children:"Web Workers"})," or other APIs, which we'll discuss later."]}),"\n",(0,a.jsx)(n.h2,{id:"the-concurrency-model-in-javascript-single-threaded-with-non-blocking-io",children:"The Concurrency Model in JavaScript (Single-threaded with Non-blocking I/O)"}),"\n",(0,a.jsxs)(n.p,{children:["JavaScript operates in a ",(0,a.jsx)(n.strong,{children:"single-threaded"})," environment. This means that JavaScript has only one main thread that executes the code sequentially. However, JavaScript uses an ",(0,a.jsx)(n.strong,{children:"event-driven"})," model with ",(0,a.jsx)(n.strong,{children:"non-blocking I/O"})," operations, which allows it to handle multiple tasks concurrently."]}),"\n",(0,a.jsx)(n.h3,{id:"event-loop",children:"Event Loop"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"event loop"})," is at the heart of JavaScript's concurrency model. It allows JavaScript to execute asynchronous code without blocking the main thread, enabling the handling of multiple I/O operations (like network requests, file reading, etc.) concurrently."]}),"\n",(0,a.jsx)(n.p,{children:"Here\u2019s how the event loop works:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Call Stack"}),": The call stack keeps track of all the function calls that need to be executed. JavaScript executes functions on the stack one by one."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Callback Queue"}),": When asynchronous code (such as ",(0,a.jsx)(n.code,{children:"setTimeout"}),", ",(0,a.jsx)(n.code,{children:"fetch"}),", etc.) is encountered, the callback function is placed in the ",(0,a.jsx)(n.strong,{children:"callback queue"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Event Loop"}),": The event loop continuously checks the call stack. If the stack is empty, it pulls the oldest task from the callback queue and pushes it onto the call stack."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This allows JavaScript to handle asynchronous operations concurrently while executing tasks in a non-blocking manner."}),"\n",(0,a.jsx)(n.h3,{id:"non-blocking-io",children:"Non-blocking I/O"}),"\n",(0,a.jsxs)(n.p,{children:["JavaScript relies heavily on non-blocking I/O operations to avoid halting the execution of the code. When I/O operations (like fetching data or reading files) are performed, JavaScript doesn't wait for the operation to complete before moving on to the next task. Instead, it continues executing the remaining synchronous code and processes the I/O result later through callbacks, promises, or ",(0,a.jsx)(n.code,{children:"async/await"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'console.log("Start");\n\nsetTimeout(() => {\n  console.log("This is asynchronous");\n}, 2000);\n\nconsole.log("End");\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Start\nEnd\nThis is asynchronous\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, despite ",(0,a.jsx)(n.code,{children:"setTimeout"}),' introducing a delay, the script does not block and continues with "End" before logging "This is asynchronous."']}),"\n",(0,a.jsx)(n.h2,{id:"web-workers-and-service-workers",children:"Web Workers and Service Workers"}),"\n",(0,a.jsxs)(n.p,{children:["Although JavaScript is single-threaded, the ",(0,a.jsx)(n.strong,{children:"Web Workers API"})," and ",(0,a.jsx)(n.strong,{children:"Service Workers API"})," allow JavaScript to perform operations in parallel by using additional threads."]}),"\n",(0,a.jsx)(n.h3,{id:"web-workers",children:"Web Workers"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Web Workers"})," provide a way to run JavaScript in background threads, separate from the main thread. This allows parallel processing and offloading expensive computations or I/O operations without freezing the user interface."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Main Thread vs Worker Thread"}),": The main thread runs the UI and the event loop, while workers run tasks independently."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Communication"}),": Workers communicate with the main thread through a messaging system (using ",(0,a.jsx)(n.code,{children:"postMessage"})," and event listeners)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"No Direct DOM Access"}),": Workers cannot access the DOM directly, ensuring that the main thread remains responsible for UI rendering."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// main.js\nconst worker = new Worker("worker.js");\n\nworker.postMessage("Start computation");\n\nworker.onmessage = function (event) {\n  console.log("Received result from worker:", event.data);\n};\n\n// worker.js\nonmessage = function (event) {\n  if (event.data === "Start computation") {\n    let result = heavyComputation();\n    postMessage(result);\n  }\n};\n\nfunction heavyComputation() {\n  // Simulate a long-running task\n  return "Computation complete!";\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Pros of Web Workers:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Improves performance by parallelizing computation-heavy tasks."}),"\n",(0,a.jsx)(n.li,{children:"Does not block the UI thread."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"service-workers",children:"Service Workers"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Service Workers"})," are a type of Web Worker that act as an intermediary between the browser and the network, enabling offline capabilities, caching, and background data sync. Service Workers are primarily used for building Progressive Web Apps (PWAs)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"They operate separately from the main thread."}),"\n",(0,a.jsx)(n.li,{children:"Service Workers can intercept network requests and cache responses for offline access."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"shared-memory-model-and-atomics-api-for-parallelism",children:"Shared Memory Model and Atomics API for Parallelism"}),"\n",(0,a.jsxs)(n.p,{children:["JavaScript's ",(0,a.jsx)(n.strong,{children:"Shared Memory Model"})," allows multiple threads (main thread and Web Workers) to access the same memory space. To safely share memory between threads, JavaScript uses the ",(0,a.jsx)(n.strong,{children:"Atomics API"})," for atomic operations, ensuring data consistency and avoiding race conditions."]}),"\n",(0,a.jsx)(n.h3,{id:"shared-memory",children:"Shared Memory"}),"\n",(0,a.jsxs)(n.p,{children:["Shared memory allows Web Workers to access the same ",(0,a.jsx)(n.code,{children:"ArrayBuffer"}),", which can be used for complex data types such as large arrays or objects. By sharing memory, workers can exchange large amounts of data more efficiently than by using message-passing."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const sharedBuffer = new SharedArrayBuffer(1024);\nconst sharedArray = new Int32Array(sharedBuffer);\n\nconst worker = new Worker("worker.js");\nworker.postMessage(sharedBuffer);\n\nworker.onmessage = function () {\n  console.log(sharedArray[0]); // Access shared data\n};\n\n// worker.js\nonmessage = function (event) {\n  const sharedArray = new Int32Array(event.data);\n  sharedArray[0] = 42; // Modify shared data\n  postMessage("Data updated");\n};\n'})}),"\n",(0,a.jsx)(n.h3,{id:"atomics-api",children:"Atomics API"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Atomics API"})," provides atomic operations, such as ",(0,a.jsx)(n.code,{children:"Atomics.add()"}),", ",(0,a.jsx)(n.code,{children:"Atomics.store()"}),", and ",(0,a.jsx)(n.code,{children:"Atomics.load()"}),", to safely read and modify shared memory in a multi-threaded environment. These operations ensure that changes to shared memory are performed atomically, avoiding race conditions."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const sharedBuffer = new SharedArrayBuffer(1024);\nconst sharedArray = new Int32Array(sharedBuffer);\n\nAtomics.store(sharedArray, 0, 42);\nconsole.log(Atomics.load(sharedArray, 0)); // Output: 42\n"})}),"\n",(0,a.jsx)(n.h2,{id:"event-driven-concurrency-how-javascript-handles-io-operations",children:"Event-driven Concurrency: How JavaScript Handles I/O Operations"}),"\n",(0,a.jsxs)(n.p,{children:["JavaScript's concurrency model is built around ",(0,a.jsx)(n.strong,{children:"event-driven"})," programming. The event loop continuously listens for events (like user actions, network responses, etc.) and handles them asynchronously."]}),"\n",(0,a.jsx)(n.h3,{id:"asynchronous-io-operations",children:"Asynchronous I/O Operations"}),"\n",(0,a.jsx)(n.p,{children:"JavaScript handles I/O tasks asynchronously to avoid blocking the main thread. When an I/O operation is initiated (such as reading a file or making a network request), the event loop schedules the operation, allowing other tasks to run while the I/O task completes in the background."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Callbacks"}),": Traditional asynchronous mechanism where a callback function is executed once the I/O task completes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Promises"}),": A more modern approach to handling asynchronous operations, providing better readability and chaining of asynchronous tasks."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Async/Await"}),": Introduced in ES2017, ",(0,a.jsx)(n.code,{children:"async/await"})," simplifies working with promises and makes asynchronous code look synchronous."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Example with ",(0,a.jsx)(n.code,{children:"async/await"}),":"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function fetchData() {\n  const response = await fetch("https://api.example.com/data");\n  const data = await response.json();\n  console.log(data);\n}\nfetchData();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, JavaScript doesn't block while waiting for the data from the API. The event loop can continue processing other tasks, and the ",(0,a.jsx)(n.code,{children:"fetchData()"})," function will resume when the data is ready."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var s=r(96540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);