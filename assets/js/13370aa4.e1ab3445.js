"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[6795],{94355:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"programming-languages/javascript/asynchronous","title":"Asynchronous Programming","description":"Asynchronous programming in JavaScript allows you to perform tasks like I/O operations, network requests, and file reading without blocking the execution of the rest of the program. JavaScript uses callbacks, promises, and async/await to handle asynchronous code. Let\u2019s explore each concept in detail:","source":"@site/docs/programming-languages/javascript/asynchronous.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/asynchronous","permalink":"/docs/programming-languages/javascript/asynchronous","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/asynchronous.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735588931000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Functions","permalink":"/docs/programming-languages/javascript/functions"},"next":{"title":"Conditions and Loops","permalink":"/docs/programming-languages/javascript/conditions-loops"}}');var a=s(74848),o=s(28453);const i={sidebar_position:6},l="Asynchronous Programming",c={},t=[{value:"Callbacks",id:"callbacks",level:2},{value:"How Callbacks Work",id:"how-callbacks-work",level:3},{value:"Example",id:"example",level:3},{value:"Callback Hell (Pyramid of Doom)",id:"callback-hell-pyramid-of-doom",level:3},{value:"Promises",id:"promises",level:2},{value:"How Promises Work",id:"how-promises-work",level:3},{value:"Example",id:"example-1",level:3},{value:"Promise Chaining",id:"promise-chaining",level:3},{value:"Promise.all() and Promise.race():",id:"promiseall-and-promiserace",level:3},{value:"Async/Await",id:"asyncawait",level:2},{value:"How Async/Await Works",id:"how-asyncawait-works",level:3},{value:"Example",id:"example-2",level:3},{value:"Handling Multiple Asynchronous Operations with <code>async/await</code>:",id:"handling-multiple-asynchronous-operations-with-asyncawait",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"asynchronous-programming",children:"Asynchronous Programming"})}),"\n",(0,a.jsxs)(n.p,{children:["Asynchronous programming in JavaScript allows you to perform tasks like I/O operations, network requests, and file reading without blocking the execution of the rest of the program. JavaScript uses ",(0,a.jsx)(n.strong,{children:"callbacks"}),", ",(0,a.jsx)(n.strong,{children:"promises"}),", and ",(0,a.jsx)(n.strong,{children:"async/await"})," to handle asynchronous code. Let\u2019s explore each concept in detail:"]}),"\n",(0,a.jsx)(n.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"callback"})," is a function that is passed as an argument to another function and is executed once the operation completes. In asynchronous programming, callbacks are used to handle results or errors after an asynchronous operation finishes."]}),"\n",(0,a.jsx)(n.h3,{id:"how-callbacks-work",children:"How Callbacks Work"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The function performing an asynchronous operation takes a callback function as an argument."}),"\n",(0,a.jsx)(n.li,{children:"When the operation finishes, the callback is executed with the result or error passed to it."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'function fetchData(callback) {\n  setTimeout(() => {\n    const data = "Data from server";\n    callback(null, data); // Call the callback with data\n  }, 1000);\n}\n\nfunction handleData(error, data) {\n  if (error) {\n    console.error("Error:", error);\n  } else {\n    console.log("Received:", data);\n  }\n}\n\n// Call the asynchronous function and pass the callback\nfetchData(handleData);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fetchData"})," simulates an asynchronous task (using ",(0,a.jsx)(n.code,{children:"setTimeout"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"handleData"})," is the callback function that processes the result after the operation completes."]}),"\n",(0,a.jsxs)(n.li,{children:["If the operation succeeds, the callback is called with ",(0,a.jsx)(n.code,{children:"null"})," as the first argument (indicating no error) and the result (",(0,a.jsx)(n.code,{children:"data"}),") as the second argument."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"callback-hell-pyramid-of-doom",children:"Callback Hell (Pyramid of Doom)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A common issue with callbacks is ",(0,a.jsx)(n.strong,{children:"callback hell"}),", where multiple nested callbacks become hard to manage and read, often leading to deeply indented, unreadable code."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example of Callback Hell:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'fs.readFile("file1.txt", "utf-8", (err, data1) => {\n  if (err) throw err;\n  fs.readFile("file2.txt", "utf-8", (err, data2) => {\n    if (err) throw err;\n    fs.readFile("file3.txt", "utf-8", (err, data3) => {\n      if (err) throw err;\n      console.log("Data from all files:", data1, data2, data3);\n    });\n  });\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This is difficult to manage, so better solutions like ",(0,a.jsx)(n.strong,{children:"Promises"})," and ",(0,a.jsx)(n.strong,{children:"async/await"})," were introduced."]}),"\n",(0,a.jsx)(n.h2,{id:"promises",children:"Promises"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"promise"})," is an object representing the eventual completion or failure of an asynchronous operation. A promise allows you to associate handlers with asynchronous success (",(0,a.jsx)(n.code,{children:".then()"}),") or failure (",(0,a.jsx)(n.code,{children:".catch()"}),"), which makes the code easier to read and manage compared to callbacks."]}),"\n",(0,a.jsx)(n.h3,{id:"how-promises-work",children:"How Promises Work"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A promise has three states:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Pending"}),": The initial state, before the asynchronous operation completes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Resolved (Fulfilled)"}),": The asynchronous operation completed successfully."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rejected"}),": The asynchronous operation failed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Promises are created using the ",(0,a.jsx)(n.code,{children:"new Promise()"})," constructor. You can chain ",(0,a.jsx)(n.code,{children:".then()"})," to handle success and ",(0,a.jsx)(n.code,{children:".catch()"})," for error handling."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'let fetchDataPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const data = "Data from server";\n    const success = true; // Change this to false to simulate failure\n    if (success) {\n      resolve(data); // Resolve the promise with data\n    } else {\n      reject("Error fetching data"); // Reject the promise with an error\n    }\n  }, 1000);\n});\n\nfetchDataPromise\n  .then((data) => {\n    console.log("Received:", data);\n  })\n  .catch((error) => {\n    console.error("Error:", error);\n  });\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The promise is created with a function that takes ",(0,a.jsx)(n.code,{children:"resolve"})," and ",(0,a.jsx)(n.code,{children:"reject"})," as arguments."]}),"\n",(0,a.jsxs)(n.li,{children:["If the operation is successful, the promise is resolved with ",(0,a.jsx)(n.code,{children:"resolve()"}),", and if there is an error, it is rejected with ",(0,a.jsx)(n.code,{children:"reject()"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:".then()"})," method handles the success case, and ",(0,a.jsx)(n.code,{children:".catch()"})," handles the failure case."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"promise-chaining",children:"Promise Chaining"}),"\n",(0,a.jsxs)(n.p,{children:["Promises allow chaining of multiple ",(0,a.jsx)(n.code,{children:".then()"})," handlers, which can be used to perform multiple asynchronous operations sequentially."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'fetchDataPromise\n  .then((data) => {\n    console.log("First step:", data);\n    return "Step 2 completed";\n  })\n  .then((message) => {\n    console.log("Second step:", message);\n  })\n  .catch((error) => {\n    console.error("Error:", error);\n  });\n'})}),"\n",(0,a.jsx)(n.h3,{id:"promiseall-and-promiserace",children:"Promise.all() and Promise.race():"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Promise.all()"})," is used when you want to wait for multiple promises to resolve before continuing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'Promise.all([promise1, promise2, promise3])\n  .then((results) => {\n    console.log(results); // Array of resolved values\n  })\n  .catch((error) => {\n    console.error("Error in one of the promises:", error);\n  });\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Promise.race()"})," resolves or rejects as soon as the first promise resolves or rejects."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'Promise.race([promise1, promise2, promise3])\n  .then((result) => {\n    console.log("First resolved:", result);\n  })\n  .catch((error) => {\n    console.error("First rejected:", error);\n  });\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"asyncawait",children:"Async/Await"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"async"})})," and ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"await"})})," are newer JavaScript keywords that simplify working with asynchronous code. They are built on top of promises and provide a more synchronous-like structure, making asynchronous code easier to read and maintain."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"async"})}),": Declares a function that always returns a promise. If a value is returned from an ",(0,a.jsx)(n.code,{children:"async"})," function, it is automatically wrapped in a promise."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"await"})}),": Pauses the execution of the ",(0,a.jsx)(n.code,{children:"async"})," function and waits for the promise to resolve (or reject) before continuing. It can only be used inside an ",(0,a.jsx)(n.code,{children:"async"})," function."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"how-asyncawait-works",children:"How Async/Await Works"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.code,{children:"async"})," to declare a function that handles asynchronous code."]}),"\n",(0,a.jsxs)(n.li,{children:["Inside the ",(0,a.jsx)(n.code,{children:"async"})," function, use ",(0,a.jsx)(n.code,{children:"await"})," to pause execution until the promise resolves."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function fetchData() {\n  try {\n    let data = await new Promise((resolve, reject) => {\n      setTimeout(() => resolve("Data from server"), 1000);\n    });\n    console.log("Received:", data);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}\n\nfetchData();\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The function ",(0,a.jsx)(n.code,{children:"fetchData"})," is declared as ",(0,a.jsx)(n.code,{children:"async"}),", meaning it will always return a promise."]}),"\n",(0,a.jsxs)(n.li,{children:["Inside the ",(0,a.jsx)(n.code,{children:"async"})," function, ",(0,a.jsx)(n.code,{children:"await"})," is used to pause the execution of the function until the promise resolves."]}),"\n",(0,a.jsxs)(n.li,{children:["If the promise is resolved, the data is logged. If there is an error, it is caught by the ",(0,a.jsx)(n.code,{children:"catch"})," block."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"handling-multiple-asynchronous-operations-with-asyncawait",children:["Handling Multiple Asynchronous Operations with ",(0,a.jsx)(n.code,{children:"async/await"}),":"]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"async/await"})," for sequential and parallel asynchronous operations."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Sequential Execution:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function sequentialTasks() {\n  let result1 = await fetchDataFromServer1();\n  let result2 = await fetchDataFromServer2();\n  console.log(result1, result2);\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Parallel Execution (Using ",(0,a.jsx)(n.code,{children:"Promise.all"}),"):"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function parallelTasks() {\n  let [result1, result2] = await Promise.all([\n    fetchDataFromServer1(),\n    fetchDataFromServer2(),\n  ]);\n  console.log(result1, result2);\n}\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(96540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);